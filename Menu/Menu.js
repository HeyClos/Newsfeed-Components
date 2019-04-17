
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle("menu--open")
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', () => {
   toggleMenu();
 });



// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector(".menu");
// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector(".menu-button");
// // Using your menuButton reference, add a click handler that calls toggleMenu

// menuButton.addEventListener('click', () => {
//   toggleMenu();
// });


// menuButton.addEventListener("click", (toggleMenu) => {
//   console.log(`I'm pressing the key: ${toggleMenu.key}`)
  //what do i do here?



// togglePanel = () => {
//   this.menuBtnOpen.classList.toggle("hide-btn");
//   this.menuBtnClose.classList.toggle("hide-btn");
//   this.menuContent.classList.toggle("toggle-on")
// }
// }

//menuButton.addEventListener('click', "toggleMenu");

}}




// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
//   this.toggleMenu.classList.toggle("menu--open")
// };

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelectorAll(".menu");
// // create a reference to the ".menu-button" class
// const menuButton = document.querySelectorAll(".menu-button");
// // Using your menuButton reference, add a click handler that calls toggleMenu
//
// menuButton.addEventListener('click', () => {toggleMenu();});