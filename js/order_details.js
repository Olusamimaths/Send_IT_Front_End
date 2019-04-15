function getData() {
  // get the provided parcel id
  const parcelId = document.getElementById('order_id').value;
  const token = localStorage.getItem("token");
  const url = `https://sendit-olusola.herokuapp.com/api/v1/parcels/${parcelId}`;

  if(parcelId){
      // fetch the parcel details
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
        console.log(res)
          if(res.status == 200) {
                    // get the details and display it
                  const { currentLocation, deliveredOn, from, to, sentOn, status, weight } = res.data[0];
                  const sentOn_formatted = new Date(sentOn).toDateString();
                  const deliveredOn_formatted = new Date(deliveredOn).toDateString()
                  document.getElementById('detail_container').innerHTML = `
                      <ul id="detail_list">
                          <li><span class="bolded">Current Location:</span> ${currentLocation} </li>
                          <li><span class="bolded">Delivered on:</span> ${deliveredOn_formatted} </li>
                          <li><span class="bolded">From:</span> ${from} </li>
                          <li><span class="bolded">To:</span> ${to} </li>
                          <li><span class="bolded">Sent on:</span> ${sentOn_formatted} </li>
                          <li><span class="bolded">Status:</span> ${status} </li>
                          <li><span class="bolded">Weight: </span>${weight}kg </li>
                      </ul>
                  `;
          } else {
            document.getElementById('detail_container').innerHTML = `<h3 style="color:red">${res.error}</h3>`;
          }
      })
      .catch(e => console.log(e))
  } else {
    document.getElementById('detail_container').innerHTML = "Please input a valid parcel id";
  }
  }
    
    
    
    
