import React, { useEffect, useRef, useState } from "react";
import "./search-bar.scss";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "../../axios";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState([]);

  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === 0 || maxGroupSize === 0) {
      alert("Please select");
      return;
    }

    await axios
      .get(
        `/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
      )
      .then((res) => {
        navigate(
          `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
          { state: res.result.data }
        );
      })
      .catch((err) => {
        navigate(
          `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
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
              <p>Location</p>
              <input
                type="text"
                placeholder="Where are going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="form__group form__group-fast form__group-fast-mobile">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <div>
              <p>Distance</p>
              <input
                type="text"
                placeholder="Distance k/m"
                ref={distanceRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="form__group">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <div>
              <p>Max people</p>
              <input
                type="text"
                placeholder="0"
                ref={maxGroupSizeRef}
              />
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
