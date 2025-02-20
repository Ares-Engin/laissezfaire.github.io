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
    document.getElementById('result').innerText = "|| Scout Name: " + GetScoutName + " || Match Level: " + GetMatchLevel + " || Match Number: " + GetMatchNumber + " || Team Number: " + GetTeamNumber + " || Has Auto: " + GetHasAuto + " || Autonomus Coral Score: - L1: " + GetAl1 + " - L2: " + GetAl2 + " - L3: " + GetAl3 + " - L4: " + GetAl4 + " || TeleOp Coral Score: - L1: " + GetTl1 + " - L2: " + GetTl2 + " - L3: " + GetTl3 + " - L4: " + GetTl4 + " || Pickup From: " + GetPickupFrom;
});