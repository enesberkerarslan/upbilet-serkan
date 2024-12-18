import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Header from './components/header/header';
import Footer from './footer';
import { cookies } from 'next/headers'; // Çerez API'si
import { jwtVerify } from 'jose';
import Cookies from 'js-cookie';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UPBilet",
  description: "Generated by create next app",
};

// Kullanıcı rolünü ve giriş durumunu almak için bir yardımcı fonksiyon
async function fetchUserRole() {
  const cookieStore = cookies(); // Çerezleri almak için
  const token = cookieStore.get('authToken')?.value; // Token'ı çerezden al

  let userRole = '';
  let isLoggedIn = false;

  if (token) {
    try {
      const secretKey = new TextEncoder().encode('YourSecretKeyasfasfasfasfasfasfasfasfasfasasfasfasfasfasfasfasfHere'); // Secret key'i encode edin
      const { payload } = await jwtVerify(token, secretKey); // JWT token'ı doğrulayın
      const role = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      userRole = role || ''; // Payload'dan rolü alın
      isLoggedIn = true;
    } catch (error) {
      Cookies.remove('authToken');
    }
  }

  return { userRole, isLoggedIn };
}

export default async function RootLayout({ children }) {
  const { userRole, isLoggedIn } = await fetchUserRole();

  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body className={inter.className}>
          <Header userRole={userRole} isLoggedIn={isLoggedIn} />
          <link rel="icon" type="image/png" href="/favicon.png" />

          <main>{children}</main>
          <Footer />
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
