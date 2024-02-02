window.onload = function () {
    yearSelector.selectedIndex = 0;
    loadSelectedYearFromLocalStorage();
};


// Function to save the selected year to localStorage
function saveSelectedYearToLocalStorage(selectedYear) {
    localStorage.setItem('selectedYear', selectedYear);
}

// Function to load the selected year from localStorage
function loadSelectedYearFromLocalStorage() {
    const savedYear = localStorage.getItem('selectedYear');
    if (savedYear) {
        selectedYear = savedYear; // Update the selectedYear variable
        yearSelector.value = savedYear; // Update the yearSelector if needed
        // You can also trigger any necessary updates in your UI here
    }
}
yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
    saveSelectedYearToLocalStorage(selectedYear);
});

// Define a function to clear local storage
const clearLocalStorage = () => {
    localStorage.clear();
    console.log('localStorage cleared after 2 hours.');
};

// Set a timeout to call the clearLocalStorage function after 2 hours (2 hours * 60 minutes per hour * 60 seconds per minute * 1000 milliseconds per second)
const timeoutInMilliseconds = 2 * 60 * 60 * 1000; // 2 hours
setTimeout(clearLocalStorage, timeoutInMilliseconds);
