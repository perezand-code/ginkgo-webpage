// FAQ accordian
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader= e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        //toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //toggle visibility of body
        groupBody.classList.toggle('open');

        //toggle close rest

        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});

//results transition
window.addEventListener('scroll', () => {
    const containers = document.querySelectorAll('.before-after-container');

    containers.forEach(container => {
      const afterImg = container.querySelector('.after');
      const rect = container.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 600; // reveal slightly before fully visible

      afterImg.style.opacity = isVisible ? 1 : 0;
    });
  });

// mobile menu

document.addEventListener('DOMContentLoaded',() => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active')
    );
});