import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from './components/navbar'; // Navbar'ı içe aktar

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "GeoEqua",
    description: "NASA Space Apps Challenge 2024",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
