  



let addBtn = document.querySelector('#btn');

addBtn.addEventListener('click' , ()=> {

    let inputText = document.querySelector('#textId').value;
    let textNode  = document.createTextNode(inputText);

    let liItem = document.createElement('li');

    liItem.appendChild(textNode);


    let olItem = document.querySelector('#todoList');

    olItem.appendChild(liItem);

})