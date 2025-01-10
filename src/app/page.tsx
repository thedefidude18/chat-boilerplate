"use client";

import { NearWalletConnector } from "@/components/NearWalletConnector";
import { useBitteWallet, Wallet } from "@mintbase-js/react";
import { BitteAiChat } from "bitte-ai-chat";
import Image from "next/image";
import { useEffect, useState } from "react";

const bitteAgent = {
  id: "bitte-assistant",
  name: "Bitte Assistant",
  description:
    "Bitte assistant for interacting with NFTs and Fungible Tokens (FTs) on NEAR Protocol.  Users can query, mint, transfer NFTs, transfer FTs, create drops, and swap tokens.",
  verified: true,
  image: "/bitte.svg",
};

export default function Home() {
  const { selector } = useBitteWallet();
  const [wallet, setWallet] = useState<Wallet>();

  useEffect(() => {
    const fetchWallet = async () => {
      const walletInstance = await selector.wallet();
      setWallet(walletInstance);
    };
    if (selector) fetchWallet();
  }, [selector]);

  return (
    <div className="p-4">
      <header className="flex items-center justify-center gap-4 border-b border-white pb-4 mb-8">
        <Image src="/bitte.svg" alt="Bitte logo" width={50} height={50} />
        <h1 className="text-xl font-bold">Bitte Ai Chat Boilerplate</h1>
      </header>
      <main className="flex flex-col items-center gap-8 max-w-5xl mx-auto">
        <NearWalletConnector />
        <BitteAiChat
          options={{ agentImage: bitteAgent.image, agentName: bitteAgent.name }}
          agentid={bitteAgent.id}
          wallet={{ near: { wallet } }}
          apiUrl="/api/chat"
          colors={{
            generalBackground: "#000000",
            messageBackground: "#18181A",
            textColor: "#FFFFFF",
            buttonColor: "#0F172A",
            borderColor: "#ffffff",
          }}
        />
      </main>
    </div>
  );
}
