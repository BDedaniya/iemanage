import React , {useState} from "react";
import "./ExpenseDivision.css";
import ExpenseHeader from "./ExpenseHeader";
import CardContainer from "../Card/CardContainer";

const ExpenseDivision = (props) => {
    let TotalExpense = 0;
    const [filterdata_bydate, setfilterdata_bydate] = useState(
        props.expenseData
    );
    const [filterdata_byname, setfilterdata_byname] =
        useState(props.expenseData);
    const [filterdata_bycategory, setfilterdata_bycategory] =
        useState(filterdata_byname);
    const filterDateHandler = (x) => {
        setfilterdata_bydate(props.expenseData.filter((data) => data.date===(x)));
    };
    const filterNameHandler = (x) => {
        if(x.trim() === '')
        {
            setfilterdata_byname(props.expenseData);
        }
        else{
        setfilterdata_byname(
            filterdata_byname.filter( (data) => data.name.toLowerCase() === x.toLowerCase())
        );
        if(filterdata_byname.lenght === 0){
            setfilterdata_byname(props.expenseData);
        }
        console.log(filterdata_byname);
        }
        //console.log(filterdata_bycategory);
    };
    const filterCategoryHandler = (x) => {
        if(x!= null){
            setfilterdata_bycategory(
                filterdata_bycategory.filter((data) => data.category === x)
            );
        }
        else{
            setfilterdata_bycategory(props.expenseData)
        }
    };
    props.expenseData.forEach((element) => {
        TotalExpense += element.amount;
    });

    return (
        <div className="expensedivision">
            <ExpenseHeader
                dateHandler={filterDateHandler}
                
                categoryHandler={filterCategoryHandler}
              
                nameHandler={filterNameHandler}
                totalExpense={TotalExpense}
            />
            <CardContainer
                type="card__expense__amount"
                dataList={filterdata_byname}
            />
        </div>
    );
};
export default ExpenseDivision;
