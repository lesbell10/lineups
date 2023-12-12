const yearSelector = document.getElementById("yearSelector");
const SG = document.getElementById("SG");
const SG2 = document.getElementById("SG2");
const PG = document.getElementById("PG");
const PG2 = document.getElementById("PG2");
const SF = document.getElementById("SF");
const SF2 = document.getElementById("SF2");
const PF = document.getElementById("PF");
const PF2 = document.getElementById("PF2");
const C = document.getElementById("C");
const C2 = document.getElementById("C2");
const smallpic = document.getElementById("smallpic");

let selectedYear = 0

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear === "0") {

        PG.textContent = "L Doncic";
        SG.textContent = "J Kidd";
        SF.textContent = "M Ellis";
        PF.textContent = "D Nowitzki";
        C.textContent = "T Chandler";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "1") {

        PG.textContent = "T Lawson";
        SG.textContent = "J Murray";
        SF.textContent = "C Anthony";
        PF.textContent = "K Faried";
        C.textContent = "N Jokic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "2") {

        PG.textContent = "S Curry";
        SG.textContent = "K Thompson";
        SF.textContent = "A Iguodala";
        PF.textContent = "K Durant";
        C.textContent = "D Green";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "3") {

        PG.textContent = "C Paul";
        SG.textContent = "J Harden";
        SF.textContent = "R Westbrook";
        PF.textContent = "C Capela";
        C.textContent = "D Howard";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "4") {

        PG.textContent = "C Paul";
        SG.textContent = "P George";
        SF.textContent = "K Leonard";
        PF.textContent = "B Griffin";
        C.textContent = "D Jordan";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "5") {

        PG.textContent = "K Bryant";
        SG.textContent = "L James";
        SF.textContent = "R Artest III";
        PF.textContent = "D Howard";
        C.textContent = "P Gasol";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "6") {

        PG.textContent = "M Conley";
        SG.textContent = "T Allen";
        SF.textContent = "R Gay";
        PF.textContent = "Z Randolph";
        C.textContent = "M Gasol";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "7") {

        PG.textContent = "R Rubio";
        SG.textContent = "A Wiggins";
        SF.textContent = "J Butler";
        PF.textContent = "K Love";
        C.textContent = "KA Towns";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "8") {

        PG.textContent = "C Paul";
        SG.textContent = "J Holiday";
        SF.textContent = "Z Williamson";
        PF.textContent = "A Davis";
        C.textContent = "D Cousins";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "9") {

        PG.textContent = "R Westbrook";
        SG.textContent = "J Harden";
        SF.textContent = "P George";
        PF.textContent = "K Durant";
        C.textContent = "S Ibaka";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "10") {

        PG.textContent = "S Nash";
        SG.textContent = "C Paul";
        SF.textContent = "G Dragic";
        PF.textContent = "A Stoudemire";
        C.textContent = "D Ayton";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "11") {

        PG.textContent = "D Lillard";
        SG.textContent = "CJ McCollum";
        SF.textContent = "N Batum";
        PF.textContent = "L Aldridge";
        C.textContent = "J Nurkic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "12") {

        PG.textContent = "I Thomas";
        SG.textContent = "T Evans";
        SF.textContent = "B Hield"
        PF.textContent = "R Gay";
        C.textContent = "D Cousins";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "13") {

        PG.textContent = "T Parker";
        SG.textContent = "M Ginobili";
        SF.textContent = "K Leonard";
        PF.textContent = "T Duncan";
        C.textContent = "L Aldridge";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
    
    if (selectedYear === "14") {

        PG.textContent = "D Williams";
        SG.textContent = "D Mitchell";
        SF.textContent = "G Hayward";
        PF.textContent = "A Jefferson";
        C.textContent = "R Gobert";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
}

    function clearAndFadeInElements() {
        const elements = [
            SG,SG2,PG,PG2,SF,SF2,PF,PF2,C,C2
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


// Listen for changes in the year selection
yearSelector.addEventListener("change", updatePlayerInfo);

// Initial update based on the default year (2020)
updatePlayerInfo();


    const backButton = document.getElementById('backButton');
    const forwardButton = document.getElementById('forwardButton');
    
// Initialize the current index to 0
    
    // let currentIndex = 0;
    
// Function to update the dropdown based on the currentIndex
    
const updateDropdown = () => {

    if (selectedYear === 0) {
        SG.textContent = "Doncic";
        SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png";
        PG.textContent = "Kidd";
        PG2.src = "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/429.png&w=350&h=254";
        SF.textContent = "Ellis";
        SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/101145.png";
        PF.textContent = "Nowitzki";
        PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1717.png";
        C.textContent = "Porzingis";
        C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/204001.png";
        document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/228/full/3463_dallas_mavericks-primary-2018.png";
    }

    if (selectedYear === 1) {
        SG.textContent = "J Murray";
        SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1627750.png";
        PG.textContent = "Billups";
        PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1497.png";
        SF.textContent = "C Anthony";
        SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2546.png";
        PF.textContent = "Millsap";
        PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/200794.png";
        C.textContent = "Jokic";
        C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png";
        document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/229/full/8926_denver_nuggets-primary-2019.png";
    }

    if (selectedYear === 2) {
        SG.textContent = "Thompson";
        SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202691.png";
        PG.textContent = "Curry";
        PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png";
        SF.textContent = "Durant";
        SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png";
        PF.textContent = "D Green";
        PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png";
        C.textContent = "Cousins";
        C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202326.png";
        document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/235/full/3152_golden_state_warriors-primary-2020.png";
    }

    if (selectedYear === 3) { 
        SG.textContent = "Harden";
        SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png";
        PG.textContent = "Paul";
        PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/101108.png";
        SF.textContent = "Westbrook";
        SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png";
        PF.textContent = "Howard";
        PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2730.png";
        C.textContent = "Y Ming";
        C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2397.png";
        document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/230/full/6830_houston_rockets-primary-2020.png";
    }

    if (selectedYear === 4) {
        SG.textContent = "George";
        SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202331.png";
        PG.textContent = "Paul";
        PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/101108.png";
        SF.textContent = "Leonard";
        SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png";
        PF.textContent = "Griffin";
        PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201933.png";
        C.textContent = "Jordan";
        C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201599.png";
        document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/236/full/los_angeles_clippers_logo_primary_2019_sportslogosnet-3776.png";
    }

    if (selectedYear === 5) {
        SG.textContent = "Bryant";
        SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/977.png";
        PG.textContent = "Nash";
        PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/959.png";
        SF.textContent = "James";
        SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png";
        PF.textContent = "Davis";
        PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png";
        C.textContent = "Howard";
        C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2730.png";
        document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/237/full/los_angeles_lakers_logo_primary_2024_sportslogosnet-7324.png";
    }

    if (selectedYear === 6) {
        SG.textContent = "T Allen";
        SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2754.png";
        PG.textContent = "Conley";
        PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201144.png";
        SF.textContent = "R Gay";
        SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/200752.png";
        PF.textContent = "Randolph";
        PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2216.png";
        C.textContent = "M Gasol";
        C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201188.png";
        document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/231/full/4373_memphis_grizzlies-primary-2019.png";
    }

    if (selectedYear === 7) {
        SG.textContent = "LaVine";
        SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203897.png";
        PG.textContent = "Rubio";
        PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201937.png";
        SF.textContent = "Wiggins";
        SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203952.png";
        PF.textContent = "K Love";
        PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201567.png";
        C.textContent = "K-A Towns";
        C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1626157.png";
        document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/232/full/9669_minnesota_timberwolves-primary-2018.png";
    }

    if (selectedYear === 8) {
        SG.textContent = "J Holiday";
        SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201950.png";
        PG.textContent = "Paul";
        PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/101108.png";
        SF.textContent = "Williamson";
        SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1629627.png";
        PF.textContent = "Davis";
        PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png";
        C.textContent = "Cousins";
        C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202326.png";
        document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/4962/full/new_orleans_pelicans_logo_primary_2024_sportslogosnet-9292.png";
    }

    if (selectedYear === 9) {
        SG.textContent = "Westbrook";
        SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png";
        PG.textContent = "Paul";
        PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/101108.png";
        SF.textContent = "Harden";
        SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png";
        PF.textContent = "George";
        PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202331.png";
        C.textContent = "Durant";
        C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png";
        document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/2687/full/khmovcnezy06c3nm05ccn0oj2.png";
    }

    if (selectedYear === 10) {
    SG.textContent = "Paul";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/101108.png";
    PG.textContent = "Nash";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/959.png";
    SF.textContent = "Booker";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png";
    PF.textContent = "Bledsoe";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202339.png";
    C.textContent = "Stoudemire";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2405.png";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/238/full/phoenix_suns_logo_primary_20143696.png";
}

if (selectedYear === 11) {
    SG.textContent = "CJ McCollum";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203468.png";
    PG.textContent = "Lillard";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png";
    SF.textContent = "B Roy";
    SF2.src = "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3027.png&w=350&h=254";
    PF.textContent = "Aldridge";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/200746.png";
    C.textContent = "Nurkic";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203994.png";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/239/full/9725_portland_trail_blazers-primary-2018.png";
}

    if (selectedYear === 12) { 
    SG.textContent = "T Evans";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201936.png";
    PG.textContent = "D Fox";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1628368.png";
    SF.textContent = "Webber";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/185.png";
    PF.textContent = "Randolph";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2216.png";
    C.textContent = "Cousins";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202326.png";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/240/full/4043_sacramento_kings-primary-2017.png";
}

if (selectedYear === 13) {
    SG.textContent = "Ginobili";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1938.png";
    PG.textContent = "T Parker";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2225.png";
    SF.textContent = "Leonard";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png";
    PF.textContent = "DeRozan";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201942.png";
    C.textContent = "Duncan";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1495.png";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/233/full/2547_san_antonio_spurs-primary-2018.png";
}

if (selectedYear === 14) {
    SG.textContent = "D Williams";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/101114.png";
    PG.textContent = "Mitchell";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1628378.png";
    SF.textContent = "J Johnson";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2207.png";
    PF.textContent = "K-A Towns";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1626157.png";
    C.textContent = "Gobert";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203497.png";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/234/full/utah_jazz_logo_primary_2023_sportslogosnet-8513.png";
}
  


    function clearAndFadeInElements() {
        const elements = [
            SG,SG2,PG,PG2,SF,SF2,PF,PF2,C,C2
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
    });

        const nav = document.querySelector("nav");
        const backBtn = document.querySelector("#backButton")
        const forBtn = document.querySelector("#forwardButton")
        const search = document.querySelector(".search-container");

        PG2.addEventListener('click', function () {
            nav.style.display = "none";
            backBtn.style.display = "none";
            forBtn.style.display = "none";
            search.style.display = "none";
        })
            
        SG2.addEventListener('click', function () {
            nav.style.display = "flex";
            backBtn.style.display = "block";
            forBtn.style.display = "block";
            search.style.display = "block";
        })