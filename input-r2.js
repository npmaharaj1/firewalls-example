function checkBox2() {
    const checkBox = document.getElementById('checkBox2');

    function handleCheckboxChange() {
        GlobalIsChecked2 = checkBox.checked;
    }

    checkBox.addEventListener('change', handleCheckboxChange);
}

function submitTAddress2() {
    Globaltaddress2 = validateAddress(document.getElementById("t-address2").value)
}

function submitDAddress2() {
    Globaldaddress2 = validateAddress(document.getElementById("d-address2").value)
}

function submitPort() {
    Globalport2 = validatePort(document.getElementById("port2").value)
}