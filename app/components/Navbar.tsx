"use client";
import { Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px="2rem"
      py="1rem"
      className={styles.navbar}
    >
      <Image
        className="object-contain"
        src="/logo.svg"
        alt="Logo"
        width={60}
        height={46}
      />
      <Button colorPalette={"purple"}>
        Connexion
      </Button>
    </Flex>
  );
};

export default Navbar;
