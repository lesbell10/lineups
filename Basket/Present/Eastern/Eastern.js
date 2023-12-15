const yearSelector = document.getElementById("yearSelector");
const SG = document.getElementById("SG");
const SG2 = document.getElementById("SG2");
const PG = document.getElementById("PG");
const PG2 = document.getElementById("PG2");
const SF = document.getElementById("SF");
const SF2 = document.getElementById("SF2");
const PF = document.getElementById("PF");
const PF2 = document.getElementById("PF2");
const C = document.getElementById("C");
const C2 = document.getElementById("C2");
const smallpic = document.getElementById("smallpic");

let selectedYear = 0

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear === "0") {
        PG.textContent = "T Young";
        SG.textContent = "D Murray";
        SF.textContent = "D Hunter";
        PF.textContent = "O Okongwu";
        C.textContent = "C Capela";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/atlanta.gif";

        MainFetchPopUp("/basket/present/eastern/json/atlanta.json");
    }

    if (selectedYear === "1") {
        PG.textContent = "J Holiday";
        SG.textContent = "D White";
        SF.textContent = "J Brown";
        PF.textContent = "J Tatum";
        C.textContent = "K Porzingis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/boston.gif";

        MainFetchPopUp("/basket/present/eastern/json/boston.json");
    }

    if (selectedYear === "2") {
        PG.textContent = "S Dinwiddie";
        SG.textContent = "Mik Bridges";
        SF.textContent = "C Thomas";
        PF.textContent = "C Johnson";
        C.textContent = "N Claxton";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/brooklyn.gif";

        MainFetchPopUp("/basket/present/eastern/json/brooklyn.json");
    }

    if (selectedYear === "3") {
        PG.textContent = "La Ball";
        SG.textContent = "T Rozier III";
        SF.textContent = "G Hayward";
        PF.textContent = "PJ Washington";
        C.textContent = "M Williams";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Charlotte.gif";

        MainFetchPopUp("/basket/present/eastern/json/Charlotte.json");
    }

    if (selectedYear === "4") {
        PG.textContent = "Lo Ball";
        SG.textContent = "Z LaVine";
        SF.textContent = "A Caruso";
        PF.textContent = "D DeRozan";
        C.textContent = "N Vucevic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Chicago.gif";

        MainFetchPopUp("/basket/present/eastern/json/Chicago.json");
    }

    if (selectedYear === "5") {
        PG.textContent = "D Garland";
        SG.textContent = "D Mitchell";
        SF.textContent = "C LeVert";
        PF.textContent = "E Mobley";
        C.textContent = "J Allen";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Cleveland.gif";

        MainFetchPopUp("/basket/present/eastern/json/Cleveland.json");
    }

    if (selectedYear === "6") {
        PG.textContent = "C Cunningham";
        SG.textContent = "J Ivey";
        SF.textContent = "A Thompson";
        PF.textContent = "B Bogdanovic";
        C.textContent = "J Duren";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Detroit.gif";

        MainFetchPopUp("/basket/present/eastern/json/Detroit.json");
    }

    if (selectedYear === "7") {
        PG.textContent = "T Haliburton";
        SG.textContent = "B Brown";
        SF.textContent = "B Hield";
        PF.textContent = "B Mathurin";
        C.textContent = "M Turner";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Indiana.gif";

        MainFetchPopUp("/basket/present/eastern/json/Indiana.json");
    }

    if (selectedYear === "8") {
        PG.textContent = "T Herro";
        SG.textContent = "C Martin";
        SF.textContent = "J Butler";
        PF.textContent = "D Robinson";
        C.textContent = "B Adebayo";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Miami.gif";

        MainFetchPopUp("/basket/present/eastern/json/Miami.json");
    }

    if (selectedYear === "9") {
        PG.textContent = "D Lillard";
        SG.textContent = "K Middleton";
        SF.textContent = "G Antetokounmpo";
        PF.textContent = "B Portis";
        C.textContent = "B Lopez";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Milwaukee.gif";

        MainFetchPopUp("/basket/present/eastern/json/Milwaukee.json");
    }

    if (selectedYear === "10") {
        PG.textContent = "J Brunson";
        SG.textContent = "I Quickley";
        SF.textContent = "RJ Barrett";
        PF.textContent = "J Randle";
        C.textContent = "M Robinson";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/New York.gif";

        MainFetchPopUp("/basket/present/eastern/json/New York.json");
    }

    if (selectedYear === "11") {
        PG.textContent = "M Fultz";
        SG.textContent = "Co Anthony";
        SF.textContent = "F Wagner";
        PF.textContent = "P Banchero";
        C.textContent = "W Carter Jr";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Orlando.gif";

        MainFetchPopUp("/basket/present/eastern/json/Orlando.json");
    }

    if (selectedYear === "12") {
        PG.textContent = "T Maxey";
        SG.textContent = "K Oubre Jr";
        SF.textContent = "T Harris";
        PF.textContent = "KJ Martin Jr";
        C.textContent = "J Embiid";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Philadelphia.gif";

        MainFetchPopUp("/basket/present/eastern/json/Phildadelphia.json");
    }

    if (selectedYear === "13") {
        PG.textContent = "D Schroder";
        SG.textContent = "OG Anunoby";
        SF.textContent = "S Barnes";
        PF.textContent = "P Siakam";
        C.textContent = "J Poeltl";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Toronto.gif";

        MainFetchPopUp("/basket/present/eastern/json/Toronto.json");
    }

    if (selectedYear === "14") {
        PG.textContent = "Ty Jones";
        SG.textContent = "J Poole";
        SF.textContent = "K Kuzma";
        PF.textContent = "D Avdija";
        C.textContent = "D Gallinari";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Washington.gif";

        MainFetchPopUp("/basket/present/eastern/json/Washington.json");
    }


    function clearAndFadeInElements() {
        const elements = [
            SG, SG2, PG, PG2, SF, SF2, PF, PF2, C, C2
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

// Listen for changes in the year selection
yearSelector.addEventListener("change", updatePlayerInfo);

// Initial update based on the default year (2020)
updatePlayerInfo();


const backButton = document.getElementById('backButton');
const forwardButton = document.getElementById('forwardButton');

// Initialize the current index to 0

// let currentIndex = 0;

// Function to update the dropdown based on the currentIndex

const updateDropdown = () => {

    if (selectedYear === "0") {
        PG.textContent = "T Young";
        SG.textContent = "D Murray";
        SF.textContent = "D Hunter";
        PF.textContent = "O Okongwu";
        C.textContent = "C Capela";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/atlanta.gif";

        MainFetchPopUp("/basket/present/eastern/json/atlanta.json");
    }

    if (selectedYear === 1) {
        PG.textContent = "J Holiday";
        SG.textContent = "D White";
        SF.textContent = "J Brown";
        PF.textContent = "J Tatum";
        C.textContent = "K Porzingis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/boston.gif";

        MainFetchPopUp("/basket/present/eastern/json/boston.json");
    }

    if (selectedYear === 2) {
        PG.textContent = "S Dinwiddie";
        SG.textContent = "M Bridges";
        SF.textContent = "C Thomas";
        PF.textContent = "C Johnson";
        C.textContent = "N Claxton";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/brooklyn.gif";

        MainFetchPopUp("/basket/present/eastern/json/brooklyn.json");
    }

    if (selectedYear === 3) {
        PG.textContent = "La Ball";
        SG.textContent = "T Rozier III";
        SF.textContent = "G Hayward";
        PF.textContent = "PJ Washington";
        C.textContent = "M Williams";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Charlotte.gif";

        MainFetchPopUp("/basket/present/eastern/json/Charlotte.json");
    }

    if (selectedYear === 4) {
        PG.textContent = "Lo Ball";
        SG.textContent = "Z LaVine";
        SF.textContent = "A Caruso";
        PF.textContent = "D DeRozan";
        C.textContent = "N Vucevic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Chicago.gif";

        MainFetchPopUp("/basket/present/eastern/json/Chicago.json");
    }

    if (selectedYear === 5) {
        PG.textContent = "D Garland";
        SG.textContent = "D Mitchell";
        SF.textContent = "C LeVert";
        PF.textContent = "E Mobley";
        C.textContent = "J Allen";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Cleveland.gif";

        MainFetchPopUp("/basket/present/eastern/json/Cleveland.json");
    }

    if (selectedYear === 6) {
        PG.textContent = "C Cunningham";
        SG.textContent = "J Ivey";
        SF.textContent = "A Thompson";
        PF.textContent = "B Bogdanovic";
        C.textContent = "J Duren";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Detroit.gif";

        MainFetchPopUp("/basket/present/eastern/json/Detroit.json");
    }

    if (selectedYear === 7) {
        PG.textContent = "T Haliburton";
        SG.textContent = "B Brown";
        SF.textContent = "B Hield";
        PF.textContent = "B Mathurin";
        C.textContent = "M Turner";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Indiana.gif";

        MainFetchPopUp("/basket/present/eastern/json/Indiana.json");
    }

    if (selectedYear === 8) {
        PG.textContent = "T Herro";
        SG.textContent = "C Martin";
        SF.textContent = "J Butler";
        PF.textContent = "D Robinson";
        C.textContent = "B Adebayo";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Miami.gif";

        MainFetchPopUp("/basket/present/eastern/json/Miami.json");
    }

    if (selectedYear === 9) {
        PG.textContent = "D Lillard";
        SG.textContent = "K Middleton";
        SF.textContent = "G Antetokounmpo";
        PF.textContent = "B Portis";
        C.textContent = "B Lopez";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Milwaukee.gif";

        MainFetchPopUp("/basket/present/eastern/json/Milwaukee.json");
    }

    if (selectedYear === 10) {
        PG.textContent = "J Brunson";
        SG.textContent = "I Quickley";
        SF.textContent = "RJ Barrett";
        PF.textContent = "J Randle";
        C.textContent = "M Robinson";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/New York.gif";

        MainFetchPopUp("/basket/present/eastern/json/New York.json");
    }

    if (selectedYear === 12) {
        PG.textContent = "M Fultz";
        SG.textContent = "Co Anthony";
        SF.textContent = "F Wagner";
        PF.textContent = "P Banchero";
        C.textContent = "W Carter Jr";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Orlando.gif";

        MainFetchPopUp("/basket/present/eastern/json/Orlando.json");
    }

    if (selectedYear === 12) {
        PG.textContent = "T Maxey";
        SG.textContent = "K Oubre Jr";
        SF.textContent = "T Harris";
        PF.textContent = "KJ Martin Jr";
        C.textContent = "J Embiid";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Philadelphia.gif";

        MainFetchPopUp("/basket/present/eastern/json/Phildadelphia.json");
    }

    if (selectedYear === 13) {
        PG.textContent = "D Schroder";
        SG.textContent = "OG Anunoby";
        SF.textContent = "S Barnes";
        PF.textContent = "P Siakam";
        C.textContent = "J Poeltl";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Toronto.gif";

        MainFetchPopUp("/basket/present/eastern/json/Toronto.json");
    }

    if (selectedYear === 14) {
        PG.textContent = "Ty Jones";
        SG.textContent = "J Poole";
        SF.textContent = "K Kuzma";
        PF.textContent = "D Avdija";
        C.textContent = "D Gallinari";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Washington.gif";

        MainFetchPopUp("/basket/present/eastern/json/Washington.json");
    }


    function clearAndFadeInElements() {
        const elements = [
            SG, SG2, PG, PG2, SF, SF2, PF, PF2, C, C2
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

}   // Event listener for the back button
backButton.addEventListener('click', () => {
    if (selectedYear > 0) {
        selectedYear--;
        yearSelector.value = selectedYear;
        updateDropdown();
    }
});

// Event listener for the forward button
forwardButton.addEventListener('click', () => {
    if (selectedYear < yearSelector.options.length - 1) {
        selectedYear++;
        yearSelector.value = selectedYear;
        updateDropdown();
    }
});

const nav = document.querySelector("nav");
const backBtn = document.querySelector("#backButton")
const forBtn = document.querySelector("#forwardButton")
const search = document.querySelector(".search-container");

PG2.addEventListener('click', function () {
    nav.style.display = "none";
    backBtn.style.display = "none";
    forBtn.style.display = "none";
    search.style.display = "none";
})

SG2.addEventListener('click', function () {
    nav.style.display = "flex";
    backBtn.style.display = "block";
    forBtn.style.display = "block";
    search.style.display = "block";
})