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
const containers = document.querySelectorAll(".carousel-item");
const coach = document.querySelector(".coach");
const msgLabel = document.querySelector(".label");

yearSelector.addEventListener("change", () => {
  updatePlayerInfo();

});

let previousValue = msgLabel.textContent

yearSelector.addEventListener('mouseover', function () {
  msgLabel.textContent = "You can use keyboard to switch"
  msgLabel.style.maxWidth = "325px"
  msgLabel.style.minWidth = "130px"
  msgLabel.style.fontSize = "19px"
  msgLabel.style.fontWeight = "normal"
});

yearSelector.addEventListener('mouseout', function () {
  msgLabel.textContent = `${previousValue}`
  msgLabel.style.maxWidth = "130px"
  msgLabel.style.fontSize = "21px"
  msgLabel.style.fontWeight = "bold"
});

// Function to handle mouseover
const handleMouseover = (event) => {
  // Find the image and paragraph within the container
  const img = event.currentTarget.querySelector("img");
  const p = event.currentTarget.querySelector("p");

  // Modify the image
  img.style.height = "31%";
  img.style.transform = "translateY(-22%)";

  // Modify the paragraph
  p.style.scale = "1.3";
  p.style.transform = "translateY(10px) translateX(25px)";
};

// Function to handle mouseout
const handleMouseout = (event) => {
  const img = event.currentTarget.querySelector("img");
  const p = event.currentTarget.querySelector("p");

  // Reset image styles
  img.style.height = ""; // Reset to original or specify a new value
  img.style.transform = ""; // Reset to original or specify a new value

  // Reset paragraph styles
  p.style.scale = "1";
  p.style.transform = "";
  p.style.transform = "";
};

// Add mouseover and mouseout event listeners to each container
containers.forEach(container => {
  container.addEventListener("mouseover", handleMouseover);
  container.addEventListener("mouseout", handleMouseout);
});


yearSelector.addEventListener('mouseenter', () => {
  yearSelector.focus();
});

let selectedYear = 0

