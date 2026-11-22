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
const menuList = document.querySelector("#menu__list");
const menuClose_overlay = document.querySelector("#menu__overlay");

menuOpen.addEventListener("click", () => {
  menuList.classList.add("menu_list_isActive");
  menuClose_overlay.classList.add("overlay_isActive");
});

menuClose_overlay.addEventListener("click", () => {
  menuList.classList.remove("menu_list_isActive");
  menuClose_overlay.classList.remove("overlay_isActive");
});
