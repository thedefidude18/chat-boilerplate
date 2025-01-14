"use client";

import { BitteAiChat } from "@bitte-ai/chat";
import "@bitte-ai/chat/style.css";
import { useBitteWallet, Wallet } from "@mintbase-js/react";
import { useEffect, useState } from "react";

const bitteAgent = {
  id: "bitte-assistant",
  name: "Bitte Assistant",
  description:
    "Bitte assistant for interacting with NFTs and Fungible Tokens (FTs) on NEAR Protocol.  Users can query, mint, transfer NFTs, transfer FTs, create drops, and swap tokens.",
  verified: true,
  image: "/bitte.svg",
};

const Main: React.FC = () => {
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
    <main className="flex flex-col items-center gap-8 max-w-5xl mx-auto">
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
  );
};

export default Main;
