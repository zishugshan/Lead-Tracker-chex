let myLeads = ["zeeshaquamar.com"]


const inputEl = document.getElementById("input-el")
const btn = document.getElementById("input-btn")
const unEl = document.getElementById("un-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderItem()
}

btn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderItem();
    console.log(localStorage.getItem("myLeads"))
})
function renderItem(){
    let listItem =""
    for (let i = myLeads.length-1; i>=0 ;i-- ){
    listItem += `
    <li>
        <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}</a>
    </li>`
    }
    unEl.innerHTML = listItem 
}