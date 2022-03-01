const cosm = require("@cosmjs/encoding");
const Bech32 = cosm.Bech32;

function getAddress(prefix, hex) {
    let address = Bech32.encode(prefix, cosm.fromHex(hex));
    return address;
}

function getHex(address) {
    let addr = cosm.toHex(Bech32.decode(address).data);
    return addr;
}

module.exports = {getAddress, getHex};