"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";

import ExercisesList from "./components/ExercicesList";
import { fetchExercises } from "../utils";
import { HomeProps } from "../types";

import { Text } from "@chakra-ui/react";
export default async function Home({
  searchParams,
}: HomeProps) {
  const allExercises = await fetchExercises({
    difficulty: searchParams.difficulty || "",
    muscle: searchParams.muscle || "",
  });
  console.log(allExercises);
  const isDataEmpty =
    !Array.isArray(allExercises) ||
    allExercises.length < 1 ||
    !allExercises;

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
