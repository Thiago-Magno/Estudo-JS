# Estudo de Javascript

Neste repositorio estou registrando meus estudo em js(JavaScript), para futuras revisões e tirada de duvidas.

## Sobre o JS

* Ele é uma linguagem de programaçãouq roda no navegador do usuário(front-ent)
    * Se vc clicar em algum botão da pagina e aparece uma janela, isso é o js;
    * Alteração do site ou aplicação, conforme a interação do usuário tbm é feita por ele.
* É uma linguagem baixamente tipada e dinâmica

## O que é possivel fazer?

* É possivel cria aplicações web, mobile(via **React Native**) e desktop(via **Electron**)
* Empresas famosas que usam
    * Facebook(Instagram, Whatsapp) 
    * Google
    * Uber
    * Netflix
    * Tiktok
    * ...

* 99.99% dos sites na web usam JS
* Linguagem obrigatoria pra quem programa no Front-ent
 
 ## A importancia da sintaxe no JS

 * Toda linguagem tem a sua;
 * Uma boa comunicação necessita de uma boa sintaxe;
 * A maior parte dos erros para iniciantes em programação esta na sintaxe;
    * As vezes a falta  de algo ou adição de lgo desnecessario ocasiona em erros no codigo.

    ``` js
        console.log('Olá mundo!')
    ```

## Comentarios no JS

* Os comentario são usado para algumas finalidade que são:
    * Para fazer com que uma linha não seja executada; 
    * Anotar o que uma certa parte do codigo faz;
    * Escrever anotações de revisão do codigo;
    * ...
* Podem ser feitos de duas maneira sendo elas:
    - ``// texto`` que comenta o que vem depois da barra em uma linha de codigo;
    - ``/* texto */`` este é utilizado para comentar um trecho de codigo, é usado quando precisa comentar mais de uma linha de codigo;
        * Necessário cuidado pois se não fechado corretamente pode acabar comentando o codigo inteiro após sua abertura. 

## Tipos de dados

Nesta parte temos os tipos de dados que exitem no JS.
* String
* Number
* Boolean
* Undefine
* Null
* Object
* Array

### String

É uma cadeia de Caracteres é caracterizada por
* "" aspas duplas;
* '' aspas simples;
* `` template literal ou template de strings
    * permite multiplas linha 
    * expressões de linguagem ``${1 + 1}``, tambem chamado de interpolação;
        * a interpolação permite a execução de expressões logicas, chamada de variaveis e outras coisa de forma mais simplificada.

### Number

São numeros como os que estamos habituados o js são eles
* Inteiros = 1 ;
* reais/float = 5.5(no js os numeros reais tem o ``"."`` ao inves da ``","`` );
* NaN = Not a number = normalmente ocorre quando ha algo de errado com a operação executada;
* Infinity;


### Boolean

Tem apenas dois valores
* Verdadeido / true
* Falso / false

* É muito utilizado dentro da programação, pois ele nos possibilita fazer caminhos dentro da nossa aplicação dependendo se uma afimação é falsa ou verdadeira.
    * ex: O usuário esta logado? se falso, então faça o login, se verdadeiro mostra pagina do usuario

### Undefined

* indeifinido
    * é algo que é indefinido dentro do codigo

### Null

* nulo
* um objeto que não tem nada dentro
* diferente do indefinido

### Object

* É um objeto e nele se contem as propriedade e sua funcionalidade/metodos

* O objeto do js definido assim:
* ``{name: thiago}`` sendo que ``"name"`` é uma propriedade e valor dessa propriedade é ``"thiago"``
* o objeto pode ter mais de uma propriedade e valor tbm
    ``` js
        {name:thiago
        idade: 23
        local_de_nascimento: diadema

        }
    ```
* estes ajudam a definir este objeto
    * o que ele é?
    * o que ele faz?
    * da onde ele veio? l
    
### Array(vetores)

* O array por si só é uma definido como uma lista ou agrupamento de dados
* Normalmente usado quandro precisamos catalogar diversas infomações sobre algo

``` js       
     console.log(["
     Leite",
     "Ovos",
     2,
     3])
```

* Funciona com quebra de linhas
* Ele pega onformações de acordo com os tipos de dados apresentado anteriormente: string, number etc.

## Variaveis

Variaveis são espaços na memoria onde é possivel guardar coisas, como textos, imagens, numeros entre outros.

