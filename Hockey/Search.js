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

// Load data from both files and merge themnhart
Promise.all([
    loadJSON('/Hockey/EveryYear/json/EveryYear_2004.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2005.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2006.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2007.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2008.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2009.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2010.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2011.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2012.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2013.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2014.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2015.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2016.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2017.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2018.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2019.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2020.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2021.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2022.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2023.json'),
    loadJSON('/Hockey/EveryYear/json/EveryYear_2024.json'),
    loadJSON('/Hockey/Others.json'),
    loadJSON('/Hockey/Present/Present.json'),
    loadJSON('/Hockey/Past/Past.json'),
    loadJSON('/Hockey/Present/Eastern/json/Boston.json'),
    loadJSON('/Hockey/Present/Eastern/json/Buffalo.json'),
    loadJSON('/Hockey/Present/Eastern/json/Carolina.json'),
    loadJSON('/Hockey/Present/Eastern/json/Columbus.json'),
    loadJSON('/Hockey/Present/Eastern/json/Detroit.json'),
    loadJSON('/Hockey/Present/Eastern/json/Florida.json'),
    loadJSON('/Hockey/Present/Eastern/json/Montreal.json'),
    loadJSON('/Hockey/Present/Eastern/json/New Jersey.json'),
    loadJSON('/Hockey/Present/Eastern/json/NY Islanders.json'),
    loadJSON('/Hockey/Present/Eastern/json/NY Rangers.json'),
    loadJSON('/Hockey/Present/Eastern/json/Ottawa.json'),
    loadJSON('/Hockey/Present/Eastern/json/Philadelphia.json'),
    loadJSON('/Hockey/Present/Eastern/json/Pittsburgh.json'),
    loadJSON('/Hockey/Present/Eastern/json/Tampa Bay.json'),
    loadJSON('/Hockey/Present/Eastern/json/Toronto.json'),
    loadJSON('/Hockey/Present/Eastern/json/Washington.json'),
    loadJSON('/Hockey/Present/Western/json/Anaheim.json'),
    loadJSON('/Hockey/Present/Western/json/Arizona.json'),
    loadJSON('/Hockey/Present/Western/json/Calgary.json'),
    loadJSON('/Hockey/Present/Western/json/Chicago.json'),
    loadJSON('/Hockey/Present/Western/json/Colorado.json'),
    loadJSON('/Hockey/Present/Western/json/Dallas.json'),
    loadJSON('/Hockey/Present/Western/json/Edmonton.json'),
    loadJSON('/Hockey/Present/Western/json/Los Angeles.json'),
    loadJSON('/Hockey/Present/Western/json/Minnesota.json'),
    loadJSON('/Hockey/Present/Western/json/Nashville.json'),
    loadJSON('/Hockey/Present/Western/json/San Jose.json'),
    loadJSON('/Hockey/Present/Western/json/Seattle.json'),
    loadJSON('/Hockey/Present/Western/json/St Louis.json'),
    loadJSON('/Hockey/Present/Western/json/Vancouver.json'),
    loadJSON('/Hockey/Present/Western/json/Vegas.json'),
    loadJSON('/Hockey/Present/Western/json/Winnipeg.json'),
    loadJSON('/Hockey/Present/Nations/json/Canada.json'),
    loadJSON('/Hockey/Present/Nations/json/Czech Republic.json'),
    loadJSON('/Hockey/Present/Nations/json/Finland.json'),
    loadJSON('/Hockey/Present/Nations/json/Germany.json'),
    loadJSON('/Hockey/Present/Nations/json/Russia.json'),
    loadJSON('/Hockey/Present/Nations/json/Slovakia.json'),
    loadJSON('/Hockey/Present/Nations/json/Sweden.json'),
    loadJSON('/Hockey/Present/Nations/json/Switzerland.json'),
    loadJSON('/Hockey/Present/Nations/json/United States.json'),
    loadJSON('/Hockey/Past/Eastern/json/Boston.json'),
    loadJSON('/Hockey/Past/Eastern/json/Buffalo.json'),
    loadJSON('/Hockey/Past/Eastern/json/Carolina.json'),
    loadJSON('/Hockey/Past/Eastern/json/Columbus.json'),
    loadJSON('/Hockey/Past/Eastern/json/Detroit.json'),
    loadJSON('/Hockey/Past/Eastern/json/Florida.json'),
    loadJSON('/Hockey/Past/Eastern/json/Montreal.json'),
    loadJSON('/Hockey/Past/Eastern/json/New Jersey.json'),
    loadJSON('/Hockey/Past/Eastern/json/NY Islanders.json'),
    loadJSON('/Hockey/Past/Eastern/json/NY Rangers.json'),
    loadJSON('/Hockey/Past/Eastern/json/Ottawa.json'),
    loadJSON('/Hockey/Past/Eastern/json/Philadelphia.json'),
    loadJSON('/Hockey/Past/Eastern/json/Pittsburgh.json'),
    loadJSON('/Hockey/Past/Eastern/json/Tampa Bay.json'),
    loadJSON('/Hockey/Past/Eastern/json/Toronto.json'),
    loadJSON('/Hockey/Past/Eastern/json/Washington.json'),
    loadJSON('/Hockey/Past/Western/json/Anaheim.json'),
    loadJSON('/Hockey/Past/Western/json/Arizona.json'),
    loadJSON('/Hockey/Past/Western/json/Calgary.json'),
    loadJSON('/Hockey/Past/Western/json/Chicago.json'),
    loadJSON('/Hockey/Past/Western/json/Colorado.json'),
    loadJSON('/Hockey/Past/Western/json/Dallas.json'),
    loadJSON('/Hockey/Past/Western/json/Edmonton.json'),
    loadJSON('/Hockey/Past/Western/json/Los Angeles.json'),
    loadJSON('/Hockey/Past/Western/json/Minnesota.json'),
    loadJSON('/Hockey/Past/Western/json/Nashville.json'),
    loadJSON('/Hockey/Past/Western/json/San Jose.json'),
    loadJSON('/Hockey/Past/Western/json/St Louis.json'),
    loadJSON('/Hockey/Past/Western/json/Vancouver.json'),
    loadJSON('/Hockey/Past/Western/json/Vegas.json'),
    loadJSON('/Hockey/Past/Western/json/Winnipeg.json'),
    loadJSON('/Hockey/Past/Nations/json/Canada.json'),
    loadJSON('/Hockey/Past/Nations/json/Czech Republic.json'),
    loadJSON('/Hockey/Past/Nations/json/Finland.json'),
    loadJSON('/Hockey/Past/Nations/json/Germany.json'),
    loadJSON('/Hockey/Past/Nations/json/Russia.json'),
    loadJSON('/Hockey/Past/Nations/json/Slovakia.json'),
    loadJSON('/Hockey/Past/Nations/json/Sweden.json'),
    loadJSON('/Hockey/Past/Nations/json/Switzerland.json'),
    loadJSON('/Hockey/Past/Nations/json/United States.json'),

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
        if (!includeRetired && player.team == "Retired") {
            return;
        }

        Object.entries(player).forEach(([key, value]) => {
            // Exclude 'description' from the filtering criteria
            if (key === 'description') {
                return;
            }

            if (typeof value === 'string' && value.toLowerCase().includes(normalizedQuery)) {
                const uniqueKey = `${player.last_name}`;
                if (!uniquePlayers.has(uniqueKey)) {
                    uniquePlayers.set(uniqueKey, player);
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
        const uniqueKey = `${player.last_name}`;
        if (!unique.some(u => `${u.last_name}` === uniqueKey)) {
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
  <div class="line">----------------------------</div>
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
    // Scroll to the top of the page
    window.scrollTo(0, 0);
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
const activeButton = document.getElementById("retiredFilter");
const coaches = document.querySelector(".coach")

// Event listener for the search button
searchButton.addEventListener("click", function () {
    coaches.style.display = "none"
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
    coaches.style.display = "none"
    includeRetired = true
    hideSomeThings();

    const query = searchInput.value;
    searchPlayers(query, includeRetired);

    activeButton.style.backgroundColor = "red"

    activeLabel.style.display = 'block'
    activeButton.style.display = "block"
});

activeButton.addEventListener("click", function () {
    const backgroundColor = activeButton.style.backgroundColor;

    if (backgroundColor === "red" || backgroundColor === "") {
        includeRetired = false;
    } else {
        includeRetired = true;
    }

    const query = searchInput.value;
    searchPlayers(query, includeRetired);

    // Toggle the button color
    activeButton.style.backgroundColor = includeRetired ? "red" : "green";
});


function hideSomeThings() {
    const mainButton = document.querySelector(".mainbutton");
    if (mainButton) {
        mainButton.style.display = "none";
    }
}

searchInput.addEventListener("focus", function () {
    currentPage = 1;
});