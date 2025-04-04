let nav = document.querySelector('.nav-links');
let toggle = document.querySelector('.tombol');

toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
})

let dropdown_t = document.querySelector('.dropdown-toggle');
let dropmenu = document.querySelector('.dropdown-menu')

dropdown_t.addEventListener('click', () => {
    dropmenu.classList.toggle('show-drop')
})