* Tambem podemos usar variaveis como atalhos de código
* 3 palavras reservadas para criar uma variavel
    * var // cria uma variavel global que pode ser acessada em varios locais do codigo
    * let // cria uma variavel local a certa parte do cogido
    * cont // cria uma variavel local que não pode ter seu valor alterado apos sua definição

### Tipos dinamicos

- Variaveis não precisam ter um tipo previamente definido
- Podemos mudar o conteudo da variável e essa mudança pode acabar mudando o seu tipo

## Scopo

* Escopo determina a visibilidade de alguma variável no JS

### Block statement

```js
// vamos iniciar um bloco
{
    //Aqui dentro é um vlovo e posso colocar qualquer codigo

}   //aqui fechamos o bloco
```
* Toda vez que criamosum bloco criamos um novo escopo.
* hoisting é a elevação de uma parte do codigo, feita pelo proprio JS em segundo plano.

## Nomenado variaveis

* JS é case-sensitive, em outras palavas, se houver uma letra maiuscula e vai perceber ela como maiuscula, ao inves de a transformar em minuscula e vice-versa
*  JS aceita a cadeia de caracteres Unicode, ou seja, aceita ``"`` e outros caracteres especias 

- Posso
    * Iniciar com esse caracteres espericais:``$`` ``_``
    * Iniciar com letra
    * Colocar acentos
    * Letras maisuscula e munisculaz fazem diferença

- Não posso
    * Iniciar com numeros 
    * Colocar espaços vazios no nome

- Ideal
    * Criar nomes que fazem sentido, que explique o que a variável é ou faz
    * camelCase
    snaque_case
    Escrever o nome das variaveis em inglês
    * 

## Functions / Funções

A função tem o sentido que queremos dar a ela, ou seja ela é uma ferramente que customizamos a nossas necessidades dentro do js.
* Serve principalmente para agrupamento de codigo e reutilização do código

Como declaramos uma função?
```js
    function <nomeDaFunção>(){
        //codigo da função
        console.log( 'Olá mundo!')
    }
```

* A função precisa ser chamada para funcionar
* Chamando a função;
    * Para chamar a função é como se faria para chamar qualquer outra coisa, vc chama pelo nome;
    * Ex: 
    ``` js
        listaDeNomes()
    ```
    * Apos ser chamada a função executa o codigo que vc colocou dentro dela.

### Argumento e parâmetro

* Parâmetros são valores passado para uma função executada;
    * Dentro dos parenteses se encontram os argumentos
    ```js
       const soma = function(number1, number2){
            console.log(number1 + number2)
        }
    ```

* Argumentos são como variaveis que vão receber os valores da função.
    ```js
        soma(5, 8)
    ```
    * Esses valores passados seram enviados para os argumentos e depois usados dentro do ``console.log``
    para fazer o calculo

### Retornando valores

* Toda função retorna algo; 
* Toda ve z que um função encontra o ``return`` ela para o que esta fazendo e retona o valor que vem a frente do ``return``;
    * Exemplo:
    ```js
       const soma = function(number1, number2){
            let total = number1 + number2
            return total
        }
    ```
        O tipo de Função acima se chama "function expression" 
### Hoisting de funções

As funções tem um hoisting contanto que ela não sejam declarada como funções sem nome que são estas:
```js
    const imAFunction = function(){
        //códido da função
    }
```

Mas caso sejam declaradas normalmente o JS faz o hoisting da função normalmente, Lembrando Hoisting é a elevação do código, como por exemplo eu chamar a função antes mesmo de cria-la, mas o JS ainda assim da um valor a ela:
```js

    myNameIs()

     function myNameIs(){
        //códido da função
        console.log("Thiago")
    }
```

Assim o JS procura se há uma função com este nome e a puxa para sime em segundo plano figurativamente ficando mais ou menos assim:
```js

     function myNameIs(){
        //códido da função
        console.log("Thiago")
    }

    myNameIs()

```
### Arrow function

* O Arrow Function é uma forma simplificada de declara a fução do tipo expression

        Lembrando que as funções expression não tem Hoisting, logo a 
        função tem que ser usada na ordem correta a chamando depois
        de declarada.

* A declaração da arrow function é feita da seguinte maneira:
```js

   const myNameIs =  () => {
        //códido da função
        console.log("Thiago")
    }

    myNameIs()

```

### Callback function

* É como se passassemos uma função como arugumento para outra função, este pode ser feito chandando um função de fora pra dentra da sua função e ficaria assim: 
```js

   funtion myNameIs(name)  {
        //códido da função
        name()
    }

    myNameIs(
        () =>{
            console.log('estou em uma função callback')
        }
    )

```
* Permitindo que o nosso parametro possa ser executado como uma função.  

### Função construtora
* O proprio JS ja tem algumas delas pronta dentro de sí.
* Ela ser como um molde para a criação de varios objetos
* Assim que criada a adiciona um nova palavra-chave ao js o ``this``
* exemplo de criação;
    ```js

   function Person(name)  {
        //códido da função
        this.name = name
        this.wal = function(){
            return "andando"
        }
    }

    const thiago = new Person("Thiago")

* O que esse codigo faria é que dentro da função Person no criamos um molde das propriedades que serão atribuidas a o objeto quando criado.
*  A criação do objeto é feita pelo termo ``new`` que diz que um novo objeto
* Por boas praticas esse tipo de função tem o primeiro caracter em  maiuscula, ex: ``Date``, ``Person``, ``String`` 

## Manupulando dados com JS

### Prototype

Vem de prototipo, ou seja, algo que veio antes. O JS é considerada uma lingaguem baseada em prototipos, pois tudo nele é encapsualado em objetos e cada objeto é um prototipo estes prototipos compartilham metodos e propriedades

Para acessar esta funcionalidade basta colocar um ``.`` na frente do seu objeto, string, number etc. E ele te mostra as propriedade e objetos possiveis de acessar.

### Type Conversion/Coersion

* Altera um tipo de dado para outro;
    * O typeconversion somo nós que fazermos essa converção do dado;
    * O typecoersion é o proprio JS que faz isso automaticamente.

### Manipulação de Stings e numeros

* Temos funções que podem fazer este pido de converção para nos no JS sento elas:
    * Para conversão de String pra Numero
    ```js

        let string = "123"
        Number(string)
    
    ```
    * Lembra que capitulo sobre  funções contruturas vimos que o JS tem algumas já prontas? ``Number()`` é uma delas

    * Para convesão de Numero para String
    ```js

        let number = 123
        String(number)
    ```
### Contando caracteres

* Como o titulo indica neste sera mostrado como contar a quantidade de caracteres em uma palavra ou quantos digitos temos em um numero.
    * É bem simples de fazer isto com JavaScript, como mostrado as seguir:
    ```js

        let word = "Elefante"
        word.length
        let number = 1234
        String(number).length
            
    ```
    * No exemplo é mostrada a declaração de uma variavel e segui a utilização do metodo ``.length`` para contar a quantidade de caracteres em uma palavra.

            Lembrando que para mostrar a quantidade de caracteres 
            é necessario usar o ``console.log()``, ficando
            ``console.log(word.length)``. 

    * Já no caso de ver a quantidade temos que converter o numero em uma String para podermos contar quantos tem já que o metodo ``.length`` funciona a penas em Strings.

### Casa decimais

* A qui vamos ver como trocar os pontos do numero float por ``","`` e como setar a quanidade de casas de cimais depois da virgula.
    ```js

        let  number = 234.5567
        console.log(number.toFixed(2).replace(".",","))
        
    ```
    * No código acima a declaração de uma variavel de tipo float com o numero "234.5567", após a declaração do numero no o chamamos e colocamos a função ``toFixed()`` depois para fixar a quantidade de casas decimais 
        * Para fixar basta colocar a quantidade de casa dentro do parenteses da função  desta forma``toFixed(3)`` 
    * A substituição do ponto vem logo em seguida coma  função ``replace()``;
        * Nela colocamos o termo que sera substituito e qual o substituira ficando assim ``.replace(".","",)``
    * Vale lembra que os numeros float no JS são caracterizado pelo ``"."`` na casa decimal, então ao substituirmos este por uma ``","`` o tranfomamos em uma String.

### Tranformação de maiuscula em minuscula

Para fazer essa tranformação é bem simple:
* tranformação em minuscula:

    ```js

        let  word = "Olá Mundo!"
        console.log(word.toLowerCase())
        
    ```
* tranformação em maiuscula:

    ```js

        let  word = "Olá Mundo!"
        console.log(word.toUpperCase())
        
    ```
### Separando String

* Aqui Vamos ver como separar um texto com espaços em um array onde cada texto é uma posição do array. E depois vamos tranfomar o array em um texto e onde eram  espaços vamos colocar ``"_"``

    ```js
        let phrase = "Eu quero viver o Amor!"
        let myArray = phrase.split(" ")
        let phraseWithUnderscore = myArray.join("_")
        console.log(phraseWithUnderscore)
    ```
        Como já esta bem avaçado no arquivo vou começa a pular na 
        explicação que declaramos variaveis, já que apareceu bastante durante este.

    * No código acima temos o ``phrase.split(" ")`` este ``.plit`` é quem faz a separação de cada palavra em uma posição do array de acordo com o parametro passado para ele qua no caso foi o espaço vazio.
    * logo após temos o ``myArray.join`` a parte importante aq é o ``.join()`` já que é ele que faz a junção da frase novamente só que dessa vez utilizado o que demos a ele de parametro no codigo acima demos a ele ``.join("_")``

    Como um bonus algo muito util para verificar quantas palavra tem em uma frase assim como o tamanho de um array.

    ```js
        let phrase = "Eu quero viver o Amor!"
        let myArray = phrase.split(" ")
        console.log(myArray.length)
        
        let phraseWithUnderscore = myArray.join("_")
        console.log(phraseWithUnderscore)
    ```
    No código acima para verificar o tamanho do array e descobrir quantas palavras apensa adicionamos o metodo ``.length`` após a sepração dele por espaços vazios.

### Encontrando palavras
    
* É bem simples de se encontra palavras em uma frase usando JS basta incluir a função ``.includes()`` depois da variavel que contem a frase, e colocar que palavra vc esta procurando como parametro, a seguir um exemplo:
```js
        let phrase = "Eu quero viver o Amor!"
        console.log(phrase.includes("Amor"))
