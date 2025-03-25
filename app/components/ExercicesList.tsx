"use client";
import React, { Suspense } from "react";
import {
  Grid,
  Card,
  CardBody,
  Text,
  Alert,
  Flex,
} from "@chakra-ui/react";

import {
  ExercisesProps,
  ExerciseProps,
} from "@/types";
import Image from "next/image";

const ExercisesList = ({
  isDataEmpty,
  allExercises,
}: ExercisesProps) => {
  const renderDifficulty = (param: string) => {
    switch (param) {
      case "beginner":
        return (
          <Image
            src="/beginner.png"
            alt="débutant"
            width={80}
            height={25}
          />
        );
      case "intermediate":
        return (
          <Image
            src="/intermediate.png"
            alt="intermédiaire"
            width={80}
            height={25}
          />
        );
      case "expert":
        return (
          <Image
            src="/expert.png"
            alt="expert"
            width={80}
            height={25}
          />
        );
      default:
        return;
    }
  };
  return (
    <>
      <Suspense
        fallback={
          <Flex m="2rem">
            <Alert.Root
              status="warning"
              title="Oops, no result."
              variant="solid"
            >
              <Alert.Indicator />
              <Alert.Title>
                Oops, no result.
              </Alert.Title>
            </Alert.Root>
          </Flex>
        }
      >
        {!isDataEmpty ? (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)", // 1 colonne sur les petits écrans
              sm: "repeat(2, 1fr)", // 2 colonnes sur les écrans moyens
              md: "repeat(3, 1fr)", // 3 colonnes sur les écrans plus grands
            }}
            gap="6"
            p="2rem"
          >
            {allExercises.map(
              (
                exercise: ExerciseProps,
                index
              ) => (
                <Card.Root
                  key={index}
                  id={`exercise-${index}`}
                >
                  <CardBody>
                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text as="b">
                        {exercise.name}
                      </Text>
                      <Flex>
                        {renderDifficulty(
                          exercise.difficulty
                        )}
                      </Flex>
                    </Flex>
                    <Flex mt=".5rem">
                      <Text as="b">Type</Text>
                      <Text>
                        &nbsp;: {exercise.type}
                      </Text>
                    </Flex>
                    <Flex mt=".5rem">
                      <Text as="b">
                        Equipment
                      </Text>
                      <Text>
                        &nbsp;:{" "}
                        {exercise.equipment}
                      </Text>
                    </Flex>
                    <Text mt=".5rem">
                      <Text as="b">
                        Instructions
                      </Text>{" "}
                      :{exercise.instructions}
                    </Text>
                  </CardBody>
                </Card.Root>
              )
            )}
          </Grid>
        ) : (
          <Flex m="2rem">
            <Alert.Root
              status="warning"
              title="Oops, no result."
              variant="solid"
            >
              <Alert.Indicator />
              <Alert.Title>
                Oops, no result.
              </Alert.Title>
            </Alert.Root>
          </Flex>
        )}
      </Suspense>
    </>
  );
};

export default ExercisesList;
