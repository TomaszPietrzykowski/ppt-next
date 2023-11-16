import React from 'react';
import EditBlog from '../../../../../_components/user/EditPost';
import { IPost } from '@/app/_types/ppt-types';

const baseUrl = 'http://localhost:5000';

// Generate segments for both [category] and [product]
export async function generateStaticParams() {
	const res = await fetch(`${baseUrl}/api/blog/`);
	const { data } = await res.json();
	const { posts }: { posts: IPost[] } = data;

	return posts.map((post) => ({ id: post._id }));
}

const EditBlogPage = ({ params: { id } }: { params: { id: string } }) => {
	return <EditBlog postId={id} />;
};

export default EditBlogPage;