```
    O ``includes()`` é uma função/metodo caseSensistive, em outras
    palavra as letras maiuscula e minuscula do parametro tem que ser 
    iguais para ele encontrar a palavra.

### Criando arrays com contrutor

Funciona parece bem parecido com como criamos funções contrutoras usamos o new para cria-lo e depois passamos o que tem dentro dele como parametros

```js
    let array = new Array('a','b','c')
    Console.log(array)
```
No código acima criamos um array com os elementos a,b,c dentro dele

```js
    let array = new Array(10)
    Console.log(array)
```
No código acima criamos um array com 10 espaços vazios dentro dele

Se dentro de um array tiver uma função nós podemos executar essa função selecionando a posição dela e colocando paranteses depois 

```js
    let array[
        "a",
         2,
        function(){ return"olá!"}] 
        Console.log(array[2]())
```
### String para Array
* O proprio ``Array`` já é um objeto disponivel para nó dentro do JS então podemos chamar metodos apartir dele no caso o ``from()`` espera strings como parametro então assim que colocamos a nossa varialvel string dentro dele ele a tranforma em array separando cada caracter em uma posição.
    ```js
        let word = "virada"
        console.log(Array.from(word))
    ```
### Manipulando arrays

Nesta parte veremos como:

    Para simplificar um pouco pense como se o array já estivesse
    declarado com no de array e nós só estamo adicioando ou tirando coisas de dentro

* Adiciona um item no fim(toda vez que usamos ele adiciona algo no final);
    * seleciona o array e depois coloca o metodo ``push()``;
        * ``array.push('estar') ``.
* Adiciona im item no começo;
    * seleciona o array e depois coloca o metodo ``unshift()``;
        * ``array.unshift("oi")``.
* Remover do fim(toda vez que usamos ele remove algo do final);
    *  seleciona o array e depois coloca o metodo ``pop()``;
        * ``array.pop()``.
* Remover do começo;
    *   seleciona o array e depois coloca o metodo ``shift()``;
        * ``array.shift()`` .
* Pegar somento alguns elemento do array;
    *  seleciona o array e depois coloca o metodo ``slice()`` dentro do metodo no passa como parametro da onde que remos que ele comece a pegar e onde ele pare;
        * ``array.slice(1,2)``.
* remover 1 ou mais de qualquer posição
    *  seleciona o array e depois coloca o metodo ``splice()``, este é parecido com o anterior no colocamo como parametro a posição de onde ele começa a tira e quantos itens ele pode remover;
        * ``array.splice(1,2)`` no caso remover dois itens começando da posição 1.
* Econtrar a posição de um item;
    *  declamos uma variavel para receber a posição do ele mento e o igualamos a o array, depois seleciona o array e depois coloca o metodo ``indexOf()``, nós colocamos o que quemos econtra dentro do array, se fosse um numero seria o numero que queremos encontrar, se for uma string colocamos a string e assim em diante;
        ```js
            let index = array.indexOf("oi")

            console.log(index)
        ```

## Expressões e Operadores

### New

É uma expressão usada para cria um novo objeto

```js
    let name = new String("thiago")

