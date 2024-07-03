"use client";

import { SessionProvider } from 'next-auth/react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from 'react';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
          <Navbar />
          {children}
          <Footer />
    </SessionProvider>
  );
}
