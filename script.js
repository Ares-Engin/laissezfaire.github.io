let startTime = null;
let timerInterval = null;
let totalTime = 0;
let onlyData = "";
let textData = "";
let numCaunters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
updateNumbers();


document.getElementById("matchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let GetAl1_01 = document.getElementById('al1_1').value / 1;
    let GetAl2_02 = document.getElementById('al2_2').value / 1;
    let GetAl3_03 = document.getElementById('al3_3').value / 1;
    let GetAl4_04 = document.getElementById('al4_4').value / 1;
    let GetAdc_05 = document.getElementById('adc_5').value / 1;
    let GetAan_06 = document.getElementById('aan_6').value / 1;
    let GetAap_07 = document.getElementById('aap_7').value / 1;
    let GetAaf_08 = document.getElementById('aaf_8').value / 1;

    let GetTl1_09 = document.getElementById('tl1_9').value / 1;
    let GetTl2_10 = document.getElementById('tl2_10').value / 1;
    let GetTl3_11 = document.getElementById('tl3_11').value / 1;
    let GetTl4_12 = document.getElementById('tl4_12').value / 1;
    let GetTdc_13 = document.getElementById('tdc_13').value / 1;
    let GetTan_14 = document.getElementById('tan_14').value / 1;
    let GetTap_15 = document.getElementById('tap_15').value / 1;
    let GetTaf_16 = document.getElementById('taf_16').value / 1;

    let GetScoutName_17 = document.getElementById('scoutName').value;
    let matchLevelElement = document.querySelector('input[name="matchLevel"]:checked');
    let GetMatchLevel_18 = matchLevelElement ? matchLevelElement.value : "Not Selected";
    let GetMatchNumber_19 = document.getElementById('matchNumber').value;
    let GetTeamNumber_20 = document.getElementById('teamNumber').value;
    let GetHasAuto_21 = document.getElementById('hasAuto').checked ? "Yes" : "No";
    
    
    let GetTakesAlgae_22 = document.getElementById('takesAlgae').checked ? "Yes" : "No";


    let pickupFromElement = document.querySelector('input[name="pickupFrom"]:checked');
    let GetPickupFrom_23 = pickupFromElement ? pickupFromElement.value : "Not Selected";


    let algaePickupFromElement = document.querySelector('input[name="algaePickupFrom"]:checked');
    let GetAlgaePickupFrom_24 = algaePickupFromElement ? algaePickupFromElement.value : "Not Selected";

    let GetParkTime_25 = totalTime;

    let robotStatusFromElement = document.querySelector('input[name="finalrobotstatus"]:checked');
    let GetFinalRobotStatus_26 = robotStatusFromElement ? robotStatusFromElement.value : "Not Selected";

    let GetDriverSkill_27 = document.getElementById('driverSkill').value;
    let GetDefenseRating_28 = document.getElementById('defenseRating').value;
    let GetSpeedRating_29 = document.getElementById('speedRating').value;
    let GetDied_30 = document.getElementById('died').checked ? "Yes" : "No";
    let GetStabilization_31 = document.getElementById('stabilization').value;

    let GetMakeGoodAlliance_32 = document.getElementById('makeGoodAlliance').value;
    let GetComment_33 = document.getElementById('comment').value;

    let AutoLeaveScore = GetHasAuto_21 === "Yes" ? 3 : 0;
    let AutonomusScore_34 = GetAl1_01 * 3 + GetAl2_02 * 4 + GetAl3_03 * 6 + GetAl4_04 * 7 + GetAan_06 * 4 + GetAap_07 * 6 + AutoLeaveScore;

    let parkScore = 0;
    if (GetFinalRobotStatus_26 === "parked") {
        parkScore = 2;
    } else if (GetFinalRobotStatus_26 === "shallowCage") {
        parkScore = 6;
    } else if (GetFinalRobotStatus_26 === "deepCage") {
        parkScore = 12;
    } else if (GetFinalRobotStatus_26 === "failedClimb") {
        parkScore = 2;
    }

    let TeleOpScore_35 = GetTl1_09 * 2 + GetTl2_10 * 3 + GetTl3_11 * 4 + GetTl4_12 * 5 + GetTan_14 * 4 + GetTap_15 * 6;
    let EndGameScore_36 = parkScore;

    onlyDataCorrectOrder = `${GetScoutName_17}*${GetMatchLevel_18}*${GetMatchNumber_19}*${GetTeamNumber_20}*${GetHasAuto_21}*${GetAl1_01}*${GetAl2_02}*${GetAl3_03}*${GetAl4_04}*${GetAdc_05}*${GetTakesAlgae_22}*${GetAan_06}*${GetAap_07}*${GetAaf_08}*${GetTl1_09}*${GetTl2_10}*${GetTl3_11}*${GetTl4_12}*${GetTdc_13}*${GetPickupFrom_23}*${GetTan_14}*${GetTap_15}*${GetTaf_16}*${GetAlgaePickupFrom_24}*${GetParkTime_25}*${GetFinalRobotStatus_26}*${GetDriverSkill_27}*${GetDefenseRating_28}*${GetSpeedRating_29}*${GetDied_30}*${GetStabilization_31}*${GetMakeGoodAlliance_32}*${GetComment_33}*${AutonomusScore_34}*${TeleOpScore_35}*${EndGameScore_36}*${AutonomusScore_34 + TeleOpScore_35 + EndGameScore_36}`;
   
    document.getElementById("result_correctorder").innerText = onlyDataCorrectOrder;

});


