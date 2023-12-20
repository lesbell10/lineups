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
const sideModal = document.querySelector(".side-modal")

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

        smallpic.src = "/basket/img/logos/dallas.gif";

        MainFetchPopUp("/basket/present/eastern/json/dallas.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Dallas Mavericks, founded in 1980, have established themselves as a notable NBA team. They achieved their greatest success by winning the NBA Championship in 2011, led by Dirk Nowitzki. Known for their innovative approach and loyal fanbase, the Mavericks are a key player in the Western Conference."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
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

        smallpic.src = "/basket/img/logos/denver.gif";

        MainFetchPopUp("/basket/present/eastern/json/denver.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "The Denver Nuggets, established in 1967 as the Denver Rockets in the ABA, joined the NBA in 1976. Known for their high-altitude advantage and fast-paced play, the Nuggets have had notable playoff runs and star players, they won a NBA championship lastly."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });
    }
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

    smallpic.src = "/basket/img/logos/golden state.gif";

    MainFetchPopUp("/basket/present/eastern/json/golden state.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The Golden State Warriors, founded in 1946, have a storied NBA history with multiple championships. Known for their revolutionary playing style and sharpshooting, epitomized by players like Stephen Curry, they've become synonymous with success and innovation in modern basketball."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
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

    smallpic.src = "/basket/img/logos/houston.gif";

    MainFetchPopUp("/basket/present/eastern/json/houston.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The Houston Rockets, established in 1967 and relocating from San Diego to Houston in 1971, have a rich NBA history. Known for their back-to-back championships in the mid-1990s with Hakeem Olajuwon, the Rockets have been a consistent playoff presence with a focus on innovative play."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
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

    smallpic.src = "/basket/img/logos/la clippers.gif";

    MainFetchPopUp("/basket/present/eastern/json/la clippers.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The Los Angeles Clippers, originally the Buffalo Braves in 1970, became the San Diego Clippers in 1978 before moving to Los Angeles in 1984. Historically overshadowed by the Lakers, the Clippers have recently emerged as a strong competitor with significant playoff appearances."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
}

if (selectedYear === "5") {

    PG.textContent = "K Bryant";
    SG.textContent = "L James";
    SF.textContent = "R Artest III";
    PF.textContent = "D Howard";
    C.textContent = "P Gasol";

    PG2.src = "/basket/img/players/" + PG.textContent + ".webp";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/la lakers.gif";

    MainFetchPopUp("/basket/present/eastern/json/la lakers.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The Los Angeles Lakers, with origins as the Minneapolis Lakers in 1947, are one of the NBA's most storied franchises. Relocating to Los Angeles in 1960, they've won multiple championships, featuring legends like Magic Johnson, Kobe Bryant, and LeBron James, symbolizing basketball excellence."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
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

    smallpic.src = "/basket/img/logos/memphis.gif";

    MainFetchPopUp("/basket/present/eastern/json/memphis.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The Memphis Grizzlies, originally established as the Vancouver Grizzlies in 1995 and relocating to Memphis in 2001, have carved out a reputation for gritty, defensive basketball. While a championship has eluded them, they've made notable playoff runs, steadily growing as a competitive force in the NBA."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
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

    smallpic.src = "/basket/img/logos/minnesota.gif";

    MainFetchPopUp("/basket/present/eastern/json/minnesota.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The Minnesota Timberwolves, established in 1989, have experienced a mix of challenges and successes in the NBA. While championship success has been elusive, the team has seen bright spots with players like Kevin Garnett, making several playoff appearances and continuously striving to build a competitive legacy."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
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

    smallpic.src = "/basket/img/logos/new orleans.gif";

    MainFetchPopUp("/basket/present/eastern/json/new orleans.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The New Orleans Pelicans, established in 2002 as the New Orleans Hornets and renamed in 2013, have been building their identity in the NBA.While a championship title remains a future goal, the Pelicans have showcased talent and resilience, notably with exciting playoff appearances."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
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

    smallpic.src = "/basket/img/logos/oklahoma city.gif";

    MainFetchPopUp("/basket/present/eastern/json/oklahoma city.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The Oklahoma City Thunder, originating as the Seattle SuperSonics in 1967 and relocating in 2008, have quickly established themselves as a formidable NBA team. Known for their strong draft selections and passionate fan base, they reached the NBA Finals in 2012, continually aiming for success."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
}

if (selectedYear === "10") {

    PG.textContent = "S Nash";
    SG.textContent = "C Paul";
    SF.textContent = "G Dragic";
    PF.textContent = "A Stoudemire";
    C.textContent = "D Ayton";

    PG2.src = "/basket/img/players/" + PG.textContent + ".webp";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/phoenix.gif";

    MainFetchPopUp("/basket/past/western/json/phoenix.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The Phoenix Suns, established in 1968, are one of the NBA's most consistent franchises, known for their uptempo style of play. Despite reaching the NBA Finals multiple times, a championship has eluded them. The Suns continue to be a competitive presence in the Western Conference."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
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

    smallpic.src = "/basket/img/logos/portland.gif";

    MainFetchPopUp("/basket/present/eastern/json/portland.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The Portland Trail Blazers, established in 1970, have a passionate fan base and a storied history, highlighted by their 1977 NBA Championship. Known for their strong home-court advantage and iconic players like Clyde Drexler and Damian Lillard, the Blazers remain a notable Western Conference team."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
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

    smallpic.src = "/basket/img/logos/sacramento.gif";

    MainFetchPopUp("/basket/present/eastern/json/sacramento.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The Sacramento Kings, with origins dating back to 1923 as the Rochester Seagrams and undergoing several relocations and name changes, settled in Sacramento in 1985. Despite a storied history, an NBA championship has eluded them, but they've had periods of strong performances and fan support."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
}

if (selectedYear === "13") {

    PG.textContent = "T Parker";
    SG.textContent = "M Ginobili";
    SF.textContent = "K Leonard";
    PF.textContent = "T Duncan";
    C.textContent = "L Aldridge";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".webp";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/san antonio.gif";

    MainFetchPopUp("/basket/present/eastern/json/san antonio.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The San Antonio Spurs, established in 1967 as the Dallas Chaparrals in the ABA and relocating to San Antonio in 1973, have a distinguished NBA history. Known for their consistent success and five championships, they're celebrated for their team-first culture and legendary coach Gregg Popovich."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
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

    smallpic.src = "/basket/img/logos/utah.gif";

    MainFetchPopUp("/basket/present/eastern/json/utah.json");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = "The Utah Jazz, originally founded as the New Orleans Jazz in 1974 and relocating to Utah in 1979, have been a consistent presence in the NBA. Known for their strong defensive play and team cohesion, the Jazz have had deep playoff runs but are still seeking their first championship."
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
}


function clearAndFadeInElements() {
    const elements = [
        SG, SG2, PG, PG2, SF, SF2, PF, PF2, C, C2
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

        smallpic.src = "/basket/img/logos/dallas.gif";

        MainFetchPopUp("/basket/present/eastern/json/dallas.json");
    }

    if (selectedYear === 1) {

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

        smallpic.src = "/basket/img/logos/denver.gif";

        MainFetchPopUp("/basket/present/eastern/json/denver.json");
    }

    if (selectedYear === 2) {

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

        smallpic.src = "/basket/img/logos/golden state.gif";

        MainFetchPopUp("/basket/present/eastern/json/golden state.json");
    }

    if (selectedYear === 3) {

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

        smallpic.src = "/basket/img/logos/houston.gif";

        MainFetchPopUp("/basket/present/eastern/json/houston.json");
    }

    if (selectedYear === 4) {

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

        smallpic.src = "/basket/img/logos/la clippers.gif";

        MainFetchPopUp("/basket/present/eastern/json/la clippers.json");
    }

    if (selectedYear === 5) {

        PG.textContent = "K Bryant";
        SG.textContent = "L James";
        SF.textContent = "R Artest III";
        PF.textContent = "D Howard";
        C.textContent = "P Gasol";

        PG2.src = "/basket/img/players/" + PG.textContent + ".webp";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/la lakers.gif";

        MainFetchPopUp("/basket/present/eastern/json/la lakers.json");
    }

    if (selectedYear === 6) {

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

        smallpic.src = "/basket/img/logos/memphis.gif";

        MainFetchPopUp("/basket/present/eastern/json/memphis.json");
    }

    if (selectedYear === 7) {

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

        smallpic.src = "/basket/img/logos/minnesota.gif";

        MainFetchPopUp("/basket/present/eastern/json/minnesota.json");
    }

    if (selectedYear === 8) {

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

        smallpic.src = "/basket/img/logos/new orleans.gif";

        MainFetchPopUp("/basket/present/eastern/json/new orleans.json");
    }

    if (selectedYear === 9) {

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

        smallpic.src = "/basket/img/logos/oklahoma city.gif";

        MainFetchPopUp("/basket/present/eastern/json/oklahoma city.json");
    }

    if (selectedYear === 10) {

        PG.textContent = "S Nash";
        SG.textContent = "C Paul";
        SF.textContent = "G Dragic";
        PF.textContent = "A Stoudemire";
        C.textContent = "D Ayton";

        PG2.src = "/basket/img/players/" + PG.textContent + ".webp";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/phoenix.gif";

        MainFetchPopUp("/basket/present/eastern/json/phoenix.json");
    }

    if (selectedYear === 11) {

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

        smallpic.src = "/basket/img/logos/portland.gif";

        MainFetchPopUp("/basket/present/eastern/json/portland.json");
    }

    if (selectedYear === 12) {

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

        smallpic.src = "/basket/img/logos/sacramento.gif";

        MainFetchPopUp("/basket/present/eastern/json/sacramento.json");
    }

    if (selectedYear === 13) {

        PG.textContent = "T Parker";
        SG.textContent = "M Ginobili";
        SF.textContent = "K Leonard";
        PF.textContent = "T Duncan";
        C.textContent = "L Aldridge";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".webp";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/logos/san antonio.gif";

        MainFetchPopUp("/basket/present/eastern/json/san antonio.json");
    }

    if (selectedYear === 14) {

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

        smallpic.src = "/basket/img/logos/utah.gif";

        MainFetchPopUp("/basket/present/eastern/json/utah.json");
    }



    function clearAndFadeInElements() {
        const elements = [
            SG, SG2, PG, PG2, SF, SF2, PF, PF2, C, C2
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

// for screenshots

// const nav = document.querySelector("nav");
// const backBtn = document.querySelector("#backButton")
// const forBtn = document.querySelector("#forwardButton")
// const search = document.querySelector(".search-container");

// document.querySelector("#smallpic").addEventListener("click", () => {

//     if (nav.style.display === "none" && backBtn.style.display === "none" && forBtn.style.display === "none" && search.style.display === "none") {
//         nav.style.display = "flex";
//         backBtn.style.display = "block";
//         forBtn.style.display = "block";
//         search.style.display = "block";
//     } else {
//         nav.style.display = "none";
//         backBtn.style.display = "none";
//         forBtn.style.display = "none";
//         search.style.display = "none";
//     }
// });