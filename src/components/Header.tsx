import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center gap-4 border-b border-white pb-4 mb-8">
      <Image src="/bitte.svg" alt="Bitte logo" width={50} height={50} />
      <h1 className="text-xl font-bold">Bitte Ai Chat Boilerplate</h1>
    </header>
  );
};

export default Header;
