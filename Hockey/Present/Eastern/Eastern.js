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

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear === "0") {
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
            sideModal.textContent = "The Boston Bruins' 2022-23 season was marked by a blend of veteran leadership and emerging talent. With Patrice Bergeron's steadfast presence, Brad Marchand's scoring prowess, and Charlie McAvoy anchoring the defense, they aimed for a strong showing. Linus Ullmark and Jeremy Swayman shared goaltending duties"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }
    if (selectedYear === "1") {
        FL.textContent = "J Skinner";
        FC.textContent = "Thompson";
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
            sideModal.textContent = "The Buffalo Sabres' 2022-23 season was a narrative of growth and potential. Led by Rasmus Dahlin's defensive prowess and Tage Thompson's offensive impact, they showed promise. Dylan Cozens and Casey Mittelstadt emerged as key contributors. Goaltender Craig Anderson provided veteran stability, "
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "2") {
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
            sideModal.textContent = "The Carolina Hurricanes' 2022-23 season was marked by a strong mix of skill and strategy. Sebastian Aho and Andrei Svechnikov led the offensive charge, while newcomer Brent Burns strengthened the defense. Martin Necas emerged as a vital player, and Frederik Andersen's goaltending was crucial. "
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "3") {
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
            sideModal.textContent = "The Columbus Blue Jackets' 2022-23 season showcased a team in transition, focusing on development and resilience. Led by Patrik Laine's scoring talent and Zach Werenski's defensive skills, they aimed to blend youth with experience, with Elvis Merzlikins in goal"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "4") {
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
            sideModal.textContent = "The Detroit Red Wings' 2022-23 season was a time of rebuilding and growth. With Dylan Larkin providing leadership and Moritz Seider emerging as a defensive cornerstone, the team aimed to develop its young talents. Goaltender Alex Nedeljkovic was key in net"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear === "5") {
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
            sideModal.textContent = "The Florida Panthers' 2022-23 season was highlighted by high-scoring offense and dynamic play. Key players like Aleksander Barkov and Matthew Tkachuk led the charge, while they lost to the Vegas Golden Knights for the Stanley Cup. Sergei Bobrovsky's goaltending provided a backbone."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "6") {
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
            sideModal.textContent = "The Montreal Canadiens' 2022-23 season was a period of rebuilding and adjustment. With key players like Nick Suzuki and Cole Caufield, they focused on youth development and team chemistry. Goalie Jake Allen provided experience in net."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "7") {
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
            sideModal.textContent = "The New Jersey Devils' 2022-23 season was characterized by a youthful resurgence, with players like Jack Hughes and Nico Hischier leading the way. Jesper Bratt emerged as a key offensive contributor, while Mackenzie Blackwood aimed to anchor the goaltending."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "8") {
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
            sideModal.textContent = "The New York Islanders' 2022-23 season focused on a return to their trademark defensive strength and structured play. Led by Mathew Barzal's creativity and Anders Lee's leadership, they aimed to balance scoring with solid goaltending from Ilya Sorokin. "
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "9") {
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
            sideModal.textContent = "The New York Rangers' 2022-23 season showcased a strong combination of skill and grit. Led by Artemi Panarin's offensive flair and Mika Zibanejad's all-around play, they aimed for high performance. Adam Fox anchored the defense, while Igor Shesterkin's standout goaltending was crucial."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "10") {
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
            sideModal.textContent = "The Ottawa Senators' 2022-23 season was a period of building and development. With key players like Brady Tkachuk and Thomas Chabot, they focused on nurturing young talent and improving team dynamics. Goaltender Matt Murray aimed to provide stability in net."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "11") {
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
            sideModal.textContent = "The Philadelphia Flyers' 2022-23 season was centered on revitalizing their team performance. Led by Joel Farabee's emerging talent, they aimed to balance scoring with defensive improvements. Carter Hart in goal was crucial for stability."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "12") {
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
            sideModal.textContent = "The Pittsburgh Penguins' 2022-23 season featured their enduring stars Sidney Crosby and Evgeni Malkin, with Jake Guentzel providing significant offensive support. The team focused on maintaining their competitive edge, balancing experienced leadership with younger talent. Tristan Jarry in goal was key."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "13") {
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
            sideModal.textContent = "The Tampa Bay Lightning's 2022-23 season was marked by a continued pursuit of excellence. With stars like Nikita Kucherov and Steven Stamkos leading the offense, and Victor Hedman anchoring the defense, they aimed for high performance. Andrei Vasilevskiy's exceptional goaltending was pivotal."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "14") {
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
            sideModal.textContent = "The Toronto Maple Leafs' 2022-23 season showcased a high-powered offense led by Auston Matthews and Mitch Marner, with John Tavares providing veteran leadership. The team focused on strengthening their playoff performance, supported by solid goaltending from Jack Campbell. "
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear === "15") {
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
            sideModal.textContent = "The Washington Capitals' 2022-23 season featured their star Alexander Ovechkin continuing to make history, with key support from players like Nicklas Backstrom and John Carlson. Focused on a potent offense and experienced play, they aimed to maintain their competitive edge, with goaltending from Ilya Samsonov."
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

    if (selectedYear === 0) {
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
    }
    if (selectedYear === 1) {
        FL.textContent = "J Skinner";
        FC.textContent = "Thompson";
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
    }

    if (selectedYear === 2) {
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
    }

    if (selectedYear === 3) {
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
    }

    if (selectedYear === 4) {
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

    }

    if (selectedYear === 5) {
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
    }

    if (selectedYear === 6) {
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
    }

    if (selectedYear == 7) {
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
    }

    if (selectedYear === 8) {
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
    }

    if (selectedYear === 9) {
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
    }

    if (selectedYear === 10) {
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
    }

    if (selectedYear === 11) {
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
    }

    if (selectedYear === 12) {
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
    }

    if (selectedYear === 13) {
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
    }

    if (selectedYear === 14) {
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
    }

    if (selectedYear === 15) {
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