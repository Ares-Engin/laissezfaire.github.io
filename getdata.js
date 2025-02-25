function onScanSuccess(decodedText) {
    document.getElementById("result").innerText = decodedText;
    seperateData(document.getElementById("result").innerText);
}

let html5QrCode = new Html5Qrcode("reader");
html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    onScanSuccess
);



function seperateData(data){
    let GetData = Array(35).fill(0);
    let dataNo = 0;
    for(let i=0; i < data.lenght; i++){
        let char = data.charAt[i];
        if (char == "*"){
            dataNo++;
            GetData[dataNo] = ""
        }
        else{
            GetData[dataNo] = GetData[dataNo] + char;
        }
    }
    document.getElementById("resultData").innerText = GetData[17];
}
