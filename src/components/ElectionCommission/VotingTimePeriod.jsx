import React, { useState } from "react";
import { useWeb3Context } from "../../context/UseWeb3context.jsx";

const VotingTimePeriod = () => {
    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State;
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleVotingTimePeriod = async () => {
        try {
            if (!contractInstance) {
                console.error("Contract instance not available.");
                return;
            }

            if (!startTime || !endTime) {
                console.error("Start time and end time must be provided.");
                return;
            }

            // Call the setVotingPeriod function from the smart contract
            const response = await contractInstance.methods
                .setVotingPeriod(parseInt(startTime), parseInt(endTime))
                .send({
                    from: window.ethereum.selectedAddress, // Ensure the correct address is used
                });

            console.log(response, "Voting time period set successfully!");
        } catch (e) {
            console.error("Error setting voting time period:", e);
        }
    };

    return (
        <div>
            <h1>Set Voting Time Period</h1>
            <div>
                <label>
                    Start Time (Unix Timestamp):
                    <input
                        type="number"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        placeholder="Enter start time"
                    />
                </label>
            </div>
            <div>
                <label>
                    End Time (Unix Timestamp):
                    <input
                        type="number"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        placeholder="Enter end time"
                    />
                </label>
            </div>
            <button onClick={handleVotingTimePeriod}>Set Voting Period</button>
        </div>
    );
};

export default VotingTimePeriod;
