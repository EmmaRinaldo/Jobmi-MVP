import React, { useState } from 'react';
import CountUp from 'react-countup';

export const HomeSection3 = () => {
  const [hovered, setHovered] = useState([false, false, false]);

  const stats = [
    { value: 80, description: 'des reconvertis sont plus satisfaits au travail' },
    { value: 50, description: 'des reconvertis ont eu une augmentation' },
    { value: 95, description: 'des reconvertis recommandent de changer de métier' },
  ];

  const handleMouseEnter = (index) => {
    setHovered((prev) => {
      const newHovered = [...prev];
      newHovered[index] = true;
      return newHovered;
    });
  };

  return (
    <div className='mx-2'>
      <div className="home-section-3 bg-[#14213d] text-white mt-16 rounded-xl py-10 px-4 sm:px-8 sm:h-[400px] flex justify-center items-center">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-8">
          Les <span className='underline-tilted decoration-[#a29bfe]'>chiffres</span> parlent d'eux-mêmes !
        </h2>
        <div className="stats-grid grid gap-8 mt-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <h3 className="text-6xl font-bold">
                <CountUp
                  start={0}
                  end={hovered[index] ? stat.value : 0}
                  duration={2}
                />
                %
              </h3>
              <p className="mt-4 text-lg">
                {stat.description.split(' ').map((word, i) =>
                  word === 'satisfaits' || word === 'augmentation' || word === 'métier' ? (
                    <span key={i} className="underline decoration-[#a29bfe]">{word} </span>
                  ) : (
                    word + ' '
                  )
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomeSection3;
