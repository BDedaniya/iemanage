import React from "react";
import './IncomeExpenseButton.css';
const IncomeExpenseButton = (props) => {
    return(
        <div className="income_expense_button_controls">
            <button onClick={props.onclickExpenseopener} className="expense_btn"> Expense </button>
            <button onClick={props.onclickIncomeopener} className="income_btn"> Income </button>
        </div>
    );
}
export default IncomeExpenseButton;