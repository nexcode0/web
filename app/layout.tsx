import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Nexcode Limited",
    description: "Website for Nexcode Limited",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html className="scroll-smooth" lang="en">
        <body className={inter.className}>
        <div className="flex flex-col h-screen gap-20 lg:gap-0 lg:justify-between bg-gray-100">
            <header className="bg-white"><Navigation/></header>
            <main>{children}</main>
            <footer><Footer/></footer>
        </div>
        </body>
        </html>
    );
}
