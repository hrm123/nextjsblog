import React, { FC } from 'react'
import PostHeader from './post-header';
import { PostDetail } from '@/components/types/post-detail';
import ReactMarkdown  from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import dynamic from 'next/dynamic';


// const SyntaxHighlighterr = dynamic(() => import('react-syntax-highlighter'),{ssr: false})

interface PostContentProps {
  post: PostDetail
}


SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const dummy_post: PostDetail = {
        slug:'getting-started-with-nextjs1', title:'Getting started with nextjs', image:'getting-started-nextjs.png', 
        content: '# This is first post', date:'01-28-2023'
    };

const PostContent: FC<PostContentProps> = ({ post  }) => {
    const imagePath = `/images/posts/${post.slug }/${post.image}`

    
  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div >
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p >{paragraph.children}</p>;
    },

    code(code: any) {
      const { className, children } = code;
      const language = className.split('-')[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className='content w-11/12 max-w-5xl m-8 text-base bg-gray-100 rounded-md p-4'>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent;