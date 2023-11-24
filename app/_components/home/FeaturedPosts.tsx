'use client';

import React, { useEffect, useState } from 'react';
import { IPost } from '../../_types/ppt-types';
import styles from '@/app/_styles/home.module.scss';
import PostsGrid from '../blog/PostsGrid';

const baseUrl = 'http://localhost:5000';

const FeaturedPosts = () => {
	const [posts, setPosts] = useState<Array<IPost>>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		try {
			setLoading(true);
			const res = await fetch(`${baseUrl}/api/blog/latest`);
			const response = await res.json();
			if (response.status === 'success') {
				setPosts(response.data.posts);
			}
			setLoading(false);
		} catch (err) {}
	};
	return (
		<div className={styles.featured__grid}>
			<h2 className={styles.section_title}>Najnowsze w blogu</h2>
			<PostsGrid posts={posts} loading={loading} />
		</div>
	);
};

export default FeaturedPosts;
