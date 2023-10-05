export const Button = ({ name, color, colorHover, onClick, isLoading }) => {
  return (
    <button
      className={`block mt-2 w-20 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold ${color} text-white shadow-sm hover:${colorHover} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      onClick={onClick}
      disabled={isLoading}
    >
      {name}
    </button>
  );
};
