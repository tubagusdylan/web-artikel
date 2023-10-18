const navBar = document.querySelector(".nav-link");
const hamMenu = document.getElementById("hamburger");
const hamBar = document.getElementById("ham-bar");
const closeBar = document.getElementById("close-bar");

hamMenu.onclick = () => {
  handleNavbar();
};

function handleNavbar() {
  hamBar.hidden = closeBar.hidden ? true : false;
  closeBar.hidden = !hamBar.hidden ? true : false;
  navBar.hidden = navBar.hidden ? false : true;
}
