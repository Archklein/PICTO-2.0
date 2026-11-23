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
const menuOpen = document.querySelector("#menu__btn");
const menuList = document.querySelector("#menu__list");
const menuClose = document.querySelector("#menu__exit");
const overlayMenuExit = document.querySelector("#overlay__id");

menuOpen.addEventListener("click", () => {
  menuList.classList.add("menu_list_isActive");
  overlayMenuExit.classList.add("overlay_isActive");
});
menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu_list_isActive");
  overlayMenuExit.classList.remove("overlay_isActive");
});

overlayMenuExit.addEventListener("click", () => {
  menuList.classList.remove("menu_list_isActive");
  overlayMenuExit.classList.remove("overlay_isActive");
});
