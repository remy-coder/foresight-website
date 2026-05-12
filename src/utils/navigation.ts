export const ID_MAP: Record<string, string> = {
  'home': '/',
  'about': '/about',
  'mission': '/about#mission',
  'objectives': '/about#objectives',
  'our-leaders': '/about/our-leaders',
  'where-we-work': '/where-we-work',
  'projects-australia': '/where-we-work/australia',
  'projects-indonesia': '/where-we-work/sumba',
  'projects-solomon-islands': '/where-we-work/solomon-islands',
  'stories': '/stories',
  'impact': '/stories',
  'get-involved': '/get-involved',
  'news': '/news',
  'contact': '/contact',
  'donate': '/donate',
  'reports-policies': '/reports-policies',
  'privacy-policy': '/privacy-policy',
  'terms-conditions': '/terms-conditions',
  'cookie-policy': '/cookie-policy',
  'subscribe': '/subscribe'
};

export const getUrlFromId = (id: string): string => {
  if (id.startsWith('story-')) {
    return `/stories/${id.replace('story-', '')}`;
  }
  return ID_MAP[id] || '/';
};
