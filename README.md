# Estudo de Javascript

Neste repositorio estou registrando meus estudo em js(JavaScript), para futuras revisões e tirada de duvidas.

## Sobre o JS

* Ele é uma linguagem de programação que roda no navegador do usuário(front-end)
    * Se vc clicar em algum botão da pagina e aparece uma janela, isso é o js;
    * Alteração do site ou aplicação, conforme a interação do usuário tbm é feita por ele.
* É uma linguagem baixamente tipada e dinâmica

## O que é possivel fazer?

* É possivel criar aplicações web, mobile(via **React Native**) e desktop(via **Electron**)
* Empresas famosas que usam:
    * Facebook(Instagram, Whatsapp) 
    * Google
    * Uber
    * Netflix
    * Tiktok
    * ...

* 99.99% dos sites na web usam JS
* Linguagem obrigatoria pra quem programação no Front-ent
 
 ## A importancia da sintaxe no JS

 * Toda linguagem tem a sua;
 * Uma boa comunicação necessita de uma boa sintaxe;
 * A maior parte dos erros para iniciantes em programação esta na sintaxe;
    * As vezes a falta de algo ou adição de algo desnecessario ocasiona em erros no codigo.

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
        * a interpolação permite a execução de expressões logicas, chamada de variaveis e outras coisas de forma mais simplificada.

### Number

São numeros como os que estamos habituados no js são eles
* Inteiros = 1 ;
* reais/float = 5.5(no js os numeros reais tem o ``"."`` ao inves da ``","`` );
* NaN = Not a number = normalmente ocorre quando ha algo de errado com a operação executada;
* Infinity;


### Boolean

Tem apenas dois valores
* Verdadeiro / true
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

* O objeto do js é definido assim:
* ``{name: thiago}`` sendo que ``"name"`` é uma propriedade e valor dessa propriedade é ``"thiago"``
* o objeto pode ter mais de uma propriedade e valor tbm
    ``` js
        {name:thiago
        idade: 23
        local_de_nascimento: diadema

        }
    ```
* estes ajudam a definir o objeto
    * O que ele é?
    * O que ele faz?
    * Da onde ele veio? 
    
### Array(vetores)

* O array por si só é definido como uma lista ou agrupamento de dados
* Normalmente usando quando precisamos catalogar diversas infomações sobre algo

``` js       
     console.log(["
     Leite",
     "Ovos",
     2,
     3])
```

* Funciona com quebra de linhas
* Ele pega informações de acordo com os tipos de dados apresentado anteriormente: string, number etc.

## Variaveis

Variaveis são espaços na memoria onde é possivel guardar coisas, como textos, imagens, numeros entre outros.

* Tambem podemos usar variaveis como atalhos de código
* Temos 3 palavras reservadas para criar uma variavel
    * `var` // cria uma variavel global que pode ser acessada em varios locais do codigo
    * `let` // cria uma variavel local destinada a certa parte do codigo
    * `const` // cria uma variavel local que não pode ter seu valor alterado após sua definição

### Tipos dinamicos

- Variaveis que não precisam ter um tipo previamente definido em js
- Podemos mudar o conteudo da variável e essa mudança pode acabar mudando o seu tipo
   * Por exemplo mudar de uma string para number

## Escopo

* Escopo para variavel determina a visibilidade dela no JS

### Block statement

```js
// vamos iniciar um bloco
{
    //Aqui dentro é um bloco e posso colocar qualquer codigo

}   //aqui fechamos o bloco
```
* Toda vez que criamos um bloco criamos um novo escopo.
* hoisting é a elevação de uma parte do codigo, feita pelo proprio JS em segundo plano.

## Nomeando variaveis

* JS é case-sensitive, em outras palavas, se houver uma letra maiuscula ele vai perceber ela como maiuscula, ao inves de a transformar em minuscula e vice-versa
*  JS aceita a cadeia de caracteres Unicode, ou seja, aceita `"` e outros caracteres especias 

