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

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;


    if (selectedYear === "0") {

        FL.textContent = "MacKinnon";
        FC.textContent = "McDavid";
        FR.textContent = "Crosby";
        DL.textContent = "Makar";
        DR.textContent = "Hamilton";
        G.textContent = "Jarry";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

                smallpic.src = "/hockey/img/logos/canada.png";  

        MainFetchPopUp("/hockey/present/nations/json/canada.json");
    }

    if (selectedYear === "1") {

        FL.textContent = "Necas";
        FC.textContent = "Hertl";
        FR.textContent = "Pastrnak";
        DL.textContent = "Rutta";
        DR.textContent = "Simek";
        G.textContent = "Vanecek";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/czech republic.webp";  

        MainFetchPopUp("/hockey/present/nations/json/czech republic.json");
    }


    if (selectedYear === "2") {

        FL.textContent = "Hintz";
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

        MainFetchPopUp("/hockey/present/nations/json/finland.json");
    } 
    
    if (selectedYear === "3") {

        FL.textContent = "Stutzle";
        FC.textContent = "Draisaitl";
        FR.textContent = "Sturm";
        DL.textContent = "Seider";
        DR.textContent = "Gawanke";
        G.textContent = "Grubauer";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/germany.webp";  

        MainFetchPopUp("/hockey/present/nations/json/germany.json");
    }

    if (selectedYear === "4") {

    FL.textContent = "Ovechkin";
    FC.textContent = "Kucherov";
    FR.textContent = "Panarin";
    DL.textContent = "Provorov";
    DR.textContent = "Sergachev";
    G.textContent = "Vasilevskiy";
        
    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/russia.png";  
        
        MainFetchPopUp("/hockey/present/nations/json/russia.json");
} 

    if (selectedYear === "5") {
        
        FL.textContent = "Tatar";
        FC.textContent = "Ruzicka";
        FR.textContent = "Slafkovsky";
        DL.textContent = "Fehervary";
        DR.textContent = "Cernak";
        G.textContent = "Halak";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";
        
        smallpic.src = "/hockey/img/logos/slovakia.webp";  

        MainFetchPopUp("/hockey/present/nations/json/slovakia.json");
    }
    
    if (selectedYear === "6") {

        FL.textContent = "Pettersson";
        FC.textContent = "Zibanejad";
        FR.textContent = "E Lindholm";
        DL.textContent = "Hedman";
        DR.textContent = "E Karlsson";
        G.textContent = "Ullmark";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";
            
        smallpic.src = "/hockey/img/logos/sweden.webp";  

        MainFetchPopUp("/hockey/present/nations/json/sweden.json");
    }
    
    if (selectedYear === "7") {
        FL.textContent = "Meier";
        FC.textContent = "Hischier";
        FR.textContent = "Fiala";
        DL.textContent = "Josi";
        DR.textContent = "Siegenthaler";
        G.textContent = "Genoni";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/switzerland.png";  

        MainFetchPopUp("/hockey/present/nations/json/switzerland.json");
        
        G2.style.width = '120px';
        G2.style.objectFit = "cover";
    }
    
    if (selectedYear === "8") {
    FL.textContent = "J Robertson";
    FC.textContent = "Matthews";
    FR.textContent = "M Tkachuk";
    DL.textContent = "Fox";
    DR.textContent = "McAvoy";
    G.textContent = "Hellebuyck"
        
    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/usa.webp";  
        
        MainFetchPopUp("/hockey/present/nations/json/united states.json");
}
    
    function clearAndFadeInElements() {
            const elements = [
                FL,FL2,FC,FC2,FR,FR2,DL,DL2,DR,DR2,G,G2,
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
    
           if (selectedYear === "0") {

        FL.textContent = "MacKinnon";
        FC.textContent = "McDavid";
        FR.textContent = "Crosby";
        DL.textContent = "Makar";
        DR.textContent = "Hamilton";
        G.textContent = "Jarry";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

                smallpic.src = "/hockey/img/logos/canada.png";


        MainFetchPopUp("/hockey/present/nations/json/canada.json");
    }

    if (selectedYear === 1) {

        FL.textContent = "Necas";
        FC.textContent = "Hertl";
        FR.textContent = "Pastrnak";
        DL.textContent = "Rutta";
        DR.textContent = "Simek";
        G.textContent = "Vanecek";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

                smallpic.src = "/hockey/img/logos/czech republic.webp";


        MainFetchPopUp("/hockey/present/nations/json/czech republic.json");
    }


    if (selectedYear === 2) {

        FL.textContent = "Hintz";
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

        MainFetchPopUp("/hockey/present/nations/json/finland.json");
    } 
    
    if (selectedYear === 3) {

        FL.textContent = "Stutzle";
        FC.textContent = "Draisaitl";
        FR.textContent = "Sturm";
        DL.textContent = "Seider";
        DR.textContent = "Gawanke";
        G.textContent = "Grubauer";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/germany.webp";  

        MainFetchPopUp("/hockey/present/nations/json/germany.json");
    }

    if (selectedYear === 4) {

    FL.textContent = "Ovechkin";
    FC.textContent = "Kucherov";
    FR.textContent = "Panarin";
    DL.textContent = "Provorov";
    DR.textContent = "Sergachev";
    G.textContent = "Vasilevskiy";
        
    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/russia.png";  
        
        MainFetchPopUp("/hockey/present/nations/json/russia.json");
} 

    if (selectedYear === 5) {
        
        FL.textContent = "Tatar";
        FC.textContent = "Ruzicka";
        FR.textContent = "Slafkovsky";
        DL.textContent = "Fehervary";
        DR.textContent = "Cernak";
        G.textContent = "Halak";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";
        
        smallpic.src = "/hockey/img/logos/slovakia.webp";  

        MainFetchPopUp("/hockey/present/nations/json/slovakia.json");
    }
    
    if (selectedYear === 6) {

        FL.textContent = "Pettersson";
        FC.textContent = "Zibanejad";
        FR.textContent = "E Lindholm";
        DL.textContent = "Hedman";
        DR.textContent = "E Karlsson";
        G.textContent = "Ullmark";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";
            
        smallpic.src = "/hockey/img/logos/sweden.webp";  

        MainFetchPopUp("/hockey/present/nations/json/sweden.json");
    }
    
    if (selectedYear === 7) {
        FL.textContent = "Meier";
        FC.textContent = "Hischier";
        FR.textContent = "Fiala";
        DL.textContent = "Josi";
        DR.textContent = "Siegenthaler";
        G.textContent = "Genoni";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/switzerland.png";  

        MainFetchPopUp("/hockey/present/nations/json/switzerland.json");
        
        G2.style.width = '120px';
        G2.style.objectFit = "cover";
    }
    
    if (selectedYear === 8) {
    FL.textContent = "J Robertson";
    FC.textContent = "Matthews";
    FR.textContent = "M Tkachuk";
    DL.textContent = "Fox";
    DR.textContent = "McAvoy";
    G.textContent = "Hellebuyck"
        
    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/usa.webp";  
        
        MainFetchPopUp("/hockey/present/nations/json/united states.json");
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

    const nav = document.querySelector("nav");
    const backBtn = document.querySelector("#backButton")
    const forBtn = document.querySelector("#forwardButton")
    const search = document.querySelector(".search-container")

FC2.addEventListener('click', function () {
    nav.style.display = "none";
    backBtn.style.display = "none";
    forBtn.style.display = "none";
    search.style.display = "none";
})
    
FL2.addEventListener('click', function () {
    nav.style.display = "flex";
    backBtn.style.display = "block";
    forBtn.style.display = "block";
    search.style.display = "block";

})