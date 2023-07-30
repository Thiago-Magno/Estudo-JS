const booksByCategory = [
    //primeiro do arrya
    {
        category: "Riqueza",
        books:[{
                title:"os segredos da mente milionária",
                author:"T. Har Eker",
            },
            {
                title:"O homem mais rico da babilônia",
                author:"George S. Clason",
            },
            {
                title:"Pai rico, pai pobre",
                author:"Robert T. Kiyosaki e Sharon L lechter",
            },
        ],

    },
    //segundo do arrya
    {
        category: "Inteligencia Emocional",
        books:[
            {
                title:"Você é isubstituível",
                author:"Augusto Cury",
            },
            {
                title:"Ansiedade - Como enfrentar o mal do século",
                author:"Augusto Cury",
            },
            {
                title:"os 7 hábitos das pessoas altamente eficazes",
                author:"Stephen R. Covey",
            },
        ],
    },

]

const totalCategories = booksByCategory.length
//conta quantos litro tem em cada categoria
for (let category of booksByCategory){
    console.log('total de livros da categoria: ', category.category)
    console.log(category.books.length)
    
}
// conta o numero de autores
function countAuthors() {
    let authors = []

    for (let category of booksByCategory) {
        for (let books of category.books) {
            if (authors.indexOf(books.author)== -1) {
                authors.push(books.author)
            }
        }
    }
    console.log("total de autores: ", authors.length)
}

//conta o numero de livros do autor Augusto Cury
function booksOfAugustoCury() {
    let books = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }
    console.log("Livros de Augusto Cury: ", books)
}

function booksByAuthor(author) {
    let books = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

countAuthors()
booksOfAugustoCury()
booksByAuthor('T. Har Eker')