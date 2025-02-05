"use client";

import { BitteWalletContextProvider } from "@mintbase-js/react";

const BitteWalletSetup = {
  network: "mainnet",
  callbackUrl: typeof window !== "undefined" ? window.location.origin : "",
  contractAddress: "",
};

type WalletProviderProps = {
  children: React.ReactNode;
};

const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  return (
    <BitteWalletContextProvider {...BitteWalletSetup}>
      {children}
    </BitteWalletContextProvider>
  );
};

export default WalletProvider;
