import React from "react";
import './CurrentBankBalance.css';
const CurrentMainBalance = (props) =>{
    return(
        <div className="currentbankbalance">
            <h1 className="balancevalue">₹ 20000000</h1>
            <h6 className="balancetitle">Current Bank Balance</h6>
        </div>
    );
}
export default CurrentMainBalance;