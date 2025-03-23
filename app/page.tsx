"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";

import ExercisesList from "./components/ExercicesList";
import { fetchExercises } from "../utils";
import { HomeProps } from "../types";

import { Text } from "@chakra-ui/react";
import { error } from "console";
import { useEffect } from "react";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  // const allExercises = await fetchExercises({
  //   difficulty: searchParams.difficulty || "",
  //   muscle: searchParams.muscle || "",
  // });
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
