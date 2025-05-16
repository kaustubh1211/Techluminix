import { Geist, Geist_Mono, Inter, Playfair , Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScrool";
import PageTransition from "@/components/PageTransition.";

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
const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
export const metadata = {
  "title": "TechLuminix | Innovative Software & Web Development Company",
  "description": "TechLuminix is your partner in crafting innovative software solutions, stunning websites, and impactful digital marketing strategies to elevate your business.",
  "keywords": ["TechLuminix", "Software Development", "Web Development", "Digital Marketing", "UI/UX Design", "IT Solutions"],
  "openGraph": {
    "title": "TechLuminix | Innovative Software & Web Development Company",
    "description": "Discover how TechLuminix transforms your digital ideas into reality with expert software development, web design, and marketing solutions.",
    "url": "https://techluminix.com/",
    "siteName": "TechLuminix",
    "images": [
      {
        "url": "https://techluminix.com/assets/logo.png",
        "width": 1200,
        "height": 630,
        "alt": "TechLuminix Home Page"
      }
    ],
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "TechLuminix | Innovative Software & Web Development Company",
    "description": "Partner with TechLuminix for cutting-edge software and web solutions tailored to your business needs.",
    "images": ["https://techluminix.com/assets/logo.png"]
  }
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
        <PageTransition children={children} />
        {/* {children} */}
      </body>
    </html>
  );
}
