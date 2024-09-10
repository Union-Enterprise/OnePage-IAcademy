import Link from "next/link";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface ButtonProps {
  children?: ReactElement;
  text: String

}

export default function Button({ children, text }: ButtonProps) {

  return (
    <div
      className="text-white h-[50px] px-6 flex items-center justify-center rounded-md w-fit bg-mainBlue duration-200 cursor-pointer border-2 border-transparent hover:border-mainBlue hover:bg-transparent hover:text-black hover:px-8 group/button"
      >
      <p>{text}</p>
      <Link key={"#"} href={"#"}>
        {children}
      </Link>
    </div>
  );
}
