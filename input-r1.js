function checkBox1() {
    const checkBox = document.getElementById('checkBox1');

    function handleCheckboxChange() {
        GlobalIsChecked1 = checkBox.checked;
    }
    document.getElementById('sourceAddress1').innerHTML = Globaltaddress1;

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