```
O exemplo acima cria um objeto chamado ``"thiago"``

### typeOf, delete

São operadores do tipo unário, nos operadores unario basta colocar o valor a frente do operado que ele faz por si só uma ação:

O ``typeOf`` me tras o tipo de dado

```js
    let number = "43"
    console.log(typeOf number)
```
Já no caso do ``delete`` ele pode ser usado para deletar algo, como um atributo de onjeto ou um objeto em si.


```js
    const = person = {
        name:"Thiago",
        age: 23,

    } 

delete person.age

```

Como visto no exemplo acima que nós utilizamo o delete para deletar o atributo ``age``

### Operadores aritiméticos

* Multiplicação, o operador responsavel é o ``*``
    *  ``console.log(2.3 * 2)``

* Divisão o operador responsavel é o ``/``
    * ``console.log(2/ 2)``

* Soma o operador responsavel é o ``+``
    * ``console.log(3 + 2)``

* Subtração o operador responsavel é o ``-``
    * ``console.log(5 - 2)``

* Resto da divisão o operador responsavel é o ``%``
    * ``console.log(11 % 11)``

* Incremeto o operador responsavel é o ``++``
    * No caso do incremento e do decremento é possivel colocar o operador antes do valor para fazer com que o a operação ocorra antes como no exemplo abaixo  
    * ````js
        let number = 1
        number++
        console.log(number++) // incremento comum
        console.log(++number) // Incremento antes da operação
    ```
 

* Deremento o operador responsavel é o ``--``
    * ````js
        let number = 1
        number++
        console.log(number++) // incremento comum
        console.log(++number) // Incremento antes da operação
    ```

* Exponencial o operador responsavel é o ``**``
    * ``console.log(2 ** 2)`` seria o equivalente a 2²

### Grouping operator

Que assim como funciona na matermatica são os ``()`` eles possibilitão mudar a ordem de calculos matematico e tambem para o agrupamento de palavra no JS.

### Operadores de comparação

Estes tipos de operadores comparão dois valores e retornão um boolean dizendo se a comparação é true ou false.

- ``==`` este faz a comparação e diz se um parametro é igual ao outro
    - ```js
        let one = 1
        let three = 3

        console.log(three == 1)
        console.log(one == "1")
    ```

- ``!=`` este verifica se um parametro/argumento é diferente do outro
    - ```js
        let one = 1
        let three = 3

        console.log(three != 1)
        console.log(one != "1")
        console.log(one != 1)
    ```
### Operadores de comparação estrtritamente

No geral são bem parecido mas eles testão se tanto o valor é igual, como também se o tipo de dado também é igual e são eles:
- ``===`` este testa se o calor é igual no dois primeiros sinais de igualdade e no terceiro ele testa se o tipo do dado é igual a o do parametro também.
    - ``console.log(three !== 1)``
        ``console.log(one !== 1)``
        ``console.log(one !== '1')``

- ``!==`` este testa se o calor é diferente no dois primeiros sinais de igualdade e no terceiro ele testa se o tipo do dado difere do parametro.

### Operadores de comparação menor que e maior que(igual)

Este são identicos a forma matematica sendo eles:

* ``<`` menor que, utilizado quando, queremos quando um valor é menor que o outro;
* ``>`` maior que, utilizado quando, queremos quando um valor é maior que o outro;
* ``<=`` menor igual que, utilizado quando, queremos quando um valor é menor ou igual ao outro;
* ``>=`` maior igual que, utilizado quando, queremos quando um valor é maior ou igual ao outro;

### Operadores Lógicos

São dois valores do tipo booleano, que quando verificados retornão verdadeiro ou falso, são eles:

- AND  // ``&&`` Este precisa que os dois sejão verdadeitros para que o argumento seja verdadeiro
- OR   // ``||`` Este precisa que pelo menos um dos dois sejão verdadeitros para que o argumento seja verdadeiro
- NOT  // ``!`` Este é a negação então tudo que for verdadeiro ele o torna falso, e oque for falso ele torna verdadeiro

### Operador condicional ternário

Depedendo da condição, nos recebemos valores diferentes
Condição então valor 1 se não valor 2
``condition ? value 1 : value2`` 

```js
    let age = 17

    const canDrive = age >=18 ? "pode dirigir" : "Não pode dirigir"
    console.log(canDrive)
