import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("http://ajaysunil.tk/"),
    title: "Ajay's Portfolio",
    description:
    "Associate Software Engineer, currently at Mouritech. Focused on immersive experiences, studied in Punjab, India.",
    generator: "Next.js",
    applicationName: "Ajay Sunil",
    keywords: [
        "developer",
        "frontend",
        "nextjs",
        "react",
        "frontend developer",
        "frontend engineer",
        "tech",
        "india",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Ajay's Portfolio",
        description:
        "Associate Software Engineer, currently at Mouritech. Focused on immersive experiences, studied in Punjab, India.",
        url: "http://ajaysunil.tk/",
        siteName: "ajaysunil.tk",
        images: [
            {
                url: "./public/logo-white.png",
                width: 1200,
                height: 630,
                alt: "Ajay's Portfolio",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ajay's Portfolio",
        description:
        "Associate Software Engineer, currently at Mouritech. Focused on immersive experiences, studied in Punjab, India.",
        creator: "",
        creatorId: "0000000000",
        images: ["./public/logo-white.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
