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
        FL.textContent = "Marchand";
        FC.textContent = "Zacha";
        FR.textContent = "Pastrnak";
        DL.textContent = "McAvoy";
        DR.textContent = "Carlo";
        G.textContent = "Ullmark";
            
        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/boston.gif";

        MainFetchPopUp("/hockey/present/eastern/json/boston.json");
    }
   if (selectedYear === "1") 
    {
        FL.textContent = "J Skinner";
        FC.textContent = "Thompson";
        FR.textContent = "Tuch";
        DL.textContent = "Dahlin";
        DR.textContent = "Power";
        G.textContent = "Luukkonen";
       
        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/buffalo.gif";
       
        MainFetchPopUp("/hockey/present/eastern/json/buffalo.json");
    }
    
    if (selectedYear === "2") {
        FL.textContent = "Svechnikov";
        FC.textContent = "Aho";
        FR.textContent = "Necas";
        DL.textContent = "Slavin";
        DR.textContent = "Burns";
        G.textContent = "Andersen";
            
        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/carolina.gif";
       
        MainFetchPopUp("/hockey/present/eastern/json/carolina.json");
    }

if (selectedYear === "3")
    {
        FL.textContent = "Gaudreau";
        FC.textContent = "K Johnson";
        FR.textContent = "Laine";
        DL.textContent = "Werenski";
        DR.textContent = "Provorov";
        G.textContent = "Merzlikins";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/columbus.gif";
       
        MainFetchPopUp("/hockey/present/eastern/json/columbus.json");
}

    if (selectedYear === "4") {
        FL.textContent = "Perron";
        FC.textContent = "Larkin";
        FR.textContent = "DeBrincat";
        DL.textContent = "Seider";
        DR.textContent = "Petry";
        G.textContent = "Husso";

        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/detroit.gif";
    
        MainFetchPopUp("/hockey/present/eastern/json/detroit.json");

    }

if (selectedYear === "5")
{
    FL.textContent = "Verhaeghe";
    FC.textContent = "Barkov";
    FR.textContent = "M Tkachuk";
    DL.textContent = "Ekblad";
    DR.textContent = "Montour";
    G.textContent = "Bobrovsky";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/florida.gif";
    
    MainFetchPopUp("/hockey/present/eastern/json/florida.json");
}

if (selectedYear === "6")
{
    FL.textContent = "Dach";
    FC.textContent = "Suzuki";
    FR.textContent = "Caufield";
    DL.textContent = "Matheson";
    DR.textContent = "Guhle";
    G.textContent = "J Allen";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/montreal.gif";
    
        MainFetchPopUp("/hockey/present/eastern/json/montreal.json");
}

if (selectedYear === "7")
{
    FL.textContent = "Bratt";
    FC.textContent = "J Hughes";
    FR.textContent = "Hischier";
    DL.textContent = "Hamilton";
    DR.textContent = "Siegenthaler";
    G.textContent = "Vanecek";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/new jersey.gif";
    
        MainFetchPopUp("/hockey/present/eastern/json/new jersey.json");
}

if (selectedYear === "8")
{
    FL.textContent = "Nelson";
    FC.textContent = "Barzal";
    FR.textContent = "Horvat";
    DL.textContent = "Pelech";
    DR.textContent = "Pulock";
    G.textContent = "Sorokin";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/ny islanders.gif";
    
        MainFetchPopUp("/hockey/present/eastern/json/ny islanders.json");
}

if (selectedYear === "9")
{
    FL.textContent = "Panarin";
    FC.textContent = "Zibanejad";
    FR.textContent = "Kreider";
    DL.textContent = "Fox";
    DR.textContent = "K Miller";
    G.textContent = "Shesterkin";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/ny rangers.gif";
    
        MainFetchPopUp("/hockey/present/eastern/json/ny rangers.json");
}

if (selectedYear === "10")
{
    FL.textContent = "B Tkachuk";
    FC.textContent = "Stutzle";
    FR.textContent = "Tarasenko";
    DL.textContent = "Chabot";
    DR.textContent = "Chychrun";
    G.textContent = "Korpisalo";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/ottawa.gif";
    
        MainFetchPopUp("/hockey/present/eastern/json/ottawa.json");
}

if (selectedYear === "11")
{
    FL.textContent = "Konecny";
    FC.textContent = "Couturier";
    FR.textContent = "Atkinson";
    DL.textContent = "Sanheim";
    DR.textContent = "York";
    G.textContent = "C Hart";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/philadelphia.gif";
    
        // MainFetchPopUp("/hockey/present/eastern/json/.json");
}

if (selectedYear === "12")
{
    FL.textContent = "Malkin";
    FC.textContent = "Crosby";
    FR.textContent = "Rust";
    DL.textContent = "Letang";
    DR.textContent = "Marino";
    G.textContent = "Jarry";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/pittsburgh.gif";
    
        // MainFetchPopUp("/hockey/present/eastern/json/.json");
}

