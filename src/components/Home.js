import { useReducer } from 'react';

// 'bank', function with set of instructions to manipulate the state depending on action type from dispatch
// takes 2 args: initial state (500), and dispatch (action)
const reducer = (state, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload;
  }
};

export default function Home() {

  // initial state and dispatch function
  const [amount, dispatch] = useReducer(reducer, 500);

  // actionCreator function 
  const deposit = (amount) => {
    // add validation
    if (!amount) {
      console.log('The amount is not valid')
    }
    // create dispatch for the action (takes an object)
    dispatch({
      type: "DEPOSIT",
      payload: amount
    });
  }

  return (
    <div>
      <h1>{amount}</h1>
      <button onClick={() => deposit(500)}>Deposit 500</button>
    </div>
  )
}