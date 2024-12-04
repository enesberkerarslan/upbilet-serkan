"use client";

import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Container, Typography, InputAdornment, useMediaQuery, useTheme } from '@mui/material';

const PriceForm = ({ onSubmit }) => {
    const [price, setPrice] = useState('');
    const [adjustedPrice, setAdjustedPrice] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        if (price) {
            // Fiyatı 1.25 ile çarp
            setAdjustedPrice((parseFloat(price) * 1.25).toFixed(2));
        } else {
            setAdjustedPrice('');
        }
    }, [price]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ price, adjustedPrice });
    };

    return (
        <Container sx={{ padding: '20px', marginBottom: '25px', backgroundColor: 'white',borderRadius:'10px' }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ 
                    display: 'flex', 
                    flexDirection: isMobile ? 'column' : 'row', 
                    gap: 2, 
                    maxWidth: 900, 
                    margin: 'auto',
                    marginTop: '25px'
                }}
            >
                <Box flex={1} sx={{ mb: isMobile ? 2 : 0 }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Kazanmak İstediğiniz Miktarı Belirleyin(*)</Typography>
                    <TextField
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            endAdornment: <InputAdornment position="end" sx={{ color: 'grey.500' }}>TRY</InputAdornment>,
                        }}
                    />
                </Box>
                <Box flex={1}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Listelenecek Fiyat</Typography>
                    <TextField
                        type="text"
                        value={adjustedPrice}
                        InputProps={{
                            readOnly: true,
                            endAdornment: <InputAdornment position="end" sx={{ color: 'grey.500' }}>TRY</InputAdornment>,
                        }}
                        variant="outlined"
                        fullWidth
                    />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Bu bilgi otomatik hesaplandığı için değiştirilemez
                    </Typography>
                </Box>
            </Box>
            <Box mt={2} display="flex" justifyContent="flex-end">
                 <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{maxWidth:'300px',marginTop:'25px'}}

                >
                    Bilgilere devamet
                </Button>
            </Box>
        </Container>
    );
};

export default PriceForm;
