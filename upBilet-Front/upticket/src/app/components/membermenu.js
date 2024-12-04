import React, { useState } from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { memberMenuItems, adminMenuItems } from '../data/menuitem'; // Menü öğelerini ayrı bir dosyadan da çekebilirsiniz.
 
const Menu = ({ userRole, isLoggedIn, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = userRole === 'Admin' ? adminMenuItems : memberMenuItems;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center text-white hover:text-gray-200"
      >
        <FaUserCircle className="mr-2" />
        {userRole === 'Admin' ? 'Admin Menü' : 'Profilim'}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
          {menuItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
          {isLoggedIn && (
            <button
            onClick={onLogout}
            className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center "
          >
            <FaSignOutAlt className="mr-2" />
            Çıkış Yap
          </button>
          
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
