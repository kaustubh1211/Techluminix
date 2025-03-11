import { Geist, Geist_Mono, Inter, Playfair } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScrool";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

const playfair = Playfair({ subsets: ["latin"] });
export const metadata = {
  title: "TechLuminix",
  description:
    "TechLuminix crafts stunning websites, develops powerful software, and boosts your online presence with expert digital marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
