const openBtn = document.querySelector("#search_button");
const searchbarSection = document.querySelector("#searchbar__section");
const closebtn = document.querySelector("#search__overlay");
const searchInput = document.querySelector("#searchbar");
const sellOpenBtn = document.querySelector("#sell");
const sellSection = document.querySelector("#sell__section");
const sellClosebtn = document.querySelector("#sell__exit");

openBtn.addEventListener("click", () => {
  searchbarSection.classList.add("searchbar_section_isActive");
  closebtn.classList.add("search_overlay_isActive");
  searchInput.focus();
});
closebtn.addEventListener("click", () => {
  searchbarSection.classList.remove("searchbar_section_isActive");
  closebtn.classList.remove("search_overlay_isActive");
});

sellOpenBtn.addEventListener("click", (event) => {
  event.preventDefault();
  sellSection.classList.add("sell_section_isActive");
  const menuToggle = document.querySelector("#menu_toggle");
  menuToggle.checked = false;
});

sellClosebtn.addEventListener("click", () => {
  sellSection.classList.remove("sell_section_isActive");
});
