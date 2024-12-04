'use client';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stepper, Step, Container, Button, Card, CardContent, Typography, Divider } from '@mui/material';
import StepConnector from '@mui/material/StepConnector';
import BiletBilg from '../components/bilet-satin-al/biletbilgileri';
import MacBilgileri from '../components/bilet-satin-al/macbilgileri'
const steps = [
    { label: 'Bilet Detayları', icon: '/icons/ticket.svg' },
    { label: 'Teslimat Bilgileri', icon: '/icons/delivery.svg' },
    { label: 'Ödeme Detayları', icon: '/icons/payment.svg' },
];

const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
    marginRight: '20px',
    marginLeft: '20px',
    '& .MuiStepConnector-line': {
        borderColor: theme.palette.grey[400], // Varsayılan renk
        width: '100%', // Tam genişlik
    },
    '&.Mui-active .MuiStepConnector-line': {
        borderColor: '#7A1CAC', // Aktif adımda çizginin rengi
    },
    '&.Mui-completed .MuiStepConnector-line': {
        borderColor: '#7A1CAC', // Tamamlanmış adımda çizginin rengi
    },
    [theme.breakpoints.down('sm')]: {
        marginRight: 0, // Mobil cihazlarda margin'i kaldır
        marginLeft: 0,  // Mobil cihazlarda margin'i kaldır
    },
}));



const biletsatinal = () => {
    const [biletId, setBiletId] = useState(null);

    useEffect(() => {
        const storedId = localStorage.getItem('biletId');
        setBiletId(storedId);
    }, []);

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => steps.length;
    const completedSteps = () => Object.keys(completed).length;
    const isLastStep = () => activeStep === totalSteps() - 1;
    const allStepsCompleted = () => completedSteps() === totalSteps();

    const handleNext = () => {
        const newActiveStep = isLastStep() && !allStepsCompleted()
            ? steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = { ...completed, [activeStep]: true };
        setCompleted(newCompleted);
        handleNext();
    };
    const matchDetails = {
        title: 'Young Boys - Galatasaray',
        date: '20 Ağustos 2024 Salı, 19:00',
        venue: 'Wankdorf Stadyumu, İSTANBUL',
        category: 'Misafir',
        block: '-',
        row: '-',
        price: '12.000,00 TRY',
        provider: 'banabilet',
        website: 'www.banabilet.com',
    };
    const maxParticipants = 7; // Örneğin, max limit 5 olarak ayarlanmıştır.
    return (
        <Box>
            <Container sx={{ marginBottom: '25px' }}>
                <Box sx={{ width: '100%', marginTop: '25px' }}>
                    <Stepper activeStep={activeStep} connector={<CustomStepConnector />}>
                        {steps.map((step, index) => (
                            <Step
                                key={step.label}
                                completed={completed[index]}
                                style={{
                                    filter: completed[index]
                                        ? 'invert(10%) sepia(100%) saturate(1300%) hue-rotate(270deg) brightness(90%) contrast(90%)'
                                        : 'none',
   
                                }}
                            >
                                <Box
                                    onClick={handleStep(index)}
                                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                >
                                    <img
                                        src={step.icon}
                                        alt={step.label}
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            marginBottom: '8px',
                                            filter: activeStep === index ? 'hue-rotate(240deg)' : 'none', // İkon rengini de değiştir
                                        }}
                                    />
                                    <Box sx={{ fontSize: '16px', maxWidth: '60px', textAlign: 'center' }}>
                                        {step.label}
                                    </Box>
                                </Box>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                <Box sx={{ marginTop: '25px' }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        '@media (max-width: 600px)': {
                            flexDirection: 'column',
                        }
                    }}>
                        {/* Sol Kısım: Maç Bilgileri */}
                        <Box sx={{
                            width: { xs: '100%', sm: '60%' },
                            padding: '0 16px',
                            '@media (max-width: 600px)': {
                                padding: '0',
                            }
                        }}>
                            <MacBilgileri matchDetails={matchDetails} />
                            {activeStep === 0 && <BiletBilg maxParticipants={maxParticipants} />}
                            {activeStep === 1 && <MacBilgileri matchDetails={matchDetails} />}
                            {activeStep === 2 && <BiletBilg maxParticipants={maxParticipants} />}
                            {activeStep !== steps.length - 1 && (
                                <Button
                                    onClick={handleComplete}
                                    sx={{
                                        backgroundColor: '#2E073F',
                                        marginTop: '25px',
                                        color: 'white',
                                        width: '100%',
                                        borderRadius: '25px'
                                    }}
                                >
                                    Devam
                                </Button>
                            )}
                        </Box>

                        <Divider orientation="vertical" sx={{
                            marginX: '5px',
                            color: 'black',
                            height: 'auto',
                            '@media (max-width: 600px)': {
                                display: 'none',
                            }
                        }} />

                        {/* Sağ Kısım: Bilgi Kartları */}
                        <Box sx={{
                            width: { xs: '100%', sm: '35%' },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            padding: '0 16px',
                            '@media (max-width: 600px)': {
                                padding: '0',
                                gap: '8px',
                                marginTop: '25px'
                            }
                        }}>
                            <Card sx={{ boxShadow: 3, borderRadius: '8px', height: '300px' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                                        Son Şans
                                    </Typography>
                                    <Typography variant="body1">
                                        Fiyatlar Yükseliyor
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card sx={{ boxShadow: 3, borderRadius: '8px', height: '300px' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                                        Banabilet.com Garantisi
                                    </Typography>
                                    <Typography variant="body1">
                                        Banabilet hem alıcılara hem de satıcılara hızlı güvenli bir bilet paylaşım ortamı sunar. Her satın alım ve satış banabilet güvencesi altındadır. %100 alıcı koruma politikamız sayesinde satıcı kaynaklı problemlerde biletiniz en kısa sürede temin edilir.
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card sx={{ boxShadow: 3, borderRadius: '8px', height: '300px' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                                        Kolay ve Hızlı Kullanım
                                    </Typography>
                                    <Typography variant="body1">
                                        Binlerce spor, konser ve sahne etkinliklerinden workshoplara kadar herkes için bilet sadece banabilet.com garantisiyle sizlerle.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Box>


            </Container>
        </Box>
    );
};

export default biletsatinal;
