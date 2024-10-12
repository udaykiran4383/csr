import React, { useState, useEffect } from 'react';

import im1 from "../pages/components/img/A01I0014_2_11zon.jpg"
import im2 from "../pages/components/img/A01I0143 (1)_3_11zon.jpg"
import im3 from "../pages/components/img/A01I0187_2_11zon.jpg"
import im4 from "../pages/components/img/A01I0220 (3)_2_11zon.jpg"
import im5 from "../pages/components/img/JIT_1500_1_11zon.jpg"
import im6 from "../pages/components/img/JIT_1513_4_11zon.jpg"
import im7 from "../pages/components/img/JIT_1519_2_11zon.jpg"
import im8 from "../pages/components/img/JIT_1527_1_11zon.jpg"

import im10 from "../pages/components/img/JIT_1602_1_11zon.jpg"
import im11 from "../pages/components/img/JIT_1612_1_11zon.jpg"
import im12 from "../pages/components/img/JIT_1617 (1)_3_11zon.jpg"
import im13 from "../pages/components/img/JIT_1618_5_11zon.jpg"
import im14 from "../pages/components/img/JIT_1621_4_11zon.jpg"
import im15 from "../pages/components/img/JIT_1624_4_11zon.jpg"
import im16 from "../pages/components/img/JIT_1629_4_11zon.jpg"
import im17 from "../pages/components/img/JIT_1631_1_11zon.jpg"
import im18 from "../pages/components/img/JIT_1635_3_11zon.jpg"
import im19 from "../pages/components/img/JIT_1691_3_11zon.jpg"

import im21 from "../pages/components/img/449A0272 (2)_1_11zon.jpg"
import im22 from "../pages/components/img/4Z2A1873_4_11zon.jpg"
import SectionTitle from './components/SectionTitle';

const ImageGallery = () => {
  const [images, setImages] = useState([
im1,
im2,
im3,
im4,
im5,
im6,
im7,
im8,

im10,
im11,
im12,
im13,
im14,
im15,
im16,
im17,
im18,
im19,

im21,
im22
  ]);

  const imageSources = [
im1,
im2,
im3,
im4,
im5,
im6,
im7,
im8,

im10,
im11,
im12,
im13,
im14,
im15,
im16,
im17,
im18,
im19,

im21,
im22
  ];

  // Helper function to get a random index from the imageSources array
  const getRandomImage = () => imageSources[Math.floor(Math.random() * imageSources.length)];

  // Function to randomly change an image at a specific index
  const updateImageAt = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = getRandomImage();
      return newImages;
    });
  };

  useEffect(() => {
    // Initially change all images every 3 seconds
    const interval1 = setInterval(() => {
      setImages((prevImages) =>
        prevImages.map(() => getRandomImage())
      );
    }, 3000);

    // Randomly change images at different intervals (3s, 4s, and 5s)
    const interval2 = setInterval(() => updateImageAt(2), 3000); // Image at index 2 changes every 3 seconds
    const interval3 = setInterval(() => updateImageAt(4), 5000); // Image at index 4 changes every 5 seconds
    const interval4 = setInterval(() => updateImageAt(6), 4000); // Image at index 6 changes every 4 seconds

    // Clean up intervals when the component unmounts
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  const renderImages = (images) =>
    images.map((src, index) => (
      <img
        key={index}
        className="myImages w-full h-auto hover:opacity-70 transition-opacity duration-300 cursor-pointer"
        src={src}
        alt=""
      />
    ));

  return (
   
    <div className="flex flex-col items-center p-8">
       <div className="w-full flex justify-center">
    <SectionTitle title="GALLERY" className="text-center" />
  </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {renderImages(images)}
      </div>
    </div>
  );
};

export default ImageGallery;
