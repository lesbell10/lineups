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

window.onload = function () { 
    smallpic.style.scale = '1.5'
}


let selectedYear = 0

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear === "19") {

    PG.textContent = "S Curry";
    SG.textContent = "L James";
    SF.textContent = "G Antetokounmpo";
    PF.textContent = "N Jokic";
    C.textContent = "J Embiid";
    
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/wallpapers/embiid.jpg";

        MainFetchPopUp("./json/EveryYear_2024.json");
        
    }

    if (selectedYear === "18") {
        
    PG.textContent = "S Curry";
    SG.textContent = "K Durant";
    SF.textContent = "L James";
    PF.textContent = "G Antetokounmpo";
    C.textContent = "N Jokic";
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";
    
        smallpic.src = "/basket/img/wallpapers/Jokic.jpg";
        
        MainFetchPopUp("./json/EveryYear_2023.json");
    }
    
      if (selectedYear === "17") {
          
    PG.textContent = "S Curry";
    SG.textContent = "K Leonard";
    SF.textContent = "L James";
    PF.textContent = "G Antetokounmpo";
    C.textContent = "K Durant";
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";
          
          smallpic.src = "/basket/img/wallpapers/curry.jpg";
          
          MainFetchPopUp("./json/EveryYear_2022.json");
}
    
    if (selectedYear === "16") {

    PG.textContent = "S Curry";
    SG.textContent = "J Harden";
    SF.textContent = "K Leonard";
    PF.textContent = "L James";
    C.textContent = "G Antetokounmpo";
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";
        
        smallpic.src = "/basket/img/wallpapers/antetokounmpo.jpg";
        
        MainFetchPopUp("./json/EveryYear_2021.json");
    }
    
    if (selectedYear === "15") {

        PG.textContent = "J Harden";
        SG.textContent = "K Leonard";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "G Antetokounmpo";
        
        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/harden.png";
        
        MainFetchPopUp("./json/EveryYear_2020.json");
    }
    
    if (selectedYear === "14") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "K Leonard";
        C.textContent = "K Durant";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/durant.jpg"

        MainFetchPopUp("./json/EveryYear_2019.json");
    }

    if (selectedYear === "13") { 

    PG.textContent = "R WestBrook";
    SG.textContent = "J Harden";
    SF.textContent = "K Leonard";
    PF.textContent = "L James";
    C.textContent = "K Durant";
    
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";        
        
        smallpic.src = "/basket/img/wallpapers/james.jpg";
        
        MainFetchPopUp("./json/EveryYear_2018.json");
        
    }

    if (selectedYear === "12") {

    PG.textContent = "S Curry";
    SG.textContent = "R Westbrook";
    SF.textContent = "K Leonard";
    PF.textContent = "L James";
    C.textContent = "K Durant"
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";
        
        smallpic.src = "/basket/img/wallpapers/leonard.jpg";
        
        MainFetchPopUp("./json/EveryYear_2017.json");
    }
    
    if (selectedYear === "11") {

    PG.textContent = "S Curry";
    SG.textContent = "J Harden";
    SF.textContent = "L James";
    PF.textContent = "K Durant";
    C.textContent = "A Davis";
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";        
        
        smallpic.src = "/basket/img/wallpapers/davis.jpg";
        
        MainFetchPopUp("./json/EveryYear_2016.json");
    }
    
    if (selectedYear === "10") {

    PG.textContent = "C Paul";
    SG.textContent = "K Bryant";
    SF.textContent = "L James";
    PF.textContent = "K Durant";
    C.textContent = "T Duncan";
      
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";        
        
    smallpic.src = "/basket/img/wallpapers/duncan.jpg";
        
        MainFetchPopUp("./json/EveryYear_2015.json");
    }
    
    if (selectedYear === "9") {
    
    PG.textContent = "C Paul";
    SG.textContent = "K Bryant";
    SF.textContent = "L James";
    PF.textContent = "K Durant";
    C.textContent = "C Anthony";
    
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";
        
        smallpic.src = "/basket/img/wallpapers/paul.jpg";

        MainFetchPopUp("./json/EveryYear_2014.json");
    }
    
    if (selectedYear === "8") {

    PG.textContent = "C Paul";
    SG.textContent = "K Bryant";
    SF.textContent = "L James";
    PF.textContent = "K Durant";
    C.textContent = "D Howard";
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";        
        
        smallpic.src = "https://i.pinimg.com/originals/e2/21/a5/e221a5fe2cf6d5344162a2bfc5ba1621.jpg";

        MainFetchPopUp("./json/EveryYear_2013.json");
    }

    if (selectedYear === "7") {

    PG.textContent = "C Paul";
    SG.textContent = "D Wade";
    SF.textContent = "K Bryant";
    PF.textContent = "L James";
    C.textContent = "D Howard";
    
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";        
    
        smallpic.src = "/basket/img/wallpapers/howard.jpg";
        
        MainFetchPopUp("./json/EveryYear_2012.json");
        
    }
    
    if (selectedYear === "6") {

    PG.textContent = "C Paul";
    SG.textContent = "D Wade";
    SF.textContent = "K Bryant";
    PF.textContent = "L James";
    C.textContent = "C Anthony";
    
     PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";       
        
        smallpic.src = "/basket/img/wallpapers/anthony.jpg"; 
        
        MainFetchPopUp("./json/EveryYear_2011.json");
        
    }
    
    if (selectedYear === "5") {

    PG.textContent = "C Paul";
    SG.textContent = "S Wade";
    SF.textContent = "K Bryant";
    PF.textContent = "L James";
    C.textContent = "K Garnett";
    
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";   
        
        smallpic.src = "/basket/img/wallpapers/garnett.jpg";
        
        MainFetchPopUp("./json/EveryYear_2010.json");
    
    }
    
    if (selectedYear === "4") {

        PG.textContent = "C Paul";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "D Howard";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/wade.jpg";

        MainFetchPopUp("./json/EveryYear_2009.json");
    }
    
    if (selectedYear === "3") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Garnett";
        C.textContent = "T Duncan";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/james 2.jpg";

        MainFetchPopUp("./json/EveryYear_2008.json");
    }
    
    if (selectedYear === "2") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "D Nowitzki";
        C.textContent = "T Duncan";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/nash.jpg";

        MainFetchPopUp("./json/EveryYear_2007.json");
    }
    
    if (selectedYear === "1") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "T Duncan";
        C.textContent = "D Nowitzki";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/nowitzki.jpg";

        MainFetchPopUp("./json/EveryYear_2006.json");
    }
    
    if (selectedYear === "0") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "S O'Neal";
        C.textContent = "T Duncan";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/O'Neal.webp";

        MainFetchPopUp("./json/EveryYear_2005.json");
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

        if (selectedYear === 19) {

    PG.textContent = "S Curry";
    SG.textContent = "L James";
    SF.textContent = "G Antetokounmpo";
    PF.textContent = "N Jokic";
    C.textContent = "J Embiid";
    
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/wallpapers/embiid.jpg";

        MainFetchPopUp("./json/EveryYear_2024.json");
        
    }

    if (selectedYear === 18) {
        
    PG.textContent = "S Curry";
    SG.textContent = "K Durant";
    SF.textContent = "L James";
    PF.textContent = "G Antetokounmpo";
    C.textContent = "N Jokic";
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";
    
        smallpic.src = "/basket/img/wallpapers/Jokic.jpg";
        
        MainFetchPopUp("./json/EveryYear_2023.json");
    }
    
      if (selectedYear === 17) {
          
    PG.textContent = "S Curry";
    SG.textContent = "K Leonard";
    SF.textContent = "L James";
    PF.textContent = "G Antetokounmpo";
    C.textContent = "K Durant";
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";
          
          smallpic.src = "/basket/img/wallpapers/curry.jpg";
          
          MainFetchPopUp("./json/EveryYear_2022.json");
}
    
    if (selectedYear === 16) {

    PG.textContent = "S Curry";
    SG.textContent = "J Harden";
    SF.textContent = "K Leonard";
    PF.textContent = "L James";
    C.textContent = "G Antetokounmpo";
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";
        
        smallpic.src = "/basket/img/wallpapers/antetokounmpo.jpg";
        
        MainFetchPopUp("./json/EveryYear_2021.json");
    }
    
    if (selectedYear === 15) {

    PG.textContent = "J Harden";
    SG.textContent = "K Leonard";
    SF.textContent = "L James";
    PF.textContent = "K Durant";
    C.textContent = "G Antetokounmpo";

        smallpic.src = "/basket/img/wallpapers/harden.png";
        
        MainFetchPopUp("./json/EveryYear_2020.json");
    }
    
    if (selectedYear === 14) {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "K Leonard";
        C.textContent = "K Durant";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/durant.jpg"

        MainFetchPopUp("./json/EveryYear_2019.json");
    }

    if (selectedYear === 13) { 

    PG.textContent = "R WestBrook";
    SG.textContent = "J Harden";
    SF.textContent = "K Leonard";
    PF.textContent = "L James";
    C.textContent = "K Durant";
    
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";        
        
        smallpic.src = "/basket/img/wallpapers/james.jpg";
        
        MainFetchPopUp("./json/EveryYear_2018.json");
        
    }

    if (selectedYear === 12) {

    PG.textContent = "S Curry";
    SG.textContent = "R Westbrook";
    SF.textContent = "K Leonard";
    PF.textContent = "L James";
    C.textContent = "K Durant"
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";
        
        smallpic.src = "/basket/img/wallpapers/leonard.jpg";
        
        MainFetchPopUp("./json/EveryYear_2017.json");
    }
    
    if (selectedYear === 11) {

    PG.textContent = "S Curry";
    SG.textContent = "J Harden";
    SF.textContent = "L James";
    PF.textContent = "K Durant";
    C.textContent = "A Davis";
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";        
        
        smallpic.src = "/basket/img/wallpapers/davis.jpg";
        
        MainFetchPopUp("./json/EveryYear_2016.json");
    }
    
    if (selectedYear === 10) {

    PG.textContent = "C Paul";
    SG.textContent = "K Bryant";
    SF.textContent = "L James";
    PF.textContent = "K Durant";
    C.textContent = "T Duncan";
      
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";        
        
    smallpic.src = "/basket/img/wallpapers/duncan.jpg";
        
        MainFetchPopUp("./json/EveryYear_2015.json");
    }
    
    if (selectedYear === 9) {
    
    PG.textContent = "C Paul";
    SG.textContent = "K Bryant";
    SF.textContent = "L James";
    PF.textContent = "K Durant";
    C.textContent = "C Anthony";
    
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";
        
        smallpic.src = "/basket/img/wallpapers/paul.jpg";
        
        MainFetchPopUp("./json/EveryYear_2014.json");
    }
    
    if (selectedYear === 8) {

    PG.textContent = "C Paul";
    SG.textContent = "K Bryant";
    SF.textContent = "L James";
    PF.textContent = "K Durant";
    C.textContent = "D Howard";
        
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";        
        
        smallpic.src = "/basket/img/wallpapers/bryant.jpg";

        MainFetchPopUp("./json/EveryYear_2013.json");
    }

    if (selectedYear === 7) {

    PG.textContent = "C Paul";
    SG.textContent = "D Wade";
    SF.textContent = "K Bryant";
    PF.textContent = "L James";
    C.textContent = "D Howard";
    
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";        
    
        smallpic.src = "/basket/img/wallpapers/howard.jpg";
        
        MainFetchPopUp("./json/EveryYear_2012.json");
        
    }
    
    if (selectedYear === 6) {

    PG.textContent = "C Paul";
    SG.textContent = "D Wade";
    SF.textContent = "K Bryant";
    PF.textContent = "L James";
    C.textContent = "C Anthony";
    
     PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";       
        
        smallpic.src = "/basket/img/wallpapers/anthony.jpg"; 
        
        MainFetchPopUp("./json/EveryYear_2011.json");
        
    }
    
    if (selectedYear === 5) {

    PG.textContent = "C Paul";
    SG.textContent = "S Wade";
    SF.textContent = "K Bryant";
    PF.textContent = "L James";
    C.textContent = "K Garnett";
    
    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";   
        
        smallpic.src = "/basket/img/wallpapers/garnett.jpg";
        
        MainFetchPopUp("./json/EveryYear_2010.json");
    
    }
    
    if (selectedYear === 4) {

        PG.textContent = "C Paul";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "D Howard";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/wade.jpg";

        MainFetchPopUp("./json/EveryYear_2009.json");
    }
    
    if (selectedYear === 3) {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Garnett";
        C.textContent = "T Duncan";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/james 2.jpg";

        MainFetchPopUp("./json/EveryYear_2008.json");
    }
    
    if (selectedYear === 2) {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "D Nowitzki";
        C.textContent = "T Duncan";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/nash.jpg";

        MainFetchPopUp("./json/EveryYear_2007.json");
    }
    
    if (selectedYear === 1) {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "T Duncan";
        C.textContent = "D Nowitzki";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/nowitzki.jpg";

        MainFetchPopUp("./json/EveryYear_2006.json");
    }
    
    if (selectedYear === "0") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "K Garnett";
        PF.textContent = "S O'Neal";
        C.textContent = "T Duncan";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/O'Neal.webp";

        MainFetchPopUp("./json/EveryYear_2005.json");
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