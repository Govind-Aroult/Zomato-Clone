import React, { useState } from "react";
import RatingReview from "../../components/RatingReview/RatingReview"; // add you floder path properly

function Star() {
  const [rating, setRating] = useState(0);
  return (
    <>
      <div>
        <RatingReview rating={rating} setRating={setRating} />
      </div>
    </>
  );
}
export default Star;
