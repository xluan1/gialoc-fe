import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";
import { useForm } from "react-hook-form";
import api from "../../services/api";

const Register = () => {
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
    api.post(`api/auth/signup`, { user }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <Header />

      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content padding-y">
        {/* ============================ COMPONENT REGISTER   ================================= */}
        <div
          className="card mx-auto"
          style={{ maxWidth: "520px", marginTop: "40px" }}
        >
          <article className="card-body">
            <header className="mb-4">
              <h4 className="card-title">Đăng ký</h4>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Tên tài khoản</label>
                <input
                  {...register("userName", { required: true })}
                  type="text"
                  className="form-control"
                  placeholder
                />
                {errors.userName && <p>Vui lòng nhập tên tài khoản</p>}
              </div>{" "}
              {/* form-group end.// */}
              <div className="form-group">
                <label>Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="form-control"
                  placeholder
                />
                {errors.email && <p>Vui lòng nhập email</p>}
                <small className="form-text text-muted">
                  Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai
                  khác.
                </small>
              </div>{" "}
              {/* form-group end.// */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Tạo mật khẩu</label>
                  <input
                    {...register("password", { required: true })}
                    className="form-control"
                    type="password"
                  />
                  {errors.password && <p>Vui lòng nhập mật khẩu</p>}
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>Lặp lại mật khẩu</label>
                  <input
                    name="repeatPass"
                    className="form-control"
                    type="password"
                    {...register("repeatPass", {
                      validate: (value) =>
                        value === password.current ||
                        "Mật khẩu không trùng khớp",
                    })}
                  />
                  {errors.repeatPass && <p>{errors.repeatPass.message}</p>}
                </div>{" "}
                {/* form-group end.// */}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  {" "}
                  Đăng ký
                </button>
              </div>{" "}
              {/* form-group// */}
              <div className="form-group">
                <label className="custom-control custom-checkbox">
                  {" "}
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                  />{" "}
                  <div className="custom-control-label">
                    {" "}
                    Tôi đồng ý với <a href="#">các điều khoản và điều kiện</a>
                  </div>{" "}
                </label>
              </div>{" "}
              {/* form-group end.// */}
            </form>
          </article>
          {/* card-body.// */}
        </div>{" "}
        {/* card .// */}
        <p className="text-center mt-4">
          Đã Có tài khoản ?{" "}
          <Link exact to="/login">
            Đăng nhập
          </Link>
        </p>
        <br />
        <br />
        {/* ============================ COMPONENT REGISTER  END.// ================================= */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}

      <Footer />
    </div>
  );
};

export default Register;
