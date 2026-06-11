const search = document.querySelector('.search')
const button = document.querySelector('.btn')
const input = document.querySelector('.input')
button.addEventListener('click' , e =>{
    search.classList.toggle('active');
    input.focus();
})