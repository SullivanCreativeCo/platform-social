import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full",
  {
    variants: {
      variant: {
        published: "bg-success-light text-success",
        scheduled: "bg-caution-light text-caution",
        draft: "bg-gray-100 text-gray-500",
        failed: "bg-error-light text-error",
        connected: "bg-success-light text-success",
        disconnected: "bg-gray-100 text-gray-500",
        generating: "bg-ember-light text-ember",
        pending: "bg-caution-light text-caution",
      },
    },
    defaultVariants: {
      variant: "draft",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  showDot?: boolean;
}

function Badge({ className, variant, showDot = true, children, ...props }: BadgeProps) {
  const dotColor = {
    published: "bg-success",
    scheduled: "bg-caution",
    draft: "bg-gray-300",
    failed: "bg-error",
    connected: "bg-success",
    disconnected: "bg-gray-300",
    generating: "bg-ember",
    pending: "bg-caution",
  }[variant || "draft"];

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {showDot && <span className={cn("w-1.5 h-1.5 rounded-full", dotColor)} />}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
