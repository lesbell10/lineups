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
}