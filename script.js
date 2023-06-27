const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const arrowIcons = document.querySelectorAll(".arrow");
const carousel = document.querySelector(".carousel");
const firstImgCarousel = carousel.querySelectorAll(".carousel-img")[0];

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

let firstImgCarouselWidth = firstImgCarousel.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft +=
      icon.id == "left" ? -firstImgCarouselWidth : firstImgCarouselWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

let noOfCharac = 262;
let contents = document.querySelectorAll(".contents");
contents.forEach((contents) => {
  if (contents.textContent.length < noOfCharac) {
    contents.nextElementSibling.style.display = "none";
  } else {
    let displayText = contents.textContent.slice(0, noOfCharac);
    let moreText = contents.textContent.slice(noOfCharac);
    contents.innerHTML = `${displayText}<span class='dots'>...</span><span class = 'hide more'>${moreText}</span>`;
  }
});

function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More"
    ? (btn.textContent = "Read Less")
    : (btn.textContent = "Read More");
}
