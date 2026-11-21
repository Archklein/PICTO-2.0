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

const menuOpen = document.querySelector("#menu__toggle__btn");
const myMenu = document.querySelector("#menu__list");
const menuOverlay = document.querySelector("#overlay_id");

menuOpen.addEventListener("click", () => {
  myMenu.classList.add("menu_list_isActive");
  menuOverlay.classList.add("overlay_isActive");
});
menuOverlay.addEventListener("click", () => {
  myMenu.classList.remove("menu_list_isActive");
  menuOverlay.classList.remove("overlay_isActive");
});
