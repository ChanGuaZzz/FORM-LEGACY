

for(i=0;i< document.getElementsByClassName(`foto`).length;i++){

const elemento = document.getElementsByClassName(`foto`)[i];
const height = elemento.clientHeight;
const width = elemento.clientWidth;

elemento.addEventListener("mousemove", (evt) => {
  const { layerX, layerY } = evt;
  const yrotation = ((layerX - width / 2) / width) * 20;
  const xrotation = ((layerY - height / 2) / height) * 20;
  const transformString = `perspective(500px) scale(1.1) rotateX(${xrotation}deg) rotateY(${yrotation}deg)`;
  elemento.style.transform = transformString;
});

elemento.addEventListener("mouseout", () => {
  elemento.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
});
}
