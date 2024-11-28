document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scroll-to-top");

    // Show/Hide scroll-to-top button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Smooth scroll to top
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
