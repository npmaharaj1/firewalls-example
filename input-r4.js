function checkBox4() {
    const checkBox = document.getElementById('checkBox4');

    function handleCheckboxChange() {
        GlobalIsChecked4 = checkBox.checked;
    }
    if (GlobalIsChecked4 == false) {
        document.getElementById('moving-text').innerHTML = Globaltaddress4;
    } else {
        document.getElementById('moving-text').innerHTML = null;
    }
    checkBox.addEventListener('change', handleCheckboxChange);
}

function submitTAddress4() {
    Globaltaddress4 = validateAddress(document.getElementById("t-address4").value)
}

function submitDAddress4() {
    Globaldaddress4 = validateAddress(document.getElementById("d-address4").value)
}

function submitPort4() {
    Globalport4 = validatePort(document.getElementById("port4").value)
}

function transferToGlobal(selectedProtocol4) {
    Globalprotocol4 = selectedProtocol4;
}