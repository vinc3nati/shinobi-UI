const btn = document.querySelector("[data-modal]");
const modalClose = document.querySelector(".modal-close");
const modalContainer = document.querySelector(".modal-container");

export function modal() {
  if (btn) {
    btn.addEventListener("click", () => {
      modalContainer.classList.add("active");
    });
  }
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modalContainer.classList.remove("active");
    });
  }
}
