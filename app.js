const input = document.querySelector(".input-box");
const ul = document.querySelector(".main-list")
const list = document.querySelector(".list");


input.addEventListener("keydown", function(e){
    
    let li = document.createElement("li");
    if(e.code === "Enter"){
        e.preventDefault();
        li.appendChild(document.createTextNode(input.value));
        li.setAttribute("class", "list");
        ul.appendChild(li);
        input.value = ""
    }
})


// list.addEventListener("click", function(){
//     ul.removeChild(list)
// })