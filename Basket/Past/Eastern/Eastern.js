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
    PG.textContent = "T Young";
    SG.textContent = "J Johnson";
    SF.textContent = "J Smith";
    PF.textContent = "A Horford";
    C.textContent = "P Millsap";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/atlanta.gif";

    MainFetchPopUp("/basket/past/eastern/json/atlanta.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Atlanta Hawks, established in 1946, have a storied NBA history with roots in Buffalo, Tri-Cities, and St. Louis. Relocating to Atlanta in 1968, they've had iconic players and moments, highlighted by a championship in 1958 and consistent playoff appearances."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "1") {
    PG.textContent = "R Rondo";
    SG.textContent = "I Thomas";
    SF.textContent = "J Tatum";
    PF.textContent = "P Pierce";
    C.textContent = "K Garnett";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/boston.gif";

    MainFetchPopUp("/basket/past/eastern/json/boston.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Boston Celtics, founded in 1946, boast a rich NBA legacy with a record 17 championships.Known for legendary players like Bill Russell and Larry Bird, they epitomize excellence, tradition, and rivalry, particularly with the Los Angeles Lakers, cementing a storied sports history."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "2") {

    PG.textContent = "K Irving";
    SG.textContent = "D Williams";
    SF.textContent = "J Johnson";
    PF.textContent = "K Durant";
    C.textContent = "B Lopez";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/brooklyn.gif";

    MainFetchPopUp("/basket/past/eastern/json/brooklyn.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Brooklyn Nets, established in 1967, began as the New Jersey Americans in the ABA, later becoming the New Jersey Nets. Joining the NBA in 1976, they've seen varied success, relocating to Brooklyn in 2012, and evolving into a high-profile team."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });

  }

  if (selectedYear === "3") {

    PG.textContent = "K Walker";
    SG.textContent = "G Henderson";
    SF.textContent = "N Batum";
    PF.textContent = "A Jefferson";
    C.textContent = "C Zeller";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/charlotte.gif";

    MainFetchPopUp("/basket/past/eastern/json/charlotte.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Charlotte Hornets, founded in 1988, experienced relocation to New Orleans in 2002, and Charlotte's subsequent NBA revival in 2004 as the Bobcats. In 2014, they reclaimed the Hornets name, building a legacy marked by community connection and developing talent."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "4") {

    PG.textContent = "D Rose";
    SG.textContent = "J Butler";
    SF.textContent = "L Deng";
    PF.textContent = "C Boozer";
    C.textContent = "J Noah";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/chicago.gif";

    MainFetchPopUp("/basket/past/eastern/json/chicago.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Chicago Bulls, established in 1966, soared to global prominence in the 1990s with six NBA championships, largely thanks to Michael Jordan's legendary tenure. Known for their fierce competitiveness, the Bulls have been a cornerstone of Chicago's sports culture and NBA history."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "5") {

    PG.textContent = "K Irving";
    SG.textContent = "JR Smith";
    SF.textContent = "L James";
    PF.textContent = "K Love";
    C.textContent = "T Thompson";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/cleveland.gif";

    MainFetchPopUp("/basket/past/eastern/json/cleveland.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Cleveland Cavaliers, founded in 1970, reached prominence with a 2016 NBA Championship, largely credited to LeBron James. Known for their dramatic comeback in the finals and passionate fan base, the Cavaliers have become a significant and resilient presence in the NBA."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "6") {

    PG.textContent = "R Jackson";
    SG.textContent = "Kentavious Caldwell-P";
    SF.textContent = "T Harris";
    PF.textContent = "B Griffin";
    C.textContent = "A Drummond";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/detroit.gif";

    MainFetchPopUp("/basket/past/eastern/json/detroit.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Detroit Pistons, established in 1941 as the Fort Wayne Pistons, moved to Detroit in 1957. Renowned for their Bad Boys era in the late 1980s and early 2000s success, they've won three NBA championships, known for their tough, defensive-minded play."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "7") {

    PG.textContent = "G Hill";
    SG.textContent = "V Oladipo";
    SF.textContent = "P George";
    PF.textContent = "D West";
    C.textContent = "R Hibbert";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/indiana.gif";

    MainFetchPopUp("/basket/past/eastern/json/indiana.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Indiana Pacers, founded in 1967 in the ABA, joined the NBA in 1976. Known for their strong defense and team play, they enjoyed success in the 1990s and early 2000s, with notable players like Reggie Miller, though an NBA title has eluded them."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "8") {

    PG.textContent = "G Dragic";
    SG.textContent = "D Wade";
    SF.textContent = "J Butler";
    PF.textContent = "L James";
    C.textContent = "C Bosh";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/miami.gif";

    MainFetchPopUp("/basket/past/eastern/json/miami.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Miami Heat, established in 1988, quickly became a formidable NBA team. Gaining prominence in the 2000s, they secured three championships, notably with LeBron James and Dwyane Wade. Known for their strong culture and leadership, the Heat continue to be a competitive force."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "9") {

    PG.textContent = "E Bledsoe";
    SG.textContent = "M Brogdon";
    SF.textContent = "K Middleton";
    PF.textContent = "G Antetokounmpo";
    C.textContent = "B Lopez";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/milwaukee.gif";

    MainFetchPopUp("/basket/past/eastern/json/milwaukee.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Milwaukee Bucks, founded in 1968, quickly found success with a 1971 NBA Championship led by Kareem Abdul - Jabbar.Known for their resilience, the Bucks re - emerged as a powerhouse with Giannis Antetokounmpo, clinching another title in 2021 after a 50 - year drought."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "10") {

    PG.textContent = "R Felton";
    SG.textContent = "JR Smith";
    SF.textContent = "C Anthony";
    PF.textContent = "A Stoudemire";
    C.textContent = "K Porzingis";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/new york.gif";

    MainFetchPopUp("/basket/past/eastern/json/new york.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The New York Knicks, one of the NBA's original teams founded in 1946, have a storied history with two championships in the 1970s. Playing in the iconic Madison Square Garden, they've had periods of prominence, marked by passionate fans and memorable playoff runs."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "11") {

    PG.textContent = "J Nelson";
    SG.textContent = "E Fournier";
    SF.textContent = "A Gordon";
    PF.textContent = "N Vucevic";
    C.textContent = "D Howard";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/orlando.gif";

    MainFetchPopUp("/basket/past/eastern/json/orlando.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Orlando Magic, established in 1989, quickly made an impact in the NBA with stars like Shaquille O'Neal and Penny Hardaway. Despite reaching the NBA Finals twice, a championship has eluded them. Known for their dynamic play, they remain a prominent Florida franchise."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "12") {

    PG.textContent = "B Simmons";
    SG.textContent = "J Holiday";
    SF.textContent = "J Butler";
    PF.textContent = "T Harris";
    C.textContent = "J Embiid";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/philadelphia.gif";

    MainFetchPopUp("/basket/past/eastern/json/philadelphia.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Philadelphia 76ers, founded in 1946 as the Syracuse Nationals before relocating in 1963, have a rich history with three NBA championships. Known for legendary players like Wilt Chamberlain, Julius Erving and Allen Iverson, the 76ers have been a significant, enduring presence in the league."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "13") {

    PG.textContent = "K Lowry";
    SG.textContent = "D DeRozan";
    SF.textContent = "K Leonard";
    PF.textContent = "C Bosh";
    C.textContent = "J Valanciunas";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/toronto.gif";

    MainFetchPopUp("/basket/past/eastern/json/toronto.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Toronto Raptors, established in 1995 as part of the NBA's expansion into Canada, have grown into a formidable team. They achieved a pinnacle of success with their 2019 NBA Championship. Known for their diverse and passionate fan base, they've become a prominent Eastern Conference contender."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear === "14") {

    PG.textContent = "J Wall";
    SG.textContent = "B Beal";
    SF.textContent = "G Arenas";
    PF.textContent = "O Porter Jr";
    C.textContent = "Nene";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/washington.gif";

    MainFetchPopUp("/basket/past/eastern/json/washington.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "The Washington Wizards, originally the Chicago Packers in 1961 and undergoing several name changes, settled in Washington D.C. in 1974. With a history highlighted by a 1978 NBA Championship, they've had periods of success and iconic players, contributing to a rich basketball legacy."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

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
    PG.textContent = "T Young";
    SG.textContent = "J Johnson";
    SF.textContent = "J Smith";
    PF.textContent = "A Horford";
    C.textContent = "P Millsap";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/atlanta.gif";

    MainFetchPopUp("/basket/past/eastern/json/atlanta.json");
  }

  if (selectedYear === 1) {
    PG.textContent = "R Rondo";
    SG.textContent = "I Thomas";
    SF.textContent = "J Tatum";
    PF.textContent = "P Pierce";
    C.textContent = "K Garnett";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/boston.gif";

    MainFetchPopUp("/basket/past/eastern/json/boston.json");
  }

  if (selectedYear === 2) {

    PG.textContent = "K Irving";
    SG.textContent = "D Williams";
    SF.textContent = "J Johnson";
    PF.textContent = "K Durant";
    C.textContent = "B Lopez";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/brooklyn.gif";

    MainFetchPopUp("/basket/past/eastern/json/brooklyn.json");

  }

  if (selectedYear === 3) {

    PG.textContent = "K Walker";
    SG.textContent = "G Henderson";
    SF.textContent = "N Batum";
    PF.textContent = "A Jefferson";
    C.textContent = "C Zeller";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/charlotte.gif";

    MainFetchPopUp("/basket/past/eastern/json/charlotte.json");
  }

  if (selectedYear === 4) {

    PG.textContent = "D Rose";
    SG.textContent = "J Butler";
    SF.textContent = "L Deng";
    PF.textContent = "C Boozer";
    C.textContent = "J Noah";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/chicago.gif";

    MainFetchPopUp("/basket/past/eastern/json/chicago.json");
  }

  if (selectedYear === 5) {

    PG.textContent = "K Irving";
    SG.textContent = "JR Smith";
    SF.textContent = "L James";
    PF.textContent = "K Love";
    C.textContent = "T Thompson";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/cleveland.gif";

    MainFetchPopUp("/basket/past/eastern/json/cleveland.json");
  }

  if (selectedYear === 6) {

    PG.textContent = "R Jackson";
    SG.textContent = "I Thomas";
    SF.textContent = "T Harris";
    PF.textContent = "B Griffin";
    C.textContent = "A Drummond";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/detroit.gif";

    MainFetchPopUp("/basket/past/eastern/json/detroit.json");
  }

  if (selectedYear === 7) {

    PG.textContent = "G Hill";
    SG.textContent = "V Oladipo";
    SF.textContent = "P George";
    PF.textContent = "D West";
    C.textContent = "R Hibbert";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/indiana.gif";

    MainFetchPopUp("/basket/past/eastern/json/indiana.json");
  }

  if (selectedYear === 8) {

    PG.textContent = "G Dragic";
    SG.textContent = "D Wade";
    SF.textContent = "J Butler";
    PF.textContent = "L James";
    C.textContent = "C Bosh";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/miami.gif";

    MainFetchPopUp("/basket/past/eastern/json/miami.json");
  }

  if (selectedYear === 9) {

    PG.textContent = "E Bledsoe";
    SG.textContent = "M Brogdon";
    SF.textContent = "K Middleton";
    PF.textContent = "G Antetokounmpo";
    C.textContent = "B Lopez";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/milwaukee.gif";

    MainFetchPopUp("/basket/past/eastern/json/milwaukee.json");
  }

  if (selectedYear === 10) {

    PG.textContent = "R Felton";
    SG.textContent = "JR Smith";
    SF.textContent = "C Anthony";
    PF.textContent = "A Stoudemire";
    C.textContent = "K Porzingis";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/new york.gif";

    MainFetchPopUp("/basket/past/eastern/json/new york.json");
  }

  if (selectedYear === 11) {

    PG.textContent = "J Nelson";
    SG.textContent = "E Fournier";
    SF.textContent = "A Gordon";
    PF.textContent = "N Vucevic";
    C.textContent = "D Howard";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/orlando.gif";

    MainFetchPopUp("/basket/past/eastern/json/orlando.json");
  }

  if (selectedYear === 12) {

    PG.textContent = "B Simmons";
    SG.textContent = "J Holiday";
    SF.textContent = "J Butler";
    PF.textContent = "T Harris";
    C.textContent = "J Embiid";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/philadelphia.gif";

    MainFetchPopUp("/basket/past/eastern/json/philadelphia.json");
  }

  if (selectedYear === 13) {

    PG.textContent = "K Lowry";
    SG.textContent = "D DeRozan";
    SF.textContent = "K Leonard";
    PF.textContent = "C Bosh";
    C.textContent = "J Valanciunas";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/toronto.gif";

    MainFetchPopUp("/basket/past/eastern/json/toronto.json");

    if (selectedYear === 14) {

      PG.textContent = "J Wall";
      SG.textContent = "B Beal";
      SF.textContent = "G Arenas";
      PF.textContent = "O Porter Jr";
      C.textContent = "Nene";

      PG2.src = "/basket/img/players/" + PG.textContent + ".png";
      SG2.src = "/basket/img/players/" + SG.textContent + ".png";
      SF2.src = "/basket/img/players/" + SF.textContent + ".png";
      PF2.src = "/basket/img/players/" + PF.textContent + ".png";
      C2.src = "/basket/img/players/" + C.textContent + ".png";

      smallpic.src = "/basket/img/logos/washington.gif";

      MainFetchPopUp("/basket/past/eastern/json/washington.json");
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

  }
}
// Event listener for the back button
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

//   if (nav.style.display === "none" && backBtn.style.display === "none" && forBtn.style.display === "none" && search.style.display === "none") {
//     nav.style.display = "flex";
//     backBtn.style.display = "block";
//     forBtn.style.display = "block";
//     search.style.display = "block";
//   } else {
//     nav.style.display = "none";
//     backBtn.style.display = "none";
//     forBtn.style.display = "none";
//     search.style.display = "none";
//   }
// });