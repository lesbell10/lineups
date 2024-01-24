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
    const elements = [FL, FL2, FC, FC2, FR, FR2, DL, DL2, DR, DR2, G, G2];
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
    img.style.height = "26%";
    img.style.transform = "translateY(-27%)";

    // Modify the paragraph
    p.style.scale = "1.3";
    p.style.transform = "translateX(15px)";
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

    if (selectedYear == "0") {
        FL.textContent = "Marchand";
        FC.textContent = "Zacha";
        FR.textContent = "Pastrnak";
        DL.textContent = "McAvoy";
        DR.textContent = "Carlo";
        G.textContent = "Ullmark";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/boston.gif";

        MainFetchPopUp("/hockey/present/eastern/json/boston.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Jim Montgomery <br> Best Player: David Pastrnak <br> Best Ever: Bobby Orr, Ray Bourque, Zdeno Chara, Patrice Bergeron <br> Position Last Year: 1st in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });


        coach.textContent = "Head Coach: Jim Montgomery"

        coach.addEventListener("click", () => {
            showManagerInfo(0)

            const img = document.querySelector(".player-info img")
            img.style.width = "100px"
            img.style.height = "125px"
            img.style.marginBottom = "10px"
        });
    }


    if (selectedYear == "1") {
        FL.textContent = "J Skinner";
        FC.textContent = "T Thompson";
        FR.textContent = "Tuch";
        DL.textContent = "Dahlin";
        DR.textContent = "Power";
        G.textContent = "Luukkonen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/buffalo.gif";

        MainFetchPopUp("/hockey/present/eastern/json/buffalo.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Don Granato <br> Best Player: Rasmus Dahlin <br> Best Ever: Ryan Miller, Thomas Vanek, Dominik Hasek, Jack Eichel <br> Position Last Year: 10th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Don Granato"

        coach.addEventListener("click", () => {
            showManagerInfo(1)

            const img = document.querySelector(".player-info img")
            img.style.width = "200px"
            img.style.height = "133px"
            img.style.margin = "-3px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });

    }

    if (selectedYear == "2") {
        FL.textContent = "Svechnikov";
        FC.textContent = "Aho";
        FR.textContent = "Necas";
        DL.textContent = "Slavin";
        DR.textContent = "Burns";
        G.textContent = "Andersen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/carolina.gif";

        MainFetchPopUp("/hockey/present/eastern/json/carolina.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Rod Brind'Amour <br> Best Player: Sebastian Aho <br> Best Ever: Ron Francis, Eric Staal, Cam Ward, Rod Brind'Amour <br> Position Last Year: 2nd in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Rod Brind'Amour"

        coach.addEventListener("click", () => {
            showManagerInfo(2)

            const img = document.querySelector(".player-info img")
            img.style.width = "200px"
            img.style.height = "133px"
            img.style.margin = "-3px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });


    }

    if (selectedYear == "3") {
        FL.textContent = "Gaudreau";
        FC.textContent = "K Johnson";
        FR.textContent = "Laine";
        DL.textContent = "Werenski";
        DR.textContent = "Provorov";
        G.textContent = "Merzlikins";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/columbus.gif";

        MainFetchPopUp("/hockey/present/eastern/json/columbus.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Pascal Vincent <br> Best Player: Johnny Gaudreau <br> Best Ever: Rick Nash, Sergei Brobovsky, Nick Foligno, Cam Atkinson <br> Position Last Year: 16th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Pascal Vincent"

        coach.addEventListener("click", () => {
            showManagerInfo(3)

            const img = document.querySelector(".player-info img")
            img.style.width = "108px"
            img.style.height = "150px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "4") {
        FL.textContent = "Perron";
        FC.textContent = "Larkin";
        FR.textContent = "DeBrincat";
        DL.textContent = "Seider";
        DR.textContent = "Petry";
        G.textContent = "Husso";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/detroit.gif";

        MainFetchPopUp("/hockey/present/eastern/json/detroit.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Derek Lalonde <br> Best Player: Dylan Larkin <br> Best Ever: Pavel Datsyuk, Steve Yzerman, Gordie Howe, Niklas Lidstrom <br> Position Last Year: 4th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Derek Lalonde"

        coach.addEventListener("click", () => {
            showManagerInfo(4)

            const img = document.querySelector(".player-info img")
            img.style.width = "100px"
            img.style.height = "140px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });

    }

    if (selectedYear == "5") {
        FL.textContent = "M Tkachuk";
        FC.textContent = "Barkov";
        FR.textContent = "Verhaeghe";
        DL.textContent = "Ekblad";
        DR.textContent = "Montour";
        G.textContent = "Bobrovsky";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/florida.gif";

        MainFetchPopUp("/hockey/present/eastern/json/florida.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Paul Maurice <br> Best Player: Matthew Tkachuk <br> Best Ever: Pavel Bure, Roberto Luongo, Jonathan Huberdeau, Aleksander Barkov <br> Position Last Year: 8th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Paul Maurice"

        coach.addEventListener("click", () => {
            showManagerInfo(5)

            const img = document.querySelector(".player-info img")
            img.style.width = "150px"
            img.style.height = "150px"
            img.style.margin = "-5px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });

    }

    if (selectedYear == "6") {
        FL.textContent = "Dach";
        FC.textContent = "Suzuki";
        FR.textContent = "Caufield";
        DL.textContent = "Matheson";
        DR.textContent = "Guhle";
        G.textContent = "J Allen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/montreal.gif";

        MainFetchPopUp("/hockey/present/eastern/json/montreal.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Martin St Louis <br> Best Player: Nick Suzuki <br> Best Ever: Maurice Richard, Jean Beliveau, Carey Price, Guy Lafleur <br> Position Last Year: 15th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Martin St Louis"

        coach.addEventListener("click", () => {
            showManagerInfo(6)

            const img = document.querySelector(".player-info img")
            img.style.width = "106px"
            img.style.height = "147px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });

    }

    if (selectedYear == "7") {
        FL.textContent = "Bratt";
        FC.textContent = "J Hughes";
        FR.textContent = "Hischier";
        DL.textContent = "Hamilton";
        DR.textContent = "Siegenthaler";
        G.textContent = "Vanecek";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/new jersey.gif";

        MainFetchPopUp("/hockey/present/eastern/json/new jersey.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Lindy Ruff <br> Best Player: Jack Hughes <br> Best Ever: Patrik Elias, Scott Stevens, Martin Brodeur, Scott Niedermayer <br> Position Last Year: 3rd in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Lindy Ruff"

        coach.addEventListener("click", () => {
            showManagerInfo(7)

            const img = document.querySelector(".player-info img")
            img.style.width = "150px"
            img.style.height = "150px"
            img.style.margin = "-5px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });

    }

    if (selectedYear == "8") {
        FL.textContent = "Nelson";
        FC.textContent = "Barzal";
        FR.textContent = "Horvat";
        DL.textContent = "Pelech";
        DR.textContent = "Pulock";
        G.textContent = "Sorokin";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny islanders.gif";

        MainFetchPopUp("/hockey/present/eastern/json/ny islanders.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Lane Lambert <br> Best Player: Ilya Sorokin <br> Best Ever: John Tavares, Mathew Barzal, Mike Bossy, Bryan Trottier <br> Position Last Year: 7th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Lane Lambert"

        coach.addEventListener("click", () => {
            showManagerInfo(8)

            const img = document.querySelector(".player-info img")
            img.style.width = "210px"
            img.style.height = "117px"
            img.style.margin = "-7px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "9") {
        FL.textContent = "Panarin";
        FC.textContent = "Zibanejad";
        FR.textContent = "Kreider";
        DL.textContent = "Fox";
        DR.textContent = "K Miller";
        G.textContent = "Shesterkin";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny rangers.gif";

        MainFetchPopUp("/hockey/present/eastern/json/ny rangers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Peter Laviolette <br> Best Player: Artemi Panarin <br> Best Ever: Mark Messier, Brian Leetch, Henrik Lundqvist, Wayne Gretzky <br> Position Last Year: 5th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Peter Laviolette"

        coach.addEventListener("click", () => {
            showManagerInfo(9)

            const img = document.querySelector(".player-info img")
            img.style.width = "102px"
            img.style.height = "147px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "10") {
        FL.textContent = "B Tkachuk";
        FC.textContent = "Stutzle";
        FR.textContent = "Tarasenko";
        DL.textContent = "Chabot";
        DR.textContent = "Chychrun";
        G.textContent = "Korpisalo";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ottawa.gif";

        MainFetchPopUp("/hockey/present/eastern/json/ottawa.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Jacques Martin <br> Best Player: Brady Tkachuk <br> Best Ever:  Erik Karlsson, Jason Spezza, Daniel Alfredsson, Dany Heatley <br> Position Last Year: 11th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Jacques Martin"

        coach.addEventListener("click", () => {
            showManagerInfo(10)

            const img = document.querySelector(".player-info img")
            img.style.width = "195px"
            img.style.height = "109px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "11") {
        FL.textContent = "Konecny";
        FC.textContent = "Couturier";
        FR.textContent = "Atkinson";
        DL.textContent = "Sanheim";
        DR.textContent = "York";
        G.textContent = "C Hart";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/philadelphia.gif";

        MainFetchPopUp("/hockey/present/eastern/json/philadelphia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: John Tortorella <br> Best Player: Carter Hart <br> Best Ever: Eric Lindros, Claude Giroux, Keith Primeau, Bobby Clarke <br> Position Last Year: 14th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: John Tortorella"

        coach.addEventListener("click", () => {
            showManagerInfo(11)

            const img = document.querySelector(".player-info img")
            img.style.width = "115px"
            img.style.height = "125px"
            img.style.margin = "-3px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "12") {
        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Rust";
        DL.textContent = "Letang";
        DR.textContent = "Marino";
        G.textContent = "Jarry";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/pittsburgh.gif";

        MainFetchPopUp("/hockey/present/eastern/json/pittsburgh.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Mike Sullivan <br> Best Player: Sidney Crosby <br> Best Ever: Mario Lemieux, Sidney Crosby, Jaromir Jagr, Marc-Andre Fleury <br> Position Last Year: 9th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Mike Sullivan"

        coach.addEventListener("click", () => {
            showManagerInfo(12)

            const img = document.querySelector(".player-info img")
            img.style.width = "152px"
            img.style.height = "105px"
            img.style.margin = "-3px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "13") {
        FL.textContent = "Stamkos";
        FC.textContent = "Point";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "Cernak";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/tampa bay.gif";

        MainFetchPopUp("/hockey/present/eastern/json/tampa bay.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Jon Cooper <br> Best Player: Nikita Kucherov <br> Best Ever: Vincent Lecavalier, Martin St Louis, Steven Stamkos, Victor Hedman <br> Position Last Year: 6th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Jon Cooper"

        coach.addEventListener("click", () => {
            showManagerInfo(13)

            const img = document.querySelector(".player-info img")
            img.style.width = "210px"
            img.style.height = "117px"
            img.style.margin = "-7px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "14") {
        FL.textContent = "Nylander";
        FC.textContent = "Matthews";
        FR.textContent = "Marner";
        DL.textContent = "Rielly";
        DR.textContent = "Brodie";
        G.textContent = "Samsonov";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/toronto.gif";

        MainFetchPopUp("/hockey/present/eastern/json/toronto.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Sheldon Keefe <br> Best Player: Auston Matthews <br> Best Ever: Mats Sundin, Auston Matthews, Mitch Marner, Doug Gilmour <br> Position Last Year: 4th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Sheldon Keefe"

        coach.addEventListener("click", () => {
            showManagerInfo(14)

            const img = document.querySelector(".player-info img")
            img.style.width = "202px"
            img.style.height = "104px"
            img.style.margin = "-5px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "15") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Kuznetsov";
        FR.textContent = "Wilson";
        DL.textContent = "Carlson";
        DR.textContent = "Fehervary";
        G.textContent = "Kuemper";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/washington.gif";

        MainFetchPopUp("/hockey/present/eastern/json/washington.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Spencer Carbery <br> Best Player: Alex Ovechkin <br> Best Ever: Alex Ovechkin, Peter Bondra, Nicklas Backstrom, Braden Holtby <br> Position Last Year: 4th in the East"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Spencer Carbery"

        coach.addEventListener("click", () => {
            showManagerInfo(15)

            const img = document.querySelector(".player-info img")
            img.style.width = "210px"
            img.style.height = "140px"
            img.style.margin = "-8px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
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

    if (selectedYear == "0") {
        FL.textContent = "Marchand";
        FC.textContent = "Zacha";
        FR.textContent = "Pastrnak";
        DL.textContent = "McAvoy";
        DR.textContent = "Carlo";
        G.textContent = "Ullmark";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/boston.gif";

        MainFetchPopUp("/hockey/present/eastern/json/boston.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Boston Bruins in the 2022-2023 season showcased a remarkable blend of experienced talent and rising stars. Under new management, the team focused on a fast, aggressive playing style, which paid dividends as they topped league charts for much of the season."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });


        coach.textContent = "Head Coach: Jim Montgomery"

        coach.addEventListener("click", () => {
            showManagerInfo(0)

            const img = document.querySelector(".player-info img")
            img.style.width = "100px"
            img.style.height = "125px"
            img.style.marginBottom = "10px"
        });
    }


    if (selectedYear == "1") {
        FL.textContent = "J Skinner";
        FC.textContent = "T Thompson";
        FR.textContent = "Tuch";
        DL.textContent = "Dahlin";
        DR.textContent = "Power";
        G.textContent = "Luukkonen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/buffalo.gif";

        MainFetchPopUp("/hockey/present/eastern/json/buffalo.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Buffalo Sabres during the 2022-2023 season demonstrated a team in transition, blending young, promising talent with experienced veterans. Their focus on rebuilding and development was evident, as they aimed to create a solid foundation for future success."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Don Granato"

        coach.addEventListener("click", () => {
            showManagerInfo(1)

            const img = document.querySelector(".player-info img")
            img.style.width = "200px"
            img.style.height = "133px"
            img.style.margin = "-3px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });

    }

    if (selectedYear == "2") {
        FL.textContent = "Svechnikov";
        FC.textContent = "Aho";
        FR.textContent = "Necas";
        DL.textContent = "Slavin";
        DR.textContent = "Burns";
        G.textContent = "Andersen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/carolina.gif";

        MainFetchPopUp("/hockey/present/eastern/json/carolina.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Carolina Hurricanes in the 2022-2023 season continued their trajectory as one of the NHL's rising powerhouses. Known for their strong defensive play and dynamic offense, they consistently performed at a high level. Their roster, a mix of skilled veterans and dynamic young talent, showed great chemistry and resilience."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Rod Brind'Amour"

        coach.addEventListener("click", () => {
            showManagerInfo(2)

            const img = document.querySelector(".player-info img")
            img.style.width = "200px"
            img.style.height = "133px"
            img.style.margin = "-3px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });


    }

    if (selectedYear == "3") {
        FL.textContent = "Gaudreau";
        FC.textContent = "K Johnson";
        FR.textContent = "Laine";
        DL.textContent = "Werenski";
        DR.textContent = "Provorov";
        G.textContent = "Merzlikins";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/columbus.gif";

        MainFetchPopUp("/hockey/present/eastern/json/columbus.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Columbus Blue Jackets in the 2022-2023 season faced a challenging period, marked by a mix of rebuilding and striving for competitiveness.With a focus on integrating young talent into their lineup, they aimed to lay the groundwork for future success."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Pascal Vincent"

        coach.addEventListener("click", () => {
            showManagerInfo(3)

            const img = document.querySelector(".player-info img")
            img.style.width = "108px"
            img.style.height = "150px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "4") {
        FL.textContent = "Perron";
        FC.textContent = "Larkin";
        FR.textContent = "DeBrincat";
        DL.textContent = "Seider";
        DR.textContent = "Petry";
        G.textContent = "Husso";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/detroit.gif";

        MainFetchPopUp("/hockey/present/eastern/json/detroit.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Detroit Red Wings in the 2022-2023 season were in the midst of a rebuilding phase, focusing on developing their young prospects and drafting strategic talent.This season saw them trying to balance this development with competitive play."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Derek Lalonde"

        coach.addEventListener("click", () => {
            showManagerInfo(4)

            const img = document.querySelector(".player-info img")
            img.style.width = "100px"
            img.style.height = "140px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });

    }

    if (selectedYear == "5") {
        FL.textContent = "Verhaeghe";
        FC.textContent = "Barkov";
        FR.textContent = "M Tkachuk";
        DL.textContent = "Ekblad";
        DR.textContent = "Montour";
        G.textContent = "Bobrovsky";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/florida.gif";

        MainFetchPopUp("/hockey/present/eastern/json/florida.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Florida Panthers in the 2022-2023 season continued to assert themselves as one of the formidable teams in the NHL. Building on their previous successes, they reached the Stanely Cup Finals, losing to the Vegas Golden Knights."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Paul Maurice"

        coach.addEventListener("click", () => {
            showManagerInfo(5)

            const img = document.querySelector(".player-info img")
            img.style.width = "150px"
            img.style.height = "150px"
            img.style.margin = "-5px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });

    }

    if (selectedYear == "6") {
        FL.textContent = "Dach";
        FC.textContent = "Suzuki";
        FR.textContent = "Caufield";
        DL.textContent = "Matheson";
        DR.textContent = "Guhle";
        G.textContent = "J Allen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/montreal.gif";

        MainFetchPopUp("/hockey/present/eastern/json/montreal.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Montreal Canadiens in the 2022-2023 season were in a phase of restructuring and rebuilding, focusing on developing young talent and reshaping the team for future success. This season was characterized by a blend of veteran experience and emerging young players, offering glimpses of the team's potential."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Martin St Louis"

        coach.addEventListener("click", () => {
            showManagerInfo(6)

            const img = document.querySelector(".player-info img")
            img.style.width = "106px"
            img.style.height = "147px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });

    }

    if (selectedYear == "7") {
        FL.textContent = "Bratt";
        FC.textContent = "J Hughes";
        FR.textContent = "Hischier";
        DL.textContent = "Hamilton";
        DR.textContent = "Siegenthaler";
        G.textContent = "Vanecek";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/new jersey.gif";

        MainFetchPopUp("/hockey/present/eastern/json/new jersey.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The New Jersey Devils' 2022-2023 season was marked by significant improvement, showcasing a young, talented roster, strong offensive play, and improved defense, leading to a playoff push and renewed hope among fans for future success.";
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Lindy Ruff"

        coach.addEventListener("click", () => {
            showManagerInfo(7)

            const img = document.querySelector(".player-info img")
            img.style.width = "150px"
            img.style.height = "150px"
            img.style.margin = "-5px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });

    }

    if (selectedYear == "8") {
        FL.textContent = "Nelson";
        FC.textContent = "Barzal";
        FR.textContent = "Horvat";
        DL.textContent = "Pelech";
        DR.textContent = "Pulock";
        G.textContent = "Sorokin";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny islanders.gif";

        MainFetchPopUp("/hockey/present/eastern/json/ny islanders.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The New York Islanders in the 2022-2023 season showcased a blend of solid defensive play and opportunistic offense. Known for their structured, team-oriented approach, they continued to emphasize a strong defensive system under their coaching staff."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Lane Lambert"

        coach.addEventListener("click", () => {
            showManagerInfo(8)

            const img = document.querySelector(".player-info img")
            img.style.width = "210px"
            img.style.height = "117px"
            img.style.margin = "-7px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "9") {
        FL.textContent = "Panarin";
        FC.textContent = "Zibanejad";
        FR.textContent = "Kreider";
        DL.textContent = "Fox";
        DR.textContent = "K Miller";
        G.textContent = "Shesterkin";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny rangers.gif";

        MainFetchPopUp("/hockey/present/eastern/json/ny rangers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The New York Rangers in the 2022-2023 season continued to build on their recent success, showcasing a team rich in talent and ambition. With a mix of star forwards, solid defensemen, and one of the league's top goaltenders, the Rangers displayed a strong, well-rounded game."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Peter Laviolette"

        coach.addEventListener("click", () => {
            showManagerInfo(9)

            const img = document.querySelector(".player-info img")
            img.style.width = "102px"
            img.style.height = "147px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "10") {
        FL.textContent = "B Tkachuk";
        FC.textContent = "Stutzle";
        FR.textContent = "Tarasenko";
        DL.textContent = "Chabot";
        DR.textContent = "Chychrun";
        G.textContent = "Korpisalo";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ottawa.gif";

        MainFetchPopUp("/hockey/present/eastern/json/ottawa.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Ottawa Senators in the 2022-2023 season demonstrated a phase of growth and potential, as they continued to rebuild and develop their young core. The team, featuring a mix of promising rookies and experienced leaders, focused on improving their overall performance."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Jacques Martin"

        coach.addEventListener("click", () => {
            showManagerInfo(10)

            const img = document.querySelector(".player-info img")
            img.style.width = "195px"
            img.style.height = "109px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "11") {
        FL.textContent = "Konecny";
        FC.textContent = "Couturier";
        FR.textContent = "Atkinson";
        DL.textContent = "Sanheim";
        DR.textContent = "York";
        G.textContent = "C Hart";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/philadelphia.gif";

        MainFetchPopUp("/hockey/present/eastern/json/philadelphia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Philadelphia Flyers in the 2022-2023 season faced a challenging period, marked by efforts to find a consistent winning formula amidst rebuilding.The team, with a blend of veterans and emerging talent, struggled with consistency in both offense and defense."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: John Tortorella"

        coach.addEventListener("click", () => {
            showManagerInfo(11)

            const img = document.querySelector(".player-info img")
            img.style.width = "115px"
            img.style.height = "125px"
            img.style.margin = "-3px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "12") {
        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Rust";
        DL.textContent = "Letang";
        DR.textContent = "Marino";
        G.textContent = "Jarry";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/pittsburgh.gif";

        MainFetchPopUp("/hockey/present/eastern/json/pittsburgh.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Pittsburgh Penguins in the 2022-2023 season continued to showcase their resilience and competitive spirit, building upon their legacy as a perennial contender in the NHL. With a core of experienced, high-caliber players, including some of the league's top stars, the Penguins remained a formidable force."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Mike Sullivan"

        coach.addEventListener("click", () => {
            showManagerInfo(12)

            const img = document.querySelector(".player-info img")
            img.style.width = "152px"
            img.style.height = "105px"
            img.style.margin = "-3px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "13") {
        FL.textContent = "Stamkos";
        FC.textContent = "Point";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "Cernak";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/tampa bay.gif";

        MainFetchPopUp("/hockey/present/eastern/json/tampa bay.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Tampa Bay Lightning in the 2022-2023 season continued their reputation as one of the NHL's elite teams, building on their recent successes. With a roster full of skilled and high-impact players, they showcased a blend of dynamic offense and solid defense."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Jon Cooper"

        coach.addEventListener("click", () => {
            showManagerInfo(13)

            const img = document.querySelector(".player-info img")
            img.style.width = "210px"
            img.style.height = "117px"
            img.style.margin = "-7px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "14") {
        FL.textContent = "Marner";
        FC.textContent = "Matthews";
        FR.textContent = "Nylander";
        DL.textContent = "Rielly";
        DR.textContent = "Brodie";
        G.textContent = "Samsonov";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/toronto.gif";

        MainFetchPopUp("/hockey/present/eastern/json/toronto.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Toronto Maple Leafs in the 2022-2023 season continued to be one of the most talked - about teams in the NHL, showcasing a high - powered offense and a roster of star players.Their season was characterized by strong offensive performances, led by their top forwards who consistently contributed to the team's scoring."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Sheldon Keefe"

        coach.addEventListener("click", () => {
            showManagerInfo(14)

            const img = document.querySelector(".player-info img")
            img.style.width = "202px"
            img.style.height = "104px"
            img.style.margin = "-5px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
    }

    if (selectedYear == "15") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Kuznetsov";
        FR.textContent = "Wilson";
        DL.textContent = "Carlson";
        DR.textContent = "Fehervary";
        G.textContent = "Kuemper";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/washington.gif";

        MainFetchPopUp("/hockey/present/eastern/json/washington.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Washington Capitals in the 2022-2023 season continued to showcase their veteran prowess and offensive strength, anchored by some of the league's most renowned players. Known for their powerful and strategic offensive play, the Capitals remained a significant threat in the NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Spencer Carbery"

        coach.addEventListener("click", () => {
            showManagerInfo(15)

            const img = document.querySelector(".player-info img")
            img.style.width = "210px"
            img.style.height = "140px"
            img.style.margin = "-8px"
            img.style.marginBottom = "10px"
            img.style.borderRadius = "20px"
        });
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