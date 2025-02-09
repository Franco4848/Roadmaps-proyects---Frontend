const btn = document.querySelector(".btn");
const list = document.querySelector("#dropdown--menu");
const selectedItem = document.querySelectorAll("li");
const check = document.querySelector("i");
const itemSelected = document.querySelector(".item--selected")

btn.addEventListener("click", ()=>{
    list.classList.toggle("menu")
})

selectedItem.forEach(item => {
    console.log(item);
    item.addEventListener("click", ()=>{
        item.classList.toggle("item--select")
        console.log(item.value);
        itemSelected.textContent = "Opción " + item.value;
    });
});

