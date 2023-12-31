import React, {useContext, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../scss/Login.scss";
import loginImg from "../assets/tour-images/login.png";
import userIcon from "../assets/tour-images/user.png";
import { AuthContext } from "./../context/AuthContext";
import axios from "../axios"

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({type: 'LOGIN_START'})

    try {
      const res = await axios.post('/auth/login', credentials)

      if(!res.success) alert(res.message)

      dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
      navigate('/')
    } catch (error) {
      dispatch({type: 'LOGIN_FAILURE', payload:error.message})
    }
    

  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container md:flex justify-between shadow mt-24">
              <div className="login__img w-4/5 m-auto md:w-3/5">
                <img className="" src={loginImg} alt="" />
              </div>

              <div className="login__form lg:w-2/5 relative bg-secondaryy">
                <div className="user__img w-20 h-20 absolute">
                  <img className=" w-full" src={userIcon} alt="" />
                </div>
                <h2 className=" font-medium text-center mb-3 text-white">Đăng nhập</h2>
                <Form onSubmit={handleClick}>
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
                    Đăng nhập
                  </Button>
                </Form>
                <p className=" text-sm text-white mt-6">
                  Bạn chưa có tài khoản? <Link className=" no-underline text-gray-500 ml-1 font-medium" to="/register">Tạo</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
