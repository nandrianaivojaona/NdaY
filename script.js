// ======================
// DOMContentLoaded Event
// ======================
document.addEventListener("DOMContentLoaded", function () {
    initializeHorizontalMenu();
    addGlobalClickListener();
    addStickyHeaderBehavior();
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.menu-item-container')) {
            resumeDynamicBackground();
        }
    });
});
// Functions to pause dynamic background on Menu interaction
function pauseDynamicBackground() {
    const dynamicBg = document.querySelector('.dynamic-background');
    dynamicBg.classList.add('paused');
}

function resumeDynamicBackground() {
    const dynamicBg = document.querySelector('.dynamic-background');
    dynamicBg.classList.remove('paused');
}
// Replace the entire initializeHorizontalMenu function with this:
function initializeHorizontalMenu() {
    const menuContainer = document.getElementById('horizontal-menu');
    const contentContainer = document.getElementById('content-container');
    
    // Clear existing menu items to prevent duplicates
    menuContainer.innerHTML = '';

    // Sample data for the horizontal menu and submenu
    const menuData = [
        {
            label: 'Projects',
            submenu: [
                { 
                    label: "NdaY' Radoko", 
                    content: '<h2>NdaY\' Radoko</h2><p>Details about Radoko.</p>',
                    image: "assets/images/placeholder.jpg",
                    description: "Project description",
                    testimony: "Testimonial text"
                },
                { 
                    label: "NdaY' Ben'ny Tanàna", 
                    content: '<h2>NdaY\' Ben\'ny Tanàna</h2><p>Details about Ben\'ny Tanàna.</p>',
                    image: "assets/images/placeholder.jpg",
                    description: "Project description",
                    testimony: "Testimonial text"
                }
            ]
        },
        {
            label: 'News',
            submenu: [
                { 
                    label: 'Latest News', 
                    content: '<h2>Latest News</h2><p>Stay updated with the latest news.</p>',
                    image: "assets/images/placeholder.jpg",
                    description: "News description",
                    testimony: "Testimonial text"
                },
                { 
                    label: 'Announcements', 
                    content: '<h2>Announcements</h2><p>Important updates and announcements.</p>',
                    image: "assets/images/placeholder.jpg",
                    description: "Announcement description",
                    testimony: "Testimonial text"
                }
            ]
        }
    ];

    // Generate the horizontal menu
    menuData.forEach(menuItem => {
        const menuItemContainer = document.createElement('div');
        menuItemContainer.className = 'menu-item-container';

        const menuButton = document.createElement('button');
        menuButton.className = 'menu-item';
        menuButton.textContent = menuItem.label;

        const submenu = document.createElement('div');
        submenu.className = 'submenu';

        // Generate the submenu
        menuItem.submenu.forEach(submenuItem => {
            const submenuButton = document.createElement('button');
            submenuButton.className = 'submenu-item';
            submenuButton.textContent = submenuItem.label;

            submenuButton.addEventListener('click', (e) => {
                e.stopPropagation();
                contentContainer.innerHTML = `
                    <div class="project-box">
                        <img src="${submenuItem.image}" alt="${submenuItem.label}" class="project-image">
                        <h3>${submenuItem.label}</h3>
                        <p>${submenuItem.description}</p>
                        <p><em>${submenuItem.testimony}</em></p>
                    </div>`;
            });

            submenu.appendChild(submenuButton);
        });

        // Show/hide submenu on hover
        // Hover behavior
        menuItemContainer.addEventListener('mouseenter', () => {
            submenu.classList.add('show');
            pauseDynamicBackground();
        });

        menuItemContainer.addEventListener('mouseleave', () => {
            submenu.classList.remove('show');
            resumeDynamicBackground();
        });

        // Click behavior for mobile
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            submenu.classList.toggle('show');
            submenu.classList.contains('show')
            ? pauseDynamicBackground()
            :   resumeDynamicBackground();
            }
        );

        menuItemContainer.appendChild(menuButton);
        menuItemContainer.appendChild(submenu);
        menuContainer.appendChild(menuItemContainer);
    });

    // Display the first project's details by default
    if (menuData.length > 0 && menuData[0].submenu.length > 0) {
        const defaultProject = menuData[0].submenu[0];
        contentContainer.innerHTML = `
            <div class="project-box">
                <img src="${defaultProject.image}" alt="${defaultProject.label}" class="project-image">
                <h3>${defaultProject.label}</h3>
                <p>${defaultProject.description}</p>
                <p><em>${defaultProject.testimony}</em></p>
            </div>`;
    }
} 
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