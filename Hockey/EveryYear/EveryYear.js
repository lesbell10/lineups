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

let selectedYear = 0

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear === "19") { 
    FL.textContent = "Draisaitl";
    FC.textContent = "McDavid";
    FR.textContent = "Pastrnak";
    DL.textContent = "Makar";
    DR.textContent = "Josi";
    G.textContent = "Vasilevskiy";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/mcdavid.jpg";

    MainFetchPopUp("./json/EveryYear_2024.json");
}

if (selectedYear === "18") {
    FL.textContent = "MacKinnon";
    FC.textContent = "McDavid";
    FR.textContent = "Matthews";
    DL.textContent = "Makar";
    DR.textContent = "Hedman";
    G.textContent = "Vasilevskiy";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/matthews.jpg";

    MainFetchPopUp("./json/EveryYear_2023.json");
}

if (selectedYear === "17") {
    FL.textContent = "Crosby";
    FC.textContent = "McDavid";
    FR.textContent = "MacKinnon";
    DL.textContent = "Hedman";
    DR.textContent = "Josi";
    G.textContent = "Vasilevskiy";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/mackinnon.jpg";

    MainFetchPopUp("./json/EveryYear_2022.json");
}

if (selectedYear === "16") {
    FL.textContent = "Draisaitl";
    FC.textContent = "McDavid";
    FR.textContent = "MacKinnon";
    DL.textContent = "Hedman";
    DR.textContent = "Makar";
    G.textContent = "Vasilevskiy";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/draisaitl.jpg";


    MainFetchPopUp("./json/EveryYear_2021.json");
}

if (selectedYear === "15") {
    FL.textContent = "Ovechkin";
    FC.textContent = "McDavid";
    FR.textContent = "Crosby";
    DL.textContent = "Hedman";
    DR.textContent = "Burns";
    G.textContent = "Vasilevskiy";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/crosby.jpg";

    MainFetchPopUp("./json/EveryYear_2020.json");
}

if (selectedYear === "14") {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Kucherov";
    DL.textContent = "Hedman";
    DR.textContent = "E Karlsson";
    G.textContent = "Price";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/kucherov.png"

    MainFetchPopUp("./json/EveryYear_2019.json");
}

if (selectedYear === "13") {
    FL.textContent = "Ovechkin";
    FC.textContent = "McDavid";
    FR.textContent = "Crosby";
    DL.textContent = "Hedman";
    DR.textContent = "Keith";
    G.textContent = "Holtby";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/ovechkin.png";


    MainFetchPopUp("./json/EveryYear_2018.json");
}

if (selectedYear === "12") {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "P Kane";
    DL.textContent = "E Karlsson";
    DR.textContent = "Weber";
    G.textContent = "Price";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/price.jpg";

    MainFetchPopUp("./json/EveryYear_2017.json");
}

if (selectedYear === "11") {
    FL.textContent = "J Toews";
    FC.textContent = "Crosby";
    FR.textContent = "P Kane";
    DL.textContent = "Keith";
    DR.textContent = "Subban";
    G.textContent = "Quick";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/toews.jpg";

    MainFetchPopUp("./json/EveryYear_2016.json");
}

if (selectedYear === "10") {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "P Kane";
    DL.textContent = "Weber";
    DR.textContent = "Subban";
    G.textContent = "Lundqvist";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/kane.jpg";

    MainFetchPopUp("./json/EveryYear_2015.json");
}

if (selectedYear === "9") {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Malkin";
    DL.textContent = "Chara";
    DR.textContent = "Weber";
    G.textContent = "Lundqvist";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/malkin.jpg";

    MainFetchPopUp("./json/EveryYear_2014.json");
}

if (selectedYear === "8") {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Datsyuk";
    DL.textContent = "Chara";
    DR.textContent = "E Karlsson";
    G.textContent = "Quick";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/chara.jpg";

    MainFetchPopUp("./json/EveryYear_2013.json");
}

if (selectedYear === "7") {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Stamkos";
    DL.textContent = "Chara";
    DR.textContent = "Weber";
    G.textContent = "Lundqvist";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

  smallpic.src = "/hockey/img/wallpapers/stamkos.jpg";
  
    MainFetchPopUp("./json/EveryYear_2012.json");
}

if (selectedYear === "6") {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Datsyuk";
    DL.textContent = "Lidstrom";
    DR.textContent = "Weber";
    G.textContent = "Luongo";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/lidstrom.avif";

    MainFetchPopUp("./json/EveryYear_2011.json");
}

