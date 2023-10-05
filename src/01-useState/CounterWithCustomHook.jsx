import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => increment(2)}
      >
        +1
      </button>
      <button
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={reset}
      >
        Reset
      </button>
      <button
        className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => decrement(10)}
      >
        -1
      </button>
    </>
  );
};