function updatePlayerInfo() {

  selectedYear = yearSelector.value;

  if (selectedYear == "0") {
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

    MainFetchPopUp("/basket/Past/Eastern/json/atlanta.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Atlanta Hawks had highs, with a 60-win season in 2014-2015 and an Eastern Conference Finals appearance. Subsequently, they focused on rebuilding through the draft and developing young talent for a brighter future."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "1") {
    PG.textContent = "R Rondo";
    SG.textContent = "Is Thomas";
    SF.textContent = "J Tatum";
    PF.textContent = "P Pierce";
    C.textContent = "K Garnett";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/boston.gif";

    MainFetchPopUp("/basket/Past/Eastern/json/boston.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Boston Celtics transitioned from the \"Big Three\" era to a young, dynamic team. They remained competitive, making multiple Eastern Conference Finals appearances and nurturing stars like Jayson Tatum and Jaylen Brown."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "2") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/brooklyn.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Brooklyn Nets relocated, initiated a high-profile but short-lived era with Paul Pierce and Kevin Garnett, and later focused on rebuilding, culminating in signing stars Kevin Durant and Kyrie Irving in 2019."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });

  }

  if (selectedYear == "3") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/charlotte.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Charlotte Hornets (formerly Bobcats) faced challenges, with sporadic playoff appearances. Notable players like Kemba Walker emerged, but consistent success remained elusive. The franchise focused on rebuilding and developing young talent during this period."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "4") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/chicago.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Chicago Bulls saw early success with Derrick Rose's MVP season and deep playoff runs, but later faced challenges due to injuries and roster changes, eventually shifting towards rebuilding and developing young talent for future competitiveness."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "5") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/cleveland.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Cleveland Cavaliers experienced a historic period, highlighted by LeBron James' return, a 2016 NBA Championship victory, and four consecutive NBA Finals appearances. Post-2018, they entered a rebuilding phase, focusing on nurturing young talent."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "6") {

    PG.textContent = "R Jackson";
    SG.textContent = "K Caldwell-P";
    SF.textContent = "T Harris";
    PF.textContent = "B Griffin";
    C.textContent = "A Drummond";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/detroit.gif";

    MainFetchPopUp("/basket/Past/Eastern/json/detroit.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "Between 2010 and 2020, the Detroit Pistons experienced a period of rebuilding and transition, with sporadic playoff appearances but no significant postseason success. The decade was marked by roster changes and efforts to recapture the franchise's former glory through draft picks and trades."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "7") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/indiana.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Indiana Pacers were consistently competitive, highlighted by Eastern Conference Finals appearances in 2013 and 2014 led by Paul George. Despite organizational changes and roster turnover, they remained playoff contenders, though without securing a championship."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "8") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/miami.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Miami Heat experienced a golden era, forming the \"Big Three\" with LeBron James, Dwyane Wade, and Chris Bosh, winning two NBA championships (2012, 2013), and making four consecutive Finals appearances, followed by a phase of rebuilding and retooling."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "9") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/milwaukee.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "During 2010-2020, the Milwaukee Bucks transitioned from a rebuilding team to contenders, primarily through the emergence of Giannis Antetokounmpo, winning the 2019 MVP. The decade concluded with the Bucks as a top Eastern Conference team, setting the stage for future successes."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "10") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/new york.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the New York Knicks experienced fluctuating success, highlighted by a strong 2012-2013 season, but largely struggled with consistent performance. The decade was marked by frequent coaching changes, management shifts, and a continuous search for a winning formula."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "11") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/orlando.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Orlando Magic went through phases of rebuilding and playoff contention. They secured playoff berths but lacked deep postseason runs. The decade saw changes in coaching and player development efforts."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "12") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/philadelphia.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Philadelphia 76ers experienced highs and lows. They underwent a \"Trust the Process\" rebuild, drafting Joel Embiid and Ben Simmons. Late in the decade, they became a formidable team in the Eastern Conference, with multiple playoff appearances and high expectations for the future."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "13") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/toronto.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Toronto Raptors evolved from a playoff team to NBA champions in 2019. Led by Kyle Lowry and Kawhi Leonard, they captured their first title, cementing their place as a competitive franchise in the Eastern Conference."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "14") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/washington.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Washington Wizards had moments of success, including playoff appearances and a strong backcourt with John Wall and Bradley Beal. However, they faced inconsistency and roster changes, striving for sustained competitiveness in the Eastern Conference."
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

  if (selectedYear == "0") {
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

    MainFetchPopUp("/basket/Past/Eastern/json/atlanta.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Atlanta Hawks had highs, with a 60-win season in 2014-2015 and an Eastern Conference Finals appearance. Subsequently, they focused on rebuilding through the draft and developing young talent for a brighter future."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "1") {
    PG.textContent = "R Rondo";
    SG.textContent = "Is Thomas";
    SF.textContent = "J Tatum";
    PF.textContent = "P Pierce";
    C.textContent = "K Garnett";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/boston.gif";

    MainFetchPopUp("/basket/Past/Eastern/json/boston.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Boston Celtics transitioned from the \"Big Three\" era to a young, dynamic team. They remained competitive, making multiple Eastern Conference Finals appearances and nurturing stars like Jayson Tatum and Jaylen Brown."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "2") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/brooklyn.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Brooklyn Nets relocated, initiated a high-profile but short-lived era with Paul Pierce and Kevin Garnett, and later focused on rebuilding, culminating in signing stars Kevin Durant and Kyrie Irving in 2019."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });

  }

  if (selectedYear == "3") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/charlotte.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Charlotte Hornets (formerly Bobcats) faced challenges, with sporadic playoff appearances. Notable players like Kemba Walker emerged, but consistent success remained elusive. The franchise focused on rebuilding and developing young talent during this period."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "4") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/chicago.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Chicago Bulls saw early success with Derrick Rose's MVP season and deep playoff runs, but later faced challenges due to injuries and roster changes, eventually shifting towards rebuilding and developing young talent for future competitiveness."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "5") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/cleveland.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Cleveland Cavaliers experienced a historic period, highlighted by LeBron James' return, a 2016 NBA Championship victory, and four consecutive NBA Finals appearances. Post-2018, they entered a rebuilding phase, focusing on nurturing young talent."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "6") {

    PG.textContent = "R Jackson";
    SG.textContent = "K Caldwell-P";
    SF.textContent = "T Harris";
    PF.textContent = "B Griffin";
    C.textContent = "A Drummond";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "/basket/img/logos/detroit.gif";

    MainFetchPopUp("/basket/Past/Eastern/json/detroit.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "Between 2010 and 2020, the Detroit Pistons experienced a period of rebuilding and transition, with sporadic playoff appearances but no significant postseason success. The decade was marked by roster changes and efforts to recapture the franchise's former glory through draft picks and trades."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "7") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/indiana.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Indiana Pacers were consistently competitive, highlighted by Eastern Conference Finals appearances in 2013 and 2014 led by Paul George. Despite organizational changes and roster turnover, they remained playoff contenders, though without securing a championship."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "8") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/miami.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Miami Heat experienced a golden era, forming the \"Big Three\" with LeBron James, Dwyane Wade, and Chris Bosh, winning two NBA championships (2012, 2013), and making four consecutive Finals appearances, followed by a phase of rebuilding and retooling."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "9") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/milwaukee.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "During 2010-2020, the Milwaukee Bucks transitioned from a rebuilding team to contenders, primarily through the emergence of Giannis Antetokounmpo, winning the 2019 MVP. The decade concluded with the Bucks as a top Eastern Conference team, setting the stage for future successes."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "10") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/new york.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the New York Knicks experienced fluctuating success, highlighted by a strong 2012-2013 season, but largely struggled with consistent performance. The decade was marked by frequent coaching changes, management shifts, and a continuous search for a winning formula."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "11") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/orlando.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Orlando Magic went through phases of rebuilding and playoff contention. They secured playoff berths but lacked deep postseason runs. The decade saw changes in coaching and player development efforts."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "12") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/philadelphia.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Philadelphia 76ers experienced highs and lows. They underwent a \"Trust the Process\" rebuild, drafting Joel Embiid and Ben Simmons. Late in the decade, they became a formidable team in the Eastern Conference, with multiple playoff appearances and high expectations for the future."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "13") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/toronto.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Toronto Raptors evolved from a playoff team to NBA champions in 2019. Led by Kyle Lowry and Kawhi Leonard, they captured their first title, cementing their place as a competitive franchise in the Eastern Conference."
    })

    smallpic.addEventListener("mouseout", () => {
      sideModal.style.display = 'none'; // Hide the modal
    });
  }

  if (selectedYear == "14") {

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

    MainFetchPopUp("/basket/Past/Eastern/json/washington.json");

    smallpic.addEventListener('mouseover', () => {
      sideModal.style.display = 'block'
      sideModal.textContent = "From 2010 to 2020, the Washington Wizards had moments of success, including playoff appearances and a strong backcourt with John Wall and Bradley Beal. However, they faced inconsistency and roster changes, striving for sustained competitiveness in the Eastern Conference."
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