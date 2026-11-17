const searchOpen = document.querySelector("#search_button");
const searchModal = document.querySelector("#search_modal");
const searchExit = document.querySelector("#search_exit");

searchOpen.addEventListener("click", () => {
  searchModal.classList.add("is_open");
});
searchExit.addEventListener("click", () => {
  searchModal.classList.remove("is_open");
});
