let startTime = null;
let timerInterval = null;
let totalTime = 0; // Define totalTime globally

document.getElementById("matchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    var GetScoutName = document.getElementById('scoutName').value;
    var matchLevelElement = document.querySelector('input[name="matchLevel"]:checked');
    var GetMatchLevel = matchLevelElement ? matchLevelElement.value : "Not Selected";
    var GetMatchNumber = document.getElementById('matchNumber').value;
    var GetTeamNumber = document.getElementById('teamNumber').value;
    var GetHasAuto = document.getElementById('hasAuto').checked ? "Yes" : "No";
    var GetAl1 = document.getElementById('al1').value;
    var GetAl2 = document.getElementById('al2').value;
    var GetAl3 = document.getElementById('al3').value;
    var GetAl4 = document.getElementById('al4').value;
    var GetTl1 = document.getElementById('tl1').value;
    var GetTl2 = document.getElementById('tl2').value;
    var GetTl3 = document.getElementById('tl3').value;
    var GetTl4 = document.getElementById('tl4').value;
    var pickupFromElement = document.querySelector('input[name="pickupFrom"]:checked');
    var GetPickupFrom = pickupFromElement ? pickupFromElement.value : "Not Selected";
    var robotStatusFromElement = document.querySelector('input[name="finalrobotstatus"]:checked');
    var GetFinalRobotStatus = robotStatusFromElement ? robotStatusFromElement.value : "Not Selected";

    document.getElementById('result').innerText =
        `|| Scout Name: ${GetScoutName} || Match Level: ${GetMatchLevel} || Match Number: ${GetMatchNumber} || 
         Team Number: ${GetTeamNumber} || Has Auto: ${GetHasAuto} || 
         Autonomous Coral Score: L1: ${GetAl1} - L2: ${GetAl2} - L3: ${GetAl3} - L4: ${GetAl4} || 
         TeleOp Coral Score: L1: ${GetTl1} - L2: ${GetTl2} - L3: ${GetTl3} - L4: ${GetTl4} || 
         Pickup From: ${GetPickupFrom} || Park Timer: ${totalTime} seconds || 
         Final Robot Status: ${GetFinalRobotStatus}`;
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
        totalTime = ((Date.now() - startTime) / 1000).toFixed(2); // Store final time
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
