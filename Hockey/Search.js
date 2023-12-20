const label = document.querySelector(".label");
const description = document.getElementById("desc");
let allPlayers = [];
let currentPage = 1;
const itemsPerPage = 40;
let includeRetired = true;

// Function to load JSON data from a file
function loadJSON(filePath) {
    return fetch(filePath)
        .then(response => response.json())
        .then(data => data);
}

// Load data from both files and merge them
Promise.all([
    loadJSON('/hockey/everyyear/json/EveryYear_2005.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2006.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2007.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2008.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2009.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2010.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2011.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2012.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2013.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2014.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2015.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2016.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2017.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2018.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2019.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2020.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2021.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2022.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2023.json'),
    loadJSON('/hockey/everyyear/json/EveryYear_2024.json'),
    loadJSON('/hockey/Others.json'),
    loadJSON('/hockey/present/present.json'),
    loadJSON('/hockey/past/past.json'),
    loadJSON('/hockey/present/eastern/json/boston.json'),
    loadJSON('/hockey/present/eastern/json/buffalo.json'),
    loadJSON('/hockey/present/eastern/json/carolina.json'),
    loadJSON('/hockey/present/eastern/json/columbus.json'),
    loadJSON('/hockey/present/eastern/json/detroit.json'),
    loadJSON('/hockey/present/eastern/json/florida.json'),
    loadJSON('/hockey/present/eastern/json/montreal.json'),
    loadJSON('/hockey/present/eastern/json/new jersey.json'),
    loadJSON('/hockey/present/eastern/json/ny islanders.json'),
    loadJSON('/hockey/present/eastern/json/ny rangers.json'),
    loadJSON('/hockey/present/eastern/json/ottawa.json'),
    loadJSON('/hockey/present/eastern/json/philadelphia.json'),
    loadJSON('/hockey/present/eastern/json/pittsburgh.json'),
    loadJSON('/hockey/present/eastern/json/tampa bay.json'),
    loadJSON('/hockey/present/eastern/json/toronto.json'),
    loadJSON('/hockey/present/eastern/json/washington.json'),
    loadJSON('/hockey/present/western/json/anaheim.json'),
    loadJSON('/hockey/present/western/json/arizona.json'),
    loadJSON('/hockey/present/western/json/calgary.json'),
    loadJSON('/hockey/present/western/json/chicago.json'),
    loadJSON('/hockey/present/western/json/colorado.json'),
    loadJSON('/hockey/present/western/json/dallas.json'),
    loadJSON('/hockey/present/western/json/edmonton.json'),
    loadJSON('/hockey/present/western/json/los angeles.json'),
    loadJSON('/hockey/present/western/json/minnesota.json'),
    loadJSON('/hockey/present/western/json/nashville.json'),
    loadJSON('/hockey/present/western/json/san jose.json'),
    loadJSON('/hockey/present/western/json/seattle.json'),
    loadJSON('/hockey/present/western/json/st louis.json'),
    loadJSON('/hockey/present/western/json/vancouver.json'),
    loadJSON('/hockey/present/western/json/vegas.json'),
    loadJSON('/hockey/present/western/json/winnipeg.json'),
    loadJSON('/hockey/present/nations/json/canada.json'),
    loadJSON('/hockey/present/nations/json/czech republic.json'),
    loadJSON('/hockey/present/nations/json/finland.json'),
    loadJSON('/hockey/present/nations/json/germany.json'),
    loadJSON('/hockey/present/nations/json/russia.json'),
    loadJSON('/hockey/present/nations/json/slovakia.json'),
    loadJSON('/hockey/present/nations/json/sweden.json'),
    loadJSON('/hockey/present/nations/json/switzerland.json'),
    loadJSON('/hockey/present/nations/json/united states.json'),
    loadJSON('/hockey/past/eastern/json/boston.json'),
    loadJSON('/hockey/past/eastern/json/buffalo.json'),
    loadJSON('/hockey/past/eastern/json/carolina.json'),
    loadJSON('/hockey/past/eastern/json/columbus.json'),
    loadJSON('/hockey/past/eastern/json/detroit.json'),
    loadJSON('/hockey/past/eastern/json/florida.json'),
    loadJSON('/hockey/past/eastern/json/montreal.json'),
    loadJSON('/hockey/past/eastern/json/new jersey.json'),
    loadJSON('/hockey/past/eastern/json/ny islanders.json'),
    loadJSON('/hockey/past/eastern/json/ny rangers.json'),
    loadJSON('/hockey/past/eastern/json/ottawa.json'),
    loadJSON('/hockey/past/eastern/json/philadelphia.json'),
    loadJSON('/hockey/past/eastern/json/pittsburgh.json'),
    loadJSON('/hockey/past/eastern/json/tampa bay.json'),
    loadJSON('/hockey/past/eastern/json/toronto.json'),
    loadJSON('/hockey/past/eastern/json/washington.json'),
    loadJSON('/hockey/past/western/json/anaheim.json'),
    loadJSON('/hockey/past/western/json/arizona.json'),
    loadJSON('/hockey/past/western/json/calgary.json'),
    loadJSON('/hockey/past/western/json/chicago.json'),
    loadJSON('/hockey/past/western/json/colorado.json'),
    loadJSON('/hockey/past/western/json/dallas.json'),
    loadJSON('/hockey/past/western/json/edmonton.json'),
    loadJSON('/hockey/past/western/json/los angeles.json'),
    loadJSON('/hockey/past/western/json/minnesota.json'),
    loadJSON('/hockey/past/western/json/nashville.json'),
    loadJSON('/hockey/past/western/json/san jose.json'),
    loadJSON('/hockey/past/western/json/st louis.json'),
    loadJSON('/hockey/past/western/json/vancouver.json'),
    loadJSON('/hockey/past/western/json/vegas.json'),
    loadJSON('/hockey/past/western/json/winnipeg.json'),
    loadJSON('/hockey/past/nations/json/canada.json'),
    loadJSON('/hockey/past/nations/json/czech republic.json'),
    loadJSON('/hockey/past/nations/json/finland.json'),
    loadJSON('/hockey/past/nations/json/germany.json'),
    loadJSON('/hockey/past/nations/json/russia.json'),
    loadJSON('/hockey/past/nations/json/slovakia.json'),
    loadJSON('/hockey/past/nations/json/sweden.json'),
    loadJSON('/hockey/past/nations/json/switzerland.json'),
    loadJSON('/hockey/past/nations/json/united states.json'),

]).then(files => {
    allPlayers = files.flat();
    // Now allPlayers contains data from both files
});

