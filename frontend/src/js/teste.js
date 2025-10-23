console.log("Em Execução ....");
const inputEmail = document.querySelector("#email");
const inputPassword1 = document.querySelector("#senha1");
const inputPassword2 = document.getElementById("senha2");
const btnCadastrar = document.querySelector("#btnCadastrar");

function cadastrarUsuario() {
  const usuario = {
    email: inputEmail.value,
    senha1: inputPassword1.value,
    senha2: inputPassword2.value,
  };
  console.log(usuario);

  if (usuario.senha1 == usuario.senha2) {
    alert("cadastrado!");
  } else {
    alert("senhas não são iguais!");
  }
}
btnCadastrar.addEventListener("click", cadastrarUsuario);
