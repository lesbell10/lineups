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

function updatePlayerInfo() {

    SG.textContent = "Harden";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png";
    PG.textContent = "Curry";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png";
    SF.textContent = "James";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png";
    PF.textContent = "Durant";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png";
    C.textContent = "Davis";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png";
    
    document.getElementById("smallpic").src = "https://i.pinimg.com/originals/0e/04/d7/0e04d70514c7ce1eaf1ea59c619d9c74.jpg";


     function clearAndFadeInElements() {
        const elements = [
            SG,SG2,PG,PG2,SF,SF2,PF,PF2,C,C2
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
        const search = document.querySelector(".search-container");

        PG2.addEventListener('click', function () {
            nav.style.display = "none";
            backBtn.style.display = "none";
            forBtn.style.display = "none";
            search.style.display = "none";
        })
            
        SG2.addEventListener('click', function () {
            nav.style.display = "flex";
            backBtn.style.display = "block";
            forBtn.style.display = "block";
            search.style.display = "block";
        })