if (selectedYear === "5") {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Datsyuk";
    DL.textContent = "Lidstrom";
    DR.textContent = "Chara";
    G.textContent = "Brodeur";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/datsyuk.jpg";

    MainFetchPopUp("./json/EveryYear_2010.json");
}

if (selectedYear === "4") {
    FL.textContent = "Ovechkin";
    FC.textContent = "Malkin";
    FR.textContent = "Iginla";
    DL.textContent = "Lidstrom";
    DR.textContent = "Phaneuf";
    G.textContent = "Luongo";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/iginla.jpg";

    MainFetchPopUp("./json/EveryYear_2009.json");
}

if (selectedYear === "3") {
    FL.textContent = "Lecavalier";
    FC.textContent = "Crosby";
    FR.textContent = "Thornton";
    DL.textContent = "Lidstrom";
    DR.textContent = "Pronger";
    G.textContent = "Luongo";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/thornton.jpg";

    MainFetchPopUp("./json/EveryYear_2008.json");
}

if (selectedYear === "2") {
    FL.textContent = "Ovechkin";
    FC.textContent = "Thornton";
    FR.textContent = "Jagr";
    DL.textContent = "Lidstrom";
    DR.textContent = "Pronger";
    G.textContent = "Brodeur";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/jagr.webp";

    MainFetchPopUp("./json/EveryYear_2007.json");
}

if (selectedYear === "1") {
    FL.textContent = "Iginla";
    FC.textContent = "Sakic";
    FR.textContent = "P Forsberg";
    DL.textContent = "S Niedermayer";
    DR.textContent = "Lidstrom";
    G.textContent = "Brodeur";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/niedermayer.jpg";

    MainFetchPopUp("./json/EveryYear_2006.json");
}

