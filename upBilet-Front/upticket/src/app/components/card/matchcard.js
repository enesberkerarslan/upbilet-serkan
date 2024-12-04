import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // MUI ikon

const MatchCard = ({ title, date, stadium, price, piece }) => {
    return (
        <Box
            sx={{
                width: '100%',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                },
                borderRadius:'10px',
                padding:'5px'
            }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                width: '100%',
                flexWrap: 'wrap', // Mobil cihazlar için satır sonu ekler
                '@media (max-width: 600px)': {
                    display: 'block',
                    textAlign: 'center'
                },
            }}>
                <Box >
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '13px', color: 'black', textAlign: 'center' }}>
                        CUMA
                    </Typography>

                    <Typography sx={{ color: '#555', marginTop: '4px', fontSize: '12px' }}>
                        {date}
                    </Typography>
                </Box>


                <Box>
                    <Typography sx={{ marginBottom: '10px', color: 'black', fontSize: '16px' , fontWeight: 'bold'}}>
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            flex: '3',
                            display: 'flex',
                            gap: '8px',
                        }}
                    >
                        <LocationOnIcon sx={{ fontSize: '1.0rem', color: '#444' }} />
                        <Typography variant="body1" sx={{ color: '#444', fontSize: '12px' }}>
                            {stadium}
                        </Typography>
                    </Box>
                </Box>


                <Box>



                    <Box sx={{ flex: '2', textAlign: 'center',marginTop:'5px' }}>
                        <Typography variant="body2" sx={{ color: '#1c0527', fontSize: '12px', fontWeight: 'bold' }}>
                            En düşük Fiyat
                        </Typography>
                        <Typography sx={{ fontSize: '14px', color: '#black', }}>
                            {price} TRY
                        </Typography>
                    </Box>
                    <Box sx={{ flex: '2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        <Typography  variant="body1" sx={{ color: '#1c0527', fontSize: '12px', fontWeight: 'bold', marginRight: '5px' }}>
                            {piece} Adet
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'black', fontSize: '12px' }}>
                            Bilet Kaldı
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MatchCard;
