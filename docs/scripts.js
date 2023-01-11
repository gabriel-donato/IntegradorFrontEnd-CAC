
const valorTicket = 200;
let total=0

function calcTotal() {
    console.log("total");
    let total=document.getElementById("total").value
    let cant=document.getElementById("cantidad").value
    let cat=document.getElementById("categoria").value

    if (cat==1) {
        total=cant*valorTicket*.2 //80%
        console.log(total);
    } else if (cat==2) {
        total=cant*valorTicket*.5 //50%
    } else {
        total=cant*valorTicket*.85 //15%
    }
    document.getElementById("total").innerHTML=`Total a pagar: $${total}`
};