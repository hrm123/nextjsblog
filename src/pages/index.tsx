import '@/styles/globals.css'
import Hero from "@/components/home-page/hero";
import { Fragment, useEffect } from "react";
import FeaturedPosts from '@/components/home-page/featured';
import { Post } from '@/components/types/post';


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

function HomePage(){
    useEffect(()=>{
        document.getElementById('__next')?.classList.add('nextElementStyle')
    })

    return(
        <section className="min-w-full h-full md:col-count-2 col-gap-8">
            <section className="flex-col">
                <Hero />
                <FeaturedPosts posts={dummy_posts} />
            </section>
        </section>
    )
}

export default HomePage