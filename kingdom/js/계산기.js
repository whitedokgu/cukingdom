function cal2(){
    var v1 = Number(document.getElementById("v1").value);
    var v2 = Number(document.getElementById("v2").value);    
    var res1  = (v1*(1-(v2*0.01)))*0.3 ;
    var res2  = v1*(1-0.254)*(1-(v2*0.01)); 
    
    document.getElementById("res1").value = value = res1.toFixed(0);
    document.getElementById("res2").value = value = res2.toFixed(1);
    
   
}

function reset2(){
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";    
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";   
}

function cal1(){
    var r0 = Number(document.getElementById("r0").value);
    var r1 = Number(document.getElementById("r1").value);
    var r2 = Number(document.getElementById("r2").value); 
    var r3 = Number(document.getElementById("r3").value);
    var r4 = Number(document.getElementById("r4").value);  
    var r5 = Number(document.getElementById("r5").value);
       
    var res1  = r0*50 + r1*250 + r2*300 + r3*0 + r4*500 + r5*0;
    var res2  = r0*0 + r1*30 + r2*0 + r3*60 + r4*90 + r5*120;
    var res3  = r0*0 + r1*0 + r2*30 + r3*30 +r4*35 + r5*50;
    
    
    document.getElementById("r-res1").value = value = res1.toFixed(0);
    document.getElementById("r-res2").value = value = res2.toFixed(0);
    document.getElementById("r-res3").value = value = res3.toFixed(0);
    
   
}

function reset1(){
    document.getElementById("r0").value = "";
    document.getElementById("r1").value = "";    
    document.getElementById("r2").value = "";
    document.getElementById("r3").value = ""; 
    document.getElementById("r4").value = "";
    document.getElementById("r5").value = ""; 
    
    document.getElementById("r-res1").value = "";
    document.getElementById("r-res2").value = "";
    document.getElementById("r-res3").value = "";   
}