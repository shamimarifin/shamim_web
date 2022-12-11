

let textContent = document.querySelector('#textSet');
let cutBtn      = document.querySelector('#cutBtn');

cutBtn.addEventListener('click' , function(){
    navigator.clipboard.writeText(textContent.value);
})

null