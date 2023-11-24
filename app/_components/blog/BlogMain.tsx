'use client';

import React, { useEffect, useState } from 'react';
import PostsGrid from './PostsGrid';
import { IPost } from '@/app/_types/ppt-types';
import styles from '@/app/_styles/blog.module.scss';

const baseUrl = 'https://michalstachnik.pl';

const BlogMain = () => {
	const [posts, setPosts] = useState<Array<IPost>>([]);
	const [post, setPost] = useState<IPost | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		try {
			setLoading(true);
			const res = await fetch(`${baseUrl}/api/blog`);
			const response = await res.json();
			if (response.status === 'success') {
				setPosts(response.data.posts);
			}
			setLoading(false);
		} catch (err) {}
	};
	return post ? (
		<div>post details: {post.content_text}</div>
	) : (
		<div className={styles.blog_main__grid}>
			<h2 className={styles.section_title}>
				Pozytywny <span className={styles.highlight}>Blog</span>
			</h2>
			<PostsGrid posts={posts} loading={loading} />
		</div>
	);
};

export default BlogMain;
