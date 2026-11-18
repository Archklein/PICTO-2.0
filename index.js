const openBtn = document.querySelector("#search_button");
const searchbarSection = document.querySelector("#searchbar__section");
const closebtn = document.querySelector("#search__overlay");
const searchInput = document.querySelector("#searchbar");

openBtn.addEventListener("click", () => {
  searchbarSection.classList.add("searchbar_section_isActive");
  closebtn.classList.add("search_overlay_isActive");
  searchInput.focus();
});
closebtn.addEventListener("click", () => {
  searchbarSection.classList.remove("searchbar_section_isActive");
  closebtn.classList.remove("search_overlay_isActive");
});
