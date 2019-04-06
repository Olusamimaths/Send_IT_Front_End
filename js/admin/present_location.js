function postData() {
    const token = localStorage.getItem("token");
    const parcelId = document.getElementById('order_id').value
    const url = `https://sendit-olusola.herokuapp.com/api/v1/parcels/${parcelId}/currentlocation`;
// clearing up the error and success messages
document.getElementById('error_message').innerHTML = "";
document.getElementById('success').innerHTML = "";
    
const currentLocation = document.getElementById("currentLocation").value;

let data = {
    currentLocation,
}
if(parcelId){
  const result = fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'PATCH', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }),
  })
  .then(response => response.json())
  .then(res => {
    let error = res.error;
    let status = res.status;
    if(status != 200) {
        document.getElementById('error_message').innerHTML = res.message;
    } else {
        document.getElementById('success').innerHTML = res.data[0].message + ` (id: ${parcelId})`;
        document.getElementById("currentLocation").value = "";
        document.getElementById("order_id").value = "";

    }
    if(error){
        document.getElementById('error_message').innerHTML = error;
    }
  })
  .catch(e => console.log(e))
} else {
  document.getElementById('error_message').innerHTML = "Please input a parcel id";
}


}



