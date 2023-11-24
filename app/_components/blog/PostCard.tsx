import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IPost } from '../../_types/ppt-types';
import styles from '@/app/_styles/blog.module.scss';
import { Calendar } from 'lucide-react';

interface IProps {
	post: IPost;
	index: number;
}

const PostCard: React.FC<IProps> = ({ post, index }) => {
	const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	// const imagePath = `/images/blog/${post.slug}/${post.image}`;

	return (
		<li className={styles.post}>
			<Link href={''}>
				<div
					className={styles.image}
					style={{
						background: `url('https://source.unsplash.com/random/460x24${
							index > 9
								? parseInt((index - 10).toString())
								: index
						}?nature')`,
					}}
				></div>
				<div className={styles.post_card__content}>
					<h2>{post.title}</h2>
					<p>{post.content_text}</p>
					<div className={styles.post_card__footer}>
						<div className={styles.post_card__date}>
							<Calendar className={styles.post_card__date_icon} />
							<small>{formattedDate}</small>
						</div>
						<div className={styles.post_card__link}>
							<small>{'<< czytaj wiecej >>'}</small>
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
};

export default PostCard;
