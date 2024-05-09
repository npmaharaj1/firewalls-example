function checkBox2() {
    const checkBox = document.getElementById('checkBox2');

    function handleCheckboxChange() {
        GlobalIsChecked2 = checkBox.checked;
    }
    if (GlobalIsChecked2 == false) {
        document.getElementById('moving-text2').innerHTML = Globalprotocol2;
        document.getElementById('moving-text-half2').innerHTML = null;
    } else {
        document.getElementById('moving-text2').innerHTML = null;
        document.getElementById('moving-text-half2').innerHTML = Globalprotocol2;
    }
    checkBox.addEventListener('change', handleCheckboxChange);
}

function submitTAddress2() {
    Globaltaddress2 = validateAddress(document.getElementById("t-address2").value)
}

function submitDAddress2() {
    Globaldaddress2 = validateAddress(document.getElementById("d-address2").value)
}

function submitPort2() {
    Globalport2 = validatePort(document.getElementById("port2").value)
}

function transferToGlobal(selectedProtocol2) {
    Globalprotocol2 = selectedProtocol2;
}