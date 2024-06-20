// Get all navbar links
const navbarLinks = document.querySelectorAll('.navbar a');

// Add click event listener to each link
navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        // Get the target section ID from the link's href attribute
        const targetId = link.getAttribute('href').substring(1);

        // Remove 'active' class from all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Add 'active' class to the target section
        document.getElementById(targetId).classList.add('active');

        // Scroll to the target section
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
