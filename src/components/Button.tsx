import { ReactElement, SyntheticEvent } from "react";
import Image from "next/image";

interface ButtonProps {
   text: string;
   type: "primary" | "secondary";
   onClick: () => void;
   icon?: ReactElement;
}

export default function Button({
   text,
   type,
   onClick,
   icon = undefined,
}: ButtonProps) {
   const handleClick = (event: SyntheticEvent) => {
      event.preventDefault();
      onClick();
   };

   if (type === "primary")
      return (
         <button
            className="w-full py-2 font-medium text-white rounded-md outline-none bg-primary"
            onClick={(event) => handleClick(event)}
         >
            {text}
         </button>
      );
   else if (type === "secondary")
      return (
         <button
            onClick={(event) => handleClick(event)}
            className="flex items-center justify-center w-full gap-2 py-2 font-medium text-gray-500 border border-gray-400 rounded-md outline-none"
         >
            {icon ?? null}
            {text}
         </button>
      );
   return null;
}
