window.SmartSiteBotConfig = {
  businessName: 'SmartSite SA',
  title: 'SmartSite SA',
  subtitle: 'Affordable websites, simple answers',
  botTitle: 'SmartSite Bot',
  botSubtitle: 'No-API site assistant',
  whatsappNumber: '27689023641',
  genericMessage: 'Hi Charl, I would like to enquire about SmartSite SA websites.',
  fallback: 'I am not sure about that. Do you want to speak to Charl on WhatsApp?',
  emailSubject: 'SmartSite SA enquiry',
  callHref: 'https://wa.me/27689023641',
  introMessage: 'Hi 👋 I can help with pricing, what is included, updates, reports, how it works, who this is for, and WhatsApp sign-up. Choose an option or type your question.',
  quickReplies: ['What do I get?', 'Pricing', 'How it works', 'Can I request updates?', 'Monthly reports', 'Who is this for?', 'Start on WhatsApp'],
  parameters: [
    { keywords: ['hello','hi','hey','good morning'], reply: 'Hello 👋 How can I help with SmartSite SA?' },
    { keywords: ['what do i get','included','features','services','what is included'], reply: 'You get a professional mobile-friendly website, basic SEO setup, WhatsApp updates, ongoing maintenance and monthly activity reporting.', links: [{ label: 'View what you get', href: 'index.html#services' }] },
    { keywords: ['pricing','price','cost','r299','monthly','plan'], reply: 'SmartSite SA is positioned at R299/month for a simple website plan with support, updates and ongoing care.', links: [{ label: 'View pricing', href: 'index.html#pricing' }] },
    { keywords: ['how it works','process','start','steps'], reply: 'The process is simple: tell us about your business, we build the site, then you request updates by WhatsApp.', links: [{ label: 'View how it works', href: 'index.html#how' }] },
    { keywords: ['updates','whatsapp updates','change','changes','edit','photos','hours'], reply: 'Yes. You can request updates by WhatsApp, like price changes, new photos, business hours or service changes.' },
    { keywords: ['monthly report','reports','analytics','activity report'], reply: 'The plan includes a simple monthly activity/report update so business owners can see what is happening on their site.' },
    { keywords: ['who is this for','ideal for','small business','guest house','beauty','church','trades'], reply: 'It is ideal for small businesses that need to look professional online without paying a big once-off website project fee.' },
    { keywords: ['seo','google','search'], reply: 'SmartSite SA includes basic SEO setup and proper structure to help the business have a better chance of being found online.' },
    { keywords: ['technical','tech knowledge','manage website'], reply: 'No technical knowledge is needed. SmartSite SA handles the website build, support and updates.' },
    { keywords: ['whatsapp','contact','charl','agent','human','sign up'], reply: 'You can start by sending Charl a WhatsApp with your business name, services, photos and what you need on the site.' }
  ],
  autoUpdateFromSite: true,
  sitePages: [{ label: 'Home', href: 'index.html' }],
  siteAnswers: [
    { keywords: ['faq','questions','frequently asked'], reply: 'The FAQ explains that no technical knowledge is needed, updates can be requested later, and the service is for small businesses wanting a professional online presence.', links: [{ label: 'Open FAQ', href: 'index.html#faq' }] },
    { keywords: ['get started','ready','start website'], reply: 'To get started, send a WhatsApp and share your business name, services, contact details and any photos you want included.', links: [{ label: 'Start on WhatsApp', href: 'https://wa.me/27689023641?text=Hi%20Charl%2C%20I%20want%20to%20start%20my%20website%20with%20SmartSite%20SA.' }] }
  ]
};
