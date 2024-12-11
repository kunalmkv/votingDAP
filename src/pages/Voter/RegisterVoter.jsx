import {useRef} from 'react'
import {useWeb3Context} from '../../context/UseWeb3context.jsx'
const RegisterVoter = () => {
    const {web3State} = useWeb3Context()
    const {contractInstance} = web3State;
    const nameRef = useRef()
    const ageRef = useRef()
    const genderRef = useRef()
    const voterIdRef = useRef()
    const handleVoterRegisteration = async (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const age = ageRef.current.value
        const gender= genderRef.current.value
        const voterId = voterIdRef.current.value
        console.log(name, age,gender, voterId, "voter details")
        // await contractInstance.registerCandidate(name, party, age, gender)
        console.log("voter successfully registered")
    }
    return (
        <>
            <form onSubmit={handleVoterRegisteration}>
                <label>
                    Name: <input type="text" ref={nameRef}/>
                </label>
                <label>
                    Age: <input type="number" ref={ageRef}/>
                </label>
                <label>
                    Gender: <input type="text" ref={genderRef}/>
                </label>
                <label>
                    Voter Id: <input type="text" ref={voterIdRef}/>
                </label>
                <button type="submit">Register</button>
            </form>
        </>

    )

}
export default RegisterVoter