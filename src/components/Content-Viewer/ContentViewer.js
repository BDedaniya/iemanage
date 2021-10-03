import React from "react";
import './ContentViewer.css';
import ExpenseDivision from "./ExpenseDivision/ExpenseDivision";
import IncomeDivision from "./IncomeDivision/IncomeDivision";

const ContentViewer = (props) => {
    return <div className="contentviewer">
        <IncomeDivision incomeData={props.incomeData}/>
        <ExpenseDivision expenseData={props.expenseData}/>
    </div>;
}
export default ContentViewer;