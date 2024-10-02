
const topMenu = document.getElementById('nkd-top-menu');
const toggleTopMenuIcon = document.getElementById('top-menu-toggle-btn')
document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('moible-menu')
    }
    else {
        if (topMenu.classList.contains('moible-menu')) {
            topMenu.classList.add('hidden')
            topMenu.classList.remove('moible-menu')
        }
    }
})