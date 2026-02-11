import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full px-3.5 py-2.5 text-sm",
          "bg-warm-white border border-stone rounded-lg",
          "outline-none",
          "focus:border-ember focus:ring-2 focus:ring-ember-light",
          "transition-all duration-150",
          "text-charcoal placeholder:text-gray-500",
          "disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
