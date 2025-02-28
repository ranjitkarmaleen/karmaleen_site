import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import CommonBlogDetails from "@/components/Blog/CommonBlogDetails";
import blogsData from "@/components/Blog/blogData";



const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the blog data based on ID
  const blogData = blogsData.find(blog => blog.id == id);
  return (
    <>
      <Navbar />
      {blogData ? <CommonBlogDetails blogData={blogData} /> : <p>Blog not found</p>}
      <Footer />
    </>
  );
};

export default BlogDetails;
