import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import BlogGridPost from "@/components/Blog/BlogGridPost";
import CommonBanner from "@/components/Common/CommonBanner";

const Blog = () => {
  return (
    <>
      <Navbar />

      <CommonBanner title="Blogs" />

      <BlogGridPost />

      <Footer />
    </>
  );
};

export default Blog;
