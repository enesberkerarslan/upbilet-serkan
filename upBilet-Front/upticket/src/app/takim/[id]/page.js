import React from 'react';
import Header from '@/app/components/header/header';
import Footer from '../../footer';
import { Box, Typography, Container, Divider } from '@mui/material';
import MatchCard from '@/app/components/card/matchcard';
import CardComponent from '@/app/components/card/card';

const boxStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap', 
  margin: '0 auto',
  paddingTop: '15px',
  gap: '10px', 
};
const botHeader = { margin: '0 auto', marginTop: '25px' }

export async function generateStaticParams() {
  return [
    { id: '1' }, 
  ];
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const title = `Event ${id} Details`; 

  return {
    title: title,
    description: `Details for event with ID ${id}`, // Opsiyonel açıklama
  };
}

const EventPage = ({ params }) => {
  const { id } = params;

  return (
    <>
      <Box sx={{ backgroundColor: 'white' }}>
        <Container sx={{ padding: '20px' }}>

          <Box
            sx={{
              marginBottom: '20px' // Araya boşluk eklemek için
            }}>
            <Typography variant="h5" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
              Galatasaray Maç Bileti
            </Typography>
          </Box>

          <Box sx={{
            position: 'relative',
            width: '100%',
            height: '300px',
            backgroundImage: `url('/galatasaray.jpeg')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat', 
            borderRadius: '12px',
            marginBottom: '20px'
          }}>
          </Box>


          <Box sx={botHeader}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '24px', color: 'black' }}>
              Popüler Etkinlikler
            </Typography>
          </Box>
          <Box
            sx={boxStyles}
          >
            <CardComponent id="5" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
            <CardComponent id="6" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
            <CardComponent id="7" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
            <CardComponent id="8" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
          </Box>
          <Divider sx={{ marginTop: '15px', borderColor: '#ddd' }} />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row', // İç saha ve dış saha maçlarını yatayda hizalar
              gap: '20px', // Aralarındaki boşluğu ayarlar
              marginBottom: '20px',
              flexWrap: 'wrap', // Ekran küçükse alt satıra geçmesini sağlar
            }}
          >
            {/* İç Saha Maçları */}
            <Box
              sx={{
                flex: '1', // Eşit genişlik
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#ffffff',
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
                İç Saha Maçları
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                />
                <Divider sx={{ borderColor: '#1c0527' }} />
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                />
                <Divider sx={{ borderColor: '#1c0527' }} />
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                /><Divider sx={{ borderColor: '#1c0527' }} />
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                /><Divider sx={{ borderColor: '#1c0527' }} />
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                /><Divider sx={{ borderColor: '#1c0527' }} />
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                />
              </Box>
            </Box>

            {/* Dış Saha Maçları */}
            <Box
              sx={{
                flex: '1', // Eşit genişlik
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#ffffff',
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
                Dış Saha Maçları
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                />
                <Divider sx={{ borderColor: '#1c0527' }} />
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                />
                <Divider sx={{ borderColor: '#1c0527' }} />
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                /><Divider sx={{ borderColor: '#1c0527' }} />
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                /><Divider sx={{ borderColor: '#1c0527' }} />
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                /><Divider sx={{ borderColor: '#1c0527' }} />
                <MatchCard
                  title="Galatasaray - Hatayspor"
                  date="20 Ağustos 18:20"
                  stadium="RAMS Park Stadyum, İstanbul"
                  price="900"
                  piece="250"
                />
              </Box>
            </Box>
          </Box>
        </Container>
        <Divider sx={{ borderColor: '#1c0527' }} />

      </Box>

    </>
  );
};

export default EventPage;
