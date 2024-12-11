import React, { useState } from "react";
import { useWeb3Context } from "../../context/UseWeb3context.jsx";

const AnnounceWinner = () => {
    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State;
    const [winner, setWinner] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchWinner = async () => {
        try {
            if (!contractInstance) {
                console.error("Contract instance not available.");
                return;
            }

            setIsLoading(true); // Start loading
            const winnerAddress = await contractInstance.methods.announceWinner().call();
            console.log(winnerAddress, "Winner Address");
            setWinner(winnerAddress); // Update the winner state with the fetched address
        } catch (e) {
            console.error("Error fetching winner:", e);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div>
            <h1>Announce Winner</h1>
            <button onClick={fetchWinner} disabled={isLoading}>
                {isLoading ? "Fetching..." : "Fetch Winner"}
            </button>
            {winner && (
                <p>
                    The winner is: <strong>{winner}</strong>
                </p>
            )}
        </div>
    );
};

export default AnnounceWinner;
