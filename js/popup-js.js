var link = document.querySelector(".form-title");
var popup = document.querySelector(".form-index");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("form-close");
});
