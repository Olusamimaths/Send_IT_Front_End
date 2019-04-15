const user_id = localStorage.getItem("user_id");
const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

const url = `https://sendit-olusola.herokuapp.com/api/v1/users/${user_id}/parcels`;

function getData() {
const result = fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'GET', // 'GET', 'PUT', 'DELETE', etc.
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }),
  })
  .then(response => response.json())
  .then(res => {
    if(res.status == 401){
      window.location.href = "login.html"
    }


    let parcelOrders = res.parcelOrders;
    let dataObject = parcelOrders.map(resObj => resObj.data)
    let parcelIds = dataObject.map(a => a[0].id)

    parcelIds.forEach(id => {
      // create a list element
      let node = document.createElement("h3");
      let parcel_link = `https://sendit-olusola.herokuapp.com/api/v1/parcels/${id}`;
      node.innerHTML += `<a href="order_details_parsed.html?orderId=${id}">Order ${id} </a>`;
      document.getElementById('parcel_list').appendChild(node)
    })


  })
  .catch(e => console.log(e))
}



