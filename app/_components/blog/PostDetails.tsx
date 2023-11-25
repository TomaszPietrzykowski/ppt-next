import { IPost } from '@/app/_types/ppt-types';
import React from 'react';
import styles from '@/app/_styles/blog.module.scss';
import Link from 'next/link';
import { ArrowBigLeft, Calendar, User } from 'lucide-react';

interface IProps {
	post: IPost;
	loading: boolean;
	selectPost: (post: IPost | null) => void;
}

const PostDetails = ({ post, selectPost }: IProps) => {
	return (
		<div className={styles.post_details__container}>
			<div className={styles.post_details__back_btn}>
				<Link href='/blog'>
					<div>
						<ArrowBigLeft />
						<span>Powrót</span>
					</div>
				</Link>
			</div>
			<div className={styles.post_details__status}>
				<div>
					<User />
					<span>
						{typeof post.author !== 'string'
							? post.author.name
							: post.author}
					</span>
				</div>
				<div>
					<Calendar />
					<span>
						{new Date(post.createdAt).toLocaleDateString('en-US', {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
						})}
					</span>
				</div>
			</div>
			<h1 className={styles.post_details__title}>{post.title}</h1>
			<div
				className={styles.post_details__body}
				dangerouslySetInnerHTML={{ __html: post.content_html }}
			/>
			<div className=''>
				{typeof post.author == 'string'
					? post.author
					: post.author.name}
			</div>
		</div>
	);
};

export default PostDetails;