```
No exemplo acima temos o codigo verificando se uma pessoa tema a idade correta para dirigir, se a idade dela for maior ou igual a 18 ela pode dirigir se não ela não pode dirigir. 

### Operador de String

É a concatenação de duas string, em outras palavras seria como juntar duas palavras ou frases
* `` console.log("oi, " + "tudo bem" )``
* ```js 
    let word1 = "olá"
    let word2 = " mundo"
    console.log(word + word2 + "é um belo dia"  )

    ```
Acima temos dois tipode de concatenação um que apesnas junta Strings e ou que que junta variaveis e strings, vale comentar que tbm é possivel concatenar outros valores como numeros interios e racionais.

### Falsy / Truthy

São contextos onde um valor é considerado falso ou verdadeiro em contextos onde o booleano é obrigatório(condicionais e loops)

- Valores que o JS considera false:
    * false
    * 0 
    * -0
    * null
    * undefined
    * NaN

- Valores que o JS considera true:
    * true
    * {} 
    * []
    * 1
    * 3.23 // float
    * Infinity
    * -Infinity

### Precedencia de operadores

Em ordem de importancia para o JS

1. grouping                  ``( )``
2. negação e remento         ``!``, ``++``, ``--``
3. multiplicação e divisão   ``*``, ``/``
4. adição e subtração        ``+``, ``-``
5. relacional                ``<``, ``>``, ``<=``, ``=>`` 
6. igualdade                 ``==``, ``"==``. ``===``, ``!===``       
7. AND                        ``&&``
8. OR                         ``||``
9. condicinal                 ``?``, ``:``  
10. assignmente               ``=``, ``+=``, ``-=``, ``*=``

## Condicionais e controle de fluxo
Neste capitulo estou vendo sobre controle do fluxo da aplicação, apuração de erro, como desparar erros caso tenha, como verificar se algo esta funcionando corretamente.

### Controle de fluxo da aplicação

Toda aplicação tem um fluxo padrão, o controle de fluxo é definir o que vai acontece se fizer tal coisa na aplicação. Como se o usuario não estiver logado encaminha ele a tela de login entre outras coisas;

### If e Else

Em portugues seria se e senão, são estruturas de controle que nos ajudam a fazer o fluxo de controle da nossa aplicação, uma complementa a outra e as vezes o ``if`` pode ser usado sozinho, pois as vezes você apenas quer verificar uma coisa e não precisa de um ``else``,dentro do paranteses vai a condicional que retorna um valor true ou false entrando ou não no boloco de código,  ilustrando nos exemplos abaixo as duas formas, ;

```js
    let age = 18
    if(age >= 18){
        console.log("pode asssitir ao filme")
    } else{
        console.log("não pode asssitir ao filme")
    }

```

```js
    let age = 18
    if(age >= 18){
        console.log("tem mais de 18 anos de idade")
    } else{
    } 
```
Uma boa pratica que descobri durante o curso é que também podemos colocar as variarveis como condicionais , e assim ficaria, ficando mais ou menos assim:

```js
    let age = 18
    let appropriateAge = age >= 18
    if(apropriateAge){
        console.log("tem mais de 18 anos de idade")
    } else{
    } 
```
### Switch

É semelhante ao if mas esta te da escolhas para fazer dentro da aplicação, nesta estrutura as escolha são dita como casos ou ``case``, é necessario declarala com ``switch(){}`` assim como no ``if``, e o termo ``break`` aqui é usado para sinalizar que aquele caso acabou, senão usado o codigo escorre para ou tras opções dentro do ``switch``, já o ``default`` é utilizado para quando algo que não foi definido é passodo como opção.
```js
    switch(){
        case 'diaLimpo':
            console.log("Hoje o dia esta lindo com o tempo agradavel")
            break;
        case 'Frio':
            console.log("Hoje esta frio")
            break;
        case 'Chovendo':
            console.log("Hoje  esta chovendo")
            break;
        case 'Quente':
            console.log("Hoje o dia esta muito quente")
            break;
        default: 
            console.log("Não definido")
            break
    }
