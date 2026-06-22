// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'tr',
      },
      title: 'Özcan Tağa — Web Designer | Butik Otel & Restoran Web Tasarımı',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // ===== PRIMARY SEO =====
        { name: 'description', content: 'Özcan Tağa, Alaçatı ve Çeşme bölgesindeki butik oteller ve restoranlar için rezervasyon getiren, yüksek performanslı web siteleri tasarlayan profesyonel web tasarımcı. Cyprus International University mezunu.' },
        { name: 'keywords', content: 'web tasarım, web designer, butik otel web sitesi, restoran web sitesi, Alaçatı web tasarım, Çeşme web tasarım, otel sitesi yapma, restoran sitesi yapma, Özcan Tağa, beach club web sitesi, villa kiralama sitesi, Alaçatı otel sitesi, Çeşme restoran sitesi, Alaçatı web designer, Çeşme web designer, İzmir web tasarım' },
        { name: 'author', content: 'Özcan Tağa' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

        // ===== OPEN GRAPH (Facebook, LinkedIn, WhatsApp) =====
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Özcan Tağa — Web Designer' },
        { property: 'og:title', content: 'Özcan Tağa — Butik Otel & Restoran Web Tasarımı' },
        { property: 'og:description', content: 'Sadece güzel değil, rezervasyon getiren web siteleri. Alaçatı ve Çeşme bölgesinde butik oteller ve restoranlar için premium web tasarım hizmeti.' },
        { property: 'og:image', content: 'https://alacati-web-design.vercel.app/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Özcan Tağa - Web Designer - Butik Otel ve Restoran Web Tasarımı' },
        { property: 'og:url', content: 'https://alacati-web-design.vercel.app' },
        { property: 'og:locale', content: 'tr_TR' },

        // ===== TWITTER CARDS =====
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Özcan Tağa — Web Designer | Butik Otel & Restoran' },
        { name: 'twitter:description', content: 'Alaçatı ve Çeşme bölgesinde butik oteller ve restoranlar için rezervasyon getiren web siteleri tasarlıyorum.' },
        { name: 'twitter:image', content: 'https://alacati-web-design.vercel.app/og-image.png' },
        { name: 'twitter:image:alt', content: 'Özcan Tağa - Web Designer' },

        // ===== GEO & LANGUAGE TARGETING =====
        { name: 'geo.region', content: 'TR-35' },
        { name: 'geo.placename', content: 'Alaçatı, Çeşme, İzmir' },
        { name: 'language', content: 'Turkish' },
        { name: 'content-language', content: 'tr' },

        // ===== GOOGLE ADS / VERIFICATION =====
        // Google Search Console doğrulama (kendi kodunuzu buraya ekleyin)
        // { name: 'google-site-verification', content: 'GOOGLE_VERIFICATION_CODE' },

        // ===== MOBILE & PWA =====
        { name: 'theme-color', content: '#1A1A1A' },
        { name: 'msapplication-TileColor', content: '#1A1A1A' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'Özcan Tağa' },
      ],
      link: [
        { rel: 'canonical', href: 'https://alacati-web-design.vercel.app' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/og-image.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
      script: [
        // ===== GOOGLE ANALYTICS 4 (GA4) =====
        // Kendi GA4 Measurement ID'nizi "G-018CG0VVXV" yerine yazın
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-018CG0VVXV',
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-018CG0VVXV');
          `,
          type: 'text/javascript',
        },

        // ===== GOOGLE ADS CONVERSION TRACKING =====
        // Kendi Google Ads ID'nizi "AW-648485114" yerine yazın
        {
          innerHTML: `
            gtag('config', 'AW-648485114');
          `,
          type: 'text/javascript',
        },

        // ===== JSON-LD STRUCTURED DATA (Person + LocalBusiness) =====
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': 'https://alacati-web-design.vercel.app/#website',
                'url': 'https://alacati-web-design.vercel.app',
                'name': 'Özcan Tağa — Web Designer',
                'description': 'Butik Otel & Restoran Web Tasarımı',
                'inLanguage': 'tr-TR',
              },
              {
                '@type': 'Person',
                '@id': 'https://alacati-web-design.vercel.app/#person',
                'name': 'Özcan Tağa',
                'url': 'https://alacati-web-design.vercel.app',
                'jobTitle': 'Web Designer',
                'description': 'Alaçatı ve Çeşme bölgesindeki butik oteller ve restoranlar için rezervasyon getiren web siteleri tasarlayan profesyonel web tasarımcı.',
                'alumniOf': {
                  '@type': 'CollegeOrUniversity',
                  'name': 'Cyprus International University',
                },
                'knowsAbout': [
                  'Web Design',
                  'UI/UX Design',
                  'Boutique Hotel Websites',
                  'Restaurant Websites',
                  'Beach Club Websites',
                  'Villa Rental Websites',
                ],
                'areaServed': [
                  {
                    '@type': 'City',
                    'name': 'Alaçatı',
                  },
                  {
                    '@type': 'City',
                    'name': 'Çeşme',
                  },
                  {
                    '@type': 'City',
                    'name': 'İzmir',
                  },
                ],
                'image': 'https://alacati-web-design.vercel.app/og-image.png',
                'sameAs': [
                  // Sosyal medya linklerinizi buraya ekleyin
                  // 'https://www.instagram.com/ozcantaga',
                  // 'https://www.linkedin.com/in/ozcantaga',
                ],
              },
              {
                '@type': 'ProfessionalService',
                '@id': 'https://alacati-web-design.vercel.app/#business',
                'name': 'Özcan Tağa Web Tasarım',
                'url': 'https://alacati-web-design.vercel.app',
                'description': 'Butik oteller, restoranlar, beach club\'lar ve villa kiralama işletmeleri için profesyonel web tasarım hizmeti.',
                'priceRange': '₺₺₺',
                'areaServed': ['Alaçatı', 'Çeşme', 'İzmir', 'Türkiye'],
                'serviceType': [
                  'Web Tasarım',
                  'Otel Web Sitesi',
                  'Restoran Web Sitesi',
                  'Beach Club Web Sitesi',
                  'Villa Kiralama Web Sitesi',
                  'SEO Optimizasyonu',
                ],
                'image': 'https://alacati-web-design.vercel.app/og-image.png',
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://alacati-web-design.vercel.app/#breadcrumb',
                'itemListElement': [
                  {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Ana Sayfa',
                    'item': 'https://alacati-web-design.vercel.app',
                  },
                ],
              },
            ],
          }),
        },
      ],
    },
  },
})
