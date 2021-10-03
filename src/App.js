import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header-Components/Header";
import Mainblock from "./components/Balance-Viewer/Main_block";
import ControlBox from "./components/ControlBox/ControlBox";
import ContentViewer from "./components/Content-Viewer/ContentViewer";
import AddIncomeExpense from "./components/AddNewRecord/AddIncomeExpense";
let IncomeDataList = [
  {
    key: "id1",
    name: "Dedaniya Bhargav",
    category: "Fivver",
    date: new Date("2020-06-11").toISOString().substring(0, 10),
    discription: "For Complete Old Project",
    amount: 4350,
  },
  {
    key: "id2",
    name: "Khush Kalariya",
    category: "Free Lancer",
    date: new Date("2019-08-25").toISOString().substring(0, 10),
    discription: "For asdh ahdb ahdb",
    amount: 3600,
  },
  {
    key: "id3",
    name: "Dedaniya Bhargav",
    category: "Fivver",
    date: new Date("2021-04-30").toISOString().substring(0, 10),
    discription: "For Complete Old Project",
    amount: 1400,
  },
  {
    key: "id4",
    name: "Dedaniya Bhargav",
    category: "Fivver",
    date: new Date("2020-06-11").toISOString().substring(0, 10),
    discription: "For Complete Old Project",
    amount: 5000,
  },
];
let ExpenseDataList = [
  {
    key: "ed1",
    name: "Wifi Operator",
    category: "Swastik Network",
    date: new Date("2022-01-21").toISOString().substring(0, 10),
    discription: "For Jan-Dec 2021",
    amount: 5000,
  },
  {
    key: "ed2",
    name: "GEB",
    category: "Light Bill",
    date: new Date("2021-05-22").toISOString().substring(0, 10),
    discription: "April May , 2021",
    amount: 1200,
  },
];
function getIncomeListFromServer(month, year) {
  //const arg = [{ month: month }, { year: year }];
  return fetch("127.0.0.1:8000/about")
  .then((response) => (response))
   .then((responseJson) => {
     console.log(responseJson.body.value);
   })
   .catch((error) => {
     console.error(error);
   });
}
function App() {
  const [homepageMonth, setHomepageMonth] = useState(new Date().getMonth());
  const [homepageYear, setHomepageYear] = useState(new Date().getFullYear());
  //const [idata,setidata] = useState();
  console.log(getIncomeListFromServer());
  const setHomepageMonthHandler = (event) => {
    setHomepageMonth(event.target.value);
  };
  const setHomepageYearHandler = (event) => {
    setHomepageYear(event.target.value);
  };
  const [showAddIncomeExpense, setShowAddIncomeExpense] = useState(false);
  const [isExpense, setIsExpense] = useState(true);
  const showAddIncomeFormHandler = () => {
    setIsExpense(false);
    setShowAddIncomeExpense(true);
  };
  const showAddExpenseFormHandler = () => {
    setIsExpense(true);
    setShowAddIncomeExpense(true);
  };
  const closedAddIncomeExpenseFormHandler = () => {
    setShowAddIncomeExpense(false);
  };
  console.log(JSON.stringify({"hello":"123456"}));
  getIncomeListFromServer();
  //console.log(getIncomeListFromServer(homepageMonth, homepageYear));

  return (
    <div className="app">
      <Header />
      <Mainblock
        showAddIncomeForm={showAddIncomeFormHandler}
        showAddExpenseForm={showAddExpenseFormHandler}
      />
      <ControlBox
        month={homepageMonth}
        year={homepageYear}
        setMonth={setHomepageMonthHandler}
        setYear={setHomepageYearHandler}
      />
      <ContentViewer
        incomeData={IncomeDataList}
        expenseData={ExpenseDataList}
      />
      {showAddIncomeExpense && (
        <AddIncomeExpense
          isExpense={isExpense}
          closedAddIncomeExpenseForm={closedAddIncomeExpenseFormHandler}
        />
      )}
    </div>
  );
}

export default App;
