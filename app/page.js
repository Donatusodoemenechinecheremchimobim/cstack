import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { AuthContextProvider } from "../context/AuthContext";
import SocialSidebar from "./components/SocialSidebar"; // Assuming you created this earlier

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