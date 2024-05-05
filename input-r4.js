function checkBox4() {
    const checkBox = document.getElementById('checkBox4');

    function handleCheckboxChange() {
        GlobalIsChecked4 = checkBox.checked;
    }

    checkBox.addEventListener('change', handleCheckboxChange);
}

function submitTAddress4() {
    Globaltaddress4 = validateAddress(document.getElementById("t-address4").value)
}

function submitDAddress4() {
    Globaldaddress4 = validateAddress(document.getElementById("d-address4").value)
}

function submitPort() {
    Globalport4 = validatePort(document.getElementById("port4").value)
}