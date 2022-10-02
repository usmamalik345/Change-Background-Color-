const bodycolor = document.querySelector('body')
const btnPress  = document.querySelector('.button')


const color = ["blue", "Green", "purple", "pink"]

btnPress.addEventListener('click', change)


function change(){
    let random = Math.floor(Math.random()*color.length) 

    bodycolor.style.backgroundColor = color[random]
}