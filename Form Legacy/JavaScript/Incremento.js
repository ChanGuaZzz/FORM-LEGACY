

for (let i = 0; i <  document.getElementsByClassName('boton').length; i++) {
  const boton =  document.getElementsByClassName('boton')[i];
  const totalelemento = document.getElementById("total");
  

  boton.addEventListener('click', function() {
    
    const precio = parseFloat(boton.dataset.precio);
    totalAPagar += precio;
    console.log(`Total a pagar: ${totalAPagar}`);
    
    totalelemento.textContent=`Su total es: ${totalAPagar.toFixed(2)}`
    
    
    
      
      
      
    
  });
 
}

