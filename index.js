let myLeads = ["zeeshaquamar.com"]


const inputEl = document.getElementById("input-el")
const btn = document.getElementById("input-btn")
const unEl = document.getElementById("un-el")
const deleteBtn =document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderItem(myLeads)
}

function renderItem(items){
    let listItem =""
    for (let i = items.length-1; i>=0 ;i-- ){
    listItem += `
    <li>
        <a target='_blank' href='${items[i]}'> ${items[i]}</a>
    </li>`
    }
    unEl.innerHTML = listItem 
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    renderItem(myLeads)
})

btn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderItem(myLeads);
    console.log(localStorage.getItem("myLeads"))
})
