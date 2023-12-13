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

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "https://cdn.countryflags.com/thumbs/canada/flag-button-round-250.png";
    }

    if (selectedYear === "1") {

        FL.textContent = "Necas";
        FC.textContent = "Hertl";
        FR.textContent = "Pastrnak";
        DL.textContent = "Rutta";
        DR.textContent = "Simek";
        G.textContent = "Vanecek";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "https://cdn.sofifa.net/meta/team/18718/240.png";
    }

    if (selectedYear === "2") {

        FL.textContent = "Hintz";
        FC.textContent = "Barkov";
        FR.textContent = "Rantanen";
        DL.textContent = "Heiskanen";
        DR.textContent = "Lindell";
        G.textContent = "Saros";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";
            
        smallpic.src = "https://cdn.sofifa.net/meta/team/18570/240.png";
    } 
    
    if (selectedYear === "3") {

        FL.textContent = "Stutzle";
        FC.textContent = "Draisaitl";
        FR.textContent = "Sturm";
        DL.textContent = "Seider";
        DR.textContent = "Gawanke";
        G.textContent = "Grubauer";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "https://cdn.sofifa.net/meta/team/18660/240.png";
    }

    if (selectedYear === "4") {

    FL.textContent = "Ovechkin";
    FC.textContent = "Kucherov";
    FR.textContent = "Panarin";
    DL.textContent = "Provorov";
    DR.textContent = "Sergachev";
    G.textContent = "Vasilevskiy";
        
    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "https://cdn.countryflags.com/thumbs/russia/flag-button-round-250.png";
} 

    if (selectedYear === "5") {
        
        FL.textContent = "Tatar";
        FC.textContent = "Ruzicka";
        FR.textContent = "Slafkovsky";
        DL.textContent = "Fehervary";
        DR.textContent = "Cernak";
        G.textContent = "Halak";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";
        
        smallpic.src = "https://cdn.sofifa.net/meta/team/18694/240.png";
    }
    
    if (selectedYear === "6") {

        FL.textContent = "Pettersson";
        FC.textContent = "Zibanejad";
        FR.textContent = "E Lindholm";
        DL.textContent = "Hedman";
        DR.textContent = "E Karlsson";
        G.textContent = "Ullmark";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";
            
        smallpic.src = "https://cdn.sofifa.net/meta/team/18564/240.png";
    }
    
    if (selectedYear === "7") {
        FL.textContent = "Meier";
        FC.textContent = "Hischier";
        FR.textContent = "Fiala";
        DL.textContent = "Josi";
        DR.textContent = "Siegenthaler";
        G.textContent = "Genoni";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "https://cdn.countryflags.com/thumbs/switzerland/flag-400.png";

        G2.style.width = '120px';
        G2.style.objectFit = "cover";
    }
    
    if (selectedYear === "8") {
    FL.textContent = "J. Robertson";
    FC.textContent = "Matthews";
    FR.textContent = "M Tkachuk";
    DL.textContent = "Fox";
    DR.textContent = "McAvoy";
        
    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "https://cdn.sofifa.net/meta/team/18571/240.png";
}
    
    function clearAndFadeInElements() {
            const elements = [
                FL,FL2,FC,FC2,FR,FR2,DL,DL2,DR,DR2,G,G2,
            ];
        
            document.getElementById("smallpic").classList.add("fade-in")

            for (const element of elements) {
                element.classList.add("fade-in");
            }

            // Remove the "fade-in" class after the animation is complete
            setTimeout(function () {
                for (const element of elements) {
                    element.classList.remove("fade-in");
                }
                document.getElementById("smallpic").classList.remove("fade-in")
            }, 500); // Adjust the timeout value based on your animation duration
        }
        clearAndFadeInElements();
    }

    // Listen for changes in the year selection
    yearSelector.addEventListener("change", updatePlayerInfo);

    // Initial update based on the default year (2020)
    updatePlayerInfo();


    const backButton = document.getElementById('backButton');
    const forwardButton = document.getElementById('forwardButton');
    
    // Initialize the current index to 0
    let currentIndex = 0;
    
    // Function to update the dropdown based on the currentIndex
    const updateDropdown = () => {
    
       if (selectedYear === 0) {
        FL.textContent = "MacKinnon";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mackina01-2020.jpg";
        FC.textContent = "McDavid";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mcdavco01-2020.jpg";
        FR.textContent = "Crosby";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/crosbsi01-2020.jpg";
        DL.textContent = "Makar";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/makarca01-2020.jpg";
        DR.textContent = "Hamilton";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hamildo01-2020.jpg";
        G.textContent = "Jarry";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/jarrytr01-2020.jpg";

        document.getElementById("smallpic").src = "https://cdn.countryflags.com/thumbs/canada/flag-button-round-250.png";
    }

    if (selectedYear === 1) {
        FL.textContent = "Necas";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/necasma01-2020.jpg";
        FC.textContent = "Hertl";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hertlto01-2020.jpg";
        FR.textContent = "Pastrnak";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pastrda01-2020.jpg";
        DL.textContent = "Rutta";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ruttaja02-2020.jpg";
        DR.textContent = "Simek";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/simekra01-2020.jpg";
        G.textContent = "Vanecek";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/vanecvi01-2017.jpg";

        document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18718/240.png";
    }

    if (selectedYear === 2) {
    FL.textContent = "Hintz";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hintzro01-2020.jpg";
    FC.textContent = "Barkov";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/barkoal01-2020.jpg";
    FR.textContent = "Rantanen";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/rantami01-2020.jpg";
    DL.textContent = "Heiskanen";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/heiskmi01-2020.jpg";
    DR.textContent = "Lindell";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lindees01-2020.jpg";
    G.textContent = "Saros";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sarosju01-2020.jpg";

    document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18570/240.png";
    } 
    
    if (selectedYear === 3) {
        FL.textContent = "Stutzle";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/stuetti02-2021.jpg";
        FC.textContent = "Draisaitl";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/draisle01-2020.jpg";
        FR.textContent = "Sturm";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sturmni01-2020.jpg";
        DL.textContent = "Seider";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/seidemo01-2020.jpg";
        DR.textContent = "Gawanke";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gawanle01-2020.jpg";
        G.textContent = "Grubauer";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/grubaph01-2020.jpg";
        document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18660/240.png";
    }

    if (selectedYear === 4) {
    FL.textContent = "Ovechkin";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ovechal01-2020.jpg";
    FC.textContent = "Kucherov";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kucheni01-2020.jpg";
    FR.textContent = "Panarin";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/panarar01-2020.jpg";
    DL.textContent = "Provorov";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/provoiv01-2020.jpg";
    DR.textContent = "Sergachev";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sergami01-2020.jpg";
    G.textContent = "Vasilevskiy";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/vasilan02-2020.jpg";

    document.getElementById("smallpic").src = "https://cdn.countryflags.com/thumbs/russia/flag-button-round-250.png";
} 

    if (selectedYear === 5) {
        FL.textContent = "Tatar";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tatarto01-2020.jpg";
        FC.textContent = "Ruzicka";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ruzicad01-2020.jpg";
        FR.textContent = "Slafkovsky";
        FR2.src = "https://www.hockeydb.com/ihdb/photos/juraj-slafkovsky-2024-45.jpg";
        DL.textContent = "Fehervary";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/feherma01-2020.jpg";
        DR.textContent = "Cernak";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/cernaer01-2020.jpg";
        G.textContent = "Halak";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/halakja01-2020.jpg";
        document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18694/240.png";
        
        FR2.style.width = '120px';
        FR2.style.objectFit = "cover";
    }
    
    if (selectedYear === 6) {
    FL.textContent = "Pettersson";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/petteel01-2020.jpg";
    FC.textContent = "Zibanejad";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/zibanmi01-2020.jpg";
    FR.textContent = "E. Lindholm";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lindhel01-2020.jpg";
    DL.textContent = "Hedman";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hedmavi01-2020.jpg";
    DR.textContent = "Karlsson";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/karlser01-2020.jpg";
    G.textContent = "Ullmark";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ullmali01-2020.jpg";

    document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18564/240.png";
    }
    
    if (selectedYear === 7) {
        FL.textContent = "Meier";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/meierti01-2020.jpg";
        FC.textContent = "Hischier";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hischni01-2020.jpg";
        FR.textContent = "Fiala";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/fialake01-2020.jpg";
        DL.textContent = "Josi";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/josiro01-2020.jpg";
        DR.textContent = "Siegenthaler";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/siegejo01-2020.jpg";
        G.textContent = "Genoni";
        G2.src = "https://www.swissolympians.ch/images/Access/profile/906_Leonardo_Genoni.jpg";

        document.getElementById("smallpic").src = "https://cdn.countryflags.com/thumbs/switzerland/flag-400.png";
        document.getElementById("smallpic").style.borderRadius = "100%";
    }
    
    if (selectedYear === 8) {
    FL.textContent = "Robertson";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/roberja01-2020.jpg";
    FC.textContent = "Matthews";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/matthau01-2020.jpg";
    FR.textContent = "M Tkachuk";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tkachma01-2020.jpg";
    DL.textContent = "A Fox";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/foxad01-2020.jpg";
    DR.textContent = "McAvoy";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mcavoch01-2020.jpg";
    G.textContent = "Hellebuyck";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/helleco01-2020.jpg";

    document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18571/240.png";
}

         function clearAndFadeInElements() {
            const elements = [
                FL, FL2, FC, FC2, FR, FR2, DL, DL2, DR, DR2, G, G2,
            ];
        
            document.getElementById("smallpic").classList.add("fade-in")

            for (const element of elements) {
                element.classList.add("fade-in");
            }

            // Remove the "fade-in" class after the animation is complete
            setTimeout(function () {
                for (const element of elements) {
                    element.classList.remove("fade-in");
                }
                document.getElementById("smallpic").classList.remove("fade-in")
            }, 500); // Adjust the timeout value based on your animation duration
        }
        clearAndFadeInElements();
    
    }   // Event listener for the back button
    backButton.addEventListener('click', () => {
        if (selectedYear > 0) {
            selectedYear--;
            yearSelector.value = selectedYear;
            updateDropdown();
        }
    });
    
    // Event listener for the forward button
    forwardButton.addEventListener('click', () => {
        if (selectedYear < yearSelector.options.length - 1) {
            selectedYear++;
            yearSelector.value = selectedYear;
            updateDropdown();
        }
    })

    const nav = document.querySelector("nav");
    const backBtn = document.querySelector("#backButton")
    const forBtn = document.querySelector("#forwardButton")
    const search = document.querySelector(".search-container")

FC2.addEventListener('click', function () {
    nav.style.display = "none";
    backBtn.style.display = "none";
    forBtn.style.display = "none";
    search.style.display = "none";
})
    
FL2.addEventListener('click', function () {
    nav.style.display = "flex";
    backBtn.style.display = "block";
    forBtn.style.display = "block";
    search.style.display = "block";

})