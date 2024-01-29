const yearSelector = document.getElementById("yearSelector");
const STC = document.getElementById("STC");
const STC2 = document.getElementById("STC2");
const FR = document.getElementById("FR");
const FR2 = document.getElementById("FR2");
const AMC = document.getElementById("AMC");
const AMC2 = document.getElementById("AMC2");
const FL = document.getElementById("FL");
const FL2 = document.getElementById("FL2");
const CMR = document.getElementById("CMR");
const CMR2 = document.getElementById("CMR2");
const CML = document.getElementById("CML");
const CML2 = document.getElementById("CML2");
const DR = document.getElementById("DR");
const DR2 = document.getElementById("DR2");
const DCR = document.getElementById("DCR");
const DCR2 = document.getElementById("DCR2");
const DCL = document.getElementById("DCL");
const DCL2 = document.getElementById("DCL2");
const DL = document.getElementById("DL");
const DL2 = document.getElementById("DL2");
const GK = document.getElementById("GK");
const GK2 = document.getElementById("GK2");
const smallpic = document.getElementById("smallpic");
const sideModal = document.querySelector(".side-modal");
const containers = document.querySelectorAll(".carousel-item");
const coach = document.querySelector(".coach");

window.onload = function () {
    smallpic.style.scale = '.85'
    smallpic.style.left = '3%'
    updatePlayerInfo();
}


// Function to handle mouseover
const handleMouseover = (event) => {
    // Find the image and paragraph within the container
    const img = event.currentTarget.querySelector("img");
    const p = event.currentTarget.querySelector("p");

    // Modify the image
    img.style.height = "21%";
    img.style.transform = "translateY(-32%)";

    // Modify the paragraph
    p.style.scale = "1.3";
    p.style.transform = "translateY(10px) translateX(15px)";
};

// Function to handle mouseout
const handleMouseout = (event) => {
    const img = event.currentTarget.querySelector("img");
    const p = event.currentTarget.querySelector("p");

    // Reset image styles
    img.style.height = ""; // Reset to original or specify a new value
    img.style.transform = ""; // Reset to original or specify a new value

    // Reset paragraph styles
    p.style.scale = "1";
    p.style.transform = "";
    p.style.transform = "";
};

// Add mouseover and mouseout event listeners to each container
containers.forEach(container => {
    container.addEventListener("mouseover", handleMouseover);
    container.addEventListener("mouseout", handleMouseout);
});

function updatePlayerInfo() {

    STC.textContent = "Haaland";
    FR.textContent = "Mbappe";
    AMC.textContent = "Messi";
    FL.textContent = "Vinicius Jr";
    CMR.textContent = "De Bruyne";
    CML.textContent = "Rodri";
    DR.textContent = "J Cancelo";
    DCR.textContent = "van Dijk";
    DCL.textContent = "R Dias";
    DL.textContent = "Robertson";
    GK.textContent = "Courtois";

    STC2.src = "https://img.a.transfermarkt.technology/portrait/header/418560-1694590614.jpg?lm=1";
    FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
    AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
    FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
    CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
    CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
    DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
    DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
    DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
    DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
    GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

    smallpic.src = "/Football/img/wallpapers/haaland.jpg";

    MainFetchPopUp("/Football/Present/Present.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "Erling Haaland, the Norwegian striker, had a significant impact in the 2022-23 season, known for his remarkable goal, scoring abilities and physical presence on the pitch.  Playing for Manchester City in the Premier League, Haaland quickly adapted to English football, showcasing his prowess as a formidable striker."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });

    coach.textContent = "Manager: Pep Guardiola"
    // smallpic.addEventListener('mouseover', () => {
    //             sideModal.style.display = 'block'
    //             sideModal.textContent = "Last season, Erling Haaland, following his transfer from Borussia Dortmund to Manchester City, demonstrated exceptional skill with record-breaking Premier League starts, significant Champions League contributions, and resilience in overcoming minor injuries and occasional non-scoring games."
    //         })

    //         smallpic.addEventListener("mouseout", () => {
    //                     sideModal.style.display = 'none'; // Hide the modal
    //         }); 

    // FetchPopUp("/football/present/present.json");


    function clearAndFadeInElements() {
        const elements = [
            STC, STC2,
            FR, FR2,
            AMC, AMC2,
            FL, FL2,
            CMR, CMR2,
            CML, CML2,
            DR, DR2,
            DCR, DCR2,
            DCL, DCL2,
            DL, DL2,
            GK, GK2,
        ];

        document.getElementById("smallpic").classList.add("fade-in")

        for (const element of elements) {
            element.classList.add("fade-in");
        }

        // Remove the "fade-in" class after the animation is complete
        setTimeout(function () {
            for (const element of elements) {
                element.classList.remove("fade-in");
            }
            document.getElementById("smallpic").classList.remove("fade-in")
        }, 500); // Adjust the timeout value based on your animation duration
    }
    clearAndFadeInElements();
}

// Initial update based on the default year (2020)
updatePlayerInfo();

// for screenshots

// const nav = document.querySelector("nav");
// const backBtn = document.querySelector("#backButton")
// const forBtn = document.querySelector("#forwardButton")
// const search = document.querySelector(".search-container");

// document.querySelector("#smallpic").addEventListener("click", () => {

//     if (nav.style.display === "none" && backBtn.style.display === "none" && forBtn.style.display === "none" && search.style.display === "none") {
//         nav.style.display = "flex";
//         backBtn.style.display = "block";
//         forBtn.style.display = "block";
//         search.style.display = "block";
//     } else {
//         nav.style.display = "none";
//         backBtn.style.display = "none";
//         forBtn.style.display = "none";
//         search.style.display = "none";
//     }
// });