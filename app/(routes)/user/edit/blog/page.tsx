'use client';

import Tiptap from '@/app/_components/user/Tiptap';
import React from 'react';
import styles from '@/app/_styles/user.module.scss';

const temporaryText = 'ljhg ljhg kjhg jhg jhg ljhg ljhg ljh';

const EditBlog = () => {
	return (
		<div>
			<div className={styles.edit_post__container}>
				<h1>Edytuj post</h1>
				<br />
				<Tiptap
					description={temporaryText}
					onChange={(e) => console.log(e)}
				/>
			</div>
		</div>
	);
};

export default EditBlog;
