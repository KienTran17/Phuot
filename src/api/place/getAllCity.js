const getAllCity = () => (
    fetch('http://localhost:3000/api/getcity/').then(res => res.json())
);

export default getAllCity;