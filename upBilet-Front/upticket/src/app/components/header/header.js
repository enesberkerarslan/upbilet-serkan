"use client";

import React, { useState } from 'react';
import Cookies from 'js-cookie'; // Cookie'leri okumak için js-cookie
import SearchInput from './searchinput';
import BottomHeader from './bottomheader';
import TopHeader from './topheader';
import { FaTicketAlt, FaSignInAlt, FaUser, FaCog, FaUsers } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Menu from '../membermenu';
import TicketModal from '../bilet-sat/ticketsellmodal'; // Yeni modal bileşenini import edin

export default function Header({ userRole, isLoggedIn }) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = () => {
        Cookies.remove('authToken');
        if (window.location.pathname === '/') {
            router.refresh();
        } else {
            Cookies.remove('authToken');
            router.push('/');
            router.refresh();
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <header style={{ backgroundColor: '#1c0527', boxShadow: 'none' }}>

            <TopHeader />
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <a href="/">
                        <img
                            src="/logo-white.svg"
                            alt="Logo"
                            className="hidden md:flex"
                            style={{ height: '42px', width: '200px' }}
                        />

                    </a>
                    <SearchInput />
                </div>

                <nav className="hidden md:flex space-x-4">
                    <a
                        className="flex items-center text-white hover:text-gray-200"
                        onClick={openModal} // Modal açılma işlevini tetikler
                    >
                        <FaTicketAlt className="mr-2" /> Bilet Sat
                    </a>
                    {isLoggedIn ? (
                        <>
                            <Menu userRole={userRole} isLoggedIn={isLoggedIn} onLogout={handleLogout} />

                            {userRole === 'Admin' && (
                                <>
                                    <a href="/admin/dashboard" className="flex items-center text-white hover:text-gray-200">
                                        <FaCog className="mr-2" /> Yönetim Paneli
                                    </a>
                                    <a href="/admin/users" className="flex items-center text-white hover:text-gray-200">
                                        <FaUsers className="mr-2" /> Kullanıcılar
                                    </a>
                                </>
                            )}
                        </>
                    ) : (
                        <a href="/login" className="flex items-center text-white hover:text-gray-200">
                            <FaSignInAlt className="mr-2" /> Giriş Yap
                        </a>
                    )}
                </nav>
            </div>
            <BottomHeader />

            {/* Modal Bileşeni */}
            <TicketModal isOpen={isModalOpen} onClose={closeModal} />
        </header>
    );
}