// Search function/
function searchPlayers(query, includeRetired = true) {
    description.innerHTML = "";
    clearPageContentExceptNav();
    const uniquePlayers = new Map();

    // Normalize the query to lowercase for case-insensitive search
    const normalizedQuery = query.toLowerCase();

    allPlayers.forEach(player => {
        let regex = new RegExp("\\bRetired\\b", "i");
        if (!includeRetired && regex.test(player.team)) {
            return;
        }

        Object.values(player).forEach(value => {
            if (typeof value === 'string' && value.toLowerCase().includes(normalizedQuery)) {
                const uniqueKey = `${player.last_name}`;
                if (!uniquePlayers.has(uniqueKey)) {
                    uniquePlayers.set(uniqueKey, player);
                    return;
                }
            }
        });
    });

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

// Display results
function displayResults(players) {
    const filteredPlayers = players.reduce((unique, player) => {
        const uniqueKey = `${player.last_name}_${player.birth_date}`;
        if (!unique.some(u => `${u.last_name}_${u.birth_date}` === uniqueKey)) {
            unique.push(player);
        }
        return unique;
    }, []);

    // Sort the players by last name in ascending order
    filteredPlayers.sort((a, b) => {
        const lastWordA = a.last_name ? a.last_name.split(' ').pop() : '';
        const lastWordB = b.last_name ? b.last_name.split(' ').pop() : '';
        return lastWordA.localeCompare(lastWordB);
    });
    // Get the results container element
    const resultsContainer = document.getElementById("results");
    // Clear any existing content in the results container
    resultsContainer.innerHTML = '';

    document.querySelector("body").style.background = "grey";

    const pageCount = Math.ceil(filteredPlayers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const playersToDisplay = filteredPlayers.slice(startIndex, endIndex);

    // Check if there are no players in the array
    if (playersToDisplay.length === 0) {
        // Display a 'no results found' message
        resultsContainer.innerHTML = '<h1>No players found</h1>';
        document.getElementById('count').innerHTML = ""
        document.getElementById('pagination').innerHTML = ""
        return; // Exit the function as there's nothing more to do
    }

    // Iterate through each player in the array
    playersToDisplay.forEach(player => {
        // Create a div element for each player
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player';

        // Create and set the image element
        const img = document.createElement('img');
        img.src = player.img;
        img.alt = `Image of ${player.last_name}`;
        img.style.display = "flex";
        img.style.marginBottom = "10px";
        img.style.animation = "none"

        // Create and set the player details using template literals, including "Current Team" or "Last Team"
        playerDiv.innerHTML = `        
  <p style="animation: none;">${player.description}</p>
  <div class="line">-----------------------------</div>
  <p style="animation: none;">Team: ${player.team}</p>
  <p style="animation: none;">Nationality: ${player.nationality}</p>
  <p style="animation: none;">Position: ${player.position}</p>
            `;

        // Create a container for the description

        // const descriptionDiv = document.createElement('div');
        // descriptionDiv.className = 'description'; // Add a class for styling
        // descriptionDiv.innerHTML = `${player.description}`; // Add your description text

        playerDiv.prepend(img);

        // Create a wrapper div to hold both playerDiv and descriptionDiv side by side
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'player-wrapper'; // Add a class for styling
        wrapperDiv.innerHTML = `<h6>${player.full_name}</h6>`

        // Append playerDiv and descriptionDiv to wrapperDiv
        wrapperDiv.appendChild(playerDiv);
        // wrapperDiv.appendChild(descriptionDiv);

        // Append the wrapperDiv to the resultsContainer
        resultsContainer.appendChild(wrapperDiv);

        const message = players.length === 1
            ? `<h1>${players.length} player found</h1>`
            : `<h1>${players.length} players found</h1>`;

        document.getElementById('count').innerHTML = message

    });
    addPaginationControls(pageCount, filteredPlayers);
}

// Function to create pagination controls
function addPaginationControls(pageCount, filteredPlayers) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.addEventListener('click', function () {
            currentPage = i;
            displayResults(filteredPlayers);
            setActivePageButton(i); // Call the function to set the active page button
        });
        paginationContainer.appendChild(pageButton);
    }

    // Set the active page button initially
    setActivePageButton(currentPage);
}

