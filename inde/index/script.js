function inserirNome () {
let nomeusuario = prompt ("Qual o seu nome");
let elemento = document.querySelector ("#nome-usuário");
elemento.textoContext = nomeusuario;
}
inserirNome();

let linguagens = ["JavaScript", "Python", "C++"];
console.log(linguagens[1])

let item = document.querySelector("#lista");
item.textContent = linguagens[1] + "  " + linguagens[0] + "  " + linguagens[2];


let aluno1 = {
    nome: "Gabriel",
    idade: 13,
    anoletivo: "2ªsérie",
    materiasFavoritas: ["Geografia", "Programação", "Arte"]
}
const objeto = document.querySelector ("#aluno");
objeto.textContent = aluno1.nome;