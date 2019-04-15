
const url = 'https://sendit-olusola.herokuapp.com/api/v1/auth/signup';

function postData() {

  // clearing up the error message 
document.getElementById('error_message').innerHTML = "";

const firstname = document.getElementById("firstname").value;
const username = document.getElementById("username").value;
const lastname = document.getElementById("lastname").value;
const othernames = document.getElementById("othernames").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;


let data = {
  username: username,
  firstname: firstname,
  lastname: lastname,
  othernames: othernames,
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
      // setting local storage
      localStorage.setItem("user_id", res.data[0].id);
      localStorage.setItem("token", res.data[0].token);
      localStorage.setItem("username",  res.data[0].username)
      // display success message
      document.getElementById('success').innerHTML = res.message;
      // redirect to profile page
        window.location.href = "profile.html";
    }

    // an error occured
    if(error){
        document.getElementById('error_message').innerHTML = error.map(e => `<li>${e}</li>`);
    }
  })
  .catch(e => console.log(e))

  console.log(result)
}



