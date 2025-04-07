document.addEventListener("DOMContentLoaded", function() {
    initializeMenuSystem();
});

function initializeMenuSystem() {
    const menuContainer = document.getElementById('main-menu');
    const contentContainer = document.getElementById('content-display');
    
    // Menu data structure
    const menuData = [
        {
            label: 'Projects',
            submenu: [
                { 
                    label: "NdaY' Radoko", 
                    image: "assets/images/placeholder.jpg",
                    description: "Project description",
                    testimony: "Testimonial text"
                },
                { 
                    label: "NdaY' Ben'ny Tanàna", 
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
                    image: "assets/images/placeholder.jpg",
                    description: "News description",
                    testimony: "Testimonial text"
                },
                { 
                    label: 'Announcements', 
                    image: "assets/images/placeholder.jpg",
                    description: "Announcement description", 
                    testimony: "Testimonial text"
                }
            ]
        }
    ];

    // Clear existing menu
    menuContainer.innerHTML = '';

    // Create menu items
    menuData.forEach(menuItem => {
        const menuItemContainer = document.createElement('div');
        menuItemContainer.className = 'menu-item-container';

        const menuButton = document.createElement('button');
        menuButton.className = 'menu-item';
        menuButton.textContent = menuItem.label;

        const submenu = document.createElement('div');
        submenu.className = 'submenu';

        // Create submenu items
        menuItem.submenu.forEach(submenuItem => {
            const submenuButton = document.createElement('button');
            submenuButton.className = 'submenu-item';
            submenuButton.textContent = submenuItem.label;

            submenuButton.addEventListener('click', () => {
                displayContent(submenuItem, contentContainer);
            });

            submenu.appendChild(submenuButton);
        });

        // Hover behavior - shows submenu AND displays first submenu item's content
        setupHoverBehavior(menuItemContainer, submenu, menuItem, contentContainer);

        menuItemContainer.appendChild(menuButton);
        menuItemContainer.appendChild(submenu);
        menuContainer.appendChild(menuItemContainer);
    });
}

function displayContent(item, container) {
    container.innerHTML = `
        <div class="project-box">
            <img src="${item.image}" alt="${item.label}" class="project-image">
            <h3>${item.label}</h3>
            <p>${item.description}</p>
            <p><em>${item.testimony}</em></p>
        </div>`;
}

function setupHoverBehavior(container, submenu, menuItem, contentContainer) {
    let hideTimeout;
    
    container.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        hideAllSubmenus();
        submenu.classList.add('show');
        
        // Display first submenu item's content on hover
        if (menuItem.submenu.length > 0) {
            displayContent(menuItem.submenu[0], contentContainer);
        }
    });

    container.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
            submenu.classList.remove('show');
        }, 300);
    });

    submenu.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
    });

    submenu.addEventListener('mouseleave', () => {
        submenu.classList.remove('show');
    });
}

function hideAllSubmenus() {
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.classList.remove('show');
    });
}