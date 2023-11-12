import React from 'react';
import { IPost } from '../../_types/ppt-types';
import styles from '../../_styles/home.module.scss';
import PostsGrid from '../blog/PostsGrid';

const FeaturedPosts = async ({ posts }: { posts: Array<IPost> }) => {
	return (
		<div className={styles.featured__grid}>
			<h2>Featured posts</h2>
			<PostsGrid posts={posts} />
		</div>
	);
};

export default FeaturedPosts;
