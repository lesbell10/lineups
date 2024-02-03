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

window.onload = function () {
    smallpic.style.scale = '1.75'
    smallpic.style.top = '60%'
    smallpic.style.left = '6%'
}


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


function updatePlayerInfo() {

    PG.textContent = "S Curry";
    SG.textContent = "L James";
    SF.textContent = "G Antetokounmpo";
    PF.textContent = "N Jokic";
    C.textContent = "J Embiid";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";


    smallpic.src = "/basket/img/wallpapers/embiid.jpg";

    MainFetchPopUp("/basket/Present/Present.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "Joel Embiid, Cameroonian professional basketball player, currently plays for the Philadelphia 76ers in the NBA. Known for his dominant presence as a center, exceptional scoring ability, rebounding, and defensive skills.Charismatic, impactful, and a multiple-time All-Star."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });

    // MainFetchPopUp("./Present.json"); 

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

// Initial update based on the default year (2020)
updatePlayerInfo();


// function FetchPopUp(info) {
//     fetch(info)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(player => {
//             // Assuming each player's image has an ID like 'playerImage1', 'playerImage2', etc.
//             const imageElement = document.querySelector(`.carousel .carousel-item .pimg${player.id}`);
//             const modal = document.getElementById(`modal${player.id}`);

//             if (imageElement && modal) {
//                 imageElement.addEventListener("mouseover", () => {
//                     modal.innerHTML = `
//                         <p>Full Name: ${player.full_name}</p>
//                         <p>Team: ${player.team}</p>
//                         <p>Nationality: ${player.nationality}</p>
//                         <p>Positions: ${player.positions}</p>
//                         <p>Height: ${player.height}</p>
//                         <p>Birth Date: ${player.birth_date}</p>


//                     `;
//                     modal.style.display = 'block'; // Show the modal
//                 });

//                 imageElement.addEventListener("mouseout", () => {
//                     modal.style.display = 'none'; // Hide the modal
//                 });
//             }
//         });
//     })
//     .catch(error => console.error('Error:', error));
// };

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