import { Bech32, fromHex, toHex } from '@cosmjs/encoding'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

export function resolveName (name: string, prefix: string): Promise<string> {
    return new Promise((resolve, reject) => {
        SigningCosmWasmClient.connect("https://rpc.uni.junomint.com:443/").then((client) => {

            let contractAddress = "juno1qr76sfjnr40xulzlymm2ehx5wxwv8pyqnlah5smqtnfrq446guvs42xc6l";

            const msg = { resolve_attributes: { name: name } }

            client
            .queryContractSmart(contractAddress, msg)
            .then((response) => {

                switch(prefix) {
                    case "secret":
                        resolve(response.name.secret_address);
                        break;
                    case "cro":
                        resolve(response.name.crypto_org_address);
                        break;
                    case "star":
                        resolve(response.name.starname_address);
                        break;
                    case "persistence":
                        resolve(response.name.persistence_address);
                        break;
                    case "kava":
                        resolve(response.name.kava_address);
                        break;
                    default:
                        resolve(getAddress(prefix, getHex(response.name.owner)));
                        break;
                }
            })
            .catch((err: any) => {
                reject(err);
            })
        });
    });
    
}

export function getAddress (prefix: string, hex: string): string {
    return Bech32.encode(prefix, fromHex(hex))
}

export function getHex (address: string): string {
    return toHex(Bech32.decode(address).data)
}


export default { getAddress, getHex, resolveName }