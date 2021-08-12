let myLeads = []
const inputEl = document.getElementById("input-el")
const btn = document.getElementById("input-btn")
const unEl = document.getElementById("un-el")

btn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderItem();
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