"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PenLine,
  Share2,
  Calendar,
  Archive,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "HQ",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Mission control",
  },
  {
    name: "Compose",
    href: "/dashboard/compose",
    icon: PenLine,
    description: "Create posts",
  },
  {
    name: "Channels",
    href: "/dashboard/channels",
    icon: Share2,
    description: "Connected accounts",
  },
  {
    name: "Planner",
    href: "/dashboard/planner",
    icon: Calendar,
    description: "Content calendar",
  },
  {
    name: "Holding",
    href: "/dashboard/holding",
    icon: Archive,
    description: "Drafts",
  },
  {
    name: "Brands",
    href: "/dashboard/brands",
    icon: Layers,
    description: "Switch clients",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] bg-charcoal min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-5 py-6 pb-5 border-b border-charcoal-light">
        <h1 className="font-display text-[22px] text-white">Dispatch</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 text-sm text-left rounded-r-lg transition-all duration-150",
                "border-l-[3px]",
                isActive
                  ? "text-white font-semibold bg-ember/10 border-ember"
                  : "text-gray-500 hover:text-gray-300 border-transparent"
              )}
            >
              <item.icon className="w-[18px] h-[18px]" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 pt-4 pb-6 border-t border-charcoal-light">
        <p className="text-[10px] text-gray-500 uppercase tracking-wider">
          powered by{" "}
          <span className="text-ember">Keegareaux Labs</span>
        </p>
      </div>
    </aside>
  );
}
