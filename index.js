const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const clickPageId = el.getAttribute("data-page");
    const turnPage = document.querySelector(`#${clickPageId}`);

    if (turnPage.classList.contains("turn")) {
      turnPage.classList.remove("turn");
      setTimeout(() => {
        turnPage.style.zIndex = 20 - index;
      }, 500);
    } else {
      turnPage.classList.add("turn");
      setTimeout(() => {
        turnPage.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

const contactMeBtn = document.querySelector(".contact-me");
const profileBtn = document.querySelector(".back-profile");
const pages = document.querySelectorAll(".book-page.page-right");

contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");

      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200);
  });
};

const totalPage = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPage - 1;
  }
}

profileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove("turn");

      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200);
  });
};

// openingAnimation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

// openingAnimation (cover right animation)
setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);

// openingAnimation (all page right animation)
setTimeout(() => {
  coverRight.style.zIndex = -0;
}, 2800);

setTimeout(() => {
  pageLeft.style.zIndex = 30;
}, 3200);

pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove("turn");

    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});
