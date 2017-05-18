const getListPlaceFromUser = (token,id) => (
    fetch('http://localhost:3000/api/getlistplacefromuser/'+token+'/'+id).then(res => res.json())
);

export default getListPlaceFromUser;