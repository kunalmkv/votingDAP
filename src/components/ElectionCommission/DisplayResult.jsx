import React, {useEffect, useState} from "react";
import {useWeb3Context} from "../../context/UseWeb3context.jsx";
const DisplayResult = () => {
    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State;
    const [winner, setWinner] = useState("");

    useEffect(() => {
            const fetchWinner = async () => {
                try {
                    if (!contractInstance) {
                        console.error("Contract instance not available.");
                        return;
                    }

                    const winnerAddress = await contractInstance.winner();
                    if(winnerAddress === "0x0000000000000000000000000000000000000000") {
                        console.error("No winner announced yet.");
                        return;
                    }
                    console.log(winnerAddress, "Winner Address");
                    setWinner(winnerAddress);
                } catch (e) {
                    console.error("Error fetching winner:", e);
                }
            };

            contractInstance &&  fetchWinner();
        }
        , [contractInstance]);

    return (
        <div>
            <h1>Display Result</h1>
            {winner && (
                <p>
                    The winner is: <strong>{winner}</strong>
                </p>
            )}
        </div>
    );

}

export default DisplayResult;