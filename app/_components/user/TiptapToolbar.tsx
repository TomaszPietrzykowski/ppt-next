'use client';

import React from 'react';
import { Editor } from '@tiptap/react';
import {
	Bold,
	Strikethrough,
	Italic,
	Heading1,
	Heading2,
	Heading3,
	List,
	ListOrdered,
	Quote,
	ImagePlus,
} from 'lucide-react';
import EditorToggle from './EditorToggle';
import styles from '@/app/_styles/shared.module.scss';

const TiptapToolbar = ({ editor }: { editor: Editor | null }) => {
	if (!editor) return null;

	return (
		<div className={styles.editor_toolbar_container}>
			<EditorToggle
				pressed={editor.isActive('bold')}
				onPressedChange={() =>
					editor.chain().focus().toggleBold().run()
				}
			>
				<Bold />
			</EditorToggle>
			<EditorToggle
				pressed={editor.isActive('italic')}
				onPressedChange={() =>
					editor.chain().focus().toggleItalic().run()
				}
			>
				<Italic />
			</EditorToggle>
			<EditorToggle
				pressed={editor.isActive('strike')}
				onPressedChange={() =>
					editor.chain().focus().toggleStrike().run()
				}
			>
				<Strikethrough />
			</EditorToggle>
			<EditorToggle
				pressed={editor.isActive('heading', { level: 2 })}
				onPressedChange={() =>
					editor.chain().focus().toggleHeading({ level: 2 }).run()
				}
			>
				<Heading2 />
			</EditorToggle>
			<EditorToggle
				pressed={editor.isActive('heading', { level: 3 })}
				onPressedChange={() =>
					editor.chain().focus().toggleHeading({ level: 3 }).run()
				}
			>
				<Heading3 />
			</EditorToggle>
			<EditorToggle
				pressed={editor.isActive('bulletList')}
				onPressedChange={() =>
					editor.chain().focus().toggleBulletList().run()
				}
			>
				<List />
			</EditorToggle>
			<EditorToggle
				pressed={editor.isActive('orderedList')}
				onPressedChange={() =>
					editor.chain().focus().toggleOrderedList().run()
				}
			>
				<ListOrdered />
			</EditorToggle>
			<EditorToggle
				pressed={editor.isActive('blockquote')}
				onPressedChange={() =>
					editor.chain().focus().toggleBlockquote().run()
				}
			>
				<Quote />
			</EditorToggle>
			<EditorToggle pressed={false} onPressedChange={() => ({})}>
				<ImagePlus />
			</EditorToggle>
		</div>
	);
};

export default TiptapToolbar;
