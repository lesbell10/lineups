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


    if (selectedYear == "0") {

        FL.textContent = "MacKinnon";
        FC.textContent = "McDavid";
        FR.textContent = "Crosby";
        DL.textContent = "Makar";
        DR.textContent = "Hamilton";
        G.textContent = "Jarry";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/canada.png";

        MainFetchPopUp("/hockey/present/nations/json/canada.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Team Canada's hockey squad displayed remarkable skill and teamwork, excelling in international competitions. Their roster, a blend of NHL stars and emerging talent, showcased Canada's deep hockey roots and tradition, maintaining their status as a powerhouse in the hockey world."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "1") {

        FL.textContent = "Necas";
        FC.textContent = "Hertl";
        FR.textContent = "Pastrnak";
        DL.textContent = "Rutta";
        DR.textContent = "Simek";
        G.textContent = "Vanecek";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/czech republic.webp";

        MainFetchPopUp("/hockey/present/nations/json/czech republic.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Czech hockey in 2023 has been eventful, showcasing the nation's robust participation in the sport at various levels. The Czech Republic's men's national ice hockey team, known as Czechia, is one of the most successful national ice hockey teams in the world"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }


    if (selectedYear == "2") {

        FL.textContent = "Hintz";
        FC.textContent = "Barkov";
        FR.textContent = "Rantanen";
        DL.textContent = "Heiskanen";
        DR.textContent = "Lindell";
        G.textContent = "Saros";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/finland.webp";

        MainFetchPopUp("/hockey/present/nations/json/finland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Finland's hockey team showcased their renowned skill and resilience, excelling in international tournaments. With a blend of seasoned NHL players and promising domestic talent, they demonstrated tactical brilliance and a deep passion for the game, maintaining their status as elite competitors."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "3") {

        FL.textContent = "Stutzle";
        FC.textContent = "Draisaitl";
        FR.textContent = "Sturm";
        DL.textContent = "Seider";
        DR.textContent = "Gawanke";
        G.textContent = "Grubauer";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/germany.webp";

        MainFetchPopUp("/hockey/present/nations/json/germany.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Germany's hockey team showcased remarkable resilience in the IIHF World Championship. They had a dramatic semi-final overtime win against the unbeaten USA. This impressive turnaround led them to their first-ever final, vying for their inaugural IIHF gold medal​"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "4") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Kucherov";
        FR.textContent = "Panarin";
        DL.textContent = "Provorov";
        DR.textContent = "Sergachev";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/russia.png";

        MainFetchPopUp("/hockey/present/nations/json/russia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Russian and Belarusian hockey teams were barred from participating in IIHF competitions, including the World Juniors, due to the Ukraine war by Russia. This decision was made by the IIHF Council after a detailed risk assessment."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "5") {

        FL.textContent = "Tatar";
        FC.textContent = "Ruzicka";
        FR.textContent = "Slafkovsky";
        DL.textContent = "Fehervary";
        DR.textContent = "Cernak";
        G.textContent = "Halak";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/slovakia.webp";

        MainFetchPopUp("/hockey/present/nations/json/slovakia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Team Slovakia's hockey team presented a formidable roster at the Ice Hockey World Championships. The team consisted of a mix of experienced players and promising young talent."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "6") {

        FL.textContent = "Pettersson";
        FC.textContent = "Zibanejad";
        FR.textContent = "E Lindholm";
        DL.textContent = "Hedman";
        DR.textContent = "E Karlsson";
        G.textContent = "Ullmark";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/sweden.webp";

        MainFetchPopUp("/hockey/present/nations/json/sweden.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Sweden's national hockey team fielded a strong roster for the IIHF World Championship. Key NHLers included Lucas Raymond and team captain Jakob Silfverberg. Defense was led by NHL veterans Christian Folin and Patrik Nemeth, alongside rising star Rasmus Sandin."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "7") {
        FL.textContent = "Meier";
        FC.textContent = "Hischier";
        FR.textContent = "Fiala";
        DL.textContent = "Josi";
        DR.textContent = "Siegenthaler";
        G.textContent = "Genoni";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/switzerland.png";

        MainFetchPopUp("/hockey/present/nations/json/switzerland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Switzerland's national hockey team delivered a commendable performance at the IIHF World Championship. Despite being a smaller hockey nation, they consistently punched above their weight. Their roster comprised a blend of NHL talent and prominent players from European leagues."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        G2.style.width = '120px';
        G2.style.objectFit = "cover";
    }

    if (selectedYear == "8") {
        FL.textContent = "J Robertson";
        FC.textContent = "Matthews";
        FR.textContent = "M Tkachuk";
        DL.textContent = "Fox";
        DR.textContent = "McAvoy";
        G.textContent = "Hellebuyck"

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/usa.webp";

        MainFetchPopUp("/hockey/present/nations/json/united states.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, the USA hockey team showcased its depth and talent at the IIHF World Championship. Comprising NHL players, NCAA standouts, and young prospects, the team balanced experience and emerging talent."
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

        FL.textContent = "MacKinnon";
        FC.textContent = "McDavid";
        FR.textContent = "Crosby";
        DL.textContent = "Makar";
        DR.textContent = "Hamilton";
        G.textContent = "Jarry";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/canada.png";

        MainFetchPopUp("/hockey/present/nations/json/canada.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Team Canada's hockey squad displayed remarkable skill and teamwork, excelling in international competitions. Their roster, a blend of NHL stars and emerging talent, showcased Canada's deep hockey roots and tradition, maintaining their status as a powerhouse in the hockey world."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "1") {

        FL.textContent = "Necas";
        FC.textContent = "Hertl";
        FR.textContent = "Pastrnak";
        DL.textContent = "Rutta";
        DR.textContent = "Simek";
        G.textContent = "Vanecek";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/czech republic.webp";

        MainFetchPopUp("/hockey/present/nations/json/czech republic.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Czech hockey in 2023 has been eventful, showcasing the nation's robust participation in the sport at various levels. The Czech Republic's men's national ice hockey team, known as Czechia, is one of the most successful national ice hockey teams in the world"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }


    if (selectedYear == "2") {

        FL.textContent = "Hintz";
        FC.textContent = "Barkov";
        FR.textContent = "Rantanen";
        DL.textContent = "Heiskanen";
        DR.textContent = "Lindell";
        G.textContent = "Saros";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/finland.webp";

        MainFetchPopUp("/hockey/present/nations/json/finland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Finland's hockey team showcased their renowned skill and resilience, excelling in international tournaments. With a blend of seasoned NHL players and promising domestic talent, they demonstrated tactical brilliance and a deep passion for the game, maintaining their status as elite competitors."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "3") {

        FL.textContent = "Stutzle";
        FC.textContent = "Draisaitl";
        FR.textContent = "Sturm";
        DL.textContent = "Seider";
        DR.textContent = "Gawanke";
        G.textContent = "Grubauer";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/germany.webp";

        MainFetchPopUp("/hockey/present/nations/json/germany.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Germany's hockey team showcased remarkable resilience in the IIHF World Championship. They had a dramatic semi-final overtime win against the unbeaten USA. This impressive turnaround led them to their first-ever final, vying for their inaugural IIHF gold medal​"
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "4") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Kucherov";
        FR.textContent = "Panarin";
        DL.textContent = "Provorov";
        DR.textContent = "Sergachev";
        G.textContent = "Vasilevskiy";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/russia.png";

        MainFetchPopUp("/hockey/present/nations/json/russia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Russian and Belarusian hockey teams were barred from participating in IIHF competitions, including the World Juniors, due to the Ukraine war by Russia. This decision was made by the IIHF Council after a detailed risk assessment."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "5") {

        FL.textContent = "Tatar";
        FC.textContent = "Ruzicka";
        FR.textContent = "Slafkovsky";
        DL.textContent = "Fehervary";
        DR.textContent = "Cernak";
        G.textContent = "Halak";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/slovakia.webp";

        MainFetchPopUp("/hockey/present/nations/json/slovakia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Team Slovakia's hockey team presented a formidable roster at the Ice Hockey World Championships. The team consisted of a mix of experienced players and promising young talent."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "6") {

        FL.textContent = "Pettersson";
        FC.textContent = "Zibanejad";
        FR.textContent = "E Lindholm";
        DL.textContent = "Hedman";
        DR.textContent = "E Karlsson";
        G.textContent = "Ullmark";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/sweden.webp";

        MainFetchPopUp("/hockey/present/nations/json/sweden.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Sweden's national hockey team fielded a strong roster for the IIHF World Championship. Key NHLers included Lucas Raymond and team captain Jakob Silfverberg. Defense was led by NHL veterans Christian Folin and Patrik Nemeth, alongside rising star Rasmus Sandin."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }

    if (selectedYear == "7") {
        FL.textContent = "Meier";
        FC.textContent = "Hischier";
        FR.textContent = "Fiala";
        DL.textContent = "Josi";
        DR.textContent = "Siegenthaler";
        G.textContent = "Genoni";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/switzerland.png";

        MainFetchPopUp("/hockey/present/nations/json/switzerland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, Switzerland's national hockey team delivered a commendable performance at the IIHF World Championship. Despite being a smaller hockey nation, they consistently punched above their weight. Their roster comprised a blend of NHL talent and prominent players from European leagues."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        G2.style.width = '120px';
        G2.style.objectFit = "cover";
    }

    if (selectedYear == "8") {
        FL.textContent = "J Robertson";
        FC.textContent = "Matthews";
        FR.textContent = "M Tkachuk";
        DL.textContent = "Fox";
        DR.textContent = "McAvoy";
        G.textContent = "Hellebuyck"

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/usa.webp";

        MainFetchPopUp("/hockey/present/nations/json/united states.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "In 2023, the USA hockey team showcased its depth and talent at the IIHF World Championship. Comprising NHL players, NCAA standouts, and young prospects, the team balanced experience and emerging talent."
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