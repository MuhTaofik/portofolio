function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
});

function toggleMenu() {
  document.querySelector(".nav-menu")
    .classList.toggle("active");
}
