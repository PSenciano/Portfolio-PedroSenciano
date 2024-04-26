//Projects Informations
const projects = [
    {
        id: 0,
        img: "assets/img/ironForgeAcademy.jpg",
        text: "Projeto de um site original de uma academia ficticia chamada Iron Forge Academy, voltado para fins de aprendizado e totalmente responsivo.",
        gitLink: "https://github.com/PSenciano/projetoIronForgeAcademy",
        deployLink: "https://www.subirlinkdoprojeto.com",
        title: "Projeto IronForgeAcademy",
    },
    {
        id: 1,
        img: "assets/img/cacauSabor.jpg",
        text: "Projeto de um site original de uma chocolateria ficticia Cacau Sabor, voltado para fins de aprendizado e totalmente responsivo.",
        gitLink: "https://github.com/PSenciano/projetoCacauSabor",
        deployLink: "https://www.subirlinkdoprojeto.com",
        title: "Projeto Cacau Sabor",
    },
    {
        id: 2,
        img: "assets/img/teste3.jpg",
        name: "Projeto 3",
        text: "PROJETO 3 description.",
        gitLink: "https://www.subirlinkdoprojeto.com",
        deployLink: "https://www.subirlinkdoprojeto.com",
        title: "Technologies 3",
    },   
]

//Select Item

const img = document.querySelector("#img-projects");
const description = document.querySelector("#projects-description");
const projectTitle = document.querySelector('#project-title');

const gitRepository = document.querySelector('#git-link');
const deployLink = document.querySelector('#deploy-link');

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
    description.textContent = item.text;
    gitRepository.href = item.gitLink;
    deployLink.href = item.deployLink;
    projectTitle.textContent = item.title;
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

//Aimation
const elements = document.querySelectorAll('.hidden');
const udyElements = document.querySelectorAll('.hidden-udy');
const duyElements = document.querySelectorAll('.hidden-duy');
const lrxElements = document.querySelectorAll('.hidden-lrx');
const rlxElements = document.querySelectorAll('.hidden-rlx');

const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting && entry.target.classList.contains('hidden')) {
            entry.target.classList.add('show-animation')
        } else {
            entry.target.classList.remove('show-animation')
        }


        if(entry.isIntersecting && (entry.target.classList.contains('hidden-udy') || entry.target.classList.contains('hidden-duy'))) {
            entry.target.classList.add('show-animation-y')
        } else {
            entry.target.classList.remove('show-animation-y')
        }

        if(entry.isIntersecting && (entry.target.classList.contains('hidden-lrx') || entry.target.classList.contains('hidden-rlx') )) {
            entry.target.classList.add('show-animation-x')
        }
        else {
            entry.target.classList.remove('show-animation-x')
        }
    })
})

elements.forEach( (element) => myObserver.observe(element));
udyElements.forEach( (element) => myObserver.observe(element));
duyElements.forEach( (element) => myObserver.observe(element));
lrxElements.forEach( (element) => myObserver.observe(element));
rlxElements.forEach( (element) => myObserver.observe(element));
