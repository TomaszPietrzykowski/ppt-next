'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from '@/app/_styles/shared.module.scss';
import TiptapToolbar from './TiptapToolbar';
import { useEffect } from 'react';

const html = `<h1><strong>Jouw zorgverzekering in 2024</strong></h1>
<ol>
	<li><p> 2024 </p></li>
	<li><p>wat aan jouw zorgverzekering.</p></li>
</ol>
<p>We vinden het belangrijk om je je huidige premie en nieuwe premie vergelijken. Klik dan op de button hieronder. Net als elk jaar verandert er in</p>
<ul>
<li><p>Daarover te vertellen. Je vindt!</p></li>
<li><p>Veranderingen in het droom.</p></li>
<li><p>Wijzigingsoverzicht in de bijlage</p></li>
</ul>`;

interface IProps {
	description: string;
	onChange: (richText: string) => void;
	original_html?: string;
}

const Tiptap = ({ onChange, original_html }: IProps) => {
	const editor = useEditor({
		extensions: [StarterKit.configure()],
		content: original_html,
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

	return (
		<>
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
