const buttons = document.querySelectorAll('.faq-button')
buttons.forEach(bt => {
    bt.addEventListener('click',()=> {
        bt.parentNode.classList.toggle('active')
    }
)
});