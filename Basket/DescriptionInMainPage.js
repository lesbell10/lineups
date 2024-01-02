const desc = document.querySelector("#desc")

function MainFetchPopUp(info) {
    fetch(info)
    .then(response => response.json())
    .then(data => {
        data.forEach(player => {
            // Assuming each player's image has an ID like 'playerImage1', 'playerImage2', etc.
            const imageElement = document.querySelector(`.carousel .carousel-item .pimg${player.id}`);

            if (imageElement) {
                imageElement.addEventListener("click", () => {
                    clearPageContentExceptNav();
                    hideSomeThings();
                    document.querySelector("body").style.background = "grey";
                    desc.innerHTML = `
                       <style>
                        img {
                            display: block;
                            margin-bottom: 10px;
                        }
                        </style><div class="bubble">
                                <h6>${player.full_name}</h6>
                        <div class="player-info">
                            <img src="${player.img}"/> 
                            ${player.description}
                            <div class="line">------------------------------</div>
                            <p>Team: ${player.team}</p>
                            <p>Nationality: ${player.nationality}</p>
                            <p>Position: ${player.positions}</p>
                        </div>
    `;
                });
            }
        });
    })
    .catch(error => console.error('Error:', error));
};




function clearPageContentExceptNav() {
    // Clear or hide elements you want to remove from the page, except for the navigation bar


    const elementsToClear = [
        document.getElementById("yearSelector"),
        document.querySelector(".carousel"),
        document.getElementById("smallpic"),
        document.querySelector(".side-modal"),
        document.querySelector('.combobox'),
        document.querySelector("#forwardButton"),
        document.querySelector("#backButton"),
        document.querySelector(".label"),
    ];

    // Hide or clear the selected elements
    for (const element of elementsToClear) {
        if (element) {
            element.style.display = "none";
        }
    }

    // Clear the player information elements (you can add more if needed)
    const playerInfoElements = [
        document.getElementById("PG"),
        document.getElementById("PG2"),
        document.getElementById("SG"),
        document.getElementById("SG2"),
        document.getElementById("SF"),
        document.getElementById("SF2"),
        document.getElementById("PF"),
        document.getElementById("PF2"),
        document.getElementById("C"),
        document.getElementById("C2"),
    ];

    for (const element of playerInfoElements) {
        if (element) {
            element.textContent = "";
            element.src = "";
        }
    }
}

function hideSomeThings() {
    const mainButton = document.querySelector(".mainbutton");
    if (mainButton) {
        mainButton.style.display = "none";
    }
}