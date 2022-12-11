

let video = document.querySelector('#videoId');
let webCam = navigator.mediaDevices.getUserMedia();


if(webCam){
    navigator.mediaDevices.getUserMedia({
        video : true,
        audio : true,
    })

    .then(function(live){
        video.srcObject = live
    })

    .catch(function(error){
        console.log('error try again');
    })

    let canVa = document.querySelector('#canId');
    let context = canVa.getContext('2d');
    let btnSet= document.querySelector('#btnSet');

    btnSet.addEventListener('click' , function(){
        context.drawImage(video , 0 ,0, 500 ,500);
    })
}