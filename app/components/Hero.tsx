"use client";
import React from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import styles from "./Hero.module.css";
import Image from "next/image";

import Link from "next/link";

const Hero = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      height="60vh"
    >
      <Flex
        direction="column"
        pl="2rem"
        width="70%"
      >
        <Heading as="h1" size="xl">
          Fitnessways
        </Heading>
        <Text mt="1rem">
          Your fitness journey starts here
        </Text>
        <Link href="#searchBar">
          <Button
            mt="1rem"
            colorPalette={"purple"}
          >
            Rechercher
          </Button>
        </Link>
      </Flex>
      <div className={styles.heroImage}></div>
      <div className={styles.heroImage2}></div>
    </Flex>
  );
};

export default Hero;
