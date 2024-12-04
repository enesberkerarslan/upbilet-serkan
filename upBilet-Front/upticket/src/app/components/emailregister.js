"use client";

import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: theme.spacing(1.25),
        color: '#ffffff', // Text color for input
    },
}));

const Frame = styled('div')(({ theme }) => ({
    border: '2px solid #ccc',
    borderRadius: '30px',
    padding: theme.spacing(0.5),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: '8px',
    width: '100%', // Full width on mobile
    maxWidth: '600px', // Increase maximum width for larger screens
    height: '45px', // Slightly taller for better appearance
    position: "relative",
}));

const EmailRegister = () => {

    return (
        <Box sx={{ background: '#1c0527', padding: '16px' }}>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                position="relative"
                zIndex={1}
                sx={{
                    flexDirection: 'column',
                    background: 'white',
                    height: 'auto', // Auto height to fit content
                    gap: '15px',
                    width: '90%', // Responsive width
                    maxWidth: '600px', // Increase maximum width for larger screens
                    margin: '0 auto',
                    borderRadius: '10px',
                    background: '#1c0527',
                    padding: '16px',
                }}
            >
                <Typography sx={{ color: '#ffffff', textAlign: 'center', marginBottom: '16px', fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
                    İlgilendiğiniz Etkinliklerden Anlık Haberdar Olmak İçin E-Posta Adresinizi Bırakın!
                </Typography>
                <Frame>
                    <StyledInputBase
                        placeholder="E-posta adresinizi girin"
                        inputProps={{ 'aria-label': 'E-posta adresi' }}
                        sx={{ width: '80%', color: '#ffffff' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        startIcon={<SendIcon sx={{ marginLeft: '12px' }} />}
                        sx={{
                            width: '20%',
                            borderRadius: '30px',
                            height: '100%',
                            fontSize: { xs: '12px', sm: '14px', md: '16px' }, // Font size for button
                        }}
                    >
                    </Button>
                </Frame>
                <Typography sx={{ color: '#ffffff', textAlign: 'center', marginTop: '16px', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>
                    By signing up, you acknowledge and accept our privacy policy and consent to receiving emails.
                </Typography>
            </Box>
        </Box>
    );
};

export default EmailRegister;
