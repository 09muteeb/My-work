import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div
      className="relative h-[300px] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('/Rectangle 1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-4 text-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          className="text-yellow-500"
        >
          <path
            d="M12 3L22 18H2L12 3Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

        <h1 className="text-3xl md:text-4xl font-semibold text-white">Shop</h1>

        <nav className="flex items-center gap-2 text-sm text-white/90">
          <Link href="/fort.png" className="hover:text-white">
            Home
          </Link>
          <span>&gt;</span>
          <Link href="/shop" className="hover:text-white">
            Shop
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
