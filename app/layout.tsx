import type { Metadata } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Define a CSS variable for the font
});
export const metadata: Metadata = {
  title: 'Manage Chores - Teach Responsibility & Build Better Habits',
  description:
    'Chore Economy helps families organize tasks, guide kids toward responsibility, and track progress—all in one place. Build better habits and teach life skills effortlessly',
  keywords:
    'chore management, teach responsibility, build habits, chore tracker, kids chores, family task organizer, chore economy, parenting tools',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased`}>{children}</body>
    </html>
  );
}
