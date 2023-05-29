import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostDetails(postIdentifier: string){
    const postSlug = postIdentifier.replace(/\.md$/, '') // remove file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const postFile = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(postFile);
    const postDetails = {
        slug: postSlug,
        ...data,
        content
    }
    return postDetails
}

export function getAllPostsFiles(){
    return fs.readdirSync(postsDirectory)
}

export function getAllPosts(){
    const postFiles = getAllPostsFiles()
    const allPostDetails = postFiles.map(file => getPostDetails(file))
    return allPostDetails.sort((a: any,b: any) => a.date > b.date ? -1 : 1)
}

export function getFeaturedPosts(){
    return getAllPosts().filter((post:any)  => post.isFeatured)
}