'use client';

import clsx from 'clsx';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  secondary?:boolean,
}

const Button = ({ type, children, onClick, disabled,secondary }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `flex justify-center font-semibold gap-2 items-center px-3 py-2 text-secondaryColorL dark:text-secondaryColor hover:text-primaryColor dark:hover:text-primaryColorL hover:-translate-y-0.5 transition`,
        disabled && 'opacity-50 cursor-default',
      )}
    >
      {children}
    </button>
  );
};

export default Button;
