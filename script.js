document.addEventListener("DOMContentLoaded", () => {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon, index) => {
        balloon.style.animationDelay = `${index * 2}s`;
    });
});
