const { insertUser } = require('../../../model/user');
const { sign } = require('../../../config/jwt');
const bycript = require('bcrypt');
module.exports = (req, res) => {
    const { txtFirstName, txtUsername, txtLastName, txtEmail, txtPassword } = req.body;
    bycript.hash(txtPassword, 10, async (err, hash) => {
        if(err) return console.log(err+'');
        await insertUser(txtFirstName, txtLastName, txtUsername, txtEmail, hash).then(async r => {
            const username = txtUsername;
            await sign({username}).then(token => {
                req.session.username = username;
                res.cookie('tk', token, { expires: new Date(Date.now() + 900000)}).send('1');
            }).catch(e=> res.send());
        }).catch(er=>res.send());
    });
}