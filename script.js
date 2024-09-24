document.addEventListener("DOMContentLoaded", () => {
    const balloons = document.querySelectorAll('.balloon-svg');
    balloons.forEach((balloon, index) => {
        balloon.style.animationDelay = `${index * 2}s`;
    });
});
