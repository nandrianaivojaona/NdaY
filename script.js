// ======================
// Menu Data
// ======================
const menuData = [
    {
        label: "Projects",
        submenu: [
            {
                label: "NdaY' Radoko",
                image: "assets/images/NdaY_Radoko.png",
                description: "Details about Radoko. This is a longer description to test overflow behavior in the box, ensuring it scrolls properly when the text exceeds the allocated height.",
                testimony: "Testimonial from a satisfied user."
            },
            {
                label: "NdaY' Ben'ny Tanàna",
                image: "assets/images/NdaY_Ben_Tanana.png",
                description: "Details about Ben'ny Tanàna. Another extended description to demonstrate scrolling functionality for lengthy project details.",
                testimony: "Another satisfied user testimonial."
            }
        ]
    },
    {
        label: "News",
        submenu: [
            {
                label: "Latest News",
                image: "assets/images/latest_news.jpg",
                description: "Stay updated with the latest news.",
                testimony: "User feedback on recent updates."
            },
            {
                label: "Announcements",
                image: "assets/images/announcements.jpg",
                description: "Important updates and announcements.",
                testimony: "User feedback on announcements."
            }
        ]
    },
    {
        label: "About NdaY'",
        submenu: [
            {
                label: "NdaY' Team",
                image: "assets/images/NdaY_Team.png",
                description: "Meet the team behind NdaY'.",
                testimony: "Feedback about our team."
            },
            {
                label: "Announcements",
                image: "assets/images/announcements.jpg",
                description: "Important updates and announcements.",
                testimony: "User feedback on announcements."
            }
        ]
    }
];

// ======================
// DOM Initialization
// ======================
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, initializing menu...");
    initializeHorizontalMenu();
    addGlobalClickListener();
    addStickyHeaderBehavior();
});

// ======================
// Menu Initialization
// ======================
function initializeHorizontalMenu() {
    const menuContainer = document.getElementById("horizontal-menu");
    if (!menuContainer) {
        console.error("Menu container (#horizontal-menu) not found!");
        return;
    }

    console.log("Clearing menu container...");
    menuContainer.innerHTML = "";

    menuData.forEach((menuItem) => {
        console.log(`Creating menu item: ${menuItem.label}`);

        // Create menu structure
        const menuItemContainer = document.createElement("div");
        menuItemContainer.className = "menu-item-container";
        if (menuItem.label === "Projects") {
            menuItemContainer.classList.add("projects-menu");
        }

        const menuButton = document.createElement("button");
        menuButton.className = "menu-item";
        menuButton.textContent = menuItem.label;

        const submenuContainer = document.createElement("div");
        submenuContainer.className = "submenu-container";
        if (menuItem.label === "Projects") {
            submenuContainer.classList.add("projects-submenu");
            const projectContent = document.createElement("div");
            projectContent.className = "project-content";
            submenuContainer.appendChild(projectContent);
        }

        // Track default submenu for Projects
        let defaultSubmenuButton = null;
        let defaultSubmenuItem = null;

        // Create submenu items
        menuItem.submenu.forEach((submenuItem, index) => {
            console.log(`Creating submenu item: ${submenuItem.label}`);

            const submenuButton = document.createElement("button");
            submenuButton.className = "submenu-item";
            submenuButton.textContent = submenuItem.label;

            // Add event listeners
            if (menuItem.label === "Projects") {
                submenuButton.addEventListener("click", () => {
                    console.log(`Clicked: ${submenuItem.label}`);
                    updateProjectContent(submenuItem, submenuContainer.querySelector(".project-content"), submenuButton);
                });

                submenuButton.addEventListener("mouseenter", () => {
                    console.log(`Hovered: ${submenuItem.label}`);
                    updateProjectContent(submenuItem, submenuContainer.querySelector(".project-content"), submenuButton);
                });

                submenuButton.addEventListener("mouseleave", () => {
                    console.log(`Mouseleave: ${submenuItem.label}`);
                    submenuButton.classList.remove("active");
                });

                // Store default item
                if (index === 0) {
                    defaultSubmenuButton = submenuButton;
                    defaultSubmenuItem = submenuItem;
                }
            } else {
                submenuButton.addEventListener("click", () => {
                    console.log(`Click: ${submenuItem.label}`);
                    displayContent(submenuItem);
                });

                submenuButton.addEventListener("mouseenter", () => {
                    console.log(`Hover: ${submenuItem.label}`);
                    displayContent(submenuItem);
                });

                submenuButton.addEventListener("mouseleave", () => {
                    console.log(`Mouseleave: ${submenuItem.label}`);
                    const contentContainer = document.getElementById("content-container");
                    if (contentContainer) {
                        contentContainer.innerHTML = "";
                    }
                });
            }

            submenuContainer.appendChild(submenuButton);
        });

        // Append to DOM
        menuItemContainer.appendChild(menuButton);
        menuItemContainer.appendChild(submenuContainer);
        menuContainer.appendChild(menuItemContainer);

        // Set default content for Projects after DOM insertion
        if (menuItem.label === "Projects" && defaultSubmenuButton && defaultSubmenuItem) {
            console.log(`Setting default content for: ${defaultSubmenuItem.label}`);
            updateProjectContent(defaultSubmenuItem, submenuContainer.querySelector(".project-content"), defaultSubmenuButton);
            defaultSubmenuButton.classList.add("active");
        }
    });
}

