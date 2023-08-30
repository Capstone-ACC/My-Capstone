import React from 'react';

export default function Filter({ products, search }) {
  const filteredItems = products.filter((row) => {
    if (search === "") {
      return true;
    } else {
      return row.title.toLowerCase().includes(search.toLowerCase());
    }
  });

  return (
    <div className="filtered-container">
      {filteredItems.map((row) => (
        <div className="filtered-item">
          <img src={row.image} alt={row.title} className="filtered-image" />
          <h5>{row.title.substring(0, 20)}</h5>
          <span className="filtered-name">${row.price}</span>
        </div>
      ))}
    </div>
  )
}