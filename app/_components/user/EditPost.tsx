'use client';

import React, { useEffect, useState } from 'react';
import { ArrowBigLeft, BookOpenCheck, Save, Trash2 } from 'lucide-react';
import Tiptap from '@/app/_components/user/Tiptap';
import styles from '@/app/_styles/user.module.scss';
import { IPost } from '@/app/_types/ppt-types';
import { useGlobalContext } from '@/app/_context/store';

const temporaryText = '';
const baseUrl = 'http://localhost:5000';

const EditBlog = ({ postId, reset }: { postId: string; reset: () => void }) => {
	// const { id } = useParams();
	const [undoPost, setUndoPost] = useState<IPost | null>(null);
	const [newTitle, setNewTitle] = useState<string>('');
	const [isPublished, setIsPublished] = useState<boolean>(false);
	const [contentHtml, setContentHtml] = useState<string>('');
	const [contentText, setContentText] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [edditError, setEditError] = useState<string | null>(null);

	const { user } = useGlobalContext();

	useEffect(() => {
		loadPost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [postId]);

	const loadPost = async () => {
		if (postId === 'new') {
			setEditError(null);
			setNewTitle('Tytuł');
			setContentHtml('<p>treść posta...</p>');
			setIsPublished(false);
			setLoading(false);
		} else {
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
				setEditError(`Błąd podczas pobierania posta o id: "${postId}"`);
				console.log(edditError);
				setLoading(false);
			}
		}
	};

	const saveChanges = async () => {
		console.log(user);
		let action_url = `${baseUrl}/api/blog/${postId}`;
		let action_method = `PUT`;
		let headers = {
			Authorization: `Bearer ${user?.token}`,
			'Content-Type': 'application/json',
		};
		const action_body = {
			title: newTitle,
			content_html: contentHtml,
			content_text: contentText,
			isPublished,
		};
		try {
			setLoading(true);
			setEditError(null);
			if (postId == 'new') {
				action_url = `${baseUrl}/api/blog`;
				action_method = `POST`;
			}
			console.log(
				'Request status: ',
				action_url,
				action_method,
				headers,
				action_body
			);
			const res = await fetch(action_url, {
				method: action_method,
				headers,
				body: JSON.stringify(action_body),
			});
			const parsed = await res.json();
			if (parsed.status == 'success') {
				setNewTitle(parsed.data.post.title);
				setContentHtml(parsed.data.post.content_html);
				setContentText(parsed.data.post.content_text);
				setIsPublished(parsed.data.post.isPublished);
			} else {
				setEditError(
					`Bład podczas próby zapisu zmian: "${parsed.message}"`
				);
			}
			setLoading(false);
		} catch (err) {
			setEditError(`Bład podczas próby zapisu zmian: "${err}"`);
			console.log(edditError);
			setLoading(false);
		}
	};

	const handleEditorOutput = (e: any) => {
		setContentHtml(e.html);
		setContentText(e.text);
	};

	return loading ? (
		<h1>loading...</h1>
	) : (
		<div className={styles.edit_post__container}>
			<div className={styles.edit_post__title_bar}>
				<h1>edytuj post</h1>
				<div className={styles.edit_post__controls}>
					<button
						onClick={reset}
						className={styles.edit_post__back_btn}
					>
						<ArrowBigLeft />
						<span>Powrót</span>
					</button>

					<button
						onClick={reset}
						className={styles.edit_post__delete_btn}
					>
						<Trash2 />
					</button>

					<button
						onClick={saveChanges}
						className={styles.edit_post__save_btn}
					>
						<Save />
						<span>Zapisz</span>
					</button>
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
					onChange={handleEditorOutput}
					original_html={contentHtml}
				/>
			</div>
		</div>
	);
};

export default EditBlog;
