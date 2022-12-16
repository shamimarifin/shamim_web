

let toggle = document.querySelector('#toggle_btn');
let sidebar = document.querySelector('.sidebarClose');
let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');
let text4 = document.querySelector('.text4');

toggle.addEventListener('click' , function(){

    sidebar.classList.toggle('sidebar');
    sidebar.classList.toggle('sidebarClose');

    text1.classList.toggle('open');
    text2.classList.toggle('open');
    text3.classList.toggle('open');
    text4.classList.toggle('open');


})