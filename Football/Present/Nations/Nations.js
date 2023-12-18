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

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;
    
    if (selectedYear === "4") {

        STC.textContent = "Mbappe";
        FR.textContent = "O Dembele";
        AMC.textContent = "Griezmann";
        FL.textContent = "Coman";
        CMR.textContent = "Tchouameni";
        CML.textContent = "Rabiot";
        DR.textContent = "Kounde";
        DCR.textContent = "Varane";
        DCL.textContent = "L Hernandez";
        DL.textContent = "T Hernandez";
        GK.textContent = "Maignan";
    
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
        
        smallpic.src = "/football/img/logos/france.webp"

        MainFetchPopUp("/football/present/nations/json/france.json");
    }

    if (selectedYear === "2") {

        STC.textContent = "G Jesus";
        FR.textContent = "Rodrygo";
        AMC.textContent = "Neymar";
        FL.textContent = "Vinicius Jr";
        CMR.textContent = "Guimaraes";
        CML.textContent = "Casemiro";
        DR.textContent = "E Militao";
        DCR.textContent = "Marquinhos";
        DCL.textContent = "Gabriel";
        DL.textContent = "Danilo";
        GK.textContent = "Ederson";

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

        smallpic.src = "/football/img/logos/brazil.webp"

        MainFetchPopUp("/football/present/nations/json/brazil.json");

    }

    if (selectedYear === "9") {

        STC.textContent = "Morata";
        FR.textContent = "D Olmo";
        AMC.textContent = "Pedri";
        FL.textContent = "Gavi";
        CMR.textContent = "Koke";
        CML.textContent = "Rodri";
        DR.textContent = "P Porro";
        DCR.textContent = "P Torres";
        DCL.textContent = "Laporte";
        DL.textContent = "Balde";
        GK.textContent = "U Simon";

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

        smallpic.src = "/football/img/logos/spain.webp"

        MainFetchPopUp("/football/present/nations/json/spain.json");
    }

    if (selectedYear === "3") {

        STC.textContent = "Kane";
        FR.textContent = "Saka";
        AMC.textContent = "Grealish";
        FL.textContent = "Rashford";
        CMR.textContent = "Bellingham";
        CML.textContent = "Rice";
        DR.textContent = "Alexander-A";
        DCR.textContent = "Stones";
        DCL.textContent = "Tomori";
        DL.textContent = "Shaw";
        GK.textContent = "Ramsdale";

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

        smallpic.src = "/football/img/logos/england.webp"

        MainFetchPopUp("/football/present/nations/json/england.json");
    }

    if (selectedYear === "5") {

        STC.textContent = "Muller";
        FR.textContent = "Sane";
        AMC.textContent = "Wirtz";
        FL.textContent = "Musiala";
        CMR.textContent = "Gundogan";
        CML.textContent = "Kroos";
        DR.textContent = "Kimmich";
        DCR.textContent = "Rudiger";
        DCL.textContent = "Sule";
        DL.textContent = "Gosens";
        GK.textContent = "ter Stegen";

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

        smallpic.src = "/football/img/logos/germany.webp"

        MainFetchPopUp("/football/present/nations/json/germany.json");
    }

    if (selectedYear === "0") {

        STC.textContent = "La Martinez";
        FR.textContent = "Messi";
        AMC.textContent = "Alvarez";
        FL.textContent = "De Paul";
        CMR.textContent = "E Fernandez";
        CML.textContent = "Mac Allister";
        DR.textContent = "N Molina";
        DCR.textContent = "C Romero";
        DCL.textContent = "Li Martinez";
        DL.textContent = "Acuna";
        GK.textContent = "E Martinez";
    
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
        
        smallpic.src = "/football/img/logos/argentina.webp"

        MainFetchPopUp("/football/present/nations/json/argentina.json");
    }
        if (selectedYear === "6") {

            STC.textContent = "Immobile";
            FR.textContent = "Berardi";
            AMC.textContent = "Barella";
            FL.textContent = "Chiesa";
            CMR.textContent = "Verratti";
            CML.textContent = "Tonali";
            DR.textContent = "Di Lorenzo";
            DCR.textContent = "G Mancini";
            DCL.textContent = "Bastoni";
            DL.textContent = "Dimarco";
            GK.textContent = "Donnarumma";

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

            smallpic.src = "/football/img/logos/italy.webp"

            MainFetchPopUp("/football/present/nations/json/italy.json");
        }

        if (selectedYear === "8") {

            STC.textContent = "D Jota";
            FR.textContent = "B Silva";
            AMC.textContent = "B Fernandes";
            FL.textContent = "R Leao";
            CMR.textContent = "R Neves";
            CML.textContent = "Palhinha";
            DR.textContent = "Cancelo";
            DCR.textContent = "R Dias";
            DCL.textContent = "D Pereira";
            DL.textContent = "Guerreiro";
            GK.textContent = "D Costa";

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

            smallpic.src = "/football/img/logos/portugal.webp"

            MainFetchPopUp("/football/present/nations/json/portugal.json");
        }

        if (selectedYear === "1") {
            STC.textContent = "Lukaku";
            FR.textContent = "Doku";
            AMC.textContent = "De Bruyne";
            FL.textContent = "Trossard";
            CMR.textContent = "Tielemans";
            CML.textContent = "Witsel";
            DR.textContent = "Castagne";
            DCR.textContent = "Alderweireld";
            DCL.textContent = "Vertonghen";
            DL.textContent = "Theate";
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
    
            smallpic.src = "/football/img/logos/belgium.webp"

            MainFetchPopUp("/football/present/nations/json/belgium.json");
        }

        if (selectedYear === "7") {

            STC.textContent = "Gakpo";
            FR.textContent = "Malen";
            AMC.textContent = "M Depay";
            FL.textContent = "Danjuma";
            CMR.textContent = "Berghuis";
            CML.textContent = "F de Jong";
            DR.textContent = "Frimpong";
            DCR.textContent = "van Dijk";
            DCL.textContent = "de Ligt";
            DL.textContent = "N Ake";
            GK.textContent = "Flekken";

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
    
            smallpic.src = "/football/img/logos/netherlands.webp"

            MainFetchPopUp("/football/present/nations/json/netherlands.json");
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

         if (selectedYear === 4) {

        STC.textContent = "Mbappe";
        FR.textContent = "O Dembele";
        AMC.textContent = "Griezmann";
        FL.textContent = "Coman";
        CMR.textContent = "Tchouameni";
        CML.textContent = "Rabiot";
        DR.textContent = "Kounde";
        DCR.textContent = "Varane";
        DCL.textContent = "L Hernandez";
        DL.textContent = "T Hernandez";
        GK.textContent = "Maignan";
    
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
        
        smallpic.src = "/football/img/logos/france.webp"
             
        MainFetchPopUp("/football/present/nations/json/france.json");    
    }

    if (selectedYear === 2) {

        STC.textContent = "G Jesus";
        FR.textContent = "Rodrygo";
        AMC.textContent = "Neymar";
        FL.textContent = "Vinicius Jr";
        CMR.textContent = "Guimaraes";
        CML.textContent = "Casemiro";
        DR.textContent = "E Militao";
        DCR.textContent = "Marquinhos";
        DCL.textContent = "Gabriel";
        DL.textContent = "Danilo";
        GK.textContent = "Ederson";

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

        smallpic.src = "/football/img/logos/brazil.webp"

        MainFetchPopUp("/football/present/nations/json/brazil.json");
    }

    if (selectedYear === 9) {

        STC.textContent = "Morata";
        FR.textContent = "D Olmo";
        AMC.textContent = "Pedri";
        FL.textContent = "Gavi";
        CMR.textContent = "Koke";
        CML.textContent = "Rodri";
        DR.textContent = "P Porro";
        DCR.textContent = "P Torres";
        DCL.textContent = "Laporte";
        DL.textContent = "Balde";
        GK.textContent = "U Simon";

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

        smallpic.src = "/football/img/logos/spain.webp"

        MainFetchPopUp("/football/present/nations/json/spain.json");
    }

    if (selectedYear === 3) {

        STC.textContent = "Kane";
        FR.textContent = "Saka";
        AMC.textContent = "Grealish";
        FL.textContent = "Rashford";
        CMR.textContent = "Bellingham";
        CML.textContent = "Rice";
        DR.textContent = "Alexander-A";
        DCR.textContent = "Stones";
        DCL.textContent = "Tomori";
        DL.textContent = "Shaw";
        GK.textContent = "Ramsdale";

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

        smallpic.src = "/football/img/logos/england.webp"

        MainFetchPopUp("/football/present/nations/json/england.json");
    }

    if (selectedYear === 5) {

        STC.textContent = "Muller";
        FR.textContent = "Sane";
        AMC.textContent = "Wirtz";
        FL.textContent = "Musiala";
        CMR.textContent = "Gundogan";
        CML.textContent = "Kroos";
        DR.textContent = "Kimmich";
        DCR.textContent = "Rudiger";
        DCL.textContent = "Sule";
        DL.textContent = "Gosens";
        GK.textContent = "ter Stegen";

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

        smallpic.src = "/football/img/logos/germany.webp"

        MainFetchPopUp("/football/present/nations/json/germany.json");
    }

    if (selectedYear === 0) {

        STC.textContent = "La Martinez";
        FR.textContent = "Messi";
        AMC.textContent = "Alvarez";
        FL.textContent = "De Paul";
        CMR.textContent = "E Fernandez";
        CML.textContent = "Mac Allister";
        DR.textContent = "N Molina";
        DCR.textContent = "C Romero";
        DCL.textContent = "Li Martinez";
        DL.textContent = "Acuna";
        GK.textContent = "E Martinez";
    
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
        
        smallpic.src = "/football/img/logos/argentina.webp"

        MainFetchPopUp("/football/present/nations/json/argentina.json");
    }
        if (selectedYear === 6) {

            STC.textContent = "Immobile";
            FR.textContent = "Berardi";
            AMC.textContent = "Barella";
            FL.textContent = "Chiesa";
            CMR.textContent = "Verratti";
            CML.textContent = "Tonali";
            DR.textContent = "Di Lorenzo";
            DCR.textContent = "G Mancini";
            DCL.textContent = "Bastoni";
            DL.textContent = "Dimarco";
            GK.textContent = "Donnarumma";

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

            smallpic.src = "/football/img/logos/italy.webp"

            MainFetchPopUp("/football/present/nations/json/italy.json");
        }

        if (selectedYear === 8) {

            STC.textContent = "D Jota";
            FR.textContent = "B Silva";
            AMC.textContent = "B Fernandes";
            FL.textContent = "R Leao";
            CMR.textContent = "R Neves";
            CML.textContent = "Palhinha";
            DR.textContent = "Cancelo";
            DCR.textContent = "R Dias";
            DCL.textContent = "D Pereira";
            DL.textContent = "Guerreiro";
            GK.textContent = "D Costa";

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

            smallpic.src = "/football/img/logos/portugal.webp"

            MainFetchPopUp("/football/present/nations/json/portugal.json");
        }

        if (selectedYear === 1) {
            STC.textContent = "Lukaku";
            FR.textContent = "Doku";
            AMC.textContent = "De Bruyne";
            FL.textContent = "Trossard";
            CMR.textContent = "Tielemans";
            CML.textContent = "Witsel";
            DR.textContent = "Castagne";
            DCR.textContent = "Alderweireld";
            DCL.textContent = "Vertonghen";
            DL.textContent = "Theate";
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
    
            smallpic.src = "/football/img/logos/belgium.webp"

            MainFetchPopUp("/football/present/nations/json/begium.json");
        }

        if (selectedYear === 7) {

            STC.textContent = "Gakpo";
            FR.textContent = "Malen";
            AMC.textContent = "M Depay";
            FL.textContent = "Danjuma";
            CMR.textContent = "Berghuis";
            CML.textContent = "F de Jong";
            DR.textContent = "Frimpong";
            DCR.textContent = "van Dijk";
            DCL.textContent = "de Ligt";
            DL.textContent = "N Ake";
            GK.textContent = "Flekken";

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
    
            smallpic.src = "/football/img/logos/netherlands.webp"

            MainFetchPopUp("/football/present/nations/json/netherlands.json");
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