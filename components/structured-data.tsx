export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    "name": "Drive Elite",
    "image": "https://car-rental-zaghi.vercel.app/og-image.jpg",
    "url": "https://car-rental-zaghi.vercel.app",
    "telephone": "+212 5 99999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Boulevard Mohammed V, Quartier des Affaires",
      "addressLocality": "Casablanca",
      "postalCode": "20250",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.5731",
      "longitude": "-7.6183"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/driveelite",
      "https://www.instagram.com/driveelite",
      "https://twitter.com/driveelite"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 