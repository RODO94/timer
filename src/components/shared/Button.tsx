import { memo } from "react";

function ButtonComponent({
  action,
  variant,
  onClick,
}: {
  action: "start" | "stop" | "reset";
  variant: "primary" | "secondary";
  onClick: () => void;
}) {
  const baseStyles =
    "px-3 py-1 md:px-4 md:py-2 text-1xl md:text-2xl cursor-pointer ";
  const primaryStyles =
    baseStyles +
    "bg-[#fffb00] text-black rounded-sm hover:bg-[#f9f8ae] transition-colors duration-300 ";
  const secondaryStyles =
    baseStyles +
    "bg-transparent text-[#fffb00] border-b-2 md:border-b-4 border-[#fffb00] hover:bg-[#09055d] transition-colors duration-300";
  return (
    <button
      className={variant === "primary" ? primaryStyles : secondaryStyles}
      onClick={onClick}
    >
      {action === "start" && "Start"}
      {action === "stop" && "Stop"}
      {action === "reset" && "Reset"}
    </button>
  );
}

export const Button = memo(ButtonComponent);
