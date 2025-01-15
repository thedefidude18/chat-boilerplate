'use client'

import { useBitteWallet } from "@mintbase-js/react";
import Image from "next/image";
import React from "react";
import NearWalletConnector from "./NearWalletConnector";

const Header: React.FC = () => {
  const { isConnected } = useBitteWallet();

  return (
    <header className="flex items-center justify-between gap-4 border-b border-[#334155] px-16 py-8">
      <Image src="/bitte-logo.svg" alt="Bitte logo" width={112} height={22} />
      <div className="flex gap-4 items-center">
        <NearWalletConnector  />

        <div className={`h-[36px] w-px bg-[#334155] mx-2 ${isConnected ? "hidden" : ""}`} />
        <a
          href="mailto:paul@bitte.ai"
          className="bg-[#27272A] text-[#FAFAFA] px-8 py-2 hover:bg-opacity-80 rounded-md font-medium h-[40px]"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
