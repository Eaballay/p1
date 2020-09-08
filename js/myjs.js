var p1,p2,r1,r;
p1= "HyperText Markup";
p2= "Es la A";
r1="a";
var i = 0 ;


function myFunction() {
  r= document.getElementById("respuesta").value;
    if (r==r1){
      document.getElementById("r").value = "Ganaste";
     }
     if(r != r1){
        i = i+1;
      if(i >= 2){
      document.getElementById("p1").value = p1;
      document.getElementById("p2").value = p2;
      }
    }

}