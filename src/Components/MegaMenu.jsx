import Link from 'next/link';
import React, { useState } from 'react'


export default function MegaMenu (){
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
      setMenuOpen(true);
    };
  
    const handleMenuClose = () => {
      setMenuOpen(false);
    }
   


  return (
    <nav className="bg-orange-600 flex justify-center py-4 px-2">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={handleMenuOpen}
        onMouseLeave={handleMenuClose}
      >
        <div className="flex justify-between h-10">
          <div className="flex">
            {/* Dropdown Button 1 */}
            <div className="relative">
              <button className="text-white px-3 py-2 rounded-md border:none hover:border-b-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              Квартиры
              </button>
              {/* Dropdown Content */}
              <div
                className={`absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isMenuOpen ? 'block' : 'hidden'}`}
                onMouseEnter={handleMenuOpen}
                onMouseLeave={handleMenuClose}
              >
                {/* Dropdown Items */}
                <h2 className="block px-4 py-2 text-sm font-bold font-mono text-gray-500">Класс</h2>
                <Link href="#" className="block px-4 py-2 mx-2 text-gray-800 hover:text-gray-600" role="menuitem">
                  Квартиры
                </Link>
                <Link href="#" className="block px-4 py-2 mx-2 text-gray-800 hover:text-gray-600" role="menuitem">
                Элитные
                </Link>
                <Link href="#" className="block px-4 py-2 mx-2 text-gray-800 hover:text-gray-600" role="menuitem">
                 Бизнес-класс
                </Link>
                <Link href="#" className="block px-4 py-2 mx-2 text-gray-800 hover:text-gray-600" role="menuitem">
                Эконом-класс
                </Link>
              </div>
            </div>

            {/* Add more dropdown button menus as needed */}
            

          </div>
        </div>
      </div>
    </nav>
  );
}