import React from 'react';
import Image from 'next/image';
import background from '../../../public/images/site/backgroud.jpg';
import styles from '../../../app/_styles/home.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero__container}>
      <Image
        src={background}
        alt="powierzchnia jeziora we mgle"
        width={1920}
        height={1080}
        className={styles.hero__image}
      />
      <div className={styles.hero__slogan}>
        <h1>
          Transkulturowa <br />
          Psychoterapia <br />
          Pozytywna
        </h1>
      </div>
    </div>
  );
};

export default Hero;
