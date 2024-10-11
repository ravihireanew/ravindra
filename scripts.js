// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Smooth scroll for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project modal view functionality
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const viewMoreButtons = document.querySelectorAll('.view-more');

viewMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const projectId = e.target.dataset.project;
        if (projectId === '1') {
            modalTitle.textContent = 'Nicotine Metabolite Ratio';
            modalImage.src = 'project1.jpg';
            modalDescription.textContent = 'Investigated the role of the nicotine metabolite ratio (NMR) as a biomarker to guide smoking cessation treatment.';
        } else if (projectId === '2') {
            modalTitle.textContent = 'Escitalopram Toxicity';
            modalImage.src = 'Abstract 12345.png';
            modalDescription.textContent = 'Investigated the dose-dependent toxicity of the antidepressant escitalopram on zebrafish larvae.';
        }
        projectModal.style.display = 'block';
    });
});

// Close modal
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
    projectModal.style.display = 'none';
});

// Close modal when clicking outside the modal
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
    }
});
