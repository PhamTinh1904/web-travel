import React, { useEffect, useRef, useState } from "react";
import "./search-bar.scss";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "../../axios";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState([]);

  const locationRef = useRef("");
  const dayRef = useRef(0);
  const nightRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const day = dayRef.current.value;
    const night = nightRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || day === 0 || night === 0 || maxGroupSize === 0) {
     toast.error('Vui lòng nhập thông tin chuyến đi!')
      return;
    }

    await axios
      .get(
        `/tours/search/getTourBySearch?city=${location}&day=${day}&night=${night}&maxGroupSize=${maxGroupSize}`
      )
      .then((res) => {
        navigate(
          `/tours/search?city=${location}&day=${day}&night=${night}&maxGroupSize=${maxGroupSize}`,
          { state: res.result.data }
          
        );
      })
      .catch((err) => {
        navigate(
          `/tours/search?city=${location}&day=${day}&night=${night}&maxGroupSize=${maxGroupSize}`
        );
      });
  };

  return (
    <Col lg="12">
      <div className="search__bar py-3 px-4">
        <Form className="flex items-cente gap-5">
          <FormGroup className="form__group form__group-fast">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <div>
              <p>Địa điểm</p>
              <input
                type="text"
                placeholder="Bạn muốn đi đâu?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="form__group form__group-fast form__group-fast-mobile">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <div>
              <p>Số ngày</p>
              <input type="text" placeholder="0" ref={dayRef} />
            </div>
          </FormGroup>
          <FormGroup className="form__group form__group-fast form__group-fast-mobile">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <div>
              <p>Số đêm</p>
              <input type="text" placeholder="0 " ref={nightRef} />
            </div>
          </FormGroup>
          <FormGroup className="form__group">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <div>
              <p>Số người</p>
              <input type="text" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span
            className="search__btn flex items-center px-3"
            onClick={searchHandler}
          >
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
