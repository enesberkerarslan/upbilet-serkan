import React from 'react';
import { Box, Typography, AppBar, Button } from '@mui/material';

const FooterContent = () => {
    return (
        <Box sx={{ backgroundColor: '#ffffff' }}>
            <Box sx={{
                width: { xs: '100%', sm: '81%', md: '84%', lg: '87%', xl: '65%' },
                margin: '0 auto',
                padding: '20px',

            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Mobilde dikey, büyük ekranlarda yatay
                    justifyContent: 'space-around',
                    gap: '20px',
                    marginTop: '25px'
                }}>
                    <Box sx={{ flex: '1 1 auto', minWidth: '200px' }}>
                        asfasf
                    </Box>

                    {/* Sıkça Sorulan Sorular */}
                    <Box sx={{ flex: '1 1 auto', minWidth: '200px' }}>
                        <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>Sıkça Sorulan Sorular</Typography>
                        <ul>
                            <li className="mb-2">
                                <a href="/sikca-sorulan-sorular" className="text-blue-800 hover:underline font-light">Sıkça Sorulan Sorular</a>
                            </li>
                            <li className="mb-2">
                                <a href="/islem-rehberi" className="text-blue-800 hover:underline font-light">İşlem Rehberi</a>
                            </li>
                            <li className="mb-2">
                                <a href="/uyelik-anasezlesmesi" className="text-blue-800 hover:underline font-light">Üyelik Ana Sözleşmesi</a>
                            </li>
                            <li className="mb-2">
                                <a href="/uluslararasi-gizlilik" className="text-blue-800 hover:underline font-light">Uluslararası Gizlilik ve Çerez Politikası</a>
                            </li>
                            <li className="mb-2">
                                <a href="/sorumluluk-sinirlama" className="text-blue-800 hover:underline font-light">Sorumluluk Sınırlamaları</a>
                            </li>
                            <li className="mb-2">
                                <a href="/alici-satici-hizmet-bedelleri" className="text-blue-800 hover:underline font-light">Alıcı ve Satıcı Hizmet Bedelleri</a>
                            </li>
                            <li className="mb-2">
                                <a href="/cezai-sart-politikalari" className="text-blue-800 hover:underline font-light">Cezai Şart Politikaları ve Bedelleri</a>
                            </li>
                            <li className="mb-2">
                                <a href="/platform-mesajlari" className="text-blue-800 hover:underline font-light">Platform Mesajları, Bildirimler, Çerez Politikası</a>
                            </li>
                            <li className="mb-2">
                                <a href="/veri-politikasi" className="text-blue-800 hover:underline font-light">Kişisel Veriler Politikası Aydınlatma Metni</a>
                            </li>
                        </ul>

                    </Box>

                    {/* Popüler Kategoriler */}
                    <Box sx={{ flex: '1 1 auto', minWidth: '200px' }}>
                        <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
                            Popüler Kategoriler
                        </Typography>
                        <ul>
                            <li className="mb-2">
                                <a href="/turkiye-super-lig" className="text-blue-800 hover:underline font-light">
                                    Türkiye Süper Lig Biletleri
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/futbol-biletleri" className="text-blue-800 hover:underline font-light">
                                    Futbol Biletleri
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/spor-biletleri" className="text-blue-800 hover:underline font-light">
                                    Spor Biletleri
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/trabzonspor-biletleri" className="text-blue-800 hover:underline font-light">
                                    Trabzonspor Biletleri
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/erzurumspor-biletleri" className="text-blue-800 hover:underline font-light">
                                    Erzurumspor Biletleri
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/basketbol-biletleri" className="text-blue-800 hover:underline font-light">
                                    Basketbol Biletleri
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/fenerbahce-beko-basketbol" className="text-blue-800 hover:underline font-light">
                                    Fenerbahçe Beko Basketbol Biletleri
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/turkiye-basketbol-ligi" className="text-blue-800 hover:underline font-light">
                                    Türkiye Basketbol Ligi Biletleri
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/sampiyonlar-ligi" className="text-blue-800 hover:underline font-light">
                                    Şampiyonlar Ligi Biletleri
                                </a>
                            </li>
                        </ul>
                    </Box>



                </Box>
            </Box>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: '#1c0527',
                    boxShadow: 'none',
                    borderTop: '1px solid #dbd6d2',
                    marginTop: '50px',
                    padding: '10px 0', // Yüksekliği içeriğe göre ayarlamak için padding
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', sm: '81%', md: '84%', lg: '87%', xl: '65%' },
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        textAlign: 'center',
                        flexDirection: { xs: 'column', sm: 'row' }, // Mobilde sütun halinde düzenleme
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '12px',
                            color: 'white',
                            lineHeight: { xs: 'normal', md: '1.2', xl: '1.0' }
                        }}
                        variant="h5"
                    >
                        Copyright 2023 © Tüm Hakkı Saklıdır. TICKET LEADER LTD
                        Bu web sitesinin kullanımı, Kullanıcı Sözleşmemizi kabul ettiğiniz anlamına gelir.
                        Fiyatlar satıcılar tarafından belirlenir ve nominal değerinin üzerinde olabilir.
                    </Typography>
                </Box>
            </AppBar>
        </Box>
    );
};

export default FooterContent;
