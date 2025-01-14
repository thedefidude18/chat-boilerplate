import Image from "next/image";

const WelcomeMessage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center text-center justify-center text-[#A6AAB0] w-1/3 absolute z-20 bg-[#18181A] top-1/2 -translate-y-1/2">
      <Image
        src="/bitte-transparent.svg"
        alt="bitte logo transparent"
        width={40}
        height={40}
      />
      <h1 className="text-[20px] my-4 font-semibold">
        Embedded Agents Example
      </h1>
      <p className="my-2 text-[">
        Easily integrate this chat into your website, with your preferences.
      </p>
      <hr className="w-[92px] bg-[#505865] my-4" />
      <p className="my-2">
        To test, connect your wallet and ask the Bitte Assistant blockchain
        related prompts.
      </p>
      <hr className="w-[92px] bg-[#505865] my-4" />
      <div className="flex justify-center gap-4 mt-4 text-[#FAFAFA]">
        <a href="#" className="no-underline hover:underline">
          Browse Agents
        </a>
        <a href="#" className="no-underline hover:underline">
          Documentation
        </a>
      </div>
    </div>
  );
};

export default WelcomeMessage;
