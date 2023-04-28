<<<<<<< HEAD
const elemento = document.getElementsByClassName(`foto`);
const cantidad = elemento.length;
=======


for(i=0;i< document.getElementsByClassName(`foto`).length;i++){

const elemento = document.getElementsByClassName(`foto`)[i];
const height = elemento.clientHeight;
const width = elemento.clientWidth;
>>>>>>> 7b681049f23c9b67879a4a1cec600ec98b5956c5

for(i=0;i<cantidad;i++){

const height = elemento[i].clientHeight;
const width = elemento[i].clientWidth;
const cadafoto=elemento[i];

cadafoto.addEventListener("mousemove", (evt) => {
  const { layerX, layerY } = evt;
  const yrotation = ((layerX - width / 2) / width) * 20;
  const xrotation = ((layerY - height / 2) / height) * 20;
  const transformString = `perspective(500px) scale(1.1) rotateX(${xrotation}deg) rotateY(${yrotation}deg)`;
  cadafoto.style.transform = transformString;
});

<<<<<<< HEAD
cadafoto.addEventListener("mouseout", () => {
  cadafoto.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
});
}
=======
elemento.addEventListener("mouseout", () => {
  elemento.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
});
}
>>>>>>> 7b681049f23c9b67879a4a1cec600ec98b5956c5
