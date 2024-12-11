import React from "react";
import { useWeb3Context } from "../../context/UseWeb3context.jsx";

const EmergencyDeclare = () => {
    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State;

    const handleEmergencyDeclare = async () => {
        try {
            if (!contractInstance) {
                console.error("Contract instance not available.");
                return;
            }
            // Call the emergencyDeclare function from the smart contract
            const emergency = await contractInstance.methods.emergencyDeclare().send({
                from: window.ethereum.selectedAddress, // Ensure the correct address is used
            });
            console.log(emergency, "Emergency declared successfully!");
        } catch (e) {
            console.error("Error declaring emergency:", e);
        }
    };

    return (
        <div>
            <h1>Emergency Declare</h1>
            <button onClick={handleEmergencyDeclare}>Declare Emergency</button>
        </div>
    );
};

export default EmergencyDeclare;
