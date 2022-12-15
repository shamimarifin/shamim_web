

var submit = document.querySelector('#submit');


submit.addEventListener('click' , function(){

    var quest1 = document.querySelector('#q1').checked;
    var quest2 = document.querySelector('#q2').checked;
    var quest3 = document.querySelector('#q3').checked;

    var count = 0;
    if(quest1){
        count++;
    }


  
    if(quest2){
        count++;
    }


    if(quest3){
        count++;
    }



    alert(count);


})