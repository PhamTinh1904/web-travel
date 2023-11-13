import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";



const RatingReviews = (rating, onChange) => {
  const [value, setValue] = useState(rating)

  const handleRatingChange = (newRating)=>{
    setValue(newRating)
    onChange(newRating)
  }

  return (
    <Box sx={{ "& > lenged": { mt: 2 } }}>
      <Rating
        name="no-value" 
        value={value} 
        onChange={handleRatingChange}
      />
    </Box>
  );
};

export default RatingReviews;
