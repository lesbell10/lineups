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
const sideModal = document.querySelector(".side-modal");
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

// Define a function to clear local storage
const clearLocalStorage = () => {
    localStorage.clear();
    console.log('localStorage cleared after 2 hours.');
};

// Set a timeout to call the clearLocalStorage function after 2 hours (2 hours * 60 minutes per hour * 60 seconds per minute * 1000 milliseconds per second)
const timeoutInMilliseconds = 2 * 60 * 60 * 1000; // 2 hours
setTimeout(clearLocalStorage, timeoutInMilliseconds);


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

    if (selectedYear == "10") {

        STC.textContent = "Haaland";
        FR.textContent = "B Silva";
        AMC.textContent = "Foden";
        FL.textContent = "Grealish";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Rodri";
        DR.textContent = "Walker";
        DCR.textContent = "R Dias";
        DCL.textContent = "Stones";
        DL.textContent = "Gvardiol";
        GK.textContent = "Ederson";

        STC2.src = "./football/img/players/" + STC.textContent + ".webp";
        FR2.src = "./football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "./football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "./football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "./football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "./football/img/players/" + CML.textContent + ".webp";
        DR2.src = "./football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "./football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "./football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "./football/img/players/" + DL.textContent + ".webp";
        GK2.src = "./football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/man city.webp";

        MainFetchPopUp("/football/present/clubs/json/manchester city.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Pep Guardiola <br> Best Player: Erling Haaland <br> Best Ever: Sergio Aguero, David Silva, Kevin De Bruyne, Yaya Toure <br> Position Last Year: 1st in Premier League"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Pep Guardiola"

        coach.addEventListener("click", () => {
            showManagerInfo(3)
        });
    }

    if (selectedYear == "14") {

        STC.textContent = "Rodrygo";
        FR.textContent = "Valverde";
        AMC.textContent = "Bellingham";
        FL.textContent = "Vinicius Jr";
        CMR.textContent = "Kroos";
        CML.textContent = "Tchouameni";
        DR.textContent = "Carvajal";
        DCR.textContent = "E Militao";
        DCL.textContent = "Alaba";
        DL.textContent = "Camavinga";
        GK.textContent = "Kepa";

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

        MainFetchPopUp("/football/present/clubs/json/real madrid.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Carlo Ancelotti <br> Best Player: Vinicius Jr <br> Best Ever: Cristiano Ronaldo, Alfredo Di Stefano, Luka Modric, Zinedine Zidane <br> Position Last Year: 2nd in La Liga"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Carlo Ancelotti"

        coach.addEventListener("click", () => {
            showManagerInfo(5)
        });
    }

    if (selectedYear == "13") {
        STC.textContent = "G Ramos"
        FR.textContent = "O Dembele"
        AMC.textContent = "Asensio"
        FL.textContent = "Mbappe"
        CMR.textContent = "Vitinha"
        CML.textContent = "Ugarte"
        DR.textContent = "Hakimi"
        DCR.textContent = "Marquinhos"
        DCL.textContent = "Skriniar"
        DL.textContent = "L Hernandez"
        GK.textContent = "Donnarumma"

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

        MainFetchPopUp("/football/present/clubs/json/paris saint-germain.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Luis Enrique <br> Best Player: Kylian Mbappe <br> Best Ever: Thiago Silva, Zlatan Ibrahimovic, Edinson Cavani, Ronaldinho <br> Position Last Year: 1st in Ligue 1"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Luis Enrique"

        coach.addEventListener("click", () => {
            showManagerInfo(50)
        });
    }

    if (selectedYear == "5") {

        STC.textContent = "Kane"
        FR.textContent = "Sane"
        AMC.textContent = "Musiala"
        FL.textContent = "Coman"
        CMR.textContent = "Kimmich"
        CML.textContent = "Goretzka"
        DR.textContent = "Laimer"
        DCR.textContent = "de Ligt"
        DCL.textContent = "Min J"
        DL.textContent = "A Davies"
        GK.textContent = "Neuer"

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

        MainFetchPopUp("/football/present/clubs/json/bayern munich.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Thomas Tuchel <br> Best Player: Harry Kane <br> Best Ever: Franz Beckenbauer, Robert Lewandowski, Oliver Kahn, Arjen Robben <br> Position Last Year: 1st in Bundesliga"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Thomas Tuchel"

        coach.addEventListener("click", () => {
            showManagerInfo(28)
        });

    }
    if (selectedYear == "9") {

        STC.textContent = "D Jota"
        FR.textContent = "Salah"
        AMC.textContent = "Gakpo"
        FL.textContent = "L Diaz"
        CMR.textContent = "Szoboszlai"
        CML.textContent = "Mac Allister"
        DR.textContent = "Alexander-A"
        DCR.textContent = "van Dijk"
        DCL.textContent = "Konate"
        DL.textContent = "Robertson"
        GK.textContent = "Alisson"

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

        MainFetchPopUp("/football/present/clubs/json/liverpool.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Jurgen Klopp <br> Best Player: Mohamed Salah <br> Best Ever: Michael Owen, Steven Gerrard, Jamie Carragher, Luis Suarez <br> Position Last Year: 5th in Premier League"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Jurgen Klopp"

        coach.addEventListener("click", () => {
            showManagerInfo(7)
        });

    }

    if (selectedYear == "4") {
        STC.textContent = "Lewandowski"
        FR.textContent = "Gavi"
        AMC.textContent = "Pedri"
        FL.textContent = "J Felix"
        CMR.textContent = "Gundogan"
        CML.textContent = "F de Jong"
        DR.textContent = "J Cancelo"
        DCR.textContent = "Kounde"
        DCL.textContent = "R Araujo"
        DL.textContent = "Balde"
        GK.textContent = "ter Stegen"

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

        MainFetchPopUp("/football/present/clubs/json/barcelona.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Xavi Hernandez <br> Best Player: Robert Lewandowski <br> Best Ever: Lionel Messi, Xavi Hernandez, Andres Iniesta, Ronaldinho <br> Position Last Year: 1st in La Liga"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Xavi Hernandez"

        coach.addEventListener("click", () => {
            showManagerInfo(73)
        });

    }

    if (selectedYear == "6") {
        STC.textContent = "N Jackson"
        FR.textContent = "Sterling"
        AMC.textContent = "Nkunku"
        FL.textContent = "Mudryk"
        CMR.textContent = "E Fernandez"
        CML.textContent = "Caicedo"
        DR.textContent = "R James"
        DCR.textContent = "T Silva"
        DCL.textContent = "Disasi"
        DL.textContent = "Chilwell"
        GK.textContent = "R Sanchez"

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

        MainFetchPopUp("/football/present/clubs/json/chelsea.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Mauricio Pochettino <br> Best Player: Raheem Sterling <br> Best Ever: Frank Lampard, Didier Drogba, John Terry, Petr Cech <br> Position Last Year: 12th in Premier League"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Mauricio Pochettino"

        coach.addEventListener("click", () => {
            showManagerInfo(55)
        });
    }

    if (selectedYear == "11") {
        STC.textContent = "Hojlund"
        FR.textContent = "Antony M"
        AMC.textContent = "B Fernandes"
        FL.textContent = "Rashford"
        CMR.textContent = "Eriksen"
        CML.textContent = "Casemiro"
        DR.textContent = "Dalot"
        DCR.textContent = "Varane"
        DCL.textContent = "Li Martinez"
        DL.textContent = "Shaw"
        GK.textContent = "Onana"

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

        MainFetchPopUp("/football/present/clubs/json/manchester united.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Erik ten Hag <br> Best Player: Bruno Fernandes <br> Best Ever: Cristiano Ronaldo, Wayne Rooney, Rio Ferdinand, Ryan Giggs <br> Position Last Year: 3rd in Premier League"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Erik ten Hag"

        coach.addEventListener("click", () => {
            showManagerInfo(59)
        });
    }

    if (selectedYear == "8") {
        STC.textContent = "Vlahovic"
        FR.textContent = "M Kean"
        AMC.textContent = "Chiesa"
        FL.textContent = "Kostic"
        CMR.textContent = "Locatelli"
        CML.textContent = "Rabiot"
        DR.textContent = "Danilo"
        DCR.textContent = "Bremer"
        DCL.textContent = "Gatti"
        DL.textContent = "A Sandro"
        GK.textContent = "Szczesny"

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

        MainFetchPopUp("/football/present/clubs/json/juventus.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Massimiliano Allegri <br> Best Player: Federico Chiesa <br> Best Ever: Alessandro Del Piero, Roberto Baggio, Michel Platini, Gianluigi Buffon <br> Position Last Year: 7th in Serie A"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Massimiliano Allegri"

        coach.addEventListener("click", () => {
            showManagerInfo(38)
        });

    }

    if (selectedYear == "1") {
        STC.textContent = "G Jesus"
        FR.textContent = "Saka"
        AMC.textContent = "Odegaard"
        FL.textContent = "Martinelli"
        CMR.textContent = "Partey"
        CML.textContent = "Rice"
        DR.textContent = "B White"
        DCR.textContent = "Saliba"
        DCL.textContent = "Gabriel"
        DL.textContent = "Zinchenko"
        GK.textContent = "D Raya"

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

        MainFetchPopUp("/football/present/clubs/json/arsenal.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Mikel Arteta <br> Best Player: Martin Odegaard <br> Best Ever: Thierry Henry, Tony Adams, Patrick Vieira, Ian Wright <br> Position Last Year: 2nd in Premier League"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Mikel Arteta"

        coach.addEventListener("click", () => {
            showManagerInfo(70)
        });
    }
    if (selectedYear == "7") {
        STC.textContent = "L Martinez"
        FR.textContent = "Cuadrado"
        AMC.textContent = "Mkhitaryan"
        FL.textContent = "M Thuram"
        CMR.textContent = "Barella"
        CML.textContent = "Calhanoglu"
        DR.textContent = "Pavard"
        DCR.textContent = "de Vrij"
        DCL.textContent = "Bastoni"
        DL.textContent = "Dimarco"
        GK.textContent = "Sommer"

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

        MainFetchPopUp("/football/present/clubs/json/inter milan.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Simone Inzaghi <br> Best Player: Lautaro Martinez <br> Best Ever: Giuseppe Meazza, Javier Zanetti, Ronaldo, Luis Figo <br> Position Last Year: 3rd in Serie A"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Simone Inzaghi"

        coach.addEventListener("click", () => {
            showManagerInfo(67)
        });
    }

    if (selectedYear == "3") {
        STC.textContent = "Morata"
        FR.textContent = "De Paul"
        AMC.textContent = "Griezmann"
        FL.textContent = "M Depay"
        CMR.textContent = "M Llorente"
        CML.textContent = "Koke"
        DR.textContent = "Molina"
        DCR.textContent = "Gimenez"
        DCL.textContent = "Savic"
        DL.textContent = "Hermoso"
        GK.textContent = "Oblak"

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

        MainFetchPopUp("/football/present/clubs/json/atletico madrid.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Diego Simeone <br> Best Player: Antoine Griezmann <br> Best Ever: Fernando Torres, Sergio Aguero, Koke, Antoine Griezmann <br> Position Last Year: 3rd in La Liga"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Diego Simeone"

        coach.addEventListener("click", () => {
            showManagerInfo(51)
        });

    }

    if (selectedYear == "0") {
        STC.textContent = "Giroud"
        FR.textContent = "Pulisic"
        AMC.textContent = "Loftus-C"
        FL.textContent = "R Leao"
        CMR.textContent = "Bennacer"
        CML.textContent = "Krunic"
        DR.textContent = "Calabria"
        DCR.textContent = "Tomori"
        DCL.textContent = "Kjaer"
        DL.textContent = "T Hernandez"
        GK.textContent = "Maignan"

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

        MainFetchPopUp("/football/present/clubs/json/ac milan.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Stefano Pioli <br> Best Player: Rafael Leao <br> Best Ever: Paolo Maldini, Marco van Basten, Alessandro Nesta, Kaka <br> Position Last Year: 4th in Serie A"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Stefano Pioli"

        coach.addEventListener("click", () => {
            showManagerInfo(72)
        });
    }

    if (selectedYear == "12") {
        STC.textContent = "Osimhen"
        FR.textContent = "Politano"
        AMC.textContent = "Zielinski"
        FL.textContent = "Kvaratskhelia"
        CMR.textContent = "Lobotka"
        CML.textContent = "Z Anguissa"
        DR.textContent = "Di Lorenzo"
        DCR.textContent = "Rrahmani"
        DCL.textContent = "J Jesus"
        DL.textContent = "M Rui"
        GK.textContent = "Meret"

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

        MainFetchPopUp("/football/present/clubs/json/napoli.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Walter Mazzarri <br> Best Player: Victor Osimhen <br> Best Ever: Diego Maradona, Edinson Cavani, Marek Hamsik, Gonzalo Higuain <br> Position Last Year: 1st in Serie A"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Walter Mazzarri"

        coach.addEventListener("click", () => {
            showManagerInfo(78)
        });
    }

    if (selectedYear == "15") {
        STC.textContent = "H-M Son"
        FR.textContent = "Kulusevski"
        AMC.textContent = "Maddison"
        FL.textContent = "B Johnson"
        CMR.textContent = "Hojbjerg"
        CML.textContent = "Bentancur"
        DR.textContent = "P Porro"
        DCR.textContent = "C Romero"
        DCL.textContent = "van de Ven"
        DL.textContent = "Udogie"
        GK.textContent = "Vicario"

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

        MainFetchPopUp("/football/present/clubs/json/tottenham.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Ange Postecoglou <br> Best Player: Heung-Min Son <br> Best Ever: Harry Kane, Hugo Lloris, Ledley King, Gareth Bale <br> Position Last Year: 8th in Premier League"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Ange Postecoglou"

        coach.addEventListener("click", () => {
            showManagerInfo(75)
        });
    }
    if (selectedYear == "2") {

        STC.textContent = "Lukaku"
        FR.textContent = "Aouar"
        AMC.textContent = "Dybala"
        FL.textContent = "Pellegrini"
        CMR.textContent = "R Sanches"
        CML.textContent = "Cristante"
        DR.textContent = "Karsdorp"
        DCR.textContent = "Smalling"
        DCL.textContent = "G Mancini"
        DL.textContent = "Spinazzola"
        GK.textContent = "R Patricio"

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

        MainFetchPopUp("/football/present/clubs/json/as roma.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Manager: Daniele De Rossi <br> Best Player: Paulo Dybala <br> Best Ever: Francesco Totti, Daniele De Rossi, Cafu, Antonio Cassano <br> Position Last Year: 6th in Serie A"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Jose Mourinho"

        coach.addEventListener("click", () => {
            showManagerInfo(4)
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

        smallpic.classList.add("fade-in")

        for (const element of elements) {
            element.classList.add("fade-in");
        }

        // Remove the "fade-in" class after the animation is complete
        setTimeout(function () {
            for (const element of elements) {
                element.classList.remove("fade-in");
            }
            smallpic.classList.remove("fade-in")
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

    if (selectedYear == "10") {

        STC.textContent = "Haaland";
        FR.textContent = "B Silva";
        AMC.textContent = "Foden";
        FL.textContent = "Grealish";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Rodri";
        DR.textContent = "Walker";
        DCR.textContent = "R Dias";
        DCL.textContent = "Stones";
        DL.textContent = "Gvardiol";
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

        MainFetchPopUp("/football/present/clubs/json/manchester city.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In the 2022-23 season, Manchester City demonstrated their football prowess in the Premier League.  They clinched their third consecutive Premier League title in an exhilarating title race with closest rivals Arsenal and won the champions league with Haaland being a big asset for the team"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Pep Guardiola"

        coach.addEventListener("click", () => {
            showManagerInfo(3)
        });
    }

    if (selectedYear == "14") {

        STC.textContent = "Rodrygo"
        FR.textContent = "Valverde"
        AMC.textContent = "Bellingham"
        FL.textContent = "Vinicius Jr"
        CMR.textContent = "Kroos"
        CML.textContent = "Tchouameni"
        DR.textContent = "Carvajal"
        DCR.textContent = "E Militao"
        DCL.textContent = "Alaba"
        DL.textContent = "Camavinga"
        GK.textContent = "Kepa"

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

        MainFetchPopUp("/football/present/clubs/json/real madrid.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, Real Madrid showcased their football excellence across various competitions. They secured the second position in the La Liga standings and reached the semi-finals in the champions league. Karim Benzema was top goalscorer in the league with 19 goals."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Carlo Ancelotti"

        coach.addEventListener("click", () => {
            showManagerInfo(5)
        });
    }

    if (selectedYear == "13") {
        STC.textContent = "G Ramos"
        FR.textContent = "O Dembele"
        AMC.textContent = "Asensio"
        FL.textContent = "Mbappe"
        CMR.textContent = "Vitinha"
        CML.textContent = "Ugarte"
        DR.textContent = "Hakimi"
        DCR.textContent = "Marquinhos"
        DCL.textContent = "Skriniar"
        DL.textContent = "L Hernandez"
        GK.textContent = "Donnarumma"

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

        MainFetchPopUp("/football/present/clubs/json/paris saint-germain.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, PSG secured the first position in Ligue 1, clinching their eleventh French league title. Their consistent performance throughout the season propelled them to the top of the table. Kylian Mbappé continued to shine, emerging as the team’s top scorer in the league with 29 goals."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Luis Enrique"

        coach.addEventListener("click", () => {
            showManagerInfo(50)
        });
    }

    if (selectedYear == "5") {

        STC.textContent = "Kane"
        FR.textContent = "Sane"
        AMC.textContent = "Musiala"
        FL.textContent = "Coman"
        CMR.textContent = "Kimmich"
        CML.textContent = "Goretzka"
        DR.textContent = "Laimer"
        DCR.textContent = "de Ligt"
        DCL.textContent = "Min J"
        DL.textContent = "A Davies"
        GK.textContent = "Neuer"

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

        MainFetchPopUp("/football/present/clubs/json/bayern munich.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, Bayern Munich secured the first position in the Bundesliga, clinching their 11th consecutive Bundesliga title. On March 24, 2023, Thomas Tuchel took over as the new head coach mid-season, replacing Julian Nagelsmann."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Thomas Tuchel"

        coach.addEventListener("click", () => {
            showManagerInfo(28)
        });

    }
    if (selectedYear == "9") {

        STC.textContent = "D Jota"
        FR.textContent = "Salah"
        AMC.textContent = "Gakpo"
        FL.textContent = "L Diaz"
        CMR.textContent = "Szoboszlai"
        CML.textContent = "Mac Allister"
        DR.textContent = "Alexander-A"
        DCR.textContent = "van Dijk"
        DCL.textContent = "Konate"
        DL.textContent = "Robertson"
        GK.textContent = "Alisson"

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

        MainFetchPopUp("/football/present/clubs/json/liverpool.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, Liverpool’s form was inconsistent, ruling them out of the title race. Despite an 11-game unbeaten run at the end of the season, they ultimately finished 5th, failing to qualify for the Champions League for the first time in seven years."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Jurgen Klopp"

        coach.addEventListener("click", () => {
            showManagerInfo(7)
        });

    }

    if (selectedYear == "4") {
        STC.textContent = "Lewandowski"
        FR.textContent = "J Felix"
        AMC.textContent = "Pedri"
        FL.textContent = "Gavi"
        CMR.textContent = "Gundogan"
        CML.textContent = "F de Jong"
        DR.textContent = ""
        DCR.textContent = "Kounde"
        DCL.textContent = "R Araujo"
        DL.textContent = "Balde"
        GK.textContent = "ter Stegen"

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

        MainFetchPopUp("/football/present/clubs/json/barcelona.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last season, Barcelona clinched their 27th La Liga title, their first since the 2018–19 season, with four games remaining. Barcelona entered the UEFA Champions League for the 19th consecutive season, but their journey ended in the group stage."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Xavi Hernandez"

        coach.addEventListener("click", () => {
            showManagerInfo(73)
        });

    }

    if (selectedYear == "6") {
        STC.textContent = "N Jackson"
        FR.textContent = "Sterling"
        AMC.textContent = "Nkunku"
        FL.textContent = "Mudryk"
        CMR.textContent = "E Fernandez"
        CML.textContent = "Caicedo"
        DR.textContent = "R James"
        DCR.textContent = "T Silva"
        DCL.textContent = "Disasi"
        DL.textContent = "Chilwell"
        GK.textContent = "R Sanchez"

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

        MainFetchPopUp("/football/present/clubs/json/chelsea.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last season, Chelsea’s performance was marked by inconsistency, leading to a 12th-place finish in the league table. This was the first time since 1995–96 that the team failed to secure a top-half position in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Mauricio Pochettino"

        coach.addEventListener("click", () => {
            showManagerInfo(55)
        });
    }

    if (selectedYear == "11") {
        STC.textContent = "Hojlund"
        FR.textContent = "Antony M"
        AMC.textContent = "B Fernandes"
        FL.textContent = "Rashford"
        CMR.textContent = "Eriksen"
        CML.textContent = "Casemiro"
        DR.textContent = "Dalot"
        DCR.textContent = "Varane"
        DCL.textContent = "Li Martinez"
        DL.textContent = "Shaw"
        GK.textContent = "Onana"

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

        MainFetchPopUp("/football/present/clubs/json/manchester united.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, under the management of Erik ten Hag, Manchester United finished 3rd in the league table. Cristiano Ronaldo left the club for Al Nassr, one year after rejoining from Juventus."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Erik ten Hag"

        coach.addEventListener("click", () => {
            showManagerInfo(59)
        });
    }

    if (selectedYear == "8") {
        STC.textContent = "Vlahovic"
        FR.textContent = "Chiesa"
        AMC.textContent = "Pogba"
        FL.textContent = "Kostic"
        CMR.textContent = "Locatelli"
        CML.textContent = "Rabiot"
        DR.textContent = "Danilo"
        DCR.textContent = "Bremer"
        DCL.textContent = "Gatti"
        DL.textContent = "A Sandro"
        GK.textContent = "Szczesny"

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

        MainFetchPopUp("/football/present/clubs/json/juventus.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, Juventus participated in the domestic league, finishing 7th in the table. Notably, Paul Pogba rejoined the club from Manchester United."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Massimiliano Allegri"

        coach.addEventListener("click", () => {
            showManagerInfo(38)
        });

    }

    if (selectedYear == "1") {
        STC.textContent = "G Jesus"
        FR.textContent = "Saka"
        AMC.textContent = "Odegaard"
        FL.textContent = "Martinelli"
        CMR.textContent = "Partey"
        CML.textContent = "Rice"
        DR.textContent = "B White"
        DCR.textContent = "Saliba"
        DCL.textContent = "Gabriel"
        DL.textContent = "Zinchenko"
        GK.textContent = "D Raya"

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

        MainFetchPopUp("/football/present/clubs/json/arsenal.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, under the management of Mikel Arteta, Arsenal participated in the FA Cup, EFL Cup, and UEFA Europa League. Notably, this was their 37th European campaign. Arsenal finished second in the league, securing a spot in next season’s UEFA Champions League after a six-year absence."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Mikel Arteta"

        coach.addEventListener("click", () => {
            showManagerInfo(70)
        });
    }
    if (selectedYear == "7") {
        STC.textContent = "L Martinez"
        FR.textContent = "Cuadrado"
        AMC.textContent = "Mkhitaryan"
        FL.textContent = "M Thuram"
        CMR.textContent = "Barella"
        CML.textContent = "Calhanoglu"
        DR.textContent = "Pavard"
        DCR.textContent = "de Vrij"
        DCL.textContent = "Bastoni"
        DL.textContent = "Dimarco"
        GK.textContent = "Sommer"

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

        MainFetchPopUp("/football/present/clubs/json/inter milan.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last season was a memorable one for Inter Milan. They finished third in the league, showcasing their competitive spirit. The team reached the final for the first time since 2010. Unfortunately, they were narrowly defeated 1–0 by Manchester City in the final."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Simone Inzaghi"

        coach.addEventListener("click", () => {
            showManagerInfo(67)
        });
    }

    if (selectedYear == "3") {
        STC.textContent = "Morata"
        FR.textContent = "De Paul"
        AMC.textContent = "Griezmann"
        FL.textContent = "M Depay"
        CMR.textContent = "M Llorente"
        CML.textContent = "Koke"
        DR.textContent = "Molina"
        DCR.textContent = "Gimenez"
        DCL.textContent = "Savic"
        DL.textContent = "Hermoso"
        GK.textContent = "Oblak"

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

        MainFetchPopUp("/football/present/clubs/json/atletico madrid.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last season was a significant one for Atlético Madrid. They finished third in the league. Known for their disciplined defensive approach under coach Diego Simeone, Griezmann carried their attacking play."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Diego Simeone"

        coach.addEventListener("click", () => {
            showManagerInfo(51)
        });

    }

    if (selectedYear == "0") {
        STC.textContent = "Giroud"
        FR.textContent = "Pulisic"
        AMC.textContent = "Loftus-C"
        FL.textContent = "R Leao"
        CMR.textContent = "Bennacer"
        CML.textContent = "Krunic"
        DR.textContent = "Calabria"
        DCR.textContent = "Tomori"
        DCL.textContent = "Kjaer"
        DL.textContent = "T Hernandez"
        GK.textContent = "Maignan"

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

        MainFetchPopUp("/football/present/clubs/json/ac milan.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, AC Milan finished fourth in the league, competing fiercely against other top teams. In the champions league, the team made it to the semi-finals, showcasing their European prowess."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Stefano Pioli"

        coach.addEventListener("click", () => {
            showManagerInfo(72)
        });
    }

    if (selectedYear == "12") {
        STC.textContent = "Osimhen"
        FR.textContent = "Politano"
        AMC.textContent = "Zielinski"
        FL.textContent = "Kvaratskhelia"
        CMR.textContent = "Lobotka"
        CML.textContent = "Z Anguissa"
        DR.textContent = "Di Lorenzo"
        DCR.textContent = "Rrahmani"
        DCL.textContent = "J Jesus"
        DL.textContent = "M Rui"
        GK.textContent = "Meret"

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

        MainFetchPopUp("/football/present/clubs/json/napoli.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last season was a remarkable one for SSC Napoli. They secured their third Serie A title, achieving this feat with five matches to spare. This marked their first top league title since the 1989–90 season."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Walter Mazzarri"

        coach.addEventListener("click", () => {
            showManagerInfo(78)
        });
    }

    if (selectedYear == "15") {
        STC.textContent = "H-M Son"
        FR.textContent = "Kulusevski"
        AMC.textContent = "Maddison"
        FL.textContent = "B Johnson"
        CMR.textContent = "Hojbjerg"
        CML.textContent = "Bentancur"
        DR.textContent = "P Porro"
        DCR.textContent = "C Romero"
        DCL.textContent = "van de Ven"
        DL.textContent = "Udogie"
        GK.textContent = "Vicario"

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

        MainFetchPopUp("/football/present/clubs/json/tottenham.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Tottenham's 2022-23 season wasa a difficult one. They finishedd 8th in the league and Hary Kane, who departed for Bayern Munich in th summer, netted 32 goals. Antonio Conte led the team until March 26."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Ange Postecoglou"

        coach.addEventListener("click", () => {
            showManagerInfo(75)
        });
    }
    if (selectedYear == "2") {

        STC.textContent = "Lukaku"
        FR.textContent = "Aouar"
        AMC.textContent = "Dybala"
        FL.textContent = "Pellegrini"
        CMR.textContent = "R Sanches"
        CML.textContent = "Cristante"
        DR.textContent = "Karsdorp"
        DCR.textContent = "Smalling"
        DCL.textContent = "G Mancini"
        DL.textContent = "Spinazzola"
        GK.textContent = "R Patricio"

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

        MainFetchPopUp("/football/present/clubs/json/as roma.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, Jose Mourinho led the team to a 6th place in Serie A. They were runners-up in the Europa League. Overall, Paulo Dybala netted 18 goals."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Manager: Jose Mourinho"

        coach.addEventListener("click", () => {
            showManagerInfo(4)
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

        smallpic.classList.add("fade-in")

        for (const element of elements) {
            element.classList.add("fade-in");
        }

        // Remove the "fade-in" class after the animation is complete
        setTimeout(function () {
            for (const element of elements) {
                element.classList.remove("fade-in");
            }
            smallpic.classList.remove("fade-in")
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