```
Dentro de uma função:


```js
   function calculate(number1, operator, number2){
    let result

    switch(operator){
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;
        default: 
            console.log("Não definido")
            break
    }
    return result
   }
   
```

Execução da função com switch:
```js
    calculate(4, '+', 5)
```

Se faz necessario colocar o parametro/condicional do switch como valor do case que vc quer selecionar.

### Throw e Try/Catch
É utilizado para capturar erros.

Throw é como se fosse arremessar algo normalmente é usado para mandar mensagens de erro, ou alguma mensagem, para utilizar o ``throw`` corretamente precisamos do ``try/catch`` pois caso usado incorretamente ele para a aplicação caso a mensagem que foi jogada não seja pega.
            
    O "throw" para a execução do bloco de código onde ele é inserido,
    mas caso não usado o "try/catch" ele para a aplicação inteira,
    então tomar cuidado para não esquecer 

Try/catch é algo como "tente pegar" esta é a parte do codigo que vai tentar pegar o que o ``throw`` jogou para a gente, exemplo a seguir:

```js
   function myName(name = ''){
        if(name === ''){
            throw 'Nome é obrigatorio'
        }
   }

   try{
        myName()
   }catch(e){
        console.log(e)
   }
   
```
Caso a função seja executada corretamente ele vai passar o valor correto.
## Estruturas de repetição

### For

No ``for`` é possivel executar um bloco de código enquanto as condições forem acatadas, como no código abaixo:

```js
    for(let i=0, i<=10, i++){
        console.log(i)
    }
```
No código é instriudo que sexa executado o ``console.log`` enquanto ``i`` for menor ou igual que 10, a delcaração do ``for`` é dada pela declaração de uma variavel index, uma condição para a parada do loop e um incremento.

Tambem podemos usa o ``break`` para parar o loop antes ou usar o ``continue`` para pular um loop estes são feitos dentro de um ``if`` como por exemplo: 

Pula o loop de numero 5
```js
    for(let i=0, i<=10, i++){
        if(i === 5){
            continue;
        
        }

    }
```

Para o loop quando o index chegar a 5
```js
    for(let i=0, i<=10, i++){
        if(i === 5){
            break;
        
        }

    }
```

### While

While significa em portugue enquanto, então enquanto a condição dele estive certa ele continua executando o código dentro dele:

```js
    let i = 10
    while(i >= 0){
        console.log(i)

        i--
    }
```
No código acima ele continua executando enquanto ``i`` for maior ou igua a 0, e o decremento vai fazer com que ele chegue a menor que 0.

### For...of 

Esta estrutura vai cria um loop atraves de uma variavel que nos tivermos declarado previamente.

```js
    let name = 'Thiago'
    for(let char of name){
        console.log(char)

    }
```
no código acima ele vai pegar caracter por caracter da string name e vai imprimir ``no console.log``, no case de ser um array ele pegaria cada elemento do array do primeiro no index até o ultimo e impimiria pelo ``console.log``.

### For in

Este cria um loop emcima de um objeto:

```js

    let person = {
        name:'Thiago',
        age: 23,
        wheight: 72
    }
    for(let property in person){
    //acessa a propriedade
        console.log(property)
    //acessa os valores das propriedades do objeto person
        console.log(person[property])

    }
```
### Consolidando com exercicios

#### Sistema de notas escolares

Crie um algoritmo que tranforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

* entre 90 - 100 - A
* entre 80 - 89  - B
* entre 70 - 79  - C
* entre 60 - 69  - D
* menor que 60   - F

#### Fluxo de caixa familiar

* Crie um objeto que possuirá 2 propriedade, ambas do tipo array
    * receitas:[]
    * despesas:[]

Agora, crie uma função que irá calcular o total de receista e dispesas e ié mostra uma mensagem se a Familia esta com o saldo posistivo ou negativo, seguido do valor do saldo.

#### Celsius para Fahrenheit

Crie uma função que receba uma string em celcius ou fahrenheit e faça a tranformação de uma unidade para a outra

* C = (F - 32) * 5/9
* F = C* 9/5 + 32

#### Buscando e encontrando dado em Array

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

* Contar o numero de categorias e o numero de livros em cada categoria
* Contar o numero de autores
* Mostrar livros do autor Auguto Cury
* Transformar a função acima em uma função que ira receber o nome do auto e devolver os livros desse autor