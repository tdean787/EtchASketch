const cell = document.querySelector(".grid-container")
const resetButton = document.querySelector("#resetButton")
const bgBlackCheckbox = document.querySelector("#bgBlack")
let gridCellList = document.querySelectorAll(".grid-cell")
let colorSelectInput = document.querySelector("#colorSelect")
let colorSelectBox = document.querySelector(".colorSelectBox")

var randomColor = function(){
    var red = Math.floor(Math.random() * 255)
    var green = Math.floor(Math.random() * 255)
    var blue = Math.floor(Math.random() * 255)
    return `rgb(${red},${green},${blue})`
}

cell.addEventListener("mouseover", function( event ){
    if (bgBlackCheckbox.checked == true){
        event.target.style.background = "black"
    } else if (colorSelectInput.value != ""){
    event.target.style.background = colorSelectInput.value;
    } else {
        event.target.style.background = randomColor();
    }
})


bgBlackCheckbox.addEventListener("click", function(){
        for(let i = 0; i < gridCellList.length; i++){
            gridCellList[i].style.background = "white"
        }
})

function changeBackground( ){
    colorSelectBox.style.background = colorSelectInput.value;
}

colorSelectInput.addEventListener("input", changeBackground)

function reset(){
    for(let i = 0; i < gridCellList.length; i++){
        gridCellList[i].style.background = "white"
    }
}

resetButton.addEventListener("click", reset)
