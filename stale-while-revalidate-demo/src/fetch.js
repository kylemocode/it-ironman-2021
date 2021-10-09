const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function customFetch(...args) {
  await delay(Math.ceil(400 + Math.random() * 300));
  const res = await fetch(...args);
  const json = await res.json();
  const result = json.results ?? [];

  result.push({
    name: characters.slice(0, Math.floor(Math.random() * 50)),
    url: 'https://test.com',
  });

  return result;
}
