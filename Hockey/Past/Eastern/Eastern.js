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

window.onload = function () {
    yearSelector.selectedIndex = 0;
}


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

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear == "0") {

        FL.textContent = "Marchand";
        FC.textContent = "Bergeron";
        FR.textContent = "Pastrnak";
        DL.textContent = "Chara";
        DR.textContent = "Krug";
        G.textContent = "Rask";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/boston.gif";

        MainFetchPopUp("/hockey/past/eastern/json/boston.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "During the 2010-2020 decade, the Boston Bruins were a dominant force in the NHL. They won the Stanley Cup in 2011 and reached the finals in 2013. Key players included Zdeno Chara, Patrice Bergeron, and Tuukka Rask, contributing to the team's sustained success and competitive presence in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Claude Julien"

    }

    if (selectedYear == "1") {
        FL.textContent = "Vanek";
        FC.textContent = "Eichel";
        FR.textContent = "O'Reilly";
        DL.textContent = "Ristolainen";
        DR.textContent = "Myers";
        G.textContent = "R Miller";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/buffalo.gif";

        MainFetchPopUp("/hockey/past/eastern/json/buffalo.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Buffalo Sabres had a challenging decade from 2010 to 2020, marked by struggles and rebuilding efforts. Despite promising talents like Jack Eichel, the team had difficulty achieving playoff success and underwent multiple coaching and management changes, reflecting a period of transition and a quest for future competitiveness."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Lindy Ruff"
    }

    if (selectedYear == "2") {
        FL.textContent = "J Skinner";
        FC.textContent = "E Staal";
        FR.textContent = "Aho";
        DL.textContent = "Slavin";
        DR.textContent = "Faulk";
        G.textContent = "C Ward";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/carolina.gif";

        MainFetchPopUp("/hockey/past/eastern/json/carolina.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Carolina Hurricanes, during the 2010-2020 decade, experienced a mix of ups and downs. They made the playoffs several times, including a run to the Eastern Conference Finals in 2019, driven by emerging stars like Sebastian Aho."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Rod Brind'Amour"
    }

    if (selectedYear == "3") {
        FL.textContent = "Panarin";
        FC.textContent = "M Foligno";
        FR.textContent = "Atkinson";
        DL.textContent = "J Johnson";
        DR.textContent = "S Jones";
        G.textContent = "Bobrovsky";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/columbus.gif";

        MainFetchPopUp("/hockey/past/eastern/json/columbus.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Columbus Blue Jackets, in the 2010-2020 decade, transitioned into a competitive NHL team. They clinched playoff berths and recorded their first-ever series win in 2019. Notable players like Artemi Panarin contributed to their growth, marking a period of progress and increased relevance in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: John Tortorella"
    }

    if (selectedYear == "4") {
        FL.textContent = "Zetterberg";
        FC.textContent = "Datsyuk";
        FR.textContent = "Larkin";
        DL.textContent = "Lidstrom";
        DR.textContent = "Kronwall";
        G.textContent = "Howard";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/detroit.gif";

        MainFetchPopUp("/hockey/past/eastern/json/detroit.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Detroit Red Wings, during the 2010-2020 decade, navigated a shift from their historic dominance. They extended their playoff streak but faced challenges as aging stars like Henrik Zetterberg retired. The franchise emphasized rebuilding, looking to regain their status as a powerhouse in the NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Mike Babcock"
    }

    if (selectedYear == "5") {
        FL.textContent = "Huberdeau";
        FC.textContent = "Barkov";
        FR.textContent = "Hoffman";
        DL.textContent = "Ekblad";
        DR.textContent = "Yandle";
        G.textContent = "Luongo";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/florida.gif";

        MainFetchPopUp("/hockey/past/eastern/json/florida.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Florida Panthers, from 2010 to 2020, had mixed success. They made occasional playoff appearances but struggled to advance deep. Key players like Aleksander Barkov and Jonathan Huberdeau emerged as stars, and the franchise aimed to build a competitive roster for consistent postseason contention."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Gerard Gallant"
    }

    if (selectedYear == "6") {
        FL.textContent = "Pacioretty";
        FC.textContent = "Tatar";
        FR.textContent = "Gallagher";
        DL.textContent = "Subban";
        DR.textContent = "Weber";
        G.textContent = "Price";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/montreal.gif";

        MainFetchPopUp("/hockey/past/eastern/json/montreal.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Montreal Canadiens, during the 2010-2020 decade, experienced varying degrees of success. They made playoff appearances, including a trip to the Eastern Conference Finals in 2014. Star players like Carey Price and Max Pacioretty played significant roles, but the franchise sought to capture its storied Stanley Cup legacy."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Michel Therrien"
    }

    if (selectedYear == "7") {
        FL.textContent = "Hall";
        FC.textContent = "Henrique";
        FR.textContent = "Hischier";
        DL.textContent = "A Greene";
        DR.textContent = "Subban";
        G.textContent = "Schneider";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/new jersey.gif";

        MainFetchPopUp("/hockey/past/eastern/json/new jersey.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The New Jersey Devils, from 2010 to 2020, had a decade marked by fluctuating performance. They made the Stanley Cup Finals in 2012 but faced challenges afterward. Star players like Martin Brodeur and Ilya Kovalchuk contributed, and the franchise focused on rebuilding its competitive presence in the NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Peter DeBoer"
    }

    if (selectedYear == "8") {
        FL.textContent = "Lee";
        FC.textContent = "Tavares";
        FR.textContent = "Barzal";
        DL.textContent = "Leddy";
        DR.textContent = "Boychuk";
        G.textContent = "Greiss";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny islanders.gif";

        MainFetchPopUp("/hockey/past/eastern/json/ny islanders.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The New York Islanders, during the 2010-2020 decade, showcased a mix of highs and lows. They reached the Eastern Conference Finals in 2020, led by star players like John Tavares at the beginning and later Mathew Barzal. The franchise focused on a balanced approach, blending youth development and veteran leadership."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Barry Trotz"
    }

    if (selectedYear == "9") {
        FL.textContent = "Panarin";
        FC.textContent = "Stepan";
        FR.textContent = "Zuccarello";
        DL.textContent = "McDonagh";
        DR.textContent = "M Staal";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny rangers.gif";

        MainFetchPopUp("/hockey/past/eastern/json/ny rangers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The New York Rangers, during the 2010-2020 decade, were marked by competitive playoff appearances. Led by star goaltender Henrik Lundqvist and forwards like Chris Kreider, they reached the Stanley Cup Finals in 2014. The franchise balanced veteran talent with youth development, aiming for sustained success in the NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        })

        coach.textContent = "Head Coach: Alain Vigneault"
    }
    
    if (selectedYear == "10") {
        FL.textContent = "Hoffman";
        FC.textContent = "Spezza";
        FR.textContent = "Stone";
        DL.textContent = "E Karlsson";
        DR.textContent = "Chabot";
        G.textContent = "Anderson";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ottawa.gif";

        MainFetchPopUp("/hockey/past/eastern/json/ottawa.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = ""
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Paul MacLean"

    } if (selectedYear == "11") {
        FL.textContent = "Giroux";;
        FC.textContent = "Couturier";
        FR.textContent = "Voracek";
        DL.textContent = "Timonen";
        DR.textContent = "Provorov";
        G.textContent = "Mason";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/philadelphia.gif";

        MainFetchPopUp("/hockey/past/eastern/json/philadelphia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Ottawa Senators, from 2010 to 2020, had a decade with a mix of playoff runs and rebuilding efforts. They reached the Eastern Conference Finals in 2017, featuring star players like Erik Karlsson. The franchise faced challenges but emphasized a strategy to develop young talent for future competitiveness."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
        
        coach.textContent = "Head Coach: Peter Laviolette"
    }

    if (selectedYear == "12") {
        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Kessel";
        DL.textContent = "Letang";
        DR.textContent = "P Martin";
        G.textContent = "Fleury";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/pittsburgh.gif";

        MainFetchPopUp("/hockey/past/eastern/json/pittsburgh.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Pittsburgh Penguins, during the 2010-2020 decade, enjoyed significant success. They won two Stanley Cups in 2016 and 2017, with star players Sidney Crosby and Evgeni Malkin leading the way. The franchise maintained a strong presence in the playoffs and aimed for consistent competitiveness."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
        
        coach.textContent = "Head Coach: Dan Bylsma"
    }

    if (selectedYear == "13") {
        FL.textContent = "St Louis";
        FC.textContent = "Stamkos";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "McDonagh";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/tampa bay.gif";

        MainFetchPopUp("/hockey/past/eastern/json/tampa bay.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Tampa Bay Lightning, from 2010 to 2020, established themselves as an NHL powerhouse. They won the Stanley Cup twice in 2020 and 2021. Led by stars like Steven Stamkos and Nikita Kucherov, the franchise showcased strong regular-season performance and a commitment to playoff success."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Jon Cooper"
    }

    if (selectedYear == "14") {
        FL.textContent = "Tavares";
        FC.textContent = "Matthews";
        FR.textContent = "Marner";
        DL.textContent = "Rielly";
        DR.textContent = "Phaneuf";
        G.textContent = "Andersen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/toronto.gif";

        MainFetchPopUp("/hockey/past/eastern/json/toronto.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Toronto Maple Leafs, during the 2010-2020 decade, experienced a shift towards young talent and potential. They made playoff appearances but faced challenges. Players like Auston Matthews and Mitch Marner emerged as stars, and the franchise focused on building a competitive roster for sustained success."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Mike Babcock"
    }

    if (selectedYear == "15") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Backstrom";
        FR.textContent = "Kuznetsov";
        DL.textContent = "Carlson";
        DR.textContent = "M Green";
        G.textContent = "Holtby";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/washington.gif";

        MainFetchPopUp("/hockey/past/eastern/json/washington.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Washington Capitals, from 2010 to 2020, achieved their first Stanley Cup victory in 2018, led by star Alex Ovechkin. They consistently made playoff runs, showcasing a potent offense and veteran leadership. The franchise emphasized a winning culture and competitiveness during this period."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Barry Trotz"
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
        FC.textContent = "Bergeron";
        FR.textContent = "Pastrnak";
        DL.textContent = "Chara";
        DR.textContent = "Krug";
        G.textContent = "Rask";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/boston.gif";

        MainFetchPopUp("/hockey/past/eastern/json/boston.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "During the 2010-2020 decade, the Boston Bruins were a dominant force in the NHL. They won the Stanley Cup in 2011 and reached the finals in 2013. Key players included Zdeno Chara, Patrice Bergeron, and Tuukka Rask, contributing to the team's sustained success and competitive presence in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "1") {
        FL.textContent = "Vanek";
        FC.textContent = "Eichel";
        FR.textContent = "O'Reilly";
        DL.textContent = "Ristolainen";
        DR.textContent = "Myers";
        G.textContent = "R Miller";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/buffalo.gif";

        MainFetchPopUp("/hockey/past/eastern/json/buffalo.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Buffalo Sabres had a challenging decade from 2010 to 2020, marked by struggles and rebuilding efforts. Despite promising talents like Jack Eichel, the team had difficulty achieving playoff success and underwent multiple coaching and management changes, reflecting a period of transition and a quest for future competitiveness."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "2") {
        FL.textContent = "J Skinner";
        FC.textContent = "E Staal";
        FR.textContent = "Aho";
        DL.textContent = "Slavin";
        DR.textContent = "Faulk";
        G.textContent = "C Ward";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/carolina.gif";

        MainFetchPopUp("/hockey/past/eastern/json/carolina.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Carolina Hurricanes, during the 2010-2020 decade, experienced a mix of ups and downs. They made the playoffs several times, including a run to the Eastern Conference Finals in 2019, driven by emerging stars like Sebastian Aho."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "3") {
        FL.textContent = "Panarin";
        FC.textContent = "M Foligno";
        FR.textContent = "Atkinson";
        DL.textContent = "J Johnson";
        DR.textContent = "S Jones";
        G.textContent = "Bobrovsky";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/columbus.gif";

        MainFetchPopUp("/hockey/past/eastern/json/columbus.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Columbus Blue Jackets, in the 2010-2020 decade, transitioned into a competitive NHL team. They clinched playoff berths and recorded their first-ever series win in 2019. Notable players like Artemi Panarin contributed to their growth, marking a period of progress and increased relevance in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "4") {
        FL.textContent = "Zetterberg";
        FC.textContent = "Datsyuk";
        FR.textContent = "Larkin";
        DL.textContent = "Lidstrom";
        DR.textContent = "Kronwall";
        G.textContent = "Howard";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/detroit.gif";

        MainFetchPopUp("/hockey/past/eastern/json/detroit.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Detroit Red Wings, during the 2010-2020 decade, navigated a shift from their historic dominance. They extended their playoff streak but faced challenges as aging stars like Henrik Zetterberg retired. The franchise emphasized rebuilding, looking to regain their status as a powerhouse in the NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "5") {
        FL.textContent = "Huberdeau";
        FC.textContent = "Barkov";
        FR.textContent = "Hoffman";
        DL.textContent = "Ekblad";
        DR.textContent = "Yandle";
        G.textContent = "Luongo";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/florida.gif";

        MainFetchPopUp("/hockey/past/eastern/json/florida.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Florida Panthers, from 2010 to 2020, had mixed success. They made occasional playoff appearances but struggled to advance deep. Key players like Aleksander Barkov and Jonathan Huberdeau emerged as stars, and the franchise aimed to build a competitive roster for consistent postseason contention."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "6") {
        FL.textContent = "Pacioretty";
        FC.textContent = "Tatar";
        FR.textContent = "Gallagher";
        DL.textContent = "Subban";
        DR.textContent = "Weber";
        G.textContent = "Price";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/montreal.gif";

        MainFetchPopUp("/hockey/past/eastern/json/montreal.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Montreal Canadiens, during the 2010-2020 decade, experienced varying degrees of success. They made playoff appearances, including a trip to the Eastern Conference Finals in 2014. Star players like Carey Price and Max Pacioretty played significant roles, but the franchise sought to capture its storied Stanley Cup legacy."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "7") {
        FL.textContent = "Hall";
        FC.textContent = "Henrique";
        FR.textContent = "Hischier";
        DL.textContent = "A Greene";
        DR.textContent = "Subban";
        G.textContent = "Schneider";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/new jersey.gif";

        MainFetchPopUp("/hockey/past/eastern/json/new jersey.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The New Jersey Devils, from 2010 to 2020, had a decade marked by fluctuating performance. They made the Stanley Cup Finals in 2012 but faced challenges afterward. Star players like Martin Brodeur and Ilya Kovalchuk contributed, and the franchise focused on rebuilding its competitive presence in the NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "8") {
        FL.textContent = "Lee";
        FC.textContent = "Tavares";
        FR.textContent = "Barzal";
        DL.textContent = "Leddy";
        DR.textContent = "Boychuk";
        G.textContent = "Greiss";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny islanders.gif";

        MainFetchPopUp("/hockey/past/eastern/json/ny islanders.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The New York Islanders, during the 2010-2020 decade, showcased a mix of highs and lows. They reached the Eastern Conference Finals in 2020, led by star players like John Tavares at the beginning and later Mathew Barzal. The franchise focused on a balanced approach, blending youth development and veteran leadership."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "9") {
        FL.textContent = "Panarin";
        FC.textContent = "Stepan";
        FR.textContent = "Zuccarello";
        DL.textContent = "McDonagh";
        DR.textContent = "M Staal";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ny rangers.gif";

        MainFetchPopUp("/hockey/past/eastern/json/ny rangers.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The New York Rangers, during the 2010-2020 decade, were marked by competitive playoff appearances. Led by star goaltender Henrik Lundqvist and forwards like Chris Kreider, they reached the Stanley Cup Finals in 2014. The franchise balanced veteran talent with youth development, aiming for sustained success in the NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    } if (selectedYear == "10") {
        FL.textContent = "Hoffman";
        FC.textContent = "Spezza";
        FR.textContent = "Stone";
        DL.textContent = "E Karlsson";
        DR.textContent = "Chabot";
        G.textContent = "Anderson";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/ottawa.gif";

        MainFetchPopUp("/hockey/past/eastern/json/ottawa.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = ""
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    } if (selectedYear == "11") {
        FL.textContent = "Giroux";;
        FC.textContent = "Couturier";
        FR.textContent = "Voracek";
        DL.textContent = "Timonen";
        DR.textContent = "Provorov";
        G.textContent = "Mason";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/philadelphia.gif";

        MainFetchPopUp("/hockey/past/eastern/json/philadelphia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Ottawa Senators, from 2010 to 2020, had a decade with a mix of playoff runs and rebuilding efforts. They reached the Eastern Conference Finals in 2017, featuring star players like Erik Karlsson. The franchise faced challenges but emphasized a strategy to develop young talent for future competitiveness."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "12") {
        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Kessel";
        DL.textContent = "Letang";
        DR.textContent = "P Martin";
        G.textContent = "Fleury";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/pittsburgh.gif";

        MainFetchPopUp("/hockey/past/eastern/json/pittsburgh.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Pittsburgh Penguins, during the 2010-2020 decade, enjoyed significant success. They won two Stanley Cups in 2016 and 2017, with star players Sidney Crosby and Evgeni Malkin leading the way. The franchise maintained a strong presence in the playoffs and aimed for consistent competitiveness."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "13") {
        FL.textContent = "St Louis";
        FC.textContent = "Stamkos";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "McDonagh";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/tampa bay.gif";

        MainFetchPopUp("/hockey/past/eastern/json/tampa bay.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Tampa Bay Lightning, from 2010 to 2020, established themselves as an NHL powerhouse. They won the Stanley Cup twice in 2020 and 2021. Led by stars like Steven Stamkos and Nikita Kucherov, the franchise showcased strong regular-season performance and a commitment to playoff success."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "14") {
        FL.textContent = "Tavares";
        FC.textContent = "Matthews";
        FR.textContent = "Marner";
        DL.textContent = "Rielly";
        DR.textContent = "Phaneuf";
        G.textContent = "Andersen";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/toronto.gif";

        MainFetchPopUp("/hockey/past/eastern/json/toronto.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Toronto Maple Leafs, during the 2010-2020 decade, experienced a shift towards young talent and potential. They made playoff appearances but faced challenges. Players like Auston Matthews and Mitch Marner emerged as stars, and the franchise focused on building a competitive roster for sustained success."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "15") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Backstrom";
        FR.textContent = "Kuznetsov";
        DL.textContent = "Carlson";
        DR.textContent = "M Green";
        G.textContent = "Holtby";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/washington.gif";

        MainFetchPopUp("/hockey/past/eastern/json/washington.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Washington Capitals, from 2010 to 2020, achieved their first Stanley Cup victory in 2018, led by star Alex Ovechkin. They consistently made playoff runs, showcasing a potent offense and veteran leadership. The franchise emphasized a winning culture and competitiveness during this period."
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