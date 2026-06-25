const labels = document.querySelectorAll('.control label')

labels.forEach(label => {
    label.innerHTML = label.innerText.split('')
    .map((a,idx) => `<span style="transition-delay:${idx*50}ms">${a}</span>`).join('')
})