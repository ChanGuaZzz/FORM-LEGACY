const sumary = document.getElementById("botonprendas");
const desplegar= document.getElementById("prendas");

sumary.addEventListener("click", function(){
    if(desplegar.id=="prendas"){
    desplegar.id="prendas1"
}else{
    desplegar.id="prendas"
}


});
