import React, { FC } from 'react'
import PostItem from './post-item';
import { Post } from '../types/post';

interface  GridProps {
  posts: Post[]
}

const Grid: FC<GridProps> = ({ posts  }) => {


  return (
    <ul className='grid list-none m-0 p-0 grid-cols-auto20 align-middle'>
        {posts.map((post:Post) => <PostItem  key={post.slug} post={post} />)}
    </ul>
  )
}

export default Grid;