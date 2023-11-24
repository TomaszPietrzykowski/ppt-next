import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IPost } from '../../_types/ppt-types';
import styles from '../../_styles/blog.module.scss';
import dummyImage from '../../../public/images/blog/uk.jpg';

interface IProps {
	post: IPost;
}

const PostCard: React.FC<IProps> = ({ post }) => {
	const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	// const imagePath = `/images/blog/${post.slug}/${post.image}`;

	return (
		<li className={styles.post}>
			<Link href={''}>
				<div className={styles.image}>
					{/* <Image
						src={dummyImage}
						width={300}
						height={200}
						alt='sensible desc'
						className={styles.post_card__image}
						unoptimized
					/> */}
				</div>
				<div className={styles.content}>
					<h2>{post.title}</h2>
					<p>{post.content_text?.slice(0, 160)}</p>
					<small>Date: {formattedDate}</small>
				</div>
			</Link>
		</li>
	);
};

export default PostCard;
