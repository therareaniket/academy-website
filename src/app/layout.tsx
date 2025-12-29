import type { Metadata } from "next";
import "./globals.css";
import "../assets/custom.css";
import "../assets/responsive.css";
import Header from "@/components/Header";

export const viewport = { width: "device-width", initialScale: 1, };

export const metadata: Metadata = {
  title: "DhatuAcademy | Master All Clinical Trials Products with AI-Powered Learning",
  description: "Believe in transforming knowledge into opportunities",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) 
{
  return (
    <html lang="en">
		<head>
			<link rel="preload" href="/fonts/Poppins-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
			<link rel="preload" href="/fonts/Poppins-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
			<link rel="preload" href="/fonts/Poppins-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
			<link rel="preload" href="/fonts/Poppins-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
		</head>

		<body>
			<Header />

        	{children}
      	</body>
    </html>
  );
}
