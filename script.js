document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        document.getElementById("scrollDownHint").classList.add("fade-in");
    }, 1000);

    document.getElementById("caretDown").addEventListener("click", () => {
        document.querySelector(".horizontal-wrapper").scrollIntoView({ behavior: "smooth" });
    });

    setTimeout(() => {
        document.getElementById("scrollRightHint").classList.add("fade-in");
    }, 2000);

    document.getElementById("caretRight").addEventListener("click", () => {
        document.querySelector(".main-3").scrollIntoView({ behavior: "smooth" });
    });

});
