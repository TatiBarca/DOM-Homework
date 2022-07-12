// 1 ....changes only the first 'p'-element
let text = document.querySelector('p');
text.innerText = 'Learning about DOM -  changed the text';
text.style.color = 'green';
text.style.fontSize = '25px'


// 1.1  ....changes all 'p'- tags
// let text = document.getElementsByTagName('p');
// for(let i = 0; i < text.length; i++){
//     text[i].textContent = 'changed text'
// };

// 2
let items = document.getElementsByClassName('red');

for(let i = 0; i < items.length; i++){
    items[i].style.color = 'blue';
}

// 3
let form = document.getElementById('addForm')
let itemText = document.getElementById('newItem')

form.addEventListener('click', addItem);

function addItem(e){
    e.preventDefault();

    let item = document.getElementById('name').value;

    
    let p = document.createElement('p')
    p.className = 'userName';
    p.style.display = 'inline';

    p.appendChild(document.createTextNode(item));

    itemText.appendChild(p);
}
