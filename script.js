// Menu Data (Provided)
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
                    photo: "assets/images/Projects/Testimonies/NdaY_Mom.png"
                },
                link: "https://radoko.nday.mg"
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
                    photo: "assets/images/Projects/Testimonies/NdaY_Mayor.jpeg"
                },
                link: "https://bentanana.nday.mg"
            },
            {
                label: "NdaY' Fako",
                image: "assets/images/Projects/NdaY_Fako.png",
                summary: "<strong>NdaY' Fako</strong> is a cutting-edge digital platform designed to transform waste management and public services, while aligning with the vision of a connected world enjoying a high standard of living. By empowering Mayors and local governments, the platform enhances the delivery of critical WASH (Water, Sanitation, and Hygiene) services and extends these solutions directly to households.",
                description: [
                    "At its core, <strong>NdaY' Fako</strong> harnesses smartphones and QR codes to modernize the management of bins,",
                    "optimize collection processes, and guarantee safety and security for community members.",
                    "The solution promotes proximity services by bringing essential sanitation and hygiene services directly to people’s doors.",
                    "Through innovative features, such as real-time tracking of waste collectors, secure bin identification via QR codes, and smart data integration, <strong>NdaY' Fako</strong> strengthens municipal operations and citizen engagement, contributing to healthier and safer living environments for all."
                ],
                testimony: {
                    text: "NdaY' Fako is helping us to more clean and care about sorted waste that can be recycled according theirs sortings.",
                    source: "Householder, at Alasora's Mayor, Antananarivo Avaradrano",
                    photo: "assets/images/Projects/Testimonies/NdaY_household.jpg"
                },
                link: "https://fako.nday.mg"
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
                    photo: "assets/images/Projects/Testimonies/NdaY_Jejo.png"
                },
                link: "https://hety.nday.mg"
            }
        ]
    },
    {
        label: "News",
        submenu: [
            {
                label: "NDaY' Latest News",
                image: "assets/images/News/NdaY_Latest_News.png",
                description: "NdaY' is launching two projects: NdaY'Radoko, NdaY'BenTanana to apply for the POSEAM 2025.",
                testimony: "NDaY'Fako was launched in 2023 with AFS , and NdaY'Radoko and NdaY'BenTanana are the latest projects to be launched in 2025."
            },
            {
                label: "We are hiring!",
                image: "assets/images/News/NdaY_Announcements.png",
                description: `Join the NdaY'innovation team 
                for the NdaY'Radoko project working on a groundbreaking drone-based IMCI
                health solution for infants in rural Madagascar.
                Positions are remote and freelance-based.`,
                testimony: "Be part of a mission that saves lives using cutting-edge technology. Apply your skills to bring healthcare to hard-to-reach communities and make a real impact."
            }
        ]
    },
    {
        label: "About NdaY'",
        submenu: [
            {
                label: "NdaY' Team",
                image: "assets/images/About/NdaY_Team.png",
                description: "Meet the team behind NdaY'.",
                testimony: "Feedback about our team."
            },
            {
                label: "Where we work",
                image: "assets/images/About/NdaY_Where_Works.png",
                description: "Important updates and announcements.",
                testimony: "User feedback on announcements."
            }
        ]
    }
];

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, initializing menu...");
    initializeHorizontalMenu();
    addGlobalClickListener();
    addStickyHeaderBehavior();
});

