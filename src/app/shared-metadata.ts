// lib/shared-metadata.ts
import { Metadata } from 'next'

const baseUrl = 'https://www.slmc.ch'

export type Locale = 'en' | 'es' | 'nl' | 'de' | 'zh'
export type PageType =
  | 'home'
  | 'about'
  | 'art-45'
  | 'contact-us'
  | 'downloads'
  | 'insights'
  | 'insurance-pensions'
  | 'family-office'
  | 'international-solutions'

interface PageMetadata {
  title: string
  description: string
  keywords: string[]
  image?: string
}

const pageData: Record<Locale, Record<PageType, PageMetadata>> = {
  en: {
    downloads: {
      title: 'Downloads - Forms & Documents | SLMC',
      description:
        'Download SLMC broker mandate forms and factsheets in German and English — ready to complete, sign and return.',
      keywords: [
        'slmc downloads',
        'broker mandate',
        'insurance forms',
        'factsheet',
        'switzerland',
      ],
      image: '/images/logo_only.svg',
    },
    home: {
      title: 'SLMC - Professional Services & Solutions',
      description:
        'Leading provider of professional services and innovative solutions in Switzerland',
      keywords: [
        'slmc',
        'professional services',
        'solutions',
        'switzerland',
        'consulting',
      ],
      image: '/images/logo_only.svg',
    },
    about: {
      title: 'About SLMC - Our Story & Mission',
      description:
        "Learn about SLMC's history, mission, and commitment to excellence in professional services",
      keywords: ['about slmc', 'company history', 'mission', 'team', 'values'],
      image: '/images/logo_only.svg',
    },
    'art-45': {
      title: 'Art 45 Services - SLMC',
      description:
        'Comprehensive Art 45 services and specialized solutions for your business needs',
      keywords: [
        'art 45',
        'specialized services',
        'business solutions',
        'professional consulting',
      ],
      image: '/images/logo_only.svg',
    },
    'contact-us': {
      title: 'Contact SLMC - Get in Touch',
      description:
        'Contact our professional team for inquiries, support, and consultation services',
      keywords: [
        'contact slmc',
        'get in touch',
        'support',
        'consultation',
        'inquiries',
      ],
      image: '/images/logo_only.svg',
    },
    insights: {
      title: 'Insights - SLMC',
      description:
        'Commentary, publications and updates from SLMC on insurance, pensions, family business and cross-border planning',
      keywords: [
        'slmc insights',
        'family business management',
        'publications',
        'commentary',
        'company news',
      ],
      image: '/images/logo_only.svg',
    },
    'insurance-pensions': {
      title: 'Insurance & Pensions - SLMC',
      description:
        'FINMA-registered insurance broking for Swiss companies and private clients: corporate and private insurance, BVG/LPP pensions, employee benefits and risk management',
      keywords: [
        'insurance broker switzerland',
        'bvg lpp pensions',
        'employee benefits',
        'risk management',
        'corporate insurance',
      ],
      image: '/images/logo_only.svg',
    },
    'family-office': {
      title: 'Family Office & Private Clients - SLMC',
      description:
        'Coordination for families, entrepreneurs and private clients: relocation, wealth and succession planning, tax and legal specialists, healthcare and property',
      keywords: [
        'family office switzerland',
        'private clients',
        'wealth planning',
        'succession planning',
        'relocation services',
      ],
      image: '/images/logo_only.svg',
    },
    'international-solutions': {
      title: 'International Solutions - SLMC',
      description:
        'Cross-border planning across Switzerland, Europe and Asia, with access to regulated investment providers, banks and specialists',
      keywords: [
        'cross-border planning',
        'regulated investment providers',
        'global mobility',
        'expatriates switzerland',
        'asia desk',
      ],
      image: '/images/logo_only.svg',
    },
  },
  es: {
    downloads: {
      title: 'Descargas - Formularios y Documentos | SLMC',
      description:
        'Descargue los formularios de mandato de corretaje y las fichas informativas de SLMC en alemán e inglés, listos para completar, firmar y devolver.',
      keywords: [
        'descargas slmc',
        'mandato de corretaje',
        'formularios de seguros',
        'ficha informativa',
        'suiza',
      ],
      image: '/images/logo_only.svg',
    },
    home: {
      title: 'SLMC - Servicios Profesionales y Soluciones',
      description:
        'Proveedor líder de servicios profesionales y soluciones innovadoras en Suiza',
      keywords: [
        'slmc',
        'servicios profesionales',
        'soluciones',
        'suiza',
        'consultoría',
      ],
      image: '/images/logo_only.svg',
    },
    about: {
      title: 'Acerca de SLMC - Nuestra Historia y Misión',
      description:
        'Conoce la historia, misión y compromiso de SLMC con la excelencia en servicios profesionales',
      keywords: [
        'acerca de slmc',
        'historia empresa',
        'misión',
        'equipo',
        'valores',
      ],
      image: '/images/logo_only.svg',
    },
    'art-45': {
      title: 'Servicios Art 45 - SLMC',
      description:
        'Servicios integrales Art 45 y soluciones especializadas para sus necesidades empresariales',
      keywords: [
        'art 45',
        'servicios especializados',
        'soluciones empresariales',
        'consultoría profesional',
      ],
      image: '/images/logo_only.svg',
    },
    'contact-us': {
      title: 'Contactar SLMC - Ponte en Contacto',
      description:
        'Contacta con nuestro equipo profesional para consultas, soporte y servicios de asesoramiento',
      keywords: [
        'contactar slmc',
        'ponerse en contacto',
        'soporte',
        'consultoría',
        'consultas',
      ],
      image: '/images/logo_only.svg',
    },
    insights: {
      title: 'Insights - SLMC',
      description:
        'Análisis, publicaciones y novedades de SLMC sobre seguros, pensiones, empresa familiar y planificación transfronteriza',
      keywords: [
        'slmc insights',
        'empresa familiar',
        'publicaciones',
        'análisis',
        'noticias empresa',
      ],
      image: '/images/logo_only.svg',
    },
    'insurance-pensions': {
      title: 'Seguros y Pensiones - SLMC',
      description:
        'Corretaje de seguros registrado en la FINMA para empresas suizas y clientes privados: seguros de empresa y privados, previsión BVG/LPP, seguros para empleados y gestión de riesgos',
      keywords: [
        'corredor de seguros suiza',
        'pensiones bvg lpp',
        'seguros para empleados',
        'gestión de riesgos',
        'seguros de empresa',
      ],
      image: '/images/logo_only.svg',
    },
    'family-office': {
      title: 'Family Office y Clientes Privados - SLMC',
      description:
        'Coordinación para familias, empresarios y clientes privados: traslados, planificación patrimonial y sucesoria, especialistas fiscales y jurídicos, salud e inmuebles',
      keywords: [
        'family office suiza',
        'clientes privados',
        'planificación patrimonial',
        'planificación sucesoria',
        'servicios de traslado',
      ],
      image: '/images/logo_only.svg',
    },
    'international-solutions': {
      title: 'Soluciones Internacionales - SLMC',
      description:
        'Planificación transfronteriza entre Suiza, Europa y Asia, con acceso a proveedores de inversión regulados, bancos y especialistas',
      keywords: [
        'planificación transfronteriza',
        'proveedores de inversión regulados',
        'movilidad internacional',
        'expatriados suiza',
        'mesa de asia',
      ],
      image: '/images/logo_only.svg',
    },
  },
  nl: {
    downloads: {
      title: 'Downloads - Formulieren & Documenten | SLMC',
      description:
        'Download de makelaarsmandaatformulieren en factsheets van SLMC in het Duits en Engels — klaar om in te vullen, te ondertekenen en terug te sturen.',
      keywords: [
        'slmc downloads',
        'makelaarsmandaat',
        'verzekeringsformulieren',
        'factsheet',
        'zwitserland',
      ],
      image: '/images/logo_only.svg',
    },
    home: {
      title: 'SLMC - Professionele Diensten & Oplossingen',
      description:
        'Toonaangevende aanbieder van professionele diensten en innovatieve oplossingen in Zwitserland',
      keywords: [
        'slmc',
        'professionele diensten',
        'oplossingen',
        'zwitserland',
        'consultancy',
      ],
      image: '/images/logo_only.svg',
    },
    about: {
      title: 'Over SLMC - Ons Verhaal & Missie',
      description:
        "Leer over SLMC's geschiedenis, missie en toewijding aan excellentie in professionele diensten",
      keywords: [
        'over slmc',
        'bedrijfsgeschiedenis',
        'missie',
        'team',
        'waarden',
      ],
      image: '/images/logo_only.svg',
    },
    'art-45': {
      title: 'Art 45 Diensten - SLMC',
      description:
        'Uitgebreide Art 45 diensten en gespecialiseerde oplossingen voor uw zakelijke behoeften',
      keywords: [
        'art 45',
        'gespecialiseerde diensten',
        'zakelijke oplossingen',
        'professionele consultancy',
      ],
      image: '/images/logo_only.svg',
    },
    'contact-us': {
      title: 'Contact SLMC - Neem Contact Op',
      description:
        'Neem contact op met ons professionele team voor vragen, ondersteuning en adviesservices',
      keywords: [
        'contact slmc',
        'contact opnemen',
        'ondersteuning',
        'consultatie',
        'vragen',
      ],
      image: '/images/logo_only.svg',
    },
    insights: {
      title: 'Insights - SLMC',
      description:
        'Analyses, publicaties en nieuws van SLMC over verzekeringen, pensioenen, familiebedrijven en grensoverschrijdende planning',
      keywords: [
        'slmc insights',
        'familiebedrijf',
        'publicaties',
        'analyses',
        'bedrijfsnieuws',
      ],
      image: '/images/logo_only.svg',
    },
    'insurance-pensions': {
      title: 'Verzekeringen & Pensioenen - SLMC',
      description:
        'Bij de FINMA geregistreerde verzekeringsbemiddeling voor Zwitserse ondernemingen en particuliere cliënten: zakelijke en particuliere verzekeringen, BVG/LPP-pensioenen, personeelsverzekeringen en risicobeheer',
      keywords: [
        'verzekeringsmakelaar zwitserland',
        'bvg lpp pensioen',
        'personeelsverzekeringen',
        'risicobeheer',
        'zakelijke verzekeringen',
      ],
      image: '/images/logo_only.svg',
    },
    'family-office': {
      title: 'Family Office & Particuliere Cliënten - SLMC',
      description:
        'Coördinatie voor families, ondernemers en particuliere cliënten: verhuizing, vermogens- en opvolgingsplanning, fiscale en juridische specialisten, zorg en vastgoed',
      keywords: [
        'family office zwitserland',
        'particuliere cliënten',
        'vermogensplanning',
        'opvolgingsplanning',
        'verhuisdiensten',
      ],
      image: '/images/logo_only.svg',
    },
    'international-solutions': {
      title: 'Internationale Oplossingen - SLMC',
      description:
        'Grensoverschrijdende planning tussen Zwitserland, Europa en Azië, met toegang tot gereguleerde beleggingsaanbieders, banken en specialisten',
      keywords: [
        'grensoverschrijdende planning',
        'gereguleerde beleggingsaanbieders',
        'internationale mobiliteit',
        'expats zwitserland',
        'azië desk',
      ],
      image: '/images/logo_only.svg',
    },
  },
  de: {
    downloads: {
      title: 'Downloads - Formulare & Dokumente | SLMC',
      description:
        'Laden Sie die Brokermandate und Factsheets von SLMC auf Deutsch und Englisch herunter — bereit zum Ausfüllen, Unterschreiben und Zurücksenden.',
      keywords: [
        'slmc downloads',
        'brokermandat',
        'versicherungsformulare',
        'factsheet',
        'schweiz',
      ],
      image: '/images/logo_only.svg',
    },
    home: {
      title: 'SLMC - Professionelle Dienstleistungen & Lösungen',
      description:
        'Führender Anbieter von professionellen Dienstleistungen und innovativen Lösungen in der Schweiz',
      keywords: [
        'slmc',
        'professionelle dienstleistungen',
        'lösungen',
        'schweiz',
        'beratung',
      ],
      image: '/images/logo_only.svg',
    },
    about: {
      title: 'Über SLMC - Unsere Geschichte & Mission',
      description:
        "Erfahren Sie mehr über SLMC's Geschichte, Mission und Engagement für Exzellenz in professionellen Dienstleistungen",
      keywords: [
        'über slmc',
        'unternehmensgeschichte',
        'mission',
        'team',
        'werte',
      ],
      image: '/images/logo_only.svg',
    },
    'art-45': {
      title: 'Art 45 Dienstleistungen - SLMC',
      description:
        'Umfassende Art 45 Dienstleistungen und spezialisierte Lösungen für Ihre Geschäftsanforderungen',
      keywords: [
        'art 45',
        'spezialisierte dienstleistungen',
        'geschäftslösungen',
        'professionelle beratung',
      ],
      image: '/images/logo_only.svg',
    },
    'contact-us': {
      title: 'Kontakt SLMC - Kontaktieren Sie uns',
      description:
        'Kontaktieren Sie unser professionelles Team für Anfragen, Support und Beratungsdienstleistungen',
      keywords: [
        'kontakt slmc',
        'kontaktieren',
        'support',
        'beratung',
        'anfragen',
      ],
      image: '/images/logo_only.svg',
    },
    insights: {
      title: 'Insights - SLMC',
      description:
        'Beiträge, Publikationen und Neuigkeiten von SLMC zu Versicherungen, Vorsorge, Familienunternehmen und grenzüberschreitender Planung',
      keywords: [
        'slmc insights',
        'familienunternehmen',
        'publikationen',
        'fachbeiträge',
        'unternehmensnews',
      ],
      image: '/images/logo_only.svg',
    },
    'insurance-pensions': {
      title: 'Versicherungen & Vorsorge - SLMC',
      description:
        'FINMA-registrierte Versicherungsbrokerdienstleistungen für Schweizer Unternehmen und Privatkunden: Unternehmens- und Privatversicherungen, BVG, Personalversicherungen und Risikomanagement',
      keywords: [
        'versicherungsbroker schweiz',
        'bvg vorsorge',
        'personalversicherungen',
        'risikomanagement',
        'unternehmensversicherung',
      ],
      image: '/images/logo_only.svg',
    },
    'family-office': {
      title: 'Family Office & Privatkunden - SLMC',
      description:
        'Koordination für Familien, Unternehmer und Privatkunden: Umzug, Vermögens- und Nachfolgeplanung, Steuer- und Rechtsspezialisten, Gesundheit und Immobilien',
      keywords: [
        'family office schweiz',
        'privatkunden',
        'vermögensplanung',
        'nachfolgeplanung',
        'relocation schweiz',
      ],
      image: '/images/logo_only.svg',
    },
    'international-solutions': {
      title: 'Internationale Lösungen - SLMC',
      description:
        'Grenzüberschreitende Planung zwischen der Schweiz, Europa und Asien – mit Zugang zu regulierten Anlageanbietern, Banken und Spezialisten',
      keywords: [
        'grenzüberschreitende planung',
        'regulierte anlageanbieter',
        'internationale mobilität',
        'expatriates schweiz',
        'asien desk',
      ],
      image: '/images/logo_only.svg',
    },
  },
  zh: {
    downloads: {
      title: '下载中心 - 表格与文件 | SLMC',
      description:
        '下载 SLMC 的保险经纪委托表格和资料概览，提供德文和英文版本，可直接填写、签署并回传。',
      keywords: ['slmc 下载', '经纪委托书', '保险表格', '资料概览', '瑞士'],
      image: '/images/logo_only.svg',
    },
    home: {
      title: 'SLMC - 专业服务与解决方案',
      description: '瑞士领先的专业服务和创新解决方案提供商',
      keywords: ['slmc', '专业服务', '解决方案', '瑞士', '咨询'],
      image: '/images/logo_only.svg',
    },
    about: {
      title: '关于SLMC - 我们的故事与使命',
      description: '了解SLMC的历史、使命以及对专业服务卓越的承诺',
      keywords: ['关于slmc', '公司历史', '使命', '团队', '价值观'],
      image: '/images/logo_only.svg',
    },
    'art-45': {
      title: 'Art 45服务 - SLMC',
      description: '全面的Art 45服务和专业化解决方案，满足您的业务需求',
      keywords: ['art 45', '专业化服务', '商业解决方案', '专业咨询'],
      image: '/images/logo_only.svg',
    },
    'contact-us': {
      title: '联系SLMC - 与我们取得联系',
      description: '联系我们的专业团队，获取咨询、支持和顾问服务',
      keywords: ['联系slmc', '取得联系', '支持', '咨询', '询问'],
      image: '/images/logo_only.svg',
    },
    insights: {
      title: '洞察 - SLMC',
      description:
        'SLMC 关于保险、养老金、家族企业与跨境规划的观点、出版物与动态',
      keywords: ['slmc洞察', '家族企业', '出版物', '专业观点', '公司新闻'],
      image: '/images/logo_only.svg',
    },
    'insurance-pensions': {
      title: '保险与养老金 - SLMC',
      description:
        '在 FINMA 注册的保险经纪服务，面向瑞士企业及私人客户：企业与个人保险、BVG/LPP 养老金、员工福利与风险管理',
      keywords: [
        '瑞士保险经纪',
        'bvg lpp养老金',
        '员工福利',
        '风险管理',
        '企业保险',
      ],
      image: '/images/logo_only.svg',
    },
    'family-office': {
      title: '家族办公室与私人客户 - SLMC',
      description:
        '为家族、企业家与私人客户提供统筹服务：迁居、财富与传承规划、税务与法律专家、医疗及房产',
      keywords: [
        '瑞士家族办公室',
        '私人客户',
        '财富规划',
        '传承规划',
        '迁居服务',
      ],
      image: '/images/logo_only.svg',
    },
    'international-solutions': {
      title: '国际解决方案 - SLMC',
      description:
        '瑞士、欧洲与亚洲之间的跨境规划，并可对接受监管的投资机构、银行与专业顾问',
      keywords: [
        '跨境规划',
        '受监管投资机构',
        '国际派遣',
        '瑞士外派人员',
        '亚洲业务部',
      ],
      image: '/images/logo_only.svg',
    },
  },
}

