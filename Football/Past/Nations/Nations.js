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
const containers = document.querySelectorAll(".carousel-item");
const coach = document.querySelector(".coach");
const msgLabel = document.querySelector(".label");

window.onload = function () {
    yearSelector.selectedIndex = 0;

};



yearSelector.addEventListener("change", () => {
    updatePlayerInfo();

});




let previousValue = msgLabel.textContent

yearSelector.addEventListener('mouseover', function () {
    msgLabel.textContent = "You can use keyboard to switch"
    msgLabel.style.maxWidth = "325px"
    msgLabel.style.minWidth = "130px"
    msgLabel.style.fontSize = "19px"
    msgLabel.style.fontWeight = "normal"
});

yearSelector.addEventListener('mouseout', function () {
    msgLabel.textContent = `${previousValue}`
    msgLabel.style.maxWidth = "130px"
    msgLabel.style.fontSize = "21px"
    msgLabel.style.fontWeight = "bold"
});

// Function to handle mouseover
const handleMouseover = (event) => {
    // Find the image and paragraph within the container
    const img = event.currentTarget.querySelector("img");
    const p = event.currentTarget.querySelector("p");

    // Modify the image
    img.style.height = "21%";
    img.style.transform = "translateY(-32%)";

    // Modify the paragraph
    p.style.scale = "1.3";
    p.style.transform = "translateY(10px) translateX(15px)";
};

// Function to handle mouseout
const handleMouseout = (event) => {
    const img = event.currentTarget.querySelector("img");
    const p = event.currentTarget.querySelector("p");

    // Reset image styles
    img.style.height = ""; // Reset to original or specify a new value
    img.style.transform = ""; // Reset to original or specify a new value

    // Reset paragraph styles
    p.style.scale = "1";
    p.style.transform = "";
    p.style.transform = "";
};

// Add mouseover and mouseout event listeners to each container
containers.forEach(container => {
    container.addEventListener("mouseover", handleMouseover);
    container.addEventListener("mouseout", handleMouseout);
});

