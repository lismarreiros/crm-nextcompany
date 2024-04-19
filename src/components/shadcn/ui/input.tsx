/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react';

import { cn } from '@/lib/utils';
import InputMask from 'react-input-mask';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

type InputMasks = {
  className?: string;
  mask: string;
  [key: string]: any;
}
const InputMasks = ({className, ...props}: InputMasks) => {
  return (
    <InputMask
      {...props}
      className={cn(
        'flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      mask={props.mask}
      maskChar=''
    />
  );
};

export { Input, InputMasks };
