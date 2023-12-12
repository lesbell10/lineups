// ------------------------------- FIFA ------------------------------------------
function FIFAFetchPopUp(info) {
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
                        <p>${player.description}</p>
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

// ------------------------------- NHL ------------------------------------------
function NHLFetchPopUp(info) {
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
                    <p>${player.description}</p>
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

// ------------------------------- NBA ------------------------------------------
function NBAFetchPopUp(info) {
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
                    <p>${player.description}</p>
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