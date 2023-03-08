const menu = [
  {
    id: 1,
    title: "Breakfast Plates (with 2 Eggs, Hashbrown & Toast)",
    category: "breakfast",
    img: "./images/item-1.jpeg",
    price: "$6.99 $9.19 $14.99 $11.19 $9.19 $9.19", 
    desc: "2 Eggs, Hash Brown, Toast ——————— " + 
    "\n Bacon (3) or Sausage (3) ————————  " +
    "\n Ribeye Steak  —————————————  " + 
    "\n Chicken Breast  ———-—————————  " +
    "\n Ham ———————-————————— " +
    "\n Chorizo ———————————————",
  },
  {
    id: 2,
    title: "Mexican Breakfast Plates (with 2 Eggs, Rice, Bean & Tortilla)",
    category: "breakfast",
    img: "./images/item-2.jpeg",
    price: "$9.79 $9.79",
    desc: "Huevos Rancheros ———————————" + 
    "\n Chillaquiles ————-——————————",
  },
  {
    id: 3,
    title: "Omelettes (with 3 Eggs, Hashbrown & Toast",
    category: "breakfast",
    img: "./images/item-3.jpeg",
    price: "$9.39 $10.69 $10.69 $10.29 $10.29 $10.29", 
    desc: "Cheese ————————-———————— " + 
    "\n Denver ————————————--————  " +
    "\n Spanish  ———————-————————— " + 
    "\n Bacon or Sausage or Ham  ———————— " +
    "\n Chilli —————-——————-————— " +
    "\n Vegetarian ——————————————— ",
  },
  {
    id: 4,
    title: "Breakfast Burritos (with 2 Eggs, Hashbrown, Pico & Cheese) ",
    category: "breakfast",
    img: "./images/item-4.jpeg",
    price: "$5.99 $7.89 $7.89 $8.89 $9.49 $9.49",
    desc: "Egg ——————————-—-—————— " + 
    "\n Bacon or Sausage ———————-————  " +
    "\n Ham  ———————————-——————  " + 
    "\n Chorizo  ———————————————— " +
    "\n Combo (Bacon+Sausage+Ham) ———-—— " +
    "\n Chillaquiles w/ 2 eggs + Rice + Beans ——— ",
  },
  {
    id: 5,
    title: "Breakfast Sandwiches (with 2 Eggs, Cheese, Mayo, Lettuce & Tomato) ",
    category: "breakfast",
    img: "./images/item-5.jpeg",
    price: "$5.99 $7.89 $7.89 $9.09 $14.99 $11.09",
    desc: "Egg —————————————-——— " + 
    "\n Bacon or Sausage ————-—————  " +
    "\n Ham  ———————————————— " + 
    "\n Denver  —————————————— " +
    "\n Ribeye Steak ———————————— " +
    "\n Chicken Breast ——————————— ",
  },
  {
    id: 6,
    title: "Hot Cakes (Pancake)",
    category: "breakfast",
    img: "./images/item-6.jpeg",
    price: "$9.49 $5.69 $7.39 $3.29",
    desc: "Bacon (3) or Sausage (3) & 2 Eggs —-—— " + 
    "\n Short Stack (2) ——————-——————  " +
    "\n Full Stack (3) ———————-——————  " +
    "\n Side Hot Cake (1) ——————————— ",
  },
  {
    id: 7,
    title: "French Toast",
    category: "breakfast",
    img: "./images/item-7.jpeg",
    price: "$9.49 $5.69 $7.39",
    desc: "Bacon (3) or Sausage (3) & 2 Eggs -——— " + 
    "\n Wedges (4) ———————-———-———  " +
    "\n Wedges (6) —————-——-——————  " 
  },
  {
    id: 8,
    title: "Hamburgers (w/ 1000 Island Dressing, Onion, Lettuce, Tomato & Pickle",
    category: "lunch",
    img: "./images/item-8.jpeg",
    price: "$4.99 $5.79 $7.09 $8.09 $9.29 $7.49 $7.49 $7.49 $8.39 $6.99 $6.89 $8.99",
    desc: "1/4 LB Hamburger —————————— " + 
    "\n 1/4 LB Cheeseburger ————————— " +
    "\n 1/2 LB Double Hamburger ————-——  " +
    "\n 1/2 LB Double Cheeseburger ————-—  " +
    "\n Double Bacon Cheeseburger ——-———  " +
    "\n Bacon Cheeseburger —————————  " +
    "\n Chili Cheeseburger ——————————  " +
    "\n Avocado Hamburger —————————  " +
    "\n Pastrami Hamburger —————————  " +
    "\n Mushroom Hamburger ————————  " +
    "\n Sourdough Hamburger ————————  " +
    "\n Avocado Bacon Cheeseburger ————— " 
  },
  {
    id: 9,
    title: "Specialty Platters - Choose 2 sides from rice, bean, fries, or salad. & choice of dinner roll or tortilla ",
    category: "lunch",
    img: "./images/item-9.jpeg",
    price: "$14.99 $11.29 $11.99 $7.99 $11.99 $11.29 $6.99 $9.99 $11.99",
    desc:  "Ribeye Steak ————————————  " +
    "\n Chicken Breast —————-——————  " +
    "\n Carne Asada ————————————  " +
    "\n Cheese Quesadilla ——————————  " +
    "\n Asada Quesadilla —————————— " +
    "\n Chicken Quesadilla —————-————  " +
    "\n Taquitos (3) —————————————  " +
    "\n Fish & Chips (Fries) ———--——————  " +
    "\n Chicken Strips (4) ———————————  " 
  },
  {
    id: 10,
    title: "Salads (With Iceberg Lettuce, Cheese, Tomato, Cucumber, Egg & Crouton",
    category: "lunch",
    img: "./images/item-10.jpeg",
    price: "$6.59 $10.49 $10.49",
    desc:  "Green Salad ——————————————  " +
    "\n Chef or Tuna Salad ——————————-— " +
    "\n Grilled Chicken Breast ———-———-——— " 
  },
  {
    id: 11,
    title: "Sandwiches",
    category: "lunch",
    img: "./images/item-11.jpeg",
    price: "$12.39 $13.39 $9.39 $8.99 $7.79 $9.49 $7.79 $7.99 $7.89 $7.89 $5.49 $7.89 $7.09 $8.29 $9.69 $12.29 $8.29 $11.69 $9.39",
    desc: "Famous Pastrami ———————————— " + 
    "\n Ribeye Steak ———————-—————— " +
    "\n Grilled Chicken Breast w/ French Roll -——-  " +
    "\n Grilled Chicken Breast w/ Bun ————-——  " +
    "\n Crispy Chicken Breast ————-———-——  " +
    "\n Club ————————-—————————  " +
    "\n BLT ———————————-————-——  " +
    "\n Avocado BLT —————————-———— " +
    "\n Ham or Turkey ————————-———— " +
    "\n Tuna or Fish —————————-———— " +
    "\n Grilled Cheese ————-——-——————  " +
    "\n Grilled Ham & Cheese —————————— " +
    "\n Patty Melt ————————-—-————— " +
    "\n Turkey Melt ———————————-——— " +
    "\n Tuna Melt ————————————-——— " +
    "\n Chicken Melt ————————-—————  " +
    "\n Pastrami Melt —————————————  " +
    "\n Parmesan Grilled Chicken ———————— " +
    "\n Avocado Turkey BLT ——————————— " 
  },
  {
    id: 12,
    title: "Philly Cheesesteak  (Mayo, Grilled Onions, & Swiss Cheese)",
    category: "lunch",
    img: "./images/item-12.jpeg",
    price: "$9.79 $10.29 $10.79",
    desc: "Cheese Steak ————————-———-—— " +
    "\n Pepper or Mushroom Steak ——-—-——— " +
    "\n Pepper Mushroom Cheese Steak————-— " 
  },
   { id: 13,
    title: "Hot Dog",
    category: "lunch",
    img: "./images/item-13.jpeg",
    price: "$4.59 $5.79 $5.79",
    desc: "Hot Dog —————————-—————  " +
    "\n Chili Cheese Dog ——————-————  " +
    "\n Bacon Dog ————————————— "
  },
  {
    id: 14,
    title: "South of the Border",
    category: "lunch",
    img: "./images/item-14.jpeg",
    price: "$9.39 $8.69 $10.29 $5.79 $5.79 $3.49 $3.19 $3.69 $5.89 $9.99 $9.29 $4.49 $6.49 $12.49 $11.79 $11.49 $10.79 $9.69",
    desc:  "Carne Asada Burrito —————————-— " +
    "\n Chicken or Fish Burrito —————-————  " +
    "\n California Burrito (Bean, Fries, Avocado) --—  " +
    "\n Bean & Cheese  ————-————————  " +
    "\n BRC Burrito ————-——————————  " +
    "\n Carne Asada Taco ———————-——-—— " +
    "\n Chicken or Fish Taco ———————-——— " +
    "\n Taquitos (3) ————————-——————  " +
    "\n Cheese Quesadilla —————-—————— " +
    "\n Asada Quesadilla ————————————  " +
    "\n Chicken Quesadilla —————-——————  " +
    "\n Nacho Cheese French Fries (Small) —-——— " +
    "\n Nacho Cheese French Fries (Large) —-———  " +
    "\n Asada Super Nachos —————-—————  " +
    "\n Chicken Super Nachos ————-————— " +
    "\n Asada Torta —————————————— " +
    "\n Chicken Torta ——————-——————— " +
    "\n Grilled Chicken Wrap —————-————— "
  },
  {
    id: 15,
    title: "Taco Combo Special (2 Tacos, Rice, Beans & Drink)",
    category: "lunch",
    img: "./images/item-15.jpeg",
    price: "$11.49 $10.79",
    desc:  "Carne Asada ——————-———————  " +
    "\n Chicken or Fish ——————-——————  "
  },
  {
    id: 16,
    title: "Teriyaki with Steamed White Rice & Cabbage. Comes with a choice of salad or fries",
    category: "lunch",
    img: "./images/item-16.jpeg",
    price: "$10.49 $11.79 $11.79 $12.69 $9.99",
    desc:  "Chicken ————————-———-———— " +
    "\n Beef —————————-————————  " +
    "\n Chicken & Beef ———-————-—————  " +
    "\n Bulgogi ————————————————" +
    "\n Vegetarian ————-———-——————— "
  },
  {
    id: 17,
    title: "Breakfast Side Orders",
    category: "Sides",
    img: "./images/item-17.jpeg",
    price: "$3.29 $1.79 $1.39 $2.19 $2.39",
    desc: "Hashbrown ——————————-————  " +
    "\n Toast (2) ——————————————— " +
    "\n Egg (1) ————————-—-——————  " +
    "\n Bacon (2) or Sausage (2)————-————  " +
    "\n Ham ————————————-————— "
  },
  {
  id: 18,
  title: "Lunch Side Orders",
  category: "Sides",
  img: "./images/item-18.jpeg",
  price: "$3.29 $5.29 $4.59 $6.99 $4.79 $1.10 $1.90 $1.90 $5.69 $4.39 $0.40 $0.80 $0.70 $0.70 $1.70",
  desc: "French Fries —————————————— " +
  "\n Large French Fries ——-———-—————  " +
  "\n Chili Cheese Fries (Small) ——-—————  " +
  "\n Chili Cheese Fries (Large) ———-——-—— " +
  "\n Bowl of Chili —————————————— " +
  "\n Mushrooms or Bell Peppers ——————  " +
  "\n Rice —————————————————  " +
  "\n Pinto Beans ————-—————————  " +
  "\n Chicken Strips (3) ——————————— " +
  "\n Mozzarella Cheese Sticks (6) ——————  " +
  "\n Ranch, Italian or 1000 Island Dressing (2 oz)   " +
  "\n American or Swiss Cheese ——————— " +
  "\n Guacamole or Sour Cream ———————  " +
  "\n Sour Cream ——————————————  " +
  "\n Avocado ————————————————  "
},

];
  export default menu;
  