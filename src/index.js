const { ethers } = require("ethers");

async function waitForTargetBlock(confirmations, providerURL="https://127.0.0.1:8545") {
  const WAIT_BLOCK_CONFIRMATIONS = confirmations;
  const provider = new ethers.providers.JsonRpcProvider(providerURL);
  let currentBlockNumber = await provider.getBlockNumber();

  const targetBlockNumber = currentBlockNumber + WAIT_BLOCK_CONFIRMATIONS;

  return new Promise((resolve, reject) => {
    try 
    {
      provider.on("block", (blockNumber) => {
        console.log(
          `Waiting to get to target block(${targetBlockNumber}):`,
          `${(targetBlockNumber - blockNumber) > 1 ? `${(targetBlockNumber - blockNumber)} blocks`: `${(targetBlockNumber - blockNumber)} block`} to wait`
          );
        if(blockNumber ==  targetBlockNumber) {
          provider.off("block");
          resolve(blockNumber);
        } 
      });
    } catch(err) {console.log(err);}
  });
}

module.exports = waitForTargetBlock;