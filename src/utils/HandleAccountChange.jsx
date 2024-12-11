export const HandleAccountChange = async(setWeb3State)=>{
    const accounts = await window.ethereum.request({
        method:'eth_requestAccounts'
    })
    const selectedAccount = accounts[0];
    setWeb3State((prevState)=>({...prevState,selectedAccount}))
}