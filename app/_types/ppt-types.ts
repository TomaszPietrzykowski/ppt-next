export interface IPost {
	_id: string;
	title: string;
	content: string;
	snippet: string;
	author: string;
	slug: string;
	image?: string;
	createdAt: Date;
}
