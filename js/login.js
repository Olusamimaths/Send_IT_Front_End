
const url = 'https://sendit-olusola.herokuapp.com/api/v1/auth/login';

function postData() {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;


let data = {
  email: email,
  password: password
}

const result = fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  })
  .then(response => response.json())
  .then(res => {
    console.log(res)
    let error = res.error;
    let status = res.status;
    if(status != 200) {
        document.getElementById('error_message').innerHTML = res.message;
    }
    if(error){
        document.getElementById('error_message').innerHTML = error;
    }
  })
  .catch(e => console.log(e))

  console.log(result)
}



