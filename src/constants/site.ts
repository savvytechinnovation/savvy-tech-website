export const CONTACT_EMAIL = 'info@savvytechinnovation.com';

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/savvy-tech-innovation/' },
  { name: 'Instagram', url: 'https://www.instagram.com/savvytechinnovation' },
  { name: 'YouTube', url: 'https://www.youtube.com/@savvytechinnovation' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@savvytechinnovation' },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61585909825411' },
] as const;

export type SocialName = (typeof SOCIAL_LINKS)[number]['name'];
