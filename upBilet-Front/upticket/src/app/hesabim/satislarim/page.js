"use client";

import React, { useState } from 'react';
import {
    Box, Typography, TextField, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, Card, Divider,  Container,
    Collapse, IconButton
} from '@mui/material';
import Sidebar from '../../components/sidebar';
import { memberMenuItems, adminMenuItems } from '../../data/menuitem';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import DetayBilgileri from '@/app/components/detailinformation';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const getStatusColor = (status) => {
    switch (status) {
        case 'Teslim Edildi':
            return 'green';
        case 'Teslimat Bekleniyor':
            return 'gray';
        default:
            return '#ffffff';
    }
};

const CardItem = ({ icon, title, value }) => (
    <Card
        sx={{
            flex: ' 1 23%', // Kart genişliği %23
            mb: 2, // Alt boşluk
            mx: 1, // Sağ ve sol margin
            borderRadius: '15px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // İçeriği dikey olarak ortalar

            minHeight: '100px',
            marginBottom:'30px'
        }}
    >
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center', // Icon ve title'ın aynı hizaya gelmesini sağlar
                justifyContent: 'space-between', // Title ve value arasında boşluk bırakır
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'none' }}> {/* Flex yönü sütun olacak */}
                {icon}
                <Typography
                    variant="subtitle1"
                    sx={{
                        ml: 1,
                        fontSize: '15px',
                        fontWeight: 'bold',  // Yazıyı bold yapar
                        textAlign: 'center', // Metni ortalar
                        maxWidth:'55px'
                    }}
                >
                    {title}
                </Typography>
            </Box>
            <Typography variant="h6" sx={{ textAlign: 'right', fontWeight: 'bold' }}>{value}</Typography>
        </Box>
    </Card>

);


const SatinAldiklarim = ({ userRole }) => {
    const menuItems = userRole === 'Admin' ? adminMenuItems : memberMenuItems;

    const [searchTerm, setSearchTerm] = useState('');
    const [openRowId, setOpenRowId] = useState(null);

    // Example data array
    const data = [
        {
            id: 1,
            event: 'Galatasaray - Manchester United',
            eventlocation: 'Ali Sami Yen Spor Kompleksi Rams Park',
            eventDate: '29 Kasım 2023',
            ticketFormat: 'E-Bilet',
            category: 'Kale Arkası Üst Kat',
            amount: 2,
            earnings: '600 TL',
            referenceNo: 'REF12345',
            date: '2024-08-23',
            status: 'Teslim Edildi',
            details: [
                { nameSurname: 'N***** A******', nationality: 'Saudi Arabia', idNumber: 'Y812788' },
                { nameSurname: 'M******* A******', nationality: 'Saudi Arabia', idNumber: 'Y812788' }
            ]
        },
        {
            id: 2,
            event: 'Tiyatro ABC',
            ticketFormat: 'E-Bilet',
            category: 'Kale Arkası Üst Kat',
            amount: 1,
            earnings: '150 TL',
            referenceNo: 'REF67890',
            date: '2024-08-24',
            status: 'Teslimat Bekleniyor',
            details: [
                { nameSurname: 'A***** B******', nationality: 'Turkey', idNumber: 'T123456' }
            ]
        },
    ];

    // Filtered data based on search term
    const filteredData = data.filter(item =>
        item.referenceNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.event.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleRowClick = (id) => {
        setOpenRowId(openRowId === id ? null : id);
    };

    const totalTickets = filteredData.reduce((total, item) => total + item.amount, 0);
    const completedSalesCount = filteredData.filter(item => item.status === 'Teslim Edildi').length;

    const totalEarnings = filteredData.reduce((total, item) => {
        const earningsPerTicket = parseFloat(item.earnings.replace(' TL', ''));
        return total + (item.amount * earningsPerTicket);
    }, 0);

    return (
        <Box sx={{ backgroundColor: 'white' }}>
            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'flex' }, backgroundColor: 'white' }}>
                <Sidebar menuItems={menuItems} />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h4" gutterBottom>
                            Satışlarım
                        </Typography>
                        <Divider sx={{ margin: '20px 0', borderColor: '#1c0527' }} />
                        <Box sx={{ backgroundColor: 'white' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap', // Kartların bir satırda taşmaması için
                                    gap: 2, // Kartlar arasındaki boşluk
                                    justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }
                                }}
                            >
                                <CardItem
                                    icon={<CheckCircleOutlineIcon sx={{ fontSize: 55 }} />}
                                    title="Tamamlanmış Satışlar"
                                    value={completedSalesCount}
                                />
                                <CardItem
                                    icon={<ConfirmationNumberIcon sx={{ fontSize: 55 }} />}
                                    title="Toplam Bilet Sayısı"
                                    value={`${totalTickets} Adet`}
                                />
                                <CardItem
                                    icon={<MonetizationOnIcon sx={{ fontSize: 55 }} />}
                                    title="Toplam Kazanç"
                                    value={`${totalEarnings} TL`}
                                />
                            </Box>
                        </Box>

                        <TextField
                            label="Referans No ile Ara"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2, maxWidth: '550px' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Box>

                    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray' }}>Etkinlik</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Bilet Formatı</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Kategori</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Adet</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Kazanç</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Referans No</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Tarih</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Durum</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Detay</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredData.map(item => (
                                    <React.Fragment key={item.id}>
                                        <TableRow onClick={() => handleRowClick(item.id)}>
                                            <TableCell>
                                                <Box>
                                                    <Typography variant="body1" component="span" sx={{ fontWeight: 'bold', fontSize: '15px' }}>
                                                        {item.event}
                                                    </Typography>
                                                    <Typography variant="body2" component="div" sx={{ fontSize: '12px' }}>
                                                        {item.eventlocation}
                                                    </Typography>
                                                    <Typography variant="body2" component="div" sx={{ fontSize: '12px' }}>
                                                        {item.eventDate}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>{item.ticketFormat}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>{item.category}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>{item.amount}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>{item.earnings}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>{item.referenceNo}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>{item.date}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>
                                                <Box sx={{
                                                    backgroundColor: getStatusColor(item.status),
                                                    borderRadius: '4px',
                                                    color: 'white',
                                                    px: 2,
                                                    py: 1,
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    fontSize: '12px'
                                                }}>
                                                    {item.status}
                                                </Box>
                                            </TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>
                                                <IconButton onClick={() => handleRowClick(item.id)}>
                                                    {openRowId === item.id ? <ArrowUpward /> : <ArrowDownward />}
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={9} sx={{ paddingBottom: 0, paddingTop: 0 }}>
                                                <Collapse in={openRowId === item.id} timeout="auto" unmountOnExit>
                                                    <Box sx={{ margin: 1 }}>
                                                        <DetayBilgileri details={item.details} />
                                                    </Box>
                                                </Collapse>
                                            </TableCell>
                                        </TableRow>
                                    </React.Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
            <Divider sx={{ borderColor: '#1c0527', marginTop: '150px' }} />
        </Box>

    );
};

export default SatinAldiklarim;
