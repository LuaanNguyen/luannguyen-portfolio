"use client";
import { createContext, ReactNode, useContext } from "react";
import { useState } from "react";

type initialContextValue = {
  experienceSection: boolean;
  setExperienceSection: (value: boolean) => void;
};

type generalContextProps = {
  children: ReactNode;
};

const GeneralContext = createContext<initialContextValue | null>(null);

function GeneralProvider({ children }: generalContextProps) {
  const [experienceSection, setExperienceSection] = useState<boolean>(false);

  return (
    <GeneralContext.Provider
      value={{ experienceSection, setExperienceSection }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

function useGeneralContext() {
  const context = useContext(GeneralContext)!;
  if (context === undefined) {
    throw new Error("Timer Context was used outside of TimerProvider");
  }
  return context;
}

export { GeneralProvider, useGeneralContext };
