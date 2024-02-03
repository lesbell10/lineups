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

window.onload = function () {
    smallpic.style.scale = '1.75'
    smallpic.style.top = '60%'
    smallpic.style.left = '6%'

};

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

    if (selectedYear == "20") {

        PG.textContent = "S Curry";
        SG.textContent = "L James";
        SF.textContent = "G Antetokounmpo";
        PF.textContent = "N Jokic";
        C.textContent = "J Embiid";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/Embiid.jpg";

        MainFetchPopUp("./json/EveryYear_2024.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Joel Embiid is an elite NBA center known for his dominant scoring, rebounding, and shot-blocking abilities. Playing for the Philadelphia 76ers, he's a multiple-time All-Star and MVP candidate, often displaying a unique combination of size, skill, and agility on the court."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = ""
    }

    if (selectedYear == "19") {

        PG.textContent = "S Curry";
        SG.textContent = "K Durant";
        SF.textContent = "L James";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "N Jokic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/Jokic.jpg";

        MainFetchPopUp("./json/EveryYear_2023.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Nikola Jokic, an NBA superstar for the Denver Nuggets, is a versatile and highly skilled center. Known for his exceptional passing, scoring, and basketball IQ, he won the MVP award in 2021, solidifying his status as one of the league's premier players."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Best Head Coach: Erik Spoesltra"
    }

    if (selectedYear == "18") {

        PG.textContent = "S Curry";
        SG.textContent = "K Leonard";
        SF.textContent = "L James";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "K Durant";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/curry.jpg";

        MainFetchPopUp("./json/EveryYear_2022.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Stephen Curry, renowned NBA player for the Golden State Warriors, is celebrated for his exceptional 3-point shooting skills. A multiple MVP awardee, Curry has revolutionized modern basketball with his range and accuracy, influencing a generation of players."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Steve Kerr"
    }

    if (selectedYear == "17") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "K Leonard";
        PF.textContent = "L James";
        C.textContent = "G Antetokounmpo";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/antetokounmpo.jpg";

        MainFetchPopUp("./json/EveryYear_2021.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Giannis Antetokounmpo, a Greek NBA superstar playing for the Milwaukee Bucks, is known for his versatility and dominance on the court. He has earned multiple MVP titles, showcasing exceptional athleticism and skill in scoring, rebounding, and defense, greatly influencing contemporary basketball."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Monty Williams"
    }

    if (selectedYear == "16") {

        PG.textContent = "J Harden";
        SG.textContent = "K Leonard";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "G Antetokounmpo";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/harden.png";

        MainFetchPopUp("./json/EveryYear_2020.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "James Harden, an NBA star renowned for his time with the Philadelphia 76ers and now with the Los Angeles Clippers, excels as a scorer and playmaker. Known for his signature step-back three and adept passing, Harden has won an MVP and multiple scoring titles."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Frank Vogel"
    }

    if (selectedYear == "15") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "K Leonard";
        C.textContent = "K Durant";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/durant.jpg"

        MainFetchPopUp("./json/EveryYear_2019.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Kevin Durant, an NBA superstar, currently playing for the Phoenix Suns, is celebrated for his scoring prowess and versatility. A multiple-time scoring champion and MVP, Durant's remarkable height and skills enable him to dominate on both offense and defense, influencing modern basketball."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Nick Nurse"
    }

    if (selectedYear == "14") {

        PG.textContent = "R Westbrook";
        SG.textContent = "J Harden";
        SF.textContent = "K Leonard";
        PF.textContent = "L James";
        C.textContent = "K Durant";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/james.jpg";

        MainFetchPopUp("./json/EveryYear_2018.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "LeBron James, an iconic NBA figure playing for the Los Angeles Lakers, is known for his extraordinary athleticism and basketball IQ. A multiple-time MVP and NBA champion, James excels in scoring, playmaking, and leadership, significantly impacting the sport's evolution and culture."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Steve Kerr"
    }

    if (selectedYear == "13") {

        PG.textContent = "S Curry";
        SG.textContent = "R Westbrook";
        SF.textContent = "K Leonard";
        PF.textContent = "L James";
        C.textContent = "K Durant"

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/leonard.jpg";

        MainFetchPopUp("./json/EveryYear_2017.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Kawhi Leonard, an NBA star known for his tenure with the San Antonio Spurs and Toronto Raptors, stands out for his defensive prowess and efficient scoring. A two-time NBA champion and Finals MVP, Leonard's quiet demeanor contrasts with his impactful, versatile on-court presence."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Steve Kerr"
    }

    if (selectedYear == "12") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "A Davis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/davis.jpg";

        MainFetchPopUp("./json/EveryYear_2016.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Anthony Davis, an NBA star playing for the Los Angeles Lakers, is known for his versatility, shot-blocking, and scoring ability. A multiple-time All-Star and NBA champion, Davis combines size and skill to impact both ends of the court, making him a formidable player."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Tyronn Lue"
    }

    if (selectedYear == "11") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "T Duncan";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/duncan.jpg";

        MainFetchPopUp("./json/EveryYear_2015.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Tim Duncan, a retired NBA legend with the San Antonio Spurs, is revered for his consistency, fundamental skills, and quiet leadership. A five-time NBA champion and two-time MVP, Duncan's professionalism and dominance as a power forward/center have left a profound legacy."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Steve Kerr"
    }

    if (selectedYear == "10") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "C Anthony";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/paul.jpg";

        MainFetchPopUp("./json/EveryYear_2014.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Chris Paul, an elite NBA point guard known for his tenure with teams like the New Orleans Hornets and Phoenix Suns, excels in playmaking and defense. A multiple-time All-Star and assists leader, Paul's leadership and basketball IQ have significantly impacted the game."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Gregg Popovich"
    }

    if (selectedYear == "9") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "D Howard";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/bryant.jpg";

        MainFetchPopUp("./json/EveryYear_2013.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Kobe Bryant, a legendary NBA figure with the Los Angeles Lakers, was celebrated for his scoring, work ethic, and competitive spirit. A five-time NBA champion and MVP, Bryant's Mamba Mentality inspired a generation, leaving an enduring legacy in basketball history."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Erik Spoelstra"
    }

    if (selectedYear == "8") {

        PG.textContent = "C Paul";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "D Howard";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/howard.jpg";

        MainFetchPopUp("./json/EveryYear_2012.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Dwight Howard, an NBA center known for his peak years with the Orlando Magic, stands out for his defensive skills and athleticism. An eight-time All-Star and three-time Defensive Player of the Year, Howard's impact on defense and rebounding has been substantial."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Erik Spoelstra"

    }

    if (selectedYear == "7") {

        PG.textContent = "C Paul";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "C Anthony";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/anthony.jpg";

        MainFetchPopUp("./json/EveryYear_2011.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Carmelo Anthony, an NBA star known for his tenure with the Denver Nuggets and New York Knicks, is celebrated for his scoring ability, particularly his mid-range game. A ten-time All-Star, Anthony's offensive prowess and leadership have made a significant impact on the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Rick Carlisle"
    }

    if (selectedYear == "6") {

        PG.textContent = "C Paul";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "K Garnett";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/garnett.jpg";

        MainFetchPopUp("./json/EveryYear_2010.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Kevin Garnett, a retired NBA power forward and center, known for his tenure with the Minnesota Timberwolves and Boston Celtics, was celebrated for his intensity, defensive prowess, and versatility. An NBA champion and MVP, Garnett's passion and skill greatly influenced the game."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Phil Jackson"
    }

    if (selectedYear == "5") {

        PG.textContent = "C Paul";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "D Howard";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/wade.jpg";

        MainFetchPopUp("./json/EveryYear_2009.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Dwyane Wade, a retired NBA legend primarily with the Miami Heat, is renowned for his scoring, playmaking, and defensive skills. A three-time NBA champion and Finals MVP, Wade's dynamic style and leadership played a pivotal role in shaping Miami's championship legacy."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Phil Jackson"
    }

    if (selectedYear == "4") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Garnett";
        C.textContent = "T Duncan";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/james 2.jpg";

        MainFetchPopUp("./json/EveryYear_2008.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "LeBron James is a basketball icon renowned for his incredible athleticism, leadership, and versatility. With multiple NBA championships and MVP awards, he's a dominant force on and off the court, using his platform to advocate for social change and philanthropy."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Doc Rivers"
    }

    if (selectedYear == "3") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "D Nowitzki";
        C.textContent = "T Duncan";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/nash.jpg";

        MainFetchPopUp("./json/EveryYear_2007.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Steve Nash, a retired NBA player, primarily with the Phoenix Suns, is celebrated for his extraordinary playmaking and shooting abilities. A two-time MVP known for his efficient offense and visionary passing, Nash significantly influenced the game's tempo and style of play."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Gregg Popovich"
    }

    if (selectedYear == "2") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "T Duncan";
        C.textContent = "D Nowitzki";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/nowitzki.jpg";

        MainFetchPopUp("./json/EveryYear_2006.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Dirk Nowitzki, a retired NBA star with the Dallas Mavericks, is renowned for revolutionizing the power forward position with his unique shooting ability. The German-born player, an NBA champion and MVP, is celebrated for his loyalty, leadership, and impact on international basketball."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Pat Riley"
    }

    if (selectedYear == "1") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/O'Neal.webp";

        MainFetchPopUp("./json/EveryYear_2005.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Shaquille O'Neal, a retired NBA legend, dominated as a center for teams like the Lakers and Heat. Known for his immense size and strength, Shaq won multiple championships and MVP awards, leaving a lasting legacy as one of the greatest centers ever."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Gregg Popovich"
    }

    if (selectedYear == "0") {

        PG.textContent = "A Iverson";
        SG.textContent = "T McGrady";
        SF.textContent = "K Bryant";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/iverson.jpg";

        MainFetchPopUp("./json/EveryYear_2004.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Allen Iverson, a legendary NBA point guard, was known for his explosive scoring, ball-handling, and crossover dribble. His fearless playing style and cultural impact made him an iconic figure in basketball history."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Larry Brown"
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

    if (selectedYear == "20") {

        PG.textContent = "S Curry";
        SG.textContent = "L James";
        SF.textContent = "G Antetokounmpo";
        PF.textContent = "N Jokic";
        C.textContent = "J Embiid";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/embiid.jpg";

        MainFetchPopUp("./json/EveryYear_2024.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Joel Embiid is an elite NBA center known for his dominant scoring, rebounding, and shot-blocking abilities. Playing for the Philadelphia 76ers, he's a multiple-time All-Star and MVP candidate, often displaying a unique combination of size, skill, and agility on the court."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = ""
    }

    if (selectedYear == "19") {

        PG.textContent = "S Curry";
        SG.textContent = "K Durant";
        SF.textContent = "L James";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "N Jokic";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/Jokic.jpg";

        MainFetchPopUp("./json/EveryYear_2023.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Nikola Jokic, an NBA superstar for the Denver Nuggets, is a versatile and highly skilled center. Known for his exceptional passing, scoring, and basketball IQ, he won the MVP award in 2021, solidifying his status as one of the league's premier players."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Best Head Coach: Erik Spoesltra"
    }

    if (selectedYear == "18") {

        PG.textContent = "S Curry";
        SG.textContent = "K Leonard";
        SF.textContent = "L James";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "K Durant";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/curry.jpg";

        MainFetchPopUp("./json/EveryYear_2022.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Stephen Curry, renowned NBA player for the Golden State Warriors, is celebrated for his exceptional three - point shooting skills. A multiple MVP awardee, Curry has revolutionized modern basketball with his range and accuracy, influencing a generation of players."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Steve Kerr"
    }

    if (selectedYear == "17") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "K Leonard";
        PF.textContent = "L James";
        C.textContent = "G Antetokounmpo";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/antetokounmpo.jpg";

        MainFetchPopUp("./json/EveryYear_2021.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Giannis Antetokounmpo, a Greek NBA superstar playing for the Milwaukee Bucks, is known for his versatility and dominance on the court. He has earned multiple MVP titles, showcasing exceptional athleticism and skill in scoring, rebounding, and defense, greatly influencing contemporary basketball."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Monty Williams"
    }

    if (selectedYear == "16") {

        PG.textContent = "J Harden";
        SG.textContent = "K Leonard";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "G Antetokounmpo";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/harden.png";

        MainFetchPopUp("./json/EveryYear_2020.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "James Harden, an NBA star renowned for his time with the Philadelphia 76ers and now with the Los Angeles Clippers, excels as a scorer and playmaker. Known for his signature step-back three and adept passing, Harden has won an MVP and multiple scoring titles."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Frank Vogel"
    }

    if (selectedYear == "15") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "K Leonard";
        C.textContent = "K Durant";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/durant.jpg"

        MainFetchPopUp("./json/EveryYear_2019.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Kevin Durant, an NBA superstar, currently playing for the Phoenix Suns, is celebrated for his scoring prowess and versatility. A multiple-time scoring champion and MVP, Durant's remarkable height and skills enable him to dominate on both offense and defense, influencing modern basketball."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Nick Nurse"
    }

    if (selectedYear == "14") {

        PG.textContent = "R Westbrook";
        SG.textContent = "J Harden";
        SF.textContent = "K Leonard";
        PF.textContent = "L James";
        C.textContent = "K Durant";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/james.jpg";

        MainFetchPopUp("./json/EveryYear_2018.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "LeBron James, an iconic NBA figure playing for the Los Angeles Lakers, is known for his extraordinary athleticism and basketball IQ. A multiple-time MVP and NBA champion, James excels in scoring, playmaking, and leadership, significantly impacting the sport's evolution and culture."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Steve Kerr"
    }

    if (selectedYear == "13") {

        PG.textContent = "S Curry";
        SG.textContent = "R Westbrook";
        SF.textContent = "K Leonard";
        PF.textContent = "L James";
        C.textContent = "K Durant"

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/leonard.jpg";

        MainFetchPopUp("./json/EveryYear_2017.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Kawhi Leonard, an NBA star known for his tenure with the San Antonio Spurs and Toronto Raptors, stands out for his defensive prowess and efficient scoring. A two-time NBA champion and Finals MVP, Leonard's quiet demeanor contrasts with his impactful, versatile on-court presence."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Steve Kerr"
    }

    if (selectedYear == "12") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "A Davis";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/davis.jpg";

        MainFetchPopUp("./json/EveryYear_2016.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Anthony Davis, an NBA star playing for the Los Angeles Lakers, is known for his versatility, shot - blocking, and scoring ability. A multiple-time All-Star and NBA champion, Davis combines size and skill to impact both ends of the court, making him a formidable player."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Tyronn Lue"
    }

    if (selectedYear == "11") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "T Duncan";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/duncan.jpg";

        MainFetchPopUp("./json/EveryYear_2015.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Tim Duncan, a retired NBA legend with the San Antonio Spurs, is revered for his consistency, fundamental skills, and quiet leadership. A five-time NBA champion and two-time MVP, Duncan's professionalism and dominance as a power forward/center have left a profound legacy."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Steve Kerr"
    }

    if (selectedYear == "10") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "C Anthony";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/paul.jpg";

        MainFetchPopUp("./json/EveryYear_2014.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Chris Paul, an elite NBA point guard known for his tenure with teams like the New Orleans Hornets and Phoenix Suns, excels in playmaking and defense. A multiple-time All-Star and assists leader, Paul's leadership and basketball IQ have significantly impacted the game."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Gregg Popovich"
    }

    if (selectedYear == "9") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "D Howard";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/bryant.jpg";

        MainFetchPopUp("./json/EveryYear_2013.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Kobe Bryant, a legendary NBA figure with the Los Angeles Lakers, was celebrated for his scoring, work ethic, and competitive spirit. A five-time NBA champion and MVP, Bryant's Mamba Mentality inspired a generation, leaving an enduring legacy in basketball history."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Erik Spoelstra"
    }

    if (selectedYear == "8") {

        PG.textContent = "C Paul";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "D Howard";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/howard.jpg";

        MainFetchPopUp("./json/EveryYear_2012.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Dwight Howard, an NBA center known for his peak years with the Orlando Magic, stands out for his defensive skills and athleticism. An eight-time All-Star and three-time Defensive Player of the Year, Howard's impact on defense and rebounding has been substantial."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Erik Spoelstra"

    }

    if (selectedYear == "7") {

        PG.textContent = "C Paul";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "C Anthony";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/anthony.jpg";

        MainFetchPopUp("./json/EveryYear_2011.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Carmelo Anthony, an NBA star known for his tenure with the Denver Nuggets and New York Knicks, is celebrated for his scoring ability, particularly his mid-range game. A ten-time All-Star, Anthony's offensive prowess and leadership have made a significant impact on the league."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Rick Carlisle"
    }

    if (selectedYear == "6") {

        PG.textContent = "C Paul";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "K Garnett";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/garnett.jpg";

        MainFetchPopUp("./json/EveryYear_2010.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Kevin Garnett, a retired NBA power forward and center, known for his tenure with the Minnesota Timberwolves and Boston Celtics, was celebrated for his intensity, defensive prowess, and versatility.An NBA champion and MVP, Garnett's passion and skill greatly influenced the game."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Phil Jackson"
    }

    if (selectedYear == "5") {

        PG.textContent = "C Paul";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "D Howard";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/wade.jpg";

        MainFetchPopUp("./json/EveryYear_2009.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Dwyane Wade, a retired NBA legend primarily with the Miami Heat, is renowned for his scoring, playmaking, and defensive skills. A three-time NBA champion and Finals MVP, Wade's dynamic style and leadership played a pivotal role in shaping Miami's championship legacy."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Phil Jackson"
    }

    if (selectedYear == "4") {

        PG.textContent = "C Paul";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Garnett";
        C.textContent = "T Duncan";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/james 2.jpg";

        MainFetchPopUp("./json/EveryYear_2008.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "LeBron James is a basketball icon renowned for his incredible athleticism, leadership, and versatility. With multiple NBA championships and MVP awards, he's a dominant force on and off the court, using his platform to advocate for social change and philanthropy."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Doc Rivers"
    }

    if (selectedYear == "3") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "D Nowitzki";
        C.textContent = "T Duncan";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/nash.jpg";

        MainFetchPopUp("./json/EveryYear_2007.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Steve Nash, a retired NBA player, primarily with the Phoenix Suns, is celebrated for his extraordinary playmaking and shooting abilities. A two-time MVP known for his efficient offense and visionary passing, Nash significantly influenced the game's tempo and style of play."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Gregg Popovich"
    }

    if (selectedYear == "2") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "T Duncan";
        C.textContent = "D Nowitzki";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/nowitzki.jpg";

        MainFetchPopUp("./json/EveryYear_2006.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Dirk Nowitzki, a retired NBA star with the Dallas Mavericks, is renowned for revolutionizing the power forward position with his unique shooting ability. The German-born player, an NBA champion and MVP, is celebrated for his loyalty, leadership, and impact on international basketball."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Pat Riley"
    }

    if (selectedYear == "1") {

        PG.textContent = "S Nash";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/O'Neal.webp";

        MainFetchPopUp("./json/EveryYear_2005.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Shaquille O'Neal, a retired NBA legend, dominated as a center for teams like the Lakers and Heat. Known for his immense size and strength, Shaq won multiple championships and MVP awards, leaving a lasting legacy as one of the greatest centers ever."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Gregg Popovich"
    }

    if (selectedYear == "0") {

        PG.textContent = "A Iverson";
        SG.textContent = "T McGrady";
        SF.textContent = "K Bryant";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/basket/img/players/" + PF.textContent + ".png";
        C2.src = "/basket/img/players/" + C.textContent + ".png";

        smallpic.src = "/basket/img/wallpapers/iverson.jpg";

        MainFetchPopUp("./json/EveryYear_2004.json");

        smallpic.addEventListener('mouseover', () => {
            sideModal.style.display = 'block'
            sideModal.textContent = "Allen Iverson, a legendary NBA point guard, was known for his explosive scoring, ball-handling, and crossover dribble. His fearless playing style and cultural impact made him an iconic figure in basketball history."
        })

        smallpic.addEventListener("mouseout", () => {
            sideModal.style.display = 'none'; // Hide the modal
        });

        coach.textContent = "Best Head Coach: Larry Brown"
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
//  });