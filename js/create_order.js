const token = localStorage.getItem("token");
const url = 'https://sendit-olusola.herokuapp.com/api/v1/parcels';

function postData() {
// clearing up the error and success messages
document.getElementById('error_message').innerHTML = "";
document.getElementById('success').innerHTML = "";
// get the html form elements
const weight = document.getElementById("weight").value;
const from = document.getElementById("from").value;
const to = document.getElementById("to").value;
const currentLocation = document.getElementById("currentLocation").value;


let data = {
  weight: weight,
  from: from,
  to: to,
  currentLocation:currentLocation
}

const result = fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
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
    } else if(status == 200){
      document.getElementById('success').innerHTML = res.data[0].message;
      // clear the input fields
    document.getElementById("weight").value = "";
    document.getElementById("from").value = "";;
    document.getElementById("to").value = "";;
    document.getElementById("currentLocation").value = "";;

    }
    if(error){
        document.getElementById('error_message').innerHTML = error;
    }
  })
  .catch(e => console.log(e))
}



