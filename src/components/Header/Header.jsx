import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./Header.scss";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Button, Container, Row } from "reactstrap";

import logo from "../../assets/tour-images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center lg:h-20 w-100" ref={headerRef}>
      <Container>
        <div className="nav__wrapper flex items-center justify-between">
          <div
            className="logo cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              className=" h-1/5 w-1/2 lg:w-full lg:max-h-16 min-h-20"
              src={logo}
            />
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex menu lg:items-center gap-5 mb-0">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "active__link" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right flex items-center gap-4">
            <div className="nav__btn flex items-center gap-4">
              {user ? (
                <>
                  <div
                    className="flex items-center relative"
                    onClick={toggleOpen}
                  >
                    <img
                      className="mr-2 w-10 rounded-full"
                      src="https://antimatter.vn/wp-content/uploads/2022/12/anh-avatar-facebook-vo-danh-avt-fb-cho-nu-1.jpg"
                    />
                    {isOpen && (
                      <ul className="user__menu absolute left-0 pl-0 mt-2 bg-white shadow-md">
                        <li className=" font-bold">{user.userName}</li>
                        <li>
                          <Link>Cập nhật thông tin</Link>
                        </li>
                        <li>
                          <Link>Cài đặt</Link>
                        </li>
                        <li>
                          {" "}
                          <Button className="btn btn-dark" onClick={logout}>
                            Logout
                          </Button>
                        </li>
                      </ul>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <Button className="btn secondary__btn">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className="primary__btn">
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </div>
            <span className=" lg:hidden" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
  