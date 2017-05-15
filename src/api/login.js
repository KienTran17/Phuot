const login = (username, password) => (
    fetch('http://localhost:3000/api/login', { 
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ username, password })
    })
    .then(res => res.text())
    .then(text => {
        if (text === "1") return true;
        return false;
    })
);

export default login;