function startTimer() {
    if (startTime === null) {
        startTime = Date.now();
        document.getElementById("timer").innerText = "Timing...";
        timerInterval = setInterval(updateTimer, 100);
    }
}

function updateTimer() {
    if (startTime !== null) {
        let elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        document.getElementById("timer").innerText = `Time: ${elapsedTime} seconds`;
    }
}

function stopTimer() {
    if (startTime !== null) {
        clearInterval(timerInterval);
        totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
        document.getElementById("timer").innerText = `Final Time: ${totalTime} seconds`;
        startTime = null;
        timerInterval = null;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    startTime = null;
    timerInterval = null;
    totalTime = 0;
    document.getElementById("timer").innerText = "";
}

function updateNumbers(){
    document.getElementById("al1_1").value = numCaunters[0];
    document.getElementById("al2_2").value = numCaunters[1];
    document.getElementById("al3_3").value = numCaunters[2];
    document.getElementById("al4_4").value = numCaunters[3];
    document.getElementById("adc_5").value = numCaunters[4];
    document.getElementById("aan_6").value = numCaunters[5];
    document.getElementById("aap_7").value = numCaunters[6];
    document.getElementById("aaf_8").value = numCaunters[7];
    document.getElementById("tl1_9").value = numCaunters[8];
    document.getElementById("tl2_10").value = numCaunters[9];
    document.getElementById("tl3_11").value = numCaunters[10];
    document.getElementById("tl4_12").value = numCaunters[11];
    document.getElementById("tdc_13").value = numCaunters[12];
    document.getElementById("tan_14").value = numCaunters[13];
    document.getElementById("tap_15").value = numCaunters[14];
    document.getElementById("taf_16").value = numCaunters[15];

    document.getElementById("al1_1").innerText = numCaunters[0];
    document.getElementById("al2_2").innerText = numCaunters[1];
    document.getElementById("al3_3").innerText = numCaunters[2];
    document.getElementById("al4_4").innerText = numCaunters[3];
    document.getElementById("adc_5").innerText = numCaunters[4];
    document.getElementById("aan_6").innerText = numCaunters[5];
    document.getElementById("aap_7").innerText = numCaunters[6];
    document.getElementById("aaf_8").innerText = numCaunters[7];
    document.getElementById("tl1_9").innerText = numCaunters[8];
    document.getElementById("tl2_10").innerText = numCaunters[9];
    document.getElementById("tl3_11").innerText = numCaunters[10];
    document.getElementById("tl4_12").innerText = numCaunters[11];
    document.getElementById("tdc_13").innerText = numCaunters[12];
    document.getElementById("tan_14").innerText = numCaunters[13];
    document.getElementById("tap_15").innerText = numCaunters[14];
    document.getElementById("taf_16").innerText = numCaunters[15];
}

function decreaseNum(d_num){
    
    if (numCaunters[d_num -1] !== 0){
        numCaunters[d_num -1]--;
    }
    updateNumbers();
}

function increaseNum(i_num){
    if (numCaunters[i_num -1] !== 16){
        numCaunters[i_num -1]++;
    }
    updateNumbers();
}

function copyText() {
    let text = document.getElementById("result_correctorder").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Text copied!");
    }).catch(err => console.error("Error copying text:", err));
}
