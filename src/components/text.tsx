import { useState } from "react";

import { LogOut, SettingsIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../shadcn/DropdownMenu";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerElement = (
    <button
      className="bg-[#27272A] text-[#FAFAFA] h-[40px] w-[40px] flex items-center justify-center hover:bg-opacity-80 rounded-md font-medium"
      onClick={() => setIsOpen(!isOpen)}
    >
      <SettingsIcon size={20} />
    </button>
  );

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
        <DropdownMenuItem>sainthiag.near</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <button className="flex items-center gap-2">
            <LogOut size={16} />
            <span className="text-sm">Disconnect</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
