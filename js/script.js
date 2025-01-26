document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("calcular");
  const boton2 = document.getElementById("reiniciar");
  const inputAltura = document.querySelector(".inputAltura");
  const inputPeso = document.querySelector(".inputPeso");
  const resultado = document.getElementById("resultadoIMC");

  boton2.addEventListener("click", ()=>{
    location.reload();
  })

  // Asocia un evento al botón
  boton.addEventListener("click", () => {
    const altura = inputAltura.value / 100; // Convierte cm a m
    const peso = inputPeso.value;

    // Verifica que los valores sean válidos
    if (!altura || !peso || altura <= 0 || peso <= 0) {
      resultado.innerHTML =
        "<p class='obeso'>Por favor, ingresa valores válidos para altura y peso.</p>";
      return;
    }

    const IMC = peso / Math.pow(altura, 2);

    // Evalúa el IMC
    if (IMC <= 18.5) {
      resultado.innerHTML =
        "<h3>Tu IMC es: " +
        IMC.toFixed(1) +
        "</h3>" +
        "<p class='pesoBajo'>Estás bajo de peso!</p>";
    } else if (IMC > 18.5 && IMC <= 24.9) {
      resultado.innerHTML =
        "<h3>Tu IMC es: " +
        IMC.toFixed(1) +
        "</h3>" +
        "<p class='pesoNormal'>Estás en un peso saludable!</p>";
    } else if (IMC > 24.9 && IMC <= 29.9) {
      resultado.innerHTML =
        "<h3>Tu IMC es: " +
        IMC.toFixed(1) +
        "</h3>" +
        "<p class='sobrepeso'>Estás en sobrepeso!</p>";
    } else {
      resultado.innerHTML =
        "<h3>Tu IMC es: " +
        IMC.toFixed(1) +
        "</h3>" +
        "<p class='obeso'>TIENES OBESIDAD!</p>";
    }
  });
});
