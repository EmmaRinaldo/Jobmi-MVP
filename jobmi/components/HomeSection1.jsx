"use client";

import Link from "next/link";
import React from "react";

export const HomeSection1 = () => {
  return (
    <div className="font-sans mt-[90px] w-full">
      <div className="flex flex-col lg:flex-row sm:flex-col my-10">
        <div className="bg-[#F3F3F3] sm:pl-20 pl-5 pb-10 pt-20 rounded-lg w-full sm:h-[680px] lg:w-full flex flex-col justify-center items-start flex-1">
          <h2 className="sm:text-4xl text-3xl sm:text-left text-center font-bold sm:w-[450px] font-oddlini uppercase">
            Et si un test pouvait changer ta vie...
          </h2>
          <p className="my-7 font-oddlini sm:text-[25px] text-[20px] sm:w-[500px] font-[600] mb-2">
            ...après ces 5 questions, <br />
            tu voudras quitter ton job actuel.
          </p>
          <div className="sm:flex-row sm:gap-28 w-full">
            <Link
              href="/test"
              className="rounded-xl px-4 py-2 my-10 flex items-center gap-2 bg-black text-white font-semibold w-fit h-fit"
            >
              Fais le test
              <img
                src="/media/cta-blog-arrow.svg"
                alt="arrow-icon"
                className="w-7"
              />
            </Link>

            <div className="flex-col">
              <img
                src="/media/accueil-arrow-section1.svg"
                alt="card-arrow"
                className="w-15"
              />
              <p className="font-september font-bold w-[200px] text-center text-[#B384FF] sm:text-5xl text-[40px] leading-none -rotate-[11deg]">
                PS : On a déjà écrit ta lettre de démission (et pour de vrai)
              </p>
            </div>
          </div>
          
        </div>

        <div className="flex-shrink-0 mb-5 overflow-hidden sm:w-full sm:h-[680px] h-[80%] flex-1 sm:rounded-none rounded-b-3xl">
          <img
            className="object-cover w-full sm:h-full "
            src="/media/accueil-femmes-1.svg"
            alt="3 femmes qui s'exclament en regardant un téléphone"
          />
        </div>
      </div>
    </div>
  );
};
