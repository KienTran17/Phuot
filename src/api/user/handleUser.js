const handleUser = (data) => (
    fetch('http://localhost:3000/api/handleuser', { 
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ data })
    })
    .then(res => res.text())
);

export default handleUser;