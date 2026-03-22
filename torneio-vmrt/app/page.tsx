"use client";

import Navbar from "@/components/Navbar";
import IndexContent from "@/components/indexContent";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Navbar />
      <IndexContent />
    </div>
  );
}
