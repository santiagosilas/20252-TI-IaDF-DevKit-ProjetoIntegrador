# Visão Geral de Javascript

Variáveis e Tipos de Dados

```javascript
// Para executar os exemplos, digite node nomedoarquivo.js
console.log("Variáveis e Tipos de Dados");

// Value Types: String, Number, Boolean, undefined, null
// Reference Types: Object, Array, Function

// variáveis (a tipagem é dinâmica)
let nomeLoja = "Eletrônica Raio de Sol";
let anoLoja = 1995;
let acessoLojaLiberado = false;
let temperaturaLoja = 26.7;
let horario; // undefined
let gerente = null;

console.log("nomeLoja", nomeLoja, typeof nomeLoja);
console.log("anoLoja", anoLoja, typeof anoLoja);
console.log("temperaturaLoja", temperaturaLoja, typeof temperaturaLoja);
console.log("acessoLojaLiberado", acessoLojaLiberado, typeof anoLoja);
console.log("anoLoja", anoLoja, typeof anoLoja);
console.log("horario", horario, typeof horario);
console.log("gerente", gerente, typeof gerente);
```

Entrada e Saída

```javascript
let message = "Snippets in Javascript";
alert(message);
console.log(message);

let confirmation = confirm(message); // true or false
console.log(`confirmation:${confirmation}`);

let numero = prompt("digite um número:");
console.log(`você digitou o número ${numero}`);

numero = parseInt(numero);
console.log(`Este número é ${numero % 2 === 0 ? "par" : "ímpar"}`);
```

**DOM – DOCUMENT OBJECT MODEL**: _O documento Html e seus elementos são representados por objetos em Javascript. O documento Html pode ser acessado pela variável **document**. Podemos recuperar elementos com os métodos:_

- document.**getElementById**()
  - Buscar um elemento com um dado id\_
- document.**getElementsByClassName**()
  - Buscar todos os elementos com uma dada classe\_
- document.**getElementsByName**()
- document.**getElementsByTagName**()
  - Buscar todos os elementos com uma dada tag. Este método retornará um array\_
- document.**querySelector**
  - Outra forma de obter os elementos na DOM, permitindo percorrer a DOM. Retornará um único elemento\_
- document.**querySelectorAll**
  - Análogo ao querySelector, mas retorna um array.

Exemplo com DOM - Contar Caracteres
```javascript
      const texto = document.querySelector("#texto");
      const contagem = document.querySelector("#contagem");
      texto.addEventListener("input", () => {
        contagem.innerText = texto.value.length;
      });
```


Exemplo com DOM - Obter e Alterar Elementos
```javascript
      // Obter o elemento via query selector
      let header_title = document.querySelector("header h1");
      let header_descr = document.querySelector("header p");

      // Obter o elemento via ID
      const toggleBtn = document.getElementById("toggle-bg");
      let info1 = document.getElementById("info1");
      let info2 = document.querySelector("#info2");
      let taskForm = document.getElementById("task-form");

      // Obter o elemento via classe
      let subtitle = document.querySelector(".subtitle");
      subtitle = document.getElementsByClassName("subtitle")[0];

      // textContent para modifica o conteúdo dos elementos
      header_descr.textContent = "A Simple Task Manager to Learn JS.";
      info1.textContent = "This is a simple task manager application.";
      info2.textContent = "You can add tasks to your list.";
      subtitle.textContent = "Manage your tasks efficiently!";

      // Toggle background color button

      let isBlack = false;
      toggleBtn.addEventListener("click", function () {
        document.body.style.backgroundColor = isBlack ? "white" : "black";
        document.body.style.color = isBlack ? "black" : "white";
        isBlack = !isBlack;

        header_title.classList.toggle("black-bg");
      });

      document
        .getElementById("task-input")
        .addEventListener("input", (event) => {
          let inputValue = event.target.value;
          document.getElementById("currenttext").textContent = inputValue;
        });

      taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let inputValue = document.getElementById("task-input").value;
        if (inputValue.trim() === "") {
          alert("Please enter a task.");
          return;
        }
        let taskList = document.getElementById("tasks");
        let newTask = document.createElement("li");
        newTask.textContent = inputValue;
        taskList.appendChild(newTask);
        document.getElementById("task-input").value = "";
        document.getElementById("currenttext").textContent = "";
        alert("Task added successfully!");
      });
```


