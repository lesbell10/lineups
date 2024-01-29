// Preload images
const imageUrls = [
    "Haaland.webp",
    "Mbappe.webp",
    "Messi.webp",
    "Vinicius Jr.webp",
    "De Bruyne.webp",
    "Rodri.webp",
    "J Cancelo.webp",
    "van Dijk.webp",
    "R Dias.webp",
    "Robertson.webp",
    "Courtois.webp",
    "wallpapers/haaland.jpg",
    // Add more image URLs here if needed
];

const preloadedImages = [];

function preloadImages() {
    for (const imageUrl of imageUrls) {
        const img = new Image();
        img.src = `/Football/img/players/${imageUrl}`;
        preloadedImages.push(img);
    }
}

preloadImages();

// DOM elements
const yearSelector = document.getElementById("yearSelector");
const playerNames = [
    "Haaland", "Mbappe", "Messi", "Vinicius Jr", "De Bruyne",
    "Rodri", "J Cancelo", "van Dijk", "R Dias", "Robertson", "Courtois"
];
const playerImages = [
    STC2, FR2, AMC2, FL2, CMR2,
    CML2, DR2, DCR2, DCL2, DL2, GK2
];
const smallpic = document.getElementById("smallpic");
const sideModal = document.querySelector(".side-modal");
const containers = document.querySelectorAll(".carousel-item");
const coach = document.querySelector(".coach");

// Function to handle mouseover
function handleMouseover(event) {
    const img = event.currentTarget.querySelector("img");
    const p = event.currentTarget.querySelector("p");

    img.style.height = "21%";
    img.style.transform = "translateY(-32%)";

    p.style.transform = "scale(1.3) translateY(10px) translateX(15px)";
}

// Function to handle mouseout
function handleMouseout(event) {
    const img = event.currentTarget.querySelector("img");
    const p = event.currentTarget.querySelector("p");

    img.style.height = "";
    img.style.transform = "";

    p.style.transform = "";
}

// Add mouseover and mouseout event listeners to each container
containers.forEach(container => {
    container.addEventListener("mouseover", handleMouseover);
    container.addEventListener("mouseout", handleMouseout);
});

function updatePlayerInfo() {
    const playerNames = [
        "Haaland", "Mbappe", "Messi", "Vinicius Jr", "De Bruyne",
        "Rodri", "J Cancelo", "van Dijk", "R Dias", "Robertson", "Courtois"
    ];

    playerNames.forEach((name, index) => {
        const element = playerImages[index];
        element.src = `/Football/img/players/${name}.webp`;
    });

    smallpic.src = "/football/img/wallpapers/haaland.jpg";
    coach.textContent = "Manager: Pep Guardiola";

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block';
        sideModal.textContent = "Erling Haaland, the Norwegian striker, had a significant impact in the 2022-23 season, known for his remarkable goal-scoring abilities and physical presence on the pitch. Playing for Manchester City in the Premier League, Haaland quickly adapted to English football, showcasing his prowess as a formidable striker.";
    });

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none';
    });

    // Add other event listeners or actions as needed
}

function clearAndFadeInElements() {
    const elements = [
        ...playerImages,
        document.getElementById("smallpic")
    ];

    elements.forEach(element => {
        element.classList.add("fade-in");
    });

    setTimeout(() => {
        elements.forEach(element => {
            element.classList.remove("fade-in");
        });
    }, 500);
}

window.onload = function () {
    smallpic.style.transform = 'scale(0.85) translateX(3%)';
    updatePlayerInfo();
    clearAndFadeInElements();
}
