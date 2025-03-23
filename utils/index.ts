import { FilterProps } from "../types";

export async function fetchExercises(
  filters: FilterProps
) {
  let { muscle, difficulty } = filters;

  const headers: HeadersInit = {
    "x-rapidapi-key":
      "cb7ecfad9dmsh52bf2aec4e29830p13368fjsn9ebd8bd53484",
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
