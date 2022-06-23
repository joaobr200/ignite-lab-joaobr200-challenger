import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-700 border-b border-gray-600 p-4 flex items-center justify-center">
      <Logo />
    </header>
  );
};

export default Header;
