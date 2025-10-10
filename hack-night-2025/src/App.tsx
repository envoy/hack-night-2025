import { useEffect, useState } from "react";
import { fetchDailyNews, type Card } from "./util/fetchDailyNews";
import TickerBar from "./components/TickerBar";
import "./index.css";

const categoryStyles: Record<string, string> = {
  top: "bg-[#ffe7de] text-[#ff4f00]",
  tech: "bg-[#e6f0ff] text-[#2c5cff]",
  sports: "bg-[#e8f8f0] text-[#0f9158]",
  markets: "bg-[#fff3d9] text-[#c76b00]",
  local: "bg-[#f1ecff] text-[#5d3dce]",
  weather: "bg-[#e1f5ff] text-[#0077b6]",
};

function getCategoryStyle(category: string) {
  return categoryStyles[category] ?? "bg-slate-200 text-slate-700";
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "2-digit",
  });
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function relativeTimeFrom(timestamp: string | undefined, now: Date) {
  if (!timestamp) return null;
  const then = new Date(timestamp);
  const diff = now.getTime() - then.getTime();
  if (Number.isNaN(diff)) return null;