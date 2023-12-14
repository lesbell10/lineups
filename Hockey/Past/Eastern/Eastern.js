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

        FL.textContent = "Marchand";
        FC.textContent = "Bergeron";
        FR.textContent = "Pastrnak";
        DL.textContent = "Chara";
        DR.textContent = "Krug";
        G.textContent = "Rask";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/boston.gif";

        MainFetchPopUp("/hockey/past/eastern/json/boston.json");

    }

    if (selectedYear === "1") {
        FL.textContent = "Vanek";
        FC.textContent = "Eichel";
        FR.textContent = "O'Reilly";
        DL.textContent = "Ristolainen";
        DR.textContent = "Myers";
        G.textContent = "R Miller";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/buffalo.gif";
        
        MainFetchPopUp("/hockey/past/eastern/json/buffalo.json");

    }

    if (selectedYear === "2") {
        FL.textContent = "J Skinner";
        FC.textContent = "E Staal";
        FR.textContent = "Aho";
        DL.textContent = "Slavin";
        DR.textContent = "Faulk";
        G.textContent = "C Ward";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/carolina.gif";

        MainFetchPopUp("/hockey/past/eastern/json/carolina.json");

    }

    if (selectedYear === "3") {
        FL.textContent = "Panarin";
        FC.textContent = "M Foligno";
        FR.textContent = "Atkinson";
        DL.textContent = "J Johnson";
        DR.textContent = "S Jones";
        G.textContent = "Bobrovsky";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/columbus.gif";

        MainFetchPopUp("/hockey/past/eastern/json/columbus.json");

    }

    if (selectedYear === "4") {
        FL.textContent = "Zetterberg";
        FC.textContent = "Datsyuk";
        FR.textContent = "Larkin";
        DL.textContent = "Lidstrom";
        DR.textContent = "Kronwall";
        G.textContent = "Howard";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/detroit.gif";

        MainFetchPopUp("/hockey/past/eastern/json/detroit.json");

    }

    if (selectedYear === "5") {
        FL.textContent = "Huberdeau";
        FC.textContent = "Barkov";
        FR.textContent = "Hoffman";
        DL.textContent = "Ekblad";
        DR.textContent = "Yandle";
        G.textContent = "Luongo";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/florida.gif";

        MainFetchPopUp("/hockey/past/eastern/json/florida.json");

    } 
    
    if(selectedYear === "6") {
        FL.textContent = "Pacioretty";
        FC.textContent = "Tatar";
        FR.textContent = "Gallagher";
        DL.textContent = "Subban";
        DR.textContent = "Weber";
        G.textContent = "Price";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/montreal.gif";

        MainFetchPopUp("/hockey/past/eastern/json/montreal.json");

    }
    
    if (selectedYear === "7") {
        FL.textContent = "Hall";
        FC.textContent = "Henrique";
        FR.textContent = "Hischier";
        DL.textContent = "A Greene";
        DR.textContent = "Subban";
        G.textContent = "Schneider";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/new jersey.gif";

        MainFetchPopUp("/hockey/past/eastern/json/new jersey.json");

    }
    
    if (selectedYear === "8") {
        FL.textContent = "Lee";
        FC.textContent = "Tavares";
        FR.textContent = "Barzal";
        DL.textContent = "Leddy";
        DR.textContent = "Boychuk";
        G.textContent = "Greiss";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny islanders.gif";

        MainFetchPopUp("/hockey/past/eastern/json/ny islanders.json");

    }
    
    if (selectedYear === "9") {
        FL.textContent = "Panarin";
        FC.textContent = "Stepan";
        FR.textContent = "Zuccarello";
        DL.textContent = "McDonagh";
        DR.textContent = "M Staal";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny rangers.gif";

        MainFetchPopUp("/hockey/past/eastern/json/ny rangers.json");

    } if (selectedYear === "10") {
        FL.textContent = "Hoffman";
        FC.textContent = "Spezza";
        FR.textContent = "Stone";
        DL.textContent = "E Karlsson";
        DR.textContent = "Chabot";
        G.textContent = "Anderson";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ottawa.gif";
        
        MainFetchPopUp("/hockey/past/eastern/json/ottawa.json");

    } if (selectedYear === "11") {
        FL.textContent = "Giroux";;
        FC.textContent = "Couturier";
        FR.textContent = "Voracek";
        DL.textContent = "Timonen";
        DR.textContent = "Provorov";
        G.textContent = "Mason";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/philadelphia.gif";

        MainFetchPopUp("/hockey/past/eastern/json/philadelphia.json");

    }

    if (selectedYear === "12") {
        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Kessel";
        DL.textContent = "Letang";
        DR.textContent = "P Martin";
        G.textContent = "Fleury";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/pittsburgh.gif";

        MainFetchPopUp("/hockey/past/eastern/json/pittsburgh.json");

    }

    if (selectedYear === "13") {
        FL.textContent = "St Louis";
        FC.textContent = "Stamkos";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "McDonagh";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/tampa bay.gif";

        MainFetchPopUp("/hockey/past/eastern/json/tampa bay.json");

    }

    if (selectedYear === "14") {
        FL.textContent = "Tavares";
        FC.textContent = "Matthews";
        FR.textContent = "Marner";
        DL.textContent = "Rielly";
        DR.textContent = "Phaneuf";
        G.textContent = "Andersen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/toronto.gif";

        MainFetchPopUp("/hockey/past/eastern/json/toronto.json");

    }

    if (selectedYear === "15") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Backstrom";
        FR.textContent = "Kuznetsov";
        DL.textContent = "Carlson";
        DR.textContent = "M Green";
        G.textContent = "Holtby";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/washington.gif";

        MainFetchPopUp("/hockey/past/eastern/json/washington.json");

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

        FL.textContent = "Marchand";
        FC.textContent = "Bergeron";
        FR.textContent = "Pastrnak";
        DL.textContent = "Chara";
        DR.textContent = "Krug";
        G.textContent = "Rask";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/boston.gif";

        MainFetchPopUp("/hockey/past/eastern/json/boston.json");

    }

    if (selectedYear === 1) {
        FL.textContent = "Vanek";
        FC.textContent = "Eichel";
        FR.textContent = "O'Reilly";
        DL.textContent = "Ristolainen";
        DR.textContent = "Myers";
        G.textContent = "R Miller";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/buffalo.gif";

        MainFetchPopUp("/hockey/past/eastern/json/buffalo.json");

    }

    if (selectedYear === 2) {
        FL.textContent = "J Skinner";
        FC.textContent = "E Staal";
        FR.textContent = "Aho";
        DL.textContent = "Slavin";
        DR.textContent = "Faulk";
        G.textContent = "C Ward";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/carolina.gif";

        MainFetchPopUp("/hockey/past/eastern/json/carolina.json");

    }

    if (selectedYear === 3) {
        FL.textContent = "Panarin";
        FC.textContent = "M Foligno";
        FR.textContent = "Atkinson";
        DL.textContent = "J Johnson";
        DR.textContent = "S Jones";
        G.textContent = "Bobrovsky";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/columbus.gif";

        MainFetchPopUp("/hockey/past/eastern/json/columbus.json");

    }

    if (selectedYear === 4) {
        FL.textContent = "Zetterberg";
        FC.textContent = "Datsyuk";
        FR.textContent = "Larkin";
        DL.textContent = "Lidstrom";
        DR.textContent = "Kronwall";
        G.textContent = "Howard";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/detroit.gif";

        MainFetchPopUp("/hockey/past/eastern/json/detroit.json");

    }

    if (selectedYear === 5) {
        FL.textContent = "Huberdeau";
        FC.textContent = "Barkov";
        FR.textContent = "Hoffman";
        DL.textContent = "Ekblad";
        DR.textContent = "Yandle";
        G.textContent = "Luongo";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/florida.gif";

        MainFetchPopUp("/hockey/past/eastern/json/florida.json");

    }

    if (selectedYear === 6) {
        FL.textContent = "Pacioretty";
        FC.textContent = "Tatar";
        FR.textContent = "Gallagher";
        DL.textContent = "Subban";
        DR.textContent = "Weber";
        G.textContent = "Price";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/montreal.gif";

        MainFetchPopUp("/hockey/past/eastern/json/montreal.json");

    }

    if (selectedYear === 7) {
        FL.textContent = "Hall";
        FC.textContent = "Henrique";
        FR.textContent = "Hischier";
        DL.textContent = "A Greene";
        DR.textContent = "Subban";
        G.textContent = "Schneider";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/new jersey.gif";

        MainFetchPopUp("/hockey/past/eastern/json/new jersey.json");

    }

    if (selectedYear === 8) {
        FL.textContent = "Lee";
        FC.textContent = "Tavares";
        FR.textContent = "Barzal";
        DL.textContent = "Leddy";
        DR.textContent = "Boychuk";
        G.textContent = "Greiss";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny islanders.gif";

        MainFetchPopUp("/hockey/past/eastern/json/ny islanders.json");

    }

    if (selectedYear === 9) {
        FL.textContent = "Panarin";
        FC.textContent = "Stepan";
        FR.textContent = "Zuccarello";
        DL.textContent = "McDonagh";
        DR.textContent = "M Staal";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny rangers.gif";

        MainFetchPopUp("/hockey/past/eastern/json/ny rangers.json");

    } if (selectedYear === 10) {
        FL.textContent = "Hoffman";
        FC.textContent = "Spezza";
        FR.textContent = "Stone";
        DL.textContent = "E Karlsson";
        DR.textContent = "Chabot";
        G.textContent = "Anderson";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ottawa.gif";

        MainFetchPopUp("/hockey/past/eastern/json/ottawa.json");

    } if (selectedYear === 11) {
        FL.textContent = "Giroux";;
        FC.textContent = "Couturier";
        FR.textContent = "Voracek";
        DL.textContent = "Timonen";
        DR.textContent = "Provorov";
        G.textContent = "Mason";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/philadelphia.gif";

        MainFetchPopUp("/hockey/past/eastern/json/philadelphia.json");

    }

    if (selectedYear === 12) {
        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Kessel";
        DL.textContent = "Letang";
        DR.textContent = "P Martin";
        G.textContent = "Fleury";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/pittsburgh.gif";

        MainFetchPopUp("/hockey/past/eastern/json/pittsburgh.json");

    }

    if (selectedYear === 13) {
        FL.textContent = "St Louis";
        FC.textContent = "Stamkos";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "McDonagh";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/tampa bay.gif";

        MainFetchPopUp("/hockey/past/eastern/json/tampa bay.json");

    }

    if (selectedYear === 14) {
        FL.textContent = "Tavares";
        FC.textContent = "Matthews";
        FR.textContent = "Marner";
        DL.textContent = "Rielly";
        DR.textContent = "Phaneuf";
        G.textContent = "Andersen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/toronto.gif";

        MainFetchPopUp("/hockey/past/eastern/json/toronto.json");

    }

    if (selectedYear === 15) {
        FL.textContent = "Ovechkin";
        FC.textContent = "Backstrom";
        FR.textContent = "Kuznetsov";
        DL.textContent = "Carlson";
        DR.textContent = "M Green";
        G.textContent = "Holtby";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/washington.gif";

        MainFetchPopUp("/hockey/past/eastern/json/washington.json");

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