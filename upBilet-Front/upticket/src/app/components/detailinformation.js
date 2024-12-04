import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const DetayBilgileri = ({ details }) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: 2,boxShadow:'none',marginBottom:'15px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' , borderBottom: '3px solid gray'}}>Adı Soyadı</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' , borderBottom: '3px solid gray'}}>Uyruk</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' , borderBottom: '3px solid gray'}}>Kimlik No</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {details.map((detail, index) => (
                        <TableRow key={index} >
                            <TableCell >{detail.nameSurname}</TableCell>
                            <TableCell >{detail.nationality}</TableCell>
                            <TableCell >{detail.idNumber}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DetayBilgileri;
