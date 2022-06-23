import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer_admin from "../footer_admin";
import Head from "../head";
import Navbar_admin from "../navbar_admin";
import Sidebar_admin from "../sidebar_admin";

import Edit_Product from "./edit_product";
import Add_Product from "./add_product";
import HTMLReactParser from "html-react-parser";
import { Link, NavLink } from "react-router-dom";

const Product_crud = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8080/api/products");
    setProducts(result.data.reverse());
  };

  const deleteProducts = (productId) => {
    axios
      .delete("http://localhost:8080/api/products/" + productId)
      .then((result) => {
        loadProducts();
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };

  return (
    <div>
      <Head />
      <div className="wrapper">
        <Navbar_admin />

        <Sidebar_admin />

        <div className="content-wrapper">
          <section className="content">
            <div className="py-4">
              <h3 style={{ fontWeight: "bold" }} class="mb-3 text-center">
                Quản Lý Sản Phẩm
              </h3>

              <NavLink
                className="btn btn-outline-success"
                exact
                to="/add_product"
              >
                Thêm mới
              </NavLink>

              {/* <div class="row flex-lg-nowrap">
                <div class="text-center px-xl-3">
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    data-toggle="modal"
                    data-target="#user-form-modal"
                  >
                    Thêm mới
                  </button>
                </div>
              </div> */}

              <table class="table border shadow">
                <thead class="thead-primary">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Tên Sản Phẩm</th>
                    <th scope="col">Hình Sản Phẩm</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Thương hiệu</th>
                    <th scope="col">Danh mục</th>
                    <th scope="col">Xuất xứ</th>
                    <th scope="col">Giá gốc</th>
                    <th scope="col">Giảm giá</th>
                    <th scope="col">Bảo hành</th>
                    <th>Tính Năng</th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice(0, 10).map((product, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{product.name}</td>
                      <td>
                        <img src={product.image} width="125" height="100" />
                      </td>
                      <td>{HTMLReactParser(product.short_description)}</td>
                      <td>{product.trademark}</td>
                      <td>{product.cate}</td>
                      <td>{product.origin}</td>
                      <td>{product.price.toLocaleString()}₫</td>
                      <td>{product.discount}%</td>
                      <td>{product.insurance}</td>
                      <td>
                        <td
                          style={{
                            borderTop: 0,
                            paddingTop: 0,
                            paddingLeft: 0,
                          }}
                          class="text-center align-middle"
                        >
                          <div
                            style={{ fontSize: 18 }}
                            class="btn-group align-top"
                          >
                            <Link
                              class="btn btn-sm btn-outline-secondary badge"
                              exact
                              to={`/edit_product/${product.id}`}
                              // data-toggle="modal"
                              // data-target="#edit-form-modal"
                            >
                              <i class="fa fa-edit"></i>
                            </Link>
                            <button
                              class="btn btn-sm btn-outline-secondary badge"
                              type="button"
                              onClick={() => deleteProducts(product.id)}
                              href="#"
                            >
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </td>
                        {/* <Edit_Product /> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <nav className="mb-4" aria-label="Page navigation sample">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      Trước
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
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Kế tiếp
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </div>

        <Footer_admin />

        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
      {/* ./wrapper */}
    </div>
  );
};

export default Product_crud;
