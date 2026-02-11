import React from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "bg-warm-white border border-stone rounded-xl p-10 text-center shadow-sm",
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-ember-light flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-ember" />
      </div>
      <h3 className="font-display text-xl mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] mx-auto mb-5">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary">
          <span className="text-lg">+</span>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
