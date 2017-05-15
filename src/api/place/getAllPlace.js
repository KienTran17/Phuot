const getAllPlace = () => (
    fetch('http://localhost:3000/api/getallplace/').then(res => res.json())
);

export default getAllPlace;