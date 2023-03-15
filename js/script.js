// Lista della spesa
const shoppingList = ["pane", "pasta", "latte", "sale", "biscotti"];
console.log(shoppingList);
// Elemento unordered list
const listElem = document.querySelector("ul");
console.log(listElem);
// Stringa "list" da inserire in ul nell'HTML
let list = "";
let i = 0;
while (i < shoppingList.length) {
    list += `<li>${shoppingList[i]}</li>`;
    i++;
}
console.log(list);
// Inserisco list in ul nell'HTML
listElem.innerHTML = list;