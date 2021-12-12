import { useReducer } from 'react';

// 'bank', function with set of instructions to manipulate the state depending on action type from dispatch
const reducer = () => {

};

export default function Home() {

  // initial state and dispatch function
  const [amount, dispatch] = useReducer(reducer, 500);

  return (
    <div>
      {amount}
    </div>
  )
}