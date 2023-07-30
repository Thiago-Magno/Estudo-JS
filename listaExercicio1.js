//Exercicios

//1. Declare uma varial de nome weight
//let weight;

//2. Que tipo de dao é a variavel acima
//console.log(typeof weight);

/*
3 Delare uma variavel e atribua valores para cara um dos dados:

    - name: string
    - age: number(integer)
    - stars: number(float)
    - isSubscribed: boolean

*/

// let name = "Thiago",
//   age = 23,
//   stars = 4.1,
//   isSubscribed = true;

/* 
4. A variavel student abaixo é de que tipo de dados

4.1 Atribua a ela as mesmas propriedade e valores do 
exercicio 3.

4.2 Mostre no console a seguinte mensagem:
    <name> de idade <age> e <weight> kg.
    Atenção, subtitua <name> <age> e <weight>
    pelos valore de cada propriedade do objeto
*/

let student = {
  name: "Thiago",
  age: 23,
  weight: 72.3,
  isSubscribed: true,
};
console.log(typeof student)
console.log(`${student.name} de idade ${student.age} e ${student.weight} kg.`);

/*
5. Declare uma variavel do tipo Array, de nome students 
e atribua a ela nenhum valor, ou seja, somente o arrya vazio

*/

let listaVazia = []

/*
6. Reatribua valora para a variavel acima, colocando
dentro dela o objeto student da questão 4.(Não
copiar e cola o objeto, mas usar o objeto criado e 
inserir ele no Array)

*/

studentsList = [student]
/**
 * 7. coloque no console o valor da posição zero do array acima
 * 
 */
console.log(studentsList[0])

/*
8. Cire um no student e coloque na posição 1 do Array
 students
*/

const student2 = {
    name: "João",
    age: 25,
    weight: 78.3,
    isSubscribed: true,
  };

  studentsList[1] = student2 

  console.log(studentsList[1])

/*
9. Sem rodar o codigo responda qual é a resposta do código
abaixo e porque? Após sua resoita rode o código e veja se
acertou.

console.log(a)
var a = 1

R: já que o JS le o codigo de cima para baixo não deveria
aparece nada no console.log, mas vai exibir undefined,
pois o JS faz um hoisting levando o var a para cima
deixando ele existir antes mesmo de ser declarado,
mas não recebendo o valor da variavel.  

*/


console.log(a)
var a = 1
