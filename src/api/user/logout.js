const logout = () => (
    fetch('http://localhost:3000/api/logout', {
        method: 'GET',
        credentials: 'include'
    })
    .then(res => res.text())
);

export default logout;