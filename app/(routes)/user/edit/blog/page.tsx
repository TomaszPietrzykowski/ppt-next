'use client';

import { IPost } from '@/app/_types/ppt-types';
import React, { useEffect, useState } from 'react';
import styles from '@/app/_styles/user.module.scss';
import EditBlog from '@/app/_components/user/EditPost';

const baseUrl = 'https://michalstachnik.pl';

const EditAllPosts = () => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [editedPost, setEditedPost] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		getPosts();
	}, [editedPost]);

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

	const handlePostSelection = (id: string) => {
		setEditedPost(id);
	};

	return loading ? (
		<>
			<br />
			<br />
			<br />
			<br />
			<br />
			<h1>loading...</h1>
		</>
	) : editedPost ? (
		<EditBlog postId={editedPost} reset={() => setEditedPost('')} />
	) : (
		<div className={styles.edit_all_posts__container}>
			<div
				key={'new'}
				id={'new'}
				className={styles.edit_all__post_card}
				onClick={() => handlePostSelection('new')}
			>
				<h3>{'Utwórz nowy post'}</h3>
				<p>Kliknij aby dodać nowy wpis w blogu.</p>
				<div className={styles.edit_all__status}></div>
			</div>
			{posts.length > 0 &&
				posts.map((p) => (
					<div
						key={p._id}
						id={p._id}
						className={styles.edit_all__post_card}
						onClick={() => handlePostSelection(p._id)}
					>
						<h3>{p.title}</h3>
						<p>
							{p.content_text
								? p.content_text.slice(0, 80)
								: 'No content preview'}
						</p>
						<div className={styles.edit_all__status}>
							<small>
								{new Date(p.createdAt).toLocaleDateString(
									'en-En',
									{
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									}
								)}
							</small>
							<small>
								{new Date(p.updatedAt).toLocaleDateString(
									'en-En',
									{
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									}
								)}
							</small>
						</div>
					</div>
				))}
		</div>
	);
};

export default EditAllPosts;
