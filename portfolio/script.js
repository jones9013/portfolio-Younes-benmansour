const homeNavBar = document.querySelector(`.home-navbar`);
const msgHomeTypeWriter = document.getElementById(`message-effect`);
const msgHomeTypeWriterArray = [` Designer & Frontend Developer.`];
let msgPosition = 0;
const msgSpeed = 100;

// making position fixed to my nav bar when I scroll down ---
window.addEventListener(`scroll`, () => {
  const scrollY = window.scrollY;
  if (window.innerWidth > 765) {
    homeNavBar.classList.add(`fixed`);
  } else {
    homeNavBar.classList.remove(`fixed`);
  }
});

//------------------ function for the typewriter in the hone page--------------------------
const typeWriter = () => {
  msgHomeTypeWriter.innerHTML =
    msgHomeTypeWriterArray[0].substring(0, msgPosition) + "<span>\u25ae</span>";

  if (msgPosition++ != msgHomeTypeWriterArray[0].length) {
    setTimeout(typeWriter, msgSpeed);
  }
};
window.addEventListener(`load`, typeWriter);
//---------------------End of typewriter--------------------------------------------------

// ----------------js for nav bar ----------------------------
const mobileMenuIcon = document.getElementById(`mobile-menu-icon`);
const ulMenu = document.getElementById(`ul-menu`);
const homeContent = document.getElementById(`home-content`);

mobileMenuIcon.addEventListener(`click`, () => {
  ulMenu.classList.toggle("show");
  homeContent.style.display = `none`;
});
