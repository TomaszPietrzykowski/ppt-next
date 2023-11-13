'use client';

import React from 'react';
import styles from '@/app/_styles/shared.module.scss';

interface IProps {
	children: React.ReactNode;
	pressed: boolean;
	onPressedChange: () => {};
}

const EditorToggle = ({ children, onPressedChange, pressed }: IProps) => {
	return (
		<div
			className={
				pressed ? styles.editor_toggle_active : styles.editor_toggle
			}
			onClick={onPressedChange}
		>
			{children}
		</div>
	);
};

export default EditorToggle;
