"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Card, CardContent, Input, InputAdornment, IconButton, Typography, Link } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation'; // useRouter'ı import et
import Cookies from 'js-cookie';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/MainUser/login', {
                userMail: email,
                userPassword: password,
            });

            if (response.status === 200) {
                const responseData = response.data;
                console.log(responseData); // Veriyi kontrol edin

                // Token'ı cookies'e kaydet
                if (responseData.data && responseData.data.token) {
                    Cookies.set('authToken', responseData.data.token, { expires: 7 }); // Token 7 gün geçerli-
                    router.push('/');
                    router.refresh();

                } else {
                    console.error('Token bulunamadı');
                }
            } else {
                console.error('Yanıt başarılı değil:', response.status);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70vh',
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
                                mb: 2,
                            }}
                        >
                            <img
                                src="/logo.svg"
                                alt="Logo"
                                className="md:flex h-10 sm:h-11 md:h-12 lg:h-13 w-auto"
                                
                            />
                        </Box>
                        <Typography variant="h5" component="div" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
                            Giriş Yap
                        </Typography>
                        {error && (
                            <Typography variant="body2" color="error" sx={{ textAlign: 'center', mb: 2 }}>
                                {error}
                            </Typography>
                        )}
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem', color: 'text.secondary' }}>
                                    E-posta
                                </Typography>
                                <Input
                                    fullWidth
                                    margin="dense"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem', color: 'text.secondary' }}>
                                    Şifre
                                </Typography>
                                <Input
                                    id="standard-adornment-password"
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </Box>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                    borderRadius: '25px',
                                    backgroundColor: '#1c0527',
                                    boxShadow: 3,
                                    '&:hover': {
                                        backgroundColor: '#1c0527',
                                        boxShadow: 6,
                                    },
                                    '&:active': {
                                        boxShadow: 1,
                                    },
                                }}
                            >
                                Giriş Yap
                            </Button>
                        </form>
                        <Box
                            sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Link
                                href="/forgot-password"
                                underline="hover"
                                sx={{ mb: 1 }}
                            >
                                Şifrenizi mi unuttunuz?
                            </Link>
                            <Link
                                href="/register"
                                underline="hover"
                                sx={{ mt: 1 }}
                            >
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
