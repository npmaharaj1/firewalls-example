function checkBox1() {
    const checkBox = document.getElementById('checkBox1');

    function handleCheckboxChange() {
        GlobalIsChecked1 = checkBox.checked;
    }
    if (GlobalIsChecked1 == false) {
        document.getElementById('moving-text1').innerHTML = Globaltaddress1;
    } else {
        document.getElementById('moving-text1').innerHTML = null;
    }
    checkBox.addEventListener('change', handleCheckboxChange);
}

function submitTAddress1() {
    Globaltaddress1 = validateAddress(document.getElementById("t-address1").value)
}

function submitDAddress1() {
    Globaldaddress1 = validateAddress(document.getElementById("d-address1").value)
}

function submitPort() {
    Globalport1 = validatePort(document.getElementById("port1").value)
}

function transferToGlobal(selectedProtocol1) {
    Globalprotocol1 = selectedProtocol1;
}