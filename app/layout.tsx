"use client";
import { ChakraProvider } from "@chakra-ui/react";
// import { defaultSystem } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import React from "react";

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
