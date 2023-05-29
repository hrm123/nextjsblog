import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'posts')

function getPostDetails(fileName: string){
    const filePath = path.join(postsDirectory, fileName)
    const postFile = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(postFile);
    const postSlug = fileName.replace(/\.md$/, '') // remove file extension
    const postDetails = {
        slug: postSlug,
        ...data,
        content
    }
    return postDetails
}

export function getAllPosts(){
    const postFiles = fs.readdirSync(postsDirectory)
    const allPostDetails = postFiles.map(file => getPostDetails(file))
    return allPostDetails.sort((a: any,b: any) => a.date > b.date ? -1 : 1)
}

export function getFeaturedPosts(){
    return getAllPosts().filter((post:any)  => post.isFeatured)
}