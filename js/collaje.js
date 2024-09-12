const collageButton = document.getElementById('collageButton');
const collage = document.getElementById('collage');
const images = collage.querySelectorAll('img');

collageButton.addEventListener('click', () => {
    collage.style.display = 'block';
    setTimeout(() => {
        images.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = '2';
                img.style.transform = `scale(2.0) translate(${getRandomPosition()}px, ${getRandomPosition()}px) rotate(${getRandomRotation()}deg)`;
            }, index * 100); // Para que cada imagen flote con un pequeño retraso
        });
    }, 100);
});

function getRandomPosition() {
    return Math.floor(Math.random() * 700) - 500; // Genera posiciones aleatorias entre -100 y 100
}

function getRandomRotation() {
    return Math.floor(Math.random() * 360); // Genera rotaciones aleatorias
}
