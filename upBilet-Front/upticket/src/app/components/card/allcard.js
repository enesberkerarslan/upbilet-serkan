import React from 'react';
import CardComponent from './card';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const boxStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', // Bileşenlerin sarılmasını sağlar
    width: { xs: '85%', sm: '80%', md: '75%', lg: '70%', xl: '65%' },
    margin: '0 auto',
    paddingTop: '15px',
    gap: '10px', // aralarındaki boşluk

};

const botHeader = { width: { xs: '85%', sm: '80%', md: '75%', lg: '70%', xl: '65%' }, margin: '0 auto', marginTop: '25px' }
const AllCard = () => {
    return (
            <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                <Box sx={botHeader}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '24px', color: 'black' }}>
                        En Popüler Spor Etkinlikleri
                    </Typography>
                </Box>
                <Box
                    sx={boxStyles}
                >
                    <CardComponent id="1" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
                    <CardComponent id="2" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
                    <CardComponent id="3" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
                    <CardComponent id="4" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
                </Box>
                <Box sx={botHeader}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '24px', color: 'black' }}>
                        En Popüler Müzik Etkinlikleri
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
                <Box sx={botHeader}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '24px', color: 'black' }}>
                        En Popüler Müzik Etkinlikleri
                    </Typography>
                </Box>
                <Box
                    sx={{
                        ...boxStyles,
                        marginBottom: '55px',
                    }}
                >
                    <CardComponent id="9" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
                    <CardComponent id="10" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
                    <CardComponent id="11" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
                    <CardComponent id="12" img="/galatasaray.jpeg" title="Galatasaray vs Fenerbahçe" content="Sun, May 12 • 3:00 PM Turk Telekom Arena" />
                </Box>
            </AppBar>
    );
}

export default AllCard;
