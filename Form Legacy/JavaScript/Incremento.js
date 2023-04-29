

for (let i = 0; i <  document.getElementsByClassName('boton').length; i++) {
  const boton =  document.getElementsByClassName('boton')[i];
  

  boton.addEventListener('click', function() {
    
    const precio = parseFloat(boton.dataset.precio);
    totalAPagar += precio;
    console.log(`Total a pagar: ${totalAPagar}`);
    const totalelemento = document.getElementById("total");
    totalelemento.textContent=`Su total es: ${totalAPagar.toFixed(2)}`
    
    
    
      
      
      
    
  });
 
}

