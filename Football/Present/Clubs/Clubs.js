const yearSelector = document.getElementById("yearSelector");
const STC = document.getElementById("STC");
const STC2 = document.getElementById("STC2");
const FR = document.getElementById("FR");
const FR2 = document.getElementById("FR2");
const AMC = document.getElementById("AMC");
const AMC2 = document.getElementById("AMC2");
const FL = document.getElementById("FL");
const FL2 = document.getElementById("FL2");
const CMR = document.getElementById("CMR");
const CMR2 = document.getElementById("CMR2");
const CML = document.getElementById("CML");
const CML2 = document.getElementById("CML2");
const DR = document.getElementById("DR");
const DR2 = document.getElementById("DR2");
const DCR = document.getElementById("DCR");
const DCR2 = document.getElementById("DCR2");
const DCL = document.getElementById("DCL");
const DCL2 = document.getElementById("DCL2");
const DL = document.getElementById("DL");
const DL2 = document.getElementById("DL2");
const GK = document.getElementById("GK");
const GK2 = document.getElementById("GK2");
const smallpic = document.getElementById("smallpic");
const sideModal = document.querySelector(".side-modal")

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    
    if (selectedYear === "10") {

        STC.textContent = "Haaland";
        FR.textContent = "B Silva";
        AMC.textContent = "Foden";
        FL.textContent = "Grealish";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Rodri";
        DR.textContent = "Walker";
        DCR.textContent = "R Dias";
        DCL.textContent = "Stones";
        DL.textContent = "Gvardiol";
        GK.textContent = "Ederson";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/man city.webp";
        
        MainFetchPopUp("/football/present/clubs/json/manchester city.json");

    }

    if (selectedYear === "14") {

        STC.textContent = "Rodrygo"
        FR.textContent = "Valverde"
        AMC.textContent = "Bellingham"
        FL.textContent = "Vinicius Jr"
        CMR.textContent = "Kroos"
        CML.textContent = "Tchouameni"
        DR.textContent = "Carvajal"
        DCR.textContent = "E Militao"
        DCL.textContent = "Alaba"
        DL.textContent = "Camavinga"
        GK.textContent = "Kepa"

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/real madrid.webp";
        
        MainFetchPopUp("/football/present/clubs/json/real madrid.json");


    }

    if (selectedYear === "13") {
        STC.textContent = "G Ramos"
        FR.textContent = "O Dembele"
        AMC.textContent = "Asensio"
        FL.textContent = "Mbappe"
        CMR.textContent = "Vitinha"
        CML.textContent = "Ugarte"
        DR.textContent = "Hakimi"
        DCR.textContent = "Marquinhos"
        DCL.textContent = "Skriniar"
        DL.textContent = "L Hernandez"
        GK.textContent = "Donnarumma"

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/paris sg.webp";

        MainFetchPopUp("/football/present/clubs/json/paris saint-germain.json");


    }

    if (selectedYear === "5") {
        
        STC.textContent = "Kane"
        FR.textContent = "Sane"
        AMC.textContent = "Musiala"
        FL.textContent = "Coman"
        CMR.textContent = "Kimmich"
        CML.textContent = "Goretzka"
        DR.textContent = "Laimer"
        DCR.textContent = "de Ligt"
        DCL.textContent = "Min J"
        DL.textContent = "A Davies"
        GK.textContent = "Neuer"

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/bayern munich.webp";
        
        MainFetchPopUp("/football/present/clubs/json/bayern munich.json");

        
    }
    if (selectedYear === "9") {
        
        STC.textContent = "D Jota"
        FR.textContent = "Salah"
        AMC.textContent = "Gakpo"
        FL.textContent = "L Diaz"
        CMR.textContent = "Szoboszlai"
        CML.textContent = "Mac Allister"
        DR.textContent = "Alexander-A"
        DCR.textContent = "van Dijk"
        DCL.textContent = "Konate"
        DL.textContent = "Robertson"
        GK.textContent = "Alisson"

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/liverpool.webp";

        MainFetchPopUp("/football/present/clubs/json/liverpool.json");


    }

    if (selectedYear === "4") {
        STC.textContent = "Lewandowski"
        FR.textContent = "J Felix"
        AMC.textContent = "Pedri"
        FL.textContent = "Gavi"
        CMR.textContent = "Gundogan"
        CML.textContent = "F de Jong"
        DR.textContent = "Cancelo"
        DCR.textContent = "Kounde"
        DCL.textContent = "R Araujo"
        DL.textContent = "Balde"
        GK.textContent = "ter Stegen"

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";
        
        smallpic.src = "/football/img/logos/barcelona.webp";

        MainFetchPopUp("/football/present/clubs/json/barcelona.json");

    }

        if (selectedYear === "6") {
            STC.textContent = "N Jackson"
            FR.textContent = "Sterling"
            AMC.textContent = "Nkunku"
            FL.textContent = "Mudryk"
            CMR.textContent = "E Fernandez"
            CML.textContent = "Caicedo"
            DR.textContent = "R James"
            DCR.textContent = "T Silva"
            DCL.textContent = "Disasi"
            DL.textContent = "Chilwell"
            GK.textContent = "R Sanchez"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
            FR2.src = "/football/img/players/" + FR.textContent + ".webp";
            AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
            FL2.src = "/football/img/players/" + FL.textContent + ".webp";
            CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
            CML2.src = "/football/img/players/" + CML.textContent + ".webp";
            DR2.src = "/football/img/players/" + DR.textContent + ".webp";
            DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
            DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
            DL2.src = "/football/img/players/" + DL.textContent + ".webp";
            GK2.src = "/football/img/players/" + GK.textContent + ".webp";

            smallpic.src = "/football/img/logos/chelsea.webp";

            MainFetchPopUp("/football/present/clubs/json/chelsea.json");

        }

        if (selectedYear === "11") {
            STC.textContent = "Hojlund"
            FR.textContent = "Sancho"
            AMC.textContent = "B Fernandes"
            FL.textContent = "Rashford"
            CMR.textContent = "Eriksen"
            CML.textContent = "Casemiro"
            DR.textContent = "Dalot"
            DCR.textContent = "Varane"
            DCL.textContent = "Li Martinez"
            DL.textContent = "Shaw"
            GK.textContent = "Onana"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/man utd.webp";

        MainFetchPopUp("/football/present/clubs/json/manchester united.json");

    }
        if (selectedYear === "8") {
            STC.textContent = "Vlahovic"
            FR.textContent = "Chiesa"
            AMC.textContent = "Pogba"
            FL.textContent = "Kostic"
            CMR.textContent = "Locatelli"
            CML.textContent = "Rabiot"
            DR.textContent = "Danilo"
            DCR.textContent = "Bremer"
            DCL.textContent = "Gatti"
            DL.textContent = "A Sandro"
            GK.textContent = "Szczesny"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/juventus.webp";

        MainFetchPopUp("/football/present/clubs/json/juventus.json");


        }

        if (selectedYear === "1") {
            STC.textContent = "G Jesus"
            FR.textContent = "Saka"
            AMC.textContent = "Odegaard"
            FL.textContent = "Martinelli"
            CMR.textContent = "Partey"
            CML.textContent = "Rice"
            DR.textContent = "B White"
            DCR.textContent = "Saliba"
            DCL.textContent = "Gabriel"
            DL.textContent = "Zinchenko"
            GK.textContent = "D Raya"
            
            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
            FR2.src = "/football/img/players/" + FR.textContent + ".webp";
            AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
            FL2.src = "/football/img/players/" + FL.textContent + ".webp";
            CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
            CML2.src = "/football/img/players/" + CML.textContent + ".webp";
            DR2.src = "/football/img/players/" + DR.textContent + ".webp";
            DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
            DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
            DL2.src = "/football/img/players/" + DL.textContent + ".webp";
            GK2.src = "/football/img/players/" + GK.textContent + ".webp";

            smallpic.src = "/football/img/logos/arsenal.webp";
                
            MainFetchPopUp("/football/present/clubs/json/arsenal.json");
        
        }
        if (selectedYear === "7") {
            STC.textContent = "La Martinez"
            FR.textContent = "Cuadrado"
            AMC.textContent = "Mkhitaryan"
            FL.textContent = "M Thuram"
            CMR.textContent = "Barella"
            CML.textContent = "Calhanoglu"
            DR.textContent = "Pavard"
            DCR.textContent = "de Vrij"
            DCL.textContent = "Bastoni"
            DL.textContent = "Dimarco"
            GK.textContent = "Sommer"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
            FR2.src = "/football/img/players/" + FR.textContent + ".webp";
            AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
            FL2.src = "/football/img/players/" + FL.textContent + ".webp";
            CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
            CML2.src = "/football/img/players/" + CML.textContent + ".webp";
            DR2.src = "/football/img/players/" + DR.textContent + ".webp";
            DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
            DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
            DL2.src = "/football/img/players/" + DL.textContent + ".webp";
            GK2.src = "/football/img/players/" + GK.textContent + ".webp";

           smallpic.src = "/football/img/logos/inter milan.webp";
            
            MainFetchPopUp("/football/present/clubs/json/inter milan.json"); 

        }
        
        if (selectedYear === "3") {
            STC.textContent = "Morata"
            FR.textContent = "De Paul"
            AMC.textContent = "Griezmann"
            FL.textContent = "M Depay"
            CMR.textContent = "M Llorente"
            CML.textContent = "Koke"
            DR.textContent = "Molina"
            DCR.textContent = "Gimenez"
            DCL.textContent = "Savic"
            DL.textContent = "Hermoso"
            GK.textContent = "Oblak"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";
            
        smallpic.src = "/football/img/logos/atletico madrid.webp";
            
        MainFetchPopUp("/football/present/clubs/json/atletico madrid.json");


        }
        
        if (selectedYear === "0") {
            STC.textContent = "Giroud"
            FR.textContent = "Pulisic"
            AMC.textContent = "Loftus-C"
            FL.textContent = "R Leao"
            CMR.textContent = "Bennacer"
            CML.textContent = "Krunic"
            DR.textContent = "Calabria"
            DCR.textContent = "Tomori"
            DCL.textContent = "Kjaer"
            DL.textContent = "T Hernandez"
            GK.textContent = "Maignan"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

            smallpic.src = "/football/img/logos/ac milan.webp";
            
            MainFetchPopUp("/football/present/clubs/json/ac milan.json");
            
        }
        
        if (selectedYear === "12") {
            STC.textContent = "Osimhen"
            FR.textContent = "Politano"
            AMC.textContent = "Zielinski"
            FL.textContent = "Kvaratskhelia"
            CMR.textContent = "Lobotka"
            CML.textContent = "Z Anguissa"
            DR.textContent = "Di Lorenzo"
            DCR.textContent = "Rrahmani"
            DCL.textContent = "J Jesus"
            DL.textContent = "M Rui"
            GK.textContent = "Meret"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";
            
        smallpic.src = "/football/img/logos/napoli.webp";

        MainFetchPopUp("/football/present/clubs/json/napoli.json");

            
        }

        if (selectedYear === "15") {
            STC.textContent = "M Son"
            FR.textContent = "Kulusevski"
            AMC.textContent = "Maddison"
            FL.textContent = "B Johnson"
            CMR.textContent = "Hojbjerg"
            CML.textContent = "Bentancur"
            DR.textContent = "P Porro"
            DCR.textContent = "C Romero"
            DCL.textContent = "van de Ven"
            DL.textContent = "Udogie"
            GK.textContent = "Vicario"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/tottenham.webp";

        MainFetchPopUp("/football/present/clubs/json/tottenham.json");

        }
        if (selectedYear === "2") {

            STC.textContent = "Lukaku"
            FR.textContent = "Aouar"
            AMC.textContent = "Dybala"
            FL.textContent = "Pellegrini"
            CMR.textContent = "R Sanches"
            CML.textContent = "Cristante"
            DR.textContent = "Karsdorp"
            DCR.textContent = "Smalling"
            DCL.textContent = "G Mancini"
            DL.textContent = "Spinazzola"
            GK.textContent = "R Patricio"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/as roma.webp";

        MainFetchPopUp("/football/present/clubs/json/as roma.json");
            
        }

        function clearAndFadeInElements() {
            const elements = [
                STC, STC2,
                FR, FR2,
                AMC, AMC2,
                FL, FL2,
                CMR, CMR2,
                CML, CML2,
                DR, DR2,
                DCR, DCR2,
                DCL, DCL2,
                DL, DL2,
                GK, GK2,
            ];
        
            smallpic.classList.add("fade-in")

            for (const element of elements) {
                element.classList.add("fade-in");
            }

            // Remove the "fade-in" class after the animation is complete
            setTimeout(function () {
                for (const element of elements) {
                    element.classList.remove("fade-in");
                }
                smallpic.classList.remove("fade-in")
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
        // yearSelector.selectedIndex = currentIndex;

        if (selectedYear === 10) {

        STC.textContent = "Haaland";
        FR.textContent = "B Silva";
        AMC.textContent = "Foden";
        FL.textContent = "Grealish";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Rodri";
        DR.textContent = "Walker";
        DCR.textContent = "R Dias";
        DCL.textContent = "Stones";
        DL.textContent = "Gvardiol";
        GK.textContent = "Ederson";

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/man city.webp";

        MainFetchPopUp("/football/present/clubs/json/man city.json");

    }

    if (selectedYear === 14) {

        STC.textContent = "Rodrygo"
        FR.textContent = "Valverde"
        AMC.textContent = "Bellingham"
        FL.textContent = "Vinicius Jr"
        CMR.textContent = "Kroos"
        CML.textContent = "Tchouameni"
        DR.textContent = "Carvajal"
        DCR.textContent = "E Militao"
        DCL.textContent = "Alaba"
        DL.textContent = "Camavinga"
        GK.textContent = "Kepa"

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/real madrid.webp";
        
        MainFetchPopUp("/football/present/clubs/json/real madrid.json");


    }

    if (selectedYear === 13) {
        STC.textContent = "G Ramos"
        FR.textContent = "O Dembele"
        AMC.textContent = "Asensio"
        FL.textContent = "Mbappe"
        CMR.textContent = "Vitinha"
        CML.textContent = "Ugarte"
        DR.textContent = "Hakimi"
        DCR.textContent = "Marquinhos"
        DCL.textContent = "Skriniar"
        DL.textContent = "L Hernandez"
        GK.textContent = "Donnarumma"

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/paris sg.webp";

        MainFetchPopUp("/football/present/clubs/json/paris saint-germain.json");


    }

    if (selectedYear === 5) {
        
        STC.textContent = "Kane"
        FR.textContent = "Sane"
        AMC.textContent = "Musiala"
        FL.textContent = "Coman"
        CMR.textContent = "Kimmich"
        CML.textContent = "Goretzka"
        DR.textContent = "Laimer"
        DCR.textContent = "de Ligt"
        DCL.textContent = "Min J"
        DL.textContent = "A Davies"
        GK.textContent = "Neuer"

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/bayern munich.webp";
        
        MainFetchPopUp("/football/present/clubs/json/bayern munich.json");

        
    }
    if (selectedYear === 9) {
        
        STC.textContent = "D Jota"
        FR.textContent = "Salah"
        AMC.textContent = "Gakpo"
        FL.textContent = "L Diaz"
        CMR.textContent = "Szoboszlai"
        CML.textContent = "Mac Allister"
        DR.textContent = "Alexander-A"
        DCR.textContent = "van Dijk"
        DCL.textContent = "Konate"
        DL.textContent = "Robertson"
        GK.textContent = "Alisson"

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/liverpool.webp";

        MainFetchPopUp("/football/present/clubs/json/liverpool.json");


    }

    if (selectedYear === 4) {
        STC.textContent = "Lewandowski"
        FR.textContent = "J Felix"
        AMC.textContent = "Pedri"
        FL.textContent = "Gavi"
        CMR.textContent = "Gundogan"
        CML.textContent = "F de Jong"
        DR.textContent = "Cancelo"
        DCR.textContent = "Kounde"
        DCL.textContent = "R Araujo"
        DL.textContent = "Balde"
        GK.textContent = "ter Stegen"

        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";
        
        smallpic.src = "/football/img/logos/barcelona.webp";

        MainFetchPopUp("/football/present/clubs/json/barcelona.json");

    }

        if (selectedYear === 6) {
            STC.textContent = "N Jackson"
            FR.textContent = "Sterling"
            AMC.textContent = "Nkunku"
            FL.textContent = "Mudryk"
            CMR.textContent = "E Fernandez"
            CML.textContent = "Caicedo"
            DR.textContent = "R James"
            DCR.textContent = "T Silva"
            DCL.textContent = "Disasi"
            DL.textContent = "Chilwell"
            GK.textContent = "R Sanchez"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
            FR2.src = "/football/img/players/" + FR.textContent + ".webp";
            AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
            FL2.src = "/football/img/players/" + FL.textContent + ".webp";
            CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
            CML2.src = "/football/img/players/" + CML.textContent + ".webp";
            DR2.src = "/football/img/players/" + DR.textContent + ".webp";
            DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
            DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
            DL2.src = "/football/img/players/" + DL.textContent + ".webp";
            GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/chelsea.webp";

        MainFetchPopUp("/football/present/clubs/json/chelsea.json");

        }

        if (selectedYear === 11) {
            STC.textContent = "Hojlund"
            FR.textContent = "Sancho"
            AMC.textContent = "B Fernandes"
            FL.textContent = "Rashford"
            CMR.textContent = "Eriksen"
            CML.textContent = "Casemiro"
            DR.textContent = "Dalot"
            DCR.textContent = "Varane"
            DCL.textContent = "Li Martinez"
            DL.textContent = "Shaw"
            GK.textContent = "Onana"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/man utd.webp";

        MainFetchPopUp("/football/present/clubs/json/manchester united.json");

    }
        if (selectedYear === 8) {
            STC.textContent = "Vlahovic"
            FR.textContent = "Chiesa"
            AMC.textContent = "Pogba"
            FL.textContent = "Kostic"
            CMR.textContent = "Locatelli"
            CML.textContent = "Rabiot"
            DR.textContent = "Danilo"
            DCR.textContent = "Bremer"
            DCL.textContent = "Gatti"
            DL.textContent = "A Sandro"
            GK.textContent = "Szczesny"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/juventus.webp";

        MainFetchPopUp("/football/present/clubs/json/juventus.json");


        }

        if (selectedYear === 1) {
            STC.textContent = "G Jesus"
            FR.textContent = "Saka"
            AMC.textContent = "Odegaard"
            FL.textContent = "Martinelli"
            CMR.textContent = "Partey"
            CML.textContent = "Rice"
            DR.textContent = "B White"
            DCR.textContent = "Saliba"
            DCL.textContent = "Gabriel"
            DL.textContent = "Zinchenko"
            GK.textContent = "D Raya"
            
        STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/arsenal.webp";
                ;
        MainFetchPopUp("/football/present/clubs/json/arsenal.json");
        
        }
        if (selectedYear === 7) {
            STC.textContent = "La Martinez"
            FR.textContent = "Cuadrado"
            AMC.textContent = "Mkhitaryan"
            FL.textContent = "M Thuram"
            CMR.textContent = "Barella"
            CML.textContent = "Calhanoglu"
            DR.textContent = "Pavard"
            DCR.textContent = "de Vrij"
            DCL.textContent = "Bastoni"
            DL.textContent = "Dimarco"
            GK.textContent = "Sommer"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/inter milan.webp";

        MainFetchPopUp("/football/present/clubs/json/inter milan.json");

        }
        
        if (selectedYear === 3) {
            STC.textContent = "Morata"
            FR.textContent = "De Paul"
            AMC.textContent = "Griezmann"
            FL.textContent = "M Depay"
            CMR.textContent = "M Llorente"
            CML.textContent = "Koke"
            DR.textContent = "Molina"
            DCR.textContent = "Gimenez"
            DCL.textContent = "Savic"
            DL.textContent = "Hermoso"
            GK.textContent = "Oblak"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";
            
        smallpic.src = "/football/img/logos/atletico madrid.webp";

        MainFetchPopUp("/football/present/clubs/json/atletico madrid.json");


        }
        
        if (selectedYear === 0) {
            STC.textContent = "Giroud"
            FR.textContent = "Pulisic"
            AMC.textContent = "Loftus-C"
            FL.textContent = "R Leao"
            CMR.textContent = "Bennacer"
            CML.textContent = "Krunic"
            DR.textContent = "Calabria"
            DCR.textContent = "Tomori"
            DCL.textContent = "Kjaer"
            DL.textContent = "T Hernandez"
            GK.textContent = "Maignan"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/ac milan.webp";

            MainFetchPopUp("/football/present/clubs/json/ac milan.json");
            
        }
        
        if (selectedYear === 12) {
            STC.textContent = "Osimhen"
            FR.textContent = "Politano"
            AMC.textContent = "Zielinski"
            FL.textContent = "Kvaratskhelia"
            CMR.textContent = "Lobotka"
            CML.textContent = "Z Anguissa"
            DR.textContent = "Di Lorenzo"
            DCR.textContent = "Rrahmani"
            DCL.textContent = "J Jesus"
            DL.textContent = "M Rui"
            GK.textContent = "Meret"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";
            
        smallpic.src = "/football/img/logos/napoli.webp";

        MainFetchPopUp("/football/present/clubs/json/napoli.json");

            
        }

        if (selectedYear === 15) {
            STC.textContent = "M Son"
            FR.textContent = "Kulusevski"
            AMC.textContent = "Maddison"
            FL.textContent = "B Johnson"
            CMR.textContent = "Hojbjerg"
            CML.textContent = "Bentancur"
            DR.textContent = "P Porro"
            DCR.textContent = "C Romero"
            DCL.textContent = "van de Ven"
            DL.textContent = "Udogie"
            GK.textContent = "Vicario"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
        FL2.src = "/football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/football/img/logos/tottenham.webp";

        MainFetchPopUp("/football/present/clubs/json/tottenham.json");

        }
        if (selectedYear === 2) {

            STC.textContent = "Lukaku"
            FR.textContent = "Aouar"
            AMC.textContent = "Dybala"
            FL.textContent = "Pellegrini"
            CMR.textContent = "R Sanches"
            CML.textContent = "Cristante"
            DR.textContent = "Karsdorp"
            DCR.textContent = "Smalling"
            DCL.textContent = "G Mancini"
            DL.textContent = "Spinazzola"
            GK.textContent = "R Patricio"

            STC2.src = "/football/img/players/" + STC.textContent + ".webp";
            FR2.src = "/football/img/players/" + FR.textContent + ".webp";
            AMC2.src = "/football/img/players/" + AMC.textContent + ".webp ";
            FL2.src = "/football/img/players/" + FL.textContent + ".webp";
            CMR2.src = "/football/img/players/" + CMR.textContent + ".webp";
            CML2.src = "/football/img/players/" + CML.textContent + ".webp";
            DR2.src = "/football/img/players/" + DR.textContent + ".webp";
            DCR2.src = "/football/img/players/" + DCR.textContent + ".webp";
            DCL2.src = "/football/img/players/" + DCL.textContent + ".webp";
            DL2.src = "/football/img/players/" + DL.textContent + ".webp";
            GK2.src = "/football/img/players/" + GK.textContent + ".webp";

            smallpic.src = "/football/img/logos/as roma.webp";

            MainFetchPopUp("/football/present/clubs/json/as roma.json");
            
        }


        function clearAndFadeInElements() {
            const elements = [
                STC, STC2,
                FR, FR2,
                AMC, AMC2,
                FL, FL2,
                CMR, CMR2,
                CML, CML2,
                DR, DR2,
                DCR, DCR2,
                DCL, DCL2,
                DL, DL2,
                GK, GK2,
            ];
        
            smallpic.classList.add("fade-in")

            for (const element of elements) {
                element.classList.add("fade-in");
            }

            // Remove the "fade-in" class after the animation is complete
            setTimeout(function () {
                for (const element of elements) {
                    element.classList.remove("fade-in");
                }
                smallpic.classList.remove("fade-in")
            }, 500); // Adjust the timeout value based on your animation duration
        }
        clearAndFadeInElements();
    
    }

    // Event listener for the back button
    backButton.addEventListener('click', () => {
        console.log(selectedYear)
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
// });