- Posso
    * Iniciar com esse caracteres espericais:`$` `_`
    * Iniciar com letra
    * Colocar acentos
    * Letras maiusculas e minusculas fazem diferença

- Não posso
    * Iniciar com numeros 
    * Colocar espaços vazios no nome

- Ideal
    * Criar nomes que fazem sentido, que explique o que a variável é ou faz
    * camelCase
    snake_case
    * Escrever o nome das variaveis em inglês
      

## Functions / Funções

A função tem o sentido que queremos dar a ela, ou seja ela é uma ferramente que customizamos a nossas necessidades dentro do js.
* Serve principalmente para agrupamento de codigo e reutilização do código

Como declaramos uma função?
```js
    function <nomeDaFunção>(){
        //codigo da função
        return console.log( 'Olá mundo!')
    }
```

* A função precisa ser chamada para funcionar
* Chamando a função;
    * Para chamar a função é como se faria para chamar qualquer outra coisa, vc chama pelo nome;
    * Ex: 
    ``` js
        listaDeNomes()
    ```
    * Apos ser chamada a função executa o codigo que escrito dentro dela.

### Argumento e parâmetro

* Parâmetros são valores passados para uma função executada;
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
    * Esses valores passados seram enviados para os argumentos e depois usados dentro do `console.log`
    para fazer o calculo

### Retornando valores

* Toda função retorna algo; 
* Toda vez que um função encontra o `return` ela para o que esta fazendo e retona o valor que vem a frente do `return`;
    * Exemplo:
    ```js
       const soma = function(number1, number2){
            let total = number1 + number2
            return total
        }
    ```
        O tipo de Função acima se chama "function expression"
 
### Hoisting de funções

As funções tem um hoisting contanto que ela não sejam declaradas como funções sem nome que são estas:
```js
    const imAFunction = function(){
        //códido da função
    }
```

Mas caso sejam declaradas normalmente o JS faz o hoisting da função normalmente, lembrando Hoisting é a elevação do código, como por exemplo eu chamar a função antes mesmo de cria-la, mas o JS ainda assim da um valor a ela:
```js

    myNameIs()

     function myNameIs(){
        //códido da função
        console.log("Thiago")
    }
```

Assim o JS procura se há uma função com este nome e a puxa para cima em segundo plano figurativamente ficando mais ou menos assim:
```js

     function myNameIs(){
        //códido da função
        console.log("Thiago")
    }

    myNameIs()

```
### Arrow function

* O Arrow Function é uma forma simplificada de declarar a função do tipo expression

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

