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
const msgLabel = document.querySelector(".label");

window.onload = function () {
    smallpic.style.scale = '1.15'
    smallpic.style.left = '12%'
    yearSelector.selectedIndex = 0;

};



yearSelector.addEventListener("change", () => {
    updatePlayerInfo();

});




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


yearSelector.addEventListener('mouseenter', () => {
    yearSelector.focus();
});

let selectedYear = 0;




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

function updatePlayerInfo() {

    selectedYear = yearSelector.value;


    if (selectedYear == "0") {
        FL.textContent = "Crosby";
        FC.textContent = "McDavid";
        FR.textContent = "J Toews";
        DL.textContent = "Keith";
        DR.textContent = "Weber";
        G.textContent = "Price";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/canada.png";

        MainFetchPopUp("/Hockey/Past/nations/json/canada.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Canada's national hockey team in the 2010s continued its rich tradition, winning gold at the 2010 Vancouver Olympics and 2014 Sochi Olympics. They also secured gold at various IIHF World Championships, showcasing the country's dominance in international hockey during this decade."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Mike Babcock"
    }

    if (selectedYear == "1") {
        FL.textContent = "Voracek";
        FC.textContent = "Krejci";
        FR.textContent = "Pastrnak";
        DL.textContent = "Gudas";
        DR.textContent = "Kempny";
        G.textContent = "Mrazek";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/czech republic.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/czech republic.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Czech Republic's national hockey team in the 2010s had a competitive decade, with success at various IIHF World Championships. However, they struggled to secure Olympic medals and faced challenges in maintaining a consistent presence among the world's elite hockey nations."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Vladimir Ruzicka"
    }


    if (selectedYear == "2") {
        FL.textContent = "Laine";
        FC.textContent = "Barkov";
        FR.textContent = "Rantanen";
        DL.textContent = "Heiskanen";
        DR.textContent = "Lindell";
        G.textContent = "Saros";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/finland.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/finland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Finland's national hockey team in the 2010s achieved significant success, winning gold at the 2011 and 2019 IIHF World Championships. They also secured an Olympic bronze in 2014 and silver in 2016, establishing themselves as a strong contender on the international hockey stage."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Jukka Jalonen"
    }


    if (selectedYear == "3") {
        FL.textContent = "Rieder";
        FC.textContent = "Draisaitl";
        FR.textContent = "Goc";
        DL.textContent = "Ehrhoff";
        DR.textContent = "Seidenberg";
        G.textContent = "Grubauer";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/germany.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/germany.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Germany's national hockey team in the 2010s showed signs of improvement, reaching the Olympic semifinals in 2018 and securing silver at the 2018 IIHF World Championships. They aimed to solidify their position among top-tier hockey nations but faced challenges in consistency."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Marco Sturm"
    }


    if (selectedYear == "4") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Malkin";
        FR.textContent = "Kucherov";
        DL.textContent = "Markov";
        DR.textContent = "Gonchar";
        G.textContent = "Vasilevskiy";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/russia.png";

        MainFetchPopUp("/Hockey/Past/nations/json/russia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Russia's national hockey team in the 2010s displayed competitive prowess, winning gold at the 2012 and 2014 IIHF World Championships. However, they faced disappointment at the Olympics and occasionally struggled to replicate their success, despite boasting top talent from the KHL and NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Zinetula Bilyaletdinov"

    }

    if (selectedYear == "5") {
        FL.textContent = "Tatar";
        FC.textContent = "Hossa";
        FR.textContent = "Gaborik";
        DL.textContent = "Chara";
        DR.textContent = "Sekera";
        G.textContent = "Halak";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/slovakia.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/slovakia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Slovakia's national hockey team in the 2010s had moments of success, winning silver at the 2012 IIHF World Championships. They faced challenges in maintaining consistency and securing medals at the Olympics and World Championships, despite a roster of talented players."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Jan Filc"
    }


    if (selectedYear == "6") {
        FL.textContent = "D Sedin";
        FC.textContent = "H Sedin";
        FR.textContent = "Backstrom";
        DL.textContent = "E Karlsson";
        DR.textContent = "Hedman";
        G.textContent = "Lundqvist";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/sweden.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/sweden.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Sweden's national hockey team in the 2010s continued its strong tradition. They secured gold at the 2013 IIHF World Championships and silver at the 2014 Olympics. With notable NHL stars, they consistently competed at a high level, maintaining their reputation as an elite hockey nation."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Par Marts"
    }

    if (selectedYear == "7") {
        FL.textContent = "Fiala";
        FC.textContent = "Niederreiter";
        FR.textContent = "Meier";
        DL.textContent = "Josi";
        DR.textContent = "Streit";
        G.textContent = "Hiller";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/switzerland.png"

        MainFetchPopUp("/Hockey/Past/nations/json/switzerland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Switzerland's national hockey team in the 2010s showed improvement, consistently competing at the IIHF World Championships and securing medals, including silver in 2013 and 2018. They aimed to establish themselves as a top-tier hockey nation but faced challenges in winning Olympic medals."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Sean Simpson"
    }


    if (selectedYear == "8") {
        FL.textContent = "Kessel";
        FC.textContent = "Matthews";
        FR.textContent = "P Kane";
        DL.textContent = "Suter";
        DR.textContent = "Carlson";
        G.textContent = "Quick";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/usa.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/united states.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The USA national hockey team in the 2010s displayed competitiveness on the international stage, winning gold at the 2017 IIHF World Championships. They had Olympic silver in 2010 and bronze in 2018, showcasing their talent and aiming for sustained success in international hockey."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Dan Bylsma"
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
        FL.textContent = "Crosby";
        FC.textContent = "McDavid";
        FR.textContent = "J Toews";
        DL.textContent = "Keith";
        DR.textContent = "Weber";
        G.textContent = "Price";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/canada.png";

        MainFetchPopUp("/Hockey/Past/nations/json/canada.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Canada's national hockey team in the 2010s continued its rich tradition, winning gold at the 2010 Vancouver Olympics and 2014 Sochi Olympics. They also secured gold at various IIHF World Championships, showcasing the country's dominance in international hockey during this decade."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Mike Babcock"
    }

    if (selectedYear == "1") {
        FL.textContent = "Voracek";
        FC.textContent = "Krejci";
        FR.textContent = "Pastrnak";
        DL.textContent = "Gudas";
        DR.textContent = "Kempny";
        G.textContent = "Mrazek";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/czech republic.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/czech republic.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Czech Republic's national hockey team in the 2010s had a competitive decade, with success at various IIHF World Championships. However, they struggled to secure Olympic medals and faced challenges in maintaining a consistent presence among the world's elite hockey nations."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Vladimir Ruzicka"
    }


    if (selectedYear == "2") {
        FL.textContent = "Laine";
        FC.textContent = "Barkov";
        FR.textContent = "Rantanen";
        DL.textContent = "Heiskanen";
        DR.textContent = "Lindell";
        G.textContent = "Saros";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/finland.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/finland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Finland's national hockey team in the 2010s achieved significant success, winning gold at the 2011 and 2019 IIHF World Championships. They also secured an Olympic bronze in 2014 and silver in 2016, establishing themselves as a strong contender on the international hockey stage."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Jukka Jalonen"
    }


    if (selectedYear == "3") {
        FL.textContent = "Rieder";
        FC.textContent = "Draisaitl";
        FR.textContent = "Goc";
        DL.textContent = "Ehrhoff";
        DR.textContent = "Seidenberg";
        G.textContent = "Grubauer";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/germany.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/germany.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Germany's national hockey team in the 2010s showed signs of improvement, reaching the Olympic semifinals in 2018 and securing silver at the 2018 IIHF World Championships. They aimed to solidify their position among top-tier hockey nations but faced challenges in consistency."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Marco Sturm"
    }


    if (selectedYear == "4") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Malkin";
        FR.textContent = "Kucherov";
        DL.textContent = "Markov";
        DR.textContent = "Gonchar";
        G.textContent = "Vasilevskiy";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/russia.png";

        MainFetchPopUp("/Hockey/Past/nations/json/russia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Russia's national hockey team in the 2010s displayed competitive prowess, winning gold at the 2012 and 2014 IIHF World Championships. However, they faced disappointment at the Olympics and occasionally struggled to replicate their success, despite boasting top talent from the KHL and NHL."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Zinetula Bilyaletdinov"

    }

    if (selectedYear == "5") {
        FL.textContent = "Hossa";
        FC.textContent = "Gaborik";
        FR.textContent = "Tatar";
        DL.textContent = "Chara";
        DR.textContent = "Sekera";
        G.textContent = "Halak";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/slovakia.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/slovakia.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Slovakia's national hockey team in the 2010s had moments of success, winning silver at the 2012 IIHF World Championships. They faced challenges in maintaining consistency and securing medals at the Olympics and World Championships, despite a roster of talented players."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Jan Filc"
    }


    if (selectedYear == "6") {
        FL.textContent = "D Sedin";
        FC.textContent = "H Sedin";
        FR.textContent = "Backstrom";
        DL.textContent = "E Karlsson";
        DR.textContent = "Hedman";
        G.textContent = "Lundqvist";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/sweden.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/sweden.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Sweden's national hockey team in the 2010s continued its strong tradition. They secured gold at the 2013 IIHF World Championships and silver at the 2014 Olympics. With notable NHL stars, they consistently competed at a high level, maintaining their reputation as an elite hockey nation."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Par Marts"
    }

    if (selectedYear == "7") {
        FL.textContent = "Fiala";
        FC.textContent = "Niederreiter";
        FR.textContent = "Meier";
        DL.textContent = "Josi";
        DR.textContent = "Streit";
        G.textContent = "Hiller";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/switzerland.png"

        MainFetchPopUp("/Hockey/Past/nations/json/switzerland.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Switzerland's national hockey team in the 2010s showed improvement, consistently competing at the IIHF World Championships and securing medals, including silver in 2013 and 2018. They aimed to establish themselves as a top-tier hockey nation but faced challenges in winning Olympic medals."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Sean Simpson"
    }


    if (selectedYear == "8") {
        FL.textContent = "Kessel";
        FC.textContent = "Matthews";
        FR.textContent = "P Kane";
        DL.textContent = "Suter";
        DR.textContent = "Carlson";
        G.textContent = "Quick";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/usa.webp";

        MainFetchPopUp("/Hockey/Past/nations/json/united states.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The USA national hockey team in the 2010s displayed competitiveness on the international stage, winning gold at the 2017 IIHF World Championships. They had Olympic silver in 2010 and bronze in 2018, showcasing their talent and aiming for sustained success in international hockey."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Head Coach: Dan Bylsma"
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