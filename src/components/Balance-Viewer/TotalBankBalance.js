import React from "react";
import './TotalBankBalance.css';
const TotalBankBalance = (props) =>{
    return(
        <div className="totalbankbalance">
            <h1 className="balancevalue">₹ 2000000</h1>
            <h6 className="balancetitle">Total Bank Balance</h6>
        </div>
    );
}
export default TotalBankBalance;