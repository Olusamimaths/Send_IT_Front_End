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
    let error = res.error;
    let status = res.status;
    if(status != 200) {
        document.getElementById('error_message').innerHTML = res.message;
    } else {
            // setting local storage
        localStorage.setItem("token", res.data[0].token);
        localStorage.setItem("user_id", res.data[0].id);
        localStorage.setItem("username", res.data[0].username)
        // send success message
        document.getElementById('success').innerHTML = res.message;
        // redirect to profile page
         window.location.href = "profile.html";
    }
    if(error){
        document.getElementById('error_message').innerHTML = error;
    }
  })
  .catch(e => console.log(e))
}



