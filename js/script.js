//Projects Informations
const projects = [
    {
        id: 0,
        img: "assets/imgs/teste1.jpg",
        name: "Projeto 1",
        text: "PROJETO 1 description.",
    },
    {
        id: 1,
        img: "assets/imgs/teste2.jpg",
        name: "Projeto 2",
        text: "PROJETO 2 description.",
    },
    {
        id: 2,
        img: "assets/imgs/teste3.jpg",
        name: "Projeto 3",
        text: "PROJETO 3 description.",
    },   
]

//Select Item

const img = document.querySelector("#img-projects");
const projectsTitle = document.querySelector("#projects-title");
const description = document.querySelector("#projects-description");

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

//Set Staring Item
let currentItem = 0;

//Load Initial Item
window.addEventListener("DOMContentLoaded", function() {
    showCharacter();
});

//Show Project Function
function showCharacter() {
    const item = projects[currentItem];
    img.src = item.img;
    projectsTitle.textContent = item.name;
    description.textContent = item.text;
}

//Prev Button
prev.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = projects.length - 1;
    }
    showCharacter();
});

//Next Button
next.addEventListener('click', function() {
    currentItem++;
    if(currentItem > projects.length - 1) {
        currentItem = 0;
    }
    showCharacter();
});
