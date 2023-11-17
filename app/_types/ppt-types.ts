export interface IPost {
	_id: string;
	title: string;
	content_html: string;
	content_text: string;
	author: string | { _id: string; name: string };
	slug: string;
	image?: string;
	createdAt: Date;
	updatedAt: Date;
}
