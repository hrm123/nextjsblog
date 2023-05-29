import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'
import { Post } from '../types/post';

interface PostItemProps {
    post: Post
}

const PostItem: FC<PostItemProps> = ({ post   }) => {
    const {title, image, excerpt, date, slug} = post
    const dateBlog = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year:'numeric'
    })

    
    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`
    // console.log({imagePath})

  return (
    <li className="p-3 m-3 shadow-small border-gray-600 border-2">
        <Link legacyBehavior href={linkPath}>
            <a>
                <div>
                    <Image src={imagePath} alt={title} width={300} height={200} />
                </div>
                <div>
                    <h3>{title}</h3>
                    <time>{dateBlog}</time>
                    <p>{excerpt}</p>
                </div>
                
            </a>
        </Link>
    </li >
  )
}

export default PostItem;