* É como se passassemos uma função como arugumento para outra função, este pode ser feito chandando uma função de fora para dentro da sua função e ficaria assim: 
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
* O proprio JS ja tem algumas delas prontas dentro de sí.
* Ela serve como um molde para a criação de varios objetos
* Assim que criada a adiciona um nova palavra-chave ao js o ``this``
* exemplo de criação;
    ```js

   function Person(name)  {
        //códido da função
        this.name = name
        this.walk = function(){
            return "andando"
        }
    }

    const thiago = new Person("Thiago")

* O que esse codigo faria é que dentro da função Person no criamos um molde das propriedades que serão atribuidas ao objeto quando criado.
*  A criação do objeto é feita pelo termo ``new`` que diz que um novo objeto foi criado
* Por boas praticas esse tipo de função tem o primeiro caracter em letra maiuscula, ex: ``Date``, ``Person``, ``String`` 

## Manupulando dados com JS

### Prototype

Vem de prototipo, ou seja, algo que veio antes. O JS é considerada uma lingaguem baseada em prototipos, pois tudo nele é encapsualado em objetos e cada objeto é um prototipo estes prototipos compartilham metodos e propriedades

Para acessar esta funcionalidade basta colocar um ``.`` na frente do seu objeto, string, number etc. E ele te mostra as propriedade e objetos possiveis de acessar.

### Type Conversion/Coersion

* Altera um tipo de dado para outro;
    * O typeconversion somos nós que fazermos essa converção do dado;
    * O typecoersion é o proprio JS que faz isso automaticamente.

### Manipulação de Strings e numeros

* Temos funções que podem fazer este tipo de converção para nos no JS sendo elas:
    * Para conversão de String pra Numero
    ```js

        let string = "123"
        Number(string)
    
    ```
    * Lembra que no capitulo sobre funções contruturas vimos que o JS tem algumas já prontas? `Number()` é uma delas

    * Para conversão de Numero para String
    ```js

        let number = 123
        String(number)
    ```
### Contando caracteres

* Como o titulo indica nesta parte sera mostrado como contar a quantidade de caracteres em uma palavra ou quantos digitos temos em um numero.
    * É bem simples de fazer isto com JavaScript, como mostrado as seguir:
    ```js

        let word = "Elefante"
        word.length
        let number = 1234
        String(number).length
            
    ```
    * No exemplo é mostrada a declaração de uma variavel e em seguida a utilização do metodo ``.length`` para contar a quantidade de caracteres em uma palavra.

            Lembrando que para mostrar a quantidade de caracteres 
            é necessario usar o ``console.log()`` ou outras formas
            para mostrar ao usuario, ficando ``console.log(word.length)``. 

    * Já no caso de ver a quantidade de digitos temos que converter o numero em uma String para podermos contar quantos tem já que o metodo ``.length`` funciona a penas em Strings.

### Casa decimais

* Aqui vamos ver como trocar os pontos do numero float por ``","`` e como setar a quantidade de casas decimais depois da virgula.
    ```js

        let  number = 234.5567
        console.log(number.toFixed(2).replace(".",","))
        
    ```
    * No código acima a declaração de uma variavel de tipo float com o numero "234.5567", após a declaração do numero nos o chamamos e colocamos a função ``toFixed()`` depois para fixar a quantidade de casas decimais 
        * Para fixar basta colocar a quantidade de casa dentro dos parenteses da função desta forma `toFixed(3)` 
    * A substituição do ponto vem logo em seguida com a função `replace()`;
        * Nela colocamos o termo que sera substituito e qual o substituira ficando assim `.replace("substituido","substituto")`
    * Vale lembra que os numeros float no JS são caracterizado pelo `"."` na casa decimal, então ao substituirmos este por uma `","` o transformamos em uma String.

### Transformação de maiuscula em minuscula

Para fazer essa tranformação é bem simple basta usar os metodos `.toLoweCase()` para minuscula e `.toUpperCase()` para maiuscula:
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

    * No código acima temos o ``phrase.split(" ")`` este ``.split`` é quem faz a separação de cada palavra em uma posição do array de acordo com o parametro passado para ele qua no caso foi o espaço vazio.
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
* Encontrar a posição de um item;
    *  declamos uma variavel para receber a posição do ele mento e o igualamos a o array, depois seleciona o array e depois coloca o metodo ``indexOf()``, nós colocamos o que quemos encontra dentro do array, se fosse um numero seria o numero que queremos encontrar, se for uma string colocamos a string e assim em diante;
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

* Multiplicação, o operador responsavel é o `*`
    *  `console.log(2.3 * 2)`

* Divisão o operador responsavel é o `/`
    * `console.log(2/ 2)`

* Soma o operador responsavel é o `+`
    * `console.log(3 + 2)`

* Subtração o operador responsavel é o `-`
    * `console.log(5 - 2)`

* Resto da divisão o operador responsavel é o `%`
    * `console.log(11 % 11)`

* Incremeto o operador responsavel é o `++`
    * No caso do incremento e do decremento é possivel colocar o operador antes do valor para fazer com que o a operação ocorra antes como no exemplo abaixo  
    * ````js
        let number = 1
        number++
        console.log(number++) // incremento comum
        console.log(++number) // Incremento antes da operação
    ```
 

* Deremento o operador responsavel é o `--`
    * ```js
        let number = 1
        number++
        console.log(number++) // incremento comum
        console.log(++number) // Incremento antes da operação
    ```

* Exponencial o operador responsavel é o `*`
    * `console.log(2 ** 2)` seria o equivalente a 2²

### Grouping operator

Que assim como funciona na matermatica são os `()` eles possibilitão mudar a ordem de calculos matematico e tambem para o agrupamento de palavra no JS.

### Operadores de comparação

Estes tipos de operadores comparão dois valores e retornão um boolean dizendo se a comparação é true ou false.

- `==` este faz a comparação e diz se um parametro é igual ao outro
    - ```js
        let one = 1
        let three = 3

        console.log(three == 1)
        console.log(one == "1")
    ```

- `!=` este verifica se um parametro/argumento é diferente do outro
    - ```js
        let one = 1
        let three = 3

        console.log(three != 1)
        console.log(one != "1")
        console.log(one != 1)
    ```
### Operadores de comparação estrtritamente

No geral são bem parecido mas eles testão se tanto o valor é igual, como também se o tipo de dado também é igual e são eles:
- `===` este testa se o calor é igual no dois primeiros sinais de igualdade e no terceiro ele testa se o tipo do dado é igual a o do parametro também.
    - `console.log(three !== 1)`
        `console.log(one !== 1)`
        `console.log(one !== '1')`

- `!==` este testa se o calor é diferente no dois primeiros sinais de igualdade e no terceiro ele testa se o tipo do dado difere do parametro.

### Operadores de comparação menor que e maior que(igual)

Este são identicos a forma matematica sendo eles:

* `<` menor que, utilizado quando, queremos quando um valor é menor que o outro;
* `>` maior que, utilizado quando, queremos quando um valor é maior que o outro;
* `<=` menor igual que, utilizado quando, queremos quando um valor é menor ou igual ao outro;
* `>=` maior igual que, utilizado quando, queremos quando um valor é maior ou igual ao outro;

### Operadores Lógicos

São dois valores do tipo booleano, que quando verificados retornão verdadeiro ou falso, são eles:

- AND  // `&&` Este precisa que os dois sejão verdadeitros para que o argumento seja verdadeiro
- OR   // `||` Este precisa que pelo menos um dos dois sejão verdadeitros para que o argumento seja verdadeiro
- NOT  // `!` Este é a negação então tudo que for verdadeiro ele o torna falso, e oque for falso ele torna verdadeiro

### Operador condicional ternário

Depedendo da condição, nos recebemos valores diferentes
Condição então valor 1 se não valor 2
`condition ? value 1 : value2` 

```js
    let age = 17

    const canDrive = age >=18 ? "pode dirigir" : "Não pode dirigir"
    console.log(canDrive)
```
No exemplo acima temos o codigo verificando se uma pessoa tema a idade correta para dirigir, se a idade dela for maior ou igual a 18 ela pode dirigir se não ela não pode dirigir. 

### Operador de String

É a concatenação de duas string, em outras palavras seria como juntar duas palavras ou frases
* ` console.log("oi, " + "tudo bem" )`
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

1. grouping                  `( )`
2. negação e incremento         `!`, `++`, `--`
3. multiplicação e divisão   `*`, `/`
4. adição e subtração        `+`, `-`
5. relacional                `<`, `>`, `<=`, `=>` 
6. igualdade                 `==`, `"==`. `===`, ``!===``       
7. AND                        `&&`
8. OR                         `||`
9. condicinal                 `?`, `:`  
10. assignmente               `=`, `+=`, `-=`, `*=`

## Condicionais e controle de fluxo
Neste capitulo estou vendo sobre controle do fluxo da aplicação, apuração de erro, como desparar erros caso tenha, como verificar se algo esta funcionando corretamente.

### Controle de fluxo da aplicação

Toda aplicação tem um fluxo padrão, o controle de fluxo é definir o que vai acontece se fizer tal coisa na aplicação. Como se o usuario não estiver logado encaminha ele a tela de login entre outras coisas;

### If e Else

