require('@nomiclabs/hardhat-ethers')
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "q9jq0Ov2TmlWt3j6t-JplAeD6yN6a4wS";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      chainId: 4,
      url: "https://eth-rinkeby.alchemyapi.io/v2/q9jq0Ov2TmlWt3j6t-JplAeD6yN6a4wS",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};