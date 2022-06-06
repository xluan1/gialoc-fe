import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/style.css";

const Apparel = ({ products }: Props) => {
  return (
    <div>
      {/* =============== SECTION 1 =============== */}
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">Casio</h4>
        </header>
        <div className="card card-home-category">
          <div className="row no-gutters">
            <div className="col-md-3">
              <div className="home-category-banner bg-light-orange">
                <h5 className="title">Đồng hồ Casio</h5>
                <p>
                  Là một công ty chế tạo thiết bị điện tử lớn nhất tại Nhật Bản
                  được thành lập từ năm 1946, trụ sở tại Tokyo, Nhật Bản. Hãng
                  được biết đến nhiều nhất bởi các sản phẩm như: đồng hồ, máy
                  tính, thiết bị <br /> âm thanh máy ảnh,.v.v.
                </p>
                <img
                  style={{ top: "155px", right: "-32px" }}
                  src="assets/images/home/CASIO.png"
                  className="img-bg"
                />
              </div>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-9">
              <ul className="row no-gutters bordered-cols">
                {products?.slice(4, 8).map((product, id) => (
                  <div className="col-md-3" style={{ height: "405px" }}>
                    <figure className="card card-product-grid">
                      <div className="img-wrap" style={{ height: "200px" }}>
                        <Link
                          to={`/product/${product.id}`}
                          className="img-wrap"
                        >
                          <img
                            style={{
                              width: "172.2px",
                              height: "180px",
                              marginTop: "20px",
                            }}
                            src={product.image}
                          />
                        </Link>
                        <span className="badge badge-danger"> NEW </span>
                      </div>{" "}
                      {/* img-wrap.// */}
                      <figcaption className="info-wrap">
                        <Link
                          to={`/product/${product.id}`}
                          className="title mb-2"
                          style={{ fontWeight: "bold" }}
                        >
                          {product.name}
                        </Link>
                        <p style={{ color: "red", fontSize: "20px" }}>
                          {product.price_discount.toLocaleString()}₫
                        </p>
                        <div className="price-wrap">
                          <span
                            style={{
                              color: "#969696",
                              textDecorationLine: "line-through",
                            }}
                            className="price"
                          >
                            {product.price.toLocaleString()}₫
                          </span>
                          <small className="text-muted">
                            {""} -{product.discount}%
                          </small>
                          <span
                            style={{
                              padding: 0,
                              border: 0,
                              margin: 0,
                              marginLeft: "63px",
                              color: "#00b517",
                            }}
                            className="tag"
                          >
                            Free ship
                          </span>
                          <i
                            style={{
                              marginLeft: "2px",
                              marginTop: "5px",
                              color: "#00bfa5",
                            }}
                            class="fa fa-truck"
                          ></i>
                        </div>{" "}
                        {/* price-wrap.// */}
                        <hr />
                        <div style={{ display: "flex", marginBottom: "10px" }}>
                          <ul className="rating-stars">
                            <li
                              style={{ width: "91%" }}
                              className="stars-active"
                            >
                              <i className="fa fa-star" />{" "}
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />{" "}
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />{" "}
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />{" "}
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </li>
                          </ul>
                          <p
                            style={{
                              fontSize: "12px",
                              marginTop: "5px",
                              marginLeft: "3px",
                            }}
                          >
                            Đã bán {product.sold}
                          </p>
                        </div>
                        <p className="text-muted">
                          <i className="fa fa-map-marker-alt" />{" "}
                          {product.address}
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </ul>
            </div>{" "}
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
        </div>{" "}
        {/* card.// */}
      </section>
      {/* =============== SECTION 1 END =============== */}
    </div>
  );
};

export default Apparel;
