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
const sideModal = document.querySelector(".side-modal");

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

function updatePlayerInfo() {

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

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "Last year, Connor McDavid, the Edmonton Oilers' dynamic center, continued to dominate the NHL. Exhibiting exceptional skill and leadership, he maintained his reputation as one of the league's top players."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });



    //     smallpic.addEventListener('mouseover', () => {
    //     sideModal.style.display = 'block'
    //     sideModal.textContent = "In the 2022-23 NHL season, Connor McDavid delivered an outstanding performance with 64 goals and 89 assists over 82 games, totaling 153 points. This feat ranked as the 15th best in NHL history, earning him the prestigious Hart Trophy for the third time."
    // })

    // smallpic.addEventListener("mouseout", () => {
    //             sideModal.style.display = 'none'; // Hide the modal
    // }); 

    MainFetchPopUp("/hockey/present/present.json");


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

// Initial update based on the default year (2020)
updatePlayerInfo();

function FetchPopUp(info) {
    fetch(info)
        .then(response => response.json())
        .then(data => {
            data.forEach(player => {
                // Assuming each player's image has an ID like 'playerImage1', 'playerImage2', etc.
                const imageElement = document.querySelector(`.carousel .carousel-item .pimg${player.id}`);
                const modal = document.getElementById(`modal${player.id}`);

                if (imageElement && modal) {
                    imageElement.addEventListener("mouseover", () => {
                        modal.innerHTML = `
                        <p>Full Name: ${player.full_name}</p>
                        <p>Team: ${player.team}</p>
                        <p>Nationality: ${player.nationality}</p>
                        <p>Position: ${player.position}</p>
                        <p>Height: ${player.height}</p>
                        <p>Birth Date: ${player.birth_date}</p>


                    `;
                        modal.style.display = 'block'; // Show the modal
                    });

                    imageElement.addEventListener("mouseout", () => {
                        modal.style.display = 'none'; // Hide the modal
                    });
                }
            });
        })
        .catch(error => console.error('Error:', error));
};

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