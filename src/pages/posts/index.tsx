import AllPosts from '@/components/posts/all-posts';
import { Post } from '@/components/types/post';
import Head from 'next/head';
import React, { FC } from 'react'
import { getAllPosts } from '../../../lib/posts.util';

interface AllPostsPageProps {
   posts: Post[]
}



const dummy_posts: Post[] = [
    {slug:'getting-started-with-nextjs1', title:'Getting started with nextjs', image:'getting-started-nextjs.png', 
    excerpt:'NextJS is react framework for building full stack production ready apps that suppoet SSR by default', date:'01-28-2023'},
    {slug:'getting-started-with-nextjs2', title:'Getting started with nextjs', image:'getting-started-nextjs.png', 
    excerpt:'NextJS is react framework for building full stack production ready apps that suppoet SSR by default', date:'01-28-2023'},
    {slug:'getting-started-with-nextjs3', title:'Getting started with nextjs', image:'getting-started-nextjs.png', 
    excerpt:'NextJS is react framework for building full stack production ready apps that suppoet SSR by default', date:'01-28-2023'},
    {slug:'getting-started-with-nextjs4', title:'Getting started with nextjs', image:'getting-started-nextjs.png', 
    excerpt:'NextJS is react framework for building full stack production ready apps that suppoet SSR by default', date:'01-28-2023'},
    {slug:'getting-started-with-nextjs5', title:'Getting started with nextjs', image:'getting-started-nextjs.png', 
    excerpt:'NextJS is react framework for building full stack production ready apps that suppoet SSR by default', date:'01-28-2023'},
    {slug:'getting-started-with-nextjs6', title:'Getting started with nextjs', image:'getting-started-nextjs.png', 
    excerpt:'NextJS is react framework for building full stack production ready apps that suppoet SSR by default', date:'01-28-2023'},
    
]

const AllPostsPage: FC<AllPostsPageProps> = ({ posts  }) => {
  return (
    <>
    <Head>
      <title>All Posts</title>
      <meta
        name='description'
        content='A list of all programming-related tutorials and posts!'
      />
    </Head>
    <AllPosts posts={posts} />
  </>
  )
}


export function getStaticProps() {
    const allPosts = getAllPosts()
      return {
        props: {
          posts: allPosts,
        },
      };
    }

    

export default AllPostsPage;