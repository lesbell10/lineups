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
const sideModal = document.querySelector(".side-modal")

let selectedYear = 0

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear === "2") {
        SG.textContent = "Harden";
        PG.textContent = "Curry";
        SF.textContent = "James";
        PF.textContent = "Durant";
        C.textContent = "Davis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/usa.gif";

        MainFetchPopUp("/basket/past/nations/json/usa.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The USA Basketball National Team, formed in 1936, has a storied history. Dominating in Olympics and World Championships, they blend NBA/WNBA talent with college stars. Their global influence is vast, exemplifying excellence and popularizing basketball worldwide."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    } if (selectedYear === "0") {
        SG.textContent = "L Doncic";
        PG.textContent = "T Parker";
        SF.textContent = "D Nowitzki";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "N Jokic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/europe.png";

        MainFetchPopUp("/basket/past/nations/json/europe.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "European basketball, introduced in the 1920s, quickly gained popularity. It led to the formation of clubs, leagues, and the prestigious EuroLeague. The sport's growth in Europe has been marked by strong national teams and a significant influence on global basketball."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }
    
    if (selectedYear === "1") {
        SG.textContent = "M Ginobili";
        PG.textContent = "Y Ming";
        SF.textContent = "Olajuwon";
        PF.textContent = "J Embiid";
        C.textContent = "A Horford";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/rest of world.png";

        MainFetchPopUp("/basket/past/nations/json/rest of world.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Basketball, invented in 1891 in the USA, rapidly spread worldwide. It became an Olympic sport in 1936. Globally, leagues, clubs, and international competitions flourished, showcasing diverse talents and styles, making basketball a universally beloved and influential sport."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }
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

    if (selectedYear === 2) {
        SG.textContent = "Harden";
        PG.textContent = "Curry";
        SF.textContent = "James";
        PF.textContent = "Durant";
        C.textContent = "Davis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/usa.gif";

        MainFetchPopUp("/basket/past/nations/json/usa.json");

    }

    if (selectedYear === 0) {
        SG.textContent = "L Doncic";
        PG.textContent = "T Parker";
        SF.textContent = "D Nowitzki";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "N Jokic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/europe.png";

        MainFetchPopUp("/basket/past/nations/json/europe.json");

    }

    if (selectedYear === 1) {
        SG.textContent = "M Ginobili";
        PG.textContent = "Y Ming";
        SF.textContent = "H Olajuwon";
        PF.textContent = "J Embiid";
        C.textContent = "A Horford";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/rest of world.png";

        MainFetchPopUp("/basket/past/nations/json/rest of world.json");
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