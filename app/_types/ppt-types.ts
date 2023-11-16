export interface IPost {
	_id: string;
	title: string;
	content_html: string;
	snippet: string;
	author: string;
	slug: string;
	image?: string;
	createdAt: Date;
}