yearSelector.addEventListener('mouseenter', () => {
    yearSelector.focus();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear == "4") {
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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/france.webp"

        MainFetchPopUp("/Football/Past/nations/json/france.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "During 2010-2020, France's national team, boasting talents like Antoine Griezmann and Kylian Mbappé, displayed tactical finesse and attacking flair. They won the 2018 World Cup and reached the 2016 Euro final, showcasing their dominance."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Didier Deschamps"
    }

    if (selectedYear == "2") {
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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/brazil.webp"

        MainFetchPopUp("/Football/Past/nations/json/brazil.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Between 2010 and 2020, Brazil's national team showcased Neymar and Dani Alves, combining traditional flair with tactical strength. Winners of the 2013 Confederations Cup, they were also formidable contenders in the 2014 and 2018 World Cups."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Tite"
    }

    if (selectedYear == "9") {

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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/spain.webp"

        MainFetchPopUp("/Football/Past/nations/json/spain.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Spain's national football team, from 2010 to 2020, employed the iconic tiki-taka style, securing the 2010 FIFA World Cup and the 2012 UEFA European Championship, revolutionizing football with their possession-based game."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Vicente del Bosque"
    }

    if (selectedYear == "3") {

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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/england.webp"

        MainFetchPopUp("/Football/Past/nations/json/england.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "England's national football team had a decade of ups and downs from 2010 to 2020. They showed promise in international tournaments, reaching the 2018 FIFA World Cup semi-finals, but consistency remained a challenge."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Gareth Southgate"
    }

    if (selectedYear == "5") {

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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/germany.webp"

        MainFetchPopUp("/Football/Past/nations/json/germany.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Germany's national football team, from 2010 to 2020, experienced triumph and transition. They won the 2014 FIFA World Cup but faced challenges in later tournaments. A new generation of talent emerged, reflecting a shift in German football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Joachim Low"
    }

    if (selectedYear == "0") {
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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/argentina.webp"

        MainFetchPopUp("/Football/Past/nations/json/argentina.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Argentina national team from 2010 to 2020 was known for its technical skill and attacking prowess. Key players like Lionel Messi and Sergio Agüero led the team. They reached the 2014 World Cup final. Their style was characterized by creative playmaking and solid defense, making them a formidable opponent on the international stage."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Alejandro Sabella"
    }

    if (selectedYear == "6") {

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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/italy.webp"

        MainFetchPopUp("/Football/Past/nations/json/italy.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Italy's national football team, from 2010 to 2020, went through a period of rebuilding. After missing the 2018 World Cup, they returned to form, winning UEFA Euro 2020, showcasing their defensive strength and tactical prowess."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Cesare Prandelli"
    }

    if (selectedYear == "8") {
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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/portugal.webp"

        MainFetchPopUp("/Football/Past/nations/json/portugal.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Portugal's national football team, from 2010 to 2020, showcased talent like Cristiano Ronaldo. They won UEFA Euro 2016 and the 2019 UEFA Nations League, establishing themselves as a competitive force in international football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Fernando Santos"

    }

    if (selectedYear == "1") {
        STC.textContent = "Lukaku";
        FR.textContent = "Mertens";
        AMC.textContent = "De Bruyne";
        FL.textContent = "E Hazard";
        CMR.textContent = "Tielemans";
        CML.textContent = "Witsel";
        DR.textContent = "Meunier";
        DCR.textContent = "Kompany";
        DCL.textContent = "Alderweireld";
        DL.textContent = "Vertonghen";
        GK.textContent = "Courtois";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/belgium.webp"

        MainFetchPopUp("/Football/Past/nations/json/belgium.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Belgium's national football team, during 2010-2020, boasted a \"golden generation\" of talent including Eden Hazard and Kevin De Bruyne. They reached the 2018 FIFA World Cup semi-finals and consistently ranked among the world's top teams."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Roberto Martinez"

    }


    if (selectedYear == "7") {

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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/netherlands.webp"

        MainFetchPopUp("/Football/Past/nations/json/netherlands.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Netherlands' national football team, from 2010 to 2020, had a mix of success and transition. They reached the 2010 FIFA World Cup final, but struggled in subsequent tournaments before showing promise with younger talent."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Louis van Gaal"
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

document.addEventListener('DOMContentLoaded', function () {

    // Load the previously selected value from localStorage
    const selectedValue = localStorage.getItem('selectedDropdownValue');
    if (selectedValue) {
        yearSelector.value = selectedValue;
    }

    yearSelector.addEventListener('change', function (event) {
        localStorage.setItem('selectedDropdownValue', yearSelector.value);
        updatePlayerInfo();
    });
});

// Initial update based on the default year (2020)
updatePlayerInfo();


const backButton = document.getElementById('backButton');
const forwardButton = document.getElementById('forwardButton');

// Initialize the current index to 0
let currentIndex = 0;

// Function to update the dropdown based on the currentIndex
const updateDropdown = () => {
    // yearSelector.selectedIndex = currentIndex;

    if (selectedYear == "4") {
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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/france.webp"

        MainFetchPopUp("/Football/Past/nations/json/france.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The France national football team, founded in 1904, is celebrated for winning two FIFA World Cups and two UEFA European Championships. Led by iconic players like Zinedine Zidane and Thierry Henry, Les Bleus are known for their strong defense and attacking flair, making them a global football powerhouse."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Didier Deschamps"
    }

    if (selectedYear == "2") {
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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/brazil.webp"

        MainFetchPopUp("/Football/Past/nations/json/brazil.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Brazil national football team, founded in 1914, is one of the most successful in history, winning five FIFA World Cups. Known for its attacking flair, it has produced legendary players like Pelé, Ronaldo, and Neymar, making it an iconic force in international football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Tite"
    }

    if (selectedYear == "9") {

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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/spain.webp"

        MainFetchPopUp("/Football/Past/nations/json/spain.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Spain's national football team, from 2010 to 2020, employed the iconic tiki-taka style, securing the 2010 FIFA World Cup and the 2012 UEFA European Championship, revolutionizing football with their possession-based game."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Vicente del Bosque"
    }

    if (selectedYear == "3") {

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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/england.webp"

        MainFetchPopUp("/Football/Past/nations/json/england.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "England's national football team had a decade of ups and downs from 2010 to 2020. They showed promise in international tournaments, reaching the 2018 FIFA World Cup semi-finals, but consistency remained a challenge."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Gareth Southgate"
    }

    if (selectedYear == "5") {

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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/germany.webp"

        MainFetchPopUp("/Football/Past/nations/json/germany.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Germany's national football team, from 2010 to 2020, experienced triumph and transition. They won the 2014 FIFA World Cup but faced challenges in later tournaments. A new generation of talent emerged, reflecting a shift in German football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Joachim Low"
    }

    if (selectedYear == "0") {
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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/argentina.webp"

        MainFetchPopUp("/Football/Past/nations/json/argentina.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Argentina's national football team, during 2010-2020, featured Lionel Messi's brilliance but faced World Cup heartbreaks. They ended their trophy drought by winning the 2021 Copa America, solidifying Messi's legacy and celebrating a historic victory."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Alejandro Sabella"
    }

    if (selectedYear == "6") {

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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/italy.webp"

        MainFetchPopUp("/Football/Past/nations/json/italy.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Italy's national football team, from 2010 to 2020, went through a period of rebuilding. After missing the 2018 World Cup, they returned to form, winning UEFA Euro 2020, showcasing their defensive strength and tactical prowess."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Cesare Prandelli"
    }

    if (selectedYear == "8") {
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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/portugal.webp"

        MainFetchPopUp("/Football/Past/nations/json/portugal.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Portugal's national football team, from 2010 to 2020, showcased talent like Cristiano Ronaldo. They won UEFA Euro 2016 and the 2019 UEFA Nations League, establishing themselves as a competitive force in international football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Fernando Santos"

    }

    if (selectedYear == "1") {
        STC.textContent = "Lukaku";
        FR.textContent = "Mertens";
        AMC.textContent = "De Bruyne";
        FL.textContent = "E Hazard";
        CMR.textContent = "Tielemans";
        CML.textContent = "Witsel";
        DR.textContent = "Meunier";
        DCR.textContent = "Kompany";
        DCL.textContent = "Alderweireld";
        DL.textContent = "Vertonghen";
        GK.textContent = "Courtois";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/belgium.webp"

        MainFetchPopUp("/Football/Past/nations/json/belgium.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Belgium's national football team, during 2010-2020, boasted a \"golden generation\" of talent including Eden Hazard and Kevin De Bruyne. They reached the 2018 FIFA World Cup semi-finals and consistently ranked among the world's top teams."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Roberto Martinez"

    }


    if (selectedYear == "7") {

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

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/netherlands.webp"

        MainFetchPopUp("/Football/Past/nations/json/netherlands.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Netherlands' national football team, from 2010 to 2020, had a mix of success and transition. They reached the 2010 FIFA World Cup final, but struggled in subsequent tournaments before showing promise with younger talent."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Louis van Gaal"
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