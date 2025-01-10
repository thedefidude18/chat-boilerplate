"use client";

import { useBitteWallet } from "@mintbase-js/react";

export const NearWalletConnector = () => {
  const { isConnected, selector, connect, activeAccountId } = useBitteWallet();

  const handleSignout = async () => {
    const wallet = await selector.wallet();
    return wallet.signOut();
  };

  const handleSignIn = async () => {
    try {
      await connect();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  if (!isConnected) {
    return (
      <div>
        <button
          className="bg-black px-4 py-2 hover:bg-opacity-80 text-white rounded-lg"
          onClick={handleSignIn}
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <p>{activeAccountId}</p>
      <button
        className="bg-black px-4 py-2 hover:bg-opacity-80 text-white rounded-lg"
        onClick={handleSignout}
      >
        Disconnect
      </button>
    </div>
  );
};
