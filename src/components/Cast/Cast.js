import React from "react";

const Cast = ({ items }) => {
  console.log(items);

  return (
    <>
      {items.map(item => (
        <li key={item.cast_id}>
          <img src={`${item.poster_path}`} alt="" />
          <p>{item.name}</p>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </>
  );
};

export default Cast;
