import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../scss/Login.scss";
import registerImg from "../assets/tour-images/register.png";
import userIcon from "../assets/tour-images/user.png";
import { AuthContext } from "./../context/AuthContext";
import axios from "../axios"



const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: undefined,
    password: undefined,
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  // console.log(dispatch)

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    console.log(credentials)

    try {
      const result = await axios.post('/auth/register', credentials)
      if(!result.success) alert(result.message)

      dispatch({type: 'REGISTER_SUCCESS'})
      navigate('/login')

    } catch (error) {
      alert(error.message)
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container md:flex justify-between shadow mt-24">
              <div className="login__img w-4/5 m-auto md:w-3/5">
                <img className="" src={registerImg} alt="" />
              </div>

              <div className="login__form md:w-2/5 relative bg-secondaryy">
                <div className="user__img w-20 h-20 absolute">
                  <img className=" w-full" src={userIcon} alt="" />
                </div>
                <h2 className=" font-medium text-center mb-3 text-white">
                  Đăng ký
                </h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      required
                      placeholder="Nhập tên người dùng của bạn"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Nhập email của bạn"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      placeholder="Nhập mật khẩu của bạn"
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <Button className="auth__btn" type="submit">
                    Create Account
                  </Button>
                </Form>
                <p className=" text-sm text-white mt-6">
                  Have an account?{" "}
                  <Link
                    className=" no-underline text-gray-500 ml-1 font-medium"
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
