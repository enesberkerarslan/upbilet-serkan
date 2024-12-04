import React, { useState } from 'react';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link'; // Next.js kullanıyorsanız
import { Box, IconButton, Drawer } from '@mui/material';

const Sidebar = ({ menuItems }) => {


  return (
    <Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          width: '250px',
          backgroundColor: 'white',
          boxShadow: 'none',
          padding: '16px',
          height: '',
        }}
      >
        <div className="flex items-center mb-4">
          <FaUserCircle className="mr-2" />
          <h2 className="text-lg font-semibold">Menü</h2>
        </div>
        <nav>
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} className="block mb-2 text-gray-700 hover:bg-gray-200 p-2 rounded">
              {item.label}
            </Link>
          ))}
        </nav>
      </Box>
    </Box>
  );
};

export default Sidebar;
