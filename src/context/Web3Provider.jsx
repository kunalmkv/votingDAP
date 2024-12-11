import { Web3Context } from "./Web3Context.jsx";
import { useEffect, useState, useCallback } from "react";
import { getWeb3State } from "../utils/Web3state.jsx";
import {HandleAccountChange} from "../utils/HandleAccountChange.jsx";
import {HandleChainChange} from "../utils/HandleChainChange.jsx";


const Web3Provider = ({ children }) => {
    const [web3State, setWeb3State] = useState({
        contractInstance: null,
        selectedAccount: null,
        chainId: null,
    });

    const handleWallet = useCallback(async () => {
        try {
            const { contractInstance, selectedAccount, chainId } = await getWeb3State();
            setWeb3State({ contractInstance, selectedAccount, chainId });
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        handleWallet(); // Initialize wallet connection on mount

        window.ethereum.on("accountsChanged", () => HandleAccountChange(setWeb3State));
        window.ethereum.on("chainChanged", () => HandleChainChange(setWeb3State));

        return () => {
            window.ethereum.removeListener("accountsChanged", () =>
                HandleAccountChange(setWeb3State)
            );
            window.ethereum.removeListener("chainChanged", () =>
                HandleChainChange(setWeb3State)
            );
        };
    }, [handleWallet]);

    return (
        <Web3Context.Provider value={{ web3State, handleWallet }}>
            {children}
        </Web3Context.Provider>
    );
};

export default Web3Provider;