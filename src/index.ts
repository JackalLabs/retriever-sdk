import { Bech32, fromHex, toHex } from '@cosmjs/encoding'

export function getAddress (prefix: string, hex: string): string {
    return Bech32.encode(prefix, fromHex(hex))
}

export function getHex (address: string): string {
    return toHex(Bech32.decode(address).data)
}

export default { getAddress, getHex }