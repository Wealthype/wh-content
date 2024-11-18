function setupCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const items = Array.from(carousel.querySelectorAll('.carousel-item'));
    const prevBtn = carousel.querySelector('.carousel-nav-buttons button:first-child');
    const nextBtn = carousel.querySelector('.carousel-nav-buttons button:last-child');
    
    if (!items.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function showSlide(index) {
        items.forEach(item => {
            item.classList.remove('active');
            item.style.opacity = '0';
            // Rimuoviamo display:none per permettere la transizione
        });

        requestAnimationFrame(() => {
            items[index].classList.add('active');
            items[index].style.opacity = '1';
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    });

    // Mostra il primo slide
    showSlide(0);
}

document.addEventListener('DOMContentLoaded', () => {
    const carousels = [
        'conversation-starter-carousel',
        'view-casa-carousel',
        'finanza-comportamentale-carousel'
    ];
    
    carousels.forEach(id => setupCarousel(id));
});