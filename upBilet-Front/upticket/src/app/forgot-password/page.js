"use client";

import React from 'react';
import { Box, Button, Card, CardContent, TextField, Typography, Link } from '@mui/material';
import Header from '../components/header/header';
import Input from '@mui/material/Input';
import Footer from '../footer';

const LoginPage = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70vh', // Tam ekran yüksekliği
                    backgroundColor: '#f0f0f0',
                }}
            >
                <Card sx={{ width: '100%', maxWidth: 400, padding: 3, borderRadius: '7px' }}>
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mb: 2, // Opsiyonel: Alt boşluk ekler
                            }}
                        >
                            <img
                                src="/logo.svg"
                                alt="Logo"
                                className="md:flex h-10 sm:h-11 md:h-12 lg:h-13 w-auto"
                            />
                        </Box>
                        <Typography variant="h5" component="div" gutterBottom sx={{ textAlign: 'center', marginTop: '25px' }}>
                        Şifremi Unuttum
                        </Typography>
                        <Typography variant="h15" component="div" gutterBottom sx={{ textAlign: 'center', marginTop: '25px' }}>
                        Şifreni yenilemek için e-posta adresini gir!


                        </Typography>

                        <Box sx={{ marginTop: '25px' }}>
                            <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem', color: 'text.secondary' }}>
                                E-posta
                            </Typography>
                            <Input
                                fullWidth
                                margin="dense"
                                variant="outlined"

                            />
                        </Box>
                      

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                marginTop: 2,
                                borderRadius: '25px',
                                backgroundColor: '#1c0527',
                                boxShadow: 3, // Gölge eklemek için
                                marginTop:'35px',
                                '&:hover': {
                                    backgroundColor: '#1c0527', // Hover sırasında arka plan rengini koruyun
                                    boxShadow: 6, // Hover sırasında gölgeyi artırın (isteğe bağlı)
                                },
                                '&:active': {
                                    boxShadow: 1, // Tıklama sırasında gölgeyi azaltın (isteğe bağlı)
                                },
                            }}
                        >
                            Şifremi Sıfırla
                        </Button>

                        {/* Ekstra bağlantılar */}
                        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' , marginTop:'35px',}}>

                            <Link href="/register" underline="hover">
                                Hesabınız mı yok? Oluşturun
                            </Link>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default LoginPage;
