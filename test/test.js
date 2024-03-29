// Function to start your program after data is loaded
function startProgram() {
    // Your code that depends on allPlayers can go here

    // Example: Add an event listener for the search button
    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("searchInput");
        const searchButton = document.getElementById("searchButton");

        // Event listener for the search button
        searchButton.addEventListener("click", function () {
            const query = searchInput.value;
            searchPlayersByName(query);
        });

        // Event listener for the 'Enter' key in the search input
        searchInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                const query = searchInput.value;
                searchPlayersByName(query);
            }
        });
    });
}

let allPlayers = [];

// Function to load JSON data from a file
function loadJSON(filePath) {
    return fetch(filePath)
        .then(response => response.json())
        .then(data => data);
}

// Load data from all JSON files and merge them
Promise.all([
    loadJSON('/Football/EveryYear/json/EveryYear_2005.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2006.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2007.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2008.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2009.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2010.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2011.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2012.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2013.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2014.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2015.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2016.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2017.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2018.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2019.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2020.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2021.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2022.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2023.json'),
    loadJSON('/Football/EveryYear/json/EveryYear_2024.json'),
]).then(files => {
    allPlayers = files.reduce((acc, file) => acc.concat(file), []);
    // Call startProgram after allPlayers is populated
    startProgram();
});

function searchPlayersByName(query) {
    clearPageContentExceptNav();
    // Object to store unique players
    const uniquePlayers = new Map();

    allPlayers.forEach(player => {
        if (player.full_name.toLowerCase().includes(query.toLowerCase())) {

            // Use full_name and birth_date as a unique key
            const uniqueKey = `${player.full_name}_${player.birth_date}`;


            // Check if the unique key already exists in the map
            if (!uniquePlayers.has(uniqueKey)) {
                uniquePlayers.set(uniqueKey, player);
            }
        }
    });

    // Convert Map values to an array for display
    const results = Array.from(uniquePlayers.values());
    displayResults(results);
}


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

// Display results
function displayResults(players) {
    // Get the results container element
    const resultsContainer = document.getElementById("results");

    // Clear any existing content in the results container
    resultsContainer.innerHTML = '';

    // Iterate through each player in the array
    players.forEach(player => {
        // Create a div element for each player
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player';

        // Create and set the image element
        const img = document.createElement('img');
        img.src = player.img;
        img.alt = `Image of ${player.full_name}`;
        img.style.display = "block";
        img.style.marginBottom = "10px";

        // Create and set the player details using template literals, including "Current Team" or "Last Team"
        playerDiv.innerHTML = `
            <p>Full Name: ${player.full_name}</p>
            <p>Team: ${player.team}</p>
            <p>Nationality: ${player.nationality}</p>
            <p>Position: ${player.position}</p>
            <p>Height: ${player.height}</p>
            <p>Birth Date: ${player.birth_date}</p>

    `;

        // Create a container for the description
        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description'; // Add a class for styling
        descriptionDiv.innerHTML = `${player.description}`; // Add your description text

        playerDiv.prepend(img);

        // Create a wrapper div to hold both playerDiv and descriptionDiv side by side
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'player-wrapper'; // Add a class for styling

        // Append playerDiv and descriptionDiv to wrapperDiv
        wrapperDiv.appendChild(playerDiv);
        wrapperDiv.appendChild(descriptionDiv);

        // Append the wrapperDiv to the resultsContainer
        resultsContainer.appendChild(wrapperDiv);
    });
}




function updatePlayerInfo(selectedYear) {
    const team = playerData[selectedYear];
    if (!team) return;

    team.players.forEach(player => {
        const playerNameElement = document.getElementById(player.position);
        const playerImageElement = document.getElementById(player.position + "2");

        if (playerNameElement && playerImageElement) {
            playerNameElement.textContent = player.name;
            playerImageElement.src = `/Football/img/players/${player.name}.webp`;
        }
    });

    smallpic.src = `/Football/img/logos/${team.teamName}.webp`;
    MainFetchPopUp(`/Football/Present/Clubs/json/${team.teamName}.json`);
}

yearSelector.addEventListener('change', () => updatePlayerInfo(yearSelector.value));




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

yearSelector.addEventListener('mouseenter', () => {
    yearSelector.focus();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;


    if (selectedYear === "0") {

        FL.textContent = "MacKinnon";
        FC.textContent = "McDavid";
        FR.textContent = "Crosby";
        DL.textContent = "Makar";
        DR.textContent = "Hamilton";
        G.textContent = "Jarry";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/canada.png";

        MainFetchPopUp("/Hockey/Present/nations/json/canada.json");
    }

    if (selectedYear === "1") {

        FL.textContent = "Necas";
        FC.textContent = "Hertl";
        FR.textContent = "Pastrnak";
        DL.textContent = "Rutta";
        DR.textContent = "Simek";
        G.textContent = "Vanecek";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/Hockey/img/logos/czech republic.webp";

        MainFetchPopUp("/Hockey/Present/nations/json/czech republic.json");
    }


    if (selectedYear === "2") {

        FL.textContent = "Hintz";
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

    }
}