function setupImageHover() {
    const image = document.getElementById('hover-image');

    image.addEventListener('mouseenter', () => {
        image.classList.remove('blurred');
    });

    image.addEventListener('mouseleave', () => {
        image.classList.add('blurred');
    });
}

setupImageHover();