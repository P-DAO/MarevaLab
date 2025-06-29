const btnTop = document.getElementById("btnTop");

window.onscroll = function () {
    // Affiche le bouton après avoir scrollé de 200px
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnTop.style.display = "flex";
    } else {
        btnTop.style.display = "none";
    }
};

btnTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});