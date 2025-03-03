function toggleMenu() {
  const menuIcon = document.getElementById("toggle_menu_icon");
  menuIcon.classList.toggle("clicked");

  document.querySelector(".menu_contact_info").classList.toggle("hidden-contact");
  document.querySelector(".body_main_content").classList.toggle("body_content_hidden");
  document.querySelector(".footer").classList.toggle("body_content_hidden");
}

document.getElementById("toggle_menu_icon").addEventListener("click", toggleMenu);
document.getElementById("toggle_menu_text").addEventListener("click", toggleMenu);

document.querySelector(".logo_positioner").addEventListener("click", function () {
  window.location.href = "/index.html";
});

//PREV
document.querySelector(".prev").addEventListener("click", function () {
  window.location.href = "/a-tags/tjf2/tjf2.html";
});

//CENTER
document.querySelector(".center").addEventListener("click", function () {
  window.location.href = "/index.html";
});

//NEXT
document.querySelector(".next").addEventListener("click", function () {
  window.location.href = "/a-tags/tjn2/tjn2.html";
});
