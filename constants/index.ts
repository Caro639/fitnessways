import { createListCollection } from "@chakra-ui/react";

export const muscles = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower_back",
  "middle_back",
  "neck",
  "quadriceps",
  "traps",
  "triceps",
];

export const difficulties = createListCollection({
  items: [
    { label: "débutant", value: "débutant" },
    {
      label: "intermediaire",
      value: "intermediaire",
    },
    { label: "expert", value: "expert" },
    { label: "none", value: "none" },
  ],
});

// export const difficulties = [
//   "beginner",
//   "intermediate",
//   "expert",
// ];
