// const cameraInput = document.querySelector("#cameraInput");
// const galleryInput = document.querySelector("#galleryInput");
// const previewImg = document.querySelector("#previewImg");

// function showSelectedPhoto(event) {
//   const file = event.target.files[0]; // first file chosen
//   if (!file) return;

//   const imageUrl = URL.createObjectURL(file);
//   previewImg.src = imageUrl;
//   previewImg.hidden = false;
// }

// cameraInput.addEventListener("change", showSelectedPhoto);
// galleryInput.addEventListener("change", showSelectedPhoto);
const menuOpen = document.querySelector("#menu__toggle");
const menuClose = document.querySelector("#menu__exit");
const menuList = document.querySelector("#menu__section");
const menuOverlay = document.querySelector("#menu__overlay");

menuOpen.addEventListener("click", () => {
  menuList.classList.add("menu_section_isActive");
  menuOverlay.classList.add("menu_overlay_isActive");
});

menuList.addEventListener("transitionend", (event) => {
  if (
    event.target === menuList &&
    event.propertyName === "transform" &&
    menuList.classList.contains("menu_section_isActive")
  ) {
    menuClose.classList.add("menu_exit_auto");
  }
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu_section_isActive");
  menuOverlay.classList.remove("menu_overlay_isActive");
  menuClose.classList.remove("menu_exit_auto");
});

menuOverlay.addEventListener("click", () => {
  menuList.classList.remove("menu_section_isActive");
  menuOverlay.classList.remove("menu_overlay_isActive");
  menuClose.classList.remove("menu_exit_auto");
});

const quickAccessOpen = document.querySelector("#quickAccess__toggle");
const quickAccessSection = document.querySelector("#quickAccess__section");

quickAccessOpen.addEventListener("click", () => {
  quickAccessSection.classList.toggle("quickAccess_section_isActive");
});
