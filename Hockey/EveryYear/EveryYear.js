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
    smallpic.style.scale = '.8'
}

let selectedYear = 0

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear == "14") {
        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "Pastrnak";
        DL.textContent = "Makar";
        DR.textContent = "Josi";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/mcdavid.jpg";

        MainFetchPopUp("./json/EveryYear_2024.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Connor McDavid, a Canadian professional ice hockey player, is renowned as one of the NHL's most exceptional talents. Captain of the Edmonton Oilers, he's celebrated for his extraordinary speed, skill, and vision on the ice, consistently leading in points and assists."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "13") {
        FL.textContent = "MacKinnon";
        FC.textContent = "McDavid";
        FR.textContent = "Matthews";
        DL.textContent = "Makar";
        DR.textContent = "Hedman";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/matthews.jpg";

        MainFetchPopUp("./json/EveryYear_2023.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Auston Matthews, an American professional ice hockey player, is a prominent center for the Toronto Maple Leafs in the NHL. Known for his exceptional goal-scoring abilities and precision shooting, Matthews has quickly become one of the league's top forwards."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "12") {
        FL.textContent = "Crosby";
        FC.textContent = "McDavid";
        FR.textContent = "MacKinnon";
        DL.textContent = "Hedman";
        DR.textContent = "Josi";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/mackinnon.jpg";

        MainFetchPopUp("./json/EveryYear_2022.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Nathan MacKinnon is a Canadian professional ice hockey player and a key member of the Colorado Avalanche in the NHL. Renowned for his incredible speed, agility, and offensive skills, MacKinnon plays as a center and is consistently among the league's top scorers"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "11") {
        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "MacKinnon";
        DL.textContent = "Hedman";
        DR.textContent = "Makar";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/draisaitl.jpg";


        MainFetchPopUp("./json/EveryYear_2021.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Leon Draisaitl, a German professional ice hockey player, is a standout forward for the Edmonton Oilers in the NHL. Renowned for his exceptional hockey IQ, scoring ability, and playmaking skills, Draisaitl has established himself as one of the league's elite players."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "10") {
        FL.textContent = "Ovechkin";
        FC.textContent = "McDavid";
        FR.textContent = "Crosby";
        DL.textContent = "Hedman";
        DR.textContent = "Burns";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/burns.jpg";

        MainFetchPopUp("./json/EveryYear_2020.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Brent Burns, a standout defenseman in the NHL, is known for his offensive skills, physical play, and distinctive appearance. Playing for the Carolina Hurricanes in the 2022-23 season, Burns continued to be a key contributor with his dynamic gameplay and leadership."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "9") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "E Karlsson";
        G.textContent = "Price";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/kucherov.png"

        MainFetchPopUp("./json/EveryYear_2019.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Nikita Kucherov, a Russian professional ice hockey player, is a highly skilled winger for the Tampa Bay Lightning in the NHL. Known for his remarkable scoring ability, playmaking skills, and hockey intelligence, Kucherov is a key player and a consistent top performer."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "8") {
        FL.textContent = "Ovechkin";
        FC.textContent = "McDavid";
        FR.textContent = "Crosby";
        DL.textContent = "Hedman";
        DR.textContent = "Keith";
        G.textContent = "Holtby";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/ovechkin.png";


        MainFetchPopUp("./json/EveryYear_2018.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Alexander Ovechkin is a Russian ice hockey legend, renowned for his goal-scoring prowess. He's a longtime member of the Washington Capitals in the NHL, holds numerous records, and is considered one of the greatest hockey players of all time."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "7") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "P Kane";
        DL.textContent = "E Karlsson";
        DR.textContent = "Weber";
        G.textContent = "Price";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/price.jpg";

        MainFetchPopUp("./json/EveryYear_2017.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Carey Price, a Canadian goaltending icon, excelled in the NHL for the Montreal Canadiens. His exceptional skills, including quick reflexes and composure, have earned him accolades like the Vezina Trophy and made him a cornerstone of his team."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "6") {
        FL.textContent = "J Toews";
        FC.textContent = "Crosby";
        FR.textContent = "P Kane";
        DL.textContent = "Keith";
        DR.textContent = "Subban";
        G.textContent = "Quick";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/toews.jpg";

        MainFetchPopUp("./json/EveryYear_2016.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Jonathan Toews, known as Captain Serious, is an elite NHL center who led the Chicago Blackhawks to three Stanley Cup championships. His exceptional two-way play, leadership, and consistency have made him a beloved figure in Chicago and a respected leader in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "5") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "P Kane";
        DL.textContent = "Weber";
        DR.textContent = "Subban";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/kane.jpg";

        MainFetchPopUp("./json/EveryYear_2015.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Patrick Kane, a former star forward for the Chicago Blackhawks, is one of the NHL's most skilled and dynamic players. Known for his exceptional stickhandling, playmaking, and clutch performances, Kane has won multiple awards, including the Hart Trophy and Conn Smythe Trophy, cementing his status as an elite talent."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "4") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Malkin";
        DL.textContent = "Chara";
        DR.textContent = "Weber";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/malkin.jpg";

        MainFetchPopUp("./json/EveryYear_2014.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Evgeni Malkin, often referred to as Geno, is a Russian ice hockey superstar who plays as a center for the Pittsburgh Penguins in the NHL. He's known for his incredible scoring ability, versatility, and impressive playmaking skills. Malkin has won numerous awards, including the Hart Trophy and Conn Smythe Trophy, and has helped lead the Penguins to multiple Stanley Cup victories."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "3") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Datsyuk";
        DL.textContent = "Chara";
        DR.textContent = "E Karlsson";
        G.textContent = "Quick";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/chara.jpg";

        MainFetchPopUp("./json/EveryYear_2013.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Zdeno Chara, a towering Slovakian defenseman at 6'9\", was a dominant force in the NHL.He captained the Boston Bruins to a Stanley Cup victory, won the Norris Trophy, and became renowned for his defensive prowess and leadership, earning respect throughout his career."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "2") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Stamkos";
        DL.textContent = "Chara";
        DR.textContent = "Weber";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/stamkos.jpg";

        MainFetchPopUp("./json/EveryYear_2012.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Steven Stamkos, a Canadian center for the Tampa Bay Lightning, is an elite NHL player known for his exceptional scoring ability, leadership, and loyalty to his team. He's won Stanley Cups and individual awards while consistently being a top offensive threat."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "1") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Datsyuk";
        DL.textContent = "Lidstrom";
        DR.textContent = "Weber";
        G.textContent = "Luongo";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/lidstrom.avif";

        MainFetchPopUp("./json/EveryYear_2011.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Nicklas Lidström, a legendary Swedish defenseman, spent his entire NHL career with the Detroit Red Wings. Widely regarded as one of the greatest defensemen in history, he won numerous Norris Trophies and Stanley Cups due to his incredible defensive prowess and leadership on the ice."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "0") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Datsyuk";
        DL.textContent = "Lidstrom";
        DR.textContent = "Chara";
        G.textContent = "Brodeur";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/datsyuk.jpg";

        MainFetchPopUp("./json/EveryYear_2010.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Pavel Datsyuk, a highly skilled Russian forward, played for the Detroit Red Wings in the NHL. Known for his incredible stickhandling and two-way play, he won multiple Stanley Cups and received several awards during his illustrious career. Datsyuk's \"Magic Man\" nickname reflects his dazzling skills on the ice."
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

// let currentIndex = 0;

// Function to update the dropdown based on the currentIndex
const updateDropdown = () => {

    if (selectedYear == "14") {
        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "Pastrnak";
        DL.textContent = "Makar";
        DR.textContent = "Josi";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/mcdavid.jpg";

        MainFetchPopUp("./json/EveryYear_2024.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Connor McDavid, a Canadian professional ice hockey player, is renowned as one of the NHL's most exceptional talents. Captain of the Edmonton Oilers, he's celebrated for his extraordinary speed, skill, and vision on the ice, consistently leading in points and assists."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "13") {
        FL.textContent = "MacKinnon";
        FC.textContent = "McDavid";
        FR.textContent = "Matthews";
        DL.textContent = "Makar";
        DR.textContent = "Hedman";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/matthews.jpg";

        MainFetchPopUp("./json/EveryYear_2023.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Auston Matthews, an American professional ice hockey player, is a prominent center for the Toronto Maple Leafs in the NHL. Known for his exceptional goal-scoring abilities and precision shooting, Matthews has quickly become one of the league's top forwards."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "12") {
        FL.textContent = "Crosby";
        FC.textContent = "McDavid";
        FR.textContent = "MacKinnon";
        DL.textContent = "Hedman";
        DR.textContent = "Josi";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/mackinnon.jpg";

        MainFetchPopUp("./json/EveryYear_2022.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Nathan MacKinnon is a Canadian professional ice hockey player and a key member of the Colorado Avalanche in the NHL. Renowned for his incredible speed, agility, and offensive skills, MacKinnon plays as a center and is consistently among the league's top scorers"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "11") {
        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "MacKinnon";
        DL.textContent = "Hedman";
        DR.textContent = "Makar";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/draisaitl.jpg";


        MainFetchPopUp("./json/EveryYear_2021.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Leon Draisaitl, a German professional ice hockey player, is a standout forward for the Edmonton Oilers in the NHL. Renowned for his exceptional hockey IQ, scoring ability, and playmaking skills, Draisaitl has established himself as one of the league's elite players."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "10") {
        FL.textContent = "Ovechkin";
        FC.textContent = "McDavid";
        FR.textContent = "Crosby";
        DL.textContent = "Hedman";
        DR.textContent = "Burns";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/burns.jpg";

        MainFetchPopUp("./json/EveryYear_2020.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Brent Burns, a standout defenseman in the NHL, is known for his offensive skills, physical play, and distinctive appearance. Playing for the Carolina Hurricanes in the 2022-23 season, Burns continued to be a key contributor with his dynamic gameplay and leadership."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "9") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "E Karlsson";
        G.textContent = "Price";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/kucherov.png"

        MainFetchPopUp("./json/EveryYear_2019.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Nikita Kucherov, a Russian professional ice hockey player, is a highly skilled winger for the Tampa Bay Lightning in the NHL. Known for his remarkable scoring ability, playmaking skills, and hockey intelligence, Kucherov is a key player and a consistent top performer."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "8") {
        FL.textContent = "Ovechkin";
        FC.textContent = "McDavid";
        FR.textContent = "Crosby";
        DL.textContent = "Hedman";
        DR.textContent = "Keith";
        G.textContent = "Holtby";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/ovechkin.png";


        MainFetchPopUp("./json/EveryYear_2018.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Alexander Ovechkin is a Russian ice hockey legend, renowned for his goal-scoring prowess. He's a longtime member of the Washington Capitals in the NHL, holds numerous records, and is considered one of the greatest hockey players of all time."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "7") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "P Kane";
        DL.textContent = "E Karlsson";
        DR.textContent = "Weber";
        G.textContent = "Price";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/price.jpg";

        MainFetchPopUp("./json/EveryYear_2017.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Carey Price, a Canadian goaltending icon, excelled in the NHL for the Montreal Canadiens. His exceptional skills, including quick reflexes and composure, have earned him accolades like the Vezina Trophy and made him a cornerstone of his team."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "6") {
        FL.textContent = "J Toews";
        FC.textContent = "Crosby";
        FR.textContent = "P Kane";
        DL.textContent = "Keith";
        DR.textContent = "Subban";
        G.textContent = "Quick";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/toews.jpg";

        MainFetchPopUp("./json/EveryYear_2016.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Jonathan Toews, known as Captain Serious, is an elite NHL center who led the Chicago Blackhawks to three Stanley Cup championships. His exceptional two-way play, leadership, and consistency have made him a beloved figure in Chicago and a respected leader in the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "5") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "P Kane";
        DL.textContent = "Weber";
        DR.textContent = "Subban";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/kane.jpg";

        MainFetchPopUp("./json/EveryYear_2015.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Patrick Kane, a former star forward for the Chicago Blackhawks, is one of the NHL's most skilled and dynamic players. Known for his exceptional stickhandling, playmaking, and clutch performances, Kane has won multiple awards, including the Hart Trophy and Conn Smythe Trophy, cementing his status as an elite talent."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "4") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Malkin";
        DL.textContent = "Chara";
        DR.textContent = "Weber";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/malkin.jpg";

        MainFetchPopUp("./json/EveryYear_2014.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Evgeni Malkin, often referred to as Geno, is a Russian ice hockey superstar who plays as a center for the Pittsburgh Penguins in the NHL. He's known for his incredible scoring ability, versatility, and impressive playmaking skills. Malkin has won numerous awards, including the Hart Trophy and Conn Smythe Trophy, and has helped lead the Penguins to multiple Stanley Cup victories."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "3") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Datsyuk";
        DL.textContent = "Chara";
        DR.textContent = "E Karlsson";
        G.textContent = "Quick";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/chara.jpg";

        MainFetchPopUp("./json/EveryYear_2013.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Zdeno Chara, a towering Slovakian defenseman at 6'9\", was a dominant force in the NHL.He captained the Boston Bruins to a Stanley Cup victory, won the Norris Trophy, and became renowned for his defensive prowess and leadership, earning respect throughout his career."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "2") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Stamkos";
        DL.textContent = "Chara";
        DR.textContent = "Weber";
        G.textContent = "Lundqvist";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/stamkos.jpg";

        MainFetchPopUp("./json/EveryYear_2012.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Steven Stamkos, a Canadian center for the Tampa Bay Lightning, is an elite NHL player known for his exceptional scoring ability, leadership, and loyalty to his team. He's won Stanley Cups and individual awards while consistently being a top offensive threat."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "1") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Datsyuk";
        DL.textContent = "Lidstrom";
        DR.textContent = "Weber";
        G.textContent = "Luongo";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/lidstrom.avif";

        MainFetchPopUp("./json/EveryYear_2011.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Nicklas Lidström, a legendary Swedish defenseman, spent his entire NHL career with the Detroit Red Wings. Widely regarded as one of the greatest defensemen in history, he won numerous Norris Trophies and Stanley Cups due to his incredible defensive prowess and leadership on the ice."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "0") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Datsyuk";
        DL.textContent = "Lidstrom";
        DR.textContent = "Chara";
        G.textContent = "Brodeur";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/wallpapers/datsyuk.jpg";

        MainFetchPopUp("./json/EveryYear_2010.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Pavel Datsyuk, a highly skilled Russian forward, played for the Detroit Red Wings in the NHL. Known for his incredible stickhandling and two-way play, he won multiple Stanley Cups and received several awards during his illustrious career. Datsyuk's \"Magic Man\" nickname reflects his dazzling skills on the ice."
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