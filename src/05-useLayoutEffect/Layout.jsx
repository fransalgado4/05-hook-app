import { useCounter, useFetch } from "../hooks";
import { Button, Card } from "../09-pruebaApi";

export const Layout = () => {
  const apiKey = "1243f41f9f390ef914d4637bffb50d1b";
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjQzZjQxZjlmMzkwZWY5MTRkNDYzN2JmZmI1MGQxYiIsInN1YiI6IjY0NmJhOGU2MmJjZjY3MDE3MmIyOGIyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJRQq5PWmc42HhGaZJk61vXJHAoy4i2H6Jq-alXCAJA";

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const { counter, increment, decrement } = useCounter(1184939);

  const { data, isLoading, hasError } = useFetch(
    `https://api.themoviedb.org/3/movie/${counter}?api_key=${apiKey}`,
    { headers }
  );

  const { overview, original_title, poster_path } = !!data && data;

  return (
    <>
      <Card
        overview={overview}
        original_title={original_title}
        poster_path={poster_path}
      />

      <Button
        name={"Next"}
        color={"bg-indigo-600"}
        colorHover={"bg-indigo-500"}
        onClick={() => increment(1)}
        isLoading={isLoading}
      />

      <Button
        name={"Anterior"}
        color={"bg-red-600"}
        colorHover={"bg-red-500"}
        onClick={() => decrement(1)}
        isLoading={isLoading}
      />
    </>
  );
};
