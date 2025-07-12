"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type TeacherStore, createTeacherStore } from "@/stores/teacher-store";

export type TeacherStoreApi = ReturnType<typeof createTeacherStore>;

const TeacherStoreContext = createContext<TeacherStoreApi | undefined>(
  undefined,
);

interface TeacherStoreProviderProps {
  children: ReactNode;
}

export const TeacherStoreProvider = ({
  children,
}: TeacherStoreProviderProps) => {
  const storeRef = useRef<TeacherStoreApi>(null);

  if (!storeRef.current) {
    storeRef.current = createTeacherStore();
  }

  return (
    <TeacherStoreContext.Provider value={storeRef.current}>
      {children}
    </TeacherStoreContext.Provider>
  );
};

export const useTeacherStore = <T,>(
  selector: (store: TeacherStore) => T,
): T => {
  const store = useContext(TeacherStoreContext);

  if (!store) {
    throw new Error(
      "useTeacherStore must be used within a TeacherStoreProvider",
    );
  }

  return useStore(store, selector);
};
