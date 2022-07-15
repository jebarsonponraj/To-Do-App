
const date = document.querySelector(".date")
const inputBox = document.querySelector(".input-box");
const ul = document.querySelector(".main-list");
const list = document.querySelector(".list");
const welcomeImg = document.querySelector(".welcome-img");
const welcomeText = document.querySelector(".welcome-text")
const inputContainer = document.querySelector(".input-container");
const inputText = document.querySelector(".input-text");
const form = document.querySelector(".form");
const addIcon = document.querySelector(".add-icon");
const circleIcon = document.querySelector(".circle-icon");
const checkmarkIcon = document.querySelector(".checkmark-icon");
const deleteIcons = document.querySelectorAll(".delete-icon");
const taskCompleteAudio = document.querySelector(".task-complete-audio");
const taskDeleteAudio = document.querySelector(".task-delete-audio");
const menuBtn = document.querySelector(".menu");
const themeBox = document.querySelector(".theme");
const colors = document.querySelectorAll(".colors");


let tasks = [];


const now = new Date();

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


date.textContent = `${day[now.getDay()]}, ${month[now.getMonth()]} ${now.getDate()}`



form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userTask = inputBox.value;
  
  
  const html = `
  <li class="list">
  <div class="task-icons">
  <ion-icon class="checkmark-icon" name="checkmark-sharp"></ion-icon>
  <ion-icon class="circle-icon" name="ellipse-outline"></ion-icon>
  </div>
  <p class="task">${inputBox.value}</p>
  <ion-icon class="delete-icon" name="trash-sharp"></ion-icon>
  </li>`
      
  ul.insertAdjacentHTML("afterbegin",html);
      
  tasks.push(userTask);
  if(tasks.length < 1){
    welcomeImg.classList.add("active");
    welcomeText.classList.add("active");
   }
  else{
    welcomeImg.classList.remove("active");
    welcomeText.classList.remove("active");
   }
  console.log(tasks.length);
  this.reset();
});


if(tasks.length < 1){
    welcomeImg.classList.add("active");
    welcomeText.classList.add("active");
}
else{
    welcomeImg.classList.remove("active");
    welcomeText.classList.remove("active");

}

const createList = function (todos = [], list) {

};

inputBox.addEventListener("click", function (e) {
  console.log(e);
  inputBox.placeholder = "Type Something.....";
  inputBox.classList.add("placeholderClass");
  addIcon.classList.add("active");
});

window.addEventListener("click", function (e) {
  if (!e.target.classList.contains("input-box") && !inputBox.value) {
    inputBox.placeholder = "Add Task";
    inputBox.classList.remove("placeholderClass");
    addIcon.classList.remove("active");
  }
});



const deleteTask = function(e){
    const target = e.target.closest('li');
    target.remove();
}



ul.addEventListener("click", function (e) {
  if(e.target.classList.contains("delete-icon") ){
    deleteTask(e);
    taskDeleteAudio.play();
    tasks.pop(e);
    if(tasks.length < 1){
        welcomeImg.classList.add("active");
        welcomeText.classList.add("active");
    }
    else{
        welcomeImg.classList.remove("active");
        welcomeText.classList.remove("active");
    
    }
  }
  
});


ul.addEventListener("click", function (e) {
    if(e.target.classList.contains("circle-icon") || e.target.classList.contains("checkmark-icon")){
        const closestDiv = e.target.closest("div")
        const task =  closestDiv.nextSibling.nextSibling
        task.style.setProperty("text-decoration", "line-through");
        taskCompleteAudio.play();
        console.log(e.target.closest("ion-icon"));
        // checkmarkIcon.style.backgroundColor = "#fff";
        setTimeout(() => {
            deleteTask(e);
        }, "500");
    }
  });

menuBtn.addEventListener("click",function() {
    themeBox.classList.toggle("active");
})

colors.forEach(color => {
    color.addEventListener("click",function(){
        console.log(color);
        document.body.style.backgroundColor = `${color.style.backgroundColor}`
    })
});