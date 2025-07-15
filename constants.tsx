import React from 'react';
import type { PortfolioItem, AiTool, SocialLink } from './types';
import { VideoIcon, ImageIcon, AudioIcon, BusinessIcon, TiktokIcon, YoutubeIcon, InstagramIcon } from './components/Icons';

export const NAV_LINKS = [
  { name: 'Guriga', href: '#home' },
  { name: 'Aniga Igu Saabsan', href: '#about' },
  { name: 'Shaqooyinkayga', href: '#portfolio' },
  { name: 'Qalabka AI', href: '#tools' },
  { name: 'Baro', href: '#learn' },
  { name: 'La Xiriir', href: '#contact' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Qaabka Wadooyinka Qaahira',
    category: 'Video TikTok',
    imageUrl: '/sawiro/tareen.mp4',
    videoUrl: '/sawiro/tareen.mp4',
  },
  {
    id: 2,
    title: 'Muuqaal uu Sameeyay AI',
    category: 'Sawir AI',
    imageUrl: '/sawiro/gabdho.mp4',
    videoUrl: '/sawiro/gabdho.mp4',
  },
  {
    id: 3,
    title: 'Tafatir Cod Podcast',
    category: 'Tafatir Cod',
    imageUrl: '/sawiro/wiil.mp4',
    videoUrl: '/sawiro/wiil.mp4',
  },
  {
    id: 4,
    title: 'Muuqaal Hiddaha Soomaalida',
    category: 'Video TikTok',
    imageUrl: '/sawiro/caruur.mp4',
    videoUrl: '/sawiro/caruur.mp4',
  },
  {
    id: 5,
    title: 'Fikrad Robot Mustaqbalka',
    category: 'Sawir AI',
    imageUrl: 'https://picsum.photos/seed/robot/600/800',
  },
   {
    id: 6,
    title: 'Nolosha Ardaynimo ee Masar',
    category: 'Video TikTok',
    imageUrl: 'https://picsum.photos/seed/student/600/800',
    videoUrl: '#',
  },
];

export const AI_TOOLS: AiTool[] = [
  {
    name: 'Imagen 3',
    description: 'Samaynta sawirro aad u macquul ah oo laga soo qaaday qoraallo fudud.',
    category: 'Image',
    icon: <ImageIcon className="w-8 h-8 text-blue-500" />,
  },
  {
    name: 'VEO',
    description: 'Abuurista muuqaallo tayo sare leh oo filim u eg, kuwaas oo laga soo qaatay qoraal iyo sawirro.',
    category: 'Video',
    icon: <VideoIcon className="w-8 h-8 text-blue-500" />,
  },
  {
    name: 'Lyria',
    description: 'Tafatir cod oo horumarsan iyo abuurista heesaha fiidiyowyadayda.',
    category: 'Audio',
    icon: <AudioIcon className="w-8 h-8 text-blue-500" />,
  },
  {
    name: 'Gemini',
    description: 'Kaalmadaydii ugu horreysay ee curinta fikradaha, qoraallada, iyo qorshayaasha ganacsi.',
    category: 'Business',
    icon: <BusinessIcon className="w-8 h-8 text-blue-500" />,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'TikTok', url: 'https://www.tiktok.com/@somali.ai21?is_from_webapp=1&sender_device=pc', icon: <TiktokIcon className="w-6 h-6" /> },
  { name: 'YouTube', url: '#', icon: <YoutubeIcon className="w-6 h-6" /> },
  { name: 'Instagram', url: 'https://www.instagram.com/mbash101/', icon: <InstagramIcon className="w-6 h-6" /> },
];