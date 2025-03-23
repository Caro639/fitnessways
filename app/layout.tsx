"use client";

import { Provider } from "@/components/ui/provider";
import React from "react";

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
