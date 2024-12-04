"use client";

import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Box, Container, Button, styled, StepConnector } from '@mui/material';
import TicketInfoForm from '../../components/bilet-sat/ticketinfoform';
import PriceForm from '../../components/bilet-sat/priceform';
import Information from '../../components/bilet-sat/information'

// Adım etiketlerini stilize etmek için StepLabel bileşenini stilize ediyoruz
const CustomStepLabel = styled(StepLabel)({
    fontSize: '1.2rem', // Etiket boyutunu büyütmek için
});

// Adımlar arasındaki çizgileri kalınlaştırmak için StepConnector bileşenini stilize ediyoruz
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
    '& .MuiStepConnector-line': {
        borderColor: theme.palette.grey[400], // Varsayılan renk
        borderWidth: 0.5, // Çizginin kalınlığını ayarlıyoruz
    },
    '&.Mui-active .MuiStepConnector-line': {
        borderColor: theme.palette.primary.main, // Aktif adımda çizginin rengi
    },
    '&.Mui-completed .MuiStepConnector-line': {
        borderColor: theme.palette.primary.main, // Tamamlanan adımda çizginin rengi
    },
}));

const steps = [
    'Bilet Detayları',
    'Fiyatlandırma',
    'Adres ve Banka Bilgileri',
    'Başarılı İlan Kaydı'
];

export default function TicketSellPage() {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleFormSubmit = (data) => {
        setFormData((prevData) => ({
            ...prevData,
            ...data
        })); // Form verilerini günceller
        handleNext(); // Bir sonraki adıma geçer
    };

    useEffect(() => {
        // formData güncellendiğinde konsola yazdır
        console.log('Form Data Updated:', formData);
    }, [formData]);

    return (
        <Container sx={{ marginTop: '25px' }}>
            <Stepper
                activeStep={activeStep}
                alternativeLabel
                connector={<CustomStepConnector />} // StepConnector bileşenini özelleştiriyoruz
            >
                {steps.map((label, index) => (
                    <Step key={label} completed={activeStep > index}>
                        <CustomStepLabel>{label}</CustomStepLabel> {/* StepLabel bileşenini özelleştiriyoruz */}
                    </Step>
                ))}
            </Stepper>
            <Box mt={2}>
                {activeStep === 0 && (
                    <TicketInfoForm onSubmit={handleFormSubmit} />
                )}
                {activeStep === 1 && (
                    <PriceForm onSubmit={handleFormSubmit} />
                )}
                {activeStep === 2 && (
                    <>
                        <Information onSubmit={handleFormSubmit} />

                    </>
                )}
                {activeStep === 3 && (
                    <>
                        {/* Başarılı İlan Kaydı adımına dair içerikler */}
                        <Box mt={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                Bitir
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Container>
    );
}
