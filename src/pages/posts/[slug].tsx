import PostContent from '@/components/posts/post-detail/post-content';
import React, { FC } from 'react'
import { getAllPosts, getAllPostsFiles, getPostDetails } from '../../../lib/posts.util';

interface PostDetailPageProps {
  postDetail: any;
}

const PostDetailPage: FC<PostDetailPageProps> = ({  postDetail }) => {
  let {excerpt, isFeatured, ...rest} = postDetail;
  return (
    <PostContent post={rest} />
  )
}

export function getStaticPaths() {
  const allFileNames = getAllPostsFiles()
  const slugs = allFileNames.map((fileName:string) => fileName.replace(/\.md$/, '') )
  return{
    paths:  slugs.map((slug:any) => ({params: {slug}})),
    fallback: false
  }
}

export function getStaticProps(context: any) {
  const {params} = context;
  const {slug} = params;
  const postDetail = getPostDetails(slug);
  return {
    props: {
      postDetail
    },
    revalidate: 600 // if we update markdown file (without deployment) we still get updated details every 10 minutes
  }
}

export default PostDetailPage;