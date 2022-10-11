const btnOpenModal = document.querySelector(".btn-open-modal");
const btnCloseModal = document.querySelector(".btn-close-modal");
const overlay = document.querySelector(".ovelay");
const sidebarMenu = document.querySelector("#sidebar-menu");

const openModal = function () {
  sidebarMenu.classList.add("-right-0");
  overlay.classList.toggle("hidden");
};

const closeModal = function () {
  sidebarMenu.classList.remove("-right-0");
  overlay.classList.toggle("hidden");
};

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//////////
// sticky nav
const navbar = document.querySelector(".navbar");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navbar.classList.add("sticky-nav");
  // else navbar.classList.remove("sticky-nav");
};

const navbarObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
navbarObserver.observe(navbar);

//////////
// smooth scrolling
const productsList = document.querySelector(".products__list");
const products = document.querySelector("#products");

productsList.addEventListener("click", function (e) {
  e.preventDefault();
  products.scrollIntoView({ behavior: "smooth" });
});

//////////
// menu fade animation
const handlerMenuHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const siblings = e.target.closest(".navbar").querySelectorAll(".nav__link");
    const dashboard = e.target.closest(".navbar").querySelector(".dashboard");
    const logo = e.target.closest(".navbar").querySelector(".logo");

    siblings.forEach((el) => {
      if (el !== e.target) el.style.opacity = this;
    });
    logo.style.opacity = this;
    dashboard.style.opacity = this;
  }
};

navbar.addEventListener("mouseover", handlerMenuHover.bind(0.6));
navbar.addEventListener("mouseout", handlerMenuHover.bind(1));

/////////
// Reveal section
const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

// slider
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotsContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

const createDots = function () {
  slides.forEach((s, i) =>
    dotsContainer.insertAdjacentHTML(
      "afterbegin",
      `<button
        data-slide="${i}" class="dots__dot w-2 h-2 mr-2 xl:w-3 xl:h-3 xl:mr-3 rounded-full bg-white border-0 transition-all ease-linear duration-500 cursor-pointer"
       ></button>`
    )
  );
};

const activateDots = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("bg-gradient"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("bg-gradient");
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;
  goToSlide(curSlide);
  activateDots(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) curSlide = maxSlide - 1;
  else curSlide--;
  goToSlide(curSlide);
  activateDots(curSlide);
};

const sliderTimeing = function (sec) {
  const nextSlideInterval = setInterval(nextSlide, sec);
  return nextSlideInterval;
};
sliderTimeing(6000);

const init = function () {
  goToSlide(0);
  createDots();
  activateDots(0);
};
init();

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDots(slide);
  }
});

////////////
// tabed component
const productsTabContainer = document.querySelector(".products__tab-container");
const tabs = document.querySelectorAll(".products__tab");
const tabsProducts = document.querySelectorAll(".products__product");

productsTabContainer.addEventListener("click", function (e) {
  tabs.forEach((tab) => tab.classList.remove("tab-active"));

  if (e.target.classList.contains("products__tab")) {
    e.target.classList.add("tab-active");
    tabsProducts.forEach((p) => p.classList.remove("products__product-active"));
    tabsProducts.forEach((p) => p.classList.add("hidden"));

    document
      .querySelector(`.products__product--${e.target.dataset.tab}`)
      .classList.remove("hidden");
    document
      .querySelector(`.products__product--${e.target.dataset.tab}`)
      .classList.add("products__product-active");
  }
});
