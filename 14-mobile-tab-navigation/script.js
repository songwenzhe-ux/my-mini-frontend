const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item,idx)=> {
    item.addEventListener('click',()=>{
        killAllContents()
        killAllItems()
        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})
function killAllContents() {
    contents.forEach(contents => contents.classList.remove('show'))
}
function killAllItems() {
    listItems.forEach(listItems => listItems.classList.remove('active'))
}
