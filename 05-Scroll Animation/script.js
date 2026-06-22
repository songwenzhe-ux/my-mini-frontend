const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes() {
    const a = window.innerHeight /5 * 4

    boxes.forEach(box => {
        const b = box.getBoundingClientRect().top
        if (b < a) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }

        
    });
} 
