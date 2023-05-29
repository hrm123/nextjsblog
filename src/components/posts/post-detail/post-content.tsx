import React, { FC } from 'react'
import PostHeader from './post-header';
import { PostDetail } from '@/components/types/post-detail';
import ReactMarkdown  from 'react-markdown';

interface PostContentProps {
  
}

const dummy_post: PostDetail = {
        slug:'getting-started-with-nextjs1', title:'Getting started with nextjs', image:'getting-started-nextjs.png', 
        content: '# This is first post', date:'01-28-2023'
    };

const PostContent: FC<PostContentProps> = ({  }) => {
    const imagePath = `/images/posts/${dummy_post.slug}/${dummy_post.image}`
  return (
    <article className='w-11/12 max-w-5xl m-8 text-base bg-gray-100 rounded-md p-4'>
        <PostHeader title={dummy_post.title} image={imagePath} />
        <ReactMarkdown>{dummy_post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent;