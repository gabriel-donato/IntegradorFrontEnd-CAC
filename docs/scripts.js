document.getElementById("tickets").onclick =  function(){
    location.href="https://pgdonato.github.io/IntegradorFrontEnd-CAC/tickets.html";
};

const valorTicket = 200;
function calcTotal() {
    let cant=document.getElementById("cant").value
    
    let categoria=document.getElementById("categoria").value

    let total=0
    if (categoria==1) {
        total=cant*valorTicket*.2 //80%
    } else if (categoria==2) {
        total=cant*valorTicket*.5 //50%
    } else {
        total=cant*valorTicket*.85 //15%
    }

    document.getElementById("total").innerHTML=`Total a pagar: $${total}`
};