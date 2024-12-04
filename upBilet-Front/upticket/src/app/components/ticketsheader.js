'use client'; // Bu, bileşenin istemci tarafında çalışmasını sağlar

import React, { useState } from 'react';
import { Box, Typography, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const TicketsComponent = ({ section, block, row, ticketsRange, quantity, pricePerTicket }) => {
    const [selectedQuantity, setSelectedQuantity] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleQuantityChange = (event) => {
        setSelectedQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <Box
            sx={{
                border: '1px solid #ddd',
                borderRadius: '12px',
                padding: '20px',
                width: '100%',
                backgroundColor: '#f9f9f9',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            
        </Box>
    );
};

export default TicketsComponent;
