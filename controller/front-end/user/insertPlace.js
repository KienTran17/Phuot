const getArrayUpload = require('../../../upload');
const {getUserByUsername} = require('../../../model/user');
const {addPlace} = require('../../../model/place');
const {insertImage} = require('../../../model/image');
const { verify } = require('../../../config/jwt');

const todaysDate = new Date();

function convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split('');
    var ddChars = dd.split('');

    return yyyy + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + (ddChars[1] ? dd : "0" + ddChars[0]);
}

module.exports = (req, res) => {
    const token = req.cookies['tk']
    //res.send(token)
    verify(token)
        .then((r) => {
            getArrayUpload("image")(req, res, async function (err) {
                let { lat, lng, txtNamePlace, cbTreckking, camping, seeView, cbClaimb, txtAddress, cityId, provinceId, txtDesPlace } = req.body;
                if (err) {
                    res.send('Loi' + err);
                } else {
                    if (!cbTreckking) cbTreckking = false; else cbTreckking = true;
                    if (!camping) camping = false; else camping = true;
                    if (!seeView) seeView = false; else seeView = true;
                    if (!cbClaimb) seeView = false; else cbClaimb = true;
                     await getUserByUsername(r.username).then(async user => {
                         await addPlace(txtNamePlace, txtAddress, 1, cityId, provinceId, lat, lng, txtDesPlace,
                            todaysDate, user.rows[0].id, cbTreckking, camping, seeView, cbClaimb)
                            .then(async idPlace => {
                                const arrfile = req.files;
                                await arrfile.forEach(async e => {
                                    await insertImage(txtNamePlace, 'upload/' + e.filename, 0, 0, user.rows[0].id, idPlace.rows[0].id, todaysDate)
                                        .then(r => r)
                                        .catch(err => console.log('loi insert image : ' + err));
                                });
                                res.redirect('/profile')
                            })
                            .catch(e => console.log('loi insert place ' + e));

                     }).catch(er => console.log('loi truy van user: ' + er));
                }
            })
        })
        .catch((e) => {
            res.clearCookie("tk");
            res.redirect('/');
        });
}