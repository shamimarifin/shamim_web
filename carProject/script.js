

let carImg = document.querySelector('#carImg');
let start  = document.querySelector('#startBtn');
let stop   = document.querySelector('#stopBtn');

let m = 0;

start.addEventListener('click' , function(){

   var carTime =  setInterval(() => {

        if(m==980){
            clearInterval(carTime);
            m = 0
        }else{
            m+=10

            carImg.style.marginLeft = m + 'px';
        }
        
    }, 200);


})


stop.addEventListener('click' , function(){
    clearInterval(carTime)
})