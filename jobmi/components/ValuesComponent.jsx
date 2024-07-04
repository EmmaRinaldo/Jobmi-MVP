// components/ValuesComponent.js

import React from 'react';
import {Accordion} from "./Accordion"

export const ValuesComponent = () => {
  return (
    <div className="bg-white p-10 flex flex-col md:flex-row">
      <div className="flex-1 mb-8 md:mb-0">
        <h1 className="sm:text-3xl text-4xl font-bold font-oddlini mb-4">Nos valeurs</h1>
        <img src='/media/Vector1087.png' alt='vector' />
      </div>
      <Accordion />
    </div>
  );
};


