import { modal } from "./components/Modal/modal";
import { toast } from "./components/Toast/toast";
import { rating } from "./components/Rating/rating";

modal();
toast();
rating();

window.addEventListener("scroll", () => {
  let nav = document.querySelector(".navbar");
  let windowPosition = window.scrollY > 100;
  nav.classList.toggle("scrolling-active", windowPosition);
});
