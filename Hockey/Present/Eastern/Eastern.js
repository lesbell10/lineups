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
    
        MainFetchPopUp("/hockey/present/eastern/json/philadelphia.json");
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
    
        MainFetchPopUp("/hockey/present/eastern/json/pittsburgh.json");
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
    
        MainFetchPopUp("/hockey/present/eastern/json/tampa bay.json");
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
    
        MainFetchPopUp("/hockey/present/eastern/json/toronto.json");
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
       
            MainFetchPopUp("/hockey/present/eastern/json/washington.json");
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
   if (selectedYear === 1) 
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
    
    if (selectedYear === 2) {
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

if (selectedYear === 3)
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

    if (selectedYear === 4) {
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

if (selectedYear === 5)
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

if (selectedYear === 6)
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

if (selectedYear == 7)
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

if (selectedYear === 8)
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

if (selectedYear === 9)
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

if (selectedYear === 10)
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

if (selectedYear === 11)
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
    
        MainFetchPopUp("/hockey/present/eastern/json/philadelphia.json");
}

if (selectedYear === 12)
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
    
        MainFetchPopUp("/hockey/present/eastern/json/pittsburgh.json");
}

if (selectedYear === 13)
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
    
        MainFetchPopUp("/hockey/present/eastern/json/tampa bay.json");
}

if (selectedYear === 14)
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
    
        MainFetchPopUp("/hockey/present/eastern/json/toronto.json");
}
    
    if (selectedYear === 15)
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
       
            MainFetchPopUp("/hockey/present/eastern/json/washington.json");
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