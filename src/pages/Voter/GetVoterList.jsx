import {useEffect} from "react";
import {useWeb3Context} from "../../context/UseWeb3context.jsx";

const GetVoterList = () => {
    const { contractInstance } = useWeb3Context();
    useEffect(() => {
        const getVoterList = async () => {
            try{
                const voterList = await contractInstance.methods.getVoterList().call();
                console.log(voterList, "Voter List");
            }catch (e) {
                console.error("Error getting voter list", e);
            }
        }
        contractInstance && getVoterList();
    }, [contractInstance])
    return (
        <div>
            <h1>Get Voter List</h1>
        </div>
    )
}

export default GetVoterList