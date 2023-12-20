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
    
    if (selectedYear == 10) {
        STC.textContent = "Aguero";
        FR.textContent = "D Silva";
        AMC.textContent = "De Bruyne";
        FL.textContent = "Sterling";
        CMR.textContent = "Y Toure";
        CML.textContent = "Fernandinho";
        DR.textContent = "Walker";
        DCR.textContent = "Kompany";
        DCL.textContent = "Otamendi";
        DL.textContent = "Kolarov";
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
        
        MainFetchPopUp("/football/past/clubs/json/manchester city.json");
    }

    if (selectedYear === "14") {
        STC.textContent = "Benzema";
        FR.textContent = "Bale";
        AMC.textContent = "Ozil";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Modric";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Varane";
        DL.textContent = "Marcelo";
        GK.textContent = "Courtois";

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

        smallpic.src = "/football/img/logos/real madrid.webp";
        
        MainFetchPopUp("/football/past/clubs/json/real madrid.json");
    }

    if (selectedYear === "13") {
        STC.textContent = "Ibrahimovic";
        FR.textContent = "Mbappe";
        AMC.textContent = "Neymar";
        FL.textContent = "Di Maria";
        CMR.textContent = "Verratti";
        CML.textContent = "Motta";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Marquinhos";
        DL.textContent = "Bernat";
        GK.textContent = "Navas";

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

        smallpic.src = "/football/img/logos/paris sg.webp";

        MainFetchPopUp("/football/past/clubs/json/paris saint-germain.json");
    }

        if (selectedYear === "5") {
            
        STC.textContent = "Lewandowksi";
        FR.textContent = "Robben";
        AMC.textContent = "Muller";
        FL.textContent = "Ribery";
        CMR.textContent = "Thiago";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Lahm";
        DCR.textContent = "Hummels";
        DCL.textContent = "Boateng";
        DL.textContent = "Alaba";
        GK.textContent = "Neuer";
            
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

       smallpic.src = "/football/img/logos/bayern munich.webp";
        
        MainFetchPopUp("/football/past/clubs/json/bayern munich.json");
    }
    
    if (selectedYear === "9") {
        
    STC.textContent = "Suarez";
    FR.textContent = "Salah";
    AMC.textContent = "Coutinho";
    FL.textContent = "Mane";
    CMR.textContent = "Gerrard";
    CML.textContent = "Fabinho";
    DR.textContent = "Alexander-A";
    DCR.textContent = "van Dijk";
    DCL.textContent = "Matip";
    DL.textContent = "Robertson";
    GK.textContent = "Alisson";

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
        
        smallpic.src = "/football/img/logos/liverpool.webp";

        MainFetchPopUp("/football/past/clubs/json/liverpool.json");

        
    }

    if (selectedYear === "4") {
        
    STC.textContent = "Suarez";
    FR.textContent = "Messi";
    AMC.textContent = "Iniesta";
    FL.textContent = "Neymar";
    CMR.textContent = "Xavi";
    CML.textContent = "Busquets";
    DR.textContent = "D Alves";
    DCR.textContent = "Pique";
    DCL.textContent = "Mascherano";
    DL.textContent = "Alba";
    GK.textContent = "ter Stegen";
        
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
        
       smallpic.src = "/football/img/logos/barcelona.webp";

        MainFetchPopUp("/football/past/clubs/json/barcelona.json");
    }

    if (selectedYear === "6") {

    STC.textContent = "Drogba";
    FR.textContent = "Willian";
    AMC.textContent = "Lampard";
    FL.textContent = "Hazard";
    CMR.textContent = "Fabregas";
    CML.textContent = "Kante";
    DR.textContent = "Azpilicueta";
    DCR.textContent = "Terry";
    DCL.textContent = "G Cahill";
    DL.textContent = "A Cole";
    GK.textContent = "Courtois";
        
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
        
            smallpic.src = "/football/img/logos/chelsea.webp";

            MainFetchPopUp("/football/past/clubs/json/chelsea.json");

    }

    if (selectedYear === "11") { 
        
    STC.textContent = "Ibrahimovic";
    FR.textContent = "van Persie";
    AMC.textContent = "Rooney";
    FL.textContent = "Di Maria";
    CMR.textContent = "Pogba";
    CML.textContent = "Carrick";
    DR.textContent = "Valencia";
    DCR.textContent = "Ferdinand";
    DCL.textContent = "Vidic";
    DL.textContent = "Evra";
    GK.textContent = "De Gea";
        
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
        
        smallpic.src = "/football/img/logos/man utd.webp";

        MainFetchPopUp("/football/past/clubs/json/manchester united.json");
    
    }
    
    if (selectedYear === "8") {
    STC.textContent = "Higuain";
    FR.textContent = "D Costa";
    AMC.textContent = "Dybala";
    FL.textContent = "C Ronaldo";
    CMR.textContent = "Pjanic";
    CML.textContent = "Pirlo";
    DR.textContent = "Cuadrado";
    DCR.textContent = "Bonucci";
    DCL.textContent = "Chiellini";
    DL.textContent = "A Sandro";
    GK.textContent = "Buffon";
        
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
        
        smallpic.src = "/football/img/logos/juventus.webp";

        MainFetchPopUp("/football/past/clubs/json/juventus.json");
        
    }
    
    if (selectedYear === "1") {
        STC.textContent = "van Persie";
        FR.textContent = "A Sanchez";
        AMC.textContent = "Ozil";
        FL.textContent = "Aubameyang";
        CMR.textContent = "Cazorla";
        CML.textContent = "Xhaka";
        DR.textContent = "Sagna";
        DCR.textContent = "Koscielny";
        DCL.textContent = "Mustafi";
        DL.textContent = "Monreal";
        GK.textContent = "Cech";

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
            
            smallpic.src = "/football/img/logos/arsenal.webp";
                
            MainFetchPopUp("/football/past/clubs/json/arsenal.json");
              
    }

    if (selectedYear === "7") {
    STC.textContent = "D Milito";
    FR.textContent = "Alexis";
    AMC.textContent = "Sneijder";
    FL.textContent = "Perisic";
    CMR.textContent = "Nainggolan";
    CML.textContent = "Cambiasso";
    DR.textContent = "Maicon";
    DCR.textContent = "Skriniar";
    DCL.textContent = "de Vrij";
    DL.textContent = "Chivu";
    GK.textContent = "Handanovic";
        
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
        
           smallpic.src = "/football/img/logos/inter milan.webp";
            
            MainFetchPopUp("/football/past/clubs/json/inter milan.json"); 
    
    }
        
    if (selectedYear === "3") {
    STC.textContent = "Falcao";
    FR.textContent = "Carrasco";
    AMC.textContent = "Griezmann";
    FL.textContent = "Turan";
    CMR.textContent = "Koke";
    CML.textContent = "Saul";
    DR.textContent = "Juanfran";
    DCR.textContent = "Godin";
    DCL.textContent = "Miranda";
    DL.textContent = "F Luis";
    GK.textContent = "Oblak";
        
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
            
        smallpic.src = "/football/img/logos/atletico madrid.webp";
            
        MainFetchPopUp("/football/past/clubs/json/atletico madrid.json");
            
}
        
    if (selectedYear === "0") {
    STC.textContent = "Ibrahimovic";
    FR.textContent = "Cassano";
    AMC.textContent = "Kaka";
    FL.textContent = "Robinho";
    CMR.textContent = "Seedorf";
    CML.textContent = "Pirlo";
    DR.textContent = "Abate";
    DCR.textContent = "T Silva";
    DCL.textContent = "Nesta";
    DL.textContent = "Antonini";
    GK.textContent = "Abbiati";
        
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
        
            smallpic.src = "/football/img/logos/ac milan.webp";
            
            MainFetchPopUp("/football/past/clubs/json/ac milan.json");
    }
        
    if (selectedYear === "12") { 
    STC.textContent = "Cavani";
    FR.textContent = "Mertens";
    AMC.textContent = "Hamsik";
    FL.textContent = "Insigne";
    CMR.textContent = "Allan";
    CML.textContent = "Jorginho";
    DR.textContent = "Maggio";
    DCR.textContent = "Koulibaly";
    DCL.textContent = "Albiol";
    DL.textContent = "Ghoulam";
    GK.textContent = "P Reina";
        
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
            
        smallpic.src = "/football/img/logos/napoli.webp";

        MainFetchPopUp("/football/past/clubs/json/napoli.json");
        
    }

    if (selectedYear === "15") {
    STC.textContent = "Kane";
    FR.textContent = "van der Vaart";
    AMC.textContent = "Eriksen";
    FL.textContent = "HM Son";
    CMR.textContent = "Modric";
    CML.textContent = "M Dembele";
    DR.textContent = "Walker";
    DCR.textContent = "Alderweireld";
    DCL.textContent = "Vertonghen";
    DL.textContent = "D Rose";
    GK.textContent = "Lloris";
        
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
        
        smallpic.src = "/football/img/logos/tottenham.webp";

        MainFetchPopUp("/football/past/clubs/json/tottenham.json");

    }

    if (selectedYear === "2") {

        STC.textContent = "Dzeko";
        FR.textContent = "Mkhitaryan";
        AMC.textContent = "Totti";
        FL.textContent = "El Shaarawy";
        CMR.textContent = "Pjanic";
        CML.textContent = "De Rossi";
        DR.textContent = "Florenzi";
        DCR.textContent = "Smalling";
        DCL.textContent = "Manolas";
        DL.textContent = "Kolarov";
        GK.textContent = "Szczesny";
        
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
    
       smallpic.src = "/football/img/logos/as roma.webp";

        MainFetchPopUp("/football/past/clubs/json/as roma.json");
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
        // yearSelector.selectedIndex = currentIndex;

           if (selectedYear == 10) {
        STC.textContent = "Aguero";
        FR.textContent = "D Silva";
        AMC.textContent = "De Bruyne";
        FL.textContent = "Sterling";
        CMR.textContent = "Y Toure";
        CML.textContent = "Fernandinho";
        DR.textContent = "Walker";
        DCR.textContent = "Kompany";
        DCL.textContent = "Otamendi";
        DL.textContent = "Kolarov";
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
        
        MainFetchPopUp("/football/past/clubs/json/manchester city.json");
    }

    if (selectedYear === 14) {
        STC.textContent = "Benzema";
        FR.textContent = "Bale";
        AMC.textContent = "Ozil";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Modric";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Varane";
        DL.textContent = "Marcelo";
        GK.textContent = "Courtois";

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

        smallpic.src = "/football/img/logos/real madrid.webp";
        
        MainFetchPopUp("/football/past/clubs/json/real madrid.json");
    }

    if (selectedYear === 13) {
        STC.textContent = "Ibrahimovic";
        FR.textContent = "Mbappe";
        AMC.textContent = "Neymar";
        FL.textContent = "Di Maria";
        CMR.textContent = "Verratti";
        CML.textContent = "Motta";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Marquinhos";
        DL.textContent = "Bernat";
        GK.textContent = "Navas";

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

        smallpic.src = "/football/img/logos/paris sg.webp";

        MainFetchPopUp("/football/past/clubs/json/paris saint-germain.json");
    }

        if (selectedYear === 5) {
            
        STC.textContent = "Lewandowksi";
        FR.textContent = "Robben";
        AMC.textContent = "Muller";
        FL.textContent = "Ribery";
        CMR.textContent = "Thiago";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Lahm";
        DCR.textContent = "Hummels";
        DCL.textContent = "Boateng";
        DL.textContent = "Alaba";
        GK.textContent = "Neuer";
            
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

       smallpic.src = "/football/img/logos/bayern munich.webp";
        
        MainFetchPopUp("/football/past/clubs/json/bayern munich.json");
    }
    
    if (selectedYear === 9) {
        
    STC.textContent = "Suarez";
    FR.textContent = "Salah";
    AMC.textContent = "Coutinho";
    FL.textContent = "Mane";
    CMR.textContent = "Gerrard";
    CML.textContent = "Fabinho";
    DR.textContent = "Alexander-A";
    DCR.textContent = "van Dijk";
    DCL.textContent = "Matip";
    DL.textContent = "Robertson";
    GK.textContent = "Alisson";

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
        
        smallpic.src = "/football/img/logos/liverpool.webp";

        MainFetchPopUp("/football/past/clubs/json/liverpool.json");

        
    }

    if (selectedYear === 4) {
        
    STC.textContent = "Suarez";
    FR.textContent = "Messi";
    AMC.textContent = "Iniesta";
    FL.textContent = "Neymar";
    CMR.textContent = "Xavi";
    CML.textContent = "Busquets";
    DR.textContent = "D Alves";
    DCR.textContent = "Pique";
    DCL.textContent = "Mascherano";
    DL.textContent = "Alba";
    GK.textContent = "ter Stegen";
        
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
        
       smallpic.src = "/football/img/logos/barcelona.webp";

        MainFetchPopUp("/football/past/clubs/json/barcelona.json");
    }

    if (selectedYear === 6) {

    STC.textContent = "Drogba";
    FR.textContent = "Willian";
    AMC.textContent = "Lampard";
    FL.textContent = "Hazard";
    CMR.textContent = "Fabregas";
    CML.textContent = "Kante";
    DR.textContent = "Azpilicueta";
    DCR.textContent = "Terry";
    DCL.textContent = "G Cahill";
    DL.textContent = "A Cole";
    GK.textContent = "Courtois";
        
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
        
            smallpic.src = "/football/img/logos/chelsea.webp";

            MainFetchPopUp("/football/past/clubs/json/chelsea.json");

    }

    if (selectedYear === 11) { 
        
    STC.textContent = "Ibrahimovic";
    FR.textContent = "van Persie";
    AMC.textContent = "Rooney";
    FL.textContent = "Di Maria";
    CMR.textContent = "Pogba";
    CML.textContent = "Carrick";
    DR.textContent = "Valencia";
    DCR.textContent = "Ferdinand";
    DCL.textContent = "Vidic";
    DL.textContent = "Evra";
    GK.textContent = "De Gea";
        
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
        
        smallpic.src = "/football/img/logos/man utd.webp";

        MainFetchPopUp("/football/past/clubs/json/manchester united.json");
    
    }
    
    if (selectedYear === 8) {
    STC.textContent = "Higuain";
    FR.textContent = "D Costa";
    AMC.textContent = "Dybala";
    FL.textContent = "C Ronaldo";
    CMR.textContent = "Pjanic";
    CML.textContent = "Pirlo";
    DR.textContent = "Cuadrado";
    DCR.textContent = "Bonucci";
    DCL.textContent = "Chiellini";
    DL.textContent = "A Sandro";
    GK.textContent = "Buffon";
        
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
        
        smallpic.src = "/football/img/logos/juventus.webp";

        MainFetchPopUp("/football/past/clubs/json/juventus.json");
        
    }
    
    if (selectedYear === 1) {
        STC.textContent = "van Persie";
        FR.textContent = "A Sanchez";
        AMC.textContent = "Ozil";
        FL.textContent = "Aubameyang";
        CMR.textContent = "Cazorla";
        CML.textContent = "Xhaka";
        DR.textContent = "Sagna";
        DCR.textContent = "Koscielny";
        DCL.textContent = "Mustafi";
        DL.textContent = "Monreal";
        GK.textContent = "Cech";

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
            
            smallpic.src = "/football/img/logos/arsenal.webp";
                
            MainFetchPopUp("/football/past/clubs/json/arsenal.json");
              
    }

    if (selectedYear === 7) {
    STC.textContent = "D Milito";
    FR.textContent = "Alexis";
    AMC.textContent = "Sneijder";
    FL.textContent = "Perisic";
    CMR.textContent = "Nainggolan";
    CML.textContent = "Cambiasso";
    DR.textContent = "Maicon";
    DCR.textContent = "Skriniar";
    DCL.textContent = "de Vrij";
    DL.textContent = "Chivu";
    GK.textContent = "Handanovic";
        
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
        
           smallpic.src = "/football/img/logos/inter milan.webp";
            
            MainFetchPopUp("/football/past/clubs/json/inter milan.json"); 
    
    }
        
    if (selectedYear === 3) {
    STC.textContent = "Falcao";
    FR.textContent = "Carrasco";
    AMC.textContent = "Griezmann";
    FL.textContent = "Turan";
    CMR.textContent = "Koke";
    CML.textContent = "Saul";
    DR.textContent = "Juanfran";
    DCR.textContent = "Godin";
    DCL.textContent = "Miranda";
    DL.textContent = "F Luis";
    GK.textContent = "Oblak";
        
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
            
        smallpic.src = "/football/img/logos/atletico madrid.webp";
            
        MainFetchPopUp("/football/past/clubs/json/atletico madrid.json");
            
}
        
    if (selectedYear === 0) {
    STC.textContent = "Ibrahimovic";
    FR.textContent = "Cassano";
    AMC.textContent = "Kaka";
    FL.textContent = "Robinho";
    CMR.textContent = "Seedorf";
    CML.textContent = "Pirlo";
    DR.textContent = "Abate";
    DCR.textContent = "T Silva";
    DCL.textContent = "Nesta";
    DL.textContent = "Antonini";
    GK.textContent = "Abbiati";
        
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
        
            smallpic.src = "/football/img/logos/ac milan.webp";
            
            MainFetchPopUp("/football/past/clubs/json/ac milan.json");
    }
        
    if (selectedYear === 12) { 
    STC.textContent = "Cavani";
    FR.textContent = "Mertens";
    AMC.textContent = "Hamsik";
    FL.textContent = "Insigne";
    CMR.textContent = "Allan";
    CML.textContent = "Jorginho";
    DR.textContent = "Maggio";
    DCR.textContent = "Koulibaly";
    DCL.textContent = "Albiol";
    DL.textContent = "Ghoulam";
    GK.textContent = "P Reina";
        
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
            
        smallpic.src = "/football/img/logos/napoli.webp";

        MainFetchPopUp("/football/past/clubs/json/napoli.json");
        
    }

    if (selectedYear === 15) {
    STC.textContent = "Kane";
    FR.textContent = "van der Vaart";
    AMC.textContent = "Eriksen";
    FL.textContent = "HM Son";
    CMR.textContent = "Modric";
    CML.textContent = "M Dembele";
    DR.textContent = "Walker";
    DCR.textContent = "Alderweireld";
    DCL.textContent = "Vertonghen";
    DL.textContent = "D Rose";
    GK.textContent = "Lloris";
        
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
        
        smallpic.src = "/football/img/logos/tottenham.webp";

        MainFetchPopUp("/football/past/clubs/json/tottenham.json");

    }

    if (selectedYear === 2) {

        STC.textContent = "Dzeko";
        FR.textContent = "Mkhitaryan";
        AMC.textContent = "Totti";
        FL.textContent = "El Shaarawy";
        CMR.textContent = "Pjanic";
        CML.textContent = "De Rossi";
        DR.textContent = "Florenzi";
        DCR.textContent = "Smalling";
        DCL.textContent = "Manolas";
        DL.textContent = "Kolarov";
        GK.textContent = "Szczesny";
        
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
    
       smallpic.src = "/football/img/logos/as roma.webp";

        MainFetchPopUp("/football/past/clubs/json/as roma.json");
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