//const citationInput= document.getElementById('citation-input'); 
//const authorInput= document.getElementById ('author-input')
//const bouton = document.getElementById('soumettre'); 
const citation= document.getElementById('citation')
//const text= document.getElementById('text')
const author=document.getElementById('author')
const form=document.getElementById('form')



form.addEventListener('submit', (event) => {
    event.preventDefault()
   const citationValue= event.target.citationInput.value
   const authorValue= event.target.authorInput.value
   citation.innerHTML=citationValue
   author.innerHTML=authorValue
})



function addQuote(quote, author) {
    
}
