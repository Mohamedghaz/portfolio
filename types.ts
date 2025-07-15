import React from 'react';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
}

export interface AiTool {
  name: string;
  description: string;
  category: 'Video' | 'Image' | 'Audio' | 'Business';
  icon: React.ReactElement;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement;
}