const express = require('express');
const app = express();

const session = require('express-session');
const cookieParser = require('cookie-parser');

const authentication = require('./config/authentication')
//let parser = require('body-parser').urlencoded({ extended: false });
const jsonParser = require('body-parser').json();
app.use(cookieParser());

app.use(session({
    secret: 'sh72cjs2c92du82asdfasdfsfdadhfd',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 86400
    }
}));
app.listen(process.env.PORT || '3000');


//gói body-parser lấy dữ liệu từ form (POST) trong ejs

//sử dụng gói ejs tạo trang html
app.set('view engine', 'ejs');
app.set('views', './views'); //views

app.use(express.static('public'));

app.get('/api/checklogin/:token', require('./controller/front-end/home/checkLogin'));
app.post('/api/login', jsonParser, require('./controller/front-end/home/login'));
app.post('/api/handleuser', jsonParser, require('./controller/front-end/user/handleUser'));

app.post('/api/register', jsonParser, require('./controller/front-end/home/register'));

app.get('/api/getallplace', require('./controller/front-end/place/getAllPlace'));
app.get('/api/getuserbyid/:id', require('./controller/front-end/user/getUserById'));
app.get('/api/getimagefromplace/:id', require('./controller/front-end/image/getImageFromPlace'));

app.get('/api/getplacefromid/:id', require('./controller/front-end/place/detailPlace'));

app.get('/api/getuserbyusername/:token', require('./controller/front-end/user/getUserByUsername'));

app.get('/api/getlistplacefromuser/:token/:id', require('./controller/front-end/user/getListPlaceFromUser'));

app.post('/insertplace', require('./controller/front-end/user/insertPlace'));
app.get('/api/logout',jsonParser, require('./controller/front-end/user/logOut'));
app.get('*', require('./controller/front-end/home/home'));

