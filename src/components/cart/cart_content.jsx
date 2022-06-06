import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart_content = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () =>
    axios.get("http://localhost:8080/api/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <main className="col-md-9">
              <div className="card">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Sản phẩm</th>
                      <th scope="col" width={120}>
                        Số lượng
                      </th>
                      <th scope="col" width={120}>
                        Giá
                      </th>
                      <th scope="col" className="text-right" width={200}>
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.slice(26, 27).map((product, id) => (
                      <tr>
                        <td>
                          <figure className="itemside">
                            <div className="aside">
                              <Link to={`/product/${product.id}`}>
                                <img src={product.image} className="img-sm" />
                              </Link>
                            </div>
                            <figcaption className="info">
                              <Link
                                to={`/product/${product.id}`}
                                className="title mb-2"
                              >
                                {product.name}
                              </Link>
                              <p className="text-muted small">
                                Xuất xứ: {product.origin}, <br />
                                Bảo hành: {product.insurance} <br />
                                Thời gian giao hàng: {product.delivery_time}
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <div className="buttons_added">
                            <input
                              className="minus is-form"
                              type="button"
                              defaultValue="-"
                            />
                            <input
                              aria-label="quantity"
                              className="input-qty"
                              max={10}
                              min={1}
                              name
                              type="number"
                              defaultValue={1}
                            />
                            <input
                              className="plus is-form"
                              type="button"
                              defaultValue="+"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">{product.price}₫</var>
                            <small className="text-muted">
                              {" "}
                              {product.price_discount}₫ chiếc{" "}
                            </small>
                          </div>{" "}
                          {/* price-wrap .// */}
                        </td>
                        <td className="text-right">
                          <a
                            data-original-title="Save to Wishlist"
                            title
                            href
                            className="btn btn-light"
                            data-toggle="tooltip"
                          >
                            {" "}
                            <i className="fa fa-heart" />
                          </a>
                          <a href className="btn btn-light">
                            {" "}
                            Xóa
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="card-body border-top">
                  <a
                    href="/pay_cart"
                    className="btn btn-primary float-md-right"
                  >
                    {" "}
                    Thanh toán <i className="fa fa-chevron-right" />{" "}
                  </a>
                  <a href="/" className="btn btn-light">
                    {" "}
                    <i className="fa fa-chevron-left" /> Tiếp tục mua sắm{" "}
                  </a>
                </div>
              </div>{" "}
              {/* card.// */}
              <div className="alert alert-success mt-3">
                <p className="icontext">
                  <i className="icon text-success fa fa-truck" /> Giao hàng miễn
                  phí trong vòng 1-2 tuần
                </p>
              </div>
            </main>{" "}
            {/* col.// */}
            <aside className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Nhập mã giảm giá (nếu có) ?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name
                          placeholder="Mã giảm giá"
                        />
                        <span className="input-group-append">
                          <button className="btn btn-primary">Áp dụng</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>{" "}
                {/* card-body.// */}
              </div>{" "}
              {/* card .// */}
              <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Tổng giá:</dt>
                    <dd className="text-right"> 568₫</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Chiết khấu:</dt>
                    <dd className="text-right"> 658₫</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Tổng cộng:</dt>
                    <dd className="text-right  h5">
                      <strong>1,650₫</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center mb-3">
                    <img src="assets/images/misc/payments.png" height={26} />
                  </p>
                </div>{" "}
                {/* card-body.// */}
              </div>{" "}
              {/* card .// */}
            </aside>{" "}
            {/* col.// */}
          </div>
        </div>{" "}
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}
    </div>
  );
};

export default Cart_content;
