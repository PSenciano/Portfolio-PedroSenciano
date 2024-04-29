//NAV BAR items
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

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
