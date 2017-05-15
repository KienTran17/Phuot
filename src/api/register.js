const register = (txtFirstName, txtLastName, txtUsername, txtEmail, txtPassword) => (
    fetch('http://localhost:3000/api/register', { 
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ txtFirstName, txtLastName, txtUsername, txtEmail, txtPassword })
    })
    .then(res => res.text())
    .then(text => {
        if (text === "1") return true;
        return false;
    })
);

export default register;