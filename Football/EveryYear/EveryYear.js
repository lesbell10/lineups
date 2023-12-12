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


let selectedYear = 0

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    

    if (selectedYear === "0") {

        STC.textContent = "Henry";
        FR.textContent = "Totti";
        AMC.textContent = "Zidane";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Gerrard";
        CML.textContent = "Vieira";
        DR.textContent = "Thuram";
        DCR.textContent = "Nesta";
        DCL.textContent = "Lucio";
        DL.textContent = "Maldini";
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


        smallpic.src = "/football/img/wallpapers/zidane.png";
        
        // // FIFAFetchPopUp("./json/EveryYear_2005.json");
        MainFetchPopUp("./json/EveryYear_2005.json");
    }
    
    if (selectedYear === "1") { 
        STC.textContent = "Ronaldo";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Zidane";
        CML.textContent = "Essien";
        DR.textContent = "Cafu";
        DCR.textContent = "Ferdinand";
        DCL.textContent = "Maldini";
        DL.textContent = "A Cole";
        GK.textContent = "Casillas";

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

        smallpic.src = "/football/img/wallpapers/Ronaldo.jpg";
        
        // FIFAFetchPopUp("./json/EveryYear_2006.json");
        MainFetchPopUp("./json/EveryYear_2006.json");
    }

    if (selectedYear === "2") { 
        STC.textContent = "Henry";
        FR.textContent = "Totti";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Lampard";
        CML.textContent = "Gerrard";
        DR.textContent = "Zambrotta";
        DCR.textContent = "Terry";
        DCL.textContent = "F Cannavaro";
        DL.textContent = "Abidal";
        GK.textContent = "Buffon";

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

        smallpic.src = "/football/img/wallpapers/henry.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2007.json");
        MainFetchPopUp("./json/EveryYear_2007.json");
    }

    if (selectedYear === "3") { 

        STC.textContent = "Henry";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Fabregas";
        CML.textContent = "Gerrard";
        DR.textContent = "S Ramos";
        DCR.textContent = "Nesta";
        DCL.textContent = "Terry";
        DL.textContent = "Zanetti";
        GK.textContent = "Buffon";


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

        smallpic.src = "/football/img/wallpapers/Ronaldinho.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2008.json");
        MainFetchPopUp("./json/EveryYear_2008.json");
    }

    if (selectedYear === "4") { 

    STC.textContent = "Ibrahimovic";
    FR.textContent = "Messi";
    AMC.textContent = "Kaka";
    FL.textContent = "C Ronaldo";
    CMR.textContent = "Xavi";
    CML.textContent = "Gerrard";
    DR.textContent = "D Alves";
    DCR.textContent = "Puyol";
    DCL.textContent = "Nesta";
    DL.textContent = "Lahm";
    GK.textContent = "Casillas";


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

        smallpic.src = "/football/img/wallpapers/Xavi.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2009.json");
        MainFetchPopUp("./json/EveryYear_2009.json");
    }

    if (selectedYear === "5") {


    STC.textContent = "F Torres";
    FR.textContent = "Messi";
    AMC.textContent = "Kaka";
    FL.textContent = "C Ronaldo";
    CMR.textContent = "Xavi";
    CML.textContent = "Essien";
    DR.textContent = "D Alves";
    DCR.textContent = "Puyol";
    DCL.textContent = "Ferdinand";
    DL.textContent = "A Cole";
    GK.textContent = "Buffon";


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

        smallpic.src = "/football/img/wallpapers/Kaka.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2010.json");
        MainFetchPopUp("./json/EveryYear_2010.json");       
    }

    if (selectedYear === "6") {
        
        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Maicon";
        DCR.textContent = "Vidic";
        DCL.textContent = "Terry";
        DL.textContent = "Evra";
        GK.textContent = "Casillas";


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

        document.getElementById("smallpic").src = "/football/img/wallpapers/Iniesta.webp";

        // FIFAFetchPopUp("./json/EveryYear_2011.json");
        MainFetchPopUp("./json/EveryYear_2011.json");
    }

    if (selectedYear === "7") {
        
        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Ozil";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Y Toure";
        DR.textContent = "D Alves";
        DCR.textContent = "Vidic";
        DCL.textContent = "Pique";
        DL.textContent = "A Cole";
        GK.textContent = "Neuer";

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

        smallpic.src = "/football/img/wallpapers/Ozil.png";

        // FIFAFetchPopUp("./json/EveryYear_2012.json");
        MainFetchPopUp("./json/EveryYear_2012.json");
    }

    if (selectedYear === "8") {

        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Busquets";
        DR.textContent = "D Alves";
        DCR.textContent = "Vidic";
        DCL.textContent = "S Ramos";
        DL.textContent = "A Cole";
        GK.textContent = "Casillas";


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

        document.getElementById("smallpic").src = "/football/img/wallpapers/Rooney.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2013.json");
        MainFetchPopUp("./json/EveryYear_2013.json");
    }
    
    if (selectedYear === "9") {
        
        STC.textContent = "Ibrahimovic";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Ribery";
        CMR.textContent = "Xavi";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Kompany";
        DL.textContent = "Lahm";
        GK.textContent = "Neuer";


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

        smallpic.src = "/football/img/wallpapers/Ribery.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2014.json");
        MainFetchPopUp("./json/EveryYear_2014.json");

    }

    
    if (selectedYear === "10") {
        
        STC.textContent = "Ibrahimovic";
        FR.textContent = "Robben";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Iniesta";
        CML.textContent = "Kroos";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "S Ramos";
        DL.textContent = "Lahm";
        GK.textContent = "Neuer";

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

        smallpic.src = "/football/img/wallpapers/Ibrahimovic.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2015.json");
        MainFetchPopUp("./json/EveryYear_2015.json");
    }
    
    if (selectedYear === "11") {
        STC.textContent = "Suarez";
        FR.textContent = "Robben";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Iniesta";
        CML.textContent = "Pogba";
        DR.textContent = "Lahm";
        DCR.textContent = "T Silva";
        DCL.textContent = "S Ramos";
        DL.textContent = "Marcelo";
        GK.textContent = "Neuer";


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

        smallpic.src = "https://wallpaperaccess.com/full/3785447.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2016.json");
        MainFetchPopUp("./json/EveryYear_2016.json");
    }
    
    if (selectedYear === "12") {
        
        STC.textContent = "Lewandowski";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kroos";
        DR.textContent = "D Alves";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Boateng";
        DL.textContent = "Marcelo";
        GK.textContent = "Neuer";


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

        smallpic.src = "/football/img/wallpapers/Lewandowski.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2017.json");
        MainFetchPopUp("./json/EveryYear_2017.json");
    }

    if (selectedYear === "13") {
        
        STC.textContent = "Suarez";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "Modric";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Chiellini";
        DL.textContent = "Marcelo";
        GK.textContent = "Neuer";

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

        smallpic.src = "/football/img/wallpapers/Suarez.jpg";
        
        // FIFAFetchPopUp("./json/EveryYear_2018.json");
        MainFetchPopUp("./json/EveryYear_2018.json");
    }
    
    if (selectedYear === "14") {
        
        STC.textContent = "Suarez";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Godin";
        DL.textContent = "Marcelo";
        GK.textContent = "De Gea";

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

        smallpic.src = "/football/img/wallpapers/Neymar.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2019.json");
        MainFetchPopUp("./json/EveryYear_2019.json");
    }
    
    if (selectedYear === "15") {
        
        STC.textContent = "C Ronaldo";
        FR.textContent = "Messi";
        AMC.textContent = "E Hazard";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "S Ramos";
        DCL.textContent = "van Dijk";
        DL.textContent = "Alba";
        GK.textContent = "Oblak";

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

        smallpic.src = "/football/img/wallpapers/Hazard.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2020.json");
        MainFetchPopUp("./json/EveryYear_2020.json");
    }

    if (selectedYear === "16")
    {
        STC.textContent = "Lewandowski";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "van Dijk";
        DCL.textContent = "S Ramos";
        DL.textContent = "Robertson";
        GK.textContent = "Oblak";

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

        smallpic.src = "/football/img/wallpapers/C Ronaldo.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2021.json");
        MainFetchPopUp("./json/EveryYear_2021.json");
    }

    if (selectedYear === "17") { 
        STC.textContent = "Lewandowski";
        FR.textContent = "Salah";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "van Dijk";
        DCL.textContent = "R Dias";
        DL.textContent = "Cancelo";
        GK.textContent = "Neuer";


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

        smallpic.src = "/football/img/wallpapers/Salah.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2022.json");
        MainFetchPopUp("./json/EveryYear_2022.json");
    }

    if (selectedYear === "18") { 
        
        STC.textContent = "Lewandowski";
        FR.textContent = "Messi";
        AMC.textContent = "Benzema";
        FL.textContent = "Mbappe";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Casemiro";
        DR.textContent = "Kimmich";
        DCR.textContent = "R Dias";
        DCL.textContent = "Marquinhos";
        DL.textContent = "Cancelo";
        GK.textContent = "Courtois";

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

        smallpic.src = "/football/img/wallpapers/Benzema.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2023.json");
        MainFetchPopUp("./json/EveryYear_2023.json");
    }

    if (selectedYear === "19") { 
     
        STC.textContent = "Haaland";
        FR.textContent = "Salah";
        AMC.textContent = "Messi";
        FL.textContent = "Mbappe";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Rodri";
        DR.textContent = "Cancelo";
        DCR.textContent = "van Dijk";
        DCL.textContent = "R Dias";
        DL.textContent = "Robertson";
        GK.textContent = "Courtois";

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
        
        smallpic.src = "/football/img/wallpapers/Haaland.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2024.json");
        MainFetchPopUp("./json/EveryYear_2024.json");
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

    if (selectedYear === 0) {

        STC.textContent = "Henry";
        FR.textContent = "Totti";
        AMC.textContent = "Zidane";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Gerrard";
        CML.textContent = "Vieira";
        DR.textContent = "Thuram";
        DCR.textContent = "Nesta";
        DCL.textContent = "Lucio";
        DL.textContent = "Maldini";
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


        smallpic.src = "/football/img/wallpapers/zidane.png";
        
        // // FIFAFetchPopUp("./json/EveryYear_2005.json");
        MainFetchPopUp("./json/EveryYear_2005.json");
    }
    
    if (selectedYear === 1) { 
        STC.textContent = "Ronaldo";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Zidane";
        CML.textContent = "Essien";
        DR.textContent = "Cafu";
        DCR.textContent = "Ferdinand";
        DCL.textContent = "Maldini";
        DL.textContent = "A Cole";
        GK.textContent = "Casillas";

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

        smallpic.src = "/football/img/wallpapers/Ronaldo.jpg";
        
        // FIFAFetchPopUp("./json/EveryYear_2006.json");
        MainFetchPopUp("./json/EveryYear_2006.json");
    }

    if (selectedYear === 2) { 
        STC.textContent = "Henry";
        FR.textContent = "Totti";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Lampard";
        CML.textContent = "Gerrard";
        DR.textContent = "Zambrotta";
        DCR.textContent = "Terry";
        DCL.textContent = "F Cannavaro";
        DL.textContent = "Abidal";
        GK.textContent = "Buffon";

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

        smallpic.src = "/football/img/wallpapers/henry.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2007.json");
        MainFetchPopUp("./json/EveryYear_2007.json");
    }

    if (selectedYear === 3) { 

        STC.textContent = "Henry";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Fabregas";
        CML.textContent = "Gerrard";
        DR.textContent = "S Ramos";
        DCR.textContent = "Nesta";
        DCL.textContent = "Terry";
        DL.textContent = "Zanetti";
        GK.textContent = "Buffon";


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

        smallpic.src = "/football/img/wallpapers/Ronaldinho.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2008.json");
        MainFetchPopUp("./json/EveryYear_2008.json");
    }

    if (selectedYear === 4) { 

    STC.textContent = "Ibrahimovic";
    FR.textContent = "Messi";
    AMC.textContent = "Kaka";
    FL.textContent = "C Ronaldo";
    CMR.textContent = "Xavi";
    CML.textContent = "Gerrard";
    DR.textContent = "D Alves";
    DCR.textContent = "Puyol";
    DCL.textContent = "Nesta";
    DL.textContent = "Lahm";
    GK.textContent = "Casillas";


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

        smallpic.src = "/football/img/wallpapers/Xavi.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2009.json");
        MainFetchPopUp("./json/EveryYear_2009.json");
    }

    if (selectedYear === 5) {


    STC.textContent = "F Torres";
    FR.textContent = "Messi";
    AMC.textContent = "Kaka";
    FL.textContent = "C Ronaldo";
    CMR.textContent = "Xavi";
    CML.textContent = "Essien";
    DR.textContent = "D Alves";
    DCR.textContent = "Puyol";
    DCL.textContent = "Ferdinand";
    DL.textContent = "A Cole";
    GK.textContent = "Buffon";


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

        smallpic.src = "/football/img/wallpapers/Kaka.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2010.json");
        MainFetchPopUp("./json/EveryYear_2010.json");       
    }

    if (selectedYear === 6) {
        
        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Maicon";
        DCR.textContent = "Vidic";
        DCL.textContent = "Terry";
        DL.textContent = "Evra";
        GK.textContent = "Casillas";


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

        document.getElementById("smallpic").src = "/football/img/wallpapers/Iniesta.webp";

        // FIFAFetchPopUp("./json/EveryYear_2011.json");
        MainFetchPopUp("./json/EveryYear_2011.json");
    }

    if (selectedYear === 7) {
        
        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Ozil";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Y Toure";
        DR.textContent = "D Alves";
        DCR.textContent = "Vidic";
        DCL.textContent = "Pique";
        DL.textContent = "A Cole";
        GK.textContent = "Neuer";

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

        smallpic.src = "/football/img/wallpapers/Ozil.png";

        // FIFAFetchPopUp("./json/EveryYear_2012.json");
        MainFetchPopUp("./json/EveryYear_2012.json");
    }

    if (selectedYear === 8) {

        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Busquets";
        DR.textContent = "D Alves";
        DCR.textContent = "Vidic";
        DCL.textContent = "S Ramos";
        DL.textContent = "A Cole";
        GK.textContent = "Casillas";


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

        document.getElementById("smallpic").src = "/football/img/wallpapers/Rooney.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2013.json");
        MainFetchPopUp("./json/EveryYear_2013.json");
    }
    
    if (selectedYear === 9) {
        
        STC.textContent = "Ibrahimovic";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Ribery";
        CMR.textContent = "Xavi";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Kompany";
        DL.textContent = "Lahm";
        GK.textContent = "Neuer";


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

        smallpic.src = "/football/img/wallpapers/Ribery.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2014.json");
        MainFetchPopUp("./json/EveryYear_2014.json");

    }

    
    if (selectedYear === 10) {
        
        STC.textContent = "Ibrahimovic";
        FR.textContent = "Robben";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Iniesta";
        CML.textContent = "Kroos";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "S Ramos";
        DL.textContent = "Lahm";
        GK.textContent = "Neuer";

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

        smallpic.src = "/football/img/wallpapers/Ibrahimovic.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2015.json");
        MainFetchPopUp("./json/EveryYear_2015.json");
    }
    
    if (selectedYear === 11) {
        STC.textContent = "Suarez";
        FR.textContent = "Robben";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Iniesta";
        CML.textContent = "Pogba";
        DR.textContent = "Lahm";
        DCR.textContent = "T Silva";
        DCL.textContent = "S Ramos";
        DL.textContent = "Marcelo";
        GK.textContent = "Neuer";


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

        smallpic.src = "https://wallpaperaccess.com/full/3785447.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2016.json");
        MainFetchPopUp("./json/EveryYear_2016.json");
    }
    
    if (selectedYear === 12) {
        
        STC.textContent = "Lewandowski";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kroos";
        DR.textContent = "D Alves";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Boateng";
        DL.textContent = "Marcelo";
        GK.textContent = "Neuer";


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

        smallpic.src = "/football/img/wallpapers/Lewandowski.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2017.json");
        MainFetchPopUp("./json/EveryYear_2017.json");
    }

    if (selectedYear === 13) {
        
        STC.textContent = "Suarez";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "Modric";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Chiellini";
        DL.textContent = "Marcelo";
        GK.textContent = "Neuer";

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

        smallpic.src = "/football/img/wallpapers/Suarez.jpg";
        
        // FIFAFetchPopUp("./json/EveryYear_2018.json");
        MainFetchPopUp("./json/EveryYear_2018.json");
    }
    
    if (selectedYear === 14) {
        
        STC.textContent = "Suarez";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Godin";
        DL.textContent = "Marcelo";
        GK.textContent = "De Gea";

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

        smallpic.src = "/football/img/wallpapers/Neymar.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2019.json");
        MainFetchPopUp("./json/EveryYear_2019.json");
    }
    
    if (selectedYear === 15) {
        
        STC.textContent = "C Ronaldo";
        FR.textContent = "Messi";
        AMC.textContent = "Hazard";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "S Ramos";
        DCL.textContent = "van Dijk";
        DL.textContent = "Alba";
        GK.textContent = "Oblak";

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

        smallpic.src = "/football/img/wallpapers/Hazard.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2020.json");
        MainFetchPopUp("./json/EveryYear_2020.json");
    }

    if (selectedYear === 16)
    {
        STC.textContent = "Lewandowski";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "van Dijk";
        DCL.textContent = "S Ramos";
        DL.textContent = "Robertson";
        GK.textContent = "Oblak";

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

        smallpic.src = "/football/img/wallpapers/C Ronaldo.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2021.json");
        MainFetchPopUp("./json/EveryYear_2021.json");
    }

    if (selectedYear === 17) { 
        STC.textContent = "Lewandowski";
        FR.textContent = "Salah";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "van Dijk";
        DCL.textContent = "R Dias";
        DL.textContent = "Cancelo";
        GK.textContent = "Neuer";


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

        smallpic.src = "/football/img/wallpapers/Salah.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2022.json");
        MainFetchPopUp("./json/EveryYear_2022.json");
    }

    if (selectedYear === 18) { 
        
        STC.textContent = "Lewandowski";
        FR.textContent = "Messi";
        AMC.textContent = "Benzema";
        FL.textContent = "Mbappe";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Casemiro";
        DR.textContent = "Kimmich";
        DCR.textContent = "R Dias";
        DCL.textContent = "Marquinhos";
        DL.textContent = "Cancelo";
        GK.textContent = "Courtois";

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

        smallpic.src = "/football/img/wallpapers/Benzema.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2023.json");
        MainFetchPopUp("./json/EveryYear_2023.json");
    }

    if (selectedYear === 19) { 
     
        STC.textContent = "Haaland";
        FR.textContent = "Salah";
        AMC.textContent = "Messi";
        FL.textContent = "Mbappe";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Rodri";
        DR.textContent = "Cancelo";
        DCR.textContent = "van Dijk";
        DCL.textContent = "R Dias";
        DL.textContent = "Robertson";
        GK.textContent = "Courtois";

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
        
        smallpic.src = "/football/img/wallpapers/Haaland.jpg";

        // FIFAFetchPopUp("./json/EveryYear_2024.json");
        MainFetchPopUp("./json/EveryYear_2024.json");
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
    
 }   // Event listener for the back button
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

// -------------------- hide and show -------------------
    
const nav = document.querySelector("nav");
const backBtn = document.querySelector("#backButton")
const forBtn = document.querySelector("#forwardButton")
const search = document.querySelector(".search-container");

STC2.addEventListener('click', function () {
    nav.style.display = "none";
    backBtn.style.display = "none";
    forBtn.style.display = "none";
    search.style.display = "none";
})
    
AMC2.addEventListener('click', function () {
    nav.style.display = "flex";
    backBtn.style.display = "block";
    forBtn.style.display = "block";
    search.style.display = "block";
})