// Function to set the active page button
function setActivePageButton(activePageIndex) {
    const paginationButtons = document.querySelectorAll('#pagination button');

    // Remove the 'active-page' class from all buttons
    paginationButtons.forEach(button => {
        button.classList.remove('active-page');
    });

    // Add the 'active-page' class to the active page button
    const activeButton = paginationButtons[activePageIndex - 1];
    if (activeButton) {
        activeButton.classList.add('active-page');
    }
}


const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const activeLabel = document.querySelector(".act_players")

// Event listener for the search button
searchButton.addEventListener("click", function () {
    includeRetired = true
    hideSomeThings();
    const query = "";
    searchInput.value = ""
    searchPlayers(query, includeRetired);

    activeLabel.style.display = 'block'
    activeButton.style.display = "block"

    activeButton.style.backgroundColor = "red"
});

// Event listener for the 'Enter' key in the search input
searchInput.addEventListener("input", function () {
    includeRetired = true
    hideSomeThings();
    const query = searchInput.value;
    searchPlayers(query, includeRetired);
});

// Event listener for the 'Active' button
const activeButton = document.getElementById("retiredFilter");

activeButton.addEventListener("click", function () {
    // Check the current background color
    const backgroundColor = activeButton.style.backgroundColor;

    if (backgroundColor === "red" || backgroundColor === "") {
        includeRetired = false; // Set to exclude retired players
        const query = searchInput.value;
        searchPlayers(query, includeRetired);
        activeButton.style.backgroundColor = "green";
    } else {
        includeRetired = true;
        hideSomeThings();
        const query = searchInput.value;
        searchPlayers(query, includeRetired);
        activeButton.style.backgroundColor = "red";
    }
});


searchInput.addEventListener('input', function () {
    const activeButton = document.getElementById("retiredFilter");
    activeButton.style.backgroundColor = "red"
})

function hideSomeThings() {
    const mainButton = document.querySelector(".mainbutton");
    if (mainButton) {
        mainButton.style.display = "none";
    }
}

searchInput.addEventListener("focus", function () {
    currentPage = 1;
});