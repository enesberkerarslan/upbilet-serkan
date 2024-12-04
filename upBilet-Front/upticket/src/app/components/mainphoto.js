"use client";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'; // Burayı kontrol edin
import AllCard from './card/allcard';
import gsd from '../../../public/Galatasaray.webp';

// Styled component için CSS'in doğru yazıldığından emin olun
const BackgroundImage = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%', // '100%' doğru yazım
    backgroundImage: `
        radial-gradient(circle at center, transparent 0%, #1c0527 75%),
        url(${gsd.src}) // next/image kullanıyorsanız .src ile erişin
    `,
    backgroundSize: 'cover', // 'contain' yerine 'cover' kullanmak daha iyi olabilir
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
});

const MainPhoto = () => {
    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <AppBar position="static" sx={{ height: { xs: '250px', sm: '350px', md: '500px' }, background: '#1c0527', position: 'relative' , boxShadow: 'none'}} className='mx-auto'>
                <Box
                    sx={{
                        width: { xs: '100%', sm: '81%', md: '84%', lg: '87%', xl: '65%' },
                        margin: '0 auto',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center',
                        position: 'relative', // Mutlaka pozisyonu belirtin
                    }}>
                    <BackgroundImage /> {/* Directly use BackgroundImage */}
                    <Box sx={{ position: 'absolute', top: 0, left: 0, zIndex: 1, textAlign: 'left', flexDirection: 'column', maxWidth: '500px', padding: '20px' }}>
                        <Typography sx={{ color: 'white', fontWeight: 'bold', marginBottom: '10px', marginTop: '10px', fontSize: { xs: '25px', sm: '45px', md: '55px' } }}>
                            En Popüler Müzik Etkinlikleri
                        </Typography>
                        <Typography sx={{ color: 'white', marginBottom: '10px', fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula ultrices velit, eget mollis nunc faucibus at.
                        </Typography>
                        <Typography color="primary" sx={{ marginTop: '25px', fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
                            Bilet Satın Al
                        </Typography>
                    </Box>
                </Box>
            </AppBar>
            <AllCard />
        </Box>
    );
}

export default MainPhoto;
