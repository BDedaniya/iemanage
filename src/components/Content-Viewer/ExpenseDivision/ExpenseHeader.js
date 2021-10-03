import React from "react";
import "./ExpenseHeader.css";

const ExpenseHeader = (props) => {

  function dateHandler(event){
    console.log(event.target.value);
    props.dateHandler(event.target.value);
  }
  function nameHandler(event){
    //console.log(event.target.value);
    props.nameHandler(event.target.value);
  }
  function categoryHandler(event){
    props.categoryHandler(event.target.value);
  }

  return <div className="expenseheader">
        <div className="expenseheader__data">
          <h4>Expense</h4>
          <h4>₹ {props.totalExpense}</h4>
        </div>
        <div className="expenseheader__filter">
            <input onBlur={dateHandler} type="date" className="incomeheader__filter__controls"/>
            <input onBlur={nameHandler} type="text" placeholder="find name" className="incomeheader__filter__controls"/>
            <input onBlur={categoryHandler} type="text" placeholder="find category" className="incomeheader__filter__controls"/>
        </div>
  </div>;
};
export default ExpenseHeader;
