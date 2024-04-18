//Projects Informations
const projects = [
    {
        id: 0,
        img: "assets/img/teste1.jpg",
        name: "Projeto 1",
        text: "PROJETO 1 description.",
        tech: "Technologies 1",
    },
    {
        id: 1,
        img: "assets/img/teste2.jpg",
        name: "Projeto 2",
        text: "PROJETO 2 description.",
        tech: "Technologies 2",
    },
    {
        id: 2,
        img: "assets/img/teste3.jpg",
        name: "Projeto 3",
        text: "PROJETO 3 description.",
        tech: "Technologies 3",
    },   
]

//Select Item

const img = document.querySelector("#img-projects");
const projectsTitle = document.querySelector("#projects-title");
const description = document.querySelector("#projects-description");
const tech = document.querySelector('#technologies');

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

//NAV BAR items
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

//Set Staring Item
let currentItem = 0;

//Load Initial Item
window.addEventListener("DOMContentLoaded", function() {
    showProject();
});

//Show Project Function
function showProject() {
    const item = projects[currentItem];
    img.src = item.img;
    projectsTitle.textContent = item.name;
    description.textContent = item.text;
    tech.textContent = item.tech;
}

//Prev Button
prev.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = projects.length - 1;
    }
    showProject();
});

//Next Button
next.addEventListener('click', function() {
    currentItem++;
    if(currentItem > projects.length - 1) {
        currentItem = 0;
    }
    showProject();
});

//NAV BAR Function 
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

function closeMenu () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