// Menu Initialization
function initializeHorizontalMenu() {
    const menuContainer = document.getElementById("horizontal-menu");
    const contentContainer = document.getElementById("content-container");
    if (!menuContainer || !contentContainer) {
        console.error("Menu or content container not found!");
        return;
    }

    menuContainer.innerHTML = "";
    let activeMenuItemContainer = null;
    let hideTimeout = null;

    function closeAllMenus(excludeContainer = null) {
        menuContainer.querySelectorAll(".menu-item-container").forEach((container) => {
            if (container !== excludeContainer) {
                const submenu = container.querySelector(".submenu-container");
                if (submenu) submenu.classList.remove("active");
                const projectContent = container.querySelector(".project-content");
                if (projectContent) {
                    projectContent.classList.remove("active");
                    container.querySelectorAll(".submenu-item").forEach((btn) => btn.classList.remove("active"));
                }
            }
        });
        contentContainer.innerHTML = "";
        contentContainer.classList.remove("active");
        document.body.classList.remove("hide-background");
        closeOverlay();
    }

    function toggleBackground(hide = true) {
        document.body.classList.toggle("hide-background", hide);
    }

    function closeOverlay() {
        const overlay = document.querySelector(".content-overlay");
        if (overlay) {
            overlay.classList.remove("active");
            setTimeout(() => overlay.remove(), 500); // Match CSS transition
        }
    }

    menuData.forEach((menuItem) => {
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
        }

        menuItemContainer.addEventListener("mouseenter", () => {
            console.log(`Entering ${menuItem.label}`);
            clearTimeout(hideTimeout);
            closeAllMenus(menuItemContainer);
            submenuContainer.classList.add("active");
            activeMenuItemContainer = menuItemContainer;
            toggleBackground(true);
        });

        menuItemContainer.addEventListener("mouseleave", (event) => {
            if (!menuContainer.contains(event.relatedTarget) && !contentContainer.contains(event.relatedTarget)) {
                console.log("Leaving menu, scheduling close");
                hideTimeout = setTimeout(() => {
                    if (!contentContainer.contains(document.elementFromPoint(event.clientX, event.clientY))) {
                        closeAllMenus();
                        activeMenuItemContainer = null;
                        toggleBackground(false);
                    }
                }, 200);
            }
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
            });
        }

        menuItem.submenu.forEach((submenuItem, index) => {
            const submenuButton = document.createElement("button");
            submenuButton.className = "submenu-item";
            submenuButton.textContent = submenuItem.label;

            if (menuItem.label === "Projects") {
                submenuButton.addEventListener("click", () => {
                    console.log(`Clicked Projects: ${submenuItem.label}`);
                    updateProjectContent(submenuItem, projectContent, submenuButton);
                    toggleBackground(true);
                });
                submenuButton.addEventListener("mouseenter", () => {
                    console.log(`Hovered Projects: ${submenuItem.label}`);
                    updateProjectContent(submenuItem, projectContent, submenuButton);
                    toggleBackground(true);
                });
            } else {
                submenuButton.addEventListener("click", () => {
                    console.log(`Clicked Non-Projects: ${submenuItem.label}`);
                    displayContent(submenuItem, true);
                    submenuContainer.classList.add("active");
                    toggleBackground(true);
                    submenuContainer.querySelectorAll(".submenu-item").forEach((btn) => btn.classList.remove("active"));
                    submenuButton.classList.add("active");
                });
                submenuButton.addEventListener("mouseenter", () => {
                    console.log(`Hovered Non-Projects: ${submenuItem.label}`);
                    displayContent(submenuItem, true);
                    submenuContainer.classList.add("active");
                    toggleBackground(true);
                    submenuContainer.querySelectorAll(".submenu-item").forEach((btn) => btn.classList.remove("active"));
                    submenuButton.classList.add("active");
                });
            }

            submenuContainer.appendChild(submenuButton);
        });

        menuItemContainer.appendChild(menuButton);
        menuItemContainer.appendChild(submenuContainer);
        menuContainer.appendChild(menuItemContainer);
    });

    contentContainer.addEventListener("mouseenter", () => {
        console.log("Entering content container");
        clearTimeout(hideTimeout);
        if (activeMenuItemContainer && !activeMenuItemContainer.classList.contains("projects-menu")) {
            activeMenuItemContainer.querySelector(".submenu-container")?.classList.add("active");
            toggleBackground(true);
        }
    });

    contentContainer.addEventListener("mouseleave", (event) => {
        if (!menuContainer.contains(event.relatedTarget) && !document.querySelector(".content-overlay")?.contains(event.relatedTarget)) {
            console.log("Leaving content container, scheduling close");
            hideTimeout = setTimeout(() => {
                if (!contentContainer.contains(document.elementFromPoint(event.clientX, event.clientY))) {
                    closeAllMenus();
                    toggleBackground(false);
                }
            }, 200);
        }
    });
}

