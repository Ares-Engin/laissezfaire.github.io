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
    var GetAl1 = document.getElementById('al1').value /1;
    var GetAl2 = document.getElementById('al2').value /1;
    var GetAl3 = document.getElementById('al3').value /1;
    var GetAl4 = document.getElementById('al4').value /1;
    var GetTakesAlgae = document.getElementById('takesAlgae').checked ? "Yes" : "No";
    var GetAan = document.getElementById('aan').value /1;
    var GetAap = document.getElementById('aap').value /1;
    var GetTl1 = document.getElementById('tl1').value /1;
    var GetTl2 = document.getElementById('tl2').value /1;
    var GetTl3 = document.getElementById('tl3').value /1;
    var GetTl4 = document.getElementById('tl4').value /1;
    var pickupFromElement = document.querySelector('input[name="pickupFrom"]:checked');
    var GetPickupFrom = pickupFromElement ? pickupFromElement.value : "Not Selected";
    var GetTan = document.getElementById('tan').value /1;
    var GetTap = document.getElementById('tap').value /1;
    var algaePickupFromElement = document.querySelector('input[name="algaePickupFrom"]:checked');
    var GetAlgaePickupFrom = algaePickupFromElement ? algaePickupFromElement.value : "Not Selected";
    var robotStatusFromElement = document.querySelector('input[name="finalrobotstatus"]:checked');
    var GetFinalRobotStatus = robotStatusFromElement ? robotStatusFromElement.value : "Not Selected";
    var GetDriverSkill = document.getElementById('driverSkill').value;
    var GetDefenseRating = document.getElementById('defenseRating').value;
    var GetSpeedRating = document.getElementById('speedRating').value;
    var GetDied = document.getElementById('died').checked ? "Yes" : "No";
    var GetStabilization = document.getElementById('stabilization').value;
    var GetDroppedCoral = document.getElementById('droppedCoral').value /1;
    var GetDroppedAlgae = document.getElementById('droppedAlgae').value /1;
    var GetMakeGoodAlliance = document.getElementById('makeGoodAlliance').value;
    var GetComment = document.getElementById('comment').value;
    var AutonomusScore = GetAl1*3 + GetAl2*4 + GetAl3*6 + GetAl4*7 + GetAan*4 + GetAap*6 + GetHasAuto*3
    if (GetFinalRobotStatus=="parked" || "failedClimb"){
        var parkScore = 2;
    }
    else if (GetFinalRobotStatus=="shallowCage"){
        var parkScore = 6;
    }
    else if(GetFinalRobotStatus=="deepCage"){
        var parkScore = 12;
    }
    var TeleOpScore = GetTl1*2 + GetTl2*3 + GetTl3*4 + GetTl4*5 + GetTan*4 + GetTap*6 + parkScore;

    document.getElementById('result').innerText =
        `|| Scout Name: ${GetScoutName} || Match Level: ${GetMatchLevel} || Match Number: ${GetMatchNumber} || 
         Team Number: ${GetTeamNumber} || Has Auto: ${GetHasAuto} || 
         Autonomous Coral Score: - L1: ${GetAl1} - L2: ${GetAl2} - L3: ${GetAl3} - L4: ${GetAl4} || 
         Takes Algae: ${GetTakesAlgae} || Autonomus Algae Score: - Net: ${GetAan} - Processor: ${GetAap} || 
         TeleOp Coral Score: - L1: ${GetTl1} - L2: ${GetTl2} - L3: ${GetTl3} - L4: ${GetTl4} || 
         Coral Pickup From: ${GetPickupFrom} || TeleOp Algae Score: - Net: ${GetTan}
         - Processor: ${GetTap} || Algae Pickup From: ${GetAlgaePickupFrom}
          || Park Timer: ${totalTime} seconds || 
         Final Robot Status: ${GetFinalRobotStatus} || Driver Skill: ${GetDriverSkill} || Defense Rating: ${GetDefenseRating}
          || Speed Rating: ${GetSpeedRating} || Died: ${GetDied} || Stabilization: ${GetStabilization} || Dropped Coral: 
          ${GetDroppedCoral} || Dropped Algae: ${GetDroppedAlgae} || Make Good Alliance: ${GetMakeGoodAlliance} || 
          Comments: ${GetComment} || Auto Points: ${AutonomusScore} || TeleOp: ${TeleOpScore}`;
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





/*let startTime = null;
let timerInterval = null;

document.getElementById("matchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    var GetScoutName = document.getElementById('scoutName').value; // Get input value
    //var GetMatchLevel = document.getElementById('matchLevel').value;
    var matchLevelElement = document.querySelector('input[name="matchLevel"]:checked');
    var GetMatchLevel = matchLevelElement ? matchLevelElement.value : "Not Selected";
    var GetMatchNumber = document.getElementById('matchNumber').value;
    var GetTeamNumber = document.getElementById('teamNumber').value;
    //var GetHasAuto = document.getElementById('hasAuto').value;
    var GetHasAuto = document.getElementById('hasAuto').checked ? "Yes" : "No";
    var GetAl1 = document.getElementById('al1').value;
    var GetAl2 = document.getElementById('al2').value;
    var GetAl3 = document.getElementById('al3').value;
    var GetAl4 = document.getElementById('al4').value;
    var GetTl1 = document.getElementById('tl1').value;
    var GetTl2 = document.getElementById('tl2').value;
    var GetTl3 = document.getElementById('tl3').value;
    var GetTl4 = document.getElementById('tl4').value;
    //var GetPickupFrom = document.getElementById('pickupFrom').value;
    var pickupFromElement = document.querySelector('input[name="pickupFrom"]:checked');
    var GetPickupFrom = pickupFromElement ? pickupFromElement.value : "Not Selected";
    var robotStatusFromElement = document.querySelector('input[name="finalrobotstatus"]:checked');
    var GetFinalRobotStatus = robotStatusFromElement ? robotStatusFromElement.value : "Not Selected";
    document.getElementById('result').innerText = "|| Scout Name: " + GetScoutName + " || Match Level: " + GetMatchLevel + " || Match Number: " + GetMatchNumber + " || Team Number: " + GetTeamNumber + " || Has Auto: " + GetHasAuto + " || Autonomus Coral Score: - L1: " + GetAl1 + " - L2: " + GetAl2 + " - L3: " + GetAl3 + " - L4: " + GetAl4 + " || TeleOp Coral Score: - L1: " + GetTl1 + " - L2: " + GetTl2 + " - L3: " + GetTl3 + " - L4: " + GetTl4 + " || Pickup From: " + GetPickupFrom + " || Park Timer: " + totalTime + " || Final Robot Status: " + GetFinalRobotStatus;
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
        let totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
        document.getElementById("timer").innerText = `Final Time: ${totalTime} seconds`;
        startTime = null; // Reset for next measurement
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    startTime = null;
    document.getElementById("timer").innerText = "";
}

*/









/*startTimer()
{
    let lastClickTime = null;
    let currentTime = Date.now();
    if (lastClickTime !== null) {
        
    }
    lastClickTime = currentTime;
};
stopTimer()
{
    let timeDifference = (currentTime - lastClickTime) / 1000; // Convert to seconds
    document.getElementById("timer").innerText = timeDifference;
}*/