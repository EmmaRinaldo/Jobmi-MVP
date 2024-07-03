import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="accordion-item flex flex-col">
    <div 
      className={`accordion-header flex justify-between items-center px-4 py-4 cursor-pointer ${isOpen ? 'bg-purple-600 text-white' : 'bg-white text-black'}`} 
      onClick={onClick}
    >
      <span>{title}</span>
      <span>{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && (
      <div className="accordion-body bg-purple-600 text-white px-4 py-4 font-light">
        {children}
      </div>
    )}
  </div>
);

export const HomeSection2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="section2-part py-10 px-4 sm:px-8 bg-white relative">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 sm:col-span-6 relative h-96">
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 transform rotate-[-10deg] mt-[-75px] left-[200px]">
            <img
              src="/media/girlswithlap.png"
              alt="Dummy 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="absolute h-[250px] w-[250px] top-28 ml-[200px] sm:top-20 sm:left-28">
            <img
              src="/media/girlsitting.png"
              alt="Dummy 2"
              className="w-full h-full object-cover rounded-lg"
            />
            <img src='media/Group333.png' alt='arrow' className='ml-[150px] h-[100px] w-[100px]' />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <div className="accordion bg-[#F8F8F8] rounded-xl px-4 py-4 text-black font-semibold flex flex-col gap-4">
            <AccordionItem 
              title="1 Test de découverte de métier" 
              isOpen={openIndex === 0} 
              onClick={() => handleToggle(0)}
            >
              Réponds à <b>5 questions simples</b> pour découvrir les métiers qui te correspondent.
            </AccordionItem>
            <AccordionItem 
              title="2 Trouves un métier" 
              isOpen={openIndex === 1} 
              onClick={() => handleToggle(1)}
            >
              Réponds à <b>5 questions simples</b> pour découvrir les métiers qui te correspondent.
            </AccordionItem>  
            <AccordionItem 
              title="3 Stage de découverte" 
              isOpen={openIndex === 2} 
              onClick={() => handleToggle(2)}
            >
              Réponds à <b>5 questions simples</b> pour découvrir les métiers qui te correspondent.
            </AccordionItem>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
