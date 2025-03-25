"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ExercisesWrapper from "./components/ExercisesWrapper";

import { Text } from "@chakra-ui/react";
import React, { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Suspense
        fallback={<Text>Loading...</Text>}
      >
        <ExercisesWrapper />
      </Suspense>
    </>
  );
}
