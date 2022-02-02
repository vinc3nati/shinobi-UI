const btn = document.querySelector(".btn");
const modalClose = document.querySelector(".modal-close");
const modalContainer = document.querySelector(".modal-container");

export function modal() {
  btn.addEventListener("click", () => {
    modalContainer.classList.add("active");
  });
  modalClose.addEventListener("click", () => {
    modalContainer.classList.remove("active");
  });
}
