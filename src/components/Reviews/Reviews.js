import React from "react";

const Reviews = ({ items }) => (
  <>
    {items.map(item => (
      <li key={item.id}>
        <p>{item.author}</p>
        <p>{item.content}</p>
      </li>
    ))}
  </>
);

export default Reviews;
