import React from "react";
import "./IncomeHeader.css";

const IncomeHeader = (props) => {
  
  return <div className="incomeheader">
        <div className="incomeheader__data">
          <h4>Income</h4>
          <h4>₹{props.totalIncome}</h4>
        </div>
        <div className="incomeheader__filter">
            <input type="date" className="incomeheader__filter__controls"/>
            <input type="text" placeholder="find name" className="incomeheader__filter__controls"/>
            <input type="text" placeholder="find category" className="incomeheader__filter__controls"/>
        </div>
  </div>;
};
export default IncomeHeader;
