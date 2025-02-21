"use client";
import { useState, useRef } from "react";

export default function FestivalMap() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const svgRef = useRef<SVGSVGElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startCoords, setStartCoords] = useState({ x: 0, y: 0 });

  // Define clickable areas based on the real map
  const areas = {
    "main-stage": "Main Stage",
    "food-trucks": "Food Truck Village",
    "vendor-booths": "Vendor Booths",
    "entrance": "Festival Entrance",
    "kids-zone": "Kids Zone",
    "info-booth": "Information Booth",
    "restrooms": "Restroom Area",
  };

  const handleClick = (areaId: keyof typeof areas) => {
    setSelectedArea(areas[areaId]);
  };

  // Zoom controls
  const handleZoom = (direction: "in" | "out") => {
    setScale((prevScale) => {
      const newScale = direction === "in" ? prevScale * 1.2 : prevScale / 1.2;
      return Math.max(1, Math.min(5, newScale)); // Limit zoom between 1x and 5x
    });
  };

  // Reset View
  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Dragging (Panning) Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartCoords({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startCoords.x,
        y: e.clientY - startCoords.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800">Festival Map</h1>
      <p className="text-lg text-gray-600 mt-2 text-center">
        Click on different areas to learn more. Use the controls to zoom and pan.
      </p>

      {/* Zoom Controls */}
      <div className="flex gap-3 mt-4">
        <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700" onClick={() => handleZoom("in")}>
          ➕ Zoom In
        </button>
        <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700" onClick={() => handleZoom("out")}>
          ➖ Zoom Out
        </button>
        <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600" onClick={resetView}>
          🔄 Reset
        </button>
      </div>

      {/* SVG Map with Zoom & Pan */}
      <div
        className="mt-6 w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden p-4 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 800 600"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: "center",
            transition: isDragging ? "none" : "transform 0.2s ease-out",
          }}
        >
          {/* Background Map */}
          <image href="/image/festival-map/festival-map.svg" width="800" height="600" />

          {/* Adjusted Clickable Areas (Based on Real Map Layout) */}
          <rect
            x="320" y="140" width="90" height="50" // ✅ Middle (Main Stage)
            fill="rgba(0, 123, 255, 0.3)" stroke="blue" strokeWidth="2"
            className="cursor-pointer hover:scale-110 transition-transform duration-150"
            onClick={() => handleClick("main-stage")}
          />
          <circle
            cx="200" cy="400" r="35" // ✅ Lower Left (Food Truck Village)
            fill="rgba(0, 255, 0, 0.3)" stroke="green" strokeWidth="2"
            className="cursor-pointer hover:scale-110 transition-transform duration-150"
            onClick={() => handleClick("food-trucks")}
          />
          <rect
            x="480" y="310" width="70" height="40" // ✅ Middle Right (Vendor Booths)
            fill="rgba(255, 0, 0, 0.3)" stroke="red" strokeWidth="2"
            className="cursor-pointer hover:scale-110 transition-transform duration-150"
            onClick={() => handleClick("vendor-booths")}
          />
          <circle
            cx="110" cy="180" r="30" // ✅ Top Left (Festival Entrance)
            fill="rgba(255, 165, 0, 0.3)" stroke="orange" strokeWidth="2"
            className="cursor-pointer hover:scale-110 transition-transform duration-150"
            onClick={() => handleClick("entrance")}
          />
          <rect
            x="600" y="90" width="80" height="50" // ✅ Top Right (Kids Zone)
            fill="rgba(255, 255, 0, 0.3)" stroke="yellow" strokeWidth="2"
            className="cursor-pointer hover:scale-110 transition-transform duration-150"
            onClick={() => handleClick("kids-zone")}
          />
          <rect
            x="670" y="500" width="60" height="40" // ✅ Bottom Right (Info Booth)
            fill="rgba(75, 0, 130, 0.3)" stroke="purple" strokeWidth="2"
            className="cursor-pointer hover:scale-110 transition-transform duration-150"
            onClick={() => handleClick("info-booth")}
          />
          <rect
            x="90" y="500" width="50" height="30" // ✅ Bottom Left (Restrooms)
            fill="rgba(128, 128, 128, 0.3)" stroke="gray" strokeWidth="2"
            className="cursor-pointer hover:scale-110 transition-transform duration-150"
            onClick={() => handleClick("restrooms")}
          />
        </svg>
      </div>

      {/* Floating Info Box */}
      {selectedArea && (
        <div className="fixed top-16 right-8 bg-white shadow-lg rounded-lg p-4 border border-gray-300" style={{ zIndex: 1000 }}>
          <p className="text-lg font-bold text-blue-800">{selectedArea}</p>
          <p className="text-sm text-gray-600">More details coming soon!</p>
          <button className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => setSelectedArea(null)}>
            Close ✖
          </button>
        </div>
      )}
    </div>
  );
}
