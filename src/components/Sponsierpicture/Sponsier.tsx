import React from 'react';
import Childsponsier from '@/components/Sponsierpicture/Childsponsier';

const picdata = [
  { imageurl: '/Apple.png' },
  { imageurl: '/Microsoft.png' },
  { imageurl: '/2.png' },
  { imageurl: '/google.png' },
];

const Sponsiers = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-10 py-20 bg-white" >
      {/* Sponsors Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {picdata.map((item, index) => (
          <Childsponsier
           key={index}
            imageurl={item.imageurl} />
        ))}
      </div>
    </div>
  );
};

export default Sponsiers