import React , {useState} from "react";
import './AddIncomeExpense.css';

const AddIncomeExpense = (props) =>{
    const [showExpenseForm , setShowExpenseForm] = useState(props.isExpense);
    const showIncomeFormHandler = () =>{
        setShowExpenseForm(false);
    }
    const showExpenseFormHandler = () =>{
        setShowExpenseForm(true);
    }
    return <div className="popupbox">
        <div className="addincomeexpense">
           { showExpenseForm && <span>
                <div className="addincomeexpense_tab">
                <label onClick={showExpenseFormHandler} style={{color:'#132038'}}>Expense</label>
                <label onClick={showIncomeFormHandler} style={{color:'#9fb5c6'}}>Income</label>
                </div>
            <form>
                <ul>
                    <li className="input_date_amount">
                        <div className="input_date_amount_control">
                            <label>Transaction Date</label>
                            <input type="date" style={{width:'100%'}}/>    
                        </div>
                        <div className="input_date_amount_control">
                            <label>Amount</label>
                            <input type="number"/>
                        </div>
                    </li>
                    <li>
                        <label>Send to</label>
                        <input type="text"/>
                    </li>
                    <li>
                        <label>Category</label>
                        <select>
                            <option>Fivver</option>
                        </select>
                    </li>
                    <li>
                        <label>Description</label>
                        <input type="text"></input>
                    </li>
                </ul>
                <div className="income_expense_button_group">
                    <button onClick={props.closedAddIncomeExpenseForm} type="button">Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
            </span>}
            { !showExpenseForm && <span>
            <div className="addincomeexpense_tab">
            <label onClick={showExpenseFormHandler} style={{color:'#9fb5c6'}}>Expense</label>
            <label onClick={showIncomeFormHandler} style={{color:'#132038'}}>Income</label>
            </div>
            <form>
                <ul>
                    <li className="input_date_amount">
                        <div className="input_date_amount_control">
                            <label>Transaction Date</label>
                            <input type="date" style={{width:'100%'}}/>    
                        </div>
                        <div className="input_date_amount_control">
                            <label>Amount</label>
                            <input type="number"/>
                        </div>
                    </li>
                    <li>
                        <label>Recieved From</label>
                        <input type="text"/>
                    </li>
                    <li>
                        <label>Category</label>
                        <select>
                            <option>Fivver</option>
                        </select>
                    </li>
                    <li>
                        <label>Description</label>
                        <input type="text"></input>
                    </li>
                </ul>
                <div className="income_expense_button_group">
                    <button onClick={props.closedAddIncomeExpenseForm} type="button">Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
            </span>}
        </div>
    </div>
}
export default AddIncomeExpense;