const user_id = localStorage.getItem("user_id");
const token = localStorage.getItem("token");
const username = localStorage.getItem("username");


function getDeliveredOrders(dataObject){
    let statusArr = dataObject.map(a => a[0].status)
    const delivered = statusArr.filter(status => status.toLowerCase() === "delivered").length
    const transit = statusArr.filter(status => status.toLowerCase() === "transit").length
    
    if(delivered){
        document.getElementById("delivered").innerHTML = delivered
    }
    if(transit){
        document.getElementById("delivered").innerHTML = transit
    }
}
