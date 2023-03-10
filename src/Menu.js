import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h5>{title}</h5>
              </header>
              <div className="item-text-price-container">
                <div className="item-text">
                  {desc.split("\n").map((item, index) => (
                    <React.Fragment key={index}>
                      {item}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
                <div className="item-price">
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

export default Menu;