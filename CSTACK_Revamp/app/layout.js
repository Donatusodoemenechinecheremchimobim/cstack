import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/src/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSTACK | Engineering Digital Systems",
  description: "High-Performance Web & Mobile Engineering Studio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