Em portugues seria se e senão, são estruturas de controle que nos ajudam a fazer o fluxo de controle da nossa aplicação, uma complementa a outra e as vezes o `if` pode ser usado sozinho, pois as vezes você apenas quer verificar uma coisa e não precisa de um `else`,dentro do paranteses vai a condicional que retorna um valor true ou false entrando ou não no boloco de código,  ilustrando nos exemplos abaixo as duas formas, ;

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

É semelhante ao if mas esta te da escolhas para fazer dentro da aplicação, nesta estrutura as escolha são dita como casos ou `case`, é necessario declarala com `switch(){}` assim como no `if`, e o termo `break` aqui é usado para sinalizar que aquele caso acabou, senão usado o codigo escorre para ou tras opções dentro do `switch`, já o `default` é utilizado para quando algo que não foi definido é passodo como opção.
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

Throw é como se fosse arremessar algo normalmente é usado para mandar mensagens de erro, ou alguma mensagem, para utilizar o `throw` corretamente precisamos do `try/catch` pois caso usado incorretamente ele para a aplicação caso a mensagem que foi jogada não seja pega.
            
    O "throw" para a execução do bloco de código onde ele é inserido,
    mas caso não usado o "try/catch" ele para a aplicação inteira,
    então tomar cuidado para não esquecer 

Try/catch é algo como "tente pegar" esta é a parte do codigo que vai tentar pegar o que o `throw` jogou para a gente, exemplo a seguir:

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

No `for` é possivel executar um bloco de código enquanto as condições forem acatadas, como no código abaixo:

```js
    for(let i=0, i<=10, i++){
        console.log(i)
    }
```
No código é instriudo que sexa executado o `console.log` enquanto `i` for menor ou igual que 10, a delcaração do `for` é dada pela declaração de uma variavel index, uma condição para a parada do loop e um incremento.

Tambem podemos usa o `break` para parar o loop antes ou usar o `continue` para pular um loop estes são feitos dentro de um `if` como por exemplo: 

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
No código acima ele continua executando enquanto `i` for maior ou igua a 0, e o decremento vai fazer com que ele chegue a menor que 0.

### For...of 

Esta estrutura vai cria um loop atraves de uma variavel que nos tivermos declarado previamente.

```js
    let name = 'Thiago'
    for(let char of name){
        console.log(char)

    }
```
no código acima ele vai pegar caracter por caracter da string name e vai imprimir `no console.log`, no case de ser um array ele pegaria cada elemento do array do primeiro no index até o ultimo e impimiria pelo `console.log`.

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

## DOM(Document Object Model)

* É o HTML convertido para um Onjeto JS
* API que representa e interage com o HTML 
    * API é tudo que nos ajuda a interagir com algo dentro da programação 
* Estrutura de dados do tipo árvore, criada pelo browser
*  Propriedades e métodos

### Para que?

* JS usa a DOM para se conectar ao HTML
* Manipular o HTML com o JS
* Você só programa para WEB poruqe existe a DOM

### Selecioando elementos

*  `getElementById`
    - Este método usa o `id` do elemento HTML para seleciona-lo
    ```js
        document.getElementById('titulo-principal') 
    ```

*  `getElementsByClassName`
    - É bem parecido com o caso de cima mas ele pode seleciona mais de um elemento contanto que o nome da classe seja igual;
    ```js
        document.getElementsByClassName('paragrafo') 
    ```
    - Usado caso só precise dos elementos sem precisar passar por um loop

*  `getElementsByTagName`
    - É bem parecido com o caso de cima e ele também pode seleciona mais de um elemento mas ele seleciona diretamente pelo nome da tag HTML;
    ```js
        document.getElementByTagName('titulo-principal') 
    ```
    - Usado caso só precise dos elementos sem precisar passar por um loop

*  `querySelector`
    - É o mais versatil dos seletores e ele seleciona por seletor, e funciona como no CSS, mas ele esta versão só pega o primeiro que ele achar na pagina 
    ```js
        document.querySelector('.paragrafo') 
    ```
    - No casos acima selecionamo uma classe `paragrafo`

