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

function updatePlayerInfo() {

    FL.textContent = "Ovechkin";
    FC.textContent = "McDavid";
    FR.textContent = "Crosby";
    DL.textContent = "Hedman";
    DR.textContent = "E Karlsson";
    G.textContent = "Price";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";


    smallpic.src = "/hockey/img/wallpapers/crosby.jpg";

    MainFetchPopUp("/hockey/past/past.json");


     function clearAndFadeInElements() {
        const elements = [
            FL,FL2,FC,FC2,FR,FR2,DL,DL2,DR,DR2,G,G2,
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

// Initial update based on the default year (2020)
updatePlayerInfo();

    const nav = document.querySelector("nav");
    const backBtn = document.querySelector("#backButton")
    const forBtn = document.querySelector("#forwardButton")
    const search = document.querySelector(".search-container")

    FC2.addEventListener('click', function () {
        nav.style.display = "none";
        backBtn.style.display = "none";
        forBtn.style.display = "none";
        search.style.display = "none";
    })
        
    FL2.addEventListener('click', function () {
        nav.style.display = "flex";
        backBtn.style.display = "block";
        forBtn.style.display = "block";
        search.style.display = "block";

    })