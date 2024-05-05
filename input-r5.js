function checkBox5() {
    const checkBox = document.getElementById('checkBox5');

    function handleCheckboxChange() {
        GlobalIsChecked5 = checkBox.checked;
    }

    checkBox.addEventListener('change', handleCheckboxChange);
}

function submitTAddress5() {
    Globaltaddress5 = validateAddress(document.getElementById("t-address5").value)
}

function submitDAddress5() {
    Globaldaddress5 = validateAddress(document.getElementById("d-address5").value)
}

function submitPort() {
    Globalport5 = validatePort(document.getElementById("port5").value)
}