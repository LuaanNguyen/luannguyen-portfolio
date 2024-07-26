"use client";
import { createContext, ReactNode, useContext, useState } from "react";

// Define the context value type
export type InitialContextValue = {
  experienceSection: boolean;
  setExperienceSection: (value: boolean) => void;
};

// Create the context with an undefined default value
export const GeneralContext = createContext<InitialContextValue | undefined>(
  undefined
);

// Define the props type for the provider
type GeneralProviderProps = {
  children: ReactNode;
};

// Provider component to wrap around parts of the app
export function GeneralProvider({ children }: GeneralProviderProps) {
  const [experienceSection, setExperienceSection] = useState<boolean>(false);

  return (
    <GeneralContext.Provider
      value={{ experienceSection, setExperienceSection }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

// Custom hook to use the context
export function useGeneralContext() {
  const context = useContext(GeneralContext);
  if (context === undefined) {
    throw new Error("useGeneralContext must be used within a GeneralProvider");
  }
  return context;
}
