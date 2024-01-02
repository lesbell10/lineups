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
                            <p style="animation: none;">${player.description}</p>
                            <div class="line">------------------------------</div>
                            <p style="animation: none;">Team: ${player.team}</p>
                            <p style="animation: none;">Nationality: ${player.nationality}</p>
                            <p style="animation: none;">Position: ${player.position}</p>                      
                        </div>
                        </div>
                        `;
                        
                });
            }
        });
    })
    .catch(error => console.error('Error:', error));
};

function hideSomeThings() {
    const mainButton = document.querySelector(".mainbutton");
    if (mainButton) {
        mainButton.style.display = "none";
    }
}


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
        document.getElementById("STC"),
        document.getElementById("STC2"),
        document.getElementById("FR"),
        document.getElementById("FR2"),
        document.getElementById("AMC"),
        document.getElementById("AMC2"),
        document.getElementById("FL"),
        document.getElementById("FL2"),
        document.getElementById("CMR"),
        document.getElementById("CMR2"),
        document.getElementById("CML"),
        document.getElementById("CML2"),
        document.getElementById("DR"),
        document.getElementById("DR2"),
        document.getElementById("DCR"),
        document.getElementById("DCR2"),
        document.getElementById("DCL"),
        document.getElementById("DCL2"),
        document.getElementById("DL"),
        document.getElementById("DL2"),
        document.getElementById("GK"),
        document.getElementById("GK2")
    ];

    for (const element of playerInfoElements) {
        if (element) {
            element.textContent = "";
            element.src = "";
        }
    }
}