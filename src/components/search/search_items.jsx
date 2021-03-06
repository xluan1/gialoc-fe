import axios from "axios";
import React, { useEffect, useState } from "react";
import { generatePath, Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";
import Subscribe from "../home/subscribe";

const Search_items = () => {
  const [search, setSearch] = useState("");
  const productSearch = `http://localhost:8080/api/search?name=${search}`;
  const [products, setProducts] = useState([]);

  const useNavigateParams = () => {
    const navigate = useNavigate();

    return (url, params) => {
      const path = generatePath(":url?:queryString", {
        url,
        queryString: params,
      });
      navigate(path);
    };
  };

  const navigate = useNavigateParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(productSearch)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    navigate("/search_items", `key = ${encodeURIComponent(search)}`);
  };

  //---------------------------------------------------------------------------------

  const [brand, setBrand] = useState([]);

  const getBrand = () =>
    axios.get("http://localhost:8080/api/brand").then((res) => {
      console.log(res.data);
      setBrand(res.data);
    });
  useEffect(() => {
    getBrand();
  }, []);

  return (
    <div>
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3 col-md-12">
                <Link to={"/"} className="brand-wrap">
                  <img
                    style={{ marginLeft: "110px" }}
                    className="logo"
                    src="/assets/images/logo2.png"
                  />
                </Link>
                {/* brand-wrap.// */}
              </div>
              <div className="col-xl-6 col-lg-5 col-md-6">
                <form action="#" className="search-header">
                  <div className="input-group w-100">
                    <select
                      className="custom-select border-right"
                      name="category_name"
                    >
                      <option value>T???t c??? c??c lo???i</option>
                      <option value="codex">?????c bi???t</option>
                      <option value="comments">T???t nh???t</option>
                      <option value="content">L??u ?????i</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div
                      className="input-group-append"
                      style={{ margin: "-1px" }}
                    >
                      <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                      >
                        <i className="fa fa-search" /> T??m ki???m
                      </button>
                    </div>
                  </div>
                </form>{" "}
                {/* search-wrap .end// */}
              </div>{" "}
              {/* col.// */}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header mr-3">
                    <Link to={"../login"} className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-user" />
                        <span className="notify">3</span>
                      </div>
                      <small className="text"> Th??ng tin c?? nh??n </small>
                    </Link>
                  </div>
                  <div className="widget-header mr-3">
                    <a href="#" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-comment-dots" />
                        <span className="notify">1</span>
                      </div>
                      <small className="text"> Tin nh???n </small>
                    </a>
                  </div>
                  <div className="widget-header mr-3">
                    <a href="#" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-store" />
                      </div>
                      <small className="text"> ????n h??ng </small>
                    </a>
                  </div>
                  <div className="widget-header">
                    <Link to={"../Shopping_cart"} className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-shopping-cart" />
                        <span className="notify"></span>
                      </div>
                      <small className="text"> Gi??? h??ng </small>
                    </Link>
                  </div>
                </div>{" "}
                {/* widgets-wrap.// */}
              </div>{" "}
              {/* col.// */}
            </div>{" "}
            {/* row.// */}
          </div>{" "}
          {/* container.// */}
        </section>{" "}
        {/* header-main .// */}
        <nav className="navbar navbar-main navbar-expand-lg border-bottom">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link" data-toggle="dropdown" to={"/"}>
                    {" "}
                    <i /> Trang ch???{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"../all_category"} className="nav-link">
                    T???t c??? danh m???c
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/introduce">
                    Gi???i thi???u B-Shop
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-md-auto">
                <li className="nav-item">
                  <Link to={"../administration"} className="nav-link">
                    Qu???n tr???
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    T???i ???ng d???ng
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="http://example.com"
                    data-toggle="dropdown"
                  >
                    Ti???ng Vi???t
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Ti???ng Anh
                    </a>
                    <a className="dropdown-item" href="#">
                      Ti???ng Nga
                    </a>
                    <a className="dropdown-item" href="#">
                      Ti???ng Ph??p
                    </a>
                    <a className="dropdown-item" href="#">
                      Ti???ng T??y Ban Nha
                    </a>
                  </div>
                </li>
              </ul>
            </div>{" "}
            {/* collapse .// */}
          </div>{" "}
          {/* container .// */}
        </nav>
      </header>{" "}
      {/* section-header.// */}
      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content padding-y">
        <div className="container">
          {/* ============================  FILTER TOP  ================================= */}
          <div className="card mb-3">
            <div className="card-body">
              <ol className="breadcrumb float-left">
                <li className="breadcrumb-item">
                  <Link to={"/"}>Trang ch???</Link>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Danh m???c</a>
                </li>
              </ol>
            </div>{" "}
            {/* card-body .// */}
          </div>{" "}
          {/* card.// */}
          {/* ============================ FILTER TOP END.// ================================= */}
          <div className="row">
            <aside className="col-md-2">
              <article className="filter-group">
                <h6 className="title">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapse_2"
                  >
                    {" "}
                    Th????ng hi???u{" "}
                  </a>
                </h6>
                <div className="filter-content collapse show" id="collapse_2">
                  <div className="inner">
                    {brand.map((brand, id) => (
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">
                          {brand.name}
                          <b className="badge badge-pill badge-light float-right">
                            {brand.quantity}
                          </b>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* inner.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
              <article className="filter-group">
                <h6 className="title">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapse_3"
                  >
                    {" "}
                    Ph???m vi gi??{" "}
                  </a>
                </h6>
                <div className="filter-content collapse show" id="collapse_3">
                  <div className="inner">
                    <input
                      type="range"
                      className="custom-range"
                      min={0}
                      max={100}
                      name
                    />
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>T???i thi???u</label>
                        <input
                          className="form-control"
                          placeholder="0???"
                          type="number"
                        />
                      </div>
                      <div className="form-group text-right col-md-6">
                        <label>T???i ??a</label>
                        <input
                          className="form-control"
                          placeholder="100 tri???u"
                          type="number"
                        />
                      </div>
                    </div>{" "}
                    {/* form-row.// */}
                    <button className="btn btn-block btn-primary">
                      L???c gi??
                    </button>
                  </div>{" "}
                  {/* inner.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
              <article className="filter-group">
                <h6 className="title">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapse_4"
                  >
                    {" "}
                    K??ch th?????c m???t s???{" "}
                  </a>
                </h6>
                <div className="filter-content collapse show" id="collapse_4">
                  <div className="inner">
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light">{"< 29 mm "}</span>
                    </label>{" "}
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> 30 - 34 mm </span>
                    </label>{" "}
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> 35 - 39 mm </span>
                    </label>{" "}
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> 40 - 43 mm </span>
                    </label>{" "}
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light">{"> 44 mm "}</span>
                    </label>
                  </div>{" "}
                  {/* inner.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
              <article className="filter-group">
                <h6 className="title">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapse_5"
                  >
                    {" "}
                    H??nh d???ng m???t s???{" "}
                  </a>
                </h6>
                <div className="filter-content collapse show" id="collapse_5">
                  <div className="inner">
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        defaultChecked
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">Tr??n</div>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">Ch??? nh???t</div>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">Vu??ng</div>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">?????c bi???t</div>
                    </label>
                  </div>{" "}
                  {/* inner.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
              <article className="filter-group">
                <h6 className="title">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="collapse"
                    data-target="#collapse_5"
                  >
                    {" "}
                    {"B??? m??y & n??ng l?????ng"}
                  </a>
                </h6>
                <div className="filter-content collapse show" id="collapse_5">
                  <div style={{ paddingTop: "0" }} className="inner">
                    <label className="custom-control mt-3 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">Pin (Quartz)</div>
                    </label>
                    <label className="custom-control mt-3 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">C?? (Automatic)</div>
                    </label>
                    <label className="custom-control mt-3 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">
                        N??ng l?????ng ??nh s??ng
                      </div>
                    </label>
                    <label className="custom-control mt-3 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">
                        V???a Pin - V???a t??? ?????ng
                      </div>
                    </label>
                    <label className="custom-control mt-3 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">
                        L??n c??t tay (Hand Winding)
                      </div>
                    </label>
                  </div>{" "}
                  {/* inner.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
            </aside>{" "}
            {/* col.// */}
            <main className="col-md-10">
              <header className="mb-3">
                <div className="form-inline">
                  <strong className="mr-md-auto"></strong>
                  <select className="mr-2 form-control">
                    <option>M???i nh???t</option>
                    <option>Xu h?????ng</option>
                    <option>Ph??? bi???n nh???t</option>
                    <option>R??? nh???t</option>
                  </select>
                  <div className="btn-group">
                    <Link
                      to={`../Listing_grid`}
                      className="btn btn-light"
                      data-toggle="tooltip"
                      title="List view"
                    >
                      <i className="fa fa-bars" />
                    </Link>
                    <Link
                      to={`../Listing_large`}
                      className="btn btn-light active"
                      data-toggle="tooltip"
                      title="Grid view"
                    >
                      <i className="fa fa-th" />
                    </Link>
                  </div>
                </div>
              </header>
              {/* sect-heading */}
              {products.map((product, id) => (
                <article className="card card-product-list">
                  <div className="row no-gutters">
                    <aside className="col-md-3">
                      <Link to={`/product/${product.id}`} className="img-wrap">
                        <span className="badge badge-danger"> NEW </span>
                        <img src={product.image} />
                      </Link>
                    </aside>{" "}
                    {/* col.// */}
                    <div className="col-md-6">
                      <div className="info-main">
                        <Link
                          to={`/product/${product.id}`}
                          className="h5 title"
                        >
                          {" "}
                          {product.name}
                        </Link>
                        <div className="rating-wrap mb-2">
                          <ul className="rating-stars">
                            <li
                              style={{ width: "100%" }}
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
                          <div className="label-rating">9/10</div>
                        </div>{" "}
                        {/* rating-wrap.// */}
                        <p className="mb-3">
                          <span className="tag">
                            {" "}
                            <i className="fa fa-check" /> {product.verified}
                          </span>
                          <span className="tag">{product.insurance}</span>
                          <span className="tag">{product.reviews}</span>
                          <span className="tag"> {product.origin} </span>
                        </p>
                        <p>{product.short_description}</p>
                      </div>{" "}
                      {/* info-main.// */}
                    </div>{" "}
                    {/* col.// */}
                    <aside className="col-sm-3">
                      <div className="info-aside">
                        <div className="price-wrap">
                          <span className="h5 price">
                            {product.price.toLocaleString()}???
                          </span>
                          <small className="text-muted">/{product.pair}</small>
                        </div>{" "}
                        {/* price-wrap.// */}
                        <small style={{ color: "#00b517" }}>
                          {product.delivery}
                        </small>
                        <p className="text-muted mt-3">
                          C??ng ty {product.manufacturer}
                        </p>
                        <p className="mt-3">
                          <a href="#" className="btn btn-outline-primary">
                            {" "}
                            <i className="fa fa-envelope" /> Li??n h??? v???i nh??
                            cung c???p
                          </a>
                          <a href="#" className="btn btn-light">
                            <i className="fa fa-heart" /> Th??m v??o m???c y??u th??ch{" "}
                          </a>
                        </p>
                        <label className="custom-control mt-3 custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <div className="custom-control-label">
                            ????nh d???u s???n ph???m
                          </div>
                        </label>
                      </div>{" "}
                      {/* info-aside.// */}
                    </aside>{" "}
                    {/* col.// */}
                  </div>
                </article>
              ))}
              {/* card-product .// */}
              <nav className="mb-4" aria-label="Page navigation sample">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      Tr?????c
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
                      K??? ti???p
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="box text-center">
                <p>B???n ???? t??m th???y nh???ng g?? b???n ??ang t??m ki???m ?</p>
                <a href className="btn btn-light">
                  ????ng
                </a>
                <a href className="btn btn-light">
                  Kh??ng
                </a>
              </div>
            </main>{" "}
            {/* col.// */}
          </div>
        </div>{" "}
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Search_items;
