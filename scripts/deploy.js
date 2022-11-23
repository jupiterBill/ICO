
const {ethers} = require("hardhat");
require("dotenv").config({ path: ".env" });
const{CRYPTO_DEVS_NFT_CONTRACT_ADDRESS} = require("./constants");


async function main() {
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;
  const CryptoDevTokenContract = await ethers.getContractFactory("CryptoDevToken");
  const deployedContract = await CryptoDevTokenContract.deploy(cryptoDevsNFTContract)
  await deployedContract.deployed()


  console.log(
    "Crypto Devs Token Contract Address:",
    deployedContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
