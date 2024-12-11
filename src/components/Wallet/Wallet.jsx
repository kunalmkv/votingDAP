import {useWeb3Context} from "../../context/UseWeb3context.jsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Wallet = () => {
    const {handleWalletConnect, web3State} = useWeb3Context();
    const {selectedAccount} = web3State;
    const navigate = useNavigate();
    useEffect(() => {
        if (selectedAccount) {
            navigate("/candidate/register");
        }

    }, [selectedAccount]);
    return (
        <div>
            <button onClick={handleWalletConnect}>Connect Wallet</button>
        </div>
    );
}

export default Wallet;