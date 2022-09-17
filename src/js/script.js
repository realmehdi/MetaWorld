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