export function generatePageMetadata(
  locale: Locale,
  page: PageType,
  overrides?: Partial<Metadata>,
): Metadata {
  const pageInfo = pageData[locale]?.[page]
  const path = page === 'home' ? '' : `/${page}`
  const url = `${baseUrl}/${locale}${path}`

  if (!pageInfo) {
    throw new Error(
      `Page metadata not found for locale: ${locale}, page: ${page}`,
    )
  }

  return {
    metadataBase: new URL(baseUrl),
    title: pageInfo.title,
    description: pageInfo.description,
    keywords: pageInfo.keywords,
    authors: [{ name: 'SLMC' }],
    creator: 'SLMC',
    publisher: 'SLMC',
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en${path}`,
        es: `${baseUrl}/es${path}`,
        nl: `${baseUrl}/nl${path}`,
        de: `${baseUrl}/de${path}`,
        zh: `${baseUrl}/zh${path}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'SLMC',
      locale: locale,
      url: url,
      title: pageInfo.title,
      description: pageInfo.description,
      images: [
        {
          url: pageInfo.image || '/images/logo_only.svg',
          width: 1200,
          height: 630,
          alt: pageInfo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@slmc',
      title: pageInfo.title,
      description: pageInfo.description,
      images: [pageInfo.image || '/images/logo_only.svg'],
    },
    ...overrides,
  }
}

// Helper function for JSON-LD structured data
export function generateJsonLd(locale: Locale, page: PageType) {
  const pageInfo = pageData[locale]?.[page]
  const path = page === 'home' ? '' : `/${page}`
  const url = `${baseUrl}/${locale}${path}`

  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SLMC',
    url: url,
    logo: `${baseUrl}/images/logo_only.svg`,
    description: pageInfo?.description || 'Professional services and solutions',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CH',
    },
    sameAs: ['https://www.linkedin.com/company/slmc-ch'],
  }

  return JSON.stringify(baseStructuredData)
}

// Enhanced metadata with structured data
export function generatePageMetadataWithStructuredData(
  locale: Locale,
  page: PageType,
  overrides?: Partial<Metadata>,
): Metadata {
  const metadata = generatePageMetadata(locale, page, overrides)

  return {
    ...metadata,
    other: {
      ...(typeof metadata.other === 'object' && metadata.other !== null
        ? Object.fromEntries(
            Object.entries(metadata.other).filter(
              ([, value]) =>
                value !== undefined &&
                (typeof value === 'string' ||
                  typeof value === 'number' ||
                  (Array.isArray(value) &&
                    value.every(
                      v => typeof v === 'string' || typeof v === 'number',
                    ))),
            ),
          )
        : {}),
      'application/json+ld': generateJsonLd(locale, page),
    },
  }
}
