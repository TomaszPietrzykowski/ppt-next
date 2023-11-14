'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from '@/app/_styles/shared.module.scss';
import TiptapToolbar from './TiptapToolbar';

interface IProps {
	description: string;
	onChange: (richText: string) => void;
}

const Tiptap = ({ description, onChange }: IProps) => {
	const editor = useEditor({
		extensions: [StarterKit.configure()],
		content: description,
		editorProps: {
			attributes: {
				class: 'placeholder',
			},
		},
		onUpdate({ editor }) {
			onChange(editor.getHTML());
			console.log(editor.getHTML());
		},
	});

	const html =
		'<h1><strong>Jouw zorgverzekering in 2024</strong></h1><ol><li><p>Wil je je huidige premie en nieuwe premie vergelijken? Klik dan op de button hieronder. Net als elk jaar verandert er in 2024 </p></li><li><p>wat aan jouw zorgverzekering.</p></li></ol><p>We vinden het belangrijk om je </p><ul><li><p>daarover te vertellen. Je vindt de </p></li><li><p>veranderingen in het </p></li><li><p>wijzigingsoverzicht in de bijlage</p></li></ul><p></p';

	return (
		<>
			<button
				onClick={() => {
					editor?.commands.setContent(html);
				}}
			>
				load
			</button>
			<div className={styles.editor_layout}>
				<EditorContent editor={editor} />
				<div className={styles.editor_toolbar_container}>
					<div className={styles.sticky}>
						<TiptapToolbar editor={editor} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Tiptap;
