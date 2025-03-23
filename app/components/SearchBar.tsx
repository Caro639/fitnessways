"use client";
import { useState } from "react";
import React from "react";
import styles from "./SearchBar.module.css";
import { Flex, Button } from "@chakra-ui/react";
import { NativeSelect } from "@chakra-ui/react";

import {
  difficulties,
  muscles,
} from "@/constants";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [muscle, setMuscle] = useState("");
  const [difficulty, setDifficulty] =
    useState("");
  const router = useRouter();

  // inserer la premiere lettre en majuscule
  function formatDifficulty(input: string) {
    return (
      input.charAt(0).toUpperCase() +
      input.slice(1)
    );
  }
  //   retirer underscore et espace plus majuscule
  function formatMuscleName(input: string) {
    const words = input.split("_");
    const formattedWords = words.map((word) => {
      const firstLetter = word
        .charAt(0)
        .toUpperCase();
      const restOfWord = word
        .slice(1)
        .replace(/_/g, " ");
      return firstLetter + restOfWord;
    });
    return formattedWords.join(" ");
  }

  // //   controler si la selection est choisi
  const handleSearch = () => {
    if (
      difficulty.trim() === "" &&
      muscle.trim() === ""
    ) {
      return alert(
        "Please select a difficulty or muscle"
      );
    }
    // alert(difficulty + muscle);
    updateSearchParams(difficulty, muscle);
  };
  const updateSearchParams = (
    difficulty: string,
    muscle: string
  ) => {
    const searchParams = new URLSearchParams(
      window.location.search
    );
    if (difficulty) {
      searchParams.set("difficulty", difficulty);
    } else {
      searchParams.delete("difficulty");
    }
    if (muscle) {
      searchParams.set("muscle", muscle);
    } else {
      searchParams.delete("muscle");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <div
      className={styles.searchbar}
      id="searchbar"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap={[
          "wrap",
          "wrap",
          "wrap",
          "nowrap",
        ]}
      >
        <NativeSelect.Root
          size="sm"
          width="240px"
        >
          <NativeSelect.Field
            placeholder="Difficulté"
            onChange={(e) =>
              setDifficulty(e.target.value)
            }
            value={difficulty}
          >
            <option value="">None</option>
            {difficulties.map((difficulty) => (
              <option
                value={difficulty}
                // key={difficulty}
              >
                {formatDifficulty(difficulty)}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
        <NativeSelect.Root
          size="sm"
          width="240px"
        >
          <NativeSelect.Field
            placeholder="Muscle"
            onChange={(e) =>
              setMuscle(e.target.value)
            }
            value={muscle}
          >
            <option value="">None</option>
            {muscles.map((muscle) => (
              <option value={muscle}>
                {formatMuscleName(muscle)}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>

        <Button
          mx=".5rem"
          size="sm"
          colorPalette={"purple"}
          onClick={handleSearch}
        >
          Recherchez
        </Button>
      </Flex>
    </div>
  );
};

export default SearchBar;
