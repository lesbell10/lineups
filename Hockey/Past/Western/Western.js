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
    FL.textContent = "Rakell";
    FC.textContent = "Getzlaf";
    FR.textContent = "Perry";
    DL.textContent = "Fowler";
    DR.textContent = "H Lindholm";
    G.textContent = "Gibson";

    smallpic.src = "/hockey/img/logos/anaheim.gif";
}

if (selectedYear === "1") {
    FL.textContent = "Keller";
    FC.textContent = "Doan";
    FR.textContent = "Kessel";
    DL.textContent = "Ekman-Larsson";
    DR.textContent = "Yandle";

    smallpic.src = "/hockey/img/logos/arizona.gif";
}

if (selectedYear === "2") {
    FL.textContent = "Gaudreau";
    FC.textContent = "Monahan";
    FR.textContent = "M Tkachuk";
    DL.textContent = "Giordano";
    DR.textContent = "Brodie";
    G.textContent = "Kiprusoff";

    smallpic.src = "/hockey/img/logos/calgary.gif";
}

if (selectedYear === "3") {
    FL.textContent = "Hossa";
    FC.textContent = "Toews";
    DL.textContent = "Keith";
    DR.textContent = "Seabrook";
    G.textContent = "Crawford";

        smallpic.src = "/hockey/img/logos/chicago.gif";
}

if (selectedYear === "4") {
    FL.textContent = "Landeskog";
    FC.textContent = "MacKinnon";
    FR.textContent = "Rantanen";
    DL.textContent = "E Johnson";
    DR.textContent = "Barrie";
    G.textContent = "Varlamov";

        smallpic.src = "/hockey/img/logos/colorado.gif";
}


if (selectedYear === "5") {
    FL.textContent = "Benn";
    FC.textContent = "Seguin";
    FR.textContent = "Radulov";
    DL.textContent = "Klingberg";
    DR.textContent = "Heiskanen";
    G.textContent = "Bishop";

        smallpic.src = "/hockey/img/logos/dallas.gif";
}

if (selectedYear === "6") {
    FL.textContent = "Draisaitl";
    FC.textContent = "McDavid";
    FR.textContent = "Eberle";
    DL.textContent = "Klefbom";
    DR.textContent = "Nurse";
    G.textContent = "Talbot";

        smallpic.src = "/hockey/img/logos/edmonton.gif";
}

if (selectedYear === "7") {
    FL.textContent = "D Brown";
    FC.textContent = "Kopitar";
    FR.textContent = "Carter";
    DL.textContent = "Doughty";
    DR.textContent = "Muzzin";
    G.textContent = "Quick";

        smallpic.src = "/hockey/img/logos/los angeles.gif";
}

if (selectedYear === "8") {
    FL.textContent = "Parise";
    FC.textContent = "Koivu";
    FR.textContent = "Pominville";
    DL.textContent = "Suter";
    DR.textContent = "Spurgeon";
    G.textContent = "Dubnyk";
    
        smallpic.src = "/hockey/img/logos/minnesota.gif";
}

if (selectedYear === "9") {
    FL.textContent = "F Forsberg";
    FR.textContent = "Arvidsson";
    DL.textContent = "Josi";
    DR.textContent = "Weber";
    G.textContent = "Rinne";

        smallpic.src = "/hockey/img/logos/nashville.gif";
}

if (selectedYear === "10") {
    FL.textContent = "Couture";
    FC.textContent = "Thornton";
    FR.textContent = "Pavelski";
    DL.textContent = "Burns";
    DR.textContent = "Vlasic";
    G.textContent = "M Jones";

        smallpic.src = "/hockey/img/logos/san jose.gif";
}


if (selectedYear === "11") {

    FL.textContent = "Backes";
    FC.textContent = "O'Reilly";
    FR.textContent = "Tarasenko";
    DL.textContent = "Pietrangelo";
    DR.textContent = "Shattenkirk";
    G.textContent = "Binnington";

        smallpic.src = "/hockey/img/logos/st. louis.gif";
}

    if (selectedYear === "12") {
    
    FL.textContent = "D Sedin";
    FC.textContent = "H Sedin";
    FR.textContent = "Horvat";
    DL.textContent = "Edler";
    DR.textContent = "Bieksa";
    G.textContent = "Luongo";
        
        smallpic.src = "/hockey/img/logos/vancouver.gif";
}

    if (selectedYear === "13") {
    
    FL.textContent = "Marchessault";
    FC.textContent = "W Karlsson";
    FR.textContent = "Stone";
    DL.textContent = "Theodore";
    DR.textContent = "Schmidt";
    G.textContent = "Fleury";
        
        smallpic.src = "/hockey/img/logos/vegas.gif";
}

