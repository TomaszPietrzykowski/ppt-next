'use client';

import React, { useEffect, useState } from 'react';
import Tiptap from '@/app/_components/user/Tiptap';

import styles from '@/app/_styles/user.module.scss';
import { IPost } from '@/app/_types/ppt-types';

const temporaryText = 'ljhg ljhg kjhg jhg jhg ljhg ljhg ljh';
const baseUrl = 'http://localhost:5000';

const EditBlog = ({ postId }: { postId: string }) => {
	// const { id } = useParams();
	const [undoPost, setUndoPost] = useState<IPost | null>(null);
	const [newTitle, setNewTitle] = useState<string>('');
	const [isPublished, setIsPublished] = useState<boolean>(false);
	const [contentHtml, setContentHtml] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [edditError, setEditError] = useState<string | null>(null);

	const loadPost = async () => {
		try {
			setLoading(true);
			setEditError(null);
			const res = await fetch(`${baseUrl}/api/blog/${postId}`);
			const parsed = await res.json();
			if (parsed) {
				setUndoPost(parsed.data.post);
				setNewTitle(parsed.data.post.title);
				setContentHtml(parsed.data.post.content_html);
				setIsPublished(parsed.data.post.isPublished);
			} else {
				setEditError(`Nie znaleziono posta o id: "${postId}"`);
			}
			setLoading(false);
		} catch (err) {
			setEditError(`Error podczas pobrania posta o id: "${postId}"`);
			setLoading(false);
		}
	};

	useEffect(() => {
		loadPost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return loading ? (
		<h1>loading...</h1>
	) : (
		<div className={styles.edit_post__container}>
			<div className={styles.edit_post__title_bar}>
				<h1>edytuj post</h1>
				<div className=''>
					<button>zapisz zmiany</button>
				</div>
			</div>
			<div>
				<div className={styles.edit_post__title}>
					<input
						type='text'
						name='title'
						value={newTitle}
						id='title'
						onChange={(e) => setNewTitle(e.target.value)}
					/>
				</div>
				<Tiptap
					description={temporaryText}
					onChange={(e) => setContentHtml(e)}
					original_html={contentHtml}
				/>
			</div>
		</div>
	);
};

export default EditBlog;