*  `querySelectorAll` 
    - Traz uma lista de nós
    - É parecido com o caso acima mas ele pode selecionar todos do tipo de seletor que voce colocou dentro do parênteses
    - Diferença entre nodeList e HTMLcolection
        * O nodeList pode usar um forEach para passar por dentro da lista e mostra o conteudo da lista, possibilitando buscar um elemento especifico também. 
    ```js
        document.querySelectorAll('p') 
    ```
    - Usado caso precise fazer um forEach em algum momento do elementos na aplicação 

### Manipulando conteúdos

* `textContent`
    - Ele pega o elemento e pode tanto mudar o conteudo do elemento selecionado quanto concatenar com mais alguma valor os dois seram mostrados a seguir   
    ```js
        const element = document.querySelector('h1')
        
         element.textContent = "Olá mundo!"
    ```
    Concatena o conteudo do elemento HTML com o valor do `textContent`
    ```js
        const element = document.querySelector('h1')
        
         element.textContent += "Olá mundo!"
    ```

* innerText
    - Acontece a mesma coisa do acima, mas ele muda apenas o texto interior do elemento
    ```js
        const element = document.querySelector('h1')
        
         element.innerText = "Olá mundo!"
    ```

* innerHTML
    - Nos possibilita trocar o conteudo do elemento HTML mas também nos possibilita colocar mais HTML por meio do JS como colocar um paragra ou colocar uma parte do texto em negrito/bold  
    ```js
        const element = document.querySelector('h1')
        
         element.innerHTML = "Olá <strong>mundo</strong>!"
    ```

* value
    - Serve tanto para mostra os valores quanto para alterar os valores dos Inputs
    ```js
        const element = document.querySelector('h1')
        
         element.textContent = "Olá mundo!"
    ```
### Manipulando atributos
- `setAttribute`
    * Adicionar um atributo a um elemento HTML
       ```js
        const element = document.querySelector('header')
            //adiciona um id chamado "header"
         element.setAttribute('id','header') 
            // Pega o id adicionado acima
         const headerID = document.querySelector('#header')
    ```
- `removeAtributtribute`
    * remove o atributo de um elemento HTML
       ```js
        const element = document.querySelector('header')
            //adiciona um id chamado "header"
         element.setAttribute('id','header') 
            // Pega o id adicionado acima
         const headerID = document.querySelector('#header')
            //remove o atributo id adicinado acima
         header.removeAttribute('id')
    ```

### Manipulando estilos e classes

É possivel colocar CSS na pagina a partir do JS da seguinte forma:
```js
    const element = document.querySelector('h1')
        
    element.style.color = "#00AA3F"

```
O CCS no JS pode ser chamado no estilo camelCase ao inves de como no CSS padrão nos tiramos o `"background-color"` e colocamos `"backgroundColor"`  

#### Alterando classes
* `classList`
    - Traz a lista de classes dentro do elemento selecionado
    ```js
        const element = document.querySelector('h1')
        
         element.classList
    ```
* `add()`
    - Adiciona uma ou mais classes
    ```js
        const element = document.querySelector('h1')
            //adiciona as classes 'active' e 'green' ao elemento selecionado
         element.classList.add('active', 'green')
    ```
* `remove()`
    - remove uma classe
    ```js
        const element = document.querySelector('h1')
            //remove a classes 'active' do elemento
         element.classList.remove('active') 
    ```
* `toggle()`
    - Adiciona ou remover uma classes dependendo se ela existe ou não no documento
    ```js
        const element = document.querySelector('h1')
            // se a classe 'active' existe ele a remove se não ele a adiciona.
         element.classList.toggle('active')
    ```
### Navegando pelos elementos

* `parentElement` 
    - Pega o elemento pai do elemento selecionado
    ```js
        const element = document.querySelector('h1')
            // no caso o pai do 'h1'
         element.parentElement
         console.log(element.parentElement)
    ```
* `parentNode`
    - Pega o no pai do elemento selecionado
    ```js
        const element = document.querySelector('h1')
            // no caso o nó pai do 'h1'
         element.parentNode
         console.log(element.parentNode)
    ```
