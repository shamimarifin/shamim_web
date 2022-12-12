


let cutText = document.querySelector('#cutId');
let cutBtn  = document.querySelector('#cutBtn');

cutBtn.addEventListener('click' , ()=>{
    navigator.clipboard.writeText(cutText.value);

    cutText.value = ''
})