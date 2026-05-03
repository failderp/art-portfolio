"use client";
import { ReactNode, useState } from "react";

export const Tooltip = ({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) => {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <span className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-full whitespace-nowrap pb-2">
          <span className="block rounded-md bg-gray-600 p-2 text-xs leading-none text-white shadow-lg">
            {message}
          </span>
          <span className="mx-auto block h-3 w-3 -mt-1 rotate-45 bg-gray-600" />
        </span>
      )}
    </span>
  );
};