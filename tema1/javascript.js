// Așteaptă încărcarea completă a documentului
document.addEventListener('DOMContentLoaded', function() {
    // Evidențierea paginii curente în meniu
    highlightCurrentPage();
    
    // Animații pentru elementele dynamic-box
    animateDynamicBoxes();
    
    // Efecte hover pentru cardurile de feature
    setupFeatureCards();
    
    // Efecte hover pentru cardurile de hobby
    setupHobbyCards();
    
    // Actualizarea anului în footer
    updateCopyrightYear();
    
    // Scroll smooth pentru toate link-urile interne
    setupSmoothScroll();
});

// Funcție pentru evidențierea paginii curente în meniu
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Funcție pentru animarea elementelor dynamic-box
function animateDynamicBoxes() {
    const boxes = document.querySelectorAll('.dynamic-box');
    
    // Observer pentru animație la scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Aplică stilurile inițiale și adaugă la observer
    boxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'all 0.5s ease-in-out';
        observer.observe(box);
    });
}

// Funcție pentru efecte hover pe cardurile de feature
function setupFeatureCards() {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
}

// Funcție pentru efecte hover pe cardurile de hobby
function setupHobbyCards() {
    const cards = document.querySelectorAll('.hobby-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
}

// Funcție pentru actualizarea anului în footer
function updateCopyrightYear() {
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace(/\d{4}/, currentYear);
    }
}

// Funcție pentru scroll smooth la link-uri interne
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}