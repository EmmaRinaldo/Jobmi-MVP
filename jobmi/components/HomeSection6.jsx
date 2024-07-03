import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeSection6 = () => {
  return (
    <div className="relative bg-[#0A1F44] py-20 rounded-t-2xl text-center text-white mt-[230px]"> {/* Added margin top for spacing */}
      <div className="absolute inset-x-0 top-0 transform translate-y-1/2"> {/* Adjusted translate-y to place the image correctly */}
        <div className='flex justify-center items-center'>
        <Image 
          src="/media/Section6.png" 
          alt="Decorative Box Image" 
          width={800} // Adjust width according to your needs
          height={200} // Adjust height according to your needs
          objectFit="contain" 
          className='mt-[-320px] '
        />
        </div>
      </div>
      <div className="mt-32">
        <h2 className="text-4xl font-bold ">
          Prêts à <span className='underline-tilted decoration-[#a29bfe]'>transformer</span> ta carrière ?
        </h2>
        <div className='flex justify-center items-center'>
        <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://626063d8.sibforms.com/serve/MUIFAEtkyLp2CKWZ3dK7tZAaV913c-SP0e_IP8fVFhikgJbXeSQSKrIBS_d-L0WUIziK7BVpRA-4qmg1RW6kU-7j7rKYnwCGuIOrgcqaEtKr7d060ZPGT22jUjuO2vZhW1-fOtMV78j2rBU-04_F8pj7pPLi_oHLjV-8Gns1ljpjWJRXuuVT2LVH3B1OBRwulcezAhR5VOqWQDnn?utm_source=Waitinglist&utm_medium=email&utm_campaign=Launch_campaign&utm_id=LP&utm_content=CTA4"
            className="rounded-xl px-4 py-2 mt-[40px] ml-9 flex items-center gap-2 bg-white text-black font-semibold w-fit h-fit"
          >
            Trouver un job
            <img
              src="/media/cta-blog-arrow.svg"
              alt="arrow-icon"
              className="w-7"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection6;