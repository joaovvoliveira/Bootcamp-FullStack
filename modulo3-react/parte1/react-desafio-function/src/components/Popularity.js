import React from "react";

const stars = {
  empty: "☆",
  full: "★",
};
const MAX_STARS = 10;
export default function Popularity({ value }) {
  const emptyStars = stars.empty.repeat(MAX_STARS - value);
  const fullStars = stars.full.repeat(value);
  return (
    <div>
      {fullStars}
      {emptyStars}
    </div>
  );
}
