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

        smallpic.src = "";
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

        smallpic.src = "";

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

    smallpic.src = "";
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

    smallpic.src = "";
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

    smallpic.src = "";
} 

  if (selectedYear === "6") {
  
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

    smallpic.src = "";
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

    smallpic.src = "";
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

    smallpic.src = "";
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

    smallpic.src = "";
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

    smallpic.src = "";
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

    smallpic.src = "";
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

    smallpic.src = "";
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

    smallpic.src = "";
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
        PG.textContent = "T Young";
        SG.textContent = "J Johnson";
        SF.textContent = "D Carroll";
        PF.textContent = "J Smith";
        C.textContent = "A Horford";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
  }

    if (selectedYear === 1) {
        PG.textContent = "I Thomas";
        SG.textContent = "J Tatum";
        SF.textContent = "P Pierce";
        PF.textContent = "K Garnett";
        C.textContent = "A Horford";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";
  }

    if (selectedYear === 2) {
    
        PG.textContent = "D Williams";
        SG.textContent = "J Johnson";
        SF.textContent = "K Durant";
        PF.textContent = "B Lopez";
        C.textContent = "J Allen";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";

  }
  if (selectedYear === 3) {
    SG.textContent = "G Henderson";
    SG2.src =
      "https://cdn.nba.com/headshots/nba/latest/1040x760/201945.png";
    PG.textContent = "K Walker";
    PG2.src =
      "https://cdn.nba.com/headshots/nba/latest/1040x760/202689.png";
    SF.textContent = "Batum";
    SF2.src =
      "https://cdn.nba.com/headshots/nba/latest/1040x760/201587.png";
    PF.textContent = "Jefferson";
    PF2.src =
      "https://cdn.nba.com/headshots/nba/latest/1040x760/2744.png";
    C.textContent = "Zeller";
    C2.src =
      "https://cdn.nba.com/headshots/nba/latest/1040x760/203469.png";
    smallpic.src =
      "https://content.sportslogos.net/logos/6/5120/full/1926_charlotte__hornets_-primary-2015.png";
  }

  if (selectedYear === 4) {
    SG.textContent = "Butler";
    SG2.src =
      "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png";
    PG.textContent = "Rose";
    PG2.src =
      "https://cdn.nba.com/headshots/nba/latest/1040x760/201565.png";
    SF.textContent = "Deng";
    SF2.src =
      "https://cdn.nba.com/headshots/nba/latest/1040x760/2736.png";
    PF.textContent = "P Gasol";
    PF2.src =
      "https://cdn.nba.com/headshots/nba/latest/1040x760/2200.png";
    C.textContent = "Noah";
    C2.src =
      "https://cdn.nba.com/headshots/nba/latest/1040x760/201149.png";
    smallpic.src =
      "https://content.sportslogos.net/logos/6/221/full/chicago_bulls_logo_primary_19672598.png";
    }
    
    if (selectedYear === 5) {
  SG.textContent = "JR Smith";
  SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2747.png";
  PG.textContent = "Irving";
  PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png";
  SF.textContent = "James";
  SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png";
  PF.textContent = "K Love";
  PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201567.png";
  C.textContent = "Thompson";
  C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202684.png";
  smallpic.src = "https://content.sportslogos.net/logos/6/222/full/cleveland_cavaliers_logo_primary_2023_sportslogosnet-5369.png";

} 

  if (selectedYear === 6) {
  SG.textContent = "Thomas";
  SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202738.png";
  PG.textContent = "R Jackson";
  PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202704.png";
  SF.textContent = "Caldwell-Pope";
  SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203484.png";
  PF.textContent = "Griffin";
  PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201933.png";
  C.textContent = "Drummond";
  C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203083.png";
    smallpic.src = "https://content.sportslogos.net/logos/6/223/full/detroit_pistons_logo_primary_20185710.png";
    
  }
  
  if (selectedYear === 7) {
  SG.textContent = "Oladipo";
  SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203506.png";
  PG.textContent = "Hill";
  PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201588.png";
  SF.textContent = "George";
  SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202331.png";
  PF.textContent = "D West";
  PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2561.png";
  C.textContent = "Hibbert";
  C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201579.png";
    smallpic.src = "https://content.sportslogos.net/logos/6/224/full/4812_indiana_pacers-primary-2018.png";
    
  }
  
  if (selectedYear === 8) {
  SG.textContent = "Butler";
  SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png";
  PG.textContent = "Wade";
  PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2548.png";
  SF.textContent = "James";
  SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png";
  PF.textContent = "Bosh";
  PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2547.png";
  C.textContent = "Whiteside";
  C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202355.png";
    smallpic.src = "https://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif";
    
  }
  
  if (selectedYear === 9) {
  SG.textContent = "Middleton";
  SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203114.png";
  PG.textContent = "Bledsoe";
  PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202339.png";
  SF.textContent = "G Antetokounmpo";
  SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png";
  PF.textContent = "J Parker";
  PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203953.png";
  C.textContent = "B Lopez";
  C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201572.png";
  smallpic.src = "https://content.sportslogos.net/logos/6/225/full/milwaukee_bucks_logo_primary_20165763.png";
    }
    
    if (selectedYear === 10) {
    PG.textContent = "Felton";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/101109.png";
    SG.textContent = "JR Smith";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2747.png";
    SF.textContent = "C Anthony";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2546.png";
    PF.textContent = "Porziņģis";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/204001.png";
    C.textContent = "Stoudemire";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2405.png";
      document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/216/full/new_york_knicks_logo_primary_2024_sportslogosnet-7170.png";
      
  }
  
  if (selectedYear === 11) {
    PG.textContent = "Oladipo";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203506.png";
    SG.textContent = "Fournier";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203095.png";
    SF.textContent = "Gordon";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203932.png";
    PF.textContent = "Vučević";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202696.png";
    C.textContent = "Howard";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2730.png";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/217/full/orlando_magic_logo_primary_20117178.png";

} if (selectedYear === 12) {
    PG.textContent = "B Simmons";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1627732.png";
    SG.textContent = "Butler";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png";
    SF.textContent = "JJ Redick";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/200755.png";
    PF.textContent = "Harris";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202699.png";
    C.textContent = "Embiid";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png";
  document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/218/full/7034_philadelphia_76ers-primary-2016.png";
  
  }
  
  if (selectedYear === 13) {
    PG.textContent = "Lowry";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/200768.png";
    SG.textContent = "DeRozan";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/201942.png";
    SF.textContent = "Leonard";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png";
    PF.textContent = "Siakam";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/1627783.png";
    C.textContent = "Valančiūnas";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202685.png";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/227/full/7024_toronto_raptors-primary-2021.png";

  }
  
  if (selectedYear === 14) {
    PG.textContent = "J Wall";
    PG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/202322.png";
    SG.textContent = "Beal";
    SG2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203078.png";
    SF.textContent = "Porter Jr.";
    SF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203490.png";
    PF.textContent = "Hilario";
    PF2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/2403.png";
    C.textContent = "Gortat";
    C2.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/101162.png";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/6/219/full/5671_washington_wizards-primary-2016.png";
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