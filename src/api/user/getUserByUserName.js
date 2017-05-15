const getUserByUsername = (token) => (
    fetch('http://localhost:3000/api/getuserbyusername/'+token).then(res => res.json())
);

export default getUserByUsername;