//1) Remove the DOM node 'main#main'
const main = document.querySelector('#main');
main.remove();

//2) Create new <h1> element and assign it to a 'newHeader' variable
const newHeader = document.createElement('h1');

//3) Add an id of 'victory' to the 'newHeader' variable
newHeader.id = 'victory';

//4) Set the text of 'newHeader' to "YOUR-NAME is the champion"
newHeader.textContent = "Juan Carlos is the champion";

//Append 'newHeader' to the DOM's <body> element
document.body.appendChild(newHeader);