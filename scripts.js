// Funzione per gestire il carousel
function setupCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.carousel-nav-buttons button:first-child');
    const nextBtn = carousel.querySelector('.carousel-nav-buttons button:last-child');
    
    if (!items.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function updateDisplay() {
        // Nascondi tutti gli elementi
        items.forEach(item => {
            item.classList.remove('active');
            item.style.opacity = '0';
        });

        // Mostra l'elemento corrente
        items[currentIndex].classList.add('active');
        items[currentIndex].style.opacity = '1';

        // Debug
        console.log(`Carousel ${carouselId}: Showing item ${currentIndex}`);
    }

    // Gestione click precedente
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateDisplay();
    });

    // Gestione click successivo
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateDisplay();
    });

    // Mostra il primo elemento all'inizializzazione
    updateDisplay();
}

// Inizializza tutti i carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousels = [
        'conversation-starter-carousel',
        'view-casa-carousel',
        'finanza-comportamentale-carousel'
    ];
    
    carousels.forEach(id => setupCarousel(id));
});