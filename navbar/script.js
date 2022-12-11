
let topHead = document.querySelector('.setHead');

window.onscroll = function(){
    let setWindow = window.scrollY;

    if(setWindow >= 100){
        topHead.classList.add('afterScroll');
    }else{
        topHead.classList.remove('afterScroll');
    }
}