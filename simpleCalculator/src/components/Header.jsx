import React from "react";
import navigation from '../assets/navigation.png';
import calculator from '../assets/joomla.png';
function Header() {
    return (
        <div className="flex items-center gap-2 p-4 bg-gray-100 shadow">
            <img src={calculator} alt="nav-icon" className="w-6 h-6"/>
            <span className="text-lg font-semibold">Simple Calculator</span>
        </div>
    );
}

export default Header;
