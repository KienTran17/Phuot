const getImageFromPlace = (id) => (
    fetch('http://localhost:3000/api/getimagefromplace/'+id).then(res => res.json())
);

export default getImageFromPlace;