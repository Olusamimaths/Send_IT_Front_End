if(username) {
    document.getElementById("logged_in_user").innerHTML = username;
} else {
  window.location.href = "login.html"
}

const url = `https://sendit-olusola.herokuapp.com/api/v1/users/${user_id}/parcels`;

function showAdminLinks(isAdmin) {
  if(isAdmin === 'true'){
    document.getElementById("admin_links").innerHTML = `
      <ul id="hor_links">
        <li><a href="admin/change_status.html" class="btn_action admin_btn">Change Order Status</a></li>
        <li><a href="admin/present_location.html" class="btn_action admin_btn">Change Order Current Location</a></li>
      <ul>
    `
  } 
}

function getData() {
  showAdminLinks(isAdmin)

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
    getDeliveredOrders(dataObject)
    let parcelIds = dataObject.map(a => a[0].id)

    parcelIds.forEach(id => {
      // create a list element
      let node = document.createElement("li");
      let parcel_link = `https://sendit-olusola.herokuapp.com/api/v1/parcels/${id}`;
      node.innerHTML += `<a href="order_details_parsed.html?orderId=${id}">Order ${id} </a>`;
      document.getElementById('parcel_list').appendChild(node)
    })

    // parcelIds.forEach(id =>{
    //   `<li><a href="">Order ${}</a></li>`
    // })

  })
  .catch(e => {
    console.log("Couldn't not fetch data from sendit")
    window.location.href = "login.html"
  })
}



