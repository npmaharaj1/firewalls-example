function checkBox1() {
    const checkBox = document.getElementById('checkBox1');

    function handleCheckboxChange() {
        GlobalIsChecked1 = checkBox.checked;
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

function address1() {
    if (GlobalIsChecked1) {
        document.getElementById('moving-text').innerHTML = Globaltaddress1;
    }
}