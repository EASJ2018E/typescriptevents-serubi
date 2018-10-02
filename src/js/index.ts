//Her skal du skrive din typescriptkode

document.getElementById("addProduct").addEventListener('click', addProduct);

let sundtItems = document.getElementsByClassName('sundt');
let usundtItems = document.getElementsByClassName('usundt');

for (let i = 0; i < sundtItems.length; i++) {
  sundtItems[i].addEventListener('click', hideElement);
}

for (let i = 0; i < usundtItems.length; i++) {
  usundtItems[i].addEventListener('click', hideElement);
}

function addProduct() {
  let inputText = (<HTMLInputElement>document.getElementById('addProductText')).value;
  let list = document.getElementById('liste');
  let newLi = document.createElement('li');
  let newText = document.createTextNode(inputText);

  newLi.setAttribute('class', 'sundt');
  newLi.appendChild(newText);
  list.appendChild(newLi);
  newLi.addEventListener('click', hideElement);
}

function hideElement() {
  this.setAttribute('hidden', 'true');
}