const getUserById = (id) => (
    fetch('http://localhost:3000/api/getuserbyid/'+id).then(res => res.json())
);

export default getUserById;