if (selectedYear === "13")
{
    FL.textContent = "Stamkos";
    FC.textContent = "Point";
    FR.textContent = "Kucherov";
    DL.textContent = "Hedman";
    DR.textContent = "Cernak";
    G.textContent = "Vasilevskiy";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/tampa bay.gif";
    
        // MainFetchPopUp("/hockey/present/eastern/json/.json");
}

if (selectedYear === "14")
{
    FL.textContent = "Marner";
    FC.textContent = "Matthews";
    FR.textContent = "Nylander";
    DL.textContent = "Rielly";
    DR.textContent = "Brodie";
    G.textContent = "Samsonov";

    FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "/hockey/img/logos/toronto.gif";
    
        // MainFetchPopUp("/hockey/present/eastern/json/.json");
}
    
    if (selectedYear === "15")
    {
        FL.textContent = "Ovechkin";
        FC.textContent = "Kuznetsov";
        FR.textContent = "Wilson";
        DL.textContent = "Carlson";
        DR.textContent = "Fehervary";
        G.textContent = "Kuemper";
        
        FL2.src = "/hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "/hockey/img/logos/washington.gif";
       
            // MainFetchPopUp("/hockey/present/eastern/json/.json");
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
    FL.textContent = "Marchand";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/marchbr03-2020.jpg";
    FC.textContent = "Zacha";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/zachapa01-2020.jpg";
    FR.textContent = "Pastrnak";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pastrda01-2020.jpg";
    DL.textContent = "McAvoy";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mcavoch01-2020.jpg";
    DR.textContent = "Carlo";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/carlobr01-2020.jpg";
    G.textContent = "Ullmark";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ullmali01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/3/thumbs/venf9fmhgnsawnxxvehf.gif";
    }
   if (selectedYear === 1) 
{
    FL.textContent = "J Skinner";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/skinnje01-2020.jpg";
    FC.textContent = "Thompson";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/thompta01-2020.jpg";
    FR.textContent = "Tuch";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tuchal01-2020.jpg";
    DL.textContent = "Dahlin";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/dahlira01-2020.jpg";
    DR.textContent = "Power";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/powerow01-2022.jpg";
    G.textContent = "Luukkonen";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/luukkuk01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/4/thumbs/454932021.gif";
    }
    
    if (selectedYear === 2)
{
    FL.textContent = "Svechnikov";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/svechan01-2020.jpg";
    FC.textContent = "S Aho";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ahose01-2020.jpg";
    FR.textContent = "Necas";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/necasma01-2020.jpg";
    DL.textContent = "Slavin";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/slavija01-2020.jpg";
    DR.textContent = "Burns";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/burnsbr01-2020.jpg";
    G.textContent = "Andersen";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/anderfr01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/6/thumbs/fotih31tn5r345nufo5xxayh3.gif";
}

if (selectedYear === 3)
{
    FL.textContent = "Gaudreau";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/gaudrjo01-2020.jpg";
    FC.textContent = "K Johnson";
    FC2.src = "https://www.hockeydb.com/ihdb/photos/kent-johnson-2023-2330.jpg";
    FR.textContent = "Laine";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/lainepa01-2020.jpg";
    DL.textContent = "Werenski";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/werenza01-2020.jpg";
    DR.textContent = "Provorov";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/provoiv01-2020.jpg";
    G.textContent = "Merzlikins";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/merzlel01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/9/thumbs/jhepegs329pc7ugyypebl28wg.gif";
}

if (selectedYear === 4)
{
    FL.textContent = "Perron";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/perroda01-2020.jpg";
    FC.textContent = "Larkin";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/larkidy01-2020.jpg";
    FR.textContent = "DeBrincat";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/debrial01-2020.jpg";
    DL.textContent = "Seider";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/seidemo01-2020.jpg";
    DR.textContent = "Petry";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/petryje01-2020.jpg";
    G.textContent = "Husso";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hussovi01-2021.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/11/thumbs/yo3wysbjtagzmwj37tb11u0fh.gif";
}

if (selectedYear === 5)
{
    FL.textContent = "Verhaeghe";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/verhaca01-2020.jpg";
    FC.textContent = "Barkov";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/barkoal01-2020.jpg";
    FR.textContent = "Tkachuk";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tkachma01-2020.jpg";
    DL.textContent = "Ekblad";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ekblaaa01-2020.jpg";
    DR.textContent = "Montour";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/montobr01-2020.jpg";
    G.textContent = "Bobrovsky";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/bobrose01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/13/thumbs/1380782017.gif";
}

if (selectedYear === 6)
{
    FL.textContent = "Dach";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/dachki01-2020.jpg";
    FC.textContent = "Suzuki";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/suzukni01-2020.jpg";
    FR.textContent = "Caufield";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/caufico01-2020.jpg";
    DL.textContent = "Matheson";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/mathemi01-2020.jpg";
    DR.textContent = "Guhle";
    DR2.src = "https://www.hockeydb.com/ihdb/photos/kaiden-guhle-2024-45.jpg";
    G.textContent = "J Allen";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/allenja01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/16/full/montreal_canadiens_logo_primary_20001687.png";
}

