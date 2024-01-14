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

window.onload = function () {
    yearSelector.selectedIndex = 0;
}


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
        SG.textContent = "J Kidd";
        SF.textContent = "M Ellis";
        PF.textContent = "D Nowitzki";
        C.textContent = "T Chandler";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/dallas.gif";

        MainFetchPopUp("/basket/present/eastern/json/dallas.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Dallas Mavericks experienced ups and downs. They won an NBA championship in 2011 led by Dirk Nowitzki but later faced challenges, focusing on rebuilding and the emergence of young talents like Luka Dončić."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "1") {

        PG.textContent = "T Lawson";
        SG.textContent = "J Murray";
        SF.textContent = "C Anthony";
        PF.textContent = "K Faried";
        C.textContent = "N Jokic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/denver.gif";

        MainFetchPopUp("/basket/present/eastern/json/denver.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Denver Nuggets went from a rebuilding team to Western Conference contenders. They developed a young core led by Nikola Jokić and Jamal Murray, making deep playoff runs and becoming a formidable force in the NBA."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }


    if (selectedYear == "2") {

        PG.textContent = "S Curry";
        SG.textContent = "K Thompson";
        SF.textContent = "A Iguodala";
        PF.textContent = "K Durant";
        C.textContent = "D Green";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/golden state.gif";

        MainFetchPopUp("/basket/present/eastern/json/golden state.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Golden State Warriors transformed into an NBA dynasty, winning three championships (2015, 2017, 2018). Led by Stephen Curry, Klay Thompson, and Draymond Green, they set records for regular-season success and became one of the league's iconic teams."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "3") {

        PG.textContent = "C Paul";
        SG.textContent = "J Harden";
        SF.textContent = "R Westbrook";
        PF.textContent = "C Capela";
        C.textContent = "D Howard";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/houston.gif";

        MainFetchPopUp("/basket/present/eastern/json/houston.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Houston Rockets consistently contended in the Western Conference. They formed \"Lob City\" with James Harden and Dwight Howard, later transitioning to a more three-point-centric style. Despite strong regular seasons, a championship remained elusive."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "4") {

        PG.textContent = "C Paul";
        SG.textContent = "P George";
        SF.textContent = "K Leonard";
        PF.textContent = "B Griffin";
        C.textContent = "D Jordan";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la clippers.gif";

        MainFetchPopUp("/basket/present/eastern/json/la clippers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the LA Clippers transformed into a competitive team in the Western Conference. They acquired stars like Chris Paul, Blake Griffin, and DeAndre Jordan, but playoff success eluded them, despite becoming perennial contenders."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "5") {

        PG.textContent = "K Bryant";
        SG.textContent = "L James";
        SF.textContent = "R Artest III";
        PF.textContent = "D Howard";
        C.textContent = "P Gasol";

        PG2.src = "/basket/img/players/" + PG.textContent + ".webp";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la lakers.gif";

        MainFetchPopUp("/basket/present/eastern/json/la lakers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the LA Lakers experienced highs and lows. They won NBA championships in 2010 and 2020, led by Kobe Bryant and LeBron James, while enduring periods of rebuilding. The decade marked a transition from the Kobe era to a new era of Lakers success."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "6") {

        PG.textContent = "M Conley";
        SG.textContent = "T Allen";
        SF.textContent = "R Gay";
        PF.textContent = "Z Randolph";
        C.textContent = "M Gasol";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/memphis.gif";

        MainFetchPopUp("/basket/present/eastern/json/memphis.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Memphis Grizzlies became known for their \"Grit and Grind\" style, led by Zach Randolph and Marc Gasol. They consistently made playoff appearances in the tough Western Conference but fell short of an NBA championship."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "7") {

        PG.textContent = "R Rubio";
        SG.textContent = "A Wiggins";
        SF.textContent = "J Butler";
        PF.textContent = "K Love";
        C.textContent = "KA Towns";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/minnesota.gif";

        MainFetchPopUp("/basket/present/eastern/json/minnesota.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "During 2010-2020, the Minnesota Timberwolves struggled for playoff success despite acquiring top talent like Karl-Anthony Towns and Andrew Wiggins. They underwent coaching changes and focused on building a competitive roster for the future."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "8") {

        PG.textContent = "C Paul";
        SG.textContent = "J Holiday";
        SF.textContent = "Z Williamson";
        PF.textContent = "A Davis";
        C.textContent = "D Cousins";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/new orleans.gif";

        MainFetchPopUp("/basket/present/eastern/json/new orleans.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the New Orleans Pelicans underwent various phases, highlighted by the arrival of Anthony Davis. Despite individual success, they faced challenges in becoming a consistent playoff contender in the Western Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "9") {

        PG.textContent = "R Westbrook";
        SG.textContent = "J Harden";
        SF.textContent = "P George";
        PF.textContent = "K Durant";
        C.textContent = "S Ibaka";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/oklahoma city.gif";

        MainFetchPopUp("/basket/present/eastern/json/oklahoma city.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Oklahoma City Thunder transitioned from a young team to NBA Finals contenders, led by Kevin Durant, Russell Westbrook, and James Harden. They consistently made the playoffs but didn't secure an NBA championship."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "10") {

        PG.textContent = "S Nash";
        SG.textContent = "C Paul";
        SF.textContent = "G Dragic";
        PF.textContent = "A Stoudemire";
        C.textContent = "D Ayton";

        PG2.src = "/basket/img/players/" + PG.textContent + ".webp";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/phoenix.gif";

        MainFetchPopUp("/basket/past/western/json/phoenix.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "During 2010-2020, the Phoenix Suns experienced ups and downs. They reached the Western Conference Finals in 2021, fueled by Devin Booker and Chris Paul. Prior to that, they faced years of rebuilding and inconsistent performance."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "11") {

        PG.textContent = "D Lillard";
        SG.textContent = "CJ McCollum";
        SF.textContent = "N Batum";
        PF.textContent = "L Aldridge";
        C.textContent = "J Nurkic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/portland.gif";

        MainFetchPopUp("/basket/present/eastern/json/portland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Portland Trail Blazers remained competitive in the Western Conference, led by Damian Lillard and CJ McCollum. They made multiple playoff appearances but struggled to advance deep into the postseason."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "12") {

        PG.textContent = "I Thomas";
        SG.textContent = "T Evans";
        SF.textContent = "B Hield"
        PF.textContent = "R Gay";
        C.textContent = "D Cousins";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/sacramento.gif";

        MainFetchPopUp("/basket/present/eastern/json/sacramento.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Sacramento Kings faced challenges in rebuilding and consistent playoff contention. They had promising young talents like De'Aaron Fox but struggled to secure a postseason spot in the highly competitive Western Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "13") {

        PG.textContent = "T Parker";
        SG.textContent = "M Ginobili";
        SF.textContent = "K Leonard";
        PF.textContent = "T Duncan";
        C.textContent = "L Aldridge";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".webp";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/san antonio.gif";

        MainFetchPopUp("/basket/present/eastern/json/san antonio.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the San Antonio Spurs remained a model of consistency, with Gregg Popovich at the helm. They made multiple playoff appearances, won the 2014 NBA championship, and continued to develop young talents while maintaining a competitive edge in the Western Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "14") {

        PG.textContent = "D Williams";
        SG.textContent = "D Mitchell";
        SF.textContent = "G Hayward";
        PF.textContent = "A Jefferson";
        C.textContent = "R Gobert";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/utah.gif";

        MainFetchPopUp("/basket/present/eastern/json/utah.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "During 2010-2020, the Utah Jazz became known for their defensive prowess and made several playoff appearances. They developed a competitive team with stars like Donovan Mitchell and Rudy Gobert but faced challenges advancing deep in the playoffs."
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
        SG.textContent = "J Kidd";
        SF.textContent = "M Ellis";
        PF.textContent = "D Nowitzki";
        C.textContent = "T Chandler";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/dallas.gif";

        MainFetchPopUp("/basket/present/eastern/json/dallas.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Dallas Mavericks experienced ups and downs. They won an NBA championship in 2011 led by Dirk Nowitzki but later faced challenges, focusing on rebuilding and the emergence of young talents like Luka Dončić."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "1") {

        PG.textContent = "T Lawson";
        SG.textContent = "J Murray";
        SF.textContent = "C Anthony";
        PF.textContent = "K Faried";
        C.textContent = "N Jokic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/denver.gif";

        MainFetchPopUp("/basket/present/eastern/json/denver.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Denver Nuggets went from a rebuilding team to Western Conference contenders. They developed a young core led by Nikola Jokić and Jamal Murray, making deep playoff runs and becoming a formidable force in the NBA."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }


    if (selectedYear == "2") {

        PG.textContent = "S Curry";
        SG.textContent = "K Thompson";
        SF.textContent = "A Iguodala";
        PF.textContent = "K Durant";
        C.textContent = "D Green";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/golden state.gif";

        MainFetchPopUp("/basket/present/eastern/json/golden state.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Golden State Warriors transformed into an NBA dynasty, winning three championships (2015, 2017, 2018). Led by Stephen Curry, Klay Thompson, and Draymond Green, they set records for regular-season success and became one of the league's iconic teams."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "3") {

        PG.textContent = "C Paul";
        SG.textContent = "J Harden";
        SF.textContent = "R Westbrook";
        PF.textContent = "C Capela";
        C.textContent = "D Howard";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/houston.gif";

        MainFetchPopUp("/basket/present/eastern/json/houston.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Houston Rockets consistently contended in the Western Conference. They formed \"Lob City\" with James Harden and Dwight Howard, later transitioning to a more three-point-centric style. Despite strong regular seasons, a championship remained elusive."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "4") {

        PG.textContent = "C Paul";
        SG.textContent = "P George";
        SF.textContent = "K Leonard";
        PF.textContent = "B Griffin";
        C.textContent = "D Jordan";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la clippers.gif";

        MainFetchPopUp("/basket/present/eastern/json/la clippers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the LA Clippers transformed into a competitive team in the Western Conference. They acquired stars like Chris Paul, Blake Griffin, and DeAndre Jordan, but playoff success eluded them, despite becoming perennial contenders."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "5") {

        PG.textContent = "K Bryant";
        SG.textContent = "L James";
        SF.textContent = "R Artest III";
        PF.textContent = "D Howard";
        C.textContent = "P Gasol";

        PG2.src = "/basket/img/players/" + PG.textContent + ".webp";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la lakers.gif";

        MainFetchPopUp("/basket/present/eastern/json/la lakers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the LA Lakers experienced highs and lows. They won NBA championships in 2010 and 2020, led by Kobe Bryant and LeBron James, while enduring periods of rebuilding. The decade marked a transition from the Kobe era to a new era of Lakers success."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "6") {

        PG.textContent = "M Conley";
        SG.textContent = "T Allen";
        SF.textContent = "R Gay";
        PF.textContent = "Z Randolph";
        C.textContent = "M Gasol";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/memphis.gif";

        MainFetchPopUp("/basket/present/eastern/json/memphis.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Memphis Grizzlies became known for their \"Grit and Grind\" style, led by Zach Randolph and Marc Gasol. They consistently made playoff appearances in the tough Western Conference but fell short of an NBA championship."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "7") {

        PG.textContent = "R Rubio";
        SG.textContent = "A Wiggins";
        SF.textContent = "J Butler";
        PF.textContent = "K Love";
        C.textContent = "KA Towns";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/minnesota.gif";

        MainFetchPopUp("/basket/present/eastern/json/minnesota.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "During 2010-2020, the Minnesota Timberwolves struggled for playoff success despite acquiring top talent like Karl-Anthony Towns and Andrew Wiggins. They underwent coaching changes and focused on building a competitive roster for the future."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "8") {

        PG.textContent = "C Paul";
        SG.textContent = "J Holiday";
        SF.textContent = "Z Williamson";
        PF.textContent = "A Davis";
        C.textContent = "D Cousins";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/new orleans.gif";

        MainFetchPopUp("/basket/present/eastern/json/new orleans.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the New Orleans Pelicans underwent various phases, highlighted by the arrival of Anthony Davis. Despite individual success, they faced challenges in becoming a consistent playoff contender in the Western Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "9") {

        PG.textContent = "R Westbrook";
        SG.textContent = "J Harden";
        SF.textContent = "P George";
        PF.textContent = "K Durant";
        C.textContent = "S Ibaka";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/oklahoma city.gif";

        MainFetchPopUp("/basket/present/eastern/json/oklahoma city.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Oklahoma City Thunder transitioned from a young team to NBA Finals contenders, led by Kevin Durant, Russell Westbrook, and James Harden. They consistently made the playoffs but didn't secure an NBA championship."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "10") {

        PG.textContent = "S Nash";
        SG.textContent = "C Paul";
        SF.textContent = "G Dragic";
        PF.textContent = "A Stoudemire";
        C.textContent = "D Ayton";

        PG2.src = "/basket/img/players/" + PG.textContent + ".webp";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/phoenix.gif";

        MainFetchPopUp("/basket/past/western/json/phoenix.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "During 2010-2020, the Phoenix Suns experienced ups and downs. They reached the Western Conference Finals in 2021, fueled by Devin Booker and Chris Paul. Prior to that, they faced years of rebuilding and inconsistent performance."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "11") {

        PG.textContent = "D Lillard";
        SG.textContent = "CJ McCollum";
        SF.textContent = "N Batum";
        PF.textContent = "L Aldridge";
        C.textContent = "J Nurkic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/portland.gif";

        MainFetchPopUp("/basket/present/eastern/json/portland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Portland Trail Blazers remained competitive in the Western Conference, led by Damian Lillard and CJ McCollum. They made multiple playoff appearances but struggled to advance deep into the postseason."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "12") {

        PG.textContent = "I Thomas";
        SG.textContent = "T Evans";
        SF.textContent = "B Hield"
        PF.textContent = "R Gay";
        C.textContent = "D Cousins";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/sacramento.gif";

        MainFetchPopUp("/basket/present/eastern/json/sacramento.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the Sacramento Kings faced challenges in rebuilding and consistent playoff contention. They had promising young talents like De'Aaron Fox but struggled to secure a postseason spot in the highly competitive Western Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "13") {

        PG.textContent = "T Parker";
        SG.textContent = "M Ginobili";
        SF.textContent = "K Leonard";
        PF.textContent = "T Duncan";
        C.textContent = "L Aldridge";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".webp";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/san antonio.gif";

        MainFetchPopUp("/basket/present/eastern/json/san antonio.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "From 2010 to 2020, the San Antonio Spurs remained a model of consistency, with Gregg Popovich at the helm. They made multiple playoff appearances, won the 2014 NBA championship, and continued to develop young talents while maintaining a competitive edge in the Western Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "14") {

        PG.textContent = "D Williams";
        SG.textContent = "D Mitchell";
        SF.textContent = "G Hayward";
        PF.textContent = "A Jefferson";
        C.textContent = "R Gobert";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/utah.gif";

        MainFetchPopUp("/basket/present/eastern/json/utah.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "During 2010-2020, the Utah Jazz became known for their defensive prowess and made several playoff appearances. They developed a competitive team with stars like Donovan Mitchell and Rudy Gobert but faced challenges advancing deep in the playoffs."
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