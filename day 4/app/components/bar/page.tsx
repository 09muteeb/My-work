// components/bar/page.tsx

"use client";

import React from "react";
import { Grid2X2, List, SlidersHorizontal } from "lucide-react";
import Button from "../ui/button"; // Import the Button component

interface BarProps {
  onViewChange: (view: "grid" | "list") => void;
  onToggleItems: () => void;
  itemsVisible: boolean;
  totalItems: number;
}

const Bar: React.FC<BarProps> = ({ onViewChange, onToggleItems, itemsVisible, totalItems }) => {
  const validTotalItems = Number.isNaN(totalItems) || totalItems <= 0 ? 0 : totalItems;

  return (
    <div className="max-w-screen-lg mx-auto mt-4 px-4 sm:px-6 lg:px-8 py-4 border-b shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div
            className="p-2 rounded-full cursor-pointer"
            onClick={() => console.log("Filter clicked")}
          >
            <SlidersHorizontal className="h-5 w-5" />
          </div>
          <div
            className="p-2 rounded-full cursor-pointer"
            onClick={() => onViewChange("grid")}
          >
            <Grid2X2 className="h-5 w-5" />
          </div>
          <div
            className="p-2 rounded-full cursor-pointer"
            onClick={() => onViewChange("list")}
          >
            <List className="h-5 w-5" />
          </div>
          {/* Showing the number of items */}
          <span className="text-sm text-muted-foreground">
            Showing 1-{Math.min(16, validTotalItems)} of {validTotalItems} results
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:ml-auto">
          {/* Show [0] as text, styled as Default button when hidden */}
          <span className="text-sm text-black">Show</span>
          <Button
            className=" text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            onClick={() => console.log("Show clicked")}
          >
            16
          </Button>

          {/* Sort by [Default] as text */}
          <span className="text-sm text-black">Sort by</span>

          {/* Default Button */}
          <Button
            className=" text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            onClick={() => console.log("Sort clicked")}
          >
            Default
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bar;
