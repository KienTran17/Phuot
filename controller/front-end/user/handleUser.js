const getArrayUpload = require('../../../upload');
const { checkExistAccount, insertUserFb } = require('../../../model/user');
const { addPlace } = require('../../../model/place');
const { insertImage } = require('../../../model/image');
const { sign } = require('../../../config/jwt');


module.exports = (req, res) => {
    const {data} = req.body;
    checkExistAccount(data.email, data.id).then(async r => {
        if (r.rows.length === 0) {
            await insertUserFb(data.first_name, data.last_name, data.email, data.picture.data.url, data.link, data.id).then(async isOk => {
                const username = data.email;
                await sign({ username }).then(token => {
                    //console.log(token);
                    req.session.username = username;
                    res.cookie('tk', token, { expires: new Date(Date.now() + 900000)}).send('1');
                    //res.redirect('http://localhost:3000/');
                });
            })
                .catch(er => console.log(er + ''));
        }
        else {
            const username = data.email;
            console.log(username);
            await sign({ username }).then(token => {
                //console.log(token);
                req.session.username = username;
                res.cookie('tk', token, { expires: new Date(Date.now() + 900000)}).send();
                //res.redirect('http://localhost:3000/');
            });
        }
    }).catch(e => console.log(e + ''));
}