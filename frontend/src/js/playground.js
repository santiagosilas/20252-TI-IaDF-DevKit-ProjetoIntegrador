console.log("Playground 🚀");
console.log("TI - IaDF 2025.2 💻");

let endereco;
let nome = "José";
let sobrenome = "da Silva";
let nomeCompleto = nome + " " + sobrenome;
let idade = 21;
let altura = 1.63;
let info = `${nome} ${sobrenome}`;
console.log(nome);
console.log(sobrenome);
console.log(nomeCompleto);
console.log(idade, altura);
/* Uma Pessoa (Objeto) */
let pessoa = {
  nome: "José",
  idade: 21,
  altura: 1.72,
  seLogado: true,
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);
console.log(pessoa.seLogado);

pessoa.nome = "Mike";
pessoa.seLogado = false;
console.log(pessoa);

// definição da Função
function concatenar(nome1, nome2) {
  let conc = `${nome1} ${nome2}`;
  return conc;
}
// chamada à função
let nomeComp = concatenar(nome, sobrenome);
console.log(nomeComp);
// chamada à função
nomeComp = concatenar("João", "Ferreira");
console.log(nomeComp);
// chamada à função
console.log(concatenar(nome, sobrenome));
console.log(concatenar("João", "Ferreira"));

//let algumaIdade = prompt("Digite a idade");

// If-Else em Javascript
pessoa.idade = 16;
console.log("If-Else em Javascript");
if (pessoa.idade >= 18) {
  console.log(`${pessoa.nome} pode tirar Carteira`);
} else {
  console.log(`${pessoa.nome} não pode tirar Carteira`);
  console.log(`Aguarde ${18 - pessoa.idade} anos`);
}

// Loops em JS
// Praticamente igual ao C
let i = 100;
let soma = 0;
while (i <= 1000) {
  console.log(i);
  soma = soma + i;
  i++;
}

soma = 0;
for (let k = 100; k <= 1000; k++) {
  console.log(k);
  soma = soma + k;
}

let j = 100;
for (; j <= 1000; ) {
  console.log(j);
  soma = soma + j;
  j++;
}
