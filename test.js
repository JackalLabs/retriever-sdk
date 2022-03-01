const names = require("./index");


function main() {
    let hex = names.getHex("secret1znrwfg0x55dp2s353m2qx90cxm3zslxe7fcxme");
    let jkl = names.getAddress("jackal", hex);

    console.log(jkl);
}

main();