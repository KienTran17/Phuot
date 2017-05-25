const getAllWard = () => (
    fetch('http://localhost:3000/api/getward/').then(res => res.json())
);

export default getAllWard;