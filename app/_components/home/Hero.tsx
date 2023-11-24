'use client';
import React from 'react';
import Image from 'next/image';
import background from '../../../public/images/site/backgroud.jpg';
import styles from '../../../app/_styles/home.module.scss';
import useScrollPosition from '@/app/_hooks/useScrollPosition';

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
							0.75
						)}px)`,
					}}
					unoptimized
				/>

				<div className={styles.hero__slogan}>
					<div
						className={styles.romb_temp}
						style={{
							transform: `translate(0px, ${useScrollPosition(
								0.55
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
			<div className={styles.brag_about}>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quasi itaque facilis, fuga sed explicabo aliquam optio, ad
					similique tenetur, repudiandae enim sit? Exercitationem amet
					natus corrupti iste nostrum pariatur labore libero repellat
					laborum? Accusantium magni aperiam repudiandae, iure rerum
					labore, consectetur eos dignissimos beatae veritatis quae
					tempore dolore voluptate perferendis id, eaque ex obcaecati
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quasi itaque facilis, fuga sed explicabo aliquam optio, ad
					natus corrupti iste nostrum pariatur labore libero repellat
					laborum? Accusantium magni aperiam repudiandae, iure rerum
					tempore dolore voluptate perferendis id, eaque ex obcaecati
					minus. Exercitationem cum blanditiis non qui. Odit minus
					numquam mollitia cumque, quisquam reprehenderit eos ipsam!
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quasi itaque facilis, fuga sed explicabo aliquam optio, ad
					natus corrupti iste nostrum pariatur labore libero repellat
					laborum? Accusantium magni aperiam repudiandae, iure rerum
					tempore dolore voluptate perferendis id, eaque ex obcaecati
					minus. Exercitationem cum blanditiis non qui. Odit minus
					numquam mollitia cumque, quisquam reprehenderit eos ipsam!
				</div>
			</div>
		</>
	);
};

export default Hero;
