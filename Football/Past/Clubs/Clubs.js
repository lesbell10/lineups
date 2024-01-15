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
    loadFromLocalStorage();
};

// Function to create an object with image sources and paragraph texts
function getData() {
    const data = {
        selectedYear: selectedYear,
        images: {},
        paragraphs: {}
    };

    // Assuming STC2, FR2, etc. are your image elements and STC, FR, etc. are your paragraph elements
    const elements = [STC, STC2, FR, FR2, AMC, AMC2, FL, FL2, CMR, CMR2, CML, CML2, DR, DR2, DCR, DCR2, DCL, DCL2, DL, DL2, GK, GK2];
    elements.forEach(element => {
        if (element.tagName === 'IMG') {
            data.images[element.id] = element.src;
        } else if (element.tagName === 'P') {
            data.paragraphs[element.id] = element.textContent;
        }
    });

    return data;
}

// Function to save data to localStorage
function saveToLocalStorage() {
    const data = getData();
    localStorage.setItem('footballAppData', JSON.stringify(data));
}

// Function to load data from localStorage
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('footballAppData');
    if (savedData) {
        const data = JSON.parse(savedData);
        selectedYear = data.selectedYear; // Update selectedYear
        yearSelector.value = data.selectedYear;

        // Update images and paragraphs
        Object.keys(data.images).forEach(id => {
            const element = document.getElementById(id);
            if (element) element.src = data.images[id];
        });
        Object.keys(data.paragraphs).forEach(id => {
            const element = document.getElementById(id);
            if (element) element.textContent = data.paragraphs[id];
        });

        updatePlayerInfo(); // Update UI based on loaded data
    }
}

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
    saveToLocalStorage();
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

    if (selectedYear == 10) {
        STC.textContent = "Aguero";
        FR.textContent = "D Silva";
        AMC.textContent = "De Bruyne";
        FL.textContent = "Sterling";
        CMR.textContent = "Y Toure";
        CML.textContent = "Fernandinho";
        DR.textContent = "Walker";
        DCR.textContent = "Kompany";
        DCL.textContent = "Otamendi";
        DL.textContent = "Kolarov";
        GK.textContent = "Ederson";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/man city.webp";

        MainFetchPopUp("/football/past/clubs/json/manchester city.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Manchester City, from 2010 to 2020, transformed into a football powerhouse under wealthy ownership. They secured multiple Premier League title and reached the UEFA Champions League finals. The era was defined by attractive attacking football and the leadership of managers like Pep Guardiola."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Pep Guardiola"
    }

    if (selectedYear == "14") {
        STC.textContent = "Benzema";
        FR.textContent = "Bale";
        AMC.textContent = "Ozil";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Modric";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Varane";
        DL.textContent = "Marcelo";
        GK.textContent = "Courtois";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/real madrid.webp";

        MainFetchPopUp("/football/past/clubs/json/real madrid.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Real Madrid, one of the world's most iconic football clubs, experienced a decade of tremendous success from 2010 to 2020. They won numerous La Liga titles and UEFA Champions League trophies, establishing themselves as a football powerhouse."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Zinedine Zidane"
    }

    if (selectedYear == "13") {
        STC.textContent = "Ibrahimovic";
        FR.textContent = "Mbappe";
        AMC.textContent = "Neymar";
        FL.textContent = "Di Maria";
        CMR.textContent = "Verratti";
        CML.textContent = "Motta";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Marquinhos";
        DL.textContent = "Bernat";
        GK.textContent = "Navas";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/psg.webp";

        MainFetchPopUp("/football/past/clubs/json/paris saint-germain.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "During 2010-2020, Paris Saint-Germain (PSG) became a dominant force in French football, securing multiple Ligue 1 titles and domestic cups. High-profile signings like Neymar and Mbappé propelled them to international prominence."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Thomas Tuchel"
    }

    if (selectedYear == "5") {

        STC.textContent = "Lewandowski";
        FR.textContent = "Robben";
        AMC.textContent = "Muller";
        FL.textContent = "Ribery";
        CMR.textContent = "Thiago";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Lahm";
        DCR.textContent = "Hummels";
        DCL.textContent = "Boateng";
        DL.textContent = "Alaba";
        GK.textContent = "Neuer";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/bayern munich.webp";

        MainFetchPopUp("/football/past/clubs/json/bayern munich.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Bayern Munich enjoyed immense success from 2010 to 2020. The German football club clinched numerous Bundesliga titles and won the UEFA Champions League multiple times, establishing itself as a football powerhouse. Iconic players like Franck Ribéry, Arjen Robben, and Robert Lewandowski played pivotal roles in this era of dominance."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jupp Heynckes"

    }

    if (selectedYear == "9") {

        STC.textContent = "Suarez";
        FR.textContent = "Salah";
        AMC.textContent = "Coutinho";
        FL.textContent = "Mane";
        CMR.textContent = "Gerrard";
        CML.textContent = "Fabinho";
        DR.textContent = "Alexander-A";
        DCR.textContent = "van Dijk";
        DCL.textContent = "Matip";
        DL.textContent = "Robertson";
        GK.textContent = "Alisson";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/liverpool.webp";

        MainFetchPopUp("/football/past/clubs/json/liverpool.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Liverpool FC had a remarkable decade from 2010 to 2020. They won multiple Premier League titles, UEFA Champions League trophies, and domestic cups. Under the management of Jürgen Klopp, they built a formidable team known for its high-intensity pressing and attacking football, solidifying their status as a footballing giant."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jurgen Klopp"

    }

    if (selectedYear == "4") {

        STC.textContent = "Suarez";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "Neymar";
        CMR.textContent = "Xavi";
        CML.textContent = "Busquets";
        DR.textContent = "D Alves";
        DCR.textContent = "Pique";
        DCL.textContent = "Mascherano";
        DL.textContent = "Alba";
        GK.textContent = "ter Stegen";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/barcelona.webp";

        MainFetchPopUp("/football/past/clubs/json/barcelona.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "FC Barcelona experienced a decade of remarkable success from 2010 to 2020. Led by players like Lionel Messi, Xavi, and Andrés Iniesta, they won numerous La Liga titles and UEFA Champions League trophies. Their tiki-taka style of play defined an era of football dominance, making Barcelona one of the world's most admired clubs."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Pep Guardiola"
    }

    if (selectedYear == "6") {

        STC.textContent = "Drogba";
        FR.textContent = "Willian";
        AMC.textContent = "Lampard";
        FL.textContent = "E Hazard";
        CMR.textContent = "Fabregas";
        CML.textContent = "Kante";
        DR.textContent = "Azpilicueta";
        DCR.textContent = "Terry";
        DCL.textContent = "G Cahill";
        DL.textContent = "A Cole";
        GK.textContent = "Courtois";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/chelsea.webp";

        MainFetchPopUp("/football/past/clubs/json/chelsea.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Chelsea FC had a highly successful decade from 2010 to 2020. They won multiple Premier League titles and secured their first-ever UEFA Champions League in 2012. Under various managers, including José Mourinho and Antonio Conte, Chelsea remained a competitive force in English and European football, showcasing their resilience and talent."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jose Mourinho"

    }

    if (selectedYear == "11") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "van Persie";
        AMC.textContent = "Rooney";
        FL.textContent = "Di Maria";
        CMR.textContent = "Pogba";
        CML.textContent = "Carrick";
        DR.textContent = "Valencia";
        DCR.textContent = "Ferdinand";
        DCL.textContent = "Vidic";
        DL.textContent = "Evra";
        GK.textContent = "De Gea";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/man utd.webp";

        MainFetchPopUp("/football/past/clubs/json/manchester united.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Manchester United experienced a decade of transition and challenges from 2010 to 2020. After the retirement of Sir Alex Ferguson, the club went through several managerial changes. While they won domestic cups and a UEFA Europa League title, they sought to recapture their past glory in the Premier League and the UEFA Champions League."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Sir Alex Ferguson"

    }

    if (selectedYear == "8") {
        STC.textContent = "Higuain";
        FR.textContent = "Do Costa";
        AMC.textContent = "Dybala";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Pjanic";
        CML.textContent = "Pirlo";
        DR.textContent = "Cuadrado";
        DCR.textContent = "Bonucci";
        DCL.textContent = "Chiellini";
        DL.textContent = "A Sandro";
        GK.textContent = "Buffon";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/juventus.webp";

        MainFetchPopUp("/football/past/clubs/json/juventus.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Juventus FC dominated Italian football during the 2010-2020 decade, winning numerous Serie A titles consecutively. They also reached UEFA Champions League finals but fell short. Key signings like Cristiano Ronaldo bolstered their squad, making Juventus a formidable force domestically and a prominent club in European competitions."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Antonio Conte"
    }

    if (selectedYear == "1") {
        STC.textContent = "van Persie";
        FR.textContent = "A Sanchez";
        AMC.textContent = "Ozil";
        FL.textContent = "Aubameyang";
        CMR.textContent = "Cazorla";
        CML.textContent = "Xhaka";
        DR.textContent = "Sagna";
        DCR.textContent = "Koscielny";
        DCL.textContent = "Mustafi";
        DL.textContent = "Monreal";
        GK.textContent = "Cech";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/arsenal.webp";

        MainFetchPopUp("/football/past/clubs/json/arsenal.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Arsenal FC experienced a period of ups and downs from 2010 to 2020. They won FA Cups and Community Shields, but their Premier League title drought continued. Under Arsène Wenger and later Unai Emery, they showcased attractive football but faced inconsistency. Arsenal fans hoped for a return to the club's former glory during this time."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Arsene Wenger"
    }

    if (selectedYear == "7") {
        STC.textContent = "D Milito";
        FR.textContent = "A Sanchez";
        AMC.textContent = "Sneijder";
        FL.textContent = "Perisic";
        CMR.textContent = "Nainggolan";
        CML.textContent = "Cambiasso";
        DR.textContent = "Maicon";
        DCR.textContent = "Skriniar";
        DCL.textContent = "de Vrij";
        DL.textContent = "Chivu";
        GK.textContent = "Handanovic";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/inter milan.webp";

        MainFetchPopUp("/football/past/clubs/json/inter milan.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Inter Milan's 2010-2020 decade featured a historic treble-winning season under José Mourinho in 2010, but they encountered domestic struggles in Serie A during the rest of the decade, aiming to regain their former prominence."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jose Mourinho"
    }

    if (selectedYear == "3") {
        STC.textContent = "Falcao";
        FR.textContent = "Carrasco";
        AMC.textContent = "Griezmann";
        FL.textContent = "Turan";
        CMR.textContent = "Koke";
        CML.textContent = "Saul";
        DR.textContent = "Juanfran";
        DCR.textContent = "Godin";
        DCL.textContent = "Miranda";
        DL.textContent = "F Luis";
        GK.textContent = "Oblak";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/atletico madrid.webp";

        MainFetchPopUp("/football/past/clubs/json/atletico madrid.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Atletico Madrid had a remarkable decade from 2010 to 2020. Under Diego Simeone's management, they won La Liga, reached UEFA Champions League finals, and became known for their disciplined, defensively sound style of play, establishing themselves as a top European club."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Diego Simeone"
    }

    if (selectedYear == "0") {
        STC.textContent = "Ibrahimovic";
        FR.textContent = "Cassano";
        AMC.textContent = "Kaka";
        FL.textContent = "Robinho";
        CMR.textContent = "Seedorf";
        CML.textContent = "Pirlo";
        DR.textContent = "Abate";
        DCR.textContent = "T Silva";
        DCL.textContent = "Nesta";
        DL.textContent = "Antonini";
        GK.textContent = "Abbiati";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/ac milan.webp";

        MainFetchPopUp("/football/past/clubs/json/ac milan.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "AC Milan had a mixed decade from 2010 to 2020. While they faced financial struggles and a decline in Serie A performance, the club showed occasional flashes of their historic prowess, winning the 2010-2011 Serie A title and domestic cups."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Massimiliano Allegri"
    }

    if (selectedYear == "12") {
        STC.textContent = "Cavani";
        FR.textContent = "Mertens";
        AMC.textContent = "Hamsik";
        FL.textContent = "Insigne";
        CMR.textContent = "Allan";
        CML.textContent = "Jorginho";
        DR.textContent = "Maggio";
        DCR.textContent = "Koulibaly";
        DCL.textContent = "R Albiol";
        DL.textContent = "Ghoulam";
        GK.textContent = "P Reina";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/napoli.webp";

        MainFetchPopUp("/football/past/clubs/json/napoli.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Napoli had an eventful decade from 2010 to 2020. Under the management of Maurizio Sarri, they played exciting attacking football and won a Coppa Italia and a Supercoppa Italiana. Their passionate fan base and talented squad made them a competitive force in Serie A."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Maurizio Sarri"
    }

    if (selectedYear == "15") {
        STC.textContent = "Kane";
        FR.textContent = "van der Vaart";
        AMC.textContent = "Eriksen";
        FL.textContent = "HM Son";
        CMR.textContent = "Modric";
        CML.textContent = "M Dembele";
        DR.textContent = "Walker";
        DCR.textContent = "Alderweireld";
        DCL.textContent = "Vertonghen";
        DL.textContent = "D Rose";
        GK.textContent = "Lloris";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/tottenham.webp";

        MainFetchPopUp("/football/past/clubs/json/tottenham.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Tottenham Hotspur had a transformative decade from 2010 to 2020. Under Mauricio Pochettino's management, they became top-four contenders in the Premier League and reached the UEFA Champions League final in 2019, though they didn't secure a trophy during this period.."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Maurici Pochetino"
    }

    if (selectedYear == "2") {

        STC.textContent = "Dzeko";
        FR.textContent = "Mkhitaryan";
        AMC.textContent = "Totti";
        FL.textContent = "El Shaarawy";
        CMR.textContent = "Pjanic";
        CML.textContent = "De Rossi";
        DR.textContent = "Florenzi";
        DCR.textContent = "Smalling";
        DCL.textContent = "Manolas";
        DL.textContent = "Kolarov";
        GK.textContent = "Szczesny";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/as roma.webp";

        MainFetchPopUp("/football/past/clubs/json/as roma.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "AS Roma experienced a decade of competitiveness in Serie A from 2010 to 2020. While they didn't win the league title, they consistently contended for a top-four finish and featured in European competitions, showcasing their commitment to excellence in Italian football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Luciano Spalletti"
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

// Initial update based on the default year (2020)
updatePlayerInfo();


const backButton = document.getElementById('backButton');
const forwardButton = document.getElementById('forwardButton');

// Initialize the current index to 0
let currentIndex = 0;

// Function to update the dropdown based on the currentIndex
const updateDropdown = () => {
    // yearSelector.selectedIndex = currentIndex;

    if (selectedYear == 10) {
        STC.textContent = "Aguero";
        FR.textContent = "D Silva";
        AMC.textContent = "De Bruyne";
        FL.textContent = "Sterling";
        CMR.textContent = "Y Toure";
        CML.textContent = "Fernandinho";
        DR.textContent = "Walker";
        DCR.textContent = "Kompany";
        DCL.textContent = "Otamendi";
        DL.textContent = "Kolarov";
        GK.textContent = "Ederson";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/man city.webp";

        MainFetchPopUp("/football/past/clubs/json/manchester city.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Manchester City, from 2010 to 2020, transformed into a football powerhouse under wealthy ownership. They secured multiple Premier League title and reached the UEFA Champions League finals. The era was defined by attractive attacking football and the leadership of managers like Pep Guardiola."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Pep Guardiola"
    }

    if (selectedYear == "14") {
        STC.textContent = "Benzema";
        FR.textContent = "Bale";
        AMC.textContent = "Ozil";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Modric";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Varane";
        DL.textContent = "Marcelo";
        GK.textContent = "Courtois";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/real madrid.webp";

        MainFetchPopUp("/football/past/clubs/json/real madrid.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Real Madrid, one of the world's most iconic football clubs, experienced a decade of tremendous success from 2010 to 2020. They won numerous La Liga titles and UEFA Champions League trophies, establishing themselves as a football powerhouse."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Zinedine Zidane"
    }

    if (selectedYear == "13") {
        STC.textContent = "Ibrahimovic";
        FR.textContent = "Mbappe";
        AMC.textContent = "Neymar";
        FL.textContent = "Di Maria";
        CMR.textContent = "Verratti";
        CML.textContent = "Motta";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Marquinhos";
        DL.textContent = "Bernat";
        GK.textContent = "Navas";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/psg.webp";

        MainFetchPopUp("/football/past/clubs/json/paris saint-germain.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "During 2010-2020, Paris Saint-Germain (PSG) became a dominant force in French football, securing multiple Ligue 1 titles and domestic cups. High-profile signings like Neymar and Mbappé propelled them to international prominence."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Thomas Tuchel"
    }

    if (selectedYear == "5") {

        STC.textContent = "Lewandowski";
        FR.textContent = "Robben";
        AMC.textContent = "Muller";
        FL.textContent = "Ribery";
        CMR.textContent = "Thiago";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Lahm";
        DCR.textContent = "Hummels";
        DCL.textContent = "Boateng";
        DL.textContent = "Alaba";
        GK.textContent = "Neuer";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/bayern munich.webp";

        MainFetchPopUp("/football/past/clubs/json/bayern munich.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Bayern Munich enjoyed immense success from 2010 to 2020. The German football club clinched numerous Bundesliga titles and won the UEFA Champions League multiple times, establishing itself as a football powerhouse. Iconic players like Franck Ribéry, Arjen Robben, and Robert Lewandowski played pivotal roles in this era of dominance."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jupp Heynckes"

    }

    if (selectedYear == "9") {

        STC.textContent = "Suarez";
        FR.textContent = "Salah";
        AMC.textContent = "Coutinho";
        FL.textContent = "Mane";
        CMR.textContent = "Gerrard";
        CML.textContent = "Fabinho";
        DR.textContent = "Alexander-A";
        DCR.textContent = "van Dijk";
        DCL.textContent = "Matip";
        DL.textContent = "Robertson";
        GK.textContent = "Alisson";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/liverpool.webp";

        MainFetchPopUp("/football/past/clubs/json/liverpool.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Liverpool FC had a remarkable decade from 2010 to 2020. They won multiple Premier League titles, UEFA Champions League trophies, and domestic cups. Under the management of Jürgen Klopp, they built a formidable team known for its high-intensity pressing and attacking football, solidifying their status as a footballing giant."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jurgen Klopp"

    }

    if (selectedYear == "4") {

        STC.textContent = "Suarez";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "Neymar";
        CMR.textContent = "Xavi";
        CML.textContent = "Busquets";
        DR.textContent = "D Alves";
        DCR.textContent = "Pique";
        DCL.textContent = "Mascherano";
        DL.textContent = "Alba";
        GK.textContent = "ter Stegen";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/barcelona.webp";

        MainFetchPopUp("/football/past/clubs/json/barcelona.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "FC Barcelona experienced a decade of remarkable success from 2010 to 2020. Led by players like Lionel Messi, Xavi, and Andrés Iniesta, they won numerous La Liga titles and UEFA Champions League trophies. Their tiki-taka style of play defined an era of football dominance, making Barcelona one of the world's most admired clubs."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Pep Guardiola"
    }

    if (selectedYear == "6") {

        STC.textContent = "Drogba";
        FR.textContent = "Willian";
        AMC.textContent = "Lampard";
        FL.textContent = "E Hazard";
        CMR.textContent = "Fabregas";
        CML.textContent = "Kante";
        DR.textContent = "Azpilicueta";
        DCR.textContent = "Terry";
        DCL.textContent = "G Cahill";
        DL.textContent = "A Cole";
        GK.textContent = "Courtois";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/chelsea.webp";

        MainFetchPopUp("/football/past/clubs/json/chelsea.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Chelsea FC had a highly successful decade from 2010 to 2020. They won multiple Premier League titles and secured their first-ever UEFA Champions League in 2012. Under various managers, including José Mourinho and Antonio Conte, Chelsea remained a competitive force in English and European football, showcasing their resilience and talent."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jose Mourinho"

    }

    if (selectedYear == "11") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "van Persie";
        AMC.textContent = "Rooney";
        FL.textContent = "Di Maria";
        CMR.textContent = "Pogba";
        CML.textContent = "Carrick";
        DR.textContent = "Valencia";
        DCR.textContent = "Ferdinand";
        DCL.textContent = "Vidic";
        DL.textContent = "Evra";
        GK.textContent = "De Gea";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/man utd.webp";

        MainFetchPopUp("/football/past/clubs/json/manchester united.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Manchester United experienced a decade of transition and challenges from 2010 to 2020. After the retirement of Sir Alex Ferguson, the club went through several managerial changes. While they won domestic cups and a UEFA Europa League title, they sought to recapture their past glory in the Premier League and the UEFA Champions League."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Sir Alex Ferguson"

    }

    if (selectedYear == "8") {
        STC.textContent = "Higuain";
        FR.textContent = "Do Costa";
        AMC.textContent = "Dybala";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Pjanic";
        CML.textContent = "Pirlo";
        DR.textContent = "Cuadrado";
        DCR.textContent = "Bonucci";
        DCL.textContent = "Chiellini";
        DL.textContent = "A Sandro";
        GK.textContent = "Buffon";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/juventus.webp";

        MainFetchPopUp("/football/past/clubs/json/juventus.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Juventus FC dominated Italian football during the 2010-2020 decade, winning numerous Serie A titles consecutively. They also reached UEFA Champions League finals but fell short. Key signings like Cristiano Ronaldo bolstered their squad, making Juventus a formidable force domestically and a prominent club in European competitions."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Antonio Conte"
    }

    if (selectedYear == "1") {
        STC.textContent = "van Persie";
        FR.textContent = "A Sanchez";
        AMC.textContent = "Ozil";
        FL.textContent = "Aubameyang";
        CMR.textContent = "Cazorla";
        CML.textContent = "Xhaka";
        DR.textContent = "Sagna";
        DCR.textContent = "Koscielny";
        DCL.textContent = "Mustafi";
        DL.textContent = "Monreal";
        GK.textContent = "Cech";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/arsenal.webp";

        MainFetchPopUp("/football/past/clubs/json/arsenal.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Arsenal FC experienced a period of ups and downs from 2010 to 2020. They won FA Cups and Community Shields, but their Premier League title drought continued. Under Arsène Wenger and later Unai Emery, they showcased attractive football but faced inconsistency. Arsenal fans hoped for a return to the club's former glory during this time."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Arsene Wenger"
    }

    if (selectedYear == "7") {
        STC.textContent = "D Milito";
        FR.textContent = "A Sanchez";
        AMC.textContent = "Sneijder";
        FL.textContent = "Perisic";
        CMR.textContent = "Nainggolan";
        CML.textContent = "Cambiasso";
        DR.textContent = "Maicon";
        DCR.textContent = "Skriniar";
        DCL.textContent = "de Vrij";
        DL.textContent = "Chivu";
        GK.textContent = "Handanovic";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/inter milan.webp";

        MainFetchPopUp("/football/past/clubs/json/inter milan.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Inter Milan's 2010-2020 decade featured a historic treble-winning season under José Mourinho in 2010, but they encountered domestic struggles in Serie A during the rest of the decade, aiming to regain their former prominence."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jose Mourinho"
    }

    if (selectedYear == "3") {
        STC.textContent = "Falcao";
        FR.textContent = "Carrasco";
        AMC.textContent = "Griezmann";
        FL.textContent = "Turan";
        CMR.textContent = "Koke";
        CML.textContent = "Saul";
        DR.textContent = "Juanfran";
        DCR.textContent = "Godin";
        DCL.textContent = "Miranda";
        DL.textContent = "F Luis";
        GK.textContent = "Oblak";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/atletico madrid.webp";

        MainFetchPopUp("/football/past/clubs/json/atletico madrid.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Atletico Madrid had a remarkable decade from 2010 to 2020. Under Diego Simeone's management, they won La Liga, reached UEFA Champions League finals, and became known for their disciplined, defensively sound style of play, establishing themselves as a top European club."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Diego Simeone"
    }

    if (selectedYear == "0") {
        STC.textContent = "Ibrahimovic";
        FR.textContent = "Cassano";
        AMC.textContent = "Kaka";
        FL.textContent = "Robinho";
        CMR.textContent = "Seedorf";
        CML.textContent = "Pirlo";
        DR.textContent = "Abate";
        DCR.textContent = "T Silva";
        DCL.textContent = "Nesta";
        DL.textContent = "Antonini";
        GK.textContent = "Abbiati";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/ac milan.webp";

        MainFetchPopUp("/football/past/clubs/json/ac milan.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "AC Milan had a mixed decade from 2010 to 2020. While they faced financial struggles and a decline in Serie A performance, the club showed occasional flashes of their historic prowess, winning the 2010-2011 Serie A title and domestic cups."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Massimiliano Allegri"
    }

    if (selectedYear == "12") {
        STC.textContent = "Cavani";
        FR.textContent = "Mertens";
        AMC.textContent = "Hamsik";
        FL.textContent = "Insigne";
        CMR.textContent = "Allan";
        CML.textContent = "Jorginho";
        DR.textContent = "Maggio";
        DCR.textContent = "Koulibaly";
        DCL.textContent = "R Albiol";
        DL.textContent = "Ghoulam";
        GK.textContent = "P Reina";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/napoli.webp";

        MainFetchPopUp("/football/past/clubs/json/napoli.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Napoli had an eventful decade from 2010 to 2020. Under the management of Maurizio Sarri, they played exciting attacking football and won a Coppa Italia and a Supercoppa Italiana. Their passionate fan base and talented squad made them a competitive force in Serie A."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Maurizio Sarri"
    }

    if (selectedYear == "15") {
        STC.textContent = "Kane";
        FR.textContent = "van der Vaart";
        AMC.textContent = "Eriksen";
        FL.textContent = "HM Son";
        CMR.textContent = "Modric";
        CML.textContent = "M Dembele";
        DR.textContent = "Walker";
        DCR.textContent = "Alderweireld";
        DCL.textContent = "Vertonghen";
        DL.textContent = "D Rose";
        GK.textContent = "Lloris";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/tottenham.webp";

        MainFetchPopUp("/football/past/clubs/json/tottenham.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Tottenham Hotspur had a transformative decade from 2010 to 2020. Under Mauricio Pochettino's management, they became top-four contenders in the Premier League and reached the UEFA Champions League final in 2019, though they didn't secure a trophy during this period.."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Maurici Pochetino"
    }

    if (selectedYear == "2") {

        STC.textContent = "Dzeko";
        FR.textContent = "Mkhitaryan";
        AMC.textContent = "Totti";
        FL.textContent = "El Shaarawy";
        CMR.textContent = "Pjanic";
        CML.textContent = "De Rossi";
        DR.textContent = "Florenzi";
        DCR.textContent = "Smalling";
        DCL.textContent = "Manolas";
        DL.textContent = "Kolarov";
        GK.textContent = "Szczesny";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/as roma.webp";

        MainFetchPopUp("/football/past/clubs/json/as roma.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "AS Roma experienced a decade of competitiveness in Serie A from 2010 to 2020. While they didn't win the league title, they consistently contended for a top-four finish and featured in European competitions, showcasing their commitment to excellence in Italian football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Luciano Spalletti"
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