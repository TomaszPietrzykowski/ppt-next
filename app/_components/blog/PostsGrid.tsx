import React from 'react';
import styles from '../../_styles/blog.module.scss';
import PostCard from './PostCard';
import { IPost } from '../../_types/ppt-types';
import Link from 'next/link';

interface IProps {
	posts: Array<IPost>;
	loading: boolean;
	selectPost: (post: IPost | null) => void;
}

const PostsGrid: React.FC<IProps> = ({ posts, loading, selectPost }) => {
	return (
		<ul className={styles.posts__grid}>
			{posts.map((post: IPost, i: number) => (
				<Link key={post._id} href={`/blog/post?postId=${post._id}`}>
					<PostCard index={i} post={post} />
				</Link>
			))}
		</ul>
	);
};

export default PostsGrid;
