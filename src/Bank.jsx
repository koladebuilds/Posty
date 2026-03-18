 import Counter from "./bank_components/Counter"
 import Atm from "./bank_components/Atm"
 import Pos from "./bank_components/Pos"
 import Warning from "./bank_components/Warning"
  import Success from "./bank_components/Success"
 import {useState} from "react";

 const Bank = () => {
  //  let accountBalance = 1000;// if accountBalance will be changing , we should never store it in a variable because whenever it changes react will not update the dom 

  //keeping account balance inside state
        // a state to manage the accountbalance
    const [accountBalance, setAccountBalance] = useState(1000)
    const [amount, setAmount] = useState(0);
    function update_amount(e){
        setAmount(e.target.value);
    }

        return (
            <div className="container">
                <h1>Bank Application: {accountBalance}</h1>
                {accountBalance >1000 ? <Success/> : <Warning/>}
                <button className="btn btn-danger" onClick={()=>{
                    // accountBalance = accountBalance - 100 is not allowed
                    if(amount < accountBalance){
                        setAccountBalance(accountBalance-amount)
                    }else{
                        alert("Na your pman get bank nah")
                    }
                }}>Withdraw</button>

                <input type="number" value={amount} onChange={update_amount}/>

                <button className="btn btn-primary"  onClick={()=>{
                    // accountBalance = accountBalance + 100 is not allowed 
                    setAccountBalance(accountBalance+Number(amount))
                }}>Deposit</button>
                <Counter ab = {accountBalance}/>
                <Atm ab = {accountBalance}/>
                <Pos ab = {accountBalance}/>
            </div>
        )
    }

    export default Bank