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
const pimg = document.querySelectorAll(".carousel-item img")
const ptext = document.querySelectorAll(".carousel-item p")
const containers = document.querySelectorAll(".carousel-item");
const coach = document.querySelector(".coach");
const msgLabel = document.querySelector(".label");

window.onload = function () {
    yearSelector.selectedIndex = 0;
    smallpic.style.scale = '.85'
    smallpic.style.left = "50px"
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

let selectedYear = 0

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear == "0") {
        STC.textContent = "Henry";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Zidane";
        FL.textContent = "Ronaldinhooooo";
        CMR.textContent = "Lampard";
        CML.textContent = "Pirlo";
        DR.textContent = "Cafu";
        DCR.textContent = "Terry";
        DCL.textContent = "Maldini";
        DL.textContent = "R Carlos";
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


        smallpic.src = "/football/img/wallpapers/zidane.jpg";

        // // FIFAFetchPopUp("./json/EveryYear_2005.json");
        MainFetchPopUp("./json/EveryYear_2004.json");
        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Zinedine Zidane, legendary French footballer, is renowned for his technical skill, playmaking, and headbutt in the 2006 World Cup final. He led France to 1998 World Cup glory and won numerous individual accolades, including three FIFA World Player of the Year awards."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jose Mourinho"
    }

    if (selectedYear == "1") {

        STC.textContent = "Henry";
        FR.textContent = "Totti";
        AMC.textContent = "Zidane";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Gerrard";
        CML.textContent = "Vieira";
        DR.textContent = "Thuram";
        DCR.textContent = "Nesta";
        DCL.textContent = "Lucio";
        DL.textContent = "Maldini";
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


        smallpic.src = "/football/img/wallpapers/gerrard.jpg";

        // // FIFAFetchPopUp("./json/EveryYear_2005.json");
        MainFetchPopUp("./json/EveryYear_2005.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Steven Gerrard is a legendary English footballer known for his loyalty to Liverpool FC. A dynamic midfielder, he captained the team and led with passion, creating iconic moments and achieving numerous honors during his illustrious career. His commitment and skill earned him a place among football's greats."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Frank Rijkaard"
    }

    if (selectedYear == "2") {
        STC.textContent = "Ronaldo";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Zidane";
        CML.textContent = "Essien";
        DR.textContent = "Cafu";
        DCR.textContent = "Ferdinand";
        DCL.textContent = "Maldini";
        DL.textContent = "A Cole";
        GK.textContent = "Casillas";

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

        smallpic.src = "/football/img/wallpapers/Ronaldo.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2006.json");
        MainFetchPopUp("./json/EveryYear_2006.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Ronaldo, a Brazilian football legend, was a prolific striker with exceptional speed, dribbling, and goal-scoring prowess. He won two FIFA World Cups and achieved success with top clubs like Barcelona, Inter Milan, and Real Madrid, leaving an indelible mark on the sport."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Fabio Capello"
    }

    if (selectedYear == "3") {
        STC.textContent = "Henry";
        FR.textContent = "Totti";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Lampard";
        CML.textContent = "Gerrard";
        DR.textContent = "Zambrotta";
        DCR.textContent = "Terry";
        DCL.textContent = "F Cannavaro";
        DL.textContent = "Abidal";
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

        smallpic.src = "/football/img/wallpapers/henry.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2007.json");
        MainFetchPopUp("./json/EveryYear_2007.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Thierry Henry, a French football icon, was a lethal forward celebrated for his speed, technique, and goal-scoring ability. He excelled with Arsenal, Barcelona, and the French national team, earning accolades as one of the greatest strikers in the sport's history."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Carlo Ancelotti"
    }

    if (selectedYear == "4") {

        STC.textContent = "Henry";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Fabregas";
        CML.textContent = "Gerrard";
        DR.textContent = "S Ramos";
        DCR.textContent = "Nesta";
        DCL.textContent = "Terry";
        DL.textContent = "Zanetti";
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

        smallpic.src = "/football/img/wallpapers/Ronaldinho.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2008.json");
        MainFetchPopUp("./json/EveryYear_2008.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Ronaldinho, a Brazilian football wizard, was known for his extraordinary dribbling, creativity, and infectious smile. He won the FIFA World Cup, Ballon d'Or, and numerous titles with Barcelona and AC Milan, captivating fans with his joyful and skillful style of play."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Sir Alex Ferguson"
    }

    if (selectedYear == "5") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "Messi";
        AMC.textContent = "Kaka";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Gerrard";
        DR.textContent = "D Alves";
        DCR.textContent = "Puyol";
        DCL.textContent = "Nesta";
        DL.textContent = "Lahm";
        GK.textContent = "Casillas";


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

        smallpic.src = "/football/img/wallpapers/Xavi.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2009.json");
        MainFetchPopUp("./json/EveryYear_2009.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Xavi Hernandez, a Spanish football maestro, was a midfield genius celebrated for his precise passing, vision, and tactical intelligence. He achieved immense success with Barcelona and the Spanish national team, epitomizing the essence of tiki-taka football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the l
        });

        coach.textContent = "Best Manager: Pep Guardiola"
    }


    if (selectedYear == "6") {
        STC.textContent = "F Torres";
        FR.textContent = "Messi";
        AMC.textContent = "Kaka";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Essien";
        DR.textContent = "D Alves";
        DCR.textContent = "Puyol";
        DCL.textContent = "Ferdinand";
        DL.textContent = "A Cole";
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

        smallpic.src = "/football/img/wallpapers/Kaka.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2010.json");
        MainFetchPopUp("./json/EveryYear_2010.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Kaka, a Brazilian football sensation, possessed incredible speed, dribbling, and scoring ability. He won the FIFA World Cup and Ballon d'Or and excelled with AC Milan and Real Madrid. Kaka's elegance and creativity made him one of football's most captivating players."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jose Mourinho"
    }

    if (selectedYear == "7") {

        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Maicon";
        DCR.textContent = "Vidic";
        DCL.textContent = "Terry";
        DL.textContent = "Evra";
        GK.textContent = "Casillas";


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

        document.getElementById("smallpic").src = "/football/img/wallpapers/Iniesta.webp";

        // FIFAFetchPopUp("./json/EveryYear_2011.json");
        MainFetchPopUp("./json/EveryYear_2011.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Andrés Iniesta, a Spanish midfield maestro, was revered for his exquisite passing, vision, and composure under pressure. He played a pivotal role in Spain's World Cup victory and enjoyed immense success with Barcelona, embodying the essence of footballing grace."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Pep Guardiola"
    }

    if (selectedYear == "8") {

        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Ozil";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Y Toure";
        DR.textContent = "D Alves";
        DCR.textContent = "Vidic";
        DCL.textContent = "Pique";
        DL.textContent = "A Cole";
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

        smallpic.src = "/football/img/wallpapers/Ozil.png";

        // FIFAFetchPopUp("./json/EveryYear_2012.json");
        MainFetchPopUp("./json/EveryYear_2012.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Mesut Özil, a German footballer, was known for his sublime playmaking skills, vision, and creativity. He played for top clubs like Real Madrid and Arsenal and contributed to Germany's success in international competitions. Özil's style mesmerized fans with his assists and football intelligence."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Roberto Di Matteo"
    }

    if (selectedYear == "9") {

        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Busquets";
        DR.textContent = "D Alves";
        DCR.textContent = "Vidic";
        DCL.textContent = "S Ramos";
        DL.textContent = "A Cole";
        GK.textContent = "Casillas";


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

        document.getElementById("smallpic").src = "/football/img/wallpapers/Rooney.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2013.json");
        MainFetchPopUp("./json/EveryYear_2013.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Wayne Rooney, an English football legend, was a versatile forward with exceptional goal-scoring ability and a fierce work ethic. He played for Manchester United and Everton, becoming England's all-time leading scorer and leaving an indelible mark on the sport."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jupp Heynckes"
    }

    if (selectedYear == "10") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Ribery";
        CMR.textContent = "Xavi";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Kompany";
        DL.textContent = "Lahm";
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

        smallpic.src = "/football/img/wallpapers/Ribery.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2014.json");
        MainFetchPopUp("./json/EveryYear_2014.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Franck Ribéry, a French football winger, was known for his incredible dribbling skills, pace, and creativity on the field. He had a successful career with clubs like Bayern Munich and Marseille and earned numerous titles and awards during his tenure in football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Carlo Ancelotti"
    }


    if (selectedYear == "11") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "Robben";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Iniesta";
        CML.textContent = "Kroos";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "S Ramos";
        DL.textContent = "Lahm";
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

        smallpic.src = "/football/img/wallpapers/Ibrahimovic.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2015.json");
        MainFetchPopUp("./json/EveryYear_2015.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Zlatan Ibrahimović, a Swedish football striker, is renowned for his towering presence, acrobatic goals, and strong personality. He's played for top clubs worldwide, including Inter Milan, Barcelona, PSG, and AC Milan, and has consistently delivered remarkable performances throughout his career."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Luis Enrique"
    }

    if (selectedYear == "12") {
        STC.textContent = "Suarez";
        FR.textContent = "Robben";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Iniesta";
        CML.textContent = "Pogba";
        DR.textContent = "Lahm";
        DCR.textContent = "T Silva";
        DCL.textContent = "S Ramos";
        DL.textContent = "Marcelo";
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

        smallpic.src = "/football/img/wallpapers/Robben.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2016.json");
        MainFetchPopUp("./json/EveryYear_2016.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Arjen Robben, a Dutch football winger, was celebrated for his exceptional dribbling, cutting inside from the right wing, and precise left-footed shots. He achieved success with clubs like Bayern Munich and Chelsea and was a key figure in the Dutch national team."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Zinedine Zidane"
    }

    if (selectedYear == "13") {

        STC.textContent = "Lewandowski";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kroos";
        DR.textContent = "D Alves";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Boateng";
        DL.textContent = "Marcelo";
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

        smallpic.src = "/football/img/wallpapers/Lewandowski.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2017.json");
        MainFetchPopUp("./json/EveryYear_2017.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Robert Lewandowski, a Polish football striker, is one of the world's premier goalscorers. Known for his clinical finishing, aerial ability, and work rate, he has excelled at Bayern Munich. Now with Barcelona, he is setting numerous records and earning awards for his prolific scoring."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Zinedine Zidane"
    }

    if (selectedYear == "14") {

        STC.textContent = "Suarez";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "Modric";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Chiellini";
        DL.textContent = "Marcelo";
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

        smallpic.src = "/football/img/wallpapers/Suarez.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2018.json");
        MainFetchPopUp("./json/EveryYear_2018.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Luis Suárez, a Uruguayan football forward, is renowned for his goal-scoring prowess and controversial incidents. He has played for top clubs like Ajax, Liverpool, Barcelona, and Atlético Madrid. Now with Inter Miami, he is consistently delivering impressive performances and winning multiple titles throughout his career."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Zinedine Zidane"
    }

    if (selectedYear == "15") {

        STC.textContent = "Suarez";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Godin";
        DL.textContent = "Marcelo";
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

        smallpic.src = "/football/img/wallpapers/Neymar.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2019.json");
        MainFetchPopUp("./json/EveryYear_2019.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Neymar Jr, a Brazilian football superstar, is celebrated for his dazzling dribbling, creativity, and flair on the field. He has played for Barcelona and Paris Saint-Germain, forming a formidable attacking trio with Messi and Suárez. Now with Al Hilal, he is known for his individual brilliance and playmaking abilities."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jurgen Klopp"
    }

    if (selectedYear == "16") {

        STC.textContent = "C Ronaldo";
        FR.textContent = "Messi";
        AMC.textContent = "E Hazard";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "S Ramos";
        DCL.textContent = "van Dijk";
        DL.textContent = "Alba";
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

        smallpic.src = "/football/img/wallpapers/Hazard.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2020.json");
        MainFetchPopUp("./json/EveryYear_2020.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Eden Hazard, a Belgian footballer, is admired for his exceptional dribbling skills, agility, and creativity. He played for Chelsea and later joined Real Madrid, where he is known for his ability to create scoring opportunities and contribute to his team's attacking prowess."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Hans-Dieter Flick"
    }

    if (selectedYear == "17") {
        STC.textContent = "Lewandowski";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "van Dijk";
        DCL.textContent = "S Ramos";
        DL.textContent = "Robertson";
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

        smallpic.src = "/football/img/wallpapers/C Ronaldo.webp";

        // FIFAFetchPopUp("./json/EveryYear_2021.json");
        MainFetchPopUp("./json/EveryYear_2021.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Cristiano Ronaldo, often simply referred to as Ronaldo or CR7, is a Portuguese football icon. Known for his incredible athleticism, speed, and goal-scoring ability, he has played for top clubs like Manchester United, Real Madrid, Juventus, returned to Manchester United in 2021 and now with Al Nassr. Ronaldo is widely regarded as one of the greatest footballers of all time, having won numerous awards, titles, and accolades throughout his illustrious career."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Thomas Tuchel"
    }

    if (selectedYear === "18") {
        STC.textContent = "Lewandowski";
        FR.textContent = "Salah";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "van Dijk";
        DCL.textContent = "R Dias";
        DL.textContent = "J Cancelo";
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

        smallpic.src = "/football/img/wallpapers/Salah.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2022.json");
        MainFetchPopUp("./json/EveryYear_2022.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Mohamed Salah, an Egyptian footballer, is known for his incredible speed, goal-scoring ability, and versatility in attack. He plays for Liverpool in the English Premier League and has been a key player in their successes, including winning the UEFA Champions League. Salah is also a prominent figure in the Egyptian national team."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Carlo Ancelotti"
    }

    if (selectedYear == "19") {

        STC.textContent = "Benzema";
        FR.textContent = "Salah";
        AMC.textContent = "Messi";
        FL.textContent = "Mbappe";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Casemiro";
        DR.textContent = "Kimmich";
        DCR.textContent = "R Dias";
        DCL.textContent = "Marquinhos";
        DL.textContent = "J Cancelo";
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

        smallpic.src = "/football/img/wallpapers/Benzema.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2023.json");
        MainFetchPopUp("./json/EveryYear_2023.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Karim Benzema, a French football striker, is celebrated for his exceptional goal-scoring ability, versatility, and link-up play. He has played for Real Madrid since 2009 and has been a crucial part of their success in domestic and international competitions. He's now playing with Al Ittihad."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Pep Guardiola"
    }

    if (selectedYear == "20") {

        STC.textContent = "Haaland";
        FR.textContent = "Mbappe";
        AMC.textContent = "Messi";
        FL.textContent = "Vinicius Jr";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Rodri";
        DR.textContent = "J Cancelo";
        DCR.textContent = "van Dijk";
        DCL.textContent = "R Dias";
        DL.textContent = "Robertson";
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

        smallpic.src = "/football/img/wallpapers/Haaland.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2024.json");
        MainFetchPopUp("./json/EveryYear_2024.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Erling Haaland, a Norwegian football sensation, is renowned for his incredible goal-scoring prowess, speed, and physicality. He has played for Borussia Dortmund and later moved to Manchester City. Haaland's remarkable scoring record has made him one of the most sought-after talents in world football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = ""
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

    if (selectedYear == "0") {
        STC.textContent = "Henry";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Zidane";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Lampard";
        CML.textContent = "Pirlo";
        DR.textContent = "Cafu";
        DCR.textContent = "Terry";
        DCL.textContent = "Maldini";
        DL.textContent = "R Carlos";
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


        smallpic.src = "/football/img/wallpapers/zidane.png";

        // // FIFAFetchPopUp("./json/EveryYear_2005.json");
        MainFetchPopUp("./json/EveryYear_2004.json");
        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Zinedine Zidane, legendary French footballer, is renowned for his technical skill, playmaking, and headbutt in the 2006 World Cup final. He led France to 1998 World Cup glory and won numerous individual accolades, including three FIFA World Player of the Year awards."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jose Mourinho"
    }

    if (selectedYear == "1") {

        STC.textContent = "Henry";
        FR.textContent = "Totti";
        AMC.textContent = "Zidane";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Gerrard";
        CML.textContent = "Vieira";
        DR.textContent = "Thuram";
        DCR.textContent = "Nesta";
        DCL.textContent = "Lucio";
        DL.textContent = "Maldini";
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


        smallpic.src = "/football/img/wallpapers/gerrard.jpg";

        // // FIFAFetchPopUp("./json/EveryYear_2005.json");
        MainFetchPopUp("./json/EveryYear_2005.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Steven Gerrard is a legendary English footballer known for his loyalty to Liverpool FC. A dynamic midfielder, he captained the team and led with passion, creating iconic moments and achieving numerous honors during his illustrious career. His commitment and skill earned him a place among football's greats."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Frank Rijkaard"
    }

    if (selectedYear == "2") {
        STC.textContent = "Ronaldo";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Zidane";
        CML.textContent = "Essien";
        DR.textContent = "Cafu";
        DCR.textContent = "Ferdinand";
        DCL.textContent = "Maldini";
        DL.textContent = "A Cole";
        GK.textContent = "Casillas";

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

        smallpic.src = "/football/img/wallpapers/Ronaldo.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2006.json");
        MainFetchPopUp("./json/EveryYear_2006.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Ronaldo, a Brazilian football legend, was a prolific striker with exceptional speed, dribbling, and goal-scoring prowess. He won two FIFA World Cups and achieved success with top clubs like Barcelona, Inter Milan, and Real Madrid, leaving an indelible mark on the sport."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Fabio Capello"
    }

    if (selectedYear == "3") {
        STC.textContent = "Henry";
        FR.textContent = "Totti";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Lampard";
        CML.textContent = "Gerrard";
        DR.textContent = "Zambrotta";
        DCR.textContent = "Terry";
        DCL.textContent = "F Cannavaro";
        DL.textContent = "Abidal";
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

        smallpic.src = "/football/img/wallpapers/henry.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2007.json");
        MainFetchPopUp("./json/EveryYear_2007.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Thierry Henry, a French football icon, was a lethal forward celebrated for his speed, technique, and goal-scoring ability. He excelled with Arsenal, Barcelona, and the French national team, earning accolades as one of the greatest strikers in the sport's history."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Carlo Ancelotti"
    }

    if (selectedYear == "4") {

        STC.textContent = "Henry";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Fabregas";
        CML.textContent = "Gerrard";
        DR.textContent = "S Ramos";
        DCR.textContent = "Nesta";
        DCL.textContent = "Terry";
        DL.textContent = "Zanetti";
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

        smallpic.src = "/football/img/wallpapers/Ronaldinho.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2008.json");
        MainFetchPopUp("./json/EveryYear_2008.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Ronaldinho, a Brazilian football wizard, was known for his extraordinary dribbling, creativity, and infectious smile. He won the FIFA World Cup, Ballon d'Or, and numerous titles with Barcelona and AC Milan, captivating fans with his joyful and skillful style of play."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Sir Alex Ferguson"
    }

    if (selectedYear == "5") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "Messi";
        AMC.textContent = "Kaka";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Gerrard";
        DR.textContent = "D Alves";
        DCR.textContent = "Puyol";
        DCL.textContent = "Nesta";
        DL.textContent = "Lahm";
        GK.textContent = "Casillas";


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

        smallpic.src = "/football/img/wallpapers/Xavi.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2009.json");
        MainFetchPopUp("./json/EveryYear_2009.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Xavi Hernandez, a Spanish football maestro, was a midfield genius celebrated for his precise passing, vision, and tactical intelligence. He achieved immense success with Barcelona and the Spanish national team, epitomizing the essence of tiki-taka football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the l
        });

        coach.textContent = "Best Manager: Pep Guardiola"
    }


    if (selectedYear == "6") {
        STC.textContent = "F Torres";
        FR.textContent = "Messi";
        AMC.textContent = "Kaka";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Essien";
        DR.textContent = "D Alves";
        DCR.textContent = "Puyol";
        DCL.textContent = "Ferdinand";
        DL.textContent = "A Cole";
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

        smallpic.src = "/football/img/wallpapers/Kaka.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2010.json");
        MainFetchPopUp("./json/EveryYear_2010.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Kaká, a Brazilian football sensation, possessed incredible speed, dribbling, and scoring ability. He won the FIFA World Cup and Ballon d'Or and excelled with AC Milan and Real Madrid. Kaká's elegance and creativity made him one of football's most captivating players."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jose Mourinho"
    }

    if (selectedYear == "7") {

        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Maicon";
        DCR.textContent = "Vidic";
        DCL.textContent = "Terry";
        DL.textContent = "Evra";
        GK.textContent = "Casillas";


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

        document.getElementById("smallpic").src = "/football/img/wallpapers/Iniesta.webp";

        // FIFAFetchPopUp("./json/EveryYear_2011.json");
        MainFetchPopUp("./json/EveryYear_2011.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Andrés Iniesta, a Spanish midfield maestro, was revered for his exquisite passing, vision, and composure under pressure. He played a pivotal role in Spain's World Cup victory and enjoyed immense success with Barcelona, embodying the essence of footballing grace."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Pep Guardiola"
    }

    if (selectedYear == "8") {

        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Ozil";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Y Toure";
        DR.textContent = "D Alves";
        DCR.textContent = "Vidic";
        DCL.textContent = "Pique";
        DL.textContent = "A Cole";
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

        smallpic.src = "/football/img/wallpapers/Ozil.png";

        // FIFAFetchPopUp("./json/EveryYear_2012.json");
        MainFetchPopUp("./json/EveryYear_2012.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Mesut Özil, a German footballer, was known for his sublime playmaking skills, vision, and creativity. He played for top clubs like Real Madrid and Arsenal and contributed to Germany's success in international competitions. Özil's style mesmerized fans with his assists and football intelligence."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Roberto Di Matteo"
    }

    if (selectedYear == "9") {

        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Busquets";
        DR.textContent = "D Alves";
        DCR.textContent = "Vidic";
        DCL.textContent = "S Ramos";
        DL.textContent = "A Cole";
        GK.textContent = "Casillas";


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

        document.getElementById("smallpic").src = "/football/img/wallpapers/Rooney.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2013.json");
        MainFetchPopUp("./json/EveryYear_2013.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Wayne Rooney, an English football legend, was a versatile forward with exceptional goal-scoring ability and a fierce work ethic. He played for Manchester United and Everton, becoming England's all-time leading scorer and leaving an indelible mark on the sport."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jupp Heynckes"
    }

    if (selectedYear == "10") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Ribery";
        CMR.textContent = "Xavi";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Kompany";
        DL.textContent = "Lahm";
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

        smallpic.src = "/football/img/wallpapers/Ribery.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2014.json");
        MainFetchPopUp("./json/EveryYear_2014.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Franck Ribéry, a French football winger, was known for his incredible dribbling skills, pace, and creativity on the field. He had a successful career with clubs like Bayern Munich and Marseille and earned numerous titles and awards during his tenure in football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Carlo Ancelotti"
    }


    if (selectedYear == "11") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "Robben";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Iniesta";
        CML.textContent = "Kroos";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "S Ramos";
        DL.textContent = "Lahm";
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

        smallpic.src = "/football/img/wallpapers/Ibrahimovic.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2015.json");
        MainFetchPopUp("./json/EveryYear_2015.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Zlatan Ibrahimović, a Swedish football striker, is renowned for his towering presence, acrobatic goals, and strong personality. He's played for top clubs worldwide, including Barcelona, PSG, and AC Milan, and has consistently delivered remarkable performances throughout his career."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Luis Enrique"
    }

    if (selectedYear == "12") {
        STC.textContent = "Suarez";
        FR.textContent = "Robben";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Iniesta";
        CML.textContent = "Pogba";
        DR.textContent = "Lahm";
        DCR.textContent = "T Silva";
        DCL.textContent = "S Ramos";
        DL.textContent = "Marcelo";
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

        smallpic.src = "/football/img/wallpapers/Robben.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2016.json");
        MainFetchPopUp("./json/EveryYear_2016.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Arjen Robben, a Dutch football winger, was celebrated for his exceptional dribbling, cutting inside from the right wing, and precise left-footed shots. He achieved success with clubs like Bayern Munich and Chelsea and was a key figure in the Dutch national team."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Zinedine Zidane"
    }

    if (selectedYear == "13") {

        STC.textContent = "Lewandowski";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kroos";
        DR.textContent = "D Alves";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Boateng";
        DL.textContent = "Marcelo";
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

        smallpic.src = "/football/img/wallpapers/Lewandowski.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2017.json");
        MainFetchPopUp("./json/EveryYear_2017.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Robert Lewandowski, a Polish football striker, is one of the world's premier goalscorers. Known for his clinical finishing, aerial ability, and work rate, he has excelled at Bayern Munich, setting numerous records and earning awards for his prolific scoring."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Zinedine Zidane"
    }

    if (selectedYear == "14") {

        STC.textContent = "Suarez";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "Modric";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Chiellini";
        DL.textContent = "Marcelo";
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

        smallpic.src = "/football/img/wallpapers/Suarez.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2018.json");
        MainFetchPopUp("./json/EveryYear_2018.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Luis Suárez, a Uruguayan football forward, is renowned for his goal-scoring prowess and controversial incidents. He has played for top clubs like Ajax, Liverpool, Barcelona, and Atlético Madrid, consistently delivering impressive performances and winning multiple titles throughout his career."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Zinedine Zidane"
    }

    if (selectedYear == "15") {

        STC.textContent = "Suarez";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Godin";
        DL.textContent = "Marcelo";
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

        smallpic.src = "/football/img/wallpapers/Neymar.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2019.json");
        MainFetchPopUp("./json/EveryYear_2019.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Neymar Jr., a Brazilian football superstar, is celebrated for his dazzling dribbling, creativity, and flair on the field. He has played for Barcelona and Paris Saint-Germain (PSG), forming a formidable attacking trio with Messi and Suárez, and is known for his individual brilliance and playmaking abilities."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Jurgen Klopp"
    }

    if (selectedYear == "16") {

        STC.textContent = "C Ronaldo";
        FR.textContent = "Messi";
        AMC.textContent = "E Hazard";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "S Ramos";
        DCL.textContent = "van Dijk";
        DL.textContent = "Alba";
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

        smallpic.src = "/football/img/wallpapers/Hazard.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2020.json");
        MainFetchPopUp("./json/EveryYear_2020.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Eden Hazard, a Belgian footballer, is admired for his exceptional dribbling skills, agility, and creativity. He played for Chelsea and later joined Real Madrid, where he is known for his ability to create scoring opportunities and contribute to his team's attacking prowess."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Hans-Dieter Flick"
    }

    if (selectedYear == "17") {
        STC.textContent = "Lewandowski";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "van Dijk";
        DCL.textContent = "S Ramos";
        DL.textContent = "Robertson";
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

        smallpic.src = "/football/img/wallpapers/C Ronaldo.webp";

        // FIFAFetchPopUp("./json/EveryYear_2021.json");
        MainFetchPopUp("./json/EveryYear_2021.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Cristiano Ronaldo, often simply referred to as Ronaldo or CR7, is a Portuguese football icon. Known for his incredible athleticism, speed, and goal-scoring ability, he has played for top clubs like Manchester United, Real Madrid, Juventus, and returned to Manchester United in 2021. Ronaldo is widely regarded as one of the greatest footballers of all time, having won numerous awards, titles, and accolades throughout his illustrious career."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Thomas Tuchel"
    }

    if (selectedYear === "18") {
        STC.textContent = "Lewandowski";
        FR.textContent = "Salah";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "van Dijk";
        DCL.textContent = "R Dias";
        DL.textContent = "J Cancelo";
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

        smallpic.src = "/football/img/wallpapers/Salah.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2022.json");
        MainFetchPopUp("./json/EveryYear_2022.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Mohamed Salah, an Egyptian footballer, is known for his incredible speed, goal-scoring ability, and versatility in attack. He plays for Liverpool in the English Premier League and has been a key player in their successes, including winning the UEFA Champions League. Salah is also a prominent figure in the Egyptian national team."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Carlo Ancelotti"
    }

    if (selectedYear == "19") {

        STC.textContent = "Lewandowski";
        FR.textContent = "Messi";
        AMC.textContent = "Benzema";
        FL.textContent = "Mbappe";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Casemiro";
        DR.textContent = "Kimmich";
        DCR.textContent = "R Dias";
        DCL.textContent = "Marquinhos";
        DL.textContent = "J Cancelo";
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

        smallpic.src = "/football/img/wallpapers/Benzema.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2023.json");
        MainFetchPopUp("./json/EveryYear_2023.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Karim Benzema, a French football striker, is celebrated for his exceptional goal-scoring ability, versatility, and link-up play. He has played for Real Madrid since 2009 and has been a crucial part of their success in domestic and international competitions. Benzema is known for his technical skills and football intelligence."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Manager: Pep Guardiola"
    }

    if (selectedYear == "20") {

        STC.textContent = "Haaland";
        FR.textContent = "Salah";
        AMC.textContent = "Messi";
        FL.textContent = "Mbappe";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Rodri";
        DR.textContent = "J Cancelo";
        DCR.textContent = "van Dijk";
        DCL.textContent = "R Dias";
        DL.textContent = "Robertson";
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

        smallpic.src = "/football/img/wallpapers/Haaland.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2024.json");
        MainFetchPopUp("./json/EveryYear_2024.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Erling Haaland, a Norwegian football sensation, is renowned for his incredible goal-scoring prowess, speed, and physicality. He has played for Borussia Dortmund and later moved to Manchester City. Haaland's remarkable scoring record has made him one of the most sought-after talents in world football."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = ""
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

}   // Event listener for the back button
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