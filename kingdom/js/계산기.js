function cal(){
    var v1 = Number(document.getElementById("v1").value);
    var v2 = Number(document.getElementById("v2").value);    
    var res1  = (v1*(1-(v2*0.01)))*0.3 ;
    var res2  = v1*(1-0.254)*(1-(v2*0.01)); 
    
    document.getElementById("res1").value = value = res1.toFixed(0);
    document.getElementById("res2").value = value = res2.toFixed(1);
    
   
}

function reset(){
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";    
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
   
}