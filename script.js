let GlobalIsChecked1 = false;
let Globaltaddress1 = "192.168.1.89";
let Globalprotocol1 = "tcp";
let Globaldaddress1 = "192.168.1.168";
let Globalport1 = "8096";

let GlobalIsChecked2 = false;
let Globaltaddress2 = "10.1.1.34";
let Globalprotocol2 = "icmp";
let Globaldaddress2 = "10.1.1.167";
let Globalport2 = "80";

let GlobalIsChecked3 = true;
let Globaltaddress3 = "192.168.4.23";
let Globalprotocol3 = "udp";
let Globaldaddress3 = "192.168.4.98";
let Globalport3 = "5555";

let GlobalIsChecked4 = false;
let Globaltaddress4 = "10.13.37.6";
let Globalprotocol4 = "raw";
let Globaldaddress4 = "10.13.37.98";
let Globalport4 = "8563";

let GlobalIsChecked5 = true;
let Globaltaddress5 = "10.34.23.43";
let Globalprotocol5 = "igmp";
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

function printout() {
    console.log(GlobalIsChecked1);
    console.log(Globaltaddress1);
    console.log(Globalprotocol1);
    console.log(Globaldaddress1);
    console.log(Globalport1);

    console.log(" ")

    console.log(GlobalIsChecked2);
    console.log(Globaltaddress2);
    console.log(Globalprotocol2);
    console.log(Globaldaddress2);
    console.log(Globalport2);

    console.log(" ")

    console.log(GlobalIsChecked3);
    console.log(Globaltaddress3);
    console.log(Globalprotocol3);
    console.log(Globaldaddress3);
    console.log(Globalport3);

    console.log(" ")

    console.log(GlobalIsChecked4);
    console.log(Globaltaddress4);
    console.log(Globalprotocol4);
    console.log(Globaldaddress4);
    console.log(Globalport4);

    console.log(" ")

    console.log(GlobalIsChecked5);
    console.log(Globaltaddress5);
    console.log(Globalprotocol5);
    console.log(Globaldaddress5);
    console.log(Globalport5);
}