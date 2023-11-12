import clsx from 'clsx';
import Image from 'next/image';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {
  variant: 'primary' | 'outline';
  icon: string;
}

const BUTTON_VARIANTS = {
  primary:
    'btn btn-primary h-[60px] rounded-[20px] px-[30px] text-base font-semibold normal-case text-white duration-300 hover:scale-95',
  outline:
    'btn border-2 btn-outline btn-primary h-[60px] rounded-[20px] px-[30px] text-base font-semibold normal-case text-white duration-300 hover:scale-95',
};

export const Button = ({
  children,
  className,
  variant = 'primary',
  icon,
  ...props
}: Props) => {
  return (
    <button className={clsx(className, BUTTON_VARIANTS[variant])} {...props}>
      <Image src={icon} alt='button-icon' />
      {children}
    </button>
  );
};
