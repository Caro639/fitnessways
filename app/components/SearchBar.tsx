"use client";
import { useState } from "react";
import React from "react";
import styles from "./SearchBar.module.css";
import { Flex, Button } from "@chakra-ui/react";
import {
  Portal,
  Select,
  createListCollection,
} from "@chakra-ui/react";

import {
  difficulties,
  muscles,
} from "@/constants";
import { useRouter } from "next/navigation";

const SearchBar = () => {
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
        <Select.Root
          collection={difficulties}
          size="sm"
          width="320px"
        >
          <Select.HiddenSelect />
          <Select.Label>Difficulté</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Difficulté" />
              {/* <Select.ValueText
                placeholder="Difficulté"
                width={[
                  "100%",
                  "100%",
                  "100%",
                  "20%",
                ]}
                mx=".5rem"
                mb={[
                  ".5rem",
                  ".5rem",
                  ".5rem",
                  "0",
                ]}
                bg="white"
              /> */}
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              {/* <option value="">None</option> */}
              <Select.Content>
                {difficulties.items.map(
                  (difficulties) => (
                    <Select.Item
                      item={difficulties}
                      key={difficulties.value}
                    >
                      {difficulties.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  )
                )}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      </Flex>
    </div>
  );
};

export default SearchBar;
