const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const FlashLoanArbitrage = await hre.ethers.getContractFactory(
    "FlashLoanArbitrage"
  );
  const flashLoanArbitrage = await FlashLoanArbitrage.deploy(
    "0x74a328ED938160D702378Daeb7aB2504714B4E4b"
  );

  await flashLoanArbitrage.deployed();

  console.log("Flash loan Arbitrage contract deployed: ", flashLoanArbitrage.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});