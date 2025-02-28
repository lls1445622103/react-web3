"use client";
import { type ReactNode, useState, useEffect } from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { wagmiConfig } from "@/wagmi";



export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const queryClient = new QueryClient();

  const theme = extendTheme({ initialColorMode: "dark", useSystemColorMode: false });

  const appInfo = {
    appName: "Next-Web3-Boilerplate",
  };
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider coolMode appInfo={appInfo}>
          {mounted && children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
