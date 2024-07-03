"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import React from 'react';

export const AuthLinks = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <Link href="/profile" className="menu-item">Mon Compte</Link>
          <a className="menu-item cursor-pointer" onClick={() => signOut()}>
            Déconnexion
          </a>
        </>
      ) : (
        <Link className="bg-[#D9D9D9] rounded-lg py-2 px-4" href="/me-connecter">
          Me connecter
        </Link>
      )}
    </>
  );
}
