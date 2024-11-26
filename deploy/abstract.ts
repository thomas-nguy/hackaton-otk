import * as hre from "hardhat";
import { serializeEip712 } from "zksync-ethers/build/utils"
import {parseEther, VoidSigner} from "ethers";
import {Signer} from "zksync-ethers";
import {getWallet} from "./utils";

const SMART_CONTRACT_ADDRESS = "0xe84e268C02bc4A4e149E84dA97F197e931A4Cf33";
const provider = hre.zksyncEthers.providerL2;


export default async function () {

  const wallet = getWallet();
  const nonce = await provider.getTransactionCount(SMART_CONTRACT_ADDRESS);
  console.log("sending transaction using ", wallet.address);

  const response = await wallet.sendTransaction({
    nonce: nonce,
    to: wallet.address,
    value: parseEther("0.01"),
    from: SMART_CONTRACT_ADDRESS,
  });

  console.log(response);
}