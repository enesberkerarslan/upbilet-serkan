'use client'; // Bu, bileşenin istemci tarafında çalışmasını sağlar

import React from 'react';
import { Box, Typography, Button ,Divider} from '@mui/material';
import { useRouter } from 'next/navigation'; // Doğru import yolu

const TicketsComponent = ({ advertid, section, block, row, quantity, pricePerTicket, color }) => {
    const router = useRouter(); // useRouter kancasını kullanın

    const handleClick = () => {
        // Yönlendirme işlemi
        localStorage.setItem('biletId', advertid);
        router.push(`/bilet-satin-al`); // `advertid` kullanarak yönlendirme
    };

    return (
        <Box
            sx={{
                position: 'relative',
                border: '1px solid #ddd',
                borderRadius: '12px',
                padding: '10px',
                width: '100%',
                backgroundColor: '#f9f9f9',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                },
                marginBottom: '20px'
            }}
        >
            {/* Sol renk şeridi */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '8px',
                    height: '100%',
                    backgroundColor: color || '#9fa4e2',
                    borderTopLeftRadius: '12px',
                    borderBottomLeftRadius: '12px',
                }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: '12px' }}>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '3px', color: '#333', fontSize: '14px' }}>
                        {section}
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: '6px', color: '#666', fontSize: '12px' }}>
                        {block}, {row}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333', fontSize: '14px' }}>
                        {quantity} Adet
                    </Typography>
                </Box>

                <Box sx={{ alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ color: '#999', textAlign: 'right', fontSize: '10px' }}>
                        Bilet başı fiyatı
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333', fontSize: '14px' }}>
                        {pricePerTicket} TRY
                    </Typography>
                    <Box sx={{ marginTop: '10px' }}>
                        <Button
                            variant="contained"
                            sx={{
                                fontSize: '12px',
                                padding: '4px 8px',
                                backgroundColor: '#2E073F',
                                '&:hover': {
                                    backgroundColor: '#2E073F',
                                    boxShadow: 'none',
                                }
                            }}
                            onClick={handleClick} // Butona tıklama olayını bağlama
                        >
                            Satın Al
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TicketsComponent;
