const msgHomeTypeWriter = document.getElementById(`message-effect`);
const msgHomeTypeWriterArray = [` Designer & Frontend Developer.`];
let msgPosition = 0;
const msgSpeed = 100;

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

// ---------scrolling animation----------

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add(`show`);
    } else {
      entry.target.classList.remove(`show`);
    }
  });
});
const fromLeft = document.querySelectorAll(`.from-left`);
const fromRight = document.querySelectorAll(`.from-right`);
