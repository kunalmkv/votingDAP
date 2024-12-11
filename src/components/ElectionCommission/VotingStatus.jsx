import React, {useEffect, useState} from 'react';
import { useWeb3Context } from '../../context/UseWeb3context.jsx';
import { useNavigate } from 'react-router-dom';

const VotingStatus = () => {
    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State;
    const [votingStatus, setVotingStatus] = useState("");
    useEffect(() => {
        const getVotingStatus = async () => {
            try {
                const status = await contractInstance.methods.getVotingStatus().call();
                setVotingStatus(status);
            } catch (e) {
                console.error("Error getting voting status:", e);
            }
        }
        contractInstance && getVotingStatus();
    }, []);
    return (
        <div>
            <h1>Voting Status : {votingStatus}</h1>
        </div>
    );
}

export default VotingStatus;