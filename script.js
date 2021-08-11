let note = document.querySelector('.note')
let btn = document.querySelector('.btn')
let dis = document.querySelector('.container-note')
let modal =document.querySelector('.modal')
let close = document.querySelector('.close')
let mh1 = document.querySelector(".modal-h1")
let mp =document.querySelector(".modal-p")
let count =1
btn.addEventListener("click",()=>{
    let val=note.value
    if (val="") {
        alert("enter value")
    }
    else{
    let div = document.createElement("div")
    div.classList.add("hero")
    dis.appendChild(div)
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    let detail = document.createElement("button")
    h2.textContent=`Note ${count++}`
    p.textContent=`${note.value}`
    p.classList.add("par")
    detail.classList.add("btn")
    detail.textContent='View Detail'
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(detail)
    detail.addEventListener('click',()=>{
        modal.style.display = "block";
        mh1.textContent =h2.textContent
        mp.textContent =p.textContent
        
    })
    close.addEventListener('click',()=>{
        modal.style.display = "none";
    })
    
    note.value=""
}
})