// ======================
// Project Content Update (for Projects)
// ======================
function updateProjectContent(submenuItem, projectContent, submenuButton) {
    if (!projectContent) {
        console.error("Project content area not found!");
        return;
    }
    if (!submenuButton.parentElement) {
        console.error("submenuButton not attached to DOM:", submenuButton);
        return;
    }

    console.log(`Updating project content for: ${submenuItem.label}`);
    projectContent.innerHTML = "";

    // Set active state
    const siblings = submenuButton.parentElement.querySelectorAll(".submenu-item");
    siblings.forEach((sib) => sib.classList.remove("active"));
    submenuButton.classList.add("active");

    // Align content with button
    const buttonRect = submenuButton.getBoundingClientRect();
    const submenuRect = submenuButton.parentElement.getBoundingClientRect();
    projectContent.style.top = `${buttonRect.top - submenuRect.top}px`;

    // Image box
    const imageBox = document.createElement("div");
    imageBox.className = "content-box image-box";
    const image = document.createElement("img");
    image.src = submenuItem.image || "default.jpg";
    image.alt = submenuItem.label || "No title";
    imageBox.appendChild(image);
    projectContent.appendChild(imageBox);

    // Description box
    const descriptionBox = document.createElement("div");
    descriptionBox.className = "content-box description-box";
    descriptionBox.textContent = submenuItem.description || "No description";
    projectContent.appendChild(descriptionBox);

    // Testimony box
    const testimonyBox = document.createElement("div");
    testimonyBox.className = "content-box testimony-box";
    const testimonyText = document.createElement("div");
    testimonyText.className = "testimony-text";
    testimonyText.innerHTML = `<em>${submenuItem.testimony || "No testimony"}</em>`;
    testimonyBox.appendChild(testimonyText);
    const testimonyPhoto = document.createElement("div");
    testimonyPhoto.className = "testimony-photo";
    testimonyBox.appendChild(testimonyPhoto);
    projectContent.appendChild(testimonyBox);
}

// ======================
// Content Display (for non-Projects)
// ======================
function displayContent(submenuItem) {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) {
        console.error("Content container not found!");
        return;
    }

    console.log(`Displaying content for: ${submenuItem.label}`);
    contentContainer.innerHTML = "";

    const projectBox = document.createElement("div");
    projectBox.className = "project-box";

    const image = document.createElement("img");
    image.src = submenuItem.image || "default.jpg";
    image.alt = submenuItem.label || "No title";
    image.className = "project-image";
    projectBox.appendChild(image);

    const title = document.createElement("h3");
    title.textContent = submenuItem.label || "No title";
    projectBox.appendChild(title);

    const description = document.createElement("p");
    description.textContent = submenuItem.description || "No description";
    projectBox.appendChild(description);

    const testimonial = document.createElement("p");
    testimonial.innerHTML = `<em>${submenuItem.testimony || "No testimony"}</em>`;
    projectBox.appendChild(testimonial);

    contentContainer.appendChild(projectBox);
}

// ======================
// Global Click Listener
// ======================
function addGlobalClickListener() {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) {
        console.error("Content container not found for global click listener!");
        return;
    }

    document.addEventListener("click", (event) => {
        const isClickInsideContent = contentContainer.contains(event.target);
        const isClickInsideMenu = event.target.closest(".menu-item-container:not(.projects-menu)");
        if (!isClickInsideContent && !isClickInsideMenu) {
            console.log("Clearing content container due to outside click");
            contentContainer.innerHTML = "";
        }
    });
}

// ======================
// Sticky Header Behavior
// ======================
function addStickyHeaderBehavior() {
    const header = document.querySelector("header");
    if (!header) {
        console.error("Header not found!");
        return;
    }

    document.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}