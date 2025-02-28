import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";
import Image from "next/image";
import blogsData from "@/components/Blog/blogData";

const BlogGridPost = () => {



  return (
    <>
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="row justify-content-center ">
            {blogsData?.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div className="single-blog-post" >
                  <div className="blog-image">
                    <Link href={`/blog/blog-details/${post.id}`}>
                      <Image src={post.image} alt={post.title} width={860} height={700} />
                    </Link>
                    {/* <div className="date">
                      <Icon.Calendar /> {post.date}
                    </div> */}
                  </div>
                  <div className="blog-post-content">
                    <h3>
                      <Link href={`/blog/blog-details/${post.id}`}>{post.title}</Link>
                    </h3>
                    {/* <span>
                      By <Link href="#">Admin</Link>
                    </span> */}
                    {/* <p>{post.content}</p> */}
                    <Link href={`/blog/blog-details/${post.id}`} className="mt-3 read-more-btn">
                      Read More <Icon.ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {/* <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Prev
                      </a>
                    </li>

                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogGridPost;
