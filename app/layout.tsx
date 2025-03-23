"use client";

import { Provider } from "@/components/ui/provider";
import React from "react";

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
