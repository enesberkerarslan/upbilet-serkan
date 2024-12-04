"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import BottomHeaderButton from './bottomheaderbutton';

const menuId = 'primary-search-account-menu';


const BottomHeader = () => {
    const menu1Items = ['Galatasaray Maç Biletleri', 'Fenerbahçe Maç Biletleri', 'Beşiktaş Maç Biletleri','Trabzonspor Maç Biletleri','Ziraat Türkiye Kupası Maç Biletleri','Şampiyonlar Ligi Maç Biletleri','Avrupa Ligi Maç Biletleri'];
    const menu1Name = 'Futbol';
    const menu1Icon = <SportsSoccerIcon />

    const menu2Items = ['Euroleague Basketbol Biletleri', 'Euroleague Basketbol Biletleri'];
    const menu2Name = 'Basketbol';
    const menu2Icon = <SportsBasketballIcon />

    const menu3Items = [];
    const menu3Name = 'Konser';
    const menu3Icon = <MusicNoteIcon />

    const menu4Items = [];
    const menu4Name = 'Sahne';
    const menu4Icon = <TheaterComedyIcon />;


    return (
        <div className="container mx-auto flex justify-between items-center">
            <Box sx={{ boxShadow: 'none'}}>
                <AppBar position="static" sx={{ backgroundColor: '#1c0527', boxShadow: 'none' }} >
                    <Box display="flex" sx={{ margin: '0', height: '45px' }}>
                        <BottomHeaderButton
                            menuItems={menu1Items}
                            menuName={menu1Name}
                            menuIcon={menu1Icon}
                        />
                        <BottomHeaderButton
                            menuItems={menu2Items}
                            menuName={menu2Name}
                            menuIcon={menu2Icon}
                        />
                        <BottomHeaderButton
                            menuItems={menu3Items}
                            menuName={menu3Name}
                            menuIcon={menu3Icon}
                        />
                        <BottomHeaderButton
                            menuItems={menu4Items}
                            menuName={menu4Name}
                            menuIcon={menu4Icon}
                        />

                    </Box>
                </AppBar>
            </Box>
        </div>
    )
}

export default BottomHeader