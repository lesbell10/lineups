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
    img.style.height = "26%";
    img.style.transform = "translateY(-27%)";

    // Modify the paragraph
    p.style.scale = "1.3";
    p.style.transform = "translateY(2px) translateX(15px)";
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

// Add mouseover and mouseout event listeners to each container
containers.forEach(container => {
    container.addEventListener("mouseover", handleMouseover);
    container.addEventListener("mouseout", handleMouseout);
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;


    if (selectedYear == "0") {
        FL.textContent = "Killorn";
        FC.textContent = "Zegras";
        FR.textContent = "Terry";
        DL.textContent = "Drysdale";
        DR.textContent = "Fowler";
        G.textContent = "Gibson";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/anaheim.gif";

        MainFetchPopUp("/hockey/present/western/json/anaheim.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Anaheim Ducks in the 2022-2023 season were in a transitional phase, focusing on rebuilding and developing their young talent. This period was characterized by integrating promising rookies and younger players into key roles, setting the stage for future growth."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "1") {
        FL.textContent = "Maccelli";
        FC.textContent = "Schmaltz";
        FR.textContent = "Keller";
        DL.textContent = "Dumba";
        DR.textContent = "Durzi";
        G.textContent = "Vejmelka";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/arizona.gif";

        MainFetchPopUp("/hockey/present/western/json/arizona.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Arizona Coyotes in the 2022-2023 season continued their journey through a rebuilding phase, focusing on developing a young and promising roster. The team, while facing the challenges typical of a rebuild, showed signs of growth and potential."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "2") {
        FL.textContent = "Huberdeau";
        FC.textContent = "Kadri";
        FR.textContent = "E Lindholm";
        DL.textContent = "Weegar";
        DR.textContent = "Andersson";
        G.textContent = "Markstrom";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/calgary.gif";

        MainFetchPopUp("/hockey/present/western/json/calgary.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Calgary Flames' last season showcased a team aiming for a strong presence in the NHL. Led by Tyle Toffoli and Elias Lindholm, they focused on an aggressive offense, while Rasmus Andersson anchored the defense. Goaltending from Jacob Markstrom was pivotal."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "3") {

        FL.textContent = "Hall";
        FC.textContent = "Bedard";
        FR.textContent = "Raddysh";
        DL.textContent = "S Jones";
        DR.textContent = "C Murphy";
        G.textContent = "Mrazek";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/chicago.gif";

        MainFetchPopUp("/hockey/present/western/json/chicago.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Calgary Flames in the 2022-2023 season were a team striving to balance their strong offensive capabilities with a solid defensive game. Known for their aggressive and fast-paced style, the Flames showcased a roster capable of high-scoring games, backed by talented forwards and a robust defensive lineup."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });


        FC2.style.width = '120px';
        FC2.style.objectFit = "cover";
    }

    if (selectedYear == "4") {
        FL.textContent = "Landeskog";
        FC.textContent = "MacKinnon";
        FR.textContent = "Rantanen";
        DL.textContent = "Makar";
        DR.textContent = "D Toews";
        G.textContent = "Georgiev";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/colorado.gif";

        MainFetchPopUp("/hockey/present/western/json/colorado.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Colorado Avalanche in the 2022-2023 season continued to assert themselves as one of the top teams in the NHL, building on their recent successes. Known for their high-octane offense and solid defense, the Avalanche demonstrated a well-balanced and dynamic style of play."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "5") {
        FL.textContent = "J Robertson";
        FC.textContent = "Hintz";
        FR.textContent = "Pavelski";
        DL.textContent = "Heiskanen";
        DR.textContent = "Lindell";
        G.textContent = "Oettinger";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/dallas.gif";

        MainFetchPopUp("/hockey/present/western/json/dallas.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Dallas Stars in the 2022 - 2023 season exhibited a strong competitive spirit, balancing a solid defensive strategy with an effective offense.Known for their disciplined style of play, the Stars relied on their core group of experienced players to guide the team."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "6") {
        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "Nugent-Hopkins";
        DL.textContent = "Ekholm";
        DR.textContent = "Nurse";
        G.textContent = "S Skinner";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/edmonton.gif";

        MainFetchPopUp("/hockey/present/western/json/edmomnton.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Edmonton Oilers in the 2022-2023 season continued to showcase their high-powered offensive capabilities, led by some of the league's most talented and dynamic players. Their aggressive and fast-paced style of play, particularly in the offensive zone, made them one of the most exciting teams to watch in the NHL"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "7") {
        FL.textContent = "Fiala";
        FC.textContent = "Kopitar";
        FR.textContent = "Kempe"
        DL.textContent = "Doughty";
        DR.textContent = "M Anderson";
        G.textContent = "C Talbot";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/los angeles.gif";

        MainFetchPopUp("/hockey/present/western/json/los angeles.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Los Angeles Kings in the 2022 - 2023 season demonstrated a blend of veteran leadership and emerging young talent, marking their progress in becoming a more competitive team in the NHL. Known for their structured and disciplined style of play, the Kings focused on a balanced approach."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "8") {
        FL.textContent = "Kaprisov";
        FC.textContent = "Eriksson Ek";
        FR.textContent = "Zuccarello";
        DL.textContent = "Brodin";
        DR.textContent = "Spurgeon";
        G.textContent = "Gustavsson";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/minnesota.gif";

        MainFetchPopUp("/hockey/present/western/json/minnesota.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Minnesota Wild in the 2022-2023 season continued to establish themselves as a strong and resilient team in the NHL. Known for their balanced approach to the game, combining a robust defensive strategy with an effective offense, the Wild showcased their ability to compete with the top teams in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        FL2.style.width = '120px';
        FL2.style.objectFit = "cover";
    }

    if (selectedYear == "9") {
        FL.textContent = "F Forsberg";
        FC.textContent = "O'Reilly";
        FR.textContent = "Novak";
        DL.textContent = "Josi";
        DR.textContent = "McDonagh";
        G.textContent = "Saros";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/nashville.gif";

        MainFetchPopUp("/hockey/present/western/json/nashville.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Nashville Predators in the 2022 - 2023 season displayed a mix of resilience and the need for adaptation, as they sought to maintain their competitive edge in the NHL.Known for their strong defensive play and goaltending, the Predators continued to rely on these strengths, while also working to invigorate their offensive capabilities."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "10") {
        FL.textContent = "Hertl";
        FC.textContent = "Couture";
        FR.textContent = "Duclair";
        DL.textContent = "Vlasic";
        DR.textContent = "Ferraro";
        G.textContent = "Kahkonen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/san jose.gif";

        MainFetchPopUp("/hockey/present/western/json/san jose.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The San Jose Sharks in the 2022-2023 season faced a period of transition, focusing on rebuilding and reshaping their team for the future. With a combination of veteran players and emerging young talent, the Sharks worked on developing a new team identity and improving their overall performance."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "11") {
        FL.textContent = "McCann";
        FC.textContent = "Beniers";
        FR.textContent = "Eberle";
        DL.textContent = "Dunn";
        DR.textContent = "A Larsson";
        G.textContent = "Grubauer";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/seattle.gif";

        MainFetchPopUp("/hockey/present/western/json/seattle.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Seattle Kraken, in their sophomore season of 2022 - 2023, continued to build their identity as the NHL's newest franchise. This season was about laying down the foundation for long-term success and establishing a team culture."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "12") {
        FL.textContent = "Buchnevic";
        FC.textContent = "Thomas";
        FR.textContent = "Kyrou";
        DL.textContent = "Krug";
        DR.textContent = "Parayko";
        G.textContent = "Binnington";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/st. louis.gif";

        MainFetchPopUp("/hockey/present/western/json/st louis.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The St.Louis Blues in the 2022 - 2023 season continued to demonstrate their status as a competitive and resilient team in the NHL.Building on their legacy of strong team play and physicality, the Blues aimed to blend their traditional strengths with a more dynamic offensive strategy."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }
    if (selectedYear == "13") {
        FL.textContent = "JT Miller";
        FC.textContent = "Pettersson";;
        FR.textContent = "Kuzmenko";
        DL.textContent = "Q Hughes";
        DR.textContent = "Hronek";;
        G.textContent = "Demko";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/vancouver.gif";

        MainFetchPopUp("/hockey/present/western/json/vancouver.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Vancouver Canucks in the 2022 - 2023 season were a team in the midst of transformation, seeking to find the right balance between emerging young talent and experienced veterans.With a focus on building a cohesive team identity, the Canucks aimed to improve their overall performance in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });


        FR2.style.width = '120px';
        FR2.style.objectFit = "cover";
    }

    if (selectedYear == "14") {
        FL.textContent = "Marchessault";
        FC.textContent = "Eichel";
        FR.textContent = "Stone";
        DL.textContent = "Theodore";
        DR.textContent = "Pietrangelo";
        G.textContent = "Lehner";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/vegas.gif";

        MainFetchPopUp("/hockey/present/western/json/vegas.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Vegas Golden Knights in the 2022-2023 season continued to uphold their reputation as a strong and competitive team in the NHL. Since their inception, the Golden Knights have been known for their aggressive and fast-paced style of play, and this season was no exception, winning the Stanley Cup."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "15") {
        FL.textContent = "Connor";
        FC.textContent = "Scheifele";
        FR.textContent = "Ehlers";
        DL.textContent = "Morrissey";
        DR.textContent = "Pionk";
        G.textContent = "Hellebuyck";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/winnipeg.gif";

        MainFetchPopUp("/hockey/present/western/json/winnipeg.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Winnipeg Jets in the 2022-2023 season demonstrated a blend of resilience and the need for strategic improvement. Known for their balanced approach, combining skilled offensive play with solid goaltending, the Jets aimed to strengthen their position in a highly competitive division."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
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
        FL.textContent = "Killorn";
        FC.textContent = "Zegras";
        FR.textContent = "Terry";
        DL.textContent = "Drysdale";
        DR.textContent = "Fowler";
        G.textContent = "Gibson";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/anaheim.gif";

        MainFetchPopUp("/hockey/present/western/json/anaheim.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Anaheim Ducks in the 2022-2023 season were in a transitional phase, focusing on rebuilding and developing their young talent. This period was characterized by integrating promising rookies and younger players into key roles, setting the stage for future growth."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "1") {
        FL.textContent = "Maccelli";
        FC.textContent = "Schmaltz";
        FR.textContent = "Keller";
        DL.textContent = "Dumba";
        DR.textContent = "Durzi";
        G.textContent = "Vejmelka";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/arizona.gif";

        MainFetchPopUp("/hockey/present/western/json/arizona.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Arizona Coyotes in the 2022-2023 season continued their journey through a rebuilding phase, focusing on developing a young and promising roster. The team, while facing the challenges typical of a rebuild, showed signs of growth and potential."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "2") {
        FL.textContent = "Huberdeau";
        FC.textContent = "Kadri";
        FR.textContent = "E Lindholm";
        DL.textContent = "Weegar";
        DR.textContent = "Andersson";
        G.textContent = "Markstrom";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/calgary.gif";

        MainFetchPopUp("/hockey/present/western/json/calgary.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Calgary Flames' last season showcased a team aiming for a strong presence in the NHL. Led by Tyle Toffoli and Elias Lindholm, they focused on an aggressive offense, while Rasmus Andersson anchored the defense. Goaltending from Jacob Markstrom was pivotal."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "3") {

        FL.textContent = "Hall";
        FC.textContent = "Bedard";
        FR.textContent = "Raddysh";
        DL.textContent = "S Jones";
        DR.textContent = "C Murphy";
        G.textContent = "Mrazek";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/chicago.gif";

        MainFetchPopUp("/hockey/present/western/json/chicago.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Calgary Flames in the 2022-2023 season were a team striving to balance their strong offensive capabilities with a solid defensive game. Known for their aggressive and fast-paced style, the Flames showcased a roster capable of high-scoring games, backed by talented forwards and a robust defensive lineup."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });


        FC2.style.width = '120px';
        FC2.style.objectFit = "cover";
    }

    if (selectedYear == "4") {
        FL.textContent = "Landeskog";
        FC.textContent = "MacKinnon";
        FR.textContent = "Rantanen";
        DL.textContent = "Makar";
        DR.textContent = "D Toews";
        G.textContent = "Georgiev";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/colorado.gif";

        MainFetchPopUp("/hockey/present/western/json/colorado.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Colorado Avalanche in the 2022-2023 season continued to assert themselves as one of the top teams in the NHL, building on their recent successes. Known for their high-octane offense and solid defense, the Avalanche demonstrated a well-balanced and dynamic style of play."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "5") {
        FL.textContent = "J Robertson";
        FC.textContent = "Hintz";
        FR.textContent = "Pavelski";
        DL.textContent = "Heiskanen";
        DR.textContent = "Lindell";
        G.textContent = "Oettinger";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/dallas.gif";

        MainFetchPopUp("/hockey/present/western/json/dallas.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Dallas Stars in the 2022 - 2023 season exhibited a strong competitive spirit, balancing a solid defensive strategy with an effective offense.Known for their disciplined style of play, the Stars relied on their core group of experienced players to guide the team."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "6") {
        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "Nugent-Hopkins";
        DL.textContent = "Ekholm";
        DR.textContent = "Nurse";
        G.textContent = "S Skinner";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/edmonton.gif";

        MainFetchPopUp("/hockey/present/western/json/edmomnton.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Edmonton Oilers in the 2022-2023 season continued to showcase their high-powered offensive capabilities, led by some of the league's most talented and dynamic players. Their aggressive and fast-paced style of play, particularly in the offensive zone, made them one of the most exciting teams to watch in the NHL"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "7") {
        FL.textContent = "Fiala";
        FC.textContent = "Kopitar";
        FR.textContent = "Kempe"
        DL.textContent = "Doughty";
        DR.textContent = "Anderson";
        G.textContent = "C Talbot";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/los angeles.gif";

        MainFetchPopUp("/hockey/present/western/json/los angeles.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Los Angeles Kings in the 2022 - 2023 season demonstrated a blend of veteran leadership and emerging young talent, marking their progress in becoming a more competitive team in the NHL. Known for their structured and disciplined style of play, the Kings focused on a balanced approach."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "8") {
        FL.textContent = "Kaprisov";
        FC.textContent = "Eriksson Ek";
        FR.textContent = "Zuccarello";
        DL.textContent = "Brodin";
        DR.textContent = "Spurgeon";
        G.textContent = "Gustavsson";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/minnesota.gif";

        MainFetchPopUp("/hockey/present/western/json/minnesota.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Minnesota Wild in the 2022-2023 season continued to establish themselves as a strong and resilient team in the NHL. Known for their balanced approach to the game, combining a robust defensive strategy with an effective offense, the Wild showcased their ability to compete with the top teams in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        FL2.style.width = '120px';
        FL2.style.objectFit = "cover";
    }

    if (selectedYear == "9") {
        FL.textContent = "F Forsberg";
        FC.textContent = "O'Reilly";
        FR.textContent = "Novak";
        DL.textContent = "Josi";
        DR.textContent = "McDonagh";
        G.textContent = "Saros";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/nashville.gif";

        MainFetchPopUp("/hockey/present/western/json/nashville.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Nashville Predators in the 2022 - 2023 season displayed a mix of resilience and the need for adaptation, as they sought to maintain their competitive edge in the NHL.Known for their strong defensive play and goaltending, the Predators continued to rely on these strengths, while also working to invigorate their offensive capabilities."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "10") {
        FL.textContent = "Hertl";
        FC.textContent = "Couture";
        FR.textContent = "Duclair";
        DL.textContent = "Vlasic";
        DR.textContent = "Ferraro";
        G.textContent = "Kahkonen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/san jose.gif";

        MainFetchPopUp("/hockey/present/western/json/san jose.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The San Jose Sharks in the 2022-2023 season faced a period of transition, focusing on rebuilding and reshaping their team for the future. With a combination of veteran players and emerging young talent, the Sharks worked on developing a new team identity and improving their overall performance."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "11") {
        FL.textContent = "McCann";
        FC.textContent = "Beniers";
        FR.textContent = "Eberle";
        DL.textContent = "Dunn";
        DR.textContent = "A Larsson";
        G.textContent = "Grubauer";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/seattle.gif";

        MainFetchPopUp("/hockey/present/western/json/seattle.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Seattle Kraken, in their sophomore season of 2022 - 2023, continued to build their identity as the NHL's newest franchise. This season was about laying down the foundation for long-term success and establishing a team culture."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "12") {
        FL.textContent = "Buchnevic";
        FC.textContent = "Thomas";
        FR.textContent = "Kyrou";
        DL.textContent = "Krug";
        DR.textContent = "Parayko";
        G.textContent = "Binnington";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/st. louis.gif";

        MainFetchPopUp("/hockey/present/western/json/st louis.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The St.Louis Blues in the 2022 - 2023 season continued to demonstrate their status as a competitive and resilient team in the NHL.Building on their legacy of strong team play and physicality, the Blues aimed to blend their traditional strengths with a more dynamic offensive strategy."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }
    if (selectedYear == "13") {
        FL.textContent = "JT Miller";
        FC.textContent = "Pettersson";;
        FR.textContent = "Kuzmenko";
        DL.textContent = "Q Hughes";
        DR.textContent = "Hronek";;
        G.textContent = "Demko";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/vancouver.gif";

        MainFetchPopUp("/hockey/present/western/json/vancouver.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Vancouver Canucks in the 2022 - 2023 season were a team in the midst of transformation, seeking to find the right balance between emerging young talent and experienced veterans.With a focus on building a cohesive team identity, the Canucks aimed to improve their overall performance in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });


        FR2.style.width = '120px';
        FR2.style.objectFit = "cover";
    }

    if (selectedYear == "14") {
        FL.textContent = "Marchessault";
        FC.textContent = "Eichel";
        FR.textContent = "Stone";
        DL.textContent = "Theodore";
        DR.textContent = "Pietrangelo";
        G.textContent = "Lehner";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/vegas.gif";

        MainFetchPopUp("/hockey/present/western/json/vegas.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Vegas Golden Knights in the 2022-2023 season continued to uphold their reputation as a strong and competitive team in the NHL. Since their inception, the Golden Knights have been known for their aggressive and fast-paced style of play, and this season was no exception, winning the Stanley Cup."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "15") {
        FL.textContent = "Connor";
        FC.textContent = "Scheifele";
        FR.textContent = "Ehlers";
        DL.textContent = "Morrissey";
        DR.textContent = "Pionk";
        G.textContent = "Hellebuyck";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/winnipeg.gif";

        MainFetchPopUp("/hockey/present/western/json/winnipeg.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Winnipeg Jets in the 2022-2023 season demonstrated a blend of resilience and the need for strategic improvement. Known for their balanced approach, combining skilled offensive play with solid goaltending, the Jets aimed to strengthen their position in a highly competitive division."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
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