import React from 'react';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';

const MatchDetailsCard = ({ matchDetails }) => {
    return (
        <Card sx={{ flex: 1, borderRadius: '8px', boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    {matchDetails.title}
                </Typography>
                <Divider sx={{ marginBottom: '16px' }} />

                <Box sx={{ marginBottom: '12px' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{matchDetails.date}</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{matchDetails.venue}</Typography>
                </Box>

                <Box sx={{ marginBottom: '12px' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Kategori:</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{matchDetails.category}</Typography>
                </Box>

                <Box sx={{ marginBottom: '12px' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Blok:</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{matchDetails.block}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Sıra:</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{matchDetails.row}</Typography>
                </Box>

                <Box sx={{ marginBottom: '12px' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                        Bilet Başına: {matchDetails.price}
                    </Typography>
                </Box>

                <Divider sx={{ marginBottom: '16px' }} />

                <Box sx={{ marginBottom: '12px' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>QR Code:</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{matchDetails.provider}</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{matchDetails.website}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default MatchDetailsCard;
