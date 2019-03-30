const url = 'https://sendit-olusola.herokuapp.com/api/v1/auth/login';

function postData() {
// clearing up the error message 
document.getElementById('error_message').innerHTML = "";

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
    } else {
        document.getElementById('success').innerHTML = res.message;
        window.location.href = "profile.html";
    }
    if(error){
        document.getElementById('error_message').innerHTML = error;
    }

    let token = res.data[0].token;
    let username = res.data[0].username;
    
    // setting local storage
    localStorage.setItem("token", token);
    localStorage.setItem("username", username)

  })
  .catch(e => console.log(e))

  console.log(result)
}



