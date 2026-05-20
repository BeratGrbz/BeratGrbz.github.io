document.addEventListener("DOMContentLoaded", () => {

    // Fade-in pijl naar beneden
    setTimeout(() => {
        document.getElementById("scrollDownHint").classList.add("fade-in");
    }, 1000);

    // Scroll naar main-2 (VERTICAAL)
    document.getElementById("caretDown").addEventListener("click", () => {
        document.querySelector(".horizontal-wrapper").scrollIntoView({ behavior: "smooth" });
    });

    // Fade-in pijl naar rechts
    setTimeout(() => {
        document.getElementById("scrollRightHint").classList.add("fade-in");
    }, 2000);

    // Scroll naar main-3 (HORIZONTAAL)
    document.getElementById("caretRight").addEventListener("click", () => {
        document.querySelector(".main-3").scrollIntoView({ behavior: "smooth" });
    });

});
