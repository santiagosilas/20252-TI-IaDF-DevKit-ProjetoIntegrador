const caixaDeTexto = document.querySelector("#texto");

// Evento "input"
caixaDeTexto.addEventListener("input", function () {
  console.log(`texto digitado: ${caixaDeTexto.value}`);
});

// Evento change
caixaDeTexto.addEventListener("change", () => {
  console.log(`texto enviado: ${caixaDeTexto.value}`);
  document.querySelector("#conteudo").innerHTML = caixaDeTexto.value;
  document.querySelector("#contagem").innerHTML = caixaDeTexto.value.length;
});
