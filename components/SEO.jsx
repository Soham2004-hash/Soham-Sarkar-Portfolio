import Head from 'next/head';

export default function SEO({ title, description, keywords, ogImage = '/og-image.jpg' }) {
  const siteTitle = 'Soham Sarkar | AI-ML Engineer & Developer';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Soham Sarkar is an AI-ML Engineer specializing in machine learning, artificial intelligence, and software development. View projects, articles, and get in touch.';
  const defaultKeywords = 'Soham Sarkar, AI Engineer, ML Engineer, Machine Learning, Artificial Intelligence, Software Developer, AI Projects, ML Projects, Soham Codes';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://sohamsarkar.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Soham Sarkar",
            "jobTitle": "AI-ML Engineer",
            "url": "https://sohamsarkar.com",
            "sameAs": [
              "https://github.com/sohamsarkar",
              "https://linkedin.com/in/sohamsarkar"
            ],
            "knowsAbout": [
              "Machine Learning",
              "Artificial Intelligence",
              "Software Development",
              "AI Projects",
              "ML Projects"
            ]
          })
        }}
      />
    </Head>
  );
} 