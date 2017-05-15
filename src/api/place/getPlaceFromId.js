const getPlaceFromId = (id) => (
    fetch('http://localhost:3000/api/getplacefromid/'+id).then(res => res.json())
);

export default getPlaceFromId;