import { useReducer } from 'react';

// 'bank', function with set of instructions to manipulate the state depending on action type from dispatch
const reducer = () => {

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
      {amount}
    </div>
  )
}