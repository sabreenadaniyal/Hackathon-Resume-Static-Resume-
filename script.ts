let button_Skills:any = document.getElementById("toggle-skills") 
let Skills:any = document.getElementById("SKILLS") 

button_Skills.addEventListener('click',() => {
    Skills.classList.toggle("hide")
});
