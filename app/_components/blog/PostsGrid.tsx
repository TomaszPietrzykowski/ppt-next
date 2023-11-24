import React from 'react';
import styles from '../../_styles/blog.module.scss';
import PostCard from './PostCard';
import { IPost } from '../../_types/ppt-types';

interface IProps {
	posts: Array<IPost>;
	loading: boolean;
}

const PostsGrid: React.FC<IProps> = ({ posts }) => {
	return (
		<ul className={styles.posts__grid}>
			{posts.map((post: IPost, i: number) => (
				<PostCard key={post._id} index={i} post={post} />
			))}
		</ul>
	);
};

export default PostsGrid;
