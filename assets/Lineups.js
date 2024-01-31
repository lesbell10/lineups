// ------------------------------------- fifa ----------------------------------------

if (selectedYear === "0") {

    STC.textContent = "";
    FR.textContent = "";
    AMC.textContent = "";
    FL.textContent = "";
    CMR.textContent = "";
    CML.textContent = "";
    DR.textContent = "";
    DCR.textContent = "";
    DCL.textContent = "";
    DL.textContent = "";
    GK.textContent = "";

    STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
    FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
    AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
    FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
    CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
    CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
    DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
    DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
    DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
    DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
    GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

    smallpic.src = "";

    MainFetchPopUp("");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = ""
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
}

// ----------------------------------- nhl -----------------------------------------

if (selectedYear === "0") {

    FL.textContent = "";
    FC.textContent = "";
    FR.textContent = "";
    DL.textContent = "";
    DR.textContent = "";
    G.textContent = "";

    FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
    FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
    FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
    DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
    DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
    G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

    smallpic.src = "";

    MainFetchPopUp("");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = ""
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
}
// ------------------------------ nba ----------------------------------------

if (selectedYear === "0") {

    PG.textContent = "";
    SG.textContent = "";
    SF.textContent = "";
    PF.textContent = "";
    C.textContent = "";

    PG2.src = "/basket/img/players/" + PG.textContent + ".png";
    SG2.src = "/basket/img/players/" + SG.textContent + ".png";
    SF2.src = "/basket/img/players/" + SF.textContent + ".png";
    PF2.src = "/basket/img/players/" + PF.textContent + ".png";
    C2.src = "/basket/img/players/" + C.textContent + ".png";

    smallpic.src = "";

    MainFetchPopUp("");

    smallpic.addEventListener('mouseover', () => {
        sideModal.style.display = 'block'
        sideModal.textContent = ""
    })

    smallpic.addEventListener("mouseout", () => {
        sideModal.style.display = 'none'; // Hide the modal
    });
}
