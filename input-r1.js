function checkBox1() {
    const checkBox = document.getElementById('checkBox1');

    function handleCheckboxChange() {
        GlobalIsChecked1 = checkBox.checked;
    }
    if (GlobalIsChecked1 == false) {
        document.getElementById('moving-text1').innerHTML = Globaltaddress1;
        document.getElementById('moving-text-half1').innerHTML = null;
    } else {
        document.getElementById('moving-text1').innerHTML = null;
        document.getElementById('moving-text-half1').innerHTML = Globaltaddress1;
    }
    checkBox.addEventListener('change', handleCheckboxChange);
}

function submitProtocol() {
    Globalprotocol1 = document.getElementById('protocol1').value;
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