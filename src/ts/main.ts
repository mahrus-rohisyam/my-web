window.addEventListener("scroll", () => {
  const header = document.querySelector("nav");
  const scrollPos = window.scrollY;
  scrollPos > 10
    ? header?.classList.add("sticky")
    : header?.classList.remove("sticky");
});
