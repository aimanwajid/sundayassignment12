import React from 'react';
import Image from 'next/image';

interface Data {
  imageurl: string;
}

const Childsponsier = ({ imageurl }: Data) => {
  return (
    <div className="flex justify-center items-center bg-white p-4  " id='resources'>
      <Image
        src={imageurl || '/default-image.png'} // Fallback image
        alt="Sponsor image"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  );
};

export default Childsponsier;