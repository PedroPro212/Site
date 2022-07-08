let idade = [45,18,'Pedro'];
corSite = "azul"
let escola = "";
/*console.log(idade);
console.log(idade[2]);

console.log(idade.length);*/


/*function resetarCor(){
    corSite = "";
};

console.log(corSite);
resetarCor();
console.log(corSite);*/

function resetarCor(cor,tonalidade){
    corSite = cor + tonalidade;
};

console.log(corSite)
resetarCor("vermelho", " claro");
console.log(corSite);


function aluno(id, nome, turma){
    escola = id + nome + turma;
};

console.log(escola);
aluno("1,", " Pedro Henrique Oliveira," + " Desenvolvimento de Sistemas");
console.log(escola);

function dizerNome(){
    console.log("Leila");
};

dizerNome();



function MultiplicarPorDois(valor){
    return valor*2;
}

//console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5);

console.log(resultado);

let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario / 2);
console.log(salario * 3);   


// Trocando valor de variavel
let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

console.log();

// Condição
let hora = 10;

if(hora > 6 && hora < 12){
    console.log("Bom dia!")
}

else if(hora > 12 && hora < 18){
    console.log("Boa tarde!")
}

else{
    console.log("Boa noite!")
}