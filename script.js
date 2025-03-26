const btnMenu = document.getElementById('btnMenu')
const menu = document.getElementById('menu')

function openMenu() {
    menu.style.display = 'block'
}

function closeMenu() {
    menu.style.display = 'none'
}

btnMenu.onclick = function() {
    if(menu.style.display === 'none'){
        openMenu()
    }
    else{
        closeMenu()
    }
}