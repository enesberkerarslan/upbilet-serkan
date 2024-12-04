import React from 'react';
import { Box, Typography, Container, Divider, Grid } from '@mui/material';
import TicketsComponent from '@/app/components/card/ticketscard';
import TicketHeader from '@/app/components/ticketsheader';
import StadiumPlan from '@/app/components/stadiumplan';

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
      <Container>
        <Box sx={{ marginTop: '15px' }}>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                marginTop: '20px',
                padding: '10px',
                display: 'flex', // Flexbox düzenini aktif eder
                alignItems: 'center', // İçeriği dikey olarak ortalar
                justifyContent: 'center', // İçeriği yatay olarak ortalar (isteğe bağlı)
                
              }}
            >
              <StadiumPlan />

            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                maxHeight: '1000px', // Maksimum yüksekliği ayarlayın
                overflowY: 'auto', // Dikey scroll ekler
                overflowX: 'hidden', // Yatay scroll'ü gizler (isteğe bağlı)
                scrollbarWidth: 'thin', // Firefox için ince scroll çubuğu
                scrollbarColor: '#888 #f1f1f1', // Firefox için scroll çubuğu ve arka plan rengi
                '&::-webkit-scrollbar': {
                  width: '8px', // Scroll çubuğunun genişliği
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1', // Scroll çubuğunun arka plan rengi
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#888', // Scroll çubuğunun rengi
                  borderRadius: '10px', // Scroll çubuğunun köşe yuvarlaklığı
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#555', // Hover sırasında scroll çubuğunun rengi
                },
                // Scroll barının butonlarını gizlemek için alternatif bir yöntem
                '&::-webkit-scrollbar-button': {
                  display: 'none', // Scroll barının üstündeki ve altındaki okları gizler
                },
              }}
            >
              {[...Array(20)].map((_, index) => (
                <TicketsComponent
                  advertid="1111111"
                  section="Kale Arkası Üst Kat"
                  block="Blok 424, Sıra 7"
                  quantity="2"
                  pricePerTicket="390 TL"
                  color="#9fa4e2"
                />
              ))}
              

            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EventPage;
