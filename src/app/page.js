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
import MilestonesComponent from "@/components/Milestone";
import Script from "next/script";
export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>TechLuminix - Home</title>
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
          content="https://www.techluminix.com/assets/logo.jpg"
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
          content="https://www.techluminix.com/assets/logo.jpg"
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
            logo: "assets/logo.jpg",
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

        {/* captacha */}
        <script
          src="https://www.google.com/recaptcha/api.js?render=6LeIdw4qAAAAAJOwjBqnSsOuwHPq9Lb8lvFTuWaP"
          async
          defer
        ></script>

        {/* ✅ Facebook Pixel Script */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1423497475342819');
            fbq('track', 'PageView');
          `,
          }}
        />

        {/* ✅ Facebook Pixel Fallback for NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1423497475342819&ev=PageView&noscript=1"
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=1423497475342819&ev=PageView&noscript=1"
          />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}
      </Head>

      <main>
        <Navbar />
        <Hero />
        <StatsSection />
        <OurserviceHome />
        {/* <MilestonesComponent/> */}
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
