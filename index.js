let myStocks = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let listItems = ""
let deleteBtn = document.getElementById("delete-btn")
const leadFromLocalStorage = JSON.parse(localStorage.getItem("myStocks"))

if(leadFromLocalStorage){
    myStocks = leadFromLocalStorage
    render(myStocks)
}

function render(stocks){
    for(let i = 0; i < stocks.length; i++){
        listItems += `
        <li>
            <a href='${stocks[i]}' target = '_blank'>
                ${stocks[i]} 
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
} 

deleteBtn.addEventListener("click",function(){
    localStorage.clear()
    myStocks = []
    listItems=""
    render(myStocks)
    console.log(myStocks)
})

inputBtn.addEventListener("click",function(){
    myStocks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myStocks",JSON.stringify(myStocks))
    render(myStocks)
})