const form = document.getElementById('form'); 
const auteur= document.getElementById ('auteur')
const bouton = document.getElementById('soumettre'); 
const citation= document.getElementById('citation')

form.addEventListener('input', () => {
console.log(form)

})

auteur.addEventListener('input', () => {
    console.log(auteur)
})

bouton.addEventListener('click', () => {
    console.log(citation)
    console.log(auteur)
    // Afficher citation
    // Afficher auteur
})

document.getElementById('affichage').innerText = `"${citation.value}" — ${auteur.value}`;


