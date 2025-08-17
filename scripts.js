const headers = document.querySelectorAll(".about__trigger");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("active");
  });
});

const accordionItems = document.querySelectorAll('.faq__item');

accordionItems.forEach(item => {
  const header = item.querySelector('.faq__trigger');
  header.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});