if (selectedYear === "14") {

    FL.textContent = "Connor";
    FC.textContent = "Scheifele";
    FR.textContent = "Wheeler";
    DL.textContent = "Byfuglien";
    DR.textContent = "Trouba";
    G.textContent = "Hellebuyck";

        smallpic.src = "/hockey/img/logos/winnipeg.gif";

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
    FL.textContent = "Rakell";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/rakelri01-2020.jpg";
    FC.textContent = "Getzlaf";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/getzlry01-2020.jpg";
    FR.textContent = "Perry";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/perryco01-2020.jpg";
    DL.textContent = "Fowler";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/fowleca01-2020.jpg";
    DR.textContent = "Lindholm";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lindhha01-2020.jpg";
    G.textContent = "Gibson";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gibsojo02-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/1736/thumbs/173616512014.gif";
}

if (selectedYear === 1) {
    FL.textContent = "Keller";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kellecl01-2020.jpg";
    FC.textContent = "Doan";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/doansh01-2015.jpg";
    FR.textContent = "Kessel";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kesseph01-2020.jpg";
    DL.textContent = "Ekman-Larsson";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ekmanol01-2020.jpg";
    DR.textContent = "Yandle";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/yandlke01-2020.jpg";
    G.textContent = "Smith";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/smithmi01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/5263/thumbs/526382732022.gif";
}

if (selectedYear === 2) {
    FL.textContent = "Gaudreau";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gaudrjo01-2020.jpg";
    FC.textContent = "Monahan";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/monahse01-2020.jpg";
    FR.textContent = "M Tkachuk";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tkachma01-2020.jpg";
    DL.textContent = "Giordano";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/giordma01-2020.jpg";
    DR.textContent = "Brodie";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/broditj01-2020.jpg";
    G.textContent = "Kiprusoff";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kiprumi01.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/5/thumbs/548202021.gif";
}

if (selectedYear === 3) {
    FL.textContent = "Hossa";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hossama01-2017.jpg";
    FC.textContent = "Toews";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/toewsjo01-2020.jpg";
    FR.textContent = "Kane";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kanepa01-2020.jpg";
    DL.textContent = "Keith";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/keithdu01-2020.jpg";
    DR.textContent = "Seabrook";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/seabrbr01-2020.jpg";
    G.textContent = "Crawford";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/crawfco01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/7/thumbs/56.gif";
}

if (selectedYear === 4) {
    FL.textContent = "Landeskog";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/landega01-2020.jpg";
    FC.textContent = "MacKinnon";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mackina01-2020.jpg";
    FR.textContent = "Rantanen";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/rantami01-2020.jpg";
    DL.textContent = "Johnson";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/johnser01-2020.jpg";
    DR.textContent = "Barrie";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/barrity01-2020.jpg";
    G.textContent = "Varlamov";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/varlasi01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/8/thumbs/64.gif";
}


if (selectedYear === 5) {
    FL.textContent = "Benn";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/bennja01-2020.jpg";
    FC.textContent = "Seguin";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/seguity01-2020.jpg";
    FR.textContent = "Radulov";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/radulal01-2020.jpg";
    DL.textContent = "Klingberg";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/klingjo01-2020.jpg";
    DR.textContent = "Heiskanen";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/heiskmi01-2020.jpg";
    G.textContent = "Bishop";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/bishobe01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/10/thumbs/1043322022.gif";
}

if (selectedYear === 6) {
    FL.textContent = "Draisaitl";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/draisle01-2020.jpg";
    FC.textContent = "McDavid";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mcdavco01-2020.jpg";
    FR.textContent = "Eberle";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/eberljo01-2020.jpg";
    DL.textContent = "Klefbom";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/klefbos01-2020.jpg";
    DR.textContent = "Nurse";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/nurseda01-2020.jpg";
    G.textContent = "Talbot";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/talboca01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/12/thumbs/1229852023.gif";
}

