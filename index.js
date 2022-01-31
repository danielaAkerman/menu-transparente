function main() {
  const botonMenu = document.querySelector(".menu");
  const ventana = document.querySelector(".ventana");
  botonMenu.addEventListener("click", () => {
    ventana.style.display = "flex";
  });

  const cerrarVentana = document.querySelector(".cerrar-ventana");
  cerrarVentana.addEventListener("click", () => {
    ventana.style.display = "none";
  });
}
main();
