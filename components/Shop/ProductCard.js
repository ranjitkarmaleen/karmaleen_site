import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import AddToCartBtn from "./AddToCartBtn";
import Image from "next/image"; 

const ProductCard = () => {
  const products = useSelector((state) => state.products);

  // console.log(products)

  return (
    <>
      <div className="shop-area ptb-80">
        <div className="container">
          <div className="woocommerce-topbar">
            <div className="row align-items-center">
              <div className="col-lg-9 col-md-7 col-sm-7">
                <div className="woocommerce-result-count">
                  <p>Showing 1-8 of 14 results</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-sm-5">
                <div className="woocommerce-topbar-ordering">
                  <select className="form-select">
                    <option value="1">Sort by Popularity</option>
                    <option value="2">Sort by Average Rating</option>
                    <option value="3">Sort by Latest</option>
                    <option value="4">Sort by price: Low to High</option>
                    <option value="5">Sort by price: High to Low</option>
                    <option value="6">Sort by New</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center">
            {products.map((product) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={product.id}>
                <div className="single-products">
                  <div className="products-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={262}
                      height={320}
                    />

                    <ul>
                      <li>
                        <button type="button">
                          <Icon.Search />
                        </button>
                      </li>
                      <li>
                        <button type="button">
                          <Icon.Heart />
                        </button>
                      </li>
                      <li>
                        <Link
                          href="/products/[id]"
                          as={`/products/${product.id}`}
                        >
                          <Icon.Link />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="products-content">
                    <h3>
                      <Link
                        href="/products/[id]"
                        as={`/products/${product.id}`}
                      >
                        {product.name}
                      </Link>
                    </h3>
                    
                    <span>${product.price}</span>

                    <ul>
                      <li>
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <i className="flaticon-star-1"></i>
                      </li>
                    </ul>

                    <AddToCartBtn {...product} />
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="pagination-area">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        Prev
                      </Link>
                    </li>

                    <li className="page-item active">
                      <Link className="page-link" href="#">
                        1
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link className="page-link" href="#">
                        2
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link className="page-link" href="#">
                        3
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link className="page-link" href="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
