charDiv = document.getElementById("characterEntry");

charTemplate = document.createElement("div")
charTemplate.classList.add("character")

nameInput = document.createElement("input")
nameInput.type = "text"
nameInput.id = "name"
charTemplate.appendChild(nameInput)

dexInput = document.createElement("input")
dexInput.type = "number"
dexInput.id = "dex"
charTemplate.appendChild(dexInput)

miscModInput = document.createElement("input")
miscModInput.type = "number"
miscModInput.id = "miscMod"
charTemplate.appendChild(miscModInput)

chars = [] //entry format: {name:"text", dex: 0+, mod:0+}

function addChar(){
}

plusButton = document.createElement("button")
plusButton.textContent = "+"
plusButton.id = "addButton"
charDiv.appendChild(plusButton)