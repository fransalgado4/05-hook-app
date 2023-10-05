import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Me acciono");
  return (
    <button
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
});
