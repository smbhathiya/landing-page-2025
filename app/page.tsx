import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Script from 'next/script';

export default function Home() {
  // Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ABC Digital Marketing Agency",
    "url": "https://landing2025.bhathiya.dev",
    "logo": "https://landing2025.bhathiya.dev/logo.png",
    "description": "Transform your business with ABC's cutting-edge digital marketing solutions. We specialize in SEO optimization, PPC advertising, social media marketing, content strategy, web design, and marketing automation.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Street",
      "addressLocality": "Tech City",
      "addressRegion": "TC",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@abc.com"
    },
    "sameAs": [
      "https://www.facebook.com/abcdigital",
      "https://www.twitter.com/abc_digital",
      "https://www.linkedin.com/company/abc-digital",
      "https://www.instagram.com/abc_digital"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.7128,
        "longitude": -74.0060
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Improve your search engine rankings and drive organic traffic"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PPC Advertising",
            "description": "Maximize your ROI with targeted pay-per-click campaigns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Build meaningful connections with your audience"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Marketing",
            "description": "Create compelling content that resonates with your audience"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design & Development",
            "description": "Build stunning, high-converting websites"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Automation",
            "description": "Streamline your marketing processes with smart automation"
          }
        }
      ]
    }
  };

  // Structured Data for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ABC Digital Marketing Agency",
    "image": "https://landing2025.bhathiya.dev/office.jpg",
    "description": "Professional digital marketing agency providing comprehensive online marketing solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Street",
      "addressLocality": "Tech City",
      "addressRegion": "TC",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "url": "https://landing2025.bhathiya.dev",
    "telephone": "+1-555-123-4567",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer"
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
