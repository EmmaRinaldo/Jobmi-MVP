// types/next-auth.d.ts
import NextAuth from 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    user: {
      id?: string;
      name?: string;
      email?: string;
      image?: string;
      firstName?: string;
      lastName?: string;
      city?: string;
      age?: number;
      phone?: string;
      job?: string;
    }
  }

  interface User {
    id: string;
    accessToken?: string;
    name: string;
    email: string;
    image: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    age?: number;
    phone?: string;
    job?: string;
  }
}
