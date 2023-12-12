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
        PG.textContent = "L Doncic";
        SG.textContent = "K Irving";
        SF.textContent = "T Hardaway Jr";
        PF.textContent = "G Williams";
        C.textContent = "D Lively II";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "1") {
        PG.textContent = "J Murray";
        SG.textContent = "K Caldwell-Pope";
        SF.textContent = "M Porter Jr";
        PF.textContent = "A Gordon";
        C.textContent = "N Jokic";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "2") {
        PG.textContent = "C Paul";
        SG.textContent = "S Curry";
        SF.textContent = "K Thompson";
        PF.textContent = "A Wiggins";
        C.textContent = "D Green";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "3") {
        PG.textContent = "F VanVleet";
        SG.textContent = "J Green";
        SF.textContent = "D Brooks";
        PF.textContent = "J Smith Jr";
        C.textContent = "A Sengun";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "4") {
        PG.textContent = "J Harden";
        SG.textContent = "R Westbrook";
        SF.textContent = "P George";
        PF.textContent = "K Leonard";
        C.textContent = "I Zubac";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "5") {
        PG.textContent = "D Russell";
        SG.textContent = "A Reaves";
        SF.textContent = "L James";
        PF.textContent = "R Hachimura";
        C.textContent = "A Davis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "6") {
        PG.textContent = "J Morant";
        SG.textContent = "M Smart";
        SF.textContent = "D Bane";
        PF.textContent = "J Jackson Jr";
        C.textContent = "S Adams";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "7") {
        PG.textContent = "A Edwards";
        SG.textContent = "J McDaniels";
        SF.textContent = "N Reid";
        PF.textContent = "KA Towns";
        C.textContent = "R Gobert";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "8") {
        PG.textContent = "CJ McCollum";
        SG.textContent = "H Jones";
        SF.textContent = "B Ingram";
        PF.textContent = "Z Williamson";
        C.textContent = "J Valanciunas";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "9") {
        PG.textContent = "S Gilgeous-Alexander";
        SG.textContent = "J Giddey";
        SF.textContent = "J Williams";
        PF.textContent = "L Dort";
        C.textContent = "C Holmgren";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "10") {
        PG.textContent = "D Booker";
        SG.textContent = "B Beal";
        SF.textContent = "E Gordon";
        PF.textContent = "K Durant";
        C.textContent = "J Nurkic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "11") {
        PG.textContent = "M Brogdon";
        SG.textContent = "A Simons";
        SF.textContent = "S Sharpe";
        PF.textContent = "D Ayton";
        C.textContent = "R Williams III";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "12") {
        PG.textContent = "D Fox";
        SG.textContent = "M Monk";
        SF.textContent = "H Barnes";
        PF.textContent = "K Murray";
        C.textContent = "D Sabonis";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "13") {
        PG.textContent = "V Wembanyama";
        SG.textContent = "Tr Jones";
        SF.textContent = "K Johnson";
        PF.textContent = "D Vassell";
        C.textContent = "Z Collins";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "14") {
        PG.textContent = "C Sexton";
        SG.textContent = "J Clarkson";
        SF.textContent = "L Markkanen";
        PF.textContent = "J Collins";
        C.textContent = "W Kessler";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
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

    

    function clearAndFadeInElements() {
        const elements = [
            SG,SG2,PG,PG2,SF,SF2,PF,PF2,C,C2
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