
var fs = require('fs');

const contract = JSON.parse(fs.readFileSync('./build/contracts/CryptoZombies.json', 'utf8'));
const CryptoZombies = new web3.eth.Contract(contract.abi, '0xE118ecEE07906B0aeab99D18679AF10C1FA38827');
const owner = "0x1Ae7E4d19f560B0935Ac80114B43c1C9AD23C35b";
async function setup(){
    CryptoZombies.methods.setLevelUpFee(1).send({from:owner}).on('receipt', function(receipt){
        console.log(receipt);
    }).on('error', function(error, receipt) { 
        console.log(error,receipt);
    });
}
// async function createZombie(){
//     CryptoZombies.methods.createRandomZombie("PU").estimateGas({from: owner})
//     .then(function(gasAmount){
//         console.log(gasAmount);
//         CryptoZombies.methods.createRandomZombie("PU").send({from:owner, gas:gasAmount}).on('receipt', function(receipt){
//             console.log(receipt);
//         }).on('error', function(error, receipt) { 
//             console.log(error,receipt);
//         });
//     })
//     .catch(function(error){
//         console.log(error);
//     });
    
// }
// async function checkMyZombies(){
//     CryptoZombies.methods.getZombiesByOwner(owner).call().then(result=>{console.log(result)});
// }
module.exports = setup;