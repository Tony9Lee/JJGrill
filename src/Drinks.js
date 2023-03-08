import React from "react";

const Drinks = ({ drinks }) => {
  return (
    <div className="section-center">
      {drinks.map((drink) => {
        const { id, title, img, desc, price } = drink;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="drinks-info">
              <header>
                <h5>{title}</h5>
              </header>
              <div className="item-text-price-container">
                <div className="item-text">
                  {desc.split("\n").map((drink, index) => (
                    <React.Fragment key={index}>
                      {drink}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
                <div className="drinks-price">
                  <h5>{price}</h5>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Drinks;
