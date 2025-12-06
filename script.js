// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.startsWith("#")) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
