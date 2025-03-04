document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector(".arrow");

    // Показать кнопку, когда пользователь проскроллил вниз
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Прокрутка вверх при клике
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
