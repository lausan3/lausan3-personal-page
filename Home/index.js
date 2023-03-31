const sidebar = document.getElementById("sidebar-elements");
const sidebarButton = document.getElementById("sidebar-button");
let sidebarOpen = false;

sidebarButton.addEventListener('click', function() {
    if (!sidebarOpen) {
        sidebar.style.left = '0';
        sidebarOpen = true;
    } else {
        sidebar.style.left = "-250px";
        sidebarOpen = false;
    }
})