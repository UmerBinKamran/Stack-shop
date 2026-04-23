import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
