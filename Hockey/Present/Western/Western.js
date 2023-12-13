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


if (selectedYear === "0")
{
    FL.textContent = "Killorn";
    FC.textContent = "Zegras";
    FR.textContent = "Terry";
    DL.textContent = "Drysdale";
    DR.textContent = "Fowler";
    G.textContent = "Gibson";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/anaheim.gif";

    MainFetchPopUp("/hockey/present/western/json/anaheim.json");

}

if (selectedYear === "1")
{
    FL.textContent = "Maccelli";
    FC.textContent = "Schmaltz";
    FR.textContent = "Keller";
    DL.textContent = "Dumba";
    DR.textContent = "Durzi";
    G.textContent = "Vejmelka";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";    

    smallpic.src = "/hockey/img/logos/arizona.gif";

    MainFetchPopUp("/hockey/present/western/json/arizona.json");

}

if (selectedYear === "2")
{
    FL.textContent = "Huberdeau";
    FC.textContent = "Kadri";
    FR.textContent = "E Lindholm";
    DL.textContent = "Weegar";
    DR.textContent = "Andersson";
    G.textContent = "Markstrom";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/calgary.gif";

    MainFetchPopUp("/hockey/present/western/json/calgary.json");

}

    if (selectedYear === "3") {
        
    FL.textContent = "Hall";
    FC.textContent = "Bedard";
    FR.textContent = "Raddysh";
    DL.textContent = "S Jones";
    DR.textContent = "C Murphy";
    G.textContent = "Mrazek";
    
    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";        
        
    smallpic.src = "/hockey/img/logos/chicago.gif";
        
    MainFetchPopUp("/hockey/present/western/json/chicago.json");

    
    FC2.style.width = '120px';
    FC2.style.objectFit = "cover";
}

if (selectedYear === "4")
{
    FL.textContent = "Landeskog";
    FC.textContent = "MacKinnon";
    FR.textContent = "Rantanen";
    DL.textContent = "Makar";
    DR.textContent = "D Toews";
    G.textContent = "Georgiev";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/colorado.gif";

    MainFetchPopUp("/hockey/present/western/json/colorado.json");
    
}

if (selectedYear === "5")
{
    FL.textContent = "J Robertson";
    FC.textContent = "Hintz";
    FR.textContent = "Pavelski";
    DL.textContent = "Heiskanen";
    DR.textContent = "Lindell";
    G.textContent = "Oettinger";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/dallas.gif";

    MainFetchPopUp("/hockey/present/western/json/dallas.json");

}

if (selectedYear === "6")
{
    FL.textContent = "Draisaitl";
    FC.textContent = "McDavid";
    FR.textContent = "Nugent-Hopkins";
    DL.textContent = "Ekholm";
    DR.textContent = "Nurse";
    G.textContent = "S Skinner";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/edmonton.gif";

    MainFetchPopUp("/hockey/present/western/json/edmomnton.json");

    }
    
    if (selectedYear === "7")
{
    FL.textContent = "Fiala";
    FC.textContent = "Kopitar";;
    DL.textContent = "Doughty";
    DR.textContent = "Anderson";
    G.textContent = "C Talbot";
        
    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";        
        
    smallpic.src = "/hockey/img/logos/los angeles.gif";
        
    MainFetchPopUp("/hockey/present/western/json/los angeles.json");

}

if (selectedYear === "8")
{
    FL.textContent = "Kaprisov";
    FC.textContent = "Eriksson Ek";
    FR.textContent = "Zuccarello";
    DL.textContent = "Brodin";
    DR.textContent = "Spurgeon";
    G.textContent = "Gustavsson";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/minnesota.gif";

    MainFetchPopUp("/hockey/present/western/json/minnesota.json");

    FL2.style.width = '120px';
    FL2.style.objectFit = "cover";
}

if (selectedYear === "9")
{
    FL.textContent = "F Forsberg";
    FC.textContent = "O'Reilly";
    FR.textContent = "Novak";
    DL.textContent = "Josi";
    DR.textContent = "McDonagh";
    G.textContent = "Saros";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/nashville.gif";

    MainFetchPopUp("/hockey/present/western/json/nashville.json");

}

if (selectedYear === "10")
{
    FL.textContent = "Hertl";
    FC.textContent = "Couture";
    FR.textContent = "Duclair";
    DL.textContent = "Vlasic";
    DR.textContent = "Ferraro";
    G.textContent = "Kahkonen";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/san jose.gif";

    MainFetchPopUp("/hockey/present/western/json/san jose.json");

}

