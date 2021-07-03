import React, { useState } from 'react';
import './Banner.scss';

const bannerList = [
  'https://cdn.pixabay.com/photo/2016/07/24/21/01/thermometer-1539191_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/06/26/23/47/poison-1481596_960_720.jpg',
];

export default function Banner() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const changeImage = () => {
    setCurrentBannerIndex(currentBannerIndex ? 0 : 1);
  };

  return (
    <section className="bannerSection" onClick={changeImage}>
      <img
        src={bannerList[currentBannerIndex]}
        alt="benner"
        className="bennerImage"
      />
    </section>
  );
}
