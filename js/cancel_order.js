function postData() {
    const token = localStorage.getItem("token");
    const parcelId = document.getElementById('order_id').value
    const url = `https://sendit-olusola.herokuapp.com/api/v1/parcels/${parcelId}/cancel`;
// clearing up the error and success messages
document.getElementById('error_message').innerHTML = "";
document.getElementById('success').innerHTML = "";
    
    if(parcelId){
        const result = fetch(url, {
            credentials: 'same-origin', // 'include', default: 'omit'
            method: 'PATCH', // 'GET', 'PUT', 'DELETE', etc.
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
                document.getElementById("order_id").value = "";
        
            }
            if(error){
                document.getElementById('error_message').innerHTML = error;
            }
          })
          .catch(e => console.log(e))
    } else{
        document.getElementById('error_message').innerHTML = "Please input a parcel id";
    }
}



