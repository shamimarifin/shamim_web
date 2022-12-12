  

let pasteText = document.querySelector('#textSet');
let pasteBtn  = document.querySelector('#pasteBtn');


pasteBtn.addEventListener('click' , ()=> {

    pasteText.value = '';

    navigator.clipboard.readText()
    .then((text)=> {
        pasteText.value = text
    })
})