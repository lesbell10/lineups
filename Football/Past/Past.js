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



function updatePlayerInfo() {

    STC.textContent = "Suarez";
    FR.textContent = "Messi";
    AMC.textContent = "De Bruyne";
    FL.textContent = "C Ronaldo";
    CMR.textContent = "Modric";
    CML.textContent = "Busquets";
    DR.textContent = "D Alves";
    DCR.textContent = "S Ramos";
    DCL.textContent = "van Dijk";
    DL.textContent = "Marcelo";
    GK.textContent = "Neuer";

    STC2.src = "/football/img/players/" + STC.textContent + ".webp";
    FR2.src = "/football/img/players/" + FR.textContent + ".webp";
    AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
    FL2.src = "/football/img/players/" + FL.textContent + ".webp";
    CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
    CML2.src = "/football/img/players/" + CML.textContent + ".webp";
    DR2.src = "/football/img/players/" + DR.textContent + ".webp";
    DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
    DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
    DL2.src = "/football/img/players/" + DL.textContent + ".webp";
    GK2.src = "/football/img/players/" + GK.textContent + ".webp";

    smallpic.src = "/football/img/wallpapers/messi 2.jpg";

    MainFetchPopUp("/football/past/past.json");



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