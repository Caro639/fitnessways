"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";

import ExercisesList from "./components/ExercicesList";
import { fetchExercises } from "../utils";
import { HomeProps } from "../types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Text } from "@chakra-ui/react";
// export default async function Home({
//   searchParams,
// }: HomeProps) {
//   const allExercises = await fetchExercises({
//     difficulty: searchParams.difficulty || "",
//     muscle: searchParams.muscle || "",
//   });

export default function Home() {
  const searchParams = useSearchParams();
  const [allExercises, setAllExercises] =
    useState([]);
  const [isDataEmpty, setIsDataEmpty] =
    useState(true);

  useEffect(() => {
    const difficulty =
      searchParams.get("difficulty") || "";
    const muscle =
      searchParams.get("muscle") || "";

    const fetchData = async () => {
      const exercises = await fetchExercises({
        difficulty,
        muscle,
      });
      setAllExercises(exercises);
      setIsDataEmpty(
        !Array.isArray(exercises) ||
          exercises.length < 1 ||
          !exercises
      );
    };

    fetchData();
  }, [searchParams]);
  // console.log(allExercises);
  // const isDataEmpty =
  //   !Array.isArray(allExercises) ||
  //   allExercises.length < 1 ||
  //   !allExercises;

  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <ExercisesList
        isDataEmpty={isDataEmpty}
        allExercises={allExercises}
      />
    </>
  );
}
