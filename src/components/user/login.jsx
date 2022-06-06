import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";

import { useForm } from "react-hook-form";
import api from "../../services/api";

const Login = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    const user = {
      // username: this.state.
      email: data.email,
      password: data.password,
      userName: data.userName,
      role: ["user"],
    };

    console.log(data);

    // alert(JSON.stringify(data));
    api.post(`api/auth/signin`, { user }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <Header />

      {/* ========================= SECTION CONTENT ========================= */}
      <section
        className="section-conten padding-y"
        style={{ minHeight: "84vh" }}
      >
        {/* ============================ COMPONENT LOGIN   ================================= */}
        <div
          className="card mx-auto"
          style={{ maxWidth: "380px", marginTop: "100px" }}
        >
          <div className="card-body">
            <h4 className="card-title mb-4">Đăng nhập</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <a
                href="https://vi-vn.facebook.com/"
                className="btn btn-facebook btn-block mb-2"
              >
                {" "}
                <i className="fab fa-facebook-f" /> &nbsp; Đăng nhập bằng
                Facebook
              </a>
              <a
                href="https://accounts.google.com/"
                className="btn btn-google btn-block mb-4"
              >
                {" "}
                <i className="fab fa-google" /> &nbsp; Đăng nhập bằng Google
              </a>
              <div className="form-group">
                <input
                  {...register("userName", { required: true })}
                  type="text"
                  className="form-control"
                  placeholder="Tên tài khoản"
                />
                {errors.userName && <p>Vui lòng nhập tên tài khoản</p>}
              </div>{" "}
              {/* form-group// */}
              <div className="form-group">
                <input
                  {...register("password", { required: true })}
                  className="form-control"
                  type="password"
                  placeholder="Mật khẩu"
                />
                {errors.password && <p>Vui lòng nhập mật khẩu</p>}
              </div>{" "}
              {/* form-group// */}
              <div className="form-group">
                <a href="#" className="float-right">
                  Quên mật khẩu ?
                </a>
                <label className="float-left custom-control custom-checkbox">
                  {" "}
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                  />{" "}
                  <div className="custom-control-label"> Lưu lại </div>{" "}
                </label>
              </div>{" "}
              {/* form-group form-check .// */}
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  {" "}
                  Đăng nhập
                </button>
              </div>{" "}
              {/* form-group// */}
            </form>
          </div>{" "}
          {/* card-body.// */}
        </div>{" "}
        {/* card .// */}
        <p className="text-center mt-4">
          Không có tài khoản ?{" "}
          <Link exact to="/register">
            Đăng ký
          </Link>
        </p>
        <br />
        <br />
        {/* ============================ COMPONENT LOGIN  END.// ================================= */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      <Footer />
    </div>
  );
};

export default Login;
