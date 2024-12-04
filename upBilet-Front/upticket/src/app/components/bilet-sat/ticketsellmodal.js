import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, IconButton, InputAdornment, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Close as CloseIcon, Search as SearchIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation'; // useRouter'ı import et

const events = [
    { id: 1, name: 'Rizespor - Fenerbahçe', type: 'Futbol' },
    { id: 2, name: 'Galatasaray - Beşiktaş', type: 'Futbol' },
    { id: 3, name: 'Trabzonspor - Başakşehir', type: 'Futbol' },
    { id: 4, name: 'Tarkan Konseri', type: 'Konser' },
    { id: 5, name: 'Sezen Aksu Konseri', type: 'Konser' },
    // Diğer etkinlikler...
];

export default function TicketModal({ isOpen, onClose }) {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [isSearchIconClicked, setIsSearchIconClicked] = React.useState(false);
    const router = useRouter(); // Yönlendirme için hook

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchIconClick = () => {
        setIsSearchIconClicked(true);
        setTimeout(() => setIsSearchIconClicked(false), 500); // Renk geçişini göstermek için kısa bir süre
    };

    // Arama terimiyle eşleşen etkinlikleri filtrele
    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const convertToUrlFriendlyString = (str) => {
        return str
            .toLowerCase()
            .replace(/ /g, '') // Boşlukları tire ile değiştir
            .replace(/ş/g, 's') // 'ş' -> 's'
            .replace(/ç/g, 'c') // 'ç' -> 'c'
            .replace(/ı/g, 'i') // 'ı' -> 'i'
            .replace(/ğ/g, 'g') // 'ğ' -> 'g'
            .replace(/ü/g, 'u') // 'ü' -> 'u'
            .replace(/ö/g, 'o') // 'ö' -> 'o'
            .replace(/[^\w-]/g, ''); // URL uyumlu olmayan karakterleri kaldır
    };

    // Kullanımı
    const handleEventClick = (name) => {
        const formattedName = convertToUrlFriendlyString(name);
        router.push(`/bilet-sat/${formattedName}`);
        onClose();
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="bilet-sat-modal-title"
            fullWidth
            maxWidth="sm"
            PaperProps={{
                style: {
                    maxHeight: '60vh', // Modal yüksekliği
                    minHeight: '60vh', // Minimum modal yüksekliği
                },
            }}
        >
            <DialogTitle
                id="bilet-sat-modal-title"
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                Yeni İlan Ekle
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider style={{ margin: '8px 0' }} />

            <DialogContent style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: 'calc(100% - 64px)' }}>
                <p style={{ marginBottom: '16px', fontWeight: 'bold' }}>Hangi etkinlik için bilet satmak istiyorsun?</p>
                <TextField
                    autoFocus
                    margin="dense"
                    id="search"
                    label="Maç, takım, sanatçı ara"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton onClick={handleSearchIconClick}>
                                    <SearchIcon style={{ color: isSearchIconClicked ? '#6a0dad' : 'inherit' }} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <div style={{ overflowY: 'auto', flex: 1, paddingRight: '8px' }}>
                    <List>
                        {/* Yalnızca arama terimi varsa etkinlikleri göster */}
                        {searchTerm && filteredEvents.length > 0 ? (
                            filteredEvents.map(event => (
                                <ListItem key={event.id} button onClick={() => handleEventClick(event.name)}>
                                    <ListItemText primary={event.name} secondary={event.type} />
                                </ListItem>
                            ))
                        ) : searchTerm && filteredEvents.length === 0 ? (
                            <p>Aramanıza uygun etkinlik bulunamadı.</p>
                        ) : null}
                    </List>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Kapat
                </Button>
            </DialogActions>
        </Dialog>
    );
}
