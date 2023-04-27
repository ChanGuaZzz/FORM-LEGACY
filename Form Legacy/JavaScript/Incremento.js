

for (let i = 0; i <  document.querySelectorAll('.boton').length; i++) {
  const boton =  document.querySelectorAll('.boton')[i];
  

  boton.addEventListener('click', function() {
    
    const precio = parseFloat(boton.dataset.precio);
    totalAPagar += precio;
    console.log(`Total a pagar: ${totalAPagar}`);
    const totalelemento = document.getElementById("total");
    totalelemento.textContent=totalAPagar.toFixed(2)
    if(botonclickeado==true){
      boton.children[1].style.transform = "rotate(180deg)";
      console.log("clickeado");
      botonclickeado=false;

    }else{
      boton.children[1].style.transform = "rotate(-180deg)";
      console.log("no clickeado");
      botonclickeado=true;
    }
    
    
      
      
      
    
  });
 
}

