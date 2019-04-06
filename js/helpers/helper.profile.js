const user_id = localStorage.getItem("user_id");
const token = localStorage.getItem("token");
const username = localStorage.getItem("username");


function getDeliveredOrders(dataObject){
    let statusArr = dataObject.map(a => a[0].status)
<<<<<<< HEAD
    const delivered = statusArr.filter(status => status.toLowerCase() === "delivered").length
    const transit = statusArr.filter(status => status.toLowerCase() === "transit").length
=======
    const delivered = statusArr.filter(status => status.toLowerCase() == "delivered").length
    const transit = statusArr.filter(status => status.toLowerCase() == "transit").length
>>>>>>> 1d316b1921942d1769839bfa3fbeda68db19c8fb
    
    if(delivered){
        document.getElementById("delivered").innerHTML = delivered
    }
    if(transit){
<<<<<<< HEAD
        document.getElementById("delivered").innerHTML = transit
=======
        document.getElementById("transit").innerHTML = transit
>>>>>>> 1d316b1921942d1769839bfa3fbeda68db19c8fb
    }
}
