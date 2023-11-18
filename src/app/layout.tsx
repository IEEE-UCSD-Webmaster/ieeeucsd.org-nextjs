import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "./components/navbar";

export const metadata: Metadata = {
    title: "IEEE UCSD",
    description:
        "A diverse engineering community seeking to empower students through hands-on projects, networking opportunities, and social events.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="/logos/svgs/blue_logo_no_text.svg"
                    type="svg"
                />
            </head>
            <Navbar />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
