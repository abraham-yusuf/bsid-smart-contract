// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const BSID = await ethers.getContractFactory('Box');
    console.log('Deploying Box...');
    const bsid = await Bsid.deploy();
    await box.deployed();
    console.log('Box deployed to:', box.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });