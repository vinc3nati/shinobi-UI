const toastContainer = document.querySelector(".toast");
const openToast = document.querySelector("[data-toast]");
const btnClose = document.querySelector(".btn-close");

let timerID;

export function toast() {
  openToast.addEventListener("click", () => {
    toastContainer.style.display = "block";
    timerID = setTimeout(() => {
      toastContainer.style.display = "none";
    }, 3000);
  });

  btnClose.addEventListener("click", () => {
    clearTimeout(timerID);
    toastContainer.style.display = "none";
  });
}

toast();
