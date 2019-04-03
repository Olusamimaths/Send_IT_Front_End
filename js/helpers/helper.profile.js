const user_id = localStorage.getItem("user_id");
const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

const delivered = document.getElementById("delivered").innerHTML

function getDeliveredOrders(dataObject){
    let statusArr = dataObject.map(a => a[0].status)
    const delivered = statusArr.filter(status => status.toLowerCase() === "delivered").length
    console.log(delivered)
}
