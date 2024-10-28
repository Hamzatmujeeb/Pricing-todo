document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Toggle the active class
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const tableHeader = document.querySelector('.table thead');

    const stickyHeader = header.offsetTop;
    const stickyTableHeader = tableHeader.offsetTop;

    window.onscroll = function () {
        // Fix the header
        if (window.pageYOffset > stickyHeader) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
        }

        // Fix the table header
        if (window.pageYOffset > stickyTableHeader) {
            tableHeader.classList.add('fixed-table-header');
        } else {
            tableHeader.classList.remove('fixed-table-header');
        }
    };
});
