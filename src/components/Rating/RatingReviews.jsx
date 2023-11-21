import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const RatingReviews = ({ onRatingChange, initialRating }) => {
  const [value, setValue] = useState(initialRating);

  const handleRatingChange = (newValue) => {
    setValue(newValue);
    // Gọi callback function để thông báo giá trị mới về component cha
    onRatingChange(newValue);
  };

  return (
    <Box sx={{ "& > lenged": { mt: 2 } }}>
      <Rating
        name="no-value"
        value={value}
        onChange={(e, newValue) => {
          handleRatingChange(newValue);
        }}
      />
    </Box>
  );
};

export default RatingReviews;
