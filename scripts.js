// Simple animation on scroll
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Add fade-in effect
const style = document.createElement('style');
style.textContent = `
  .section {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }

  .section.show {
    opacity: 1;
    transform: translateY(0);
  }

  .icon-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    color: #0077cc;
    text-decoration: none;
    margin-bottom: 0.5rem;
  }

  .icon-link:hover {
    color: #005fa3;
  }
`;
document.head.appendChild(style);

// Add Font Awesome icons dynamically
const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
document.head.appendChild(fontAwesome);
