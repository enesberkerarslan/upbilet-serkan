"use client";
import React, { useState } from 'react';
import {
    TextField,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Typography,
    Grid,
    Box,
    Switch
} from '@mui/material';



export default function TicketInfoForm({ onSubmit }) { // onSubmit prop ekledik
    const [ticketFormat, setTicketFormat] = useState('');
    const [ticketCount, setTicketCount] = useState('');
    const [salePreference, setSalePreference] = useState('');
    const [readyForDelivery, setReadyForDelivery] = useState(''); // Changed to string for radio buttons
    const [seatingInfo, setSeatingInfo] = useState('');
    const [blockNumber, setBlockNumber] = useState('');
    const [rowNumber, setRowNumber] = useState('');
    const [restrictions, setRestrictions] = useState([]);
    const [benefits, setBenefits] = useState([]);
    const [isMore, setIsMore] = useState(false);

    const handleTicketCountChange = (event) => {
        setTicketCount(event.target.value);
    };

    const handleMoreClick = () => {
        setIsMore(true);
        setTicketCount('');
    };

    const handleNumberClick = (num) => {
        setTicketCount(num.toString());
        setIsMore(false);
    };

    const handleRestrictionChange = (event) => {
        const { value, checked } = event.target;
        setRestrictions(prevRestrictions =>
            checked ? [...prevRestrictions, value] : prevRestrictions.filter(r => r !== value)
        );
    };

    const handleBenefitChange = (event) => {
        const { value, checked } = event.target;
        setBenefits(prevBenefits =>
            checked ? [...prevBenefits, value] : prevBenefits.filter(b => b !== value)
        );
    };

    const handleSubmit = () => {
        const formData = {
            ticketFormat,
            ticketCount,
            salePreference,
            readyForDelivery,
            seatingInfo,
            blockNumber,
            rowNumber,
            restrictions,
            benefits,
        };
        if (onSubmit) {
            onSubmit(formData); // Formu gönderirken verileri dışarıya iletmek
        }
    };
    return (
        <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '10px', marginTop: '15px', marginBottom: '25px' }}>
            <Box sx={{ border: '1px solid black', borderRadius: '5px', padding: '16px', marginBottom: '16px' }}>

                <Typography variant="subtitle1" sx={{ marginBottom: '13px', fontSize: '16px', color: 'gray' }}>Bilet Formatı(*)</Typography>
                <Box sx={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
                    {['PDF Bilet', 'E-Bilet'].map((format) => (
                        <Button
                            key={format}
                            variant={ticketFormat === format ? 'contained' : 'outlined'}
                            onClick={() => setTicketFormat(format)}
                            sx={{ flex: '1 1 auto', minWidth: '120px', maxWidth: '250px', }}
                        >
                            {format}
                        </Button>
                    ))}
                </Box>
            </Box>
            <Box sx={{ border: '1px solid black', borderRadius: '5px', padding: '16px', marginBottom: '16px' }}>

                <Typography variant="subtitle1" sx={{ marginBottom: '13px', fontSize: '16px', color: 'gray' }}>Bilet Sayısı(*)</Typography>
                <Box sx={{ marginBottom: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <Button
                            key={num}
                            variant={ticketCount === num.toString() ? 'contained' : 'outlined'}
                            onClick={() => handleNumberClick(num)}
                            sx={{ flex: '1 1 auto', minWidth: '80px' }}
                        >
                            {num}
                        </Button>
                    ))}
                    <Button
                        variant={isMore ? 'contained' : 'outlined'}
                        onClick={handleMoreClick}
                        sx={{ flex: '1 1 auto', minWidth: '80px' }}
                    >
                        +6
                    </Button>
                    {isMore && (
                        <TextField
                            label="Bilet Sayısını Giriniz"
                            type="number"
                            value={ticketCount}
                            onChange={handleTicketCountChange}
                            fullWidth
                            margin="normal"
                        />
                    )}
                </Box>
            </Box>
            <Box sx={{ border: '1px solid black', borderRadius: '5px', padding: '16px', marginBottom: '16px' }}>

                <Typography variant="subtitle1" sx={{ marginBottom: '13px', fontSize: '16px', color: 'gray' }} >Biletlerinizi Nasıl Satmak İstersiniz?(*)</Typography>
                <Box sx={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <Button
                        variant={salePreference === 'Ayrı ayrı' ? 'contained' : 'outlined'}
                        onClick={() => setSalePreference('Ayrı ayrı')}
                        sx={{
                            flex: '1 1 100%',
                            minWidth: '120px',
                            '@media (min-width:600px)': { flex: '1 1 auto' },
                            fontSize: '15px',
                            textTransform: 'none' // Büyük harf dönüşümünü kapatın
                        }}
                    >
                        Ayrı ayrı
                    </Button>

                    <Button
                        variant={salePreference === 'Hepsi birlikte' ? 'contained' : 'outlined'}
                        onClick={() => setSalePreference('Hepsi birlikte')}
                        sx={{
                            flex: '1 1 100%',
                            minWidth: '120px',
                            '@media (min-width:600px)': { flex: '1 1 auto' },
                            fontSize: '15px',
                            textTransform: 'none' // Büyük harf dönüşümünü kapatın
                        }}
                    >
                        Hepsi birlikte
                    </Button>
                    <Button
                        variant={salePreference === 'Yalnız bırakma' ? 'contained' : 'outlined'}
                        onClick={() => setSalePreference('Yalnız bırakma')}
                        sx={{
                            flex: '1 1 100%',
                            minWidth: '120px',
                            '@media (min-width:600px)': { flex: '1 1 auto' },
                            fontSize: '15px',
                            textTransform: 'none',

                        }}
                    >
                        Yalnız bırakma
                    </Button>
                </Box>

            </Box>
            <Box sx={{ border: '1px solid black', borderRadius: '5px', padding: '16px', marginBottom: '16px' }}>

                <FormControl fullWidth margin="normal">
                    <Typography variant="subtitle1" sx={{ marginBottom: '13px', fontSize: '16px', color: 'gray' }}>Biletler Gönderime Hazır mı?(*)</Typography>
                    <RadioGroup
                        value={readyForDelivery}
                        onChange={(e) => setReadyForDelivery(e.target.value)}
                        row
                    >
                        <FormControlLabel
                            value="Evet"
                            control={<Radio color="primary" />}
                            label="Evet"
                        />
                        <FormControlLabel
                            value="Hayır"
                            control={<Radio color="primary" />}
                            label="Hayır"
                        />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ border: '1px solid black', borderRadius: '5px', padding: '16px', marginBottom: '16px' }}>

                <Typography variant="subtitle1" sx={{ marginBottom: '13px', fontSize: '16px', color: 'gray' }}>Bilet Detaylarını Giriniz</Typography>
                <FormControl fullWidth margin="normal">
                    <Typography gutterBottom sx={{ fontSize: '12px' }}>Bilet Kategorisi(*)</Typography>
                    <Select
                        value={seatingInfo}
                        onChange={(e) => setSeatingInfo(e.target.value)}
                    >
                        <MenuItem value="">--- Seçiniz ---</MenuItem>
                        <MenuItem value="Kale Arkası Üst Kat">Kale Arkası Üst Kat</MenuItem>
                        <MenuItem value="Kale Arkası Alt Kat">Kale Arkası Alt Kat</MenuItem>
                        <MenuItem value="Üst Kat">Üst Kat</MenuItem>
                        <MenuItem value="Kenar">Kenar</MenuItem>
                        <MenuItem value="Alt Kat">Alt Kat</MenuItem>
                        <MenuItem value="VIP">VIP</MenuItem>
                        <MenuItem value="Loca">Loca</MenuItem>
                        <MenuItem value="Misafir">Misafir</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <Typography gutterBottom sx={{ fontSize: '12px' }}>Blok</Typography>
                    <Select
                        value={blockNumber}
                        onChange={(e) => setBlockNumber(e.target.value)}
                    >
                        <MenuItem value="">--- Seçiniz ---</MenuItem>
                        {[422, 423, 424, 425, 426, 411, 404, 405, 406, 407, 408, 409, 410].map((num) => (
                            <MenuItem key={num} value={num}>{num}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <Typography gutterBottom sx={{ fontSize: '12px', marginBottom: '-12px' }}>Sıra</Typography>
                    <TextField
                        type="text"
                        value={rowNumber}
                        onChange={(e) => setRowNumber(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </FormControl>
            </Box>
            <Box sx={{ border: '1px solid black', borderRadius: '5px', padding: '16px', marginBottom: '16px' }}>

                <Typography variant="subtitle1" sx={{ marginBottom: '13px', fontSize: '16px', color: 'gray' }}>Varsa Kısıtlamaları Seçiniz:</Typography>
                <FormControl component="fieldset" fullWidth margin="normal">
                    <Grid container spacing={2}>
                        {['Çocuk Bileti', 'Ebeveyn Gerekli', 'Kısıtlı Görüş', 'Alkolsüz Alan', 'Tekerlekli Sandalye Girişi', 'Öğrenci Bileti', 'Passolig', 'Yaşlı Bileti'].map((restriction) => (
                            <Grid item xs={12} sm={3} key={restriction}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={restrictions.includes(restriction)}
                                            onChange={handleRestrictionChange}
                                            value={restriction}
                                            color="primary"
                                        />
                                    }
                                    label={restriction}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </FormControl>

                <Typography variant="subtitle1" sx={{ marginBottom: '13px', fontSize: '16px', color: 'gray', marginTop: '13px' }}>Varsa Avantajları Seçiniz:</Typography>
                <FormControl component="fieldset" fullWidth margin="normal">
                    <Grid container spacing={2}>
                        {['VIP Girişi', 'Hospitality', 'Ücretsiz İçecek', 'Öncelikli Giriş', 'Özel Alan'].map((benefit) => (
                            <Grid item xs={12} sm={3} key={benefit}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={benefits.includes(benefit)}
                                            onChange={handleBenefitChange}
                                            value={benefit}
                                            color="primary"
                                        />
                                    }
                                    label={benefit}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </FormControl>
                <Box mt={2} display="flex" justifyContent="flex-end">

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ maxWidth: '300px',marginTop:'25px' }}
                    >
                        Fiyatlandırmaya Devam Et
                    </Button>
                </Box>
            </Box>


        </div>
    );
}
