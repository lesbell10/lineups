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

   if (selectedYear === "2") {
    SG.textContent = "Harden";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png";
    PG.textContent = "Curry";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png";
    SF.textContent = "James";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png";
    PF.textContent = "Durant";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png";
    C.textContent = "Davis";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png";
        document.getElementById("smallpic").src = "https://www.worldometers.info/img/flags/us-flag.gif";
        
} if (selectedYear === "0") {
    SG.textContent = "Doncic";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png";
    PG.textContent = "T Parker";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2225.png";
    SF.textContent = "Nowitzki";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1717.png";
    PF.textContent = "G Antetokounmpo";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png";
    C.textContent = "Jokic";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png";
    document.getElementById("smallpic").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png";

} if (selectedYear === "1") {
    SG.textContent = "Ginobili";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1938.png";
    PG.textContent = "Y Ming";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2397.png";
    SF.textContent = "Olajuwon";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/165.png";
    PF.textContent = "Embiid";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png";
    C.textContent = "Bogut";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/101106.png";
    document.getElementById("smallpic").src = "https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2016/09/flags-of-the-world-1170x693.png";
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

    if (selectedYear === 2) {
    SG.textContent = "Harden";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png";
    PG.textContent = "Curry";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png";
    SF.textContent = "James";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png";
    PF.textContent = "Durant";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png";
    C.textContent = "Davis";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png";
        document.getElementById("smallpic").src = "https://www.worldometers.info/img/flags/us-flag.gif";
        
} if (selectedYear === 0) {
    SG.textContent = "Doncic";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png";
    PG.textContent = "T Parker";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2225.png";
    SF.textContent = "Nowitzki";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1717.png";
    PF.textContent = "G Antetokounmpo";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png";
    C.textContent = "Jokic";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png";
    document.getElementById("smallpic").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png";

} if (selectedYear === 1) {
    SG.textContent = "Ginobili";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1938.png";
    PG.textContent = "Y Ming";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2397.png";
    SF.textContent = "Olajuwon";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/165.png";
    PF.textContent = "Embiid";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png";
    C.textContent = "Bogut";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/101106.png";
    document.getElementById("smallpic").src = "https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2016/09/flags-of-the-world-1170x693.png";
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