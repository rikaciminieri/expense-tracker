import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [formClosed, setFormClosed] = useState(true);

  const newExpenseFormHandler = () => {
      setFormClosed(!formClosed)
  }

  if (formClosed) {
    return (
      <div className="new-expense">
        <button onClick={newExpenseFormHandler}>Add New Expense</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseForm={newExpenseFormHandler}/>
    </div>
  );
};

export default NewExpense;
