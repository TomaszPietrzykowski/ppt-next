import React from 'react';
import styles from '../../_styles/blog.module.scss';
import PostCard from './PostCard';
import { IPost } from '@tpp-nx/shared-types';

interface IProps {
  posts: Array<IPost>;
}

const PostsGrid: React.FC<IProps> = ({ posts }) => {
  return (
    <ul className={styles.posts__grid}>
      {posts.map((post: IPost) => (
        <PostCard key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
