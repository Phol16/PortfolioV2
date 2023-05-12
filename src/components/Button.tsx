'use client'

import clsx from "clsx";

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  type,
  children,
  onClick,
  disabled,
}: ButtonProps) => {
  return(
    <button
    onClick={onClick}
    type={type}
    disabled={disabled}
    className={clsx(
      `flex font-semibold gap-2 items-center px-3 py-2 rounded-full text-secondaryColorL dark:text-secondaryColor hover:text-gray-800 dark:hover:text-gray-200 hover:-translate-y-0.5 border-[1px] border-secondaryColorL dark:border-secondaryColor  transition`,
      disabled && 'opacity-50 cursor-default'
    )}
    >
      {children}
    </button>
  )
}

export default Button
