function checkBox5() {
    const checkBox = document.getElementById('checkBox5');

    function handleCheckboxChange() {
        GlobalIsChecked5 = checkBox.checked;
    }
    if (GlobalIsChecked5 == false) {
        document.getElementById('moving-text4').innerHTML = Globaltaddress5;
    } else {
        document.getElementById('moving-text4').innerHTML = null;
    }
    checkBox.addEventListener('change', handleCheckboxChange);
}

function submitTAddress5() {
    Globaltaddress5 = validateAddress(document.getElementById("t-address5").value)
}

function submitDAddress5() {
    Globaldaddress5 = validateAddress(document.getElementById("d-address5").value)
}

function submitPort5() {
    Globalport5 = validatePort(document.getElementById("port5").value)
}

function transferToGlobal(selectedProtocol1) {
    Globalprotocol1 = selectedProtocol1;
}