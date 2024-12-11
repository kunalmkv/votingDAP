import {useEffect} from "react";
import {useWeb3Context} from "../../context/UseWeb3context.jsx";

const GetCandidateList = () => {
    const { contractInstance } = useWeb3Context();
    useEffect(() => {
        const getCandidateList = async () => {
            try{
                const candidateList = await contractInstance.methods.getCandidateList().call();
                console.log(candidateList, "Candidate List");
            }catch (e) {
                console.error("Error getting Candidate list", e);
            }
        }
        contractInstance && getCandidateList();
    }, [contractInstance])
    return (
        <div>
            <h1>Get Candidate List</h1>
        </div>
    )
}

export default GetCandidateList