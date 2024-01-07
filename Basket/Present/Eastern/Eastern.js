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

    window.onload = function () {
        yearSelector.selectedIndex = 0;

    }

    const containers = document.querySelectorAll(".carousel-item");

    // Function to handle mouseover
    const handleMouseover = (event) => {
        // Find the image and paragraph within the container
        const img = event.currentTarget.querySelector("img");
        const p = event.currentTarget.querySelector("p");

        // Modify the image
        img.style.height = "31%";
        img.style.transform = "translateY(-65px)";

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


    selectedYear = yearSelector.value;

    if (selectedYear == "0") {
        PG.textContent = "T Young";
        SG.textContent = "D Murray";
        SF.textContent = "Bog Bogdanovic";
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
            sideModal.textContent = "Atlanta Hawks' last season was highlighted by the exceptional play of Trae Young, with important contributions from players like John Collins and Clint Capela. Their focus on dynamic offense and team synergy aimed to solidify their position in the NBA's Eastern Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "1") {
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
            sideModal.textContent = "The Boston Celtics' last season was characterized by their strong championship aspirations. Building on their previous success, the team, led by stars Jayson Tatum and Jaylen Brown, showcased a formidable blend of offensive firepower and stout defense."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "2") {
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
            sideModal.textContent = "The Brooklyn Nets' last season was marked by high expectations and star power. With a roster featuring Kevin Durant and Kyrie Irving, the team aimed to capitalize on its offensive prowess and deep talent pool."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "3") {
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
            sideModal.textContent = "The Charlotte Hornets' last season was a journey of growth and potential. Led by LaMelo Ball, the team showcased a vibrant, up-tempo style of play. Focused on developing young talent like Miles Bridges, they aimed to establish themselves as playoff contenders in the Eastern Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "4") {
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
            sideModal.textContent = "The Chicago Bulls' last season was highlighted by a mix of established talent and emerging stars. Led by DeMar DeRozan and Zach LaVine, the team aimed to build on their cohesive play and offensive strengths."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "5") {
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
            sideModal.textContent = "The Cleveland Cavaliers' 2022-23 season showcased a team on the rise in the NBA. Led by young stars like Darius Garland and Evan Mobley, the Cavs displayed a blend of dynamic offense and solid defense."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "6") {
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
            sideModal.textContent = "The Detroit Pistons' 2022-23 season was centered around rebuilding and developing young talent. With a core led by Cade Cunningham, the team focused on growth and potential."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "7") {
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
            sideModal.textContent = "The Indiana Pacers' 2022-23 season was marked by a period of transition and rebuilding. Emphasizing the development of young players like Tyrese Haliburton, the team aimed to establish a new identity."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "8") {
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
            sideModal.textContent = "The Miami Heat's 2022-23 season was characterized by their signature resilience and strategic gameplay. With key players like Jimmy Butler and Bam Adebayo, the team combined a tough defensive stance with efficient offense."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "9") {
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
            sideModal.textContent = "The Milwaukee Bucks' 2022-23 season was highlighted by their continued status as a top NBA contender. With two-time MVP Giannis Antetokounmpo leading the charge, the team combined dominant inside play with solid defense and sharpshooting. "
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "10") {
        PG.textContent = "J Brunson";
        SG.textContent = "D DiVincenzo";
        SF.textContent = "OG Anunoby";
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
            sideModal.textContent = "The New York Knicks' 2022-23 season was a quest for resurgence in the NBA. With Julius Randle leading and the emergence of RJ Barrett, the team focused on combining veteran leadership with young talent."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "11") {
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
            sideModal.textContent = "The Orlando Magic in the 2022 - 2023 NBA season showcased a young and evolving team with a focus on development and growth.They displayed flashes of potential and exciting play, particularly from emerging talents like Paolo Banchero and Franz Wagner."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "12") {
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
            sideModal.textContent = "The Philadelphia 76ers in the 2022-2023 NBA season demonstrated a strong competitive edge, led by stars Joel Embiid and James Harden. Their blend of offensive prowess and defensive strength kept them as contenders in the Eastern Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "13") {
        PG.textContent = "I Quickley";
        SG.textContent = "RJ Barrett";
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
            sideModal.textContent = "The Toronto Raptors in the 2022-2023 season displayed a unique blend of athleticism and versatility, led by Pascal Siakam and Fred VanVleet. Known for their defensive tenacity and innovative coaching strategies, the team navigated through a competitive Eastern Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "14") {
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
            sideModal.textContent = "The Washington Wizards in the 2022-2023 season displayed a combination of potential and challenges. With Bradley Beal as the focal point, they experienced fluctuating performance in the Eastern Conference."
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
        PG.textContent = "T Young";
        SG.textContent = "D Murray";
        SF.textContent = "Bog Bogdanovic";
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
            sideModal.textContent = "The Atlanta Hawks' 2022-23 season was highlighted by the exceptional play of Trae Young, with important contributions from players like John Collins and Clint Capela. Their focus on dynamic offense and team synergy aimed to solidify their position in the NBA's Eastern Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "1") {
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
            sideModal.textContent = "The Boston Celtics' 2022-23 season was characterized by their strong championship aspirations. Building on their previous success, the team, led by stars Jayson Tatum and Jaylen Brown, showcased a formidable blend of offensive firepower and stout defense."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "2") {
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
            sideModal.textContent = "The Brooklyn Nets' 2022-23 season was marked by high expectations and star power. With a roster featuring Kevin Durant and Kyrie Irving, the team aimed to capitalize on its offensive prowess and deep talent pool."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "3") {
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
            sideModal.textContent = "The Charlotte Hornets' 2022-23 season was a journey of growth and potential. Led by LaMelo Ball, the team showcased a vibrant, up-tempo style of play. Focused on developing young talent like Miles Bridges, they aimed to establish themselves as playoff contenders in the Eastern Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "4") {
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
            sideModal.textContent = "The Chicago Bulls' 2022-23 season was highlighted by a mix of established talent and emerging stars. Led by DeMar DeRozan and Zach LaVine, the team aimed to build on their cohesive play and offensive strengths."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "5") {
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
            sideModal.textContent = "The Cleveland Cavaliers' 2022-23 season showcased a team on the rise in the NBA. Led by young stars like Darius Garland and Evan Mobley, the Cavs displayed a blend of dynamic offense and solid defense."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "6") {
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
            sideModal.textContent = "The Detroit Pistons' 2022-23 season was centered around rebuilding and developing young talent. With a core led by Cade Cunningham, the team focused on growth and potential."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "7") {
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
            sideModal.textContent = "The Indiana Pacers' 2022-23 season was marked by a period of transition and rebuilding. Emphasizing the development of young players like Tyrese Haliburton, the team aimed to establish a new identity."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "8") {
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
            sideModal.textContent = "The Miami Heat's 2022-23 season was characterized by their signature resilience and strategic gameplay. With key players like Jimmy Butler and Bam Adebayo, the team combined a tough defensive stance with efficient offense."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "9") {
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
            sideModal.textContent = "The Milwaukee Bucks' 2022-23 season was highlighted by their continued status as a top NBA contender. With two-time MVP Giannis Antetokounmpo leading the charge, the team combined dominant inside play with solid defense and sharpshooting. "
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "10") {
        PG.textContent = "J Brunson";
        SG.textContent = "D DiVincenzo";
        SF.textContent = "OG Anunoby";
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
            sideModal.textContent = "The New York Knicks' 2022-23 season was a quest for resurgence in the NBA. With Julius Randle leading and the emergence of RJ Barrett, the team focused on combining veteran leadership with young talent."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "11") {
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
            sideModal.textContent = "The Orlando Magic in the 2022 - 2023 NBA season showcased a young and evolving team with a focus on development and growth.They displayed flashes of potential and exciting play, particularly from emerging talents like Paolo Banchero and Franz Wagner."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "12") {
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
            sideModal.textContent = "The Philadelphia 76ers in the 2022-2023 NBA season demonstrated a strong competitive edge, led by stars Joel Embiid and James Harden. Their blend of offensive prowess and defensive strength kept them as contenders in the Eastern Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "13") {
        PG.textContent = "I Quickley";
        SG.textContent = "RJ Barrett";
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
            sideModal.textContent = "The Toronto Raptors in the 2022-2023 season displayed a unique blend of athleticism and versatility, led by Pascal Siakam and Fred VanVleet. Known for their defensive tenacity and innovative coaching strategies, the team navigated through a competitive Eastern Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "14") {
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
            sideModal.textContent = "The Washington Wizards in the 2022-2023 season displayed a combination of potential and challenges. With Bradley Beal as the focal point, they experienced fluctuating performance in the Eastern Conference."
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