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

window.onload = function () {
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

    if (selectedYear == "2") {
        SG.textContent = "J Harden";
        PG.textContent = "S Curry";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "A Davis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/usa.gif";

        MainFetchPopUp("/basket/Past/nations/json/usa.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The NBA saw the rise of super-teams and a focus on three-point shooting. Notable events included the Miami Heat's \"Big Three\" era, the Golden State Warriors' dominance, and the emergence of stars like Stephen Curry, LeBron James, and Kevin Durant."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    } if (selectedYear == "0") {
        SG.textContent = "L Doncic";
        PG.textContent = "T Parker";
        SF.textContent = "G Antetokounmpo";
        PF.textContent = "D Nowitzki";
        C.textContent = "N Jokic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/europe.png";

        MainFetchPopUp("/basket/Past/nations/json/europe.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = " The EuroLeague, Europe's premier club basketball competition, continued to grow in popularity and competitiveness. The decade saw dominant performances from teams like Real Madrid, CSKA Moscow, and Fenerbahçe."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "1") {
        SG.textContent = "M Ginobili";
        PG.textContent = "J Embiid";
        SF.textContent = "A Horford";
        PF.textContent = "H Olajuwon";
        C.textContent = "Y Ming";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/rest of world.png";

        MainFetchPopUp("/basket/Past/nations/json/rest of world.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The NBA continued to expand its global reach with players from various countries making significant impacts. Stars like Yao Ming (retired in 2011) and later on, players like Joel Embiid (Cameroon) became international icons."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }
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

    if (selectedYear == "2") {
        SG.textContent = "Harden";
        PG.textContent = "Curry";
        SF.textContent = "James";
        PF.textContent = "Durant";
        C.textContent = "Davis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/usa.gif";

        MainFetchPopUp("/basket/Past/nations/json/usa.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The NBA saw the rise of super-teams and a focus on three-point shooting. Notable events included the Miami Heat's \"Big Three\" era, the Golden State Warriors' dominance, and the emergence of stars like Stephen Curry, LeBron James, and Kevin Durant."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    } if (selectedYear == "0") {
        SG.textContent = "L Doncic";
        PG.textContent = "T Parker";
        SF.textContent = "D Nowitzki";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "N Jokic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/europe.png";

        MainFetchPopUp("/basket/Past/nations/json/europe.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = " The EuroLeague, Europe's premier club basketball competition, continued to grow in popularity and competitiveness. The decade saw dominant performances from teams like Real Madrid, CSKA Moscow, and Fenerbahçe."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

    }

    if (selectedYear == "1") {
        SG.textContent = "M Ginobili";
        PG.textContent = "Y Ming";
        SF.textContent = "H Olajuwon";
        PF.textContent = "J Embiid";
        C.textContent = "A Horford";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/rest of world.png";

        MainFetchPopUp("/basket/Past/nations/json/rest of world.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The NBA continued to expand its global reach with players from various countries making significant impacts. Stars like Yao Ming (retired in 2011) and later on, players like Joel Embiid (Cameroon) became international icons."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }
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

// Event listener for the back button
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