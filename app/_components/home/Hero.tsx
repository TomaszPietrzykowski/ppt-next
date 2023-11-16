'use client';
import React from 'react';
import Image from 'next/image';
import background from '../../../public/images/site/backgroud.jpg';
import styles from '../../../app/_styles/home.module.scss';
import useScrollPosition from '@/app/_hooks/useScrollPosition';
import FeaturedPosts from './FeaturedPosts';

const Hero = () => {
	return (
		<>
			<div className={styles.hero__container}>
				<Image
					src={background}
					alt='powierzchnia jeziora we mgle'
					width={1920}
					height={1080}
					className={styles.hero__image}
					style={{
						transform: `translate(0px, ${useScrollPosition(
							0.6
						)}px)`,
					}}
					unoptimized
				/>

				<div className={styles.hero__slogan}>
					<div
						className={styles.romb_temp}
						style={{
							transform: `translate(0px, ${useScrollPosition(
								0.33
							)}px) rotate(45deg)`,
						}}
					>
						<div className={styles.romb_inner}></div>
						<div className={styles.romb_inner}></div>
						<div className={styles.romb_inner}></div>
						<div className={styles.romb_inner}></div>
						<div className={styles.romb_inner}></div>
						<div className={styles.romb_inner}></div>
						<div className={styles.romb_inner}></div>
						<div className={styles.romb_inner}></div>
						<div className={styles.romb_inner}></div>
					</div>
				</div>
			</div>
			<div
				className={styles.brag_about}
				style={{
					width: '100%',
					minHeight: '600px',
					background: 'white',
				}}
			></div>
		</>
	);
};

export default Hero;
