import React from "react";
import Footer from "../home/footer";
import Header from "../home/header";

const Pay_cart = () => {
  return (
    <div>
      <Header />

      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content padding-y">
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title mb-3">Thông tin giao hàng</h4>
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label className="js-check box active">
                    <input
                      type="radio"
                      name="dostavka"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <h6 className="title">Tiêu chuẩn giao hàng</h6>
                    <p className="text-muted">
                      Miễn phí của hàng không trong 20 ngày
                    </p>
                  </label>{" "}
                  {/* js-check.// */}
                </div>
                <div className="form-group col-sm-6">
                  <label className="js-check box">
                    <input
                      type="radio"
                      name="dostavka"
                      defaultValue="option1"
                    />
                    <h6 className="title">Chuyển phát nhanh</h6>
                    <p className="text-muted">Thêm 20.000₫ sẽ tính thêm phí </p>
                  </label>{" "}
                  {/* js-check.// */}
                </div>
              </div>{" "}
              {/* form row.// */}
              <div className="form-row">
                <div className="col form-group">
                  <label>Họ</label>
                  <input type="text" className="form-control" placeholder />
                </div>{" "}
                {/* form-group end.// */}
                <div className="col form-group">
                  <label>Tên</label>
                  <input type="text" className="form-control" placeholder />
                </div>{" "}
                {/* form-group end.// */}
              </div>{" "}
              {/* form-row end.// */}
              <div className="form-row">
                <div className="col form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder />
                </div>{" "}
                {/* form-group end.// */}
                <div className="col form-group">
                  <label>Số điện thoại</label>
                  <input type="text" className="form-control" placeholder />
                </div>{" "}
                {/* form-group end.// */}
              </div>{" "}
              {/* form-row end.// */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Quốc gia</label>
                  <select id="inputState" className="form-control">
                    <option selected>Việt Nam</option>
                    <option>Hoa Kì</option>
                    <option>Uzbekistan</option>
                    <option>Nga</option>
                    <option>Ấn Độ</option>
                    <option>Afganistan</option>
                  </select>
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>Thành phố</label>
                  <input type="text" className="form-control" />
                </div>{" "}
                {/* form-group end.// */}
              </div>{" "}
              {/* form-row.// */}
              <div className="form-group">
                <label>Địa chỉ</label>
                <textarea className="form-control" rows={2} defaultValue={""} />
              </div>{" "}
              {/* form-group// */}
              <form
                role="form"
                style={{ marginLeft: "300px", maxWidth: "380px" }}
              >
                <a
                  href="/payment_success"
                  className="subscribe btn btn-primary btn-block"
                  type="button"
                >
                  {" "}
                  Hoàn tất
                </a>
              </form>
            </div>{" "}
            {/* card-body.// */}
          </div>{" "}
          {/* card .// */}
        </div>{" "}
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      <Footer />
    </div>
  );
};

export default Pay_cart;
