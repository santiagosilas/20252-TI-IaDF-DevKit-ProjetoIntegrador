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

Constantes
```javascript
const x = 42;
x = 7; // TypeError: Assignment to constant variable.
```

Operadores
```javascript
  // Operadores Aritméticos (+, -, /, *, %)
  let a = 8,
    b = 3;

  console.log(8 + 3); // Soma
  console.log(8 - 3); // Subtração
  console.log(8 * 3); // Multiplicação
  console.log(8 / 3); // Divisão
  console.log(8 % 3); // Módulo (Resto da Divisão Inteira)

  // Operadores de Atribuição (=, +=, -=, *=, /=, %=. ++, --)
  // Operadores de Atribuição
  let valor = 10;
  valor = 2;
  console.log(valor); // 2

  valor = 3; // sobreescrita
  console.log(valor); // 3

  valor = 10;
  valor += 2;
  console.log(valor); // 12

  valor = 10;
  valor -= 2;
  console.log(valor); // 8

  valor = 10;
  valor *= 3;
  console.log(valor); // 30

  valor = 10;
  valor /= 4;
  console.log(valor); // 2.5

  valor = 10;
  valor %= 3;
  console.log(valor); // 1

  valor = 10;
  valor++;
  console.log(valor); // 11

  valor = 10;
  valor--;
  console.log(valor); // 9

  // Operadores Relacionais
  // Operadores Relacionais: ==, !=, <, >, <=, >=
  let preco_a = 2.5,
    preco_b = 5.75,
    preco_c = "2.5",
    preco_d = "5.75";

  console.log("preco_a == preco_b", preco_a == preco_b);
  console.log("preco_a != preco_b", preco_a != preco_b);
  console.log("preco_a > preco_b", preco_a > preco_b);
  console.log("preco_a > preco_b", preco_a < preco_b);
  console.log("preco_a < preco_b", preco_a < preco_b);
  console.log("preco_a >= preco_b", preco_a >= preco_b);
  console.log("preco_a <= preco_b", preco_a <= preco_b);

  // Operadores ===, !== (verica o valor e também o tipo das variáveis)
  console.log("preco_a == preco_c", preco_a == preco_c);
  console.log("preco_a === preco_c", preco_a === preco_c);

  // Operadores Lógicos: && (AND), || (OR), !(NOT)
  // Conhecimento prévio necessário: Tabelas-verdade AND, OR, NOT
  let userIsLoggedIn, userIsAdmin;

  userIsLoggedIn = true;
  userIsAdmin = true;

  console.log(userIsLoggedIn && userIsAdmin);
  console.log(userIsLoggedIn || userIsAdmin);
  console.log(!userIsLoggedIn);
```


Condicionais
```javascript

  let okay = true;
  if (!okay) {
  } else if (1 < 2) {
  } else {
  }

  let success = true;
  if (success == true) {
    console.log("Ok!");
  } else {
    console.log("Erro!");
  }

  let result = success == true ? 1 : 0;
```

Funções
```javascript
 let mult = function (x, y) {
    return x * y;
  };

let calc_imc = (peso, altura) => {
    return peso / (altura * altura);
  };

console.log(calc_imc(67.0, 1.71));
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





