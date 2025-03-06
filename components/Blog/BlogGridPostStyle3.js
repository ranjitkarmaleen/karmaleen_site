import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";
import Image from "next/image";
import caseData from "./caseStudyData";

const BlogGridPost3 = () => {
  return (
    <>
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="row">
            {caseData?.map((post) => (
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link href={`/case-studies/case-details/${post.id}`}>
                      <Image
                        src={post.image}
                        alt="image"
                        width={860}
                        height={700}
                      />
                    </Link>
                  </div>

                  <div className="post-content">
                    {/* <ul className="post-meta">
                      <li>
                        <Link href="#">Admin</Link>
                      </li>
                      <li>August 15, 2022</li>
                    </ul> */}
                    <h3>
                      <Link href={`/case-studies/case-details/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <Link href={`/case-studies/case-details/${post.id}`} className="read-more-btn">
                      Read More <Icon.PlusCircle />
                    </Link>
                  </div>
                </div>
              </div>
            ))}


            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/blog-details/">
                    <Image
                      src={blogImg2}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>August 15, 2022</li>
                  </ul>
                  <h3>
                    <Link href="/blog/blog-details/">
                      Tips to Protecting Your Business and Family
                    </Link>
                  </h3>

                  <Link href="/blog/blog-details/" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/blog-details/">
                    <Image
                      src={blogImg3}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>August 15, 2022</li>
                  </ul>
                  <h3>
                    <Link href="/blog/blog-details/">
                      Protect Your Workplace from Cyber Attacks
                    </Link>
                  </h3>

                  <Link href="/blog/blog-details/" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/blog-details/">
                    <Image
                      src={blogImg4}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>August 15, 2022</li>
                  </ul>
                  <h3>
                    <Link href="/blog/blog-details/">
                      The security risks of changing package owners
                    </Link>
                  </h3>

                  <Link href="/blog/blog-details/" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/blog-details/">
                    <Image
                      src={blogImg5}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>August 15, 2022</li>
                  </ul>
                  <h3>
                    <Link href="/blog/blog-details/">
                      Tips to Protecting Your Business and Family
                    </Link>
                  </h3>

                  <Link href="/blog/blog-details/" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/blog-details/">
                    <Image
                      src={blogImg6}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>August 15, 2022</li>
                  </ul>
                  <h3>
                    <Link href="/blog/blog-details/">
                      Protect Your Workplace from Cyber Attacks
                    </Link>
                  </h3>

                  <Link href="/blog/blog-details/" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div> */}

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
          </div>
        </div>

        {/* Shape Images */}
        {/* <div className="shape2 rotateme">
          <Image src={shape1} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape6 rotateme">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <Image src={shape1} alt="shape" width={22} height={22} />
        </div> */}
      </div>
    </>
  );
};

export default BlogGridPost3;
