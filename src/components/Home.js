import { useReducer } from 'react';

const reducer = () => {

};

export default function Home() {

  const [amount, dispatch] = useReducer(reducer, 500);
  return (
    <div>
      {amount}
    </div>
  )
}