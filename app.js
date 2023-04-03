let counter = document.querySelector('.counter')
let save = document.querySelector('.save')

let count = 0

function handleIncrease() {
     count +=1
    counter.textContent = count
}


function handleSave() {
   let holdCount = count + ' - '
   save.textContent += holdCount
   count  = 0
   counter.textContent = 0
}