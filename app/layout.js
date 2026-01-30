import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScrolling from "../components/SmoothScrolling"; 
import ActiveUsers from "../components/ActiveUsers";
import Preloader from "../components/Preloader";
import { AuthProvider } from "../context/AuthContext"; // <--- 1. IMPORT THIS

export const metadata = {
  title: "CSTACK | Digital Systems",
  description: "High-End Full Stack Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        
        {/* 2. WRAP EVERYTHING INSIDE AUTHPROVIDER */}
        <AuthProvider>
          <Preloader />
          <ActiveUsers />

          <SmoothScrolling>
            <Navbar />
            {children}
            <Footer />
          </SmoothScrolling>
        </AuthProvider>

      </body>
    </html>
  );
}