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
        PG.textContent = "T Young";
        SG.textContent = "D Murray";
        SF.textContent = "D Hunter";
        PF.textContent = "O Okongwu";
        C.textContent = "C Capela";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/atlanta.gif";

        MainFetchPopUp("/basket/present/eastern/json/atlanta.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In the 2022-23 NBA season, the Atlanta Hawks finished with a balanced 41-41 record, ranking first in the Southeast Division and seventh in the Eastern Conference. Their journey, marked by a coaching change, concluded with a first-round playoff exit against the Boston Celtics."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "1") {
        PG.textContent = "J Holiday";
        SG.textContent = "D White";
        SF.textContent = "J Brown";
        PF.textContent = "J Tatum";
        C.textContent = "K Porzingis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/boston.gif";

        MainFetchPopUp("/basket/present/eastern/json/boston.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In the 2022-23 NBA season, the Boston Celtics, under first-year head coach Joe Mazzulla, achieved a 57-25 record, their best in 13 years. They reached the Eastern Conference Finals, showcasing resilience and skill, led by Jayson Tatum's historic scoring performance."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "2") {
        PG.textContent = "S Dinwiddie";
        SG.textContent = "Mik Bridges";
        SF.textContent = "C Thomas";
        PF.textContent = "C Johnson";
        C.textContent = "N Claxton";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/brooklyn.gif";

        MainFetchPopUp("/basket/present/eastern/json/brooklyn.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Brooklyn Nets' 2022-23 season was a rollercoaster, finishing with a 45-37 record and ranking sixth in the Eastern Conference. Amidst coaching changes and challenges, they showcased resilience with a 12-game win streak but also faced a 5-game losing streak, reflecting a period of transition and adaptation in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "3") {
        PG.textContent = "La Ball";
        SG.textContent = "T Rozier III";
        SF.textContent = "G Hayward";
        PF.textContent = "PJ Washington";
        C.textContent = "M Williams";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Charlotte.gif";

        MainFetchPopUp("/basket/present/eastern/json/Charlotte.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Charlotte Hornets faced a challenging 2022-23 NBA season, finishing with a 27-55 record. This placed them last in the Southeast Division and 14th in the Eastern Conference. The season was marked by a coaching change, with Steve Clifford replacing James Borrego. Despite some potential, the team struggled to find a consistent winning strategy, resulting in a season without a playoff appearance."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "4") {
        PG.textContent = "Lo Ball";
        SG.textContent = "Z LaVine";
        SF.textContent = "A Caruso";
        PF.textContent = "D DeRozan";
        C.textContent = "N Vucevic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Chicago.gif";

        MainFetchPopUp("/basket/present/eastern/json/Chicago.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Chicago Bulls experienced an inconsistent 2022-23 season, finishing with a 40-42 record. This performance placed them tenth in the Eastern Conference and third in the Central Division, making them part of the play-in tournament. However, their season was marked by a failure to advance to the playoffs. The Bulls displayed potential in some games but couldn't maintain a consistent winning momentum throughout the season"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "5") {
        PG.textContent = "D Garland";
        SG.textContent = "D Mitchell";
        SF.textContent = "C LeVert";
        PF.textContent = "E Mobley";
        C.textContent = "J Allen";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Cleveland.gif";

        MainFetchPopUp("/basket/present/eastern/json/Cleveland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Cleveland Cavaliers concluded the 2022-23 season with a commendable 51-31 record, securing second place in the Central Division and fourth in the Eastern Conference. Their season was highlighted by the acquisition of Donovan Mitchell and marked a return to the playoffs for the first time since 2018. However, their postseason journey ended in the first round with a defeat to the New York Knicks in five games."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "6") {
        PG.textContent = "C Cunningham";
        SG.textContent = "J Ivey";
        SF.textContent = "A Thompson";
        PF.textContent = "B Bogdanovic";
        C.textContent = "J Duren";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Detroit.gif";

        MainFetchPopUp("/basket/present/eastern/json/Detroit.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Detroit Pistons faced significant challenges in the 2022-23 NBA season, finishing with a 17-65 record. This performance placed them at the bottom of both the Central Division and the Eastern Conference. Their season marked the fourth consecutive year without a playoff appearance and was the final season under head coach Dwane Casey. The team’s struggle was evident, resulting in one of the worst records in their franchise history and highlighting a phase of rebuilding and development."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "7") {
        PG.textContent = "T Haliburton";
        SG.textContent = "B Brown";
        SF.textContent = "B Hield";
        PF.textContent = "B Mathurin";
        C.textContent = "M Turner";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Indiana.gif";

        MainFetchPopUp("/basket/present/eastern/json/Indiana.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Indiana Pacers' 2022-23 NBA season ended with a 35-47 record, placing them fourth in the Central Division and eleventh in the Eastern Conference. Notable achievements included Tyrese Haliburton's first NBA All-Star appearance and Buddy Hield breaking the franchise record for most three-pointers in a season. The season was marked by key trades and the emergence of promising talents like Bennedict Mathurin and Andrew Nembhard, signaling a period of rebuilding and growth for the team."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "8") {
        PG.textContent = "T Herro";
        SG.textContent = "C Martin";
        SF.textContent = "J Butler";
        PF.textContent = "D Robinson";
        C.textContent = "B Adebayo";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Miami.gif";

        MainFetchPopUp("/basket/present/eastern/json/Miami.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Miami Heat concluded the 2022-23 NBA season with a 44-38 record, winning the Southeast Division. They made a remarkable playoff run, upsetting the top-seeded Milwaukee Bucks in the first round and reaching the NBA Finals, where they lost to the Denver Nuggets. The season was also marked by Udonis Haslem's retirement after a 20-year career with the Heat."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "9") {
        PG.textContent = "D Lillard";
        SG.textContent = "K Middleton";
        SF.textContent = "G Antetokounmpo";
        PF.textContent = "B Portis";
        C.textContent = "B Lopez";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Milwaukee.gif";

        MainFetchPopUp("/basket/present/eastern/json/Milwaukee.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = ""
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "10") {
        PG.textContent = "J Brunson";
        SG.textContent = "I Quickley";
        SF.textContent = "RJ Barrett";
        PF.textContent = "J Randle";
        C.textContent = "M Robinson";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/New York.gif";

        MainFetchPopUp("/basket/present/eastern/json/New York.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = ""
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "11") {
        PG.textContent = "M Fultz";
        SG.textContent = "Co Anthony";
        SF.textContent = "F Wagner";
        PF.textContent = "P Banchero";
        C.textContent = "W Carter Jr";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Orlando.gif";

        MainFetchPopUp("/basket/present/eastern/json/Orlando.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = ""
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "12") {
        PG.textContent = "T Maxey";
        SG.textContent = "K Oubre Jr";
        SF.textContent = "T Harris";
        PF.textContent = "KJ Martin Jr";
        C.textContent = "J Embiid";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Philadelphia.gif";

        MainFetchPopUp("/basket/present/eastern/json/Phildadelphia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = ""
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "13") {
        PG.textContent = "D Schroder";
        SG.textContent = "OG Anunoby";
        SF.textContent = "S Barnes";
        PF.textContent = "P Siakam";
        C.textContent = "J Poeltl";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Toronto.gif";

        MainFetchPopUp("/basket/present/eastern/json/Toronto.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = ""
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "14") {
        PG.textContent = "Ty Jones";
        SG.textContent = "J Poole";
        SF.textContent = "K Kuzma";
        PF.textContent = "D Avdija";
        C.textContent = "D Gallinari";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Washington.gif";

        MainFetchPopUp("/basket/present/eastern/json/Washington.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = ""
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

    if (selectedYear === "0") {
        PG.textContent = "T Young";
        SG.textContent = "D Murray";
        SF.textContent = "D Hunter";
        PF.textContent = "O Okongwu";
        C.textContent = "C Capela";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/atlanta.gif";

        MainFetchPopUp("/basket/present/eastern/json/atlanta.json");
    }

    if (selectedYear === 1) {
        PG.textContent = "J Holiday";
        SG.textContent = "D White";
        SF.textContent = "J Brown";
        PF.textContent = "J Tatum";
        C.textContent = "K Porzingis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/boston.gif";

        MainFetchPopUp("/basket/present/eastern/json/boston.json");
    }

    if (selectedYear === 2) {
        PG.textContent = "S Dinwiddie";
        SG.textContent = "M Bridges";
        SF.textContent = "C Thomas";
        PF.textContent = "C Johnson";
        C.textContent = "N Claxton";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/brooklyn.gif";

        MainFetchPopUp("/basket/present/eastern/json/brooklyn.json");
    }

    if (selectedYear === 3) {
        PG.textContent = "La Ball";
        SG.textContent = "T Rozier III";
        SF.textContent = "G Hayward";
        PF.textContent = "PJ Washington";
        C.textContent = "M Williams";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Charlotte.gif";

        MainFetchPopUp("/basket/present/eastern/json/Charlotte.json");
    }

    if (selectedYear === 4) {
        PG.textContent = "Lo Ball";
        SG.textContent = "Z LaVine";
        SF.textContent = "A Caruso";
        PF.textContent = "D DeRozan";
        C.textContent = "N Vucevic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Chicago.gif";

        MainFetchPopUp("/basket/present/eastern/json/Chicago.json");
    }

    if (selectedYear === 5) {
        PG.textContent = "D Garland";
        SG.textContent = "D Mitchell";
        SF.textContent = "C LeVert";
        PF.textContent = "E Mobley";
        C.textContent = "J Allen";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Cleveland.gif";

        MainFetchPopUp("/basket/present/eastern/json/Cleveland.json");
    }

    if (selectedYear === 6) {
        PG.textContent = "C Cunningham";
        SG.textContent = "J Ivey";
        SF.textContent = "A Thompson";
        PF.textContent = "B Bogdanovic";
        C.textContent = "J Duren";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Detroit.gif";

        MainFetchPopUp("/basket/present/eastern/json/Detroit.json");
    }

    if (selectedYear === 7) {
        PG.textContent = "T Haliburton";
        SG.textContent = "B Brown";
        SF.textContent = "B Hield";
        PF.textContent = "B Mathurin";
        C.textContent = "M Turner";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Indiana.gif";

        MainFetchPopUp("/basket/present/eastern/json/Indiana.json");
    }

    if (selectedYear === 8) {
        PG.textContent = "T Herro";
        SG.textContent = "C Martin";
        SF.textContent = "J Butler";
        PF.textContent = "D Robinson";
        C.textContent = "B Adebayo";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Miami.gif";

        MainFetchPopUp("/basket/present/eastern/json/Miami.json");
    }

    if (selectedYear === 9) {
        PG.textContent = "D Lillard";
        SG.textContent = "K Middleton";
        SF.textContent = "G Antetokounmpo";
        PF.textContent = "B Portis";
        C.textContent = "B Lopez";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Milwaukee.gif";

        MainFetchPopUp("/basket/present/eastern/json/Milwaukee.json");
    }

    if (selectedYear === 10) {
        PG.textContent = "J Brunson";
        SG.textContent = "I Quickley";
        SF.textContent = "RJ Barrett";
        PF.textContent = "J Randle";
        C.textContent = "M Robinson";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/New York.gif";

        MainFetchPopUp("/basket/present/eastern/json/New York.json");
    }

    if (selectedYear === 12) {
        PG.textContent = "M Fultz";
        SG.textContent = "Co Anthony";
        SF.textContent = "F Wagner";
        PF.textContent = "P Banchero";
        C.textContent = "W Carter Jr";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Orlando.gif";

        MainFetchPopUp("/basket/present/eastern/json/Orlando.json");
    }

    if (selectedYear === 12) {
        PG.textContent = "T Maxey";
        SG.textContent = "K Oubre Jr";
        SF.textContent = "T Harris";
        PF.textContent = "KJ Martin Jr";
        C.textContent = "J Embiid";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Philadelphia.gif";

        MainFetchPopUp("/basket/present/eastern/json/Phildadelphia.json");
    }

    if (selectedYear === 13) {
        PG.textContent = "D Schroder";
        SG.textContent = "OG Anunoby";
        SF.textContent = "S Barnes";
        PF.textContent = "P Siakam";
        C.textContent = "J Poeltl";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Toronto.gif";

        MainFetchPopUp("/basket/present/eastern/json/Toronto.json");
    }

    if (selectedYear === 14) {
        PG.textContent = "Ty Jones";
        SG.textContent = "J Poole";
        SF.textContent = "K Kuzma";
        PF.textContent = "D Avdija";
        C.textContent = "D Gallinari";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/Washington.gif";

        MainFetchPopUp("/basket/present/eastern/json/Washington.json");
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