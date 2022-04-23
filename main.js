let stringSaveForm = document.querySelector("#string-save");
let stringInput = document.querySelector("#string-input");
let savedStringDiv = document.querySelector("#string-display");

let savedStringValue = localStorage.getItem("savedStringValue");

savedStringDiv.innerText = savedStringValue;

stringSaveForm.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.setItem("savedStringValue", stringInput.value);
    console.log(localStorage.getItem('savedStringValue'));
    savedStringValue = localStorage.getItem("savedStringValue");
    savedStringDiv.innerText = savedStringValue
})

// challenge 2
let counter = document.querySelector("#counter");

let savedCount = localStorage.getItem("savedCount");

if (savedCount === null) {
    savedCount = 0;
    counter.innerHTML = savedCount;
}
else {
    counter.innerHTML = savedCount;
}

savedCount++
localStorage.setItem("savedCount", savedCount);

//challenge 3
let listForm = document.querySelector("#list-form");
let listInput = document.querySelector("#list-input");
let listDisplay = document.querySelector("#saved-list");
let items = localStorage.getItem("items");

if (items === null) {
    items = [];
}
else {
    items = JSON.parse(items);
    for (let i = 0; i < items.length; i++){
        let listItem = document.createElement("li");
        listItem.innerText = items[i];
        listDisplay.appendChild(listItem);
    }
}

listForm.addEventListener("submit", function (event) {
   let newItem = listInput.value;
   items.push(newItem);
   localStorage.setItem("items", JSON.stringify(items))
   let listItem = document.createElement("li");
   listItem.innerText = newItem;
   listDisplay.appendChild(listItem);
   listInput.value = '';
})