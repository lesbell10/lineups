window.onload = function () {
    yearSelector.selectedIndex = 0;
    loadFromLocalStorage();
};

// Function to create an object with image sources and paragraph texts
function getData() {
    const data = {
        selectedYear: selectedYear,
        images: {},
        paragraphs: {}
    };

    // Assuming STC2, FR2, etc. are your image elements and STC, FR, etc. are your paragraph elements
    const elements = [PG, PG2, SG, SG2, SF, SF2, PF, PF2, C, C2];
    elements.forEach(element => {
        if (element.tagName === 'IMG') {
            data.images[element.id] = element.src;
        } else if (element.tagName === 'P') {
            data.paragraphs[element.id] = element.textContent;
        }
    });

    return data;
}

// Function to save data to localStorage
function saveToLocalStorage() {
    const data = getData();
    localStorage.setItem('footballAppData', JSON.stringify(data));
}

// Function to load data from localStorage
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('footballAppData');
    if (savedData) {
        const data = JSON.parse(savedData);
        selectedYear = data.selectedYear; // Update selectedYear
        yearSelector.value = data.selectedYear;

        // Update images and paragraphs
        Object.keys(data.images).forEach(id => {
            const element = document.getElementById(id);
            if (element) element.src = data.images[id];
        });
        Object.keys(data.paragraphs).forEach(id => {
            const element = document.getElementById(id);
            if (element) element.textContent = data.paragraphs[id];
        });

        updatePlayerInfo(); // Update UI based on loaded data
    }
}

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
    saveToLocalStorage();
});