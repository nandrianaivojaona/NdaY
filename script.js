// ======================
// Menu Data
// ======================
const menuData = [
    {
        label: "Projects",
        submenu: [
            {
                label: "NdaY' Radoko",
                image: "assets/images/Projects/NdaY_Radoko.png",
                summary: "An AI-powered solution enhancing healthcare systems",
                description: [
                    "A cutting-edge AI-driven platform designed to improve healthcare systems by leveraging advanced diagnostics, patient care, and resource management.",
                    "Equipped with the IMCI (Integrated Management of Childhood Illness) Booklet.",
                    "NdaY' Radoko drones serve as virtual health assistants, capable of traveling directly to households to assess, classify, treat, and counsel mothers of infants under 3 months.",
                    "It also provides guidance to community health workers for children under 5 years."
                ],
                testimony: {
                    text: `Nanampy ireo menavava kelinay i drone NdaY'Radoko.
                    Mba tsy entina eny @ tobipahasalamana alavitra ny tokantrano.
                    NdaY' Radoko no nandray ny anjara fanompoana,
                    tsy reraka no tsy lany fotoana hanaraka ny fahasalamany.`,
                    source: "Bozy, Maman'i Botakely any Tanàna ambanivohitr'i Basalampy",
                    photo: "assets/images/testimonies/NdaY_Mom.png"
                },
                    link: "https://nday.radoko.mg" //NdaY'Radoko webpage subdomain of nday.mg
                
            },
           
            {
                label: "NdaY' Ben'ny Tanàna",
                image: "assets/images/Projects/NdaY_Ben_Tanana.png",
                summary: "A digital service governance platform for local authorities and citizens",
                description: [
                    "A digital service governance platform designed to bridge the gap between local authorities and citizens.",
                    "Facilitates transparent communication and efficient service delivery.",
                    "Empowers local communities to engage with their governments effectively.",
                    "Delivered anywhere legal, trusted and unforged birth certificate to the citizens."
                ],
                testimony: {
                    text: "Tato an-trano dia efa nahazo dika mitovy ny fanamarinam-pahaterahana!",
                    source: "Ingahy Solo Lehibe, Ben'ny Tanàna Tsy tononina aloha",
                    photo: "assets/images/testimonies/NdaY_Mayor.jpeg"
                },
                    link: "https://nday.bentaanana.mg" //NdaY'Ben'ny Tanàna webpage subdomain of nday.mg             
            },
            {
                label: "NdaY' Fako",
                image: "assets/images/Projects/NdaY_Fako.png",
                summary: " <strong>NdaY' Fako</strong> is a cutting-edge digital platform designed to transform waste management and public services, while aligning with the vision of a connected world enjoying a high standard of living. By empowering Mayors and local governments, the platform enhances the delivery of critical WASH (Water, Sanitation, and Hygiene) services and extends these solutions directly to households.",
                description: [
                    "At its core, <strong>NdaY' Fako</strong> harnesses smartphones and QR codes to modernize the management of bins,",
                    "optimize collection processes, and guarantee safety and security for community members.",
                    " The solution promotes proximity services by bringing essential sanitation and hygiene services directly to people’s doors.",
                    " Through innovative features, such as real-time tracking of waste collectors, secure bin identification via QR codes, and smart data integration, <strong>NdaY' Fako</strong> strengthens municipal operations and citizen engagement, contributing to healthier and safer living environments for all."
                ],
                testimony: {
                    text: "NdaY' Fako is helping us to more clean and care about sorted waste that can be recycled according theirs sortings.",
                    source: "Householder, at Alasora's Mayor, Antananarivo Avaradrano",
                    photo: "assets/images/testimonies/NdaY_household.jpg"
                },
                link: "https://nday.fako.mg" //NdaY'Fako webpage subdomain of nday.mg
            },
            {
                label: "NdaY' Hety",
                image: "assets/images/Projects/NdaY_Hety.png",
                summary: "A digital platform for Haircut/style services performed at home",
                description: [
                    "A premier doorstep hairstyling service that embodies the vision of a connected world enjoying a high standard of life.",
                    "Facilitates the haircut and style services for people struggling with theirs agendas.",
                    "Empowers Hotel, Hostel and B&B for clients just arrived with busy agendas.",
                    "Delivered at the local choosen by the client, trusted and secured and in timeline."
                ],
                testimony: {
                    text: "Ato an-trano dia efa mibika @ ny volonay, izahay!",
                    source: "Salohy Jejo, at CRAL Ampitatafika, Antananarivo Atsimondrano",
                    photo: "assets/images/testimonies/NdaY_Jejo.png"
                },
                link: "https://nday.hety.mg" //NdaY'Hety webpage subdomain of nday.mg
            }
        ]
    },
    {
        label: "News",
        submenu: [
            {
                label: "Latest News",
                image: "assets/images/testimonies/NdaY_Latest_news.jpeg",
                description: "Stay updated with the latest news.",
                testimony: "User feedback on recent updates."
            },
            {
                label: "Announcements",
                image: "assets/images/NdaY_Logo.png",
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
                image: "assets/images/testimonies/NdaY_Team.png",
                description: "Meet the team behind NdaY'.",
                testimony: "Feedback about our team."
            },
            {
                label: "Where we work",
                image: "assets/images/NdaY_Logo.png",
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
// Toggle Background and Animations
function toggleBackground(hide = true) {
    console.log(`Toggling background: ${hide ? "hide" : "show"}`);
    document.body.classList.toggle("hide-background", hide);
    document.body.classList.toggle("pause-animations", hide);
}
// Close all menus and clear content, except for the specified container
function closeAllMenus(excludeContainer = null) {
    const contentContainer = document.getElementById("content-container");
    const menuContainer = document.getElementById("horizontal-menu");
    const menuItems = menuContainer.querySelectorAll(".menu-item-container");

    menuItems.forEach((container) => {
        if (container !== excludeContainer) {
            const submenu = container.querySelector(".submenu-container");
            if (submenu) submenu.classList.remove("active");

            const projectContent = container.querySelector(".project-content");
            if (projectContent) {
                projectContent.classList.remove("active");
                const activeButton = container.querySelector(".submenu-item.active");
                if (activeButton) activeButton.classList.remove("active");
            }
        }
    });

    if (contentContainer) {
        contentContainer.innerHTML = "";
        toggleBackground(false);
    }
}

// Update project content for "Projects" submenu items
function updateProjectContent(submenuItem, projectContent, submenuButton) {
    if (!projectContent || !submenuButton.parentElement) {
        console.error("Invalid project content or submenu button");
        return;
    }

    console.log(`Updating project content: ${submenuItem.label}`);
    projectContent.innerHTML = "";

    // Set active submenu button
    submenuButton.parentElement.querySelectorAll(".submenu-item").forEach((sib) => sib.classList.remove("active"));
    submenuButton.classList.add("active");

    // Position project content (desktop only)
    if (window.innerWidth > 1280) {
        const buttonRect = submenuButton.getBoundingClientRect();
        const submenuRect = submenuButton.parentElement.getBoundingClientRect();
        const menuContainer = document.getElementById("horizontal-menu");
        const menuRect = menuContainer.getBoundingClientRect();
        projectContent.style.top = `${buttonRect.top - menuRect.top}px`;

        const contentWidth = 750;
        const viewportWidth = window.innerWidth;
        const submenuRight = submenuRect.left + parseInt(getComputedStyle(submenuButton.parentElement).width) + contentWidth + 10;
        projectContent.style.left = submenuRight > viewportWidth ? `-${contentWidth + 10}px` : `${parseInt(getComputedStyle(submenuButton.parentElement).width) + 10}px`;
    } else {
        projectContent.style.top = '';
        projectContent.style.left = '';
    }

    // Image box
    const imageBox = document.createElement("div");
    imageBox.className = "content-box image-box";
    const image = document.createElement("img");
    image.src = submenuItem.image || "default.jpg";
    image.alt = submenuItem.label || "No title";

    // Wrap image in anchor tag if link exists
    if (submenuItem.link) {
        const link = document.createElement("a");
        link.href = submenuItem.link;
        link.target = "_blank"; // Open in new tab
        link.rel = "noopener noreferrer"; // Security best practice
        link.appendChild(image);
        imageBox.appendChild(link);
    } else {
        imageBox.appendChild(image);
    }
    projectContent.appendChild(imageBox);

    // Summary box
    const summaryBox = document.createElement("div");
    summaryBox.className = "content-box summary-box";
    const summary = document.createElement("p");
    summary.innerHTML = submenuItem.summary || "No summary";
    summaryBox.appendChild(summary);
    projectContent.appendChild(summaryBox);

    // Description box
    const descriptionBox = document.createElement("div");
    descriptionBox.className = "content-box description-box";
    (submenuItem.description || ["No description"]).forEach((desc) => {
        const p = document.createElement("p");
        p.innerHTML = desc;
        descriptionBox.appendChild(p);
    });
    projectContent.appendChild(descriptionBox);

    // Testimony box
    const testimonyBox = document.createElement("div");
    testimonyBox.className = "content-box testimony-box";
    const testimonyText = document.createElement("div");
    testimonyText.className = "testimony-text";
    testimonyText.innerHTML = `<em>${submenuItem.testimony?.text || "No testimony"}</em>`;
    testimonyBox.appendChild(testimonyText);
    const testimonySource = document.createElement("div");
    testimonySource.className = "testimony-source";
    testimonySource.textContent = submenuItem.testimony?.source || "Anonymous";
    testimonyBox.appendChild(testimonySource);
    if (submenuItem.testimony?.photo) {
        const testimonyPhoto = document.createElement("div");
        testimonyPhoto.className = "testimony-photo";
        testimonyPhoto.style.backgroundImage = `url(${submenuItem.testimony.photo})`;
        testimonyBox.appendChild(testimonyPhoto);
    }
    projectContent.appendChild(testimonyBox);

    projectContent.classList.add("active");
    toggleBackground(true);
}
// Display content for non-"Projects" submenu items
function displayContent(submenuItem) {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) {
        console.error("Content container not found!");
        return;
    }

    console.log(`Displaying content: ${submenuItem.label}`);
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
    toggleBackground(true);
}


// ======================
// Menu Initialization
// ======================
// Initialize horizontal menu and event listeners
function initializeHorizontalMenu() {
    const menuContainer = document.getElementById("horizontal-menu");
    if (!menuContainer) {
        console.error("Menu container (#horizontal-menu) not found!");
        return;
    }

    console.log("Initializing menu...");
    menuContainer.innerHTML = "";
    document.body.classList.remove("hide-background", "pause-animations");

    let activeMenuItemContainer = null;
    let hideTimeout = null;

    menuData.forEach((menuItem) => {
        console.log(`Creating menu item: ${menuItem.label}`);

        const menuItemContainer = document.createElement("div");
        menuItemContainer.className = `menu-item-container ${menuItem.label === "Projects" ? "projects-menu" : ""}`;

        const menuButton = document.createElement("button");
        menuButton.className = "menu-item";
        menuButton.textContent = menuItem.label;

        const submenuContainer = document.createElement("div");
        submenuContainer.className = `submenu-container ${menuItem.label === "Projects" ? "projects-submenu" : ""}`;

        let projectContent = null;
        if (menuItem.label === "Projects") {
            projectContent = document.createElement("div");
            projectContent.className = "project-content";
            submenuContainer.appendChild(projectContent);

            projectContent.addEventListener("mouseenter", () => {
                console.log("Entering project content");
                clearTimeout(hideTimeout);
                toggleBackground(true);
            });

            projectContent.addEventListener("mouseleave", (event) => {
                if (!menuContainer.contains(event.relatedTarget) && !submenuContainer.contains(event.relatedTarget)) {
                    console.log("Leaving project content");
                    hideTimeout = setTimeout(() => toggleBackground(false), 200);
                }
            });
        }

        menuItemContainer.addEventListener("mouseenter", () => {
            console.log(`Entering ${menuItem.label}`);
            clearTimeout(hideTimeout);
            closeAllMenus(menuItemContainer);
            submenuContainer.classList.add("active");
            activeMenuItemContainer = menuItemContainer;
            toggleBackground(true);
        });

        if (window.innerWidth <= 768) {
            let lastClick = 0;
            menuButton.addEventListener("click", (event) => {
                event.preventDefault();
                const now = Date.now();
                if (now - lastClick < 300) return;
                lastClick = now;

                const isActive = submenuContainer.classList.contains("active");
                closeAllMenus(isActive ? null : menuItemContainer);
                submenuContainer.classList.toggle("active");
                toggleBackground(submenuContainer.classList.contains("active"));
                if (menuItem.label === "Projects" && projectContent) {
                    projectContent.classList.remove("active");
                }
            });
        }

        menuItem.submenu.forEach((submenuItem) => {
            console.log(`Creating submenu item: ${submenuItem.label}`);

            const submenuButton = document.createElement("button");
            submenuButton.className = "submenu-item";
            submenuButton.textContent = submenuItem.label;

            if (menuItem.label === "Projects") {
                submenuButton.addEventListener("click", () => {
                    console.log(`Clicked: ${submenuItem.label}`);
                    updateProjectContent(submenuItem, projectContent, submenuButton);
                });

                submenuButton.addEventListener("mouseenter", () => {
                    console.log(`Hovered: ${submenuItem.label}`);
                    updateProjectContent(submenuItem, projectContent, submenuButton);
                });
            } else {
                submenuButton.addEventListener("click", () => {
                    console.log(`Clicked: ${submenuItem.label}`);
                    displayContent(submenuItem);
                });

                submenuButton.addEventListener("mouseenter", () => {
                    console.log(`Hovered: ${submenuItem.label}`);
                    displayContent(submenuItem);
                });
            }

            submenuContainer.appendChild(submenuButton);
        });

        menuItemContainer.appendChild(menuButton);
        menuItemContainer.appendChild(submenuContainer);
        menuContainer.appendChild(menuItemContainer);
        console.log(`Appended ${menuItem.label} to menu container`);
    });

    menuContainer.addEventListener("mouseleave", (event) => {
        if (!menuContainer.contains(event.relatedTarget)) {
            console.log("Leaving entire menu");
            closeAllMenus(); // Clear all menus and content
            activeMenuItemContainer = null;
            toggleBackground(false);
        }
    });

    menuContainer.addEventListener("mouseenter", () => {
        console.log("Re-entering menu");
        clearTimeout(hideTimeout);
        toggleBackground(true);
    });
}

// ======================
// Global Click Listener
// ======================
// Handle global clicks to clear content
function addGlobalClickListener() {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) {
        console.error("Content container not found!");
        return;
    }

    document.addEventListener("click", (event) => {
        const isClickInsideContent = contentContainer.contains(event.target);
        const isClickInsideMenu = event.target.closest(".menu-item-container");
        if (!isClickInsideContent && !isClickInsideMenu) {
            console.log("Clicked outside, clearing content");
            contentContainer.innerHTML = "";
            closeAllMenus(); // Ensure all menus and content are cleared
            toggleBackground(false);
        }
    });

    contentContainer.addEventListener("mouseenter", () => {
        console.log("Entering content container");
        toggleBackground(true);
    });

    contentContainer.addEventListener("mouseleave", (event) => {
        if (!document.getElementById("horizontal-menu").contains(event.relatedTarget)) {
            console.log("Leaving content container");
            setTimeout(() => {
                if (!contentContainer.innerHTML) toggleBackground(false);
            }, 200);
        }
    });
}

// ======================
// Sticky Header Behavior
// ======================
// Add sticky behavior to header
function addStickyHeaderBehavior() {
    const header = document.querySelector("header");
    if (!header) {
        console.error("Header not found!");
        return;
    }

    document.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
}