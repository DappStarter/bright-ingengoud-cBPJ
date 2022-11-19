require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift regret ridge uncover hover derive tail silk'; 
let testAccounts = [
"0x593e6d3c05cdd4d3af1c3dece017ad82e65f4a8aec2c8c83b01f2ebd9f462a94",
"0x1a5a65a940075175e785627f872e50005d0a027ee776de99e3a0e613d44b31d0",
"0xc3b58cc938bd54a3f316276a0b8ae1b56bf12f92f5138d343c2a3a09514b4504",
"0xf2282b619cd9a658fc54e7ff466bbd359bdce95b79310b44138536aea98fcb5a",
"0x83f91dfd603b3a1eda97387e5ab7b6cecae3600a88bb9f1062c8856ca7fa5c6d",
"0xd9f80a320e89d539f38b5aa6f24d7a813177d865d701c9eb64c4b9fea0a03e0a",
"0x1305e341417f0d0429bcdbebf9b658024964ebf55b2a93a57326ca48c089d59c",
"0xd6ecbadd3116a8135ae095dc85ccfe9f54fd15d5e219d9f1211c6f52a77f1e18",
"0xe87ca947a930e252c6ce19b28bae6c629b8923b433c68f08fad722d0a3210be5",
"0x871e194acdfdf41e7e97ed2c41ab43826c7e699e5a77f7038df6aa7a8247b169"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

