import React, { FC } from 'react'
import Grid from './grid';
import { Post } from '../types/post';

interface AllPostsProps {
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

const AllPosts: FC<AllPostsProps> = ({ posts }) => {
    console.log({posts})
  return (
    <section>
        <h1>AllPosts</h1>
        <Grid posts={dummy_posts}/>
    </section>
  )
}


/*
export function getStaticProps() {
  
    return {
      props: {
        posts: dummy_posts,
      },
    };
  }
*/
export default AllPosts;