if (selectedYear === 7) {
    FL.textContent = "Brown";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/browndu01-2020.jpg";
    FC.textContent = "Kopitar";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kopitan01-2020.jpg";
    FR.textContent = "Carter";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/carteje01-2020.jpg";
    DL.textContent = "Doughty";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/doughdr01-2020.jpg";
    DR.textContent = "Muzzin";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/muzzija01-2020.jpg";
    G.textContent = "Quick";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/quickjo01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/14/thumbs/1422202020.gif";
}

if (selectedYear === 8) {
    FL.textContent = "Parise";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/parisza01-2020.jpg";
    FC.textContent = "Koivu";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/koivumi01-2020.jpg";
    FR.textContent = "Pominville";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pominja01-2017.jpg";
    DL.textContent = "Suter";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/suterry01-2020.jpg";
    DR.textContent = "Spurgeon";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/spurgja01-2020.jpg";
    G.textContent = "Dubnyk";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/dubnyde01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/15/thumbs/1588102014.gif";
}

if (selectedYear === 9) {
    FL.textContent = "Forsberg";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/forsbfi01-2020.jpg";
    FC.textContent = "Johansen";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/johanry01-2020.jpg";
    FR.textContent = "Arvidsson";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/arvidvi01-2020.jpg";
    DL.textContent = "Josi";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/josiro01-2020.jpg";
    DR.textContent = "Weber";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/webersh01-2020.jpg";
    G.textContent = "Rinne";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/rinnepe01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/17/thumbs/lvchw3qfsun2e7oc02kh2zxb6.gif";
}

if (selectedYear === 10) {
    FL.textContent = "Couture";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/coutulo01-2020.jpg";
    FC.textContent = "Thornton";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/thornjo01-2020.jpg";
    FR.textContent = "Pavelski";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/paveljo01-2020.jpg";
    DL.textContent = "Burns";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/burnsbr01-2020.jpg";
    DR.textContent = "Vlasic";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/vlasima01-2020.jpg";
    G.textContent = "Jones";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/jonesma02-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/26/thumbs/dmo1xf3z4pph27vmg3gf.gif";
}

if (selectedYear === 11) {

    FL.textContent = "Backes";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/backeda01-2020.jpg";
    FC.textContent = "O'Reilly";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/oreilry01-2020.jpg";
    FR.textContent = "Tarasenko";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tarasvl01-2020.jpg";
    DL.textContent = "Pietrangelo";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pietral01-2020.jpg";
    DR.textContent = "Shattenkirk";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/shattke01-2020.jpg";
    G.textContent = "Binnington";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/binnijo01-2020.jpg";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/1/25/thumbs/187.gif";
}

    if (selectedYear === 12) {
    
    FL.textContent = "D Sedin";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sedinda01-2017.jpg";
    FC.textContent = "H Sedin";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sedinhe01-2017.jpg";
    FR.textContent = "Horvat";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/horvabo01-2020.jpg";
    DL.textContent = "Edler";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/edleral01-2020.jpg";
    DR.textContent = "Bieksa";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/biekske01-2017.jpg";
    G.textContent = "Luongo";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/luongro01-2020.jpg";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/1/29/thumbs/2920842020.gif";
}

    if (selectedYear === 13) {
    
    FL.textContent = "Marchessault";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/audymjo01-2020.jpg";
    FC.textContent = "Karlsson";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/karlswi01-2020.jpg";
    FR.textContent = "Stone";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/stonema01-2020.jpg";
    DL.textContent = "Theodore";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/theodsh01-2020.jpg";
    DR.textContent = "Schmidt";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/schmina01-2020.jpg";
    G.textContent = "Fleury";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/fleurma01-2020.jpg";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/1/6114/thumbs/611426842018.gif";
}

if (selectedYear === 14) {

    FL.textContent = "Connor";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/connoky01-2020.jpg";
    FC.textContent = "Scheifele";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/scheima01-2020.jpg";
    FR.textContent = "Wheeler";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/wheelbl01-2020.jpg";
    DL.textContent = "Byfuglien";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/byfugdu01-2020.jpg";
    DR.textContent = "Trouba";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/troubja01-2020.jpg";
    G.textContent = "Hellebuyck";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/helleco01-2020.jpg";
    document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/1/3050/thumbs/z9qyy9xqoxfjn0njxgzoy2rwk.gif";
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