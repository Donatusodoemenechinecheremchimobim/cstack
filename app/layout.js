import "./globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton"; 
import SocialSidebar from "../components/SocialSidebar";   
import GhostCursors from "../components/GhostCursors";
import { AuthContextProvider } from "../context/AuthContext";

export const metadata = {
  title: "CSTACK | Full-Stack Engineering",
  description: "High-performance digital systems for the ambitious.",
};

export default function RootLayout({ children }) {
  return (
    // ADDED 'scroll-smooth' here for the anchor links
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
        <AuthContextProvider>
          <Navbar />
          <SocialSidebar />
          <GhostCursors />
          {/* Main content wrapper with GPU acceleration */}
          <div className="relative z-10 gpu-accelerated">
            {children}
          </div>
          <WhatsAppButton />
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
