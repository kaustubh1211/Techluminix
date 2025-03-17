import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactHero from "../components/Contact-hero";
import Footer from "../components/Footer";
import OurServices from "../components/Ourservices";
import HappyCustomersTestimonials from "../components/Happycustomer";
import DevelopmentWorkflow from "../components/WorkFlow";
import StatsSection from "../components/StatsSection";
import PortfolioShowcase from "../components/PortfolioShowCase";
import OurserviceHome from "@/components/OurserviceHome";
// import TechStack from './components/TechStack';
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>TechLuminix</title>
        <meta
          name="description"
          content="TechLuminix crafts stunning websites, develops powerful software, and boosts your online presence with expert digital marketing."
        />
        <meta
          name="keywords"
          content="Software Development, Web Development,App Development, Digital Marketing, UI/UX Design, TechLuminix , Frontend, Backend"
        />
        <meta name="author" content="TechLuminix" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook (for social media sharing) */}
        <meta
          property="og:title"
          content="TechLuminix | Software & Web Development Experts"
        />
        <meta
          property="og:description"
          content="TechLuminix crafts stunning websites, develops powerful software, and boosts your online presence with expert digital marketing."
        />
        <meta
          property="og:image"
          content="https://www.techluminix.com/assest/logo.jpg"
        />
        <meta property="og:url" content="https://www.techluminix.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TechLuminix | Software & Web Development Experts"
        />
        <meta
          name="twitter:description"
          content="TechLuminix crafts stunning websites, develops powerful software, and boosts your online presence with expert digital marketing."
        />
        <meta
          name="twitter:image"
          content="https://www.techluminix.com/assest/logo.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Mobile Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Schema Markup for SEO (Google Rich Results) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TechLuminix",
            url: "https://www.techluminix.com",
            logo: "assest/logo.jpg",
            description:
              "TechLuminix crafts stunning websites, develops powerful software, and boosts your online presence with expert digital marketing.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "9699854737",
              contactType: "customer service",
            },
            sameAs: [
              "https://www.instagram.com/techluminix/",
              "https://x.com/TechLuminix",
              "https://www.facebook.com/people/TechLuminix/61562395532365/",
            ],
          })}
        </script>
      </Head>

      <main>
        <Navbar />
        <Hero />
        <StatsSection />
        <OurserviceHome />
        <PortfolioShowcase />
        <DevelopmentWorkflow />

        <OurServices />
        <HappyCustomersTestimonials />
        <ContactHero />
        <Footer />
      </main>
    </>
  );
}
