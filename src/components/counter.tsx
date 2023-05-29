import { useReducer, useState } from "react";
import { byInput, counterReducer, decrement, increment, reset } from "../features/counter-reducer";

const Counter = () => {
  const [state ,dispatch] = useReducer(counterReducer , {count : 0})
  const [value , setValue] = useState(0)

  
  const onSubmit  = (e :React.FormEvent<HTMLFormElement> )=> {
    e.preventDefault()
    dispatch(byInput(value))

  }
  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{state.count}</p>
      <div className="flex gap-2">
        <button onClick={()=>dispatch(decrement(1))  }>➖ Decrement</button>
        <button onClick={()=>dispatch(reset())}>🔁 Reset</button>
        <button onClick={()=>dispatch(increment(1))}>➕ Increment</button>
      </div>
      <div>
        <form onSubmit={(e)=>onSubmit(e)}>
          <input type="number" value={value} onChange={(e) => {setValue(e.target.valueAsNumber)}} />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
