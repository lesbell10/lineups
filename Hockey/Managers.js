let managersData; // Define a variable to store the managers data.

fetch('/hockey/managers.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(managers => {
        managersData = managers; // Store the managers data in the variable.
        console.log(managers);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

function showManagerInfo(managerId) {
    // Use the managersData variable to access the managers data.
    const manager = managersData.find(m => m.id === managerId);

    if (manager) {
        clearPageContentExceptNav();
        hideSomeThings();
        coach.textContent = ""
        document.querySelector("body").style.background = "grey";
        document.getElementById('desc').innerHTML =
            `<style>
                img {
                    display: block;
                    margin-bottom: 10px;
                }
            </style>
            <div class="bubble">
                <h6>${manager.full_name}</h6>
                <div class="player-info">
                    <img src="${manager.img}"/> 
                    <p style="animation: none;">${manager.description}</p>
                    <div class="line">------------------------------</div>
                    <p style="animation: none;">Team: ${manager.team}</p>
                    <p style="animation: none;">Nationality: ${manager.nationality}</p>
                    <p style="animation: none;">Position: ${manager.position}</p>                      
                </div>
            </div>`;
    }
}
