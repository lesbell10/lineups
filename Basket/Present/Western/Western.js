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

let selectedYear = 0

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear === "0") {
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
            sideModal.textContent = "The Dallas Mavericks' 2022-23 season was marked by dynamic performances and strategic play. Led by star Luka Dončić, the team demonstrated strong offensive capabilities and resilience. "
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "1") {
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
            sideModal.textContent = "In the 2022-23 season, the Denver Nuggets, led by MVP Nikola Jokić, showcased a powerful mix of talent and strategic gameplay in the NBA. With a strong supporting cast including Jamal Murray and Michael Porter Jr., the Nuggets won the NBA Finals against the Miami Heat."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "2") {
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
            sideModal.textContent = "In the 2022-23 season, the Golden State Warriors continued their legacy as a dominant force in the NBA. With star players like Stephen Curry, Klay Thompson, and Draymond Green, they displayed exceptional skill and teamwork."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "3") {
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
            sideModal.textContent = "During the 2022-23 season, the Houston Rockets focused on rebuilding with a young roster. Emphasizing development, the team, led by players like Jalen Green and Kevin Porter Jr., showcased potential and growth. "
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "4") {
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
            sideModal.textContent = "The LA Clippers' 2022-23 season was characterized by high expectations with a roster boasting stars like Kawhi Leonard and Paul George. After overcoming injury setbacks, the team aimed to capitalize on its deep, talented lineup to make a significant impact in the NBA."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "5") {
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
            sideModal.textContent = "The LA Lakers' 2022-23 season was marked by a mix of high-profile talent and challenging dynamics. With LeBron James and Anthony Davis leading the roster, the team aimed to blend experience with emerging talent for a strong playoff push."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "6") {
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
            sideModal.textContent = "The Memphis Grizzlies' 2022-23 season showcased their emergence as a powerhouse in the NBA. Led by the electrifying Ja Morant, the team combined youthful energy with gritty, dynamic play."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "7") {
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
            sideModal.textContent = "In the 2022-23 season, the Minnesota Timberwolves displayed a promising mix of young talent and veteran leadership. Anchored by stars like Karl-Anthony Towns and Anthony Edwards, the team focused on building chemistry and consistency."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "8") {
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
            sideModal.textContent = "The New Orleans Pelicans' 2022-23 season was highlighted by their rising potential in the NBA. With a core led by Zion Williamson, Brandon Ingram, and CJ McCollum, the Pelicans blended athleticism, scoring prowess, and strategic gameplay."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "9") {
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

    if (selectedYear === "10") {
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
            sideModal.textContent = "In the 2022-23 season, the Phoenix Suns, led by stars Devin Booker and Chris Paul, aimed to continue their recent success in the NBA. Known for their cohesive team play and strong coaching, the Suns combined a high-powered offense with strategic defense."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "11") {
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
            sideModal.textContent = "The Portland Trail Blazers' 2022-23 season was centered around rebuilding and resilience. With star Damian Lillard at the helm, the team aimed to blend his leadership with emerging talents like Anfernee Simons."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "12") {
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
            sideModal.textContent = "The Sacramento Kings' 2022-23 season was a period of transition and growth. Led by De'Aaron Fox and with the addition of new talents, the team focused on building a competitive roster."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "13") {
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
            sideModal.textContent = "The San Antonio Spurs' 2022-23 season was marked by a period of rebuilding and development. Under the guidance of Coach Gregg Popovich, the team focused on nurturing young talents like Dejounte Murray."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "14") {
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
            sideModal.textContent = "In the 2022 - 23 season, the Utah Jazz underwent significant changes, focusing on rebuilding with a blend of veterans and young talents.The team, known for its strong defensive play and cohesive teamwork, aimed to maintain competitiveness in the Western Conference."
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

    if (selectedYear === 0) {
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
    }

    if (selectedYear === 1) {
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
    }

    if (selectedYear === 2) {
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
    }

    if (selectedYear === 3) {
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
    }

    if (selectedYear === 4) {
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
    }

    if (selectedYear === 5) {
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
    }

    if (selectedYear === 6) {
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
    }

    if (selectedYear === 7) {
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
    }

    if (selectedYear === 8) {
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
    }

    if (selectedYear === 9) {
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
    }

    if (selectedYear === 10) {
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
    }

    if (selectedYear === 11) {
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
    }

    if (selectedYear === 12) {
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
    }

    if (selectedYear === 13) {
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
    }

    if (selectedYear === 14) {
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