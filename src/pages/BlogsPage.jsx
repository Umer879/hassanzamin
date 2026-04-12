import React from 'react'
import Banner from '@/common/Banner/Banner'
import BlogSection from '@/components/blogs/Blogs'
const BlogsPage = () => {
  return (
    <div>
      <Banner title={"Our Blogs"} current={"blogs"} />
      <BlogSection />
    </div>
  )
}

export default BlogsPage
