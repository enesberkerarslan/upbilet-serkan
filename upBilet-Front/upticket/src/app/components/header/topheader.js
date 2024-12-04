import React from 'react';
import { Box, Typography } from '@mui/material';

const TopHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: { xs: '50px', md: '30px', xl: '20px' },
        backgroundColor: '#1c0527', // Arka plan rengi
        textAlign: 'center', // Yazının merkezde olması
        padding: '0 10px', // Yazının kenarlardan uzak olması
      }}
    >
      <Typography 
        sx={{ 
          fontSize: '12px', 
          color: 'white', 
          lineHeight: { xs: 'normal', md: '1.2', xl: '1.0' } 
        }} 
        variant="h5"
      >
        Canlı etkinlikler için dünyanın en aktif ikinci bilet platformuyuz. Fiyatlar satıcılar tarafından belirlenir ve üzerinde yazan fiyatın üstünde veya altında olabilir.
      </Typography>
    </Box>
  );
}

export default TopHeader;
