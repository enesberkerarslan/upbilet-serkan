"use client";

import React, { useState } from 'react';
import {
    Box, Typography, TextField, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, Button, Divider,
    Collapse, IconButton
} from '@mui/material';
import Sidebar from '../../components/sidebar';
import { memberMenuItems, adminMenuItems } from '../../data/menuitem';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import DetayBilgileri from '@/app/components/detailinformation';
// Durum rengine göre arka plan rengi belirleme fonksiyonu
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




const SatinAldiklarim = ({ userRole }) => {
    const menuItems = userRole === 'Admin' ? adminMenuItems : memberMenuItems;

    // Örnek veri kümesi
    const data = []

    // Satırın detaylarının açılıp kapanmasını kontrol eden durum
    const [openRowId, setOpenRowId] = useState(null);

    const handleRowClick = (id) => {
        setOpenRowId(openRowId === id ? null : id);
    };

    return (
        <Box sx={{ backgroundColor: 'white' }}>
            <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
                {/* Sidebar */}
                <Sidebar menuItems={menuItems} />

                {/* Main Content */}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {/* Başlık ve Arama */}
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h4" gutterBottom>
                            Satın Aldıklarım
                        </Typography>
                        <Divider sx={{ margin: '20px 0', borderColor: '#1c0527' }} />

                        <TextField
                            label="Referans No ile Ara"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2, maxWidth: '550px' }}
                        />
                    </Box>
                    <Divider sx={{ margin: '20px 0', borderColor: '#1c0527' }} />

                    {/* Tablo */}
                    <TableContainer component={Paper} sx={{ padding: '30px', boxShadow: 'none' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray' }}>Etkinlik</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Bilet Formatı</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Kategori</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Adet</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Fiyat</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Referans No</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Tarih</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Durum</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '3px solid gray', borderTop: '3px solid gray', textAlign: 'center' }}>Detay</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.length > 0 ? (
                                    data.map(item => (
                                        <React.Fragment key={item.id}>
                                            <TableRow>
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
                                                    <Box
                                                        sx={{
                                                            backgroundColor: getStatusColor(item.status),
                                                            borderRadius: '4px',
                                                            color: 'white',
                                                            px: 2,
                                                            py: 1,
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            fontSize: '12px'
                                                        }}
                                                    >
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
                                                <TableCell colSpan={9} style={{ paddingBottom: 0, paddingTop: 0 }}>
                                                    <Collapse in={openRowId === item.id} timeout="auto" unmountOnExit>
                                                        <DetayBilgileri details={item.details} />
                                                    </Collapse>
                                                </TableCell>
                                            </TableRow>
                                        </React.Fragment>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={9} sx={{ textAlign: 'center', py: 3 }}>
                                            
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>

                        </Table>
                    </TableContainer>

                </Box>

            </Box >
            <Divider sx={{ margin: '', borderColor: '#1c0527', marginTop: '35px' }} />
        </Box>
    );
};

export default SatinAldiklarim;
