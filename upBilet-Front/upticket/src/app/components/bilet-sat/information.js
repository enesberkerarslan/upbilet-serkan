"use client";

import React, { useState } from 'react';
import { Box, TextField, Button, Container, Typography, InputAdornment, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Select, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const UserDetailsForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        bankAccountName: '',
        bankAccountNumber: '',
        bicSwift: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
    });

    const [modalOpen, setModalOpen] = useState({
        address: false,
        bankAccount: false
    });

    const [formData2, setFormData2] = useState({
        address: '',
        city: '',
        country: '',
        postalCode: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    const [savedAddresses, setSavedAddresses] = useState([
        'Adres 1',
        'Adres 2',
        'Adres 3'
    ]);

    const [savedBankAccounts, setSavedBankAccounts] = useState([
        { accountName: 'Banka Hesap 1', accountNumber: '1234567890', bicSwift: 'ABCD1234' },
        { accountName: 'Banka Hesap 2', accountNumber: '0987654321', bicSwift: 'EFGH5678' }
    ]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
    };

    const handleOpenModal = (type) => {
        setModalOpen({ ...modalOpen, [type]: true });
    };

    const handleCloseModal = (type) => {
        setModalOpen({ ...modalOpen, [type]: false });
    };

    const handleAddAddress = () => {
        setSavedAddresses([...savedAddresses, formData.address]);
        handleCloseModal('address');
    };

    const handleAddBankAccount = () => {
        setSavedBankAccounts([...savedBankAccounts, {
            accountName: formData.bankAccountName,
            accountNumber: formData.bankAccountNumber,
            bicSwift: formData.bicSwift
        }]);
        handleCloseModal('bankAccount');
    };

    return (
        <Container sx={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', marginBottom: '25px' }}>
            <Typography variant="h6" sx={{ marginBottom: '20px' }}>Kişisel ve İletişim Bilgileri</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                <Box>
                    <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>Kişisel Bilgiler</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                        <Box flex={1}>
                            <TextField
                                label="Ad"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                            />
                        </Box>
                        <Box flex={1}>
                            <TextField
                                label="Soyad"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ marginTop: '15px' }}>
                    <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>İletişim Bilgileri</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                        <Box flex={1}>
                            <TextField
                                label="E-posta"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                type="email"
                            />
                        </Box>
                        <Box flex={1}>
                            <TextField
                                label="Telefon"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                type="tel"
                            />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ marginTop: '20px' }}>
                    <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="subtitle1">Adres Bilgileri</Typography>
                        <IconButton onClick={() => handleOpenModal('address')}>
                            <Typography>Adres Ekle</Typography>
                            <AddIcon />
                        </IconButton>
                    </Box>
                    <Select
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    >
                        {savedAddresses.map((address, index) => (
                            <MenuItem key={index} value={address}>
                                {address}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>

                <Box sx={{ marginTop: '20px' }}>
                    <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="subtitle1">Banka Hesap Bilgileri</Typography>
                        <IconButton onClick={() => handleOpenModal('bankAccount')}>
                            <Typography>Banka Bilgisi Ekle</Typography>
                            <AddIcon />
                        </IconButton>
                    </Box>
                    <Select
                        name="bankAccountName"
                        value={formData.bankAccountName}
                        onChange={(e) => {
                            const selectedAccount = savedBankAccounts.find(account => account.accountName === e.target.value);
                            setFormData({
                                ...formData,
                                bankAccountName: selectedAccount.accountName,
                                bankAccountNumber: selectedAccount.accountNumber,
                                bicSwift: selectedAccount.bicSwift
                            });
                        }}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: '10px' }}
                    >
                        {savedBankAccounts.map((account, index) => (
                            <MenuItem key={index} value={account.accountName}>
                                {account.accountName} - {account.accountNumber}
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField
                        label="Banka Hesap Numarası"
                        name="bankAccountNumber"
                        value={formData.bankAccountNumber}
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start">TR</InputAdornment>
                        }}
                        disabled
                        sx={{ marginBottom: '10px' }}
                    />
                    <TextField
                        label="BIC, SWIFT, ABA, RTN"
                        name="bicSwift"
                        value={formData.bicSwift}
                        variant="outlined"
                        fullWidth
                        disabled
                        sx={{ marginBottom: '10px' }}
                    />
                </Box>

                <Box mt={2} display="flex" justifyContent="flex-end">
                    <Button type="submit" variant="contained" color="primary">
                        Gönder
                    </Button>
                </Box>

                {/* Adres Modal */}
                <Dialog open={modalOpen.address} onClose={() => handleCloseModal('address')}>
                    <DialogTitle>Yeni Adres Ekle</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Adres"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Şehir"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Ülke"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Posta Kodu"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleCloseModal('address')}>Kapat</Button>
                        <Button onClick={handleAddAddress}>Ekle</Button>
                    </DialogActions>
                </Dialog>

                {/* Bank Account Modal */}
                <Dialog open={modalOpen.bankAccount} onClose={() => handleCloseModal('bankAccount')}>
                    <DialogTitle>Yeni Banka Hesabı Ekle</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Hesap Adı"
                            name="bankAccountName"
                            value={formData.bankAccountName}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Hesap Numarası"
                            name="bankAccountNumber"
                            value={formData.bankAccountNumber}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="BIC, SWIFT"
                            name="bicSwift"
                            value={formData.bicSwift}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleCloseModal('bankAccount')}>Kapat</Button>
                        <Button onClick={handleAddBankAccount}>Ekle</Button>
                    </DialogActions>
                </Dialog>

            </Box>
        </Container>
    );
};

export default UserDetailsForm;
