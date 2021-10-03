import "./main_block.css"
import "./TotalBankBalance.css";
import "./CurrentBankBalance.css";
import './IncomeExpenseButton.css';
const Main_block = (props) => {

    return (
        <div className="main_block">
            <div className="inner_box">
                <div className="totalbankbalance">
                    <h1 className="balancevalue">₹ 2000000</h1>
                    <h6 className="balancetitle">Total Bank Balance</h6>
                </div>
                {/* <TotalBankBalance/> */}
                <div className="currentbankbalance">
                    <h1 className="balancevalue">₹ 20000000</h1>
                    <h6 className="balancetitle">Current Bank Balance</h6>
                </div>
                {/* <CurrentMainBalance/> */}
                {/* <IncomeExpenseButton onclickExpenseOpener={} onclickIncomeOpener={} /> */}
                <div className="income_expense_button_controls">
                    <button className="expense_btn" onClick={props.showAddExpenseForm}> Expense </button>
                    <button className="income_btn" onClick={props.showAddIncomeForm}> Income </button>
                </div>
            </div>
        </div>
    );

}

export default Main_block;