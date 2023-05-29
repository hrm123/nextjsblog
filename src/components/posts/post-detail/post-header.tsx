import Image from 'next/image';
import React, { FC } from 'react'

interface PostHeaderProps {
  title: string,
  image: string
}

const PostHeader: FC<PostHeaderProps> = ({ title, image }) => {
  return (
    <header className="pb-8 bottom-8 border-solid flex flex-col-reverse justify-between align-middle gap-4">
        <h1 className="text-lg text-gray-600 m-0 text-center">{title}</h1>
        <Image className="object-cover w-44 h-28" src={image} alt={title} width={200} height={160}/>
    </header>
  )
}

export default PostHeader;