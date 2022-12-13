

let imageSource = ['1.jpg' , '2.jpg', '3.jpg'];
let imgTag = document.querySelector('#imgTag');

var count = -1;

function myImage(){
    count++;

    if(count >= imageSource.length){
        count = 0;

        imgTag.src = imageSource[count]
    }else{
        imgTag.src = imageSource[count]
    }

    setTimeout("myImage()", 1000);
}

window.onload = myImage()