'use client';

import PostDetails from '@/app/_components/blog/PostDetails';
import { IPost } from '@/app/_types/ppt-types';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const PostPage = () => {
	const [post, setPost] = useState<IPost | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const postId = useSearchParams().get('postId');

	const getPost = async () => {
		try {
			setLoading(true);
			const res = await fetch(
				`https://michalstachnik.pl/api/blog/${postId}`
			);
			const { data } = await res.json();
			setPost(data.post);
			setLoading(false);
		} catch (err: unknown) {
			console.log(err);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (postId) {
			getPost();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [postId]);
	return post && !loading ? (
		<PostDetails post={post} loading={false} selectPost={setPost} />
	) : (
		<h1>loading...</h1>
	);
};

export default PostPage;
