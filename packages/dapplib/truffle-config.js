require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food stone razor snow prosper hard light army genius'; 
let testAccounts = [
"0x69ea467f81b3ac687cc9273921a662874f4ea1863d1221c85fa3596fe89e6fad",
"0x37d685b1ab79d18bbe8683392c3067b7daa561d3cebc0b8c9fa705875b8b5eb9",
"0xc812d6d2533c27653cc83406c5c869f37387b2c42414d6add303b7e0bb5d4419",
"0xed3832558e414145ff3964063e6ee89bafd3b29e94650782f9ee9fe822fa46f4",
"0x54ad123c7b110a8b1d2a8774f95476e4467a8de766c73edb230eb40e3b9df105",
"0x5b17f421085c9860573ab715841df125a1f9abd1e469d76edbdbea3e36585996",
"0xa1c4627b4d319375cd107bb92309548f4339f030c463285f1074d47ed411628b",
"0xae900dcf616dafa30c515f4b9bf0fa55803702d5cc566ff4d8278dd321772e3f",
"0x6c40b3dfd9dac1af73032c4d087449294772b2ac3501b617cc3be977602ffc81",
"0xee097b79604108edb84099003e295654d145e456502cfccfe3d3edf77bfc205f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

