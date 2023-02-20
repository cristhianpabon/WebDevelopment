const sidebarMenu = document.getElementById("sidebarMenu");
const openMenu = document.getElementById("menuIcon");
const closeMenu = document.getElementById("closeIcon");

console.log(openMenu);
console.log(closeMenu);
const handleOpenMenu = () => {
  console.log(sidebarMenu);
  sidebarMenu.classList.add("sidebarOpen");
  sidebarMenu.classList.remove("sidebarHidden");
};

const handleCloseMenu = () => {
  console.log(sidebarMenu);
  sidebarMenu.classList.add("sidebarHidden");
  sidebarMenu.classList.remove("sidebarOpen");
};

sidebarMenu.classList.add("sidebarHidden");
openMenu.addEventListener("click", handleOpenMenu);
closeMenu.addEventListener("click", handleCloseMenu);
