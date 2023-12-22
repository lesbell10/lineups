const yearSelector = document.getElementById("yearSelector");
const STC = document.getElementById("STC");
const STC2 = document.getElementById("STC2");
const FR = document.getElementById("FR");
const FR2 = document.getElementById("FR2");
const AMC = document.getElementById("AMC");
const AMC2 = document.getElementById("AMC2");
const FL = document.getElementById("FL");
const FL2 = document.getElementById("FL2");
const CMR = document.getElementById("CMR");
const CMR2 = document.getElementById("CMR2");
const CML = document.getElementById("CML");
const CML2 = document.getElementById("CML2");
const DR = document.getElementById("DR");
const DR2 = document.getElementById("DR2");
const DCR = document.getElementById("DCR");
const DCR2 = document.getElementById("DCR2");
const DCL = document.getElementById("DCL");
const DCL2 = document.getElementById("DCL2");
const DL = document.getElementById("DL");
const DL2 = document.getElementById("DL2");
const GK = document.getElementById("GK");
const GK2 = document.getElementById("GK2");
const smallpic = document.getElementById("smallpic");
const sideModal = document.querySelector(".side-modal")

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear === "4") {
        STC.textContent = "Benzema";
        FR.textContent = "Ribery";
        AMC.textContent = "Griezmann";
        FL.textContent = "Mbappe";
        CMR.textContent = "Pogba";
        CML.textContent = "Kante";
        DR.textContent = "Sagna";
        DCR.textContent = "Varane";
        DCL.textContent = "Koscielny";
        DL.textContent = "Evra";
        GK.textContent = "Lloris";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/france.webp"

        MainFetchPopUp("/football/past/nations/json/france.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The France national football team, founded in 1904, is celebrated for winning two FIFA World Cups and two UEFA European Championships. Led by iconic players like Zinedine Zidane and Thierry Henry, Les Bleus are known for their strong defense and attacking flair, making them a global football powerhouse."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "2") {
        STC.textContent = "Neymar";
        FR.textContent = "Hulk";
        AMC.textContent = "Kaka";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Casemiro";
        CML.textContent = "Fernandinho";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Marquinhos";
        DL.textContent = "Marcelo";
        GK.textContent = "Alisson";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/brazil.webp"

        MainFetchPopUp("/football/past/nations/json/brazil.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Brazil national football team, founded in 1914, is one of the most successful in history, winning five FIFA World Cups. Known for its attacking flair, it has produced legendary players like Pelé, Ronaldo, and Neymar, making it an iconic force in international football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "9") {

        STC.textContent = "F Torres";
        FR.textContent = "D Silva";
        AMC.textContent = "Iniesta";
        FL.textContent = "D Villa";
        CMR.textContent = "Xavi";
        CML.textContent = "Busquets";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Pique";
        DL.textContent = "Alba";
        GK.textContent = "de Gea";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/spain.webp"

        MainFetchPopUp("/football/past/nations/json/spain.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Spain's national football team, from 2010 to 2020, employed the iconic tiki-taka style, securing the 2010 FIFA World Cup and the 2012 UEFA European Championship, revolutionizing football with their possession-based game."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "3") {

        STC.textContent = "Kane";
        FR.textContent = "Sterling";
        AMC.textContent = "Rooney";
        FL.textContent = "Rashford";
        CMR.textContent = "Gerrard";
        CML.textContent = "Henderson";
        DR.textContent = "Alexander-A";
        DCR.textContent = "Terry";
        DCL.textContent = "Ferdinand";
        DL.textContent = "A Cole";
        GK.textContent = "Hart";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/england.webp"

        MainFetchPopUp("/football/past/nations/json/england.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "England's national football team had a decade of ups and downs from 2010 to 2020. They showed promise in international tournaments, reaching the 2018 FIFA World Cup semi-finals, but consistency remained a challenge."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "5") {

        STC.textContent = "Muller";
        FR.textContent = "Sane";
        AMC.textContent = "Ozil";
        FL.textContent = "Reus";
        CMR.textContent = "Kroos";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Kimmich";
        DCR.textContent = "Hummels";
        DCL.textContent = "Boateng";
        DL.textContent = "Lahm";
        GK.textContent = "Neuer";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/germany.webp"

        MainFetchPopUp("/football/past/nations/json/germany.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Germany's national football team, from 2010 to 2020, experienced triumph and transition. They won the 2014 FIFA World Cup but faced challenges in later tournaments. A new generation of talent emerged, reflecting a shift in German football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "0") {
        STC.textContent = "Higuain";
        FR.textContent = "Messi";
        AMC.textContent = "Aguero";
        FL.textContent = "Di Maria";
        CMR.textContent = "Banega";
        CML.textContent = "Mascherano";
        DR.textContent = "Zabaleta";
        DCR.textContent = "Otamendi";
        DCL.textContent = "Garay";
        DL.textContent = "Tagliafico";
        GK.textContent = "E Martinez";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/argentina.webp"

        MainFetchPopUp("/football/past/nations/json/argentina.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Argentina's national football team, during 2010-2020, featured Lionel Messi's brilliance but faced World Cup heartbreaks. They ended their trophy drought by winning the 2021 Copa America, solidifying Messi's legacy and celebrating a historic victory."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "6") {

        STC.textContent = "Immobile";
        FR.textContent = "Berardi";
        AMC.textContent = "Barella";
        FL.textContent = "Insigne";
        CMR.textContent = "Verratti";
        CML.textContent = "Jorginho";
        DR.textContent = "Florenzi";
        DCR.textContent = "Bonucci";
        DCL.textContent = "Chiellini";
        DL.textContent = "Spinazzola";
        GK.textContent = "Buffon";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/italy.webp"

        MainFetchPopUp("/football/past/nations/json/italy.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Italy's national football team, from 2010 to 2020, went through a period of rebuilding. After missing the 2018 World Cup, they returned to form, winning UEFA Euro 2020, showcasing their defensive strength and tactical prowess."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "8") {
        STC.textContent = "D Jota";
        FR.textContent = "B Silva";
        AMC.textContent = "B Fernandes";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "J Moutinho";
        CML.textContent = "R Neves";
        DR.textContent = "J Cancelo";
        DCR.textContent = "Pepe";
        DCL.textContent = "R Dias";
        DL.textContent = "R Guerreiro";
        GK.textContent = "R Patricio";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/portugal.webp"

        MainFetchPopUp("/football/past/nations/json/portugal.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Portugal's national football team, from 2010 to 2020, showcased talent like Cristiano Ronaldo. They won UEFA Euro 2016 and the 2019 UEFA Nations League, establishing themselves as a competitive force in international football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "1") {
        STC.textContent = "Lukaku";
        FR.textContent = "Mertens";
        AMC.textContent = "De Bruyne";
        FL.textContent = "Hazard";
        CMR.textContent = "Tielemans";
        CML.textContent = "Witsel";
        DR.textContent = "Meunier";
        DCR.textContent = "Kompany";
        DCL.textContent = "Alderweireld";
        DL.textContent = "Vertonghen";
        GK.textContent = "Courtois";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/belgium.webp"

        MainFetchPopUp("/football/past/nations/json/belgium.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Belgium's national football team, during 2010-2020, boasted a \"golden generation\" of talent including Eden Hazard and Kevin De Bruyne. They reached the 2018 FIFA World Cup semi-finals and consistently ranked among the world's top teams."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }


    if (selectedYear === "7") {

        STC.textContent = "van Persie";
        FR.textContent = "Robben";
        AMC.textContent = "Sneijder";
        FL.textContent = "M Depay";
        CMR.textContent = "Wijnaldum";
        CML.textContent = "F de Jong";
        DR.textContent = "Dumfries";
        DCR.textContent = "van Dijk";
        DCL.textContent = "de Ligt";
        DL.textContent = "Blind";
        GK.textContent = "Cillessen";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/netherlands.webp"

        MainFetchPopUp("/football/past/nations/json/netherlands.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Netherlands' national football team, from 2010 to 2020, had a mix of success and transition. They reached the 2010 FIFA World Cup final, but struggled in subsequent tournaments before showing promise with younger talent."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    function clearAndFadeInElements() {
        const elements = [
            STC, STC2,
            FR, FR2,
            AMC, AMC2,
            FL, FL2,
            CMR, CMR2,
            CML, CML2,
            DR, DR2,
            DCR, DCR2,
            DCL, DCL2,
            DL, DL2,
            GK, GK2,
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
    // yearSelector.selectedIndex = currentIndex;

    if (selectedYear === 4) {
        STC.textContent = "Benzema";
        FR.textContent = "Ribery";
        AMC.textContent = "Griezmann";
        FL.textContent = "Mbappe";
        CMR.textContent = "Pogba";
        CML.textContent = "Kante";
        DR.textContent = "Sagna";
        DCR.textContent = "Varane";
        DCL.textContent = "Koscielny";
        DL.textContent = "Evra";
        GK.textContent = "Lloris";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/france.webp"

        MainFetchPopUp("/football/past/nations/json/france.json");

    }

    if (selectedYear === 2) {
        STC.textContent = "Neymar";
        FR.textContent = "Hulk";
        AMC.textContent = "Kaka";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Casemiro";
        CML.textContent = "Fernandinho";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Marquinhos";
        DL.textContent = "Marcelo";
        GK.textContent = "Alisson";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/brazil.webp"

        MainFetchPopUp("/football/past/nations/json/brazil.json");
    }

    if (selectedYear === 9) {

        STC.textContent = "F Torres";
        FR.textContent = "D Silva";
        AMC.textContent = "Iniesta";
        FL.textContent = "D Villa";
        CMR.textContent = "Xavi";
        CML.textContent = "Busquets";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Pique";
        DL.textContent = "Alba";
        GK.textContent = "de Gea";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/spain.webp"

        MainFetchPopUp("/football/past/nations/json/spain.json");
    }

    if (selectedYear === 3) {

        STC.textContent = "Kane";
        FR.textContent = "Sterling";
        AMC.textContent = "Rooney";
        FL.textContent = "Rashford";
        CMR.textContent = "Gerrard";
        CML.textContent = "Henderson";
        DR.textContent = "Alexander-A";
        DCR.textContent = "Terry";
        DCL.textContent = "Ferdinand";
        DL.textContent = "A Cole";
        GK.textContent = "Hart";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/england.webp"

        MainFetchPopUp("/football/past/nations/json/england.json");
    }

    if (selectedYear === 5) {

        STC.textContent = "Muller";
        FR.textContent = "Sane";
        AMC.textContent = "Ozil";
        FL.textContent = "Reus";
        CMR.textContent = "Kroos";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Kimmich";
        DCR.textContent = "Hummels";
        DCL.textContent = "Boateng";
        DL.textContent = "Lahm";
        GK.textContent = "Neuer";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/germany.webp"

        MainFetchPopUp("/football/past/nations/json/germany.json");
    }

    if (selectedYear === 0) {
        STC.textContent = "Higuain";
        FR.textContent = "Messi";
        AMC.textContent = "Aguero";
        FL.textContent = "Di Maria";
        CMR.textContent = "Banega";
        CML.textContent = "Mascherano";
        DR.textContent = "Zabaleta";
        DCR.textContent = "Otamendi";
        DCL.textContent = "Garay";
        DL.textContent = "Tagliafico";
        GK.textContent = "E Martinez";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/argentina.webp"

        MainFetchPopUp("/football/past/nations/json/argentina.json");
    }

    if (selectedYear === 6) {

        STC.textContent = "Immobile";
        FR.textContent = "Berardi";
        AMC.textContent = "Barella";
        FL.textContent = "Insigne";
        CMR.textContent = "Verratti";
        CML.textContent = "Jorginho";
        DR.textContent = "Florenzi";
        DCR.textContent = "Bonucci";
        DCL.textContent = "Chiellini";
        DL.textContent = "Spinazzola";
        GK.textContent = "Buffon";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/italy.webp"

        MainFetchPopUp("/football/past/nations/json/italy.json");
    }

    if (selectedYear === 7) {
        STC.textContent = "D Jota";
        FR.textContent = "B Silva";
        AMC.textContent = "B Fernandes";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "J Moutinho";
        CML.textContent = "R Neves";
        DR.textContent = "J Cancelo";
        DCR.textContent = "Pepe";
        DCL.textContent = "R Dias";
        DL.textContent = "R Guerreiro";
        GK.textContent = "R Patricio";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/portugal.webp"

        MainFetchPopUp("/football/past/nations/json/portugal.json");
    }

    if (selectedYear === 1) {
        STC.textContent = "Lukaku";
        FR.textContent = "Mertens";
        AMC.textContent = "De Bruyne";
        FL.textContent = "Hazard";
        CMR.textContent = "Tielemans";
        CML.textContent = "Witsel";
        DR.textContent = "Meunier";
        DCR.textContent = "Kompany";
        DCL.textContent = "Alderweireld";
        DL.textContent = "Vertonghen";
        GK.textContent = "Courtois";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/belgium.webp"

        MainFetchPopUp("/football/past/nations/json/belgium.json");
    }


    if (selectedYear === 8) {

        STC.textContent = "van Persie";
        FR.textContent = "Robben";
        AMC.textContent = "Sneijder";
        FL.textContent = "M Depay";
        CMR.textContent = "Wijnaldum";
        CML.textContent = "F de Jong";
        DR.textContent = "Dumfries";
        DCR.textContent = "van Dijk";
        DCL.textContent = "de Ligt";
        DL.textContent = "Blind";
        GK.textContent = "Cillessen";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/netherlands.webp"

        MainFetchPopUp("/football/past/nations/json/netherlands.json");
    }

    function clearAndFadeInElements() {
        const elements = [
            STC, STC2,
            FR, FR2,
            AMC, AMC2,
            FL, FL2,
            CMR, CMR2,
            CML, CML2,
            DR, DR2,
            DCR, DCR2,
            DCL, DCL2,
            DL, DL2,
            GK, GK2,
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

// Event listener for the back button
backButton.addEventListener('click', () => {
    console.log(selectedYear)
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