function checkBox5() {
    const checkBox = document.getElementById('checkBox5');

    function handleCheckboxChange() {
        GlobalIsChecked5 = checkBox.checked;
    }
    if (GlobalIsChecked5 == false) {
        document.getElementById('moving-text5').innerHTML = Globalprotocol5;
        document.getElementById('moving-text-half5').innerHTML = null;
    } else {
        document.getElementById('moving-text5').innerHTML = null;
        document.getElementById('moving-text-half5').innerHTML = Globalprotocol5;
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