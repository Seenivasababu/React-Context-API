import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newTransaction = {
      id,
      text,
      amount:parseInt(amount),
    };
    addTransaction(newTransaction)
    setAmount(0)
    setText("")
  };
  return (
    <>
      <h3>Add New Transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn"> Add Transaction</button>
      </form>
    </>
  );
};
