import '@/styles/globals.css'
import Hero from "@/components/home-page/hero";
import { Fragment, useEffect } from "react";
import FeaturedPosts from '@/components/home-page/featured';
import { Post } from '@/components/types/post';
import { getFeaturedPosts } from '../../lib/posts.util';


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

function HomePage({posts}: {posts: any}){
    useEffect(()=>{
        document.getElementById('__next')?.classList.add('nextElementStyle')
    })

    return(
        <section className="min-w-full h-full md:col-count-2 col-gap-8">
            <section className="flex-col">
                <Hero />
                <FeaturedPosts posts={posts} />
            </section>
        </section>
    )
}


export function getStaticProps(){
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 60 // prod app will refresh fetch posts every 60 seconds
    }
}

export default HomePage