if (selectedYear === 7)
{
    FL.textContent = "Bratt";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/brattje01-2020.jpg";
    FC.textContent = "J Hughes";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hugheja03-2020.jpg";
    FR.textContent = "Hischier";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hischni01-2020.jpg";
    DL.textContent = "D Hamilton";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hamildo01-2020.jpg";
    DR.textContent = "Siegenthaler";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/siegejo01-2020.jpg";
    G.textContent = "Vanecek";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/vanecvi01-2017.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/18/thumbs/32tfs723a3bes0p0hb4hgcy1u.gif";
}

if (selectedYear === 8)
{
    FL.textContent = "Nelson";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/nelsobr01-2020.jpg";
    FC.textContent = "Barzal";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/barzama01-2020.jpg";
    FR.textContent = "Horvat";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/horvabo01-2020.jpg";
    DL.textContent = "Pelech";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pelecad01-2020.jpg";
    DR.textContent = "Pulock";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pulocry01-2020.jpg";
    G.textContent = "Sorokin";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sorokil01-2021.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/19/thumbs/1939112018.gif";
}

if (selectedYear === 9)
{
    FL.textContent = "Panarin";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/panarar01-2020.jpg";
    FC.textContent = "Zibanejad";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/zibanmi01-2020.jpg";
    FR.textContent = "Kreider";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kreidch01-2020.jpg";
    DL.textContent = "Fox";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/foxad01-2020.jpg";
    DR.textContent = "K Miller";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/milleka01-2021.jpg";
    G.textContent = "Shesterkin";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/shestig01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/20/thumbs/144.gif";
}

if (selectedYear === 10)
{
    FL.textContent = "B Tkachuk";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tkachbr01-2020.jpg";
    FC.textContent = "Stützle";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/stuetti02-2021.jpg";
    FR.textContent = "Tarasenko";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/tarasvl01-2020.jpg";
    DL.textContent = "Chabot";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/chaboth01-2020.jpg";
    DR.textContent = "Chychrun";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/chychja01-2020.jpg";
    G.textContent = "Korpisalo";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/korpijo01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/21/thumbs/2111292021.gif";
}

if (selectedYear === 11)
{
    FL.textContent = "Konecny";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/konectr01-2020.jpg";
    FC.textContent = "Couturier";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/coutuse01-2020.jpg";
    FR.textContent = "Atkinson";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/atkinca01-2020.jpg";
    DL.textContent = "Sanheim";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/sanhetr01-2020.jpg";
    DR.textContent = "York";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/yorkca01-2020.jpg";
    G.textContent = "C Hart";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hartca01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/22/thumbs/2231452024.gif";
}

if (selectedYear === 12)
{
    FL.textContent = "Malkin";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/malkiev01-2020.jpg";
    FC.textContent = "Crosby";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/crosbsi01-2020.jpg";
    FR.textContent = "Rust";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/rustbr01-2020.jpg";
    DL.textContent = "Letang";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/letankr01-2020.jpg";
    DR.textContent = "Marino";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/marinjo01-2020.jpg";
    G.textContent = "Jarry";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/jarrytr01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/24/thumbs/2463622017.gif";
}

if (selectedYear === 13)
{
    FL.textContent = "Stamkos";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/stamkst01-2020.jpg";
    FC.textContent = "Point";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/pointbr01-2020.jpg";
    FR.textContent = "Kucherov";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kucheni01-2020.jpg";
    DL.textContent = "Hedman";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/hedmavi01-2020.jpg";
    DR.textContent = "Cernak";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/cernaer01-2020.jpg";
    G.textContent = "Vasilevskiy";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/vasilan02-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/27/thumbs/97hhvk8e5if0riesnex30etgz.gif";
}

if (selectedYear === 14)
{
    FL.textContent = "Marner";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/marnemi01-2020.jpg";
    FC.textContent = "Matthews";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/matthau01-2020.jpg";
    FR.textContent = "Nylander";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/nylanwi01-2020.jpg";
    DL.textContent = "Rielly";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/riellmo01-2020.jpg";
    DR.textContent = "Brodie";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/brodijo01-2020.jpg";
    G.textContent = "Campbell";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/campbja01-2020.jpg";
    smallpic.src = "https://content.sportslogos.net/logos/1/28/thumbs/2887612017.gif";
    }
    
    if (selectedYear === 15)
    {
    FL.textContent = "Ovechkin";
    FL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/ovechal01-2020.jpg";
    FC.textContent = "Kuznetsov";
    FC2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/kuzneev01-2020.jpg";
    FR.textContent = "Wilson";
    FR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/wilsoto01-2020.jpg";
    DL.textContent = "Carlson";
    DL2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/carlsjo01-2020.jpg";
    DR.textContent = "Fehervary";
    DR2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/feherma01-2020.jpg";
    G.textContent = "Samsonov";
    G2.src = "https://www.hockey-reference.com/req/202301051/images/headshots/samsoil01-2020.jpg";
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