import { useRef, useLayoutEffect, useState } from "react";

export const Card = ({ poster_path, original_title, overview }) => {
  const aRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    console.log(aRef.current.getBoundingClientRect());
    const { width, height } = aRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, []);

  return (
    <>
      <a
        href="#"
        ref={aRef}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        style={{ display: "flex" }}
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={poster_path}
          alt={original_title}
        />
        <div
          className="flex flex-col justify-between p-4 leading-normal"
          style={{ display: "flex" }}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </div>
      </a>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
