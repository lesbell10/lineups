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

        FL.textContent = "Marchand";
        FC.textContent = "Bergeron";
        FR.textContent = "Pastrnak";
        DL.textContent = "Chara";
        DR.textContent = "Krug";
        G.textContent = "Rask";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/boston.gif";
    }

    if (selectedYear === "1") {
        FL.textContent = "Vanek";
        FC.textContent = "Eichel";
        FR.textContent = "O'Reilly";
        DL.textContent = "Ristolainen";
        DR.textContent = "Myers";
        G.textContent = "R Miller";

        smallpic.src = "/hockey/img/logos/buffalo.gif";
    }

    if (selectedYear === "2") {
        FL.textContent = "J Skinner";
        FC.textContent = "E Staal";
        FR.textContent = "Aho";
        DL.textContent = "Slavin";
        DR.textContent = "Faulk";
        G.textContent = "C Ward";

        smallpic.src = "/hockey/img/logos/carolina.gif";
    }

    if (selectedYear === "3") {
        FL.textContent = "Panarin";
        FC.textContent = "M Foligno";
        FR.textContent = "Atkinson";
        DL.textContent = "J Johnson";
        DR.textContent = "S Jones";
        G.textContent = "Bobrovsky";

        smallpic.src = "/hockey/img/logos/columbus.gif";
    }

    if (selectedYear === "4") {
        FL.textContent = "Zetterberg";
        FC.textContent = "Datsyuk";
        FR.textContent = "Larkin";
        DL.textContent = "Lidstrom";
        DR.textContent = "Kronwall";
        G.textContent = "Howard";

        smallpic.src = "/hockey/img/logos/detroit.gif";
    }

    if (selectedYear === "5") {
        FL.textContent = "Huberdeau";
        FC.textContent = "Barkov";
        FR.textContent = "Hoffman";
        DL.textContent = "Ekblad";
        DR.textContent = "Yandle";
        G.textContent = "Luongo";

        smallpic.src = "/hockey/img/logos/florida.gif";
        
    } if (selectedYear === "6") {
        FL.textContent = "Pacioretty";
        FC.textContent = "Tatar";
        FR.textContent = "Gallagher";
        DL.textContent = "Subban";
        DR.textContent = "Weber";
        G.textContent = "Price";

        smallpic.src = "/hockey/img/logos/montreal.gif";
      
    } if (selectedYear === "7") {
        FL.textContent = "Hall";
        FC.textContent = "Henrique";
        FR.textContent = "Hischier";
        DL.textContent = "A Greene";
        DR.textContent = "Subban";
        G.textContent = "Schneider";

        smallpic.src = "/hockey/img/logos/new jersey.gif";
      
    } if (selectedYear === "8") {
        FL.textContent = "Lee";
        FC.textContent = "Tavares";
        FR.textContent = "Barzal";
        DL.textContent = "Leddy";
        DR.textContent = "Boychuk";
        G.textContent = "Greiss";

        smallpic.src = "/hockey/img/logos/ny islanders.gif";
      
    } if (selectedYear === "9") {
        FL.textContent = "Panarin";
        FC.textContent = "Stepan";
        FR.textContent = "Zuccarello";
        DL.textContent = "McDonagh";
        DR.textContent = "M Staal";
        G.textContent = "Lundqvist";

        smallpic.src = "/hockey/img/logos/ny rangers.gif";
      
    } if (selectedYear === "10") {
        FL.textContent = "Hoffman";
        FC.textContent = "Spezza";
        FR.textContent = "Stone";
        DL.textContent = "E Karlsson";
        DR.textContent = "Chabot";
        G.textContent = "Anderson";

        smallpic.src = "/hockey/img/logos/ottawa.gif";
      
    } if (selectedYear === "11") {
        FL.textContent = "Giroux";;
        FC.textContent = "Couturier";
        FR.textContent = "Voracek";
        DL.textContent = "Timonen";
        DR.textContent = "Provorov";
        G.textContent = "Mason";

        smallpic.src = "/hockey/img/logos/philadelphia.gif";
    }
    
    if (selectedYear === "12") {
        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Kessel";
        DL.textContent = "Letang";
        DR.textContent = "P Martin";
        G.textContent = "Fleury";

        smallpic.src = "/hockey/img/logos/pittsburgh.gif";
        
    } if (selectedYear === "13") {
        FL.textContent = "St Louis";
        FC.textContent = "Stamkos";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "McDonagh";
        G.textContent = "Vasilevskiy";

        smallpic.src = "/hockey/img/logos/tampa bay.gif";
    
    } if (selectedYear === "14") {
        FL.textContent = "Tavares";
        FC.textContent = "Matthews";
        FR.textContent = "Marner";
        DL.textContent = "Rielly";
        DR.textContent = "Phaneuf";
        G.textContent = "Andersen";

        smallpic.src = "/hockey/img/logos/toronto.gif";
    
    }
    
    if (selectedYear === "15") {
        FL.textContent = "Ovechkin";
        FC.textContent = "Backstrom";
        FR.textContent = "Kuznetsov";
        DL.textContent = "Carlson";
        DR.textContent = "Green";
        G.textContent = "Holtby";

        smallpic.src = "/hockey/img/logos/washington.gif";
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
            FL.textContent = "Marchand";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/marchbr03-2020.jpg";
            FC.textContent = "Bergeron";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/bergepa01-2020.jpg";
            FR.textContent = "Pastrnak";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pastrda01-2020.jpg";
            DL.textContent = "Chara";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/charazd01-2020.jpg";
            DR.textContent = "Krug";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/krugto01-2020.jpg";
            G.textContent = "Rask";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/rasktu01-2020.jpg";
            document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/1/3/thumbs/venf9fmhgnsawnxxvehf.gif";
        }

        if (selectedYear === 1) {
            FL.textContent = "Vanek";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/vanekth01-2015.jpg";
            FC.textContent = "Eichel";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/eicheja01-2020.jpg";
            FR.textContent = "O'Reilly";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/oreilry01-2020.jpg";
            DL.textContent = "Ristolainen";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ristora01-2020.jpg";
            DR.textContent = "Myers";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/myersty01-2020.jpg";
            G.textContent = "Miller";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/millery01-2020.jpg";
            document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/1/4/thumbs/454932021.gif";
        }

        if (selectedYear === 2) {
            FL.textContent = "Skinner";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/skinnje01-2020.jpg";
            FC.textContent = "E Staal";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/staaler01-2020.jpg";
            FR.textContent = "Aho";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ahose01-2020.jpg";
            DL.textContent = "Slavin";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/slavija01-2020.jpg";
            DR.textContent = "Faulk";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/faulkju01-2020.jpg";
            G.textContent = "Ward";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/wardca01-2017.jpg";
            document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/1/6/thumbs/fotih31tn5r345nufo5xxayh3.gif";
        }

        if (selectedYear === 3) {
            FL.textContent = "Panarin";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/panarar01-2020.jpg";
            FC.textContent = "Foligno";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/foligni01-2020.jpg";
            FR.textContent = "Atkinson";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/atkinca01-2020.jpg";
            DL.textContent = "Johnson";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/johnsja02-2020.jpg";
            DR.textContent = "Jones";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/jonesse01-2020.jpg";
            G.textContent = "Bobrovsky";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/bobrose01-2020.jpg";
            document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/1/9/thumbs/jhepegs329pc7ugyypebl28wg.gif";
        }

        if (selectedYear === 4) {
            FL.textContent = "Zetterberg";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/zettehe01-2017.jpg";
            FC.textContent = "Datsyuk";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/datsypa01-2015.jpg";
            FR.textContent = "Larkin";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/larkidy01-2020.jpg";
            DL.textContent = "Lidstrom";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lidstni01.jpg";
            DR.textContent = "Kronwall";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kronwni01-2017.jpg";
            G.textContent = "Howard";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/howarja02-2020.jpg";
            document.getElementById("smallpic").src = "https://content.sportslogos.net/logos/1/11/thumbs/yo3wysbjtagzmwj37tb11u0fh.gif";
        }

        if (selectedYear === 5) {
            FL.textContent = "Huberdeau";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/huberjo01-2020.jpg";
            FC.textContent = "Barkov";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/barkoal01-2020.jpg";
            FR.textContent = "Hoffman";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hoffmmi02-2020.jpg";
            DL.textContent = "Ekblad";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ekblaaa01-2020.jpg";
            DR.textContent = "Yandle";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/yandlke01-2020.jpg";
            G.textContent = "Luongo";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/luongro01-2020.jpg";
            smallpic.src = "https://content.sportslogos.net/logos/1/13/thumbs/1380782017.gif";
        
        } if (selectedYear === 6) {
            FL.textContent = "Pacioretty";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pacioma01-2020.jpg";
            FC.textContent = "Tatar";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tatarto01-2020.jpg";
            FR.textContent = "Gallagher";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gallabr01-2020.jpg";
            DL.textContent = "Subban";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/subbapk01-2020.jpg";
            DR.textContent = "Weber";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/webersh01-2020.jpg";
            G.textContent = "Price";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/priceca01-2020.jpg";
            smallpic.src = "https://content.sportslogos.net/logos/1/16/thumbs/124.gif";
      
        } if (selectedYear === 7) {
            FL.textContent = "Hall";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hallta02-2020.jpg";
            FC.textContent = "Henrique";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/henriad01-2020.jpg";
            FR.textContent = "Hischier";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hischni01-2020.jpg";
            DL.textContent = "Greene";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/greenan01-2020.jpg";
            DR.textContent = "Subban";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/subbapk01-2020.jpg";
            G.textContent = "Schneider";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/schneco01-2020.jpg";
            smallpic.src = "https://content.sportslogos.net/logos/1/18/thumbs/32tfs723a3bes0p0hb4hgcy1u.gif";
      
        } if (selectedYear === 8) {
            FL.textContent = "Lee";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/leean01-2020.jpg";
            FC.textContent = "Tavares";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tavarjo01-2020.jpg";
            FR.textContent = "Barzal";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/barzama01-2020.jpg";
            DL.textContent = "Leddy";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/leddyni01-2020.jpg";
            DR.textContent = "Boychuk";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/boychjo01-2020.jpg";
            G.textContent = "Greiss";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/greisth01-2020.jpg";
            smallpic.src = "https://content.sportslogos.net/logos/1/19/thumbs/1939112018.gif";
      
        } if (selectedYear === 9) {
            FL.textContent = "Panarin";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/panarar01-2020.jpg";
            FC.textContent = "Stepan";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/stepade01-2020.jpg";
            FR.textContent = "Zuccarello";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/zuccama01-2020.jpg";
            DL.textContent = "McDonagh";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mcdonry01-2020.jpg";
            DR.textContent = "M Staal";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/staalma01-2020.jpg";
            G.textContent = "Lundqvist";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lundqhe01-2020.jpg";
            smallpic.src = "https://content.sportslogos.net/logos/1/20/thumbs/144.gif";
      
        } if (selectedYear === 10) {
            FL.textContent = "Hoffman";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hoffmmi02-2020.jpg";
            FC.textContent = "Spezza";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/spezzja01-2020.jpg";
            FR.textContent = "Stone";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/stonema01-2020.jpg";
            DL.textContent = "Karlsson";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/karlser01-2020.jpg";
            DR.textContent = "Chabot";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/chaboth01-2020.jpg";
            G.textContent = "Anderson";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/andercr01-2020.jpg";
            smallpic.src = "https://content.sportslogos.net/logos/1/21/thumbs/2111292021.gif";
      
        } if (selectedYear === 11) {
            FL.textContent = "Giroux";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/giroucl01-2020.jpg";
            FC.textContent = "Couturier";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/coutuse01-2020.jpg";
            FR.textContent = "Voracek";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/voracja01-2020.jpg";
            DL.textContent = "Timonen";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/timonki01-2015.jpg";
            DR.textContent = "Provorov";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/provoiv01-2020.jpg";
            G.textContent = "Mason";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/masonst01-2017.jpg";
            smallpic.src = "https://content.sportslogos.net/logos/1/22/thumbs/2231452024.gif";
        }
    
        if (selectedYear === 12) {
            FL.textContent = "Malkin";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/malkiev01-2020.jpg";
            FC.textContent = "Crosby";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/crosbsi01-2020.jpg";
            FR.textContent = "Kessel";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kesseph01-2020.jpg";
            DL.textContent = "Letang";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/letankr01-2020.jpg";
            DR.textContent = "Martin";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/martipa01-2017.jpg";
            G.textContent = "Fleury";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/fleurma01-2020.jpg";
            smallpic.src = "https://content.sportslogos.net/logos/1/24/thumbs/2463622017.gif";
        
        } if (selectedYear === 13) {
            FL.textContent = "St Louis";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/stlouma01.jpg";
            FC.textContent = "Stamkos";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/stamkst01-2020.jpg";
            FR.textContent = "Kucherov";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kucheni01-2020.jpg";
            DL.textContent = "Hedman";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hedmavi01-2020.jpg";
            DR.textContent = "McDonagh";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mcdonry01-2020.jpg";
            G.textContent = "Vasilevskiy";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/vasilan02-2020.jpg";
            smallpic.src = "https://content.sportslogos.net/logos/1/27/thumbs/97hhvk8e5if0riesnex30etgz.gif";
    
        } if (selectedYear === 14) {
            FL.textContent = "Tavares";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tavarjo01-2020.jpg";
            FC.textContent = "Matthews";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/matthau01-2020.jpg";
            FR.textContent = "Marner";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/marnemi01-2022.jpg";
            DL.textContent = "Rielly";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/riellmo01-2020.jpg";
            DR.textContent = "Phaneuf";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/phanedi01-2017.jpg";
            G.textContent = "Andersen";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/anderfr01-2020.jpg";
            smallpic.src = "https://content.sportslogos.net/logos/1/28/thumbs/2887612017.gif";
    
        } if (selectedYear === 15) {
            FL.textContent = "Ovechkin";
            FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ovechal01-2020.jpg";
            FC.textContent = "Backstrom";
            FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/backsni02-2020.jpg";
            FR.textContent = "Kuznetsov";
            FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kuzneev01-2020.jpg";
            DL.textContent = "Carlson";
            DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/carlsjo01-2020.jpg";
            DR.textContent = "Green";
            DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/greenmi03-2020.jpg";
            G.textContent = "Holtby";
            G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/holtbbr01-2021a.jpg";
            smallpic.src = "https://content.sportslogos.net/logos/1/30/thumbs/llrs2zxi127vkqgcsvfb.gif";
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