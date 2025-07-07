//const citationInput= document.getElementById('citation-input'); 
//const authorInput= document.getElementById ('author-input')
//const bouton = document.getElementById('soumettre'); 
const citationValue = document.getElementById('citation')
//const text= document.getElementById('text')
const authorValue = document.getElementById('author')
const form = document.getElementById('form')
const quoteList = document.getElementById('quote-list')
//console.log("quote list",quoteList)
const count = document.getElementById('count')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const citation = event.target.citationInput.value
    console.log("citation", citation)
    const author = event.target.authorInput.value
    console.log("author", author)
    //const paragraphe= document.createElement('p')
    //citation.innerHTML=citationValue
    //author.innerHTML=authorValue
    //paragraphe.innerText=citationValue
    //quoteList.appendChild(paragraphe)
    addQuote(citation, author)
})



function addQuote(quote, author) {
    const citationParagraphe = document.createElement('p')
    citationParagraphe.innerText = quote
    const auteurParagraphe = document.createElement('p')
    auteurParagraphe.innerText = author
    quoteList.appendChild(citationParagraphe)
    quoteList.appendChild(auteurParagraphe)
    quoteCount += 1 
    count.innerText = quoteCount

}
let quoteCount = 0