#### Pegando elementos filhos

* `childNode`
    - traz um nodeList dos elemento filhos 
* `children`
    - traz um HTMLcolection
* `lastElementChild`
    - pega o ultimo elemento filho
* `firstElementChild`
    - pega o primeiro elemento filho

            Vale lebra que é necessario o "." para chamar esses metodo
#### Buscando irmãos
* `nextElementSibling`
    - pega o proximo irmão ele leva em consideração o espaço vazio do codigo
* `nextElementSiblingElement`
    - pega o proximo elemento irmão
* `previousSiblingElement`
    - pega o elemento irmão anterior
* `previousSibling`
    - pega o  irmão anterior ele leva em consideração o espaço vazio do codigo

### Criando e adicionando elementos na página
* `createElement`
    - cria um elemento HTML por meio do JS
* `append`
    - Adiciona o elemento criado apos o ultimo filho do elemento selecionado 
* `prepend`
    - Adiciona o elemento criado como o primeiro filho do elemento selecionado

```js 
    //cirando elemento com createElement
    const div = document.createElement("div")
    div.innerText = "Olá Mundo"

    // append e prepend
    const body = document.querySelector("body")
    // adiciona a div a pagina como ultimo filho do body 
    //body.append(div)

    //adicina a div a pagina como primeiro filho do body
    body.prepend(div)
```

* `insertBefore`
    - Adiciona antes de um elemento HTML especifico
    ```js 
        //criando elemento com createElement
        const div = document.createElement("div")
        div.innerText = "Olá Mundo"

        const body = document.querySelector("body")
        const header = body.querySelector('header')
        // insere antes do elemento script do HTML
        body.insertBefore(div, script)
        //simula um insertAfter já o JS  não tem um naturalmente
        body.insertBefore(div, header.nextSibling)

    ```
 
### Evento JS

#### Adiconando eventos via HTML
Uma das maneira de adicionar eventos JS no HTML é colocar como atributo no proprio elemento HTML e temos varios destes atributos como: onmouseover, onclick, ondoubleclick e etc. No caso você colocaria o atributo e dentro dele a função que quer executar 

```html
    <button onclick='send()'>Enviar</button>
```
#### Adicinando via teclado e JS
Também podemos colocar eventos por teclado e para isso nos usamos o `onkeyup` toda vez que soltamos a tecla dentro do input ele roda a função, `onkeydown` toda vez que precionamos a tecla dentro do input ele roda a função e `onkeypress` executa a função sempre que pressionamos a tecla.

```js 
        
    const input = document.querySelector("input")
    // e tambem podemos apenas mudar o onkey press pelo onkeyup
    // ou pelo onkeydown para usar o evento 
    input.onkeypress = function(){
        console.log(rodei)
    }

```
#### Adicionando evendo via JS

Quando fazemos os eventos por meio do JS nos usamos o `addEventListener` é uma função que é disparada quando algo acontece ao elemento que ele esta acoplado ele dispara um o codigo 

```js 
        //seleciona o h1
    const h1 = document.querySelector("h1")

    //adiciona um monitorador de evento ao elemento h1
    //no caso esta esperando um click e vai disparar
    //a função print logo abaixo
    h1.addEventListener('click', print)
    function print(){
        console.log(rodei)
    }
```
#### Argumento event

É o argumento evento que por vezes vai dentro de uma função este argumento pega o evento que esta associado ao elemento e pode nos passar varias infomações do valor que esta sendo inserido em um campo ao tipo de evento que esta sendo disparado. E nois também podemos escolher o tipo de informações que ele nos da com o `"."`.

```js 
        
    const input = document.querySelector("input")
    // o evento é o onkeypress
    input.onkeypress = function(event){
        //imprime no console o que o eventa nos passa
        console.log(event)
    }

```

### Exercicio modal

Fazer com que exiba um modal quando clicado no botão e fazer com que o modal feche quando clicado na tecla `ESC` 
