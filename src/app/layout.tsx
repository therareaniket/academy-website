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
		<body>
        	{children}
      	</body>
    </html>
  );
}
