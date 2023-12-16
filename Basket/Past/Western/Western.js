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
        SG.textContent = "J Kidd";
        SF.textContent = "M Ellis";
        PF.textContent = "D Nowitzki";
        C.textContent = "T Chandler";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/dallas.gif";

        MainFetchPopUp("/basket/present/eastern/json/dallas.json");
    }

    if (selectedYear === "1") {

        PG.textContent = "T Lawson";
        SG.textContent = "J Murray";
        SF.textContent = "C Anthony";
        PF.textContent = "K Faried";
        C.textContent = "N Jokic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/denver.gif";

        MainFetchPopUp("/basket/present/eastern/json/denver.json");
    }
    
    if (selectedYear === "2") {

        PG.textContent = "S Curry";
        SG.textContent = "K Thompson";
        SF.textContent = "A Iguodala";
        PF.textContent = "K Durant";
        C.textContent = "D Green";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/golden state.gif";

        MainFetchPopUp("/basket/present/eastern/json/golden state.json");
    }
    
    if (selectedYear === "3") {

        PG.textContent = "C Paul";
        SG.textContent = "J Harden";
        SF.textContent = "R Westbrook";
        PF.textContent = "C Capela";
        C.textContent = "D Howard";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/houston.gif";

        MainFetchPopUp("/basket/present/eastern/json/houston.json");
    }
    
    if (selectedYear === "4") {

        PG.textContent = "C Paul";
        SG.textContent = "P George";
        SF.textContent = "K Leonard";
        PF.textContent = "B Griffin";
        C.textContent = "D Jordan";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la clippers.gif";

        MainFetchPopUp("/basket/present/eastern/json/la clippers.json");
    }
    
    if (selectedYear === "5") {

        PG.textContent = "K Bryant";
        SG.textContent = "L James";
        SF.textContent = "R Artest III";
        PF.textContent = "D Howard";
        C.textContent = "P Gasol";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la lakers.gif";

        MainFetchPopUp("/basket/present/eastern/json/la lakers.json");
    }
    
    if (selectedYear === "6") {

        PG.textContent = "M Conley";
        SG.textContent = "T Allen";
        SF.textContent = "R Gay";
        PF.textContent = "Z Randolph";
        C.textContent = "M Gasol";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/memphis.gif";

        MainFetchPopUp("/basket/present/eastern/json/memphis.json");
    }
    
    if (selectedYear === "7") {

        PG.textContent = "R Rubio";
        SG.textContent = "A Wiggins";
        SF.textContent = "J Butler";
        PF.textContent = "K Love";
        C.textContent = "KA Towns";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/minnesota.gif";

        MainFetchPopUp("/basket/present/eastern/json/minnesota.json");
    }
    
    if (selectedYear === "8") {

        PG.textContent = "C Paul";
        SG.textContent = "J Holiday";
        SF.textContent = "Z Williamson";
        PF.textContent = "A Davis";
        C.textContent = "D Cousins";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/new orleans.gif";

        MainFetchPopUp("/basket/present/eastern/json/new orleans.json");
    }
    
    if (selectedYear === "9") {

        PG.textContent = "R Westbrook";
        SG.textContent = "J Harden";
        SF.textContent = "P George";
        PF.textContent = "K Durant";
        C.textContent = "S Ibaka";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/oklahoma city.gif";

        MainFetchPopUp("/basket/present/eastern/json/oklahoma city.json");
    }
    
    if (selectedYear === "10") {

        PG.textContent = "S Nash";
        SG.textContent = "C Paul";
        SF.textContent = "G Dragic";
        PF.textContent = "A Stoudemire";
        C.textContent = "D Ayton";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/phoenix.gif";

        MainFetchPopUp("/basket/present/eastern/json/phoenix.json");
    }
    
    if (selectedYear === "11") {

        PG.textContent = "D Lillard";
        SG.textContent = "CJ McCollum";
        SF.textContent = "N Batum";
        PF.textContent = "L Aldridge";
        C.textContent = "J Nurkic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/portland.gif";

        MainFetchPopUp("/basket/present/eastern/json/portland.json");
    }
    
    if (selectedYear === "12") {

        PG.textContent = "I Thomas";
        SG.textContent = "T Evans";
        SF.textContent = "B Hield"
        PF.textContent = "R Gay";
        C.textContent = "D Cousins";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/sacramento.gif";

        MainFetchPopUp("/basket/present/eastern/json/sacramento.json");
    }
    
    if (selectedYear === "13") {

        PG.textContent = "T Parker";
        SG.textContent = "M Ginobili";
        SF.textContent = "K Leonard";
        PF.textContent = "T Duncan";
        C.textContent = "L Aldridge";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/san antonio.gif";

        MainFetchPopUp("/basket/present/eastern/json/san antonio.json");
    }
    
    if (selectedYear === "14") {

        PG.textContent = "D Williams";
        SG.textContent = "D Mitchell";
        SF.textContent = "G Hayward";
        PF.textContent = "A Jefferson";
        C.textContent = "R Gobert";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/utah.gif";

        MainFetchPopUp("/basket/present/eastern/json/utah.json");
    }
}

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

    if (selectedYear === 0) {

        PG.textContent = "L Doncic";
        SG.textContent = "J Kidd";
        SF.textContent = "M Ellis";
        PF.textContent = "D Nowitzki";
        C.textContent = "T Chandler";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/dallas.gif";

        MainFetchPopUp("/basket/present/eastern/json/dallas.json");
    }

    if (selectedYear === 1) {

        PG.textContent = "T Lawson";
        SG.textContent = "J Murray";
        SF.textContent = "C Anthony";
        PF.textContent = "K Faried";
        C.textContent = "N Jokic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/denver.gif";

        MainFetchPopUp("/basket/present/eastern/json/denver.json");
    }

    if (selectedYear === 2) {

        PG.textContent = "S Curry";
        SG.textContent = "K Thompson";
        SF.textContent = "A Iguodala";
        PF.textContent = "K Durant";
        C.textContent = "D Green";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/golden state.gif";

        MainFetchPopUp("/basket/present/eastern/json/golden state.json");
    }

    if (selectedYear === 3) {

        PG.textContent = "C Paul";
        SG.textContent = "J Harden";
        SF.textContent = "R Westbrook";
        PF.textContent = "C Capela";
        C.textContent = "D Howard";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/houston.gif";

        MainFetchPopUp("/basket/present/eastern/json/houston.json");
    }

    if (selectedYear === 4) {

        PG.textContent = "C Paul";
        SG.textContent = "P George";
        SF.textContent = "K Leonard";
        PF.textContent = "B Griffin";
        C.textContent = "D Jordan";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la clippers.gif";

        MainFetchPopUp("/basket/present/eastern/json/la clippers.json");
    }

    if (selectedYear === 5) {

        PG.textContent = "K Bryant";
        SG.textContent = "L James";
        SF.textContent = "R Artest III";
        PF.textContent = "D Howard";
        C.textContent = "P Gasol";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la lakers.gif";

        MainFetchPopUp("/basket/present/eastern/json/la lakers.json");
    }

    if (selectedYear === 6) {

        PG.textContent = "M Conley";
        SG.textContent = "T Allen";
        SF.textContent = "R Gay";
        PF.textContent = "Z Randolph";
        C.textContent = "M Gasol";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/memphis.gif";

        MainFetchPopUp("/basket/present/eastern/json/memphis.json");
    }

    if (selectedYear === 7) {

        PG.textContent = "R Rubio";
        SG.textContent = "A Wiggins";
        SF.textContent = "J Butler";
        PF.textContent = "K Love";
        C.textContent = "KA Towns";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/minnesota.gif";

        MainFetchPopUp("/basket/present/eastern/json/minnesota.json");
    }

    if (selectedYear === 8) {

        PG.textContent = "C Paul";
        SG.textContent = "J Holiday";
        SF.textContent = "Z Williamson";
        PF.textContent = "A Davis";
        C.textContent = "D Cousins";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/new orleans.gif";

        MainFetchPopUp("/basket/present/eastern/json/new orleans.json");
    }

    if (selectedYear === 9) {

        PG.textContent = "R Westbrook";
        SG.textContent = "J Harden";
        SF.textContent = "P George";
        PF.textContent = "K Durant";
        C.textContent = "S Ibaka";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/oklahoma city.gif";

        MainFetchPopUp("/basket/present/eastern/json/oklahoma city.json");
    }

    if (selectedYear === 10) {

        PG.textContent = "S Nash";
        SG.textContent = "C Paul";
        SF.textContent = "G Dragic";
        PF.textContent = "A Stoudemire";
        C.textContent = "D Ayton";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/phoenix.gif";

        MainFetchPopUp("/basket/present/eastern/json/phoenix.json");
    }

    if (selectedYear === 11) {

        PG.textContent = "D Lillard";
        SG.textContent = "CJ McCollum";
        SF.textContent = "N Batum";
        PF.textContent = "L Aldridge";
        C.textContent = "J Nurkic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/portland.gif";

        MainFetchPopUp("/basket/present/eastern/json/portland.json");
    }

    if (selectedYear === 12) {

        PG.textContent = "I Thomas";
        SG.textContent = "T Evans";
        SF.textContent = "B Hield"
        PF.textContent = "R Gay";
        C.textContent = "D Cousins";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/sacramento.gif";

        MainFetchPopUp("/basket/present/eastern/json/sacramento.json");
    }

    if (selectedYear === 13) {

        PG.textContent = "T Parker";
        SG.textContent = "M Ginobili";
        SF.textContent = "K Leonard";
        PF.textContent = "T Duncan";
        C.textContent = "L Aldridge";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/san antonio.gif";

        MainFetchPopUp("/basket/present/eastern/json/san antonio.json");
    }

    if (selectedYear === 14) {

        PG.textContent = "D Williams";
        SG.textContent = "D Mitchell";
        SF.textContent = "G Hayward";
        PF.textContent = "A Jefferson";
        C.textContent = "R Gobert";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/utah.gif";

        MainFetchPopUp("/basket/present/eastern/json/utah.json");
    }
  


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