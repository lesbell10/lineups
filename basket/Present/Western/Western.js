const yearSelector = document.getElementById("yearSelector");
const SG = document.getElementById("SG");
const SG2 = document.getElementById("SG2");
const PG = document.getElementById("PG");
const PG2 = document.getElementById("PG2");
const SF = document.getElementById("SF");
const SF2 = document.getElementById("SF2");
const PF = document.getElementById("PF");
const PF2 = document.getElementById("PF2");
const C = document.getElementById("C");
const C2 = document.getElementById("C2");
const smallpic = document.getElementById("smallpic");
const sideModal = document.querySelector(".side-modal")
const containers = document.querySelectorAll(".carousel-item");
const coach = document.querySelector(".coach");
const msgLabel = document.querySelector(".label");

window.onload = function () {
    yearSelector.selectedIndex = 0;
    loadSelectedYearFromLocalStorage();
};


// Function to save the selected year to localStorage
function saveSelectedYearToLocalStorage(selectedYear) {
    localStorage.setItem('selectedYear', selectedYear);
}

// Function to load the selected year from localStorage
function loadSelectedYearFromLocalStorage() {
    const savedYear = localStorage.getItem('selectedYear');
    if (savedYear) {
        selectedYear = savedYear; // Update the selectedYear variable
        yearSelector.value = savedYear; // Update the yearSelector if needed
        // You can also trigger any necessary updates in your UI here
    }
}
yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
    saveSelectedYearToLocalStorage(selectedYear);
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
    img.style.height = "31%";
    img.style.transform = "translateY(-22%)";

    // Modify the paragraph
    p.style.scale = "1.3";
    p.style.transform = "translateY(10px) translateX(25px)";
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
        PG.textContent = "L Doncic";
        SG.textContent = "K Irving";
        SF.textContent = "T Hardaway Jr";
        PF.textContent = "G Williams";
        C.textContent = "D Lively II";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/dallas.gif";

        MainFetchPopUp("/basket/present/western/json/dallas.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Jason Kidd <br> Best Player: Luka Doncic <br> Best Ever: Dirk Nowitzki, Jason Kidd, Rolando Blackman, Mark Aguirre <br> Position Last Year: 11th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "1") {
        PG.textContent = "J Murray";
        SG.textContent = "K Caldwell-P";
        SF.textContent = "M Porter Jr";
        PF.textContent = "A Gordon";
        C.textContent = "N Jokic";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/denver.gif";

        MainFetchPopUp("/basket/present/western/json/denver.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Michael Malone <br> Best Player: Nikola Jokic <br> Best Ever: Alex English, David Thompson, Carmelo Anthony, Dan Issel  <br> Position Last Year: 1st in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "2") {
        PG.textContent = "C Paul";
        SG.textContent = "S Curry";
        SF.textContent = "K Thompson";
        PF.textContent = "A Wiggins";
        C.textContent = "D Green";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/golden state.gif";

        MainFetchPopUp("/basket/present/western/json/golden state.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Steve Kerr <br> Best Player: Stephen Curry <br> Best Ever: Stephen Curry, Wilt Chamberlain, Rick Barry, Kevin Durant <br> Position Last Year: 6th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "3") {
        PG.textContent = "F VanVleet";
        SG.textContent = "J Green";
        SF.textContent = "D Brooks";
        PF.textContent = "J Smith Jr";
        C.textContent = "A Sengun";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/houston.gif";

        MainFetchPopUp("/basket/present/western/json/houston.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Ime Udoka <br> Best Player: Alperen Sengun <br> Best Ever: Hakeem Olajuwon, Yao Ming, Tracy McGrady, James Harden <br> Position Last Year: 14th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "4") {
        PG.textContent = "J Harden";
        SG.textContent = "R Westbrook";
        SF.textContent = "P George";
        PF.textContent = "K Leonard";
        C.textContent = "I Zubac";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la clippers.gif";

        MainFetchPopUp("/basket/present/western/json/la clippers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Tyronn Lue <br> Best Player: Kawhi Leonard <br> Best Ever: Chris Paul, Blake Griffin, Bob McAdoo, Elton Brand <br> Position Last Year: 5th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "5") {
        PG.textContent = "D Russell";
        SG.textContent = "A Reaves";
        SF.textContent = "L James";
        PF.textContent = "R Hachimura";
        C.textContent = "A Davis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la lakers.gif";

        MainFetchPopUp("/basket/present/western/json/la lakers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Darvin Ham <br> Best Player: LeBron James <br> Best Ever: Magic Johnson, Kobe Bryant, Kareem Abdul-Jabbar, Shaquille O'Neal <br> Position Last Year: 7th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "6") {
        PG.textContent = "J Morant";
        SG.textContent = "M Smart";
        SF.textContent = "D Bane";
        PF.textContent = "J Jackson Jr";
        C.textContent = "S Adams";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/memphis.gif";

        MainFetchPopUp("/basket/present/western/json/memphis.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Taylor Jenkins <br> Best Player: Ja Morant <br> Best Ever: Marc Gasol, Zach Randolph, Mike Conley, Pau Gasol <br> Position Last Year: 2nd in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "7") {
        PG.textContent = "A Edwards";
        SG.textContent = "J McDaniels";
        SF.textContent = "N Reid";
        PF.textContent = "KA Towns";
        C.textContent = "R Gobert";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/minnesota.gif";

        MainFetchPopUp("/basket/present/western/json/minnesota.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Chris Finch <br> Best Player: Anthony Edwards <br> Best Ever: Kevin Garnett, Kevin Love <br> Position Last Year: 8th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "8") {
        PG.textContent = "CJ McCollum";
        SG.textContent = "H Jones";
        SF.textContent = "B Ingram";
        PF.textContent = "Z Williamson";
        C.textContent = "J Valanciunas";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/new orleans.gif";

        MainFetchPopUp("/basket/present/western/json/new orleans.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Dennis Allen <br> Best Player: Zion Williamson <br> Best Ever: Kevin Garnett, Kevin Love, Karl-Anthony Towns, Sam Cassell <br> Position Last Year: 10th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "9") {
        PG.textContent = "S Gilgeous-A";
        SG.textContent = "J Giddey";
        SF.textContent = "J Williams";
        PF.textContent = "L Dort";
        C.textContent = "C Holmgren";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/oklahoma city.gif";

        MainFetchPopUp("/basket/present/western/json/oklahoma city.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Mark Daigneault <br> Best Player: Shai Gilgeous-Alexander <br> Best Ever: Kevin Durant, Russell Westbrook, Gary Payton, Serge Ibaka <br> Position Last Year: 9th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "10") {
        PG.textContent = "D Booker";
        SG.textContent = "B Beal";
        SF.textContent = "E Gordon";
        PF.textContent = "K Durant";
        C.textContent = "J Nurkic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/phoenix.gif";

        MainFetchPopUp("/basket/present/western/json/phoenix.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Frank Vogel <br> Best Player: Kevin Durant <br> Best Ever: Steve Nash, Charles Barkley, Amar'e Stoudemire, Shawn Marion <br> Position Last Year: 4th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "11") {
        PG.textContent = "M Brogdon";
        SG.textContent = "A Simons";
        SF.textContent = "S Sharpe";
        PF.textContent = "D Ayton";
        C.textContent = "R Williams III";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/portland.gif";

        MainFetchPopUp("/basket/present/western/json/portland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Chauncey Billups <br> Best Player: Anfernee Simons <br> Best Ever: Clyde Drexler, Bill Walton, Damian Lillard, Terry Porter <br> Position Last Year: 14th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "12") {
        PG.textContent = "D Fox";
        SG.textContent = "M Monk";
        SF.textContent = "H Barnes";
        PF.textContent = "K Murray";
        C.textContent = "D Sabonis";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/sacramento.gif";

        MainFetchPopUp("/basket/present/western/json/sacramento.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Mike Brown <br> Best Player: De’Aaron Fox <br> Best Ever: Chris Webber, Oscar Robertson, Jerry Lucas, Mitch Richmond <br> Position Last Year: 3rd in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "13") {
        PG.textContent = "V Wembanyama";
        SG.textContent = "Tr Jones";
        SF.textContent = "K Johnson";
        PF.textContent = "D Vassell";
        C.textContent = "Z Collins";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/san antonio.gif";

        MainFetchPopUp("/basket/present/western/json/san antonio.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Gregg Popovich <br> Best Player: Victor Wembanyama <br> Best Ever: Tim Duncan, David Robinson, Manu Ginóbili, Tony Parker <br> Position Last Year: 15th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "14") {
        PG.textContent = "C Sexton";
        SG.textContent = "J Clarkson";
        SF.textContent = "L Markkanen";
        PF.textContent = "J Collins";
        C.textContent = "W Kessler";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/utah.gif";

        MainFetchPopUp("/basket/present/western/json/utah.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.innerHTML = "Head Coach: Will Hardy <br> Best Player: Lauri Markkanen <br> Best Ever: Karl Malone, John Stockton, Adrian Dantley, Pete Maravich <br> Position Last Year: 12th in the West"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }


    function clearAndFadeInElements() {
        const elements = [
            SG, SG2, PG, PG2, SF, SF2, PF, PF2, C, C2
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

    if (selectedYear == "0") {
        PG.textContent = "L Doncic";
        SG.textContent = "K Irving";
        SF.textContent = "T Hardaway Jr";
        PF.textContent = "G Williams";
        C.textContent = "D Lively II";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/dallas.gif";

        MainFetchPopUp("/basket/present/western/json/dallas.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Dallas Mavericks' last season was marked by dynamic performances and strategic play. Led by star Luka Dončić, the team demonstrated strong offensive capabilities and resilience. "
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "1") {
        PG.textContent = "J Murray";
        SG.textContent = "K Caldwell-P";
        SF.textContent = "M Porter Jr";
        PF.textContent = "A Gordon";
        C.textContent = "N Jokic";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/denver.gif";

        MainFetchPopUp("/basket/present/western/json/denver.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, the Denver Nuggets, led by MVP Nikola Jokić, showcased a powerful mix of talent and strategic gameplay in the NBA. With a strong supporting cast including Jamal Murray and Michael Porter Jr., the Nuggets won the NBA Finals against the Miami Heat."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "2") {
        PG.textContent = "C Paul";
        SG.textContent = "S Curry";
        SF.textContent = "K Thompson";
        PF.textContent = "A Wiggins";
        C.textContent = "D Green";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/golden state.gif";

        MainFetchPopUp("/basket/present/western/json/golden state.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, the Golden State Warriors continued their legacy as a dominant force in the NBA. With star players like Stephen Curry, Klay Thompson, and Draymond Green, they displayed exceptional skill and teamwork."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "3") {
        PG.textContent = "F VanVleet";
        SG.textContent = "J Green";
        SF.textContent = "D Brooks";
        PF.textContent = "J Smith Jr";
        C.textContent = "A Sengun";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/houston.gif";

        MainFetchPopUp("/basket/present/western/json/houston.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last season, the Houston Rockets focused on rebuilding with a young roster. Emphasizing development, the team, led by players like Jalen Green and Kevin Porter Jr., showcased potential and growth. "
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "4") {
        PG.textContent = "J Harden";
        SG.textContent = "R Westbrook";
        SF.textContent = "P George";
        PF.textContent = "K Leonard";
        C.textContent = "I Zubac";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la clippers.gif";

        MainFetchPopUp("/basket/present/western/json/la clippers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The LA Clippers' last season was characterized by high expectations with a roster boasting stars like Kawhi Leonard and Paul George. After overcoming injury setbacks, the team aimed to capitalize on its deep, talented lineup to make a significant impact in the NBA."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "5") {
        PG.textContent = "D Russell";
        SG.textContent = "A Reaves";
        SF.textContent = "L James";
        PF.textContent = "R Hachimura";
        C.textContent = "A Davis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la lakers.gif";

        MainFetchPopUp("/basket/present/western/json/la lakers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The LA Lakers' last season was marked by a mix of high-profile talent and challenging dynamics. With LeBron James and Anthony Davis leading the roster, the team aimed to blend experience with emerging talent for a strong playoff push."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "6") {
        PG.textContent = "J Morant";
        SG.textContent = "M Smart";
        SF.textContent = "D Bane";
        PF.textContent = "J Jackson Jr";
        C.textContent = "S Adams";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/memphis.gif";

        MainFetchPopUp("/basket/present/western/json/memphis.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Memphis Grizzlies' last season showcased their emergence as a powerhouse in the NBA. Led by the electrifying Ja Morant, the team combined youthful energy with gritty, dynamic play."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "7") {
        PG.textContent = "A Edwards";
        SG.textContent = "J McDaniels";
        SF.textContent = "N Reid";
        PF.textContent = "KA Towns";
        C.textContent = "R Gobert";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/minnesota.gif";

        MainFetchPopUp("/basket/present/western/json/minnesota.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, the Minnesota Timberwolves displayed a promising mix of young talent and veteran leadership. Anchored by stars like Karl-Anthony Towns and Anthony Edwards, the team focused on building chemistry and consistency."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "8") {
        PG.textContent = "CJ McCollum";
        SG.textContent = "H Jones";
        SF.textContent = "B Ingram";
        PF.textContent = "Z Williamson";
        C.textContent = "J Valanciunas";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/new orleans.gif";

        MainFetchPopUp("/basket/present/western/json/new orleans.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The New Orleans Pelicans' last season was highlighted by their rising potential in the NBA. With a core led by Zion Williamson, Brandon Ingram, and CJ McCollum, the Pelicans blended athleticism, scoring prowess, and strategic gameplay."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "9") {
        PG.textContent = "S Gilgeous-Alexander";
        SG.textContent = "J Giddey";
        SF.textContent = "J Williams";
        PF.textContent = "L Dort";
        C.textContent = "C Holmgren";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/oklahoma city.gif";

        MainFetchPopUp("/basket/present/western/json/oklahoma city.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Oklahoma City Thunder's 2022-23 season was marked by a focus on youth development and rebuilding. With promising talents like Shai Gilgeous-Alexander and a host of young prospects, the team aimed to lay a strong foundation for the future. "
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "10") {
        PG.textContent = "D Booker";
        SG.textContent = "B Beal";
        SF.textContent = "E Gordon";
        PF.textContent = "K Durant";
        C.textContent = "J Nurkic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/phoenix.gif";

        MainFetchPopUp("/basket/present/western/json/phoenix.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, the Phoenix Suns, led by stars Devin Booker and Chris Paul, aimed to continue their recent success in the NBA. Known for their cohesive team play and strong coaching, the Suns combined a high-powered offense with strategic defense."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "11") {
        PG.textContent = "M Brogdon";
        SG.textContent = "A Simons";
        SF.textContent = "S Sharpe";
        PF.textContent = "D Ayton";
        C.textContent = "R Williams III";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/portland.gif";

        MainFetchPopUp("/basket/present/western/json/portland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Portland Trail Blazers' last season was centered around rebuilding and resilience. With star Damian Lillard at the helm, the team aimed to blend his leadership with emerging talents like Anfernee Simons."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "12") {
        PG.textContent = "D Fox";
        SG.textContent = "M Monk";
        SF.textContent = "H Barnes";
        PF.textContent = "K Murray";
        C.textContent = "D Sabonis";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/sacramento.gif";

        MainFetchPopUp("/basket/present/western/json/sacramento.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Sacramento Kings' last season was a period of transition and growth. Led by De'Aaron Fox and with the addition of new talents, the team focused on building a competitive roster."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "13") {
        PG.textContent = "V Wembanyama";
        SG.textContent = "Tr Jones";
        SF.textContent = "K Johnson";
        PF.textContent = "D Vassell";
        C.textContent = "Z Collins";


        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/san antonio.gif";

        MainFetchPopUp("/basket/present/western/json/san antonio.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The San Antonio Spurs' last season was marked by a period of rebuilding and development. Under the guidance of Coach Gregg Popovich, the team focused on nurturing young talents like Dejounte Murray."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "14") {
        PG.textContent = "C Sexton";
        SG.textContent = "J Clarkson";
        SF.textContent = "L Markkanen";
        PF.textContent = "J Collins";
        C.textContent = "W Kessler";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/utah.gif";

        MainFetchPopUp("/basket/present/western/json/utah.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Last year, the Utah Jazz underwent significant changes, focusing on rebuilding with a blend of veterans and young talents.The team, known for its strong defensive play and cohesive teamwork, aimed to maintain competitiveness in the Western Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    function clearAndFadeInElements() {
        const elements = [
            SG, SG2, PG, PG2, SF, SF2, PF, PF2, C, C2
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