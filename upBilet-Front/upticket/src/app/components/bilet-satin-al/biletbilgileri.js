import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, TextField, Switch, FormControlLabel ,Grid,Input} from '@mui/material';

const BiletBilg = ({ maxParticipants }) => {
    const [numParticipants, setNumParticipants] = useState(1);
    const [formData, setFormData] = useState({});
    const [skipForm, setSkipForm] = useState(false);

    const handleChange = (e, step, field) => {
        setFormData({
            ...formData,
            [step]: {
                ...formData[step],
                [field]: e.target.value
            }
        });
    };

    const handleToggleSkipForm = (event) => {
        setSkipForm(event.target.checked);
        if (event.target.checked) {
            // Burada form verilerini saklama veya başka bir işlem yapabilirsiniz.
        }
    };

    return (
        <Box sx={{ padding: '15px', backgroundColor: 'white', borderRadius: '10px', marginTop: '15px' }}>
            <Typography variant="h6">Katılımcı Bilgileri</Typography>

            <FormControlLabel
                control={<Switch checked={skipForm} onChange={handleToggleSkipForm} />}
                label="Katılımcı Bilgilerini Sonra Gir"
                sx={{ marginBottom: '16px' }}
            />

            {!skipForm && (
                <>
                    <Box sx={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                        {[...Array(maxParticipants)].map((_, index) => (
                            <Button
                                key={index + 1}
                                variant={numParticipants === index + 1 ? 'contained' : 'outlined'}
                                onClick={() => setNumParticipants(index + 1)}
                                sx={{ flex: '1 1 auto', minWidth: '80px' }}
                            >
                                {index + 1}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {[...Array(numParticipants)].map((_, index) => {
                            const num = index + 1;
                            return (
                                <Card key={num} sx={{ marginBottom: '16px',boxShadow:'none'  }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                                        {num}. Katılımcı Bilgileri
                                    </Typography>
                                    <Grid container spacing={2} sx={{ marginBottom: '16px' }}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="body1">Adınız</Typography>
                                            <Input
                                                fullWidth
                                                value={formData[`katilimci${num}`]?.ad || ''}
                                                onChange={(e) => handleChange(e, `katilimci${num}`, 'ad')}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="body1">Soyadınız</Typography>
                                            <Input
                                                fullWidth
                                                value={formData[`katilimci${num}`]?.soyad || ''}
                                                onChange={(e) => handleChange(e, `katilimci${num}`, 'soyad')}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="body1">Uyruk</Typography>
                                            <Input
                                                fullWidth
                                                value={formData[`katilimci${num}`]?.uyruk || ''}
                                                onChange={(e) => handleChange(e, `katilimci${num}`, 'uyruk')}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="body1">Cep Telefonu</Typography>
                                            <Input
                                                fullWidth
                                                value={formData[`katilimci${num}`]?.cep || ''}
                                                onChange={(e) => handleChange(e, `katilimci${num}`, 'cep')}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="body1">T.C. Kimlik No / Pasaport No</Typography>
                                            <Input
                                                fullWidth
                                                value={formData[`katilimci${num}`]?.tcKimlik || ''}
                                                onChange={(e) => handleChange(e, `katilimci${num}`, 'tcKimlik')}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
        
                            );
                        })}
                    </Box>
                </>
            )}
        </Box>
    );
};

export default BiletBilg;
