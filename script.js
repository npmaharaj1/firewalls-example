let GlobalIsChecked1 = false;
let Globaltaddress1 = "192.168.1.89";
let GlobalProtocol1 = "ICMP";
let Globaldaddress1 = "192.168.1.168";
let Globalport1 = "8096";

let GlobalIsChecked2 = false;
let Globaltaddress2 = "10.1.1.34";
let GlobalProtocol2 = "TCP";
let Globaldaddress2 = "10.1.1.167";
let Globalport2 = "80";

let GlobalIsChecked3 = true;
let Globaltaddress3 = "192.168.4.23";
let GlobalProtocol3 = "IGMP";
let Globaldaddress3 = "192.168.4.98";
let Globalport3 = "5555";

let GlobalIsChecked4 = false;
let Globaltaddress4 = "10.13.37.6";
let GlobalProtocol4 = "RAW";
let Globaldaddress4 = "10.13.37.98";
let Globalport4 = "8563";

let GlobalIsChecked5 = true;
let Globaltaddress5 = "10.34.23.43";
let GlobalProtocol5 = "UDP";
let Globaldaddress5 = "10.34.23.198";
let Globalport5 = "11111";

function validateAddress(input) {
    let shouldIExit;
    
    if (input == "") {
        alert("Please enter an ip address")
    } 

    input = input.split(".");
    if (input.length != 4) {
        alert("Not an IP Address");
    }

    if (input[0] == 0) {
        shouldIExit = 1;
        alert("Not an IP Address");
    }

    for (let i = 0; i < 4; i++) {
        if (input[i] > 255 || input[i] < 0) {
            shouldIExit = 1;
            alert("Not an IP Address");
        }
    }
    if (shouldIExit != 1) {
        input = input[0] + "." + input[1] + "." + input[2] + "." + input[3]
        return input;
    }
}

function validatePort(port) {
    if (port >= 0 || port <= 65535) {
        return port;
    } else {
        alert("Not a valid Port");
    }
}

if (GlobalIsChecked1 == true) {
    document.getElementById('moving-text1').innerHTML = GlobalProtocol1;
    document.getElementById('moving-text-half1').innerHTML = null;
} else {
    document.getElementById('moving-text1').innerHTML = null;
    document.getElementById('moving-text-half1').innerHTML = GlobalProtocol1;
}
if (GlobalIsChecked2 == true) {
    document.getElementById('moving-text2').innerHTML = GlobalProtocol2;
    document.getElementById('moving-text-half2').innerHTML = null;
} else {
    document.getElementById('moving-text2').innerHTML = null;
    document.getElementById('moving-text-half2').innerHTML = GlobalProtocol2;
}
if (GlobalIsChecked3 == true) {
    document.getElementById('moving-text3').innerHTML = GlobalProtocol3;
    document.getElementById('moving-text-half3').innerHTML = null;
} else {
    document.getElementById('moving-text3').innerHTML = null;
    document.getElementById('moving-text-half3').innerHTML = GlobalProtocol3;
}
if (GlobalIsChecked4 == true) {
    document.getElementById('moving-text4').innerHTML = GlobalProtocol4;
    document.getElementById('moving-text-half4').innerHTML = null;
} else {
    document.getElementById('moving-text4').innerHTML = null;
    document.getElementById('moving-text-half4').innerHTML = GlobalProtocol4;
}
if (GlobalIsChecked5 == true) {
    document.getElementById('moving-text5').innerHTML = GlobalProtocol5;
    document.getElementById('moving-text-half5').innerHTML = null;
} else {
    document.getElementById('moving-text5').innerHTML = null;
    document.getElementById('moving-text-half5').innerHTML = GlobalProtocol5;
}
window.onload = function() {
    document.getElementById('destinationAddress1').innerHTML = Globaldaddress1;
    document.getElementById('destinationAddress2').innerHTML = Globaldaddress2;
    document.getElementById('destinationAddress3').innerHTML = Globaldaddress3;
    document.getElementById('destinationAddress4').innerHTML = Globaldaddress4;
    document.getElementById('destinationAddress5').innerHTML = Globaldaddress5;
    
    document.getElementById('sourceAddress1').innerHTML = Globaltaddress1;
    document.getElementById('sourceAddress2').innerHTML = Globaltaddress2;
    document.getElementById('sourceAddress3').innerHTML = Globaltaddress3;
    document.getElementById('sourceAddress4').innerHTML = Globaltaddress4;
    document.getElementById('sourceAddress5').innerHTML = Globaltaddress5;

};

document.getElementById('ICMP').innerHTML = GlobalProtocol1;
document.getElementById('TCP').innerHTML = GlobalProtocol2;
document.getElementById('IGMP').innerHTML = GlobalProtocol3;
document.getElementById('RAW').innerHTML = GlobalProtocol4;
document.getElementById('UDP').innerHTML = GlobalProtocol5;
