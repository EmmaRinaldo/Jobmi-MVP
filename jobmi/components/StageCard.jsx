// components/StageCard.jsx
import React from 'react';
import Link from 'next/link';

const StageCard = ({ image, title, duration, link, session }) => {
    return (
        <div className="bg-[#F3F3F3] overflow-hidden rounded-xl">
            <img className="w-full h-[250px] object-cover object-top mx-auto" src={image} alt={title} />
            <div className="p-4 mx-auto">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <div className='flex flex-row gap-1 my-1'>
                    <img src="/media/test/icon-stopwatch.svg" alt="Icone d'un chronomètre" />
                    <p className="text-lg">{duration}</p>
                </div>
                {session ? (
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-violet text-white rounded-lg hover:bg-purple-800">Découvrir</button>
                    </Link>
                ) : (
                    <Link href="/me-connecter">
                        <button className="px-4 py-2 bg-violet text-white rounded-lg hover:bg-purple-800">Découvrir</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default StageCard;
