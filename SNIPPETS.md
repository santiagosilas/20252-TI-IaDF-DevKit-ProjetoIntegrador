# Exemplos em Javascript

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

