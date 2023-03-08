import React, { useState } from "react";
import Menu from "./Menu";
import Drinks from "./Drinks";
import Categories from "./Categories";
import items from "./data";
import drinks from "./datadrinks";
import logo from "./logo.jpg";

const allCategories = [
  "all",
  "breakfast",
  "lunch",
  "Sides",
  "drinks",
];

const headers = {

  breakfast: (
    <>
      <h3>Breakfast Served All Day!!!</h3>
    </>
  ),
  lunch: (
    <>
      <h3>For BURGERS, SANDWICHES, & BURRITOS ONLY -Make It A Combo for $4.25 (Includes Regular Drink & Fries)</h3>
    </>
  ), 
  Sides: (
    <>

    </>
  ),
  Drinks: (
    <>

    </>
  )
};

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [drinksItems, setDrinksItems] = useState(drinks);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories] = useState(allCategories);
  const [showHeader, setShowHeader] = useState(false);

  const filterItems = (category) => {
    setActiveCategory(category);
    setShowHeader(true);
    if (category === "all") {
      setMenuItems(items);
      setDrinksItems(drinks);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);

    const newDrinks = drinks.filter((drink) => drink.category === category);
    setDrinksItems(newDrinks);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h1>TO ORDER (909-390-9020)</h1>
          <h2>59 S. Milliken Ave, Suite #101, Ontario</h2>
          <h3>Deliveries Available by Special Arrangement Only! Delivery must be a minimum of $60.</h3>
          {showHeader && headers[activeCategory]} {/* render the header based on activeCategory */}
          <h4>
            •Hours: Mon - Fri 6:45AM to 2:30PM • Saturday 6:45AM to 12:30PM •
            Sunday CLOSED
          </h4>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
        <Drinks drinks={drinksItems} />
      </section>
    </main>
  );
};

export default App;
