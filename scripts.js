const headers = document.querySelectorAll(".about__trigger");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("active");
  });
});