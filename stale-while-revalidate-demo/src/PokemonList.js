import customFetch from './fetch';
import useStaleWhileRevalidate from './useStaleWhileRevalidate';

function PokemonList({ offset }) {
  const [data, isLoading] = useStaleWhileRevalidate(
    customFetch,
    [`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`],
    []
  );

  console.log('data ', data);

  if (isLoading) return <p>loading...</p>;

  return (
    <>
      {data.map((item) => (
        <li key={item.url}>{item.name}</li>
      ))}
    </>
  );
}

export default PokemonList;
