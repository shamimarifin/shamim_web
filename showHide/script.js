

let numbSet = document.querySelector('#numId');
let showId  = document.querySelector('#idShow');



showId.addEventListener('click' , function() {


    if(numbSet.type == 'password'){
        numbSet.type = 'text'
    }else{
        numbSet.type = 'password'
    }



})