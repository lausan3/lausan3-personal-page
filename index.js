const menu = document.getElementById("menu");
const menuItems = Array.from(document.getElementsByClassName("menu-item"));

menuItems.forEach((item, index) => {
    item.onmouseover = () => {
        menu.dataset.activeIndex = index;
    }
});