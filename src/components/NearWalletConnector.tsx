import { useState } from "react";

import { useBitteWallet } from "@mintbase-js/react";
import { LogOut, SettingsIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropdownMenu";

const NearWalletConnector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isConnected, selector, connect, activeAccountId } = useBitteWallet();

  const handleSignOut = async () => {
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

  const triggerElement = (
    <button
      className="bg-[#27272A] text-[#FAFAFA] h-[40px] w-[40px] flex items-center justify-center hover:bg-opacity-80 rounded-md font-medium"
      onClick={() => setIsOpen(!isOpen)}
    >
      <SettingsIcon size={20} />
    </button>
  );

  if (!isConnected) {
    return (
      <div>
        <button
          className="bg-[#FAFAFA] h-[40px] px-8 py-2 hover:bg-opacity-80 text-[#18181B] rounded-md font-medium"
          onClick={handleSignIn}
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{triggerElement}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-full rounded-lg md:mr-28 md:w-[364px]"
        sideOffset={12}
      >
        <DropdownMenuLabel className="text-text-secondary">
          Currently Connected
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{activeAccountId}</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <button className="flex items-center gap-2" onClick={handleSignOut}>
            <LogOut size={16} />
            <span className="text-sm">Disconnect</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NearWalletConnector;
