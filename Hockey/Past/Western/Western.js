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
        FL.textContent = "Rakell";
        FC.textContent = "Getzlaf";
        FR.textContent = "Perry";
        DL.textContent = "Fowler";
        DR.textContent = "H Lindholm";
        G.textContent = "Gibson";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/anaheim.gif";

        MainFetchPopUp("/hockey/past/western/json/anaheim.json");

    }

    if (selectedYear === "1") {
        FL.textContent = "Keller";
        FC.textContent = "Doan";
        FR.textContent = "Kessel";
        DL.textContent = "Ekman-Larsson";
        DR.textContent = "Yandle";
        G.textContent = "Smith";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/arizona.gif";

        MainFetchPopUp("/hockey/past/western/json/arizona.json");

    }

    if (selectedYear === "2") {
        FL.textContent = "Gaudreau";
        FC.textContent = "Monahan";
        FR.textContent = "M Tkachuk";
        DL.textContent = "Giordano";
        DR.textContent = "Brodie";
        G.textContent = "Kiprusoff";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/calgary.gif";

        MainFetchPopUp("/hockey/past/western/json/calgary.json");

    }

    if (selectedYear === "3") {
        FL.textContent = "Hossa";
        FC.textContent = "Toews";
        FR.textContent = "Kane";
        DL.textContent = "Keith";
        DR.textContent = "Seabrook";
        G.textContent = "Crawford";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/chicago.gif";

        MainFetchPopUp("/hockey/past/western/json/chicago.json");

    }

    if (selectedYear === "4") {
        FL.textContent = "Landeskog";
        FC.textContent = "MacKinnon";
        FR.textContent = "Rantanen";
        DL.textContent = "E Johnson";
        DR.textContent = "Barrie";
        G.textContent = "Varlamov";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/colorado.gif";

        MainFetchPopUp("/hockey/past/western/json/colorado.json");

    }


    if (selectedYear === "5") {
        FL.textContent = "Benn";
        FC.textContent = "Seguin";
        FR.textContent = "Radulov";
        DL.textContent = "Klingberg";
        DR.textContent = "Heiskanen";
        G.textContent = "Bishop";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/dallas.gif";

        MainFetchPopUp("/hockey/past/western/json/dallas.json");

    }

    if (selectedYear === "6") {
        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "Eberle";
        DL.textContent = "Klefbom";
        DR.textContent = "Nurse";
        G.textContent = "Talbot";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/edmonton.gif";

        MainFetchPopUp("/hockey/past/western/json/edmonton.json");

    }

    if (selectedYear === "7") {
        FL.textContent = "D Brown";
        FC.textContent = "Kopitar";
        FR.textContent = "Carter";
        DL.textContent = "Doughty";
        DR.textContent = "Muzzin";
        G.textContent = "Quick";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/los angeles.gif";

        MainFetchPopUp("/hockey/past/western/json/los angeles.json");

    }

    if (selectedYear === "8") {
        FL.textContent = "Parise";
        FC.textContent = "Koivu";
        FR.textContent = "Pominville";
        DL.textContent = "Suter";
        DR.textContent = "Spurgeon";
        G.textContent = "Dubnyk";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/minnesota.gif";

        MainFetchPopUp("/hockey/past/western/json/minnesota.json");

    }

    if (selectedYear === "9") {
        FL.textContent = "F Forsberg";
        FC.textContent = "Johansen";
        FR.textContent = "Arvidsson";
        DL.textContent = "Josi";
        DR.textContent = "Weber";
        G.textContent = "Rinne";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/nashville.gif";

        MainFetchPopUp("/hockey/past/western/json/nashville.json");

    }

    if (selectedYear === "10") {
        FL.textContent = "Couture";
        FC.textContent = "Thornton";
        FR.textContent = "Pavelski";
        DL.textContent = "Burns";
        DR.textContent = "Vlasic";
        G.textContent = "M Jones";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/san jose.gif";

        MainFetchPopUp("/hockey/past/western/json/san jose.json");

    }


    if (selectedYear === "11") {

        FL.textContent = "Backes";
        FC.textContent = "O'Reilly";
        FR.textContent = "Tarasenko";
        DL.textContent = "Pietrangelo";
        DR.textContent = "Shattenkirk";
        G.textContent = "Binnington";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/st. louis.gif";

        MainFetchPopUp("/hockey/past/western/json/st louis.json");

    }

    if (selectedYear === "12") {

        FL.textContent = "D Sedin";
        FC.textContent = "H Sedin";
        FR.textContent = "Horvat";
        DL.textContent = "Edler";
        DR.textContent = "Bieksa";
        G.textContent = "Luongo";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/vancouver.gif";

        MainFetchPopUp("/hockey/past/western/json/vancouver.json");

    }

    if (selectedYear === "13") {

        FL.textContent = "Marchessault";
        FC.textContent = "W Karlsson";
        FR.textContent = "Stone";
        DL.textContent = "Theodore";
        DR.textContent = "Schmidt";
        G.textContent = "Fleury";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/vegas.gif";

        MainFetchPopUp("/hockey/past/western/json/vegas.json");

    }

    if (selectedYear === "14") {

        FL.textContent = "Connor";
        FC.textContent = "Scheifele";
        FR.textContent = "Wheeler";
        DL.textContent = "Byfuglien";
        DR.textContent = "Trouba";
        G.textContent = "Hellebuyck";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/winnipeg.gif";

        MainFetchPopUp("/hockey/past/western/json/winnipeg.json");
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
        FL.textContent = "Rakell";
        FC.textContent = "Getzlaf";
        FR.textContent = "Perry";
        DL.textContent = "Fowler";
        DR.textContent = "H Lindholm";
        G.textContent = "Gibson";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/anaheim.gif";

        MainFetchPopUp("/hockey/past/western/json/anaheim.json");

    }

    if (selectedYear === 1) {
        FL.textContent = "Keller";
        FC.textContent = "Doan";
        FR.textContent = "Kessel";
        DL.textContent = "Ekman-Larsson";
        DR.textContent = "Yandle";
        G.textContent = "Smith";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/arizona.gif";

        MainFetchPopUp("/hockey/past/western/json/arizona.json");

    }

    if (selectedYear === 2) {
        FL.textContent = "Gaudreau";
        FC.textContent = "Monahan";
        FR.textContent = "M Tkachuk";
        DL.textContent = "Giordano";
        DR.textContent = "Brodie";
        G.textContent = "Kiprusoff";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/calgary.gif";

        MainFetchPopUp("/hockey/past/western/json/calgary.json");

    }

    if (selectedYear === 3) {
        FL.textContent = "Hossa";
        FC.textContent = "Toews";
        FR.textContent = "Kane";
        DL.textContent = "Keith";
        DR.textContent = "Seabrook";
        G.textContent = "Crawford";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/chicago.gif";

        MainFetchPopUp("/hockey/past/western/json/chicago.json");

    }

    if (selectedYear === 4) {
        FL.textContent = "Landeskog";
        FC.textContent = "MacKinnon";
        FR.textContent = "Rantanen";
        DL.textContent = "E Johnson";
        DR.textContent = "Barrie";
        G.textContent = "Varlamov";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/colorado.gif";

        MainFetchPopUp("/hockey/past/western/json/colorado.json");

    }


    if (selectedYear === 5) {
        FL.textContent = "Benn";
        FC.textContent = "Seguin";
        FR.textContent = "Radulov";
        DL.textContent = "Klingberg";
        DR.textContent = "Heiskanen";
        G.textContent = "Bishop";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/dallas.gif";

        MainFetchPopUp("/hockey/past/western/json/dallas.json");

    }

    if (selectedYear === 6) {
        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "Eberle";
        DL.textContent = "Klefbom";
        DR.textContent = "Nurse";
        G.textContent = "Talbot";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/edmonton.gif";

        MainFetchPopUp("/hockey/past/western/json/edmonton.json");

    }

    if (selectedYear === 7) {
        FL.textContent = "D Brown";
        FC.textContent = "Kopitar";
        FR.textContent = "Carter";
        DL.textContent = "Doughty";
        DR.textContent = "Muzzin";
        G.textContent = "Quick";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/los angeles.gif";

        MainFetchPopUp("/hockey/past/western/json/los angeles.json");

    }

    if (selectedYear === 8) {
        FL.textContent = "Parise";
        FC.textContent = "Koivu";
        FR.textContent = "Pominville";
        DL.textContent = "Suter";
        DR.textContent = "Spurgeon";
        G.textContent = "Dubnyk";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/minnesota.gif";

        MainFetchPopUp("/hockey/past/western/json/minnesota.json");

    }

    if (selectedYear === 9) {
        FL.textContent = "F Forsberg";
        FC.textContent = "Johansen";
        FR.textContent = "Arvidsson";
        DL.textContent = "Josi";
        DR.textContent = "Weber";
        G.textContent = "Rinne";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/nashville.gif";

        MainFetchPopUp("/hockey/past/western/json/nashville.json");

    }

    if (selectedYear === 10) {
        FL.textContent = "Couture";
        FC.textContent = "Thornton";
        FR.textContent = "Pavelski";
        DL.textContent = "Burns";
        DR.textContent = "Vlasic";
        G.textContent = "M Jones";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/san jose.gif";

        MainFetchPopUp("/hockey/past/western/json/san jose.json");

    }


    if (selectedYear === 11) {

        FL.textContent = "Backes";
        FC.textContent = "O'Reilly";
        FR.textContent = "Tarasenko";
        DL.textContent = "Pietrangelo";
        DR.textContent = "Shattenkirk";
        G.textContent = "Binnington";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/st. louis.gif";

        MainFetchPopUp("/hockey/past/western/json/st louis.json");

    }

    if (selectedYear === 12) {

        FL.textContent = "D Sedin";
        FC.textContent = "H Sedin";
        FR.textContent = "Horvat";
        DL.textContent = "Edler";
        DR.textContent = "Bieksa";
        G.textContent = "Luongo";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/vancouver.gif";

        MainFetchPopUp("/hockey/past/western/json/vancouver.json");

    }

    if (selectedYear === 13) {

        FL.textContent = "Marchessault";
        FC.textContent = "W Karlsson";
        FR.textContent = "Stone";
        DL.textContent = "Theodore";
        DR.textContent = "Schmidt";
        G.textContent = "Fleury";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/vegas.gif";

        MainFetchPopUp("/hockey/past/western/json/vegas.json");

    }

    if (selectedYear === 14) {

        FL.textContent = "Connor";
        FC.textContent = "Scheifele";
        FR.textContent = "Wheeler";
        DL.textContent = "Byfuglien";
        DR.textContent = "Trouba";
        G.textContent = "Hellebuyck";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/winnipeg.gif";

        MainFetchPopUp("/hockey/past/western/json/winnipeg.json");
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