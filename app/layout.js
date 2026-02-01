import "./globals.css";
// Note: We use .. to go up one folder to find components
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
    <html lang="en">
      <body className="bg-black text-white selection:bg-blue-600 selection:text-white">
        <AuthContextProvider>
          <Navbar />
          <SocialSidebar />
          {children}
          <WhatsAppButton />
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}