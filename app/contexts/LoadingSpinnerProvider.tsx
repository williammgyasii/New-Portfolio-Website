"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isContentReady: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    setIsContentReady(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsContentReady(true), 300);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading, isContentReady }}
    >
      <div className="relative">
        <div
          className={`fixed inset-0 z-50 transition-all duration-700 ease-out ${
            isLoading
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-110 -translate-y-8 pointer-events-none"
          }`}
        >
          <LoadingSpinner />
        </div>

        <div
          className={`transition-all duration-1000 ease-out ${
            isContentReady
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          {children}
        </div>
      </div>
    </LoadingContext.Provider>
  );
}
