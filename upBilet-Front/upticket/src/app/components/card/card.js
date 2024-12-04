'use client'; // Bu, bileşenin istemci tarafında çalışmasını sağlar

import { useRouter } from 'next/navigation'; // Doğru import yolu

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardComponent({ img, title, content, id }) {
  const router = useRouter();

  const handleClick = () => {
    if (id) {
      router.push(`/etkinlik/${id}`);
    } else {
      console.error('ID not provided');
    }
  };
  return (
    <Card onClick={handleClick} sx={{ width: { xs: '47%', sm: '47%', md: '47%', lg: '24%', xl: '24%' }, boxShadow: 'none',backgroundColor:'transparent' }}>
      <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          sx={{ height: '150px',borderRadius:'5px' }}
          alt="Galatasaray"
        />
        <CardContent sx={{ textAlign: 'left', marginLeft: '-15px' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'left' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', textAlign: 'left' }}>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
