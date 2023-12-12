// ------------------------------------- fifa ----------------------------------------

// Clear page content except for the navigation bar
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

// ----------------------------------- nhl -----------------------------------------

// Clear page content except for the navigation bar
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
    ];

    // Hide or clear the selected elements
    for (const element of elementsToClear) {
        if (element) {
            element.style.display = "none";
        }
    }

    // Clear the player information elements (you can add more if needed)
    const playerInfoElements = [
        document.getElementById("FL"),
        document.getElementById("FL2"),
        document.getElementById("FC"),
        document.getElementById("FC2"),
        document.getElementById("FR"),
        document.getElementById("FR2"),
        document.getElementById("DL"),
        document.getElementById("DL2"),
        document.getElementById("DR"),
        document.getElementById("DR2"),
        document.getElementById("G"),
        document.getElementById("G2")
    ];

    for (const element of playerInfoElements) {
        if (element) {
            element.textContent = "";
            element.src = "";
        }
    }
}



// ------------------------------ nba ----------------------------------------

// Clear page content except for the navigation bar
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