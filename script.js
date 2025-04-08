// ======================
// DOMContentLoaded Event
// ======================
document.addEventListener("DOMContentLoaded", function () {
    initializeHorizontalMenu();
    addGlobalClickListener();
    addStickyHeaderBehavior();
});

// ======================
// Horizontal Menu Initialization
// ======================
function initializeHorizontalMenu() {
    const menuContainer = document.getElementById('horizontal-menu');
    const submenuContainer = document.getElementById('submenu-container');

    // Clear existing menu items to prevent duplicates
    menuContainer.innerHTML = '';

    // Sample data for the horizontal menu and submenu
    const menuData = [
        {
            label: 'Projects',
            submenu: [
                { label: "NdaY' Radoko", content: '<h2>NdaY\' Radoko</h2><p>Details about Radoko.</p>' },
                { label: "NdaY' Ben'ny Tanàna", content: '<h2>NdaY\' Ben\'ny Tanàna</h2><p>Details about Ben\'ny Tanàna.</p>' }
            ]
        },
        {
            label: 'News',
            submenu: [
                { label: 'Latest News', content: '<h2>Latest News</h2><p>Stay updated with the latest news.</p>' },
                { label: 'Announcements', content: '<h2>Announcements</h2><p>Important updates and announcements.</p>' }
            ]
        }
    ];

        // Clear existing menu items to prevent duplicates
        menuContainer.innerHTML = '';

    // Generate the horizontal menu
    menuData.forEach(menuItem => {
        const menuItemContainer = document.createElement('div');
        menuItemContainer.className = 'menu-item-container';

        const menuButton = document.createElement('button');
        menuButton.className = 'menu-item';
        menuButton.textContent = menuItem.label;

        const submenuContainer = document.createElement('div');
        submenuContainer.className = 'submenu-container show'; // Add 'show' class to display submenu by default

        // Generate the submenu
        menuItem.submenu.forEach(submenuItem => {
            const submenuButton = document.createElement('button');
            submenuButton.className = 'submenu-item';
            submenuButton.textContent = submenuItem.label;

            submenuButton.addEventListener('click', () => {
                const contentContainer = document.getElementById('content-container');
                contentContainer.innerHTML = `
                    <div class="project-box">
                        <img src="${submenuItem.image}" alt="${submenuItem.label}" class="project-image">
                        <h3>${submenuItem.label}</h3>
                        <p>${submenuItem.description}</p>
                        <p><em>${submenuItem.testimony}</em></p>
                    </div>`;
            });

            submenuContainer.appendChild(submenuButton);
        });

        // Show submenu on click
        menuButton.addEventListener('click', () => {
            submenuContainer.classList.toggle('show'); // Toggle submenu visibility
        });

        menuItemContainer.appendChild(menuButton);
        menuItemContainer.appendChild(submenuContainer);
        menuContainer.appendChild(menuItemContainer);
    });
}

    // Display the first project's details by default
    const defaultProject = menuData[0].submenu[0]; // First project in the "Projects" submenu
    contentContainer.innerHTML = `
        <div class="project-box">
            <img src="${defaultProject.image}" alt="${defaultProject.label}" class="project-image">
            <h3>${defaultProject.label}</h3>
            <p>${defaultProject.description}</p>
            <p><em>${defaultProject.testimony}</em></p>
        </div>
    `;
// Call the function once when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeHorizontalMenu);

// ======================
// Global Click Listener
// ======================
function addGlobalClickListener() {
    const contentContainer = document.getElementById('content-container');

    document.addEventListener('click', function (event) {
        const isClickInsideContent = contentContainer.contains(event.target);

        if (!isClickInsideContent) {
            // Hide content if clicked outside
            contentContainer.innerHTML = '';
        }
    });
}

// ======================
// Sticky Header Behavior
// ======================
function addStickyHeaderBehavior() {
    const header = document.querySelector('header');

    document.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
// ======================
// Debugging Helper
// ======================
function debugSubmenuBehavior() {
    document.querySelectorAll('.menu-item-container').forEach(container => {
        const submenu = container.querySelector('.submenu');

        if (!submenu) {
            console.error('Submenu not found for container:', container);
            return;
        }

        container.addEventListener('mouseenter', () => {
            console.log('Showing submenu:', submenu);
            submenu.classList.add('show');
        });

        container.addEventListener('mouseleave', () => {
            console.log('Hiding submenu:', submenu);
            submenu.classList.remove('show');
        });
    });
}