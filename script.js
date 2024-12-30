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

deleteButton = document.createElement("button")
deleteButton.textContent = "X"
deleteButton.id = "trash"
charTemplate.appendChild(deleteButton)

chars = [] //entry format: {name:"text", dex: 0, mod:0}

function removeChar(index){
    chars.splice(index, 1)
    charDiv.childNodes[index].remove()
}

function modifyProperty(index, input, property){
    chars[index][property] = input
}

function addChar(){
    chars.push({name:"undefined", dex:0, mod:0})
    let clone = charTemplate.cloneNode(true)
    clone.childNodes[0].addEventListener("input",(event) => {
        let index = Array.from(charDiv.children).indexOf(clone);
        modifyProperty(index, event.target.value, "name")
    })
    clone.childNodes[1].addEventListener("input",(event) => {
        let index = Array.from(charDiv.children).indexOf(clone);
        modifyProperty(index, Number(event.target.value), "dex")
    })
    clone.childNodes[2].addEventListener("input",(event) => {
        let index = Array.from(charDiv.children).indexOf(clone);
        modifyProperty(index, Number(event.target.value), "mod")
    })
    clone.childNodes[3].addEventListener("click", (event) => {
        let index = Array.from(charDiv.children).indexOf(clone);
        removeChar(index)
    })
    charDiv.insertBefore(clone, plusButton)
}

plusButton = document.createElement("button")
plusButton.textContent = "+"
plusButton.id = "addButton"
plusButton.addEventListener("click", addChar)
charDiv.appendChild(plusButton)