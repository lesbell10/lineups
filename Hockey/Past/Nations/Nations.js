const yearSelector = document.getElementById("yearSelector");
const FL = document.getElementById("FL");
const FL2 = document.getElementById("FL2");
const FC = document.getElementById("FC");
const FC2 = document.getElementById("FC2");
const FR = document.getElementById("FR");
const FR2 = document.getElementById("FR2");
const DL = document.getElementById("DL");
const DL2 = document.getElementById("DL2");
const DR = document.getElementById("DR");
const DR2 = document.getElementById("DR2");
const G = document.getElementById("G");
const G2 = document.getElementById("G2");
const smallpic = document.getElementById("smallpic");
const sideModal = document.querySelector(".side-modal")

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;


    if (selectedYear === "0") {
        FL.textContent = "Crosby";
        FC.textContent = "McDavid";
        FR.textContent = "J Toews";
        DL.textContent = "Keith";
        DR.textContent = "Weber";
        G.textContent = "Price";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/canada.png";

        MainFetchPopUp("/hockey/past/nations/json/canada.json");

    }

    if (selectedYear === "1") {
        FL.textContent = "Voracek";
        FC.textContent = "Krejci";
        FR.textContent = "Pastrnak";
        DL.textContent = "Gudas";
        DR.textContent = "Kempny";
        G.textContent = "Mrazek";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/czech republic.webp";

        MainFetchPopUp("/hockey/past/nations/json/czech republic.json");

    }


    if (selectedYear === "2") {
        FL.textContent = "Laine";
        FC.textContent = "Barkov";
        FR.textContent = "Rantanen";
        DL.textContent = "Heiskanen";
        DR.textContent = "Lindell";
        G.textContent = "Saros";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/finland.webp";

        MainFetchPopUp("/hockey/past/nations/json/finland.json");

    }


    if (selectedYear === "3") {
        FL.textContent = "Rieder";
        FC.textContent = "Draisaitl"; 
        FR.textContent = "Goc";
        DL.textContent = "Ehrhoff";
        DR.textContent = "Seidenberg";
        G.textContent = "Grubauer";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/germany.webp";

        MainFetchPopUp("/hockey/past/nations/json/germany.json");

    }


    if (selectedYear === "4") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Malkin";
        FR.textContent = "Kucherov";
        DL.textContent = "Markov";
        DR.textContent = "Gonchar";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/russia.png";

        MainFetchPopUp("/hockey/past/nations/json/russia.json");

    }

    if (selectedYear === "5") {
        FL.textContent = "Hossa";
        FC.textContent = "Gaborik";
        FR.textContent = "Tatar";
        DL.textContent = "Chara";
        DR.textContent = "Sekera";
        G.textContent = "Halak";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/slovakia.webp";

        MainFetchPopUp("/hockey/past/nations/json/slovakia.json");

    }


    if (selectedYear === "6") {
        FL.textContent = "D Sedin";
        FC.textContent = "H Sedin";
        FR.textContent = "Backstrom";
        DL.textContent = "E Karlsson";
        DR.textContent = "Hedman";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/sweden.webp";

        MainFetchPopUp("/hockey/past/nations/json/sweden.json");

    }

    if (selectedYear === "7") {
        FL.textContent = "Fiala";
        FC.textContent = "Niederreiter";
        FR.textContent = "Meier";
        DL.textContent = "Josi";
        DR.textContent = "Streit";
        G.textContent = "Hiller";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/switzerland.png"

        MainFetchPopUp("/hockey/past/nations/json/switzerland.json");

    }


    if (selectedYear === "8") {
        FL.textContent = "Kessel";
        FC.textContent = "Matthews";
        FR.textContent = "Kane";
        DL.textContent = "Suter";
        DR.textContent = "Carlson";
        G.textContent = "Quick";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/usa.webp";

        MainFetchPopUp("/hockey/past/nations/json/united states.json");

    }



    function clearAndFadeInElements() {
        const elements = [
            FL, FL2, FC, FC2, FR, FR2, DL, DL2, DR, DR2, G, G2,
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
let currentIndex = 0;

// Function to update the dropdown based on the currentIndex
const updateDropdown = () => {

    if (selectedYear === 0) {
        FL.textContent = "Crosby";
        FC.textContent = "McDavid";
        FR.textContent = "Toews";
        DL.textContent = "Keith";
        DR.textContent = "Weber";
        G.textContent = "Price";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/canada.png";

        MainFetchPopUp("/hockey/past/nations/json/canada.json");

    }

    if (selectedYear === 1) {
        FL.textContent = "Voracek";
        FC.textContent = "Krejci";
        FR.textContent = "Pastrnak";
        DL.textContent = "Gudas";
        DR.textContent = "Kempny";
        G.textContent = "Mrazek";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/czech republic.webp";

        MainFetchPopUp("/hockey/past/nations/json/czech republic.json");

    }


    if (selectedYear === 2) {
        FL.textContent = "Laine";
        FC.textContent = "Barkov";
        FR.textContent = "Rantanen";
        DL.textContent = "Heiskanen";
        DR.textContent = "Lindell";
        G.textContent = "Saros";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/finland.webp";

        MainFetchPopUp("/hockey/past/nations/json/finland.json");

    }


    if (selectedYear === 3) {
        FL.textContent = "Rieder";
        FC.textContent = "Draisaitl"; 
        FR.textContent = "Goc";
        DL.textContent = "Ehrhoff";
        DR.textContent = "Seidenberg";
        G.textContent = "Grubauer";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/germany.webp";

        MainFetchPopUp("/hockey/past/nations/json/germany.json");

    }


    if (selectedYear === 4) {
        FL.textContent = "Ovechkin";
        FC.textContent = "Malkin";
        FR.textContent = "Kucherov";
        DL.textContent = "Markov";
        DR.textContent = "Gonchar";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/russia.png";

        MainFetchPopUp("/hockey/past/nations/json/russia.json");

    }

    if (selectedYear === 5) {
        FL.textContent = "Hossa";
        FC.textContent = "Gaborik";
        FR.textContent = "Tatar";
        DL.textContent = "Chara";
        DR.textContent = "Sekera";
        G.textContent = "Halak";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/slovakia.webp";

        MainFetchPopUp("/hockey/past/nations/json/slovakia.json");

    }


    if (selectedYear === 6) {
        FL.textContent = "D Sedin";
        FC.textContent = "H Sedin";
        FR.textContent = "Backstrom";
        DL.textContent = "E Karlsson";
        DR.textContent = "Hedman";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/sweden.webp";

        MainFetchPopUp("/hockey/past/nations/json/sweden.json");

    }

    if (selectedYear === 7) {
        FL.textContent = "Fiala";
        FC.textContent = "Niederreiter";
        FR.textContent = "Meier";
        DL.textContent = "Josi";
        DR.textContent = "Streit";
        G.textContent = "Hiller";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/switzerland.png"

        MainFetchPopUp("/hockey/past/nations/json/switzerland.json");

    }


    if (selectedYear === 8) {
        FL.textContent = "Kessel";
        FC.textContent = "Matthews";
        FR.textContent = "Kane";
        DL.textContent = "Suter";
        DR.textContent = "Carlson";
        G.textContent = "Quick";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/usa.webp";

        MainFetchPopUp("/hockey/past/nations/json/united states.json");

    }

    function clearAndFadeInElements() {
        const elements = [
            FL, FL2, FC, FC2, FR, FR2, DL, DL2, DR, DR2, G, G2,
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
})

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