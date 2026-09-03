import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yongsujung.github.io'),
  title: 'Yongsu Jung | Mechanical Engineering',
  description: 'Academic profile of Yongsu Jung, Assistant Professor at Hongik University in Sejong—data-driven modeling, uncertainty quantification, and design optimization.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Yongsu Jung | Mechanical Engineering',
    description: 'Data-driven modeling, uncertainty quantification, and design optimization for reliable engineering decisions.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Yongsu Jung — Mechanical Engineering, Uncertainty Quantification, and Engineering AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yongsu Jung | Mechanical Engineering',
    description: 'Data-driven modeling, uncertainty quantification, and design optimization for reliable engineering decisions.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
