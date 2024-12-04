"use client";

import React from 'react';
import axios from 'axios'; // axios'u import et
import { Box, Button, Card, CardContent, TextField, Typography, Link } from '@mui/material';
import Header from '../components/header/header';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Footer from '../footer';
import { useRouter } from 'next/navigation'; // useRouter'ı import et

const RegisterPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const router = useRouter();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/MainUser/register', {
                userMail: email,
                password: password,
                phoneNumber: phone
            });
            console.log('Kayıt başarılı:', response.data);
            router.push('/login');
            // Kayıt başarılı olduğunda yapılacak işlemler
        } catch (error) {
            console.error('Kayıt sırasında bir hata oluştu:', error);
            // Hata durumunda yapılacak işlemler
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh', // Tam ekran yüksekliği
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
                            Hesap Oluştur
                        </Typography>
                        <Typography variant="h15" component="div" gutterBottom sx={{ textAlign: 'center', marginTop: '25px' }}>
                            Formu doldurarak hesabınızı oluşturabilirsiniz
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ marginTop: '25px' }}>
                                <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem', color: 'text.secondary' }}>
                                    Adınız
                                </Typography>
                                <Input
                                    fullWidth
                                    margin="dense"
                                    variant="outlined"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ marginTop: '25px' }}>
                                <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem', color: 'text.secondary' }}>
                                    Soyadınız
                                </Typography>
                                <Input
                                    fullWidth
                                    margin="dense"
                                    variant="outlined"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ marginTop: '25px' }}>
                                <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.875rem', color: 'text.secondary' }}>
                                    Telefon Numarası
                                </Typography>
                                <Input
                                    fullWidth
                                    margin="dense"
                                    variant="outlined"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ marginTop: '25px' }}>
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
                            <Box sx={{ marginTop: '25px' }}>
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
                                    marginTop: 2,
                                    borderRadius: '25px',
                                    backgroundColor: '#1c0527',
                                    boxShadow: 3,
                                    marginTop: '35px',
                                    '&:hover': {
                                        backgroundColor: '#1c0527', // Hover sırasında arka plan rengini koruyun
                                        boxShadow: 6, // Hover sırasında gölgeyi artırın (isteğe bağlı)
                                    },
                                    '&:active': {
                                        boxShadow: 1, // Tıklama sırasında gölgeyi azaltın (isteğe bağlı)
                                    },
                                }}
                            >
                                Hesap Oluştur
                            </Button>
                        </form>
                        <Box
                            sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: '35px'
                            }}
                        >
                            <Link
                                href="/login"
                                underline="hover"
                                sx={{
                                    marginTop: '10px', // Yukarıdaki boşluğu ayarlamak için
                                }}
                            >
                                Bir hesabınız var mı? Giriş Yap
                            </Link>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default RegisterPage;
