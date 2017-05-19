const checkLogin = (token) => (
    fetch('http://localhost:3000/api/checklogin/'+token).then(res => res.text())
    .then(text => {
        if (text) return true;
        return false;
    })
);

export default checkLogin;