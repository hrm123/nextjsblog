import React, { FC } from 'react'
import Grid from '../posts/grid';
import { Post } from '../types/post';

interface FeaturedPostsProps {
  posts: Post[]
}

const FeaturedPosts: FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <section>
        <h2>Features Posts</h2>
        <Grid posts={posts} />
    </section>
  )
}

export default FeaturedPosts;