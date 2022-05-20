const menu = document.querySelector('.menu')

const hamburger = document.querySelector('.hamburger')

const bar = document.querySelector('.bar')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
  
})  

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click',()=>{
    hamburger.classList.remove('active')
    menu.classList.remove('active')
}))


