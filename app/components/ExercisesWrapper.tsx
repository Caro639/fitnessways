"use client";

import ExercisesList from "../components/ExercicesList";
import { fetchExercises } from "@utils/index";

import { Text } from "@chakra-ui/react";
import { error } from "console";
import React, {
  Suspense,
  useState,
  useEffect,
} from "react";
import { useSearchParams } from "next/navigation";

function ExercisesWrapper() {
  const searchParams = useSearchParams();
  const [allExercises, setAllExercises] =
    useState([]);
  const [isDataEmpty, setIsDataEmpty] =
    useState(true);

  const fetchData = async () => {
    await fetchExercises({
      difficulty:
        searchParams.get("difficulty") || "",
      muscle: searchParams.get("muscle") || "",
    })
      .then((exercises) => {
        const empty =
          !Array.isArray(exercises) ||
          exercises.length < 1 ||
          !exercises;
        setAllExercises(exercises);
        setIsDataEmpty(empty);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  return (
    <ExercisesList
      isDataEmpty={isDataEmpty}
      allExercises={allExercises}
    />
  );
}

export default ExercisesWrapper;
