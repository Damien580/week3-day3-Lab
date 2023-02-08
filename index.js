console.log('hello world')
let message = document.querySelector('#message')

const addMovie = evt => {
    evt.preventDefault()
    let inputField = document.querySelector("input")
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement("button")
    deleteBtn.addEventListener("click",deleteMovie)
    movie.appendChild(deleteBtn)
    deleteBtn.textContent = "X"
    let ul = document.querySelector("ul")
    ul.appendChild(movie)
    inputField.value = ""

}
const deleteMovie = evt =>{
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
} 
const crossOffMovie = evt =>{
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = "Movie Watched!"

    } else 
        message.textContent = "Movie added back!"
    }



const form = document.querySelector("form")

form.addEventListener("submit",addMovie)