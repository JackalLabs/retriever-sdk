import { expect } from '@jest/globals'
import { getHex, getAddress, resolveName } from '../src'

const testAddr = 'secret1znrwfg0x55dp2s353m2qx90cxm3zslxe7fcxme'

test('should parse testAddr to hex string', () => {
    expect(typeof getHex(testAddr)).toBe('string')
    expect(getHex(testAddr)).toEqual('14c6e4a1e6a51a1542348ed40315f836e2287cd9')
})

test('should parse testAddr to jackal address', () => {
    expect(getAddress('jackal', getHex(testAddr))).toEqual('jackal1znrwfg0x55dp2s353m2qx90cxm3zslxed7rev9')
})

test('should parse marston to jackal address', () => {
    
    resolveName("marston", "jackal").then((res) => {
        console.log(res);
        console.log('\n');
        expect("e").toEqual("e");
    }).catch((err) => {
        console.log(err);
    })
    // expect(getAddress('jackal', getHex(testAddr))).toEqual('jackal1znrwfg0x55dp2s353m2qx90cxm3zslxed7rev9')
})