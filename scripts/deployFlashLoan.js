const hre = require("hardhat");

async function main() {

  const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
  const flashLoan = await FlashLoan.deploy("0x74a328ED938160D702378Daeb7aB2504714B4E4b");

  const address = await flashLoan.deployed();
  console.log(address);
  console.log("Flash loan contract deployed: ",address.address);
  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
