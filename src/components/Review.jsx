import React from "react";

const Star = () => {
  return <img src="/images/icon-star.svg" alt="Star Icon"/>;
};
const stars = (
  <span className="stars">
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
  </span>
);

const reviews = [
  { id: 1, type: "Reviews " },
  { id: 2, type: "Report Guru" },
  { id: 3, type: "BestTech " },
];

const reviewsElement = reviews.map((item) => {
  return (
    <div key={item.id} className="review">
      {stars}
      <p>Rated 5 Stars in {item.type} </p>
    </div>
  );
});

const Review = () => {
  return <section className="reviews">{reviewsElement}</section>;
};

export default Review;

// Rated 5 Stars in Reviews
// Rated 5 Stars in Report Guru
// Rated 5 Stars in BestTech
