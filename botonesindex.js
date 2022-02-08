let si=document.getElementById('si');
si.addEventListener("click",function(e){
  alert("Ahora besame mi amor 7w7 \n(PD dale en Aceptar)");
});
let no=document.getElementById('no');
no.addEventListener("mousemove",function(e){
  let x = Math.round( Math.random()*93);
  let y = Math.round( Math.random()*93);
  no.style.left = x+"%";
  no.style.top = y+"%";
});
