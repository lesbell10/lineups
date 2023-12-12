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
        FL.textContent = "Crosby";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/crosbsi01-2020.jpg";
        FC.textContent = "McDavid";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mcdavco01-2020.jpg";
        FR.textContent = "Toews";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/toewsjo01-2020.jpg";
        DL.textContent = "Keith";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/keithdu01-2020.jpg";
        DR.textContent = "Weber";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/webersh01-2020.jpg";
        G.textContent = "Price";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/priceca01-2020.jpg";
        document.getElementById("smallpic").src = "https://cdn.countryflags.com/thumbs/canada/flag-button-round-250.png";
    }

  if (selectedYear === "1") {
    FL.textContent = "Voracek";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/voracja01-2020.jpg";
    FC.textContent = "Krejci";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/krejcda01-2020.jpg";
    FR.textContent = "Pastrnak";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pastrda01-2020.jpg";
    DL.textContent = "Gudas";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gudasra01-2020.jpg";
    DR.textContent = "Kempny";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kempnmi01-2020.jpg";
    G.textContent = "Mrazek";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mrazepe01-2020.jpg";
    document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18718/240.png";
}

    
    if (selectedYear === "2") {
    FL.textContent = "Laine";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lainepa01-2020.jpg";
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


    if (selectedYear === "3") { 
    FL.textContent = "Rieder";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/riedeto01-2020.jpg";
    FC.textContent = "Draisaitl";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/draisle01-2020.jpg";
    FR.textContent = "Goc";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gocma01-2015.jpg";
    DL.textContent = "Ehrhoff";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ehrhoch01-2015.jpg";
    DR.textContent = "Seidenberg";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/seidede01-2017.jpg";
    G.textContent = "Grubauer";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/grubaph01-2020.jpg";
    document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18660/240.png";
}

    
     if (selectedYear === "4") { 
        FL.textContent = "Ovechkin";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ovechal01-2020.jpg";
        FC.textContent = "Malkin";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/malkiev01-2020.jpg";
        FR.textContent = "Kucherov";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kucheni01-2020.jpg";
        DL.textContent = "Markov";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/markoan01-2015.jpg";
        DR.textContent = "Gonchar";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gonchse01-2015.jpg";
        G.textContent = "Vasilevskiy";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/vasilan02-2020.jpg";
        document.getElementById("smallpic").src = "https://static.vecteezy.com/system/resources/previews/022/110/120/original/russia-flag-round-shape-png.png";
    }

    if (selectedYear === "5") {
     FL.textContent = "Hossa";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hossama01-2017.jpg";
    FC.textContent = "Gaborik";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gaborma01-2017.jpg";
    FR.textContent = "Tatar";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tatarto01-2020.jpg";
    DL.textContent = "Chara";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/charazd01-2020.jpg";
    DR.textContent = "Sekera";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sekeran01-2020.jpg";
    G.textContent = "Halak";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/halakja01-2020.jpg";
    document.getElementById("smallpic").src = "https://cdn-icons-png.flaticon.com/512/197/197592.png";
}


    if (selectedYear === "6") {
    FL.textContent = "D Sedin";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sedinda01-2017.jpg";
        FC.textContent = "H Sedin";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sedinhe01-2017.jpg";
        FR.textContent = "Backstrom";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/backsni02-2020.jpg";
        DL.textContent = "E Karlsson";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/karlser01-2020.jpg";
        DR.textContent = "Hedman";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hedmavi01-2020.jpg";
        G.textContent = "Lundqvist";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lundqhe01-2020.jpg";
        document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18564/240.png";
    }
    
    if (selectedYear === "7") {
    FL.textContent = "Fiala";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/fialake01-2020.jpg";
    FC.textContent = "Niederreiter";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/niedeni01-2020.jpg";
    FR.textContent = "Meier";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/meierti01-2020.jpg";
    DL.textContent = "Josi";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/josiro01-2020.jpg";
    DR.textContent = "Streit";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/streima01-2017.jpg";
    G.textContent = "Hiller";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hillejo01-2015.jpg";
    document.getElementById("smallpic").src = "Properties.Resources.switzerland"; // Adjust this if you're not using a local resource.
}


   if (selectedYear === "8") {
     FL.textContent = "Kessel";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kesseph01-2020.jpg";
        FC.textContent = "Matthews";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/matthau01-2020.jpg";
        FR.textContent = "Kane";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kanepa01-2020.jpg";
        DL.textContent = "Suter";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/suterry01-2020.jpg";
        DR.textContent = "Carlson";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/carlsjo01-2020.jpg";
        G.textContent = "Quick";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/quickjo01-2020.jpg";
        document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18571/240.png";
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
        FL.textContent = "Crosby";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/crosbsi01-2020.jpg";
        FC.textContent = "McDavid";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mcdavco01-2020.jpg";
        FR.textContent = "Toews";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/toewsjo01-2020.jpg";
        DL.textContent = "Keith";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/keithdu01-2020.jpg";
        DR.textContent = "Weber";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/webersh01-2020.jpg";
        G.textContent = "Price";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/priceca01-2020.jpg";
        document.getElementById("smallpic").src = "https://cdn.countryflags.com/thumbs/canada/flag-button-round-250.png";
    }

  if (selectedYear === 1) {
    FL.textContent = "Voracek";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/voracja01-2020.jpg";
    FC.textContent = "Krejci";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/krejcda01-2020.jpg";
    FR.textContent = "Pastrnak";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pastrda01-2020.jpg";
    DL.textContent = "Gudas";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gudasra01-2020.jpg";
    DR.textContent = "Kempny";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kempnmi01-2020.jpg";
    G.textContent = "Mrazek";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mrazepe01-2020.jpg";
    document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18718/240.png";
}

    
    if (selectedYear === 2) {
    FL.textContent = "Laine";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lainepa01-2020.jpg";
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
    FL.textContent = "Rieder";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/riedeto01-2020.jpg";
    FC.textContent = "Draisaitl";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/draisle01-2020.jpg";
    FR.textContent = "Goc";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gocma01-2015.jpg";
    DL.textContent = "Ehrhoff";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ehrhoch01-2015.jpg";
    DR.textContent = "Seidenberg";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/seidede01-2017.jpg";
    G.textContent = "Grubauer";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/grubaph01-2020.jpg";
    document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18660/240.png";
}

    
     if (selectedYear === 4) { 
        FL.textContent = "Ovechkin";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ovechal01-2020.jpg";
        FC.textContent = "Malkin";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/malkiev01-2020.jpg";
        FR.textContent = "Kucherov";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kucheni01-2020.jpg";
        DL.textContent = "Markov";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/markoan01-2015.jpg";
        DR.textContent = "Gonchar";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gonchse01-2015.jpg";
        G.textContent = "Vasilevskiy";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/vasilan02-2020.jpg";
        document.getElementById("smallpic").src = "https://static.vecteezy.com/system/resources/previews/022/110/120/original/russia-flag-round-shape-png.png";
    }

    if (selectedYear === 5) {
     FL.textContent = "Hossa";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hossama01-2017.jpg";
    FC.textContent = "Gaborik";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gaborma01-2017.jpg";
    FR.textContent = "Tatar";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tatarto01-2020.jpg";
    DL.textContent = "Chara";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/charazd01-2020.jpg";
    DR.textContent = "Sekera";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sekeran01-2020.jpg";
    G.textContent = "Halak";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/halakja01-2020.jpg";
    document.getElementById("smallpic").src = "https://cdn-icons-png.flaticon.com/512/197/197592.png";
}


    if (selectedYear === 6) {
    FL.textContent = "D Sedin";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sedinda01-2017.jpg";
        FC.textContent = "H Sedin";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sedinhe01-2017.jpg";
        FR.textContent = "Backstrom";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/backsni02-2020.jpg";
        DL.textContent = "Karlsson";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/karlser01-2020.jpg";
        DR.textContent = "Hedman";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hedmavi01-2020.jpg";
        G.textContent = "Lundqvist";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lundqhe01-2020.jpg";
        document.getElementById("smallpic").src = "https://cdn.sofifa.net/meta/team/18564/240.png";
    }
    
    if (selectedYear === 7) {
    FL.textContent = "Fiala";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/fialake01-2020.jpg";
    FC.textContent = "Niederreiter";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/niedeni01-2020.jpg";
    FR.textContent = "Meier";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/meierti01-2020.jpg";
    DL.textContent = "Josi";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/josiro01-2020.jpg";
    DR.textContent = "Streit";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/streima01-2017.jpg";
    G.textContent = "Hiller";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hillejo01-2015.jpg";
    document.getElementById("smallpic").src = "Properties.Resources.switzerland"; // Adjust this if you're not using a local resource.
}


   if (selectedYear === 8) {
     FL.textContent = "Kessel";
        FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kesseph01-2020.jpg";
        FC.textContent = "Matthews";
        FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/matthau01-2020.jpg";
        FR.textContent = "Kane";
        FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kanepa01-2020.jpg";
        DL.textContent = "Suter";
        DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/suterry01-2020.jpg";
        DR.textContent = "Carlson";
        DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/carlsjo01-2020.jpg";
        G.textContent = "Quick";
        G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/quickjo01-2020.jpg";
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