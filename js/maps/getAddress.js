const apiKey = `AIzaSyA1xwoXWPadVUh8o8e0-de3yID6IQ8_Zdo`;
const address = 'Ikeja, Ogun State'
const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&fields=photos,formatted_address,geometry&key=${apiKey}`

function getAddress() {
   fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'GET', // 'GET', 'PUT', 'DELETE', etc.
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  })
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(e => console.log(e))
}