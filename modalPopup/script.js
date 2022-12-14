


var modalText = document.querySelector('#modal');
var closeBtn     = document.querySelector('#close');
var openBtn     = document.querySelector('#open');

openBtn.addEventListener('click' , () => {

    modalText.style.opacity = '1'

})



closeBtn.addEventListener('click' , () => {

    modalText.style.opacity = '0'

})