if (selectedYear === "11")
{
    FL.textContent = "McCann";
    FC.textContent = "Beniers";
    FR.textContent = "Eberle";
    DL.textContent = "Dunn";
    DR.textContent = "A Larsson";
    G.textContent = "Grubauer";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/seattle.gif";

    MainFetchPopUp("/hockey/present/western/json/seattle.json");

}
    
    if (selectedYear === "12")
{
    FL.textContent = "Buchnevic";
    FC.textContent = "Thomas";
    FR.textContent = "Kyrou";
    DL.textContent = "Krug";
    DR.textContent = "Parayko";
    G.textContent = "Binnington";
        
    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";        
        
    smallpic.src = "/hockey/img/logos/st. louis.gif";
        
    MainFetchPopUp("/hockey/present/western/json/st. louis.json");

}
    if (selectedYear === "13")
{
    FL.textContent = "JT Miller";
    FC.textContent = "Pettersson";;
    FR.textContent = "Kuzmenko";
    DL.textContent = "Q Hughes";
    DR.textContent = "Hronek";;
    G.textContent = "Demko";
        
    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";        
        
    smallpic.src = "/hockey/img/logos/vancouver.gif";
        
    MainFetchPopUp("/hockey/present/western/json/vancouver.json");

    
    FR2.style.width = '120px';
    FR2.style.objectFit = "cover";
}

if (selectedYear === "14")
{
    FL.textContent = "Marchessault";
    FC.textContent = "Eichel";
    FR.textContent = "Stone";
    DL.textContent = "Theodore";
    DR.textContent = "Pietrangelo";
    G.textContent = "Lehner";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/vegas.gif";

    MainFetchPopUp("/hockey/present/western/json/vegas.json");

}

