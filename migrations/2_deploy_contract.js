const DaiToken = artifacts.require("DaiToken");
const DaiSwap = artifacts.require("DaiSwap");

module.exports = async function(deployer) {
  // Deploy Dai
  await deployer.deploy(DaiToken);
  const token = await DaiToken.deployed()

  // Deploy DaiSwap
  await deployer.deploy(DaiSwap, token.address);
  const daiSwap = await DaiSwap.deployed()

  // Transfer all tokens to DaiSwap (1 million)
  await token.transfer(daiSwap.address, '1000000000000000000000000')
};