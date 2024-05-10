function checkBox3() {
    const checkBox = document.getElementById('checkBox3');

    function handleCheckboxChange() {
        GlobalIsChecked3 = checkBox.checked;
    }
    if (GlobalIsChecked3 == false) {
        document.getElementById('moving-text3').innerHTML = GlobalProtocol3;
        document.getElementById('moving-text-half3').innerHTML = null;
    } else {
        document.getElementById('moving-text3').innerHTML = null;
        document.getElementById('moving-text-half3').innerHTML = GlobalProtocol3;
    }
    checkBox.addEventListener('change', handleCheckboxChange);
}

function submitTAddress3() {
    Globaltaddress3 = validateAddress(document.getElementById("t-address3").value)
}

function submitDAddress3() {
    Globaldaddress3 = validateAddress(document.getElementById("d-address3").value)
}

function submitPort3() {
    Globalport3 = validatePort(document.getElementById("port3").value)
}