if (selectedYear === "15")
{
    FL.textContent = "Connor";
    FC.textContent = "Scheifele";
    FR.textContent = "Ehlers";
    DL.textContent = "Morrissey";
    DR.textContent = "Pionk";
    G.textContent = "Hellebuyck";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/winnipeg.gif";

    MainFetchPopUp("/hockey/present/western/json/winnipeg.json");
    
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
    
  if (selectedYear === 0)
{
    FL.textContent = "Killorn";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/killoal01-2020.jpg";
    FC.textContent = "Zegras";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/zegratr01-2021.jpg";
    FR.textContent = "Terry";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/terrytr01-2020.jpg";
    DL.textContent = "Drysdale";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/drysdja01-2021.jpg";
    DR.textContent = "Fowler";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/fowleca01-2020.jpg";
    G.textContent = "Gibson";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gibsojo02-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/1736/thumbs/173616512014.gif";
}

if (selectedYear === 1)
{
    FL.textContent = "Maccelli";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/maccema01-2022.jpg";
    FC.textContent = "Schmaltz";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/schmani01-2020.jpg";
    FR.textContent = "Keller";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kellecl01-2020.jpg";
    DL.textContent = "Dumba";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/dumbama01-2020.jpg";
    DR.textContent = "Durzi";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/durzise01-2020.jpg";
    G.textContent = "Vejmelka";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/vejmeka01-2022.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/5263/thumbs/526382732022.gif";
}

if (selectedYear === 2)
{
    FL.textContent = "Huberdeau";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/huberjo01-2020.jpg";
    FC.textContent = "Kadri";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kadrina01-2020.jpg";
    FR.textContent = "E Lindholm";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lindhel01-2020.jpg";
    DL.textContent = "Weegar";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/weegama01-2020.jpg";
    DR.textContent = "Andersson";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/anderra01-2020.jpg";
    G.textContent = "Markstrom";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/marksja02-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/5/thumbs/548202021.gif";
}

    if (selectedYear === 3){
    FL.textContent = "Hall";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hallta02-2020.jpg";
    FC.textContent = "C Bedard";
    FC2.src = "https://www.hockeydb.com/ihdb/photos/connor-bedard-2023-7737.jpg";
    FR.textContent = "Raddysh";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/raddyta01-2016.jpg";
    DL.textContent = "S Jones";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/jonesse01-2020.jpg";
    DR.textContent = "C Murphy";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/murphco02-2020.jpg";
    G.textContent = "Mrazek";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mrazepe01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/7/thumbs/56.gif";
}

if (selectedYear === 4)
{
    FL.textContent = "Landeskog";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/landega01-2020.jpg";
    FC.textContent = "MacKinnon";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mackina01-2020.jpg";
    FR.textContent = "Rantanen";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/rantami01-2020.jpg";
    DL.textContent = "Makar";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/makarca01-2020.jpg";
    DR.textContent = "D Toews";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/toewsde01-2020.jpg";
    G.textContent = "Georgiev";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/georgal01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/8/thumbs/64.gif";
}

if (selectedYear === 5)
{
    FL.textContent = "J Robertson";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/roberja01-2020.jpg";
    FC.textContent = "Hintz";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hintzro01-2020.jpg";
    FR.textContent = "Pavelski";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/paveljo01-2020.jpg";
    DL.textContent = "Heiskanen";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/heiskmi01-2020.jpg";
    DR.textContent = "Lindell";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lindees01-2020.jpg";
    G.textContent = "Oettinger";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/oettija01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/10/thumbs/1043322022.gif";
}

if (selectedYear === 6)
{
    FL.textContent = "Draisaitl";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/draisle01-2020.jpg";
    FC.textContent = "McDavid";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mcdavco01-2020.jpg";
    FR.textContent = "Nugent-Hopkins";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/nugenry01-2020.jpg";
    DL.textContent = "Ekholm";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ekholma01-2020.jpg";
    DR.textContent = "Nurse";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/nurseda01-2020.jpg";
    G.textContent = "S Skinner";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/skinnst01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/12/thumbs/1229852023.gif";
    }
    
    if (selectedYear === 7)
{
    FL.textContent = "Fiala";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/fialake01-2020.jpg";
    FC.textContent = "Kopitar";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kopitan01-2020.jpg";
    FR.textContent = "Dubois";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/duboipi01-2020.jpg";
    DL.textContent = "Doughty";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/doughdr01-2020.jpg";
    DR.textContent = "Anderson";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/andermi02-2020.jpg";
    G.textContent = "Talbot";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/talboca01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/14/thumbs/1422202020.gif";
}

if (selectedYear === 8)
{
    FL.textContent = "Kaprisov";
    FL2.src = "https://www.hockeydb.com/ihdb/photos/kirill-kaprizov-2023-2331.jpg";
    FC.textContent = "Eriksson Ek";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/eriksjo02-2020.jpg";
    FR.textContent = "Zuccarello";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/zuccama01-2020.jpg";
    DL.textContent = "Brodin";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/brodijo01-2020.jpg";
    DR.textContent = "Spurgeon";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/spurgja01-2020.jpg";
    G.textContent = "Gustavsson";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gustafi01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/15/thumbs/1588102014.gif";
}

if (selectedYear === 9)
{
    FL.textContent = "Forsberg";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/forsbfi01-2020.jpg";
    FC.textContent = "R O'Reilly";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/oreilry01-2020.jpg";
    FR.textContent = "Novak";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/novakth01-2015.jpg";
    DL.textContent = "Josi";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/josiro01-2020.jpg";
    DR.textContent = "McDonagh";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mcdonry01-2020.jpg";
    G.textContent = "Saros";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sarosju01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/17/thumbs/lvchw3qfsun2e7oc02kh2zxb6.gif";
}

if (selectedYear === 10)
{
    FL.textContent = "Hertl";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hertlto01-2020.jpg";
    FC.textContent = "Couture";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/coutulo01-2020.jpg";
    FR.textContent = "Duclair";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/duclaan01-2020.jpg";
    DL.textContent = "Vlasic";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/vlasima01-2020.jpg";
    DR.textContent = "Ferraro";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ferrama01-2020.jpg";
    G.textContent = "Kähkönen";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kahkoka01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/26/thumbs/dmo1xf3z4pph27vmg3gf.gif";
}

if (selectedYear === 11)
{
    FL.textContent = "McCann";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mccanja01-2020.jpg";
    FC.textContent = "Beniers";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/beniema01-2022.jpg";
    FR.textContent = "Eberle";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/eberljo01-2020.jpg";
    DL.textContent = "Dunn";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/dunnvi02-2020.jpg";
    DR.textContent = "A Larsson";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/larssad01-2020.jpg";
    G.textContent = "Grubauer";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/grubaph01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/6740/full/seattle_kraken_logo_primary_dark_20229947.png";
}
    
    if (selectedYear === 12)
{
    FL.textContent = "Buchnevic";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/buchnpa01-2020.jpg";
    FC.textContent = "Thomas";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/thomaro01-2020.jpg";
    FR.textContent = "Kyrou";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kyroujo01-2020.jpg";
    DL.textContent = "Krug";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/krugto01-2020.jpg";
    DR.textContent = "Parayko";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/parayco01-2020.jpg";
    G.textContent = "Binnington";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/binnijo01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/25/thumbs/187.gif";
}
    if (selectedYear === 13)
{
    FL.textContent = "JT Miller";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/millejt01-2020.jpg";
    FC.textContent = "Pettersson";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/petteel01-2020.jpg";
    FR.textContent = "Kuzmenko";
    FR2.src = "https://www.hockeydb.com/ihdb/photos/andrei-kuzmenko-2023-39.jpg";
    DL.textContent = "Q Hughes";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hughequ01-2020.jpg";
    DR.textContent = "Hronek";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hronefi01-2020.jpg";
    G.textContent = "Demko";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/demkoth01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/29/thumbs/2920842020.gif";
}

if (selectedYear === 14)
{
    FL.textContent = "Marchessault";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/audymjo01-2020.jpg";
    FC.textContent = "Eichel";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/eicheja01-2020.jpg";
    FR.textContent = "Stone";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/stonema01-2020.jpg";
    DL.textContent = "Theodore";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/theodsh01-2020.jpg";
    DR.textContent = "Pietrangelo";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pietral01-2020.jpg";
    G.textContent = "Lehner";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lehnero01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/6114/thumbs/611426842018.gif";
}

if (selectedYear === 15)
{
    FL.textContent = "K Connor";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/connoky01-2020.jpg";
    FC.textContent = "Scheifele";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/scheima01-2020.jpg";
    FR.textContent = "Ehlers";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ehlerni01-2020.jpg";
    DL.textContent = "Morrissey";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/morrijo04-2020.jpg";
    DR.textContent = "Pionk";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pionkne01-2020.jpg";
    G.textContent = "Hellebuyck";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/helleco01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/3050/thumbs/z9qyy9xqoxfjn0njxgzoy2rwk.gif";
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