import {ethers} from "ethers"
import abi from "../constant/abi.json"

export const getWeb3State = async () => {
    try {
        if (!window.ethereum) {
            throw new Error("Metamask is not installed");
        }

        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const selectedAccount = accounts[0];
        console.log("Selected Account:", selectedAccount);

        const chainIdHex = await window.ethereum.request({ method: "eth_chainId" });
        const chainId = parseInt(chainIdHex, 16);
        console.log("Chain ID:", chainId);

        const provider = new ethers.BrowserProvider(window.ethereum);
        console.log("Provider:", provider);

        const signer = await provider.getSigner();
        const contractAddress = "0x2b97dd8a1e6eab72c2b07f7d4ee73ecb9ae8f03e";

        const contractInstance = new ethers.Contract(contractAddress, abi, signer);
        console.log("Contract Instance:", contractInstance);

        return { contractInstance, selectedAccount, chainId };
    } catch (error) {
        console.error("Error in getWeb3State:", error);
        throw error;
    }
};


