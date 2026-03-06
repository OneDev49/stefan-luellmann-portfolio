'use client';

import { ModalProvider } from "./ModalProvider";
import { ThemeProvider } from "./ThemeProvider";

export function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemeProvider>
  )
}
