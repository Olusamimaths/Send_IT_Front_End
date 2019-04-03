const parsedId = window.location.search.split("=")[1];
const token = localStorage.getItem("token");

if(parsedId) {
    document.getElementById('order_id').value = parsedId;
}

const url = `https://sendit-olusola.herokuapp.com/api/v1/parcels/${parsedId}`;

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
        // get the details and display it
        const { currentLocation, deliveredOn, from, to, sentOn, status, weight } = res.data[0];
        const sentOn_formatted = new Date(sentOn).toDateString();
        const deliveredOn_formatted = new Date(deliveredOn).toDateString()
        document.getElementById('detail_container').innerHTML = `
            <ul id="detail_list">
                <li>Current Location: ${currentLocation} </li>
                <li>Delivered on: ${deliveredOn_formatted} </li>
                <li>From: ${from} </li>
                <li>To: ${to} </li>
                <li>Sent on: ${sentOn_formatted} </li>
                <li>Status: ${status} </li>
                <li>Weight: ${weight} </li>
            </ul>
        `;
      })
      .catch(e => console.log(e))
    
      console.log(result)
    }
    
    
    
    
