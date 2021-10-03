import React from "react";
import './IncomeDivision.css';
import IncomeHeader from "./IncomeHeader";
import CardContainer from "../Card/CardContainer";

const IncomeDivision = (props) => {
    let TotalIncome = 0;
    props.incomeData.forEach(element => {
        TotalIncome += element.amount;
    });
    return <div className="incomedivision">
        <IncomeHeader totalIncome={TotalIncome}/>
        {/* <div className="incomeheader">
        <h4>Income</h4>
        <h4>₹ {TotalIncome}</h4>
        </div> */}
        <CardContainer type="card__income__amount" dataList={props.incomeData}/>
    </div>;
}
export default IncomeDivision;
