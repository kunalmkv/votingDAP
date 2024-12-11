import { useRef, useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";

const RegisterCandidate = () => {
    const { web3State, handleWallet } = useWeb3Context();
    console.log(web3State, "web3State123");

    const { contractInstance } = web3State;
    const nameRef = useRef(null);
    const genderRef = useRef(null);
    const partyRef = useRef(null);
    const ageRef = useRef(null);

    useEffect(() => {
        handleWallet(); // Ensure wallet and contract instance are loaded
    }, [handleWallet]);

    const handleCandidateRegistration = async (e) => {
        try {
            e.preventDefault();
            const name = nameRef.current.value;
            const age = ageRef.current.value;
            const gender = genderRef.current.value;
            const party = partyRef.current.value;
            console.log(name, age, gender, party);
            console.log(contractInstance, "contractInstance123");

            if (!contractInstance) {
                throw new Error("Contract instance is not available");
            }

            await contractInstance.registerCandidate(name, party, age, gender);
            console.log("Registration is successful");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={handleCandidateRegistration}>
                <label>
                    Name:
                    <input type="text" ref={nameRef}></input>
                </label>
                <label>
                    Age:
                    <input type="text" ref={ageRef}></input>
                </label>
                <label>
                    Gender:
                    <input type="text" ref={genderRef}></input>
                </label>
                <label>
                    Party:
                    <input type="text" ref={partyRef}></input>
                </label>
                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default RegisterCandidate;