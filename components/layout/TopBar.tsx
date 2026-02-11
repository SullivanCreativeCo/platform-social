"use client";

import React from "react";
import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopBarProps {
  userName?: string;
  notificationCount?: number;
}

export function TopBar({ userName = "User", notificationCount = 0 }: TopBarProps) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-warm-white border-b border-stone px-8 py-4 flex items-center justify-between">
      {/* Welcome message */}
      <div>
        <h2 className="font-display text-2xl text-charcoal">
          Welcome back, {userName}
        </h2>
        <p className="text-[13px] text-gray-500 mt-1">{currentDate}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Notification bell */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-700" />
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-ember" />
          )}
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-ember text-white text-sm font-semibold flex items-center justify-center">
          {userName.charAt(0).toUpperCase()}
        </div>
      </div>
    </div>
  );
}
