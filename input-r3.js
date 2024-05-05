function checkBox3() {
    const checkBox = document.getElementById('checkBox3');

    function handleCheckboxChange() {
        GlobalIsChecked3 = checkBox.checked;
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