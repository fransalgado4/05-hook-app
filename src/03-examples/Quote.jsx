export const Quote = ({ author, quote }) => {
  return (
    <div className="text-xl text-center italic font-semibold text-gray-900 dark:text-whit bg-cyan-300 mb-3">
      <h1>{author}</h1>
      <p>{quote}</p>
    </div>
  );
};