// Project Content Update (Projects)
function updateProjectContent(submenuItem, projectContent, submenuButton) {
    if (!projectContent || !submenuButton.parentElement) {
        console.error("Project content or submenu button not found!");
        return;
    }

    projectContent.innerHTML = "";
    submenuButton.parentElement.querySelectorAll(".submenu-item").forEach((sib) => sib.classList.remove("active"));
    submenuButton.classList.add("active");

    const buttonRect = submenuButton.getBoundingClientRect();
    const submenuRect = submenuButton.parentElement.getBoundingClientRect();
    const menuContainer = document.getElementById("horizontal-menu");
    const menuRect = menuContainer.getBoundingClientRect();
    projectContent.style.top = `${buttonRect.top - menuRect.top}px`;

    const contentWidth = 800;
    const viewportWidth = window.innerWidth;
    const submenuRight = submenuRect.left + parseInt(getComputedStyle(submenuButton.parentElement).width) + contentWidth + 10;
    projectContent.style.left = submenuRight > viewportWidth ? `-${contentWidth + 10}px` : `${parseInt(getComputedStyle(submenuButton.parentElement).width) + 10}px`;

    const imageBox = document.createElement("div");
    imageBox.className = "content-box image-box";
    const imageLink = document.createElement("a");
    imageLink.href = submenuItem.link || "#";
    imageLink.setAttribute("aria-label", `Visit ${submenuItem.label} webpage`);
    const image = document.createElement("img");
    image.src = submenuItem.image || "default.jpg";
    image.alt = submenuItem.label || "No title";
    imageLink.appendChild(image);
    imageBox.appendChild(imageLink);
    projectContent.appendChild(imageBox);

    const summaryBox = document.createElement("div");
    summaryBox.className = "content-box summary-box";
    const summary = document.createElement("p");
    summary.innerHTML = submenuItem.summary || "No summary";
    summaryBox.appendChild(summary);
    projectContent.appendChild(summaryBox);

    const descriptionBox = document.createElement("div");
    descriptionBox.className = "content-box description-box";
    (submenuItem.description || ["No description"]).forEach((desc) => {
        const p = document.createElement("p");
        p.textContent = desc;
        descriptionBox.appendChild(p);
    });
    projectContent.appendChild(descriptionBox);

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

// Content Display (Non-Projects)
function displayContent(submenuItem, imageOnly = false) {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) {
        console.error("Content container not found!");
        return;
    }

    contentContainer.innerHTML = "";
    const projectBox = document.createElement("div");
    projectBox.className = `project-box ${imageOnly ? "image-only" : ""}`;

    const image = document.createElement("img");
    image.src = submenuItem.image || "default.jpg";
    image.alt = submenuItem.label || "No title";
    image.className = "project-image";
    image.setAttribute("aria-label", `View details for ${submenuItem.label}`);
    projectBox.appendChild(image);

    if (!imageOnly) {
        const title = document.createElement("h3");
        title.textContent = submenuItem.label || "No title";
        projectBox.appendChild(title);

        const description = document.createElement("p");
        description.textContent = Array.isArray(submenuItem.description) ? submenuItem.description.join(" ") : submenuItem.description || "No description";
        projectBox.appendChild(description);

        const testimonial = document.createElement("p");
        testimonial.innerHTML = `<em>${submenuItem.testimony || "No testimony"}</em>`;
        projectBox.appendChild(testimonial);

        if (submenuItem.link) {
            const link = document.createElement("a");
            link.href = submenuItem.link;
            link.textContent = `Learn more about ${submenuItem.label}`;
            link.setAttribute("aria-label", `Visit ${submenuItem.label} webpage`);
            projectBox.appendChild(link);
        }
    } else {
        image.addEventListener("click", () => {
            console.log(`Image clicked: ${submenuItem.label}`);
            showContentOverlay(submenuItem);
        });
    }

    contentContainer.appendChild(projectBox);
    contentContainer.classList.add("active");
    toggleBackground(true);
}

// Content Overlay
function showContentOverlay(submenuItem) {
    closeOverlay();

    const overlay = document.createElement("div");
    overlay.className = "content-overlay";

    const image = document.createElement("img");
    image.src = submenuItem.image || "default.jpg";
    image.alt = submenuItem.label || "No title";
    overlay.appendChild(image);

    const title = document.createElement("h3");
    title.textContent = submenuItem.label || "No title";
    overlay.appendChild(title);

    const description = document.createElement("p");
    description.textContent = Array.isArray(submenuItem.description) ? submenuItem.description.join(" ") : submenuItem.description || "No description";
    overlay.appendChild(description);

    const testimonial = document.createElement("p");
    testimonial.innerHTML = `<em>${submenuItem.testimony?.text || submenuItem.testimony || "No testimony"}</em>`;
    overlay.appendChild(testimonial);

    if (submenuItem.testimony?.source) {
        const source = document.createElement("p");
        source.textContent = submenuItem.testimony.source;
        overlay.appendChild(source);
    }

    if (submenuItem.link) {
        const link = document.createElement("a");
        link.href = submenuItem.link;
        link.textContent = `Learn more about ${submenuItem.label}`;
        link.setAttribute("aria-label", `Visit ${submenuItem.label} webpage`);
        overlay.appendChild(link);
    }

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.setAttribute("aria-label", "Close content overlay");
    closeButton.onclick = closeOverlay;
    overlay.appendChild(closeButton);

    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add("active"), 0);
    toggleBackground(true);
}

// Global Click Listener
function addGlobalClickListener() {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) {
        console.error("Content container not found!");
        return;
    }

    document.addEventListener("click", (event) => {
        const isClickInsideContent = contentContainer.contains(event.target);
        const isClickInsideMenu = event.target.closest(".menu-item-container");
        const isClickInsideOverlay = event.target.closest(".content-overlay");
        if (!isClickInsideContent && !isClickInsideMenu && !isClickInsideOverlay) {
            console.log("Outside click, closing menus");
            closeAllMenus();
            toggleBackground(false);
        }
    });
}

// Sticky Header
function addStickyHeaderBehavior() {
    const header = document.querySelector("header.sticky-header");
    if (!header) {
        console.error("Header not found!");
        return;
    }

    document.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
}