//Her skal du skrive din typescriptkode

document.getElementById("addProduct").addEventListener('click', function () {
  addProduct(true);
}, false);

document.getElementById("addProductU").addEventListener('click', function () {
  addProduct(false);
}, false);

let sundtItems = document.getElementsByClassName('sundt');
let usundtItems = document.getElementsByClassName('usundt');

for (let i = 0; i < sundtItems.length; i++) {
  sundtItems[i].addEventListener('click', hideElement);
}

for (let i = 0; i < usundtItems.length; i++) {
  usundtItems[i].addEventListener('click', hideElement);
}

function addProduct(sundt: boolean) {
  let inputText: string = (<HTMLInputElement>document.getElementById('addProductText')).value;
  let list: HTMLUListElement = <HTMLUListElement>document.getElementById(sundt ? 'liste' : 'listeUsund');
  let newLi: HTMLLIElement = createListItem(inputText, sundt, list.children.length);

  list.appendChild(newLi);
  newLi.addEventListener('click', hideElement);
}

function hideElement() {
  this.setAttribute('hidden', 'true');
}

function createListItem(liText: string, sundt: boolean, liIndex: Number): HTMLLIElement {
  let newLi: HTMLLIElement = document.createElement('li');
  let newText: Text = document.createTextNode(liText);
  newLi.setAttribute('class', sundt ? 'sundt' : 'usundt');
  newLi.setAttribute('id', liIndex.toString());
  newLi.appendChild(newText);
  return newLi;
}

let arrayOfStrings: string[] = ["string1", "string2", "string3", "string4", "string5"];

for (let i = 0; i < arrayOfStrings.length; i++) {
  let sundt: boolean = true;
  let list: HTMLUListElement = <HTMLUListElement>document.getElementById(sundt ? 'liste' : 'listeUsund');
  let newLi: HTMLLIElement = createListItem(arrayOfStrings[i], sundt, i);

  list.appendChild(newLi);
  newLi.addEventListener('click', hideElement);
}

for (let i = 0; i < arrayOfStrings.length; i++) {
  let sundt: boolean = false;
  let list: HTMLUListElement = <HTMLUListElement>document.getElementById(sundt ? 'liste' : 'listeUsund');
  let newLi: HTMLLIElement = createListItem(arrayOfStrings[i], sundt, i);

  list.appendChild(newLi);
  newLi.addEventListener('click', hideElement);
}