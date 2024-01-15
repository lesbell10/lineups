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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Anaheim Ducks in the 2010s faced various challenges, including shifts in coaching and management. They had playoff appearances but struggled to secure a Stanley Cup. The decade ended with a focus on rebuilding and developing a new identity."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Bruce Boudreau"
    }

    if (selectedYear == "1") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Arizona Coyotes in the 2010s faced financial instability, arena disputes, and on-ice challenges. They made occasional playoff appearances but struggled for consistency. Ownership changes and relocation rumors were recurrent themes, while players like Oliver Ekman-Larsson contributed during this period."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Dave Tippett"
    }

    if (selectedYear == "2") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Calgary Flames in the 2010s faced a series of challenges, including playoff appearances and discussions about a new arena. They underwent coaching changes and sought to build a competitive team, with various ups and downs throughout the decade."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Bob Hartley"
    }

    if (selectedYear == "3") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Chicago Blackhawks in the 2010s achieved remarkable success, winning three Stanley Cups in 2010, 2013, and 2015. They navigated salary cap constraints, experienced a change in key personnel, and faced some off-ice controversies while maintaining a competitive presence in the NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Joel Quenneville"
    }

    if (selectedYear == "4") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Colorado Avalanche in the 2010s experienced a resurgence under coach Jared Bednar. Led by players like Nathan MacKinnon and Gabriel Landeskog, they made playoff appearances but couldn't secure a Stanley Cup. The team aimed to build a competitive future during this period."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Patrick Roy"
    }


    if (selectedYear == "5") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Dallas Stars in the 2010s saw fluctuating fortunes, making occasional playoff appearances but not securing a Stanley Cup. The team experienced coaching changes, altered strategies, and faced various challenges while striving for success in the NHL during this decade."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Lindy Ruff"
    }

    if (selectedYear == "6") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Edmonton Oilers in the 2010s struggled despite having star players like Connor McDavid. They frequently missed the playoffs, underwent coaching changes, and faced criticism for their management. The team aimed to rebuild and become a contender during this period."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Todd McLellan"
    }

    if (selectedYear == "7") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Los Angeles Kings in the 2010s had a memorable decade, winning two Stanley Cups in 2012 and 2014. Led by core players like Jonathan Quick and Anze Kopitar, they balanced success with rebuilding, aiming to remain competitive in the NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Darryl Sutter"
    }

    if (selectedYear == "8") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Minnesota Wild in the 2010s had a mix of playoff appearances and challenges. They underwent coaching changes and made efforts to build a competitive roster. A Stanley Cup remained elusive, with key players like Zach Parise and Ryan Suter contributing during this decade."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Mike Yeo"
    }

    if (selectedYear == "9") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Nashville Predators in the 2010s established themselves as a competitive NHL team, with multiple playoff appearances and a trip to the Stanley Cup Final in 2017. They were a significant part of Nashville's sports culture and contributed to the city's growing hockey fanbase."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Barry Trotz"
    }

    if (selectedYear == "10") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The San Jose Sharks in the 2010s remained competitive, making multiple playoff appearances, including a trip to the Stanley Cup Final in 2016. Key players like Joe Thornton and Brent Burns contributed to their success, but the elusive Stanley Cup championship remained out of reach."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Todd McLellan"
    }


    if (selectedYear == "11") {

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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The St. Louis Blues in the 2010s faced ups and downs. They won their first-ever Stanley Cup in 2019, led by key players like Vladimir Tarasenko and Ryan O'Reilly. Coaching changes and periods of inconsistency were part of their journey during this decade."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Ken Hitchcock"
    }

    if (selectedYear == "12") {

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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Vancouver Canucks in the 2010s had a rollercoaster decade, marked by playoff success, including a trip to the Stanley Cup Final in 2011. Key players like the Sedins, Ryan Kesler, and Elias Pettersson made notable contributions, but the elusive championship remained out of reach."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Alain Vigneault"
    }

    if (selectedYear == "13") {

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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Vegas Golden Knights, founded in 2017, quickly became an NHL powerhouse. They reached the Stanley Cup Final in their inaugural season and consistently made the playoffs. Marc-Andre Fleury and Mark Stone were key players, solidifying their position in the league during this period."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Gerard Gallant"
    }

    if (selectedYear == "14") {

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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Winnipeg Jets, re-established in 2011, became a central part of the city's sports identity. They made multiple playoff appearances but couldn't secure a Stanley Cup. Key players like Blake Wheeler and Patrik Laine contributed to the team's competitive presence in the NHL during this period."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Claude Noel"
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Anaheim Ducks in the 2010s faced various challenges, including shifts in coaching and management. They had playoff appearances but struggled to secure a Stanley Cup. The decade ended with a focus on rebuilding and developing a new identity."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Bruce Boudreau"
    }

    if (selectedYear == "1") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Arizona Coyotes in the 2010s faced financial instability, arena disputes, and on-ice challenges. They made occasional playoff appearances but struggled for consistency. Ownership changes and relocation rumors were recurrent themes, while players like Oliver Ekman-Larsson contributed during this period."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Dave Tippett"
    }

    if (selectedYear == "2") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Calgary Flames in the 2010s faced a series of challenges, including playoff appearances and discussions about a new arena. They underwent coaching changes and sought to build a competitive team, with various ups and downs throughout the decade."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Bob Hartley"
    }

    if (selectedYear == "3") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Chicago Blackhawks in the 2010s achieved remarkable success, winning three Stanley Cups in 2010, 2013, and 2015. They navigated salary cap constraints, experienced a change in key personnel, and faced some off-ice controversies while maintaining a competitive presence in the NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Joel Quenneville"
    }

    if (selectedYear == "4") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Colorado Avalanche in the 2010s experienced a resurgence under coach Jared Bednar. Led by players like Nathan MacKinnon and Gabriel Landeskog, they made playoff appearances but couldn't secure a Stanley Cup. The team aimed to build a competitive future during this period."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Patrick Roy"
    }


    if (selectedYear == "5") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Dallas Stars in the 2010s saw fluctuating fortunes, making occasional playoff appearances but not securing a Stanley Cup. The team experienced coaching changes, altered strategies, and faced various challenges while striving for success in the NHL during this decade."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Lindy Ruff"
    }

    if (selectedYear == "6") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Edmonton Oilers in the 2010s struggled despite having star players like Connor McDavid. They frequently missed the playoffs, underwent coaching changes, and faced criticism for their management. The team aimed to rebuild and become a contender during this period."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Todd McLellan"
    }

    if (selectedYear == "7") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Los Angeles Kings in the 2010s had a memorable decade, winning two Stanley Cups in 2012 and 2014. Led by core players like Jonathan Quick and Anze Kopitar, they balanced success with rebuilding, aiming to remain competitive in the NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Darryl Sutter"
    }

    if (selectedYear == "8") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Minnesota Wild in the 2010s had a mix of playoff appearances and challenges. They underwent coaching changes and made efforts to build a competitive roster. A Stanley Cup remained elusive, with key players like Zach Parise and Ryan Suter contributing during this decade."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Mike Yeo"
    }

    if (selectedYear == "9") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Nashville Predators in the 2010s established themselves as a competitive NHL team, with multiple playoff appearances and a trip to the Stanley Cup Final in 2017. They were a significant part of Nashville's sports culture and contributed to the city's growing hockey fanbase."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Barry Trotz"
    }

    if (selectedYear == "10") {
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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The San Jose Sharks in the 2010s remained competitive, making multiple playoff appearances, including a trip to the Stanley Cup Final in 2016. Key players like Joe Thornton and Brent Burns contributed to their success, but the elusive Stanley Cup championship remained out of reach."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Todd McLellan"
    }


    if (selectedYear == "11") {

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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The St. Louis Blues in the 2010s faced ups and downs. They won their first-ever Stanley Cup in 2019, led by key players like Vladimir Tarasenko and Ryan O'Reilly. Coaching changes and periods of inconsistency were part of their journey during this decade."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Ken Hitchcock"
    }

    if (selectedYear == "12") {

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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Vancouver Canucks in the 2010s had a rollercoaster decade, marked by playoff success, including a trip to the Stanley Cup Final in 2011. Key players like the Sedins, Ryan Kesler, and Elias Pettersson made notable contributions, but the elusive championship remained out of reach."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Alain Vigneault"
    }

    if (selectedYear == "13") {

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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Vegas Golden Knights, founded in 2017, quickly became an NHL powerhouse. They reached the Stanley Cup Final in their inaugural season and consistently made the playoffs. Marc-Andre Fleury and Mark Stone were key players, solidifying their position in the league during this period."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Gerard Gallant"
    }

    if (selectedYear == "14") {

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

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Winnipeg Jets, re-established in 2011, became a central part of the city's sports identity. They made multiple playoff appearances but couldn't secure a Stanley Cup. Key players like Blake Wheeler and Patrik Laine contributed to the team's competitive presence in the NHL during this period."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Claude Noel"
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