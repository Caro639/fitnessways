import { FilterProps } from "../types";

export async function fetchExercises(
  filters: FilterProps
) {
  let { muscle, difficulty } = filters;

  const headers: HeadersInit = {
    "x-rapidapi-key":
      "a56b675d37mshef079dfcc5d1e00p15e8e3jsn764b55c05141",
    "x-rapidapi-host":
      "exercises-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?
        difficulty=${difficulty}&muscle=${muscle}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
// const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps';