if (selectedYear === "0") {
    FL.textContent = "Naslund";
    FC.textContent = "Sakic";
    FR.textContent = "Iginla";
    DL.textContent = "S Niedermayer";
    DR.textContent = "Pronger";
    G.textContent = "Brodeur";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/sakic.jpg";

    MainFetchPopUp("./json/EveryYear_2005.json");
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
    
    // let currentIndex = 0;
    
    // Function to update the dropdown based on the currentIndex
const updateDropdown = () => {

if (selectedYear === 19) { 
    FL.textContent = "Draisaitl";
    FC.textContent = "McDavid";
    FR.textContent = "Pastrnak";
    DL.textContent = "Makar";
    DR.textContent = "Josi";
    G.textContent = "Vasilevskiy";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/mcdavid.jpg";

    MainFetchPopUp("./json/EveryYear_2024.json");
}

if (selectedYear === 18) {
    FL.textContent = "MacKinnon";
    FC.textContent = "McDavid";
    FR.textContent = "Matthews";
    DL.textContent = "Makar";
    DR.textContent = "Hedman";
    G.textContent = "Vasilevskiy";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/matthews.jpg";

    MainFetchPopUp("./json/EveryYear_2023.json");
}

if (selectedYear === 17) {
    FL.textContent = "Crosby";
    FC.textContent = "McDavid";
    FR.textContent = "MacKinnon";
    DL.textContent = "Hedman";
    DR.textContent = "Josi";
    G.textContent = "Vasilevskiy";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/mackinnon.jpg";

    MainFetchPopUp("./json/EveryYear_2022.json");
}

if (selectedYear === 16) {
    FL.textContent = "Draisaitl";
    FC.textContent = "McDavid";
    FR.textContent = "MacKinnon";
    DL.textContent = "Hedman";
    DR.textContent = "Makar";
    G.textContent = "Vasilevskiy";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/draisaitl.jpg";


    MainFetchPopUp("./json/EveryYear_2021.json");
}

if (selectedYear === 15) {
    FL.textContent = "Ovechkin";
    FC.textContent = "McDavid";
    FR.textContent = "Crosby";
    DL.textContent = "Hedman";
    DR.textContent = "Burns";
    G.textContent = "Vasilevskiy";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/crosby.jpg";

    MainFetchPopUp("./json/EveryYear_2020.json");
}

if (selectedYear === 14) {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Kucherov";
    DL.textContent = "Hedman";
    DR.textContent = "E Karlsson";
    G.textContent = "Price";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/kucherov.png"

    MainFetchPopUp("./json/EveryYear_2019.json");
}

if (selectedYear === 13) {
    FL.textContent = "Ovechkin";
    FC.textContent = "McDavid";
    FR.textContent = "Crosby";
    DL.textContent = "Hedman";
    DR.textContent = "Keith";
    G.textContent = "Holtby";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/ovechkin.png";


    MainFetchPopUp("./json/EveryYear_2018.json");
}

if (selectedYear === 12) {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "P Kane";
    DL.textContent = "E Karlsson";
    DR.textContent = "Weber";
    G.textContent = "Price";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/price.jpg";

    MainFetchPopUp("./json/EveryYear_2017.json");
}

if (selectedYear === 11) {
    FL.textContent = "J Toews";
    FC.textContent = "Crosby";
    FR.textContent = "P Kane";
    DL.textContent = "Keith";
    DR.textContent = "Subban";
    G.textContent = "Quick";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/toews.jpg";

    MainFetchPopUp("./json/EveryYear_2016.json");
}

if (selectedYear === 10) {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "P Kane";
    DL.textContent = "Weber";
    DR.textContent = "Subban";
    G.textContent = "Lundqvist";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/kane.jpg";

    MainFetchPopUp("./json/EveryYear_2015.json");
}

if (selectedYear === 9) {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Malkin";
    DL.textContent = "Chara";
    DR.textContent = "Weber";
    G.textContent = "Lundqvist";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/malkin.jpg";

    MainFetchPopUp("./json/EveryYear_2014.json");
}

if (selectedYear === 8) {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Datsyuk";
    DL.textContent = "Chara";
    DR.textContent = "E Karlsson";
    G.textContent = "Quick";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/chara.jpg";

    MainFetchPopUp("./json/EveryYear_2013.json");
}

if (selectedYear === 7) {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Stamkos";
    DL.textContent = "Chara";
    DR.textContent = "Weber";
    G.textContent = "Lundqvist";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

  smallpic.src = "/hockey/img/wallpapers/stamkos.jpg";
  
    MainFetchPopUp("./json/EveryYear_2012.json");
}

if (selectedYear === 6) {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Datsyuk";
    DL.textContent = "Lidstrom";
    DR.textContent = "Weber";
    G.textContent = "Luongo";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/lidstrom.avif";

    MainFetchPopUp("./json/EveryYear_2011.json");
}

if (selectedYear === 5) {
    FL.textContent = "Ovechkin";
    FC.textContent = "Crosby";
    FR.textContent = "Datsyuk";
    DL.textContent = "Lidstrom";
    DR.textContent = "Chara";
    G.textContent = "Brodeur";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/datsyuk.jpg";

    MainFetchPopUp("./json/EveryYear_2010.json");
}

if (selectedYear === 4) {
    FL.textContent = "Ovechkin";
    FC.textContent = "Malkin";
    FR.textContent = "Iginla";
    DL.textContent = "Lidstrom";
    DR.textContent = "Phaneuf";
    G.textContent = "Luongo";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/iginla.jpg";

    MainFetchPopUp("./json/EveryYear_2009.json");
}

if (selectedYear === 3) {
    FL.textContent = "Lecavalier";
    FC.textContent = "Crosby";
    FR.textContent = "Thornton";
    DL.textContent = "Lidstrom";
    DR.textContent = "Pronger";
    G.textContent = "Luongo";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/thornton.jpg";

    MainFetchPopUp("./json/EveryYear_2008.json");
}

if (selectedYear === 2) {
    FL.textContent = "Ovechkin";
    FC.textContent = "Thornton";
    FR.textContent = "Jagr";
    DL.textContent = "Lidstrom";
    DR.textContent = "Pronger";
    G.textContent = "Brodeur";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/jagr.webp";

    MainFetchPopUp("./json/EveryYear_2007.json");
}

if (selectedYear === 1) {
    FL.textContent = "Iginla";
    FC.textContent = "Sakic";
    FR.textContent = "P Forsberg";
    DL.textContent = "S Niedermayer";
    DR.textContent = "Lidstrom";
    G.textContent = "Brodeur";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/niedermayer.jpg";

    MainFetchPopUp("./json/EveryYear_2006.json");
}

if (selectedYear === 0) {
    FL.textContent = "Naslund";
    FC.textContent = "Sakic";
    FR.textContent = "Iginla";
    DL.textContent = "S Niedermayer";
    DR.textContent = "Pronger";
    G.textContent = "Brodeur";
	
	FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/wallpapers/sakic.jpg";

    MainFetchPopUp("./json/EveryYear_2005.json");
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