"use strict";
window.addEventListener("scroll", () => {
    const header = document.querySelector("nav");
    const scrollPos = window.scrollY;
    scrollPos > 10
        ? header === null || header === void 0 ? void 0 : header.classList.add("sticky")
        : header === null || header === void 0 ? void 0 : header.classList.remove("sticky");
});
