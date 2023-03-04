const menu = [
  {
    id: 1,
    title: "Breakfast Plates (with 2 Eggs, Hashbrown & Toast)",
    category: "breakfast",
    img: "./images/item-1.jpeg",
    desc: "2 Eggs, Hash Brown, Toast ——————————————— $6.99" + 
    "\n Bacon (3) or Sausage (3) ————————————————  $9.19" +
    "\n Ribeye Steak  —————————————————————  $14.99" + 
    "\n Chicken Breast  ————————————————————  $11.19" +
    "\n Ham ————————————————————————— $9.19" +
    "\n Chorizo ————————————————————————$9.19",
  },
  {
    id: 2,
    title: "Mexican Breakfast Plates (with 2 Eggs, Rice, Bean & Tortilla)",
    category: "breakfast",
    img: "./images/item-1.jpeg",
    desc: "Huevos Rancheros —————————————————— $9.79" + 
    "\n Chillaquiles ——————————-——————————— $9.79",
  },
  {
    id: 3,
    title: "Omelettes (with 3 Eggs, Hashbrown & Toast",
    category: "breakfast",
    img: "./images/item-1.jpeg",
    desc: "Cheese ——————————————————————— $9.39" + 
    "\n Denver ———————————————————————  $10.69" +
    "\n Spanish  ———————————————————————  $10.69" + 
    "\n Bacon or Sausage or Ham  ——————————————— $10.29" +
    "\n Chilli ———————————————————————— $10.29" +
    "\n Vegetarian —————————————————————— $10.29",
  },
  {
    id: 4,
    title: "Breakfast Burritos (with 2 Eggs, Hashbrown, Pico & Cheese) ",
    category: "breakfast",
    img: "./images/item-1.jpeg",
    desc: "Egg ———————————————————————— $5.99" + 
    "\n Bacon or Sausage ——————————————————  $7.89" +
    "\n Ham  ————————————————————————  $7.89" + 
    "\n Chorizo  ——————————————————————— $8.89" +
    "\n Combo (Bacon+Sausage+Ham) ————————-———— $9.49" +
    "\n Chillaquiles w/ 2 eggs + Rice + Beans —————————— $9.49",
  },
  {
    id: 5,
    title: "Breakfast Sandwiches (with 2 Eggs, Cheese, Mayo, Lettuce & Tomato) ",
    category: "breakfast",
    img: "./images/item-1.jpeg",
    desc: "Egg ———————————————————————— $5.99" + 
    "\n Bacon or Sausage ——————————————————  $7.89" +
    "\n Ham  ———————————————————————— $7.89" + 
    "\n Denver  ——————————————————————— $9.09" +
    "\n Ribeye Steak ———————————————————— $14.99" +
    "\n Chicken Breast ——————————————————— $11.09",
  },
  {
    id: 6,
    title: "Hot Cakes (Pancake)",
    category: "breakfast",
    img: "./images/item-1.jpeg",
    desc: "Bacon (3) or Sausage (3) & 2 Eggs ————————-——— $9.49" + 
    "\n Short Stack (2) ————————————————————  $5.69" +
    "\n Full Stack (3) —————————————————————  $7.39" +
    "\n Side Hot Cake (1) ———————————————————  $3.29",
  },
  {
    id: 7,
    title: "French Toast",
    category: "breakfast",
    img: "./images/item-1.jpeg",
    desc: "Bacon (3) or Sausage (3) & 2 Eggs —————————— $9.49" + 
    "\n Wedges (4) ————————————————————  $5.69" +
    "\n Wedges (6) ————————————————————  $7.39" 
  },
  {
    id: 8,
    title:
      "Hamburgers (w/ 1000 Island Dressing, Onion, Lettuce, Tomato & Pickle",
    category: "lunch",
    img: "./images/item-1.jpeg",
    desc: "1/4 LB Hamburger ——————————————————— $4.99" + 
    "\n 1/4 LB Cheeseburger —————————————————— $5.79" +
    "\n 1/2 LB Double Hamburger —————————————-——  $7.09" +
    "\n 1/2 LB Double Cheeseburger —————————————-—  $8.09" +
    "\n Double Bacon Cheeseburger ———————————-———  $9.29" +
    "\n Bacon Cheeseburger ——————————————————  $7.49" +
    "\n Chili Cheeseburger ———————————————————  $7.49" +
    "\n Avocado Hamburger ——————————————————  $7.49" +
    "\n Pastrami Hamburger ——————————————————  $8.39" +
    "\n Mushroom Hamburger —————————————————  $6.99" +
    "\n Sourdough Hamburger —————————————————  $6.89" +
    "\n Avocado Bacon Cheeseburger ——————————————  $8.99" 
  },
  {
    id: 9,
    title:
      "Specialty Platters - Choose 2 sides from rice, bean, fries, or salad. & choice of dinner roll or tortilla ",
    category: "lunch",
    img: "./images/item-9.jpeg",
    desc:  "\n Ribeye Steak ————————————————————  $14.99" +
    "\n Chicken Breast ———————————————————  $11.29" +
    "\n Carne Asada ————————————————————  $11.99" +
    "\n Cheese Quesadilla ——————————————————  $7.99" +
    "\n Asada Quesadilla ——————————————————  $11.99" +
    "\n Chicken Quesadilla —————————————————  $11.29" +
    "\n Taquitos (3) —————————————————————  $6.99" +
    "\n Fish & Chips (Fries) ——————————————————  $9.99" +
    "\n Chicken Strips (4) ——————————————————  $11.99" 
  },
  {
    id: 10,
    title:
      "Salads (With Iceberg Lettuce, Cheese, Tomato, Cucumber, Egg & Crouton",
    category: "lunch",
    img: "./images/item-9.jpeg",
    desc:  "\n Green Salad ——————————————————————  $6.59" +
    "\n Chef or Tuna Salad ———————————————————  $10.49" +
    "\n Grilled Chicken Breast ———————————————-———  $10.49" 
  },
  {
    id: 11,
    title: "Sandwiches",
    category: "lunch",
    img: "./images/item-9.jpeg",
    desc: "Famous Pastrami —————————————————— $12.39" + 
    "\n Ribeye Steak ————————————-——————— $13.39" +
    "\n Grilled Chicken Breast w/ French Roll ——————————  $9.39" +
    "\n Grilled Chicken Breast w/ Bun —————————————  $8.99" +
    "\n Crispy Chicken Breast ————————-————————  $7.79" +
    "\n Club ————————————————————————  $9.49" +
    "\n BLT ————————————————————————  $7.79" +
    "\n Avocado BLT ————————————————-————  $7.99" +
    "\n Tuna or Fish ———————————————-—————  $7.89" +
    "\n Ham or Turkey ———————————————-————  $7.89" +
    "\n Grilled Cheese —————————-————-——————  $5.49" +
    "\n Grilled Ham & Cheese ————————————————  $7.89" +
    "\n Patty Melt ——————————————————-———  $7.09" +
    "\n Tuna Melt ——————————————————-———  $8.29" +
    "\n Chicken Melt ———————————————-—————  $9.69" +
    "\n Pastrami Melt —————————-——————————  $12.29" +
    "\n Turkey Melt ——————————————--——————  $8.29" +
    "\n Parmesan Grilled Chicken ———————————————  $11.69" +
    "\n Avocado Turkey BLT ————————————-—————  $9.39" 
  },
  {
    id: 12,
    title: "Philly Cheesesteak  (Mayo, Grilled Onions, & Swiss Cheese)",
    category: "lunch",
    img: "./images/item-9.jpeg",
    desc: "\n Cheese Steak ————————————  $9.79" +
    "\n Pepper or Mushroom Steak —————————————  $10.29" +
    "\n Pepper Mushroom Cheese Steak————————————  $10.79" 
  },
   { id: 13,
    title: "Hot Dog",
    category: "lunch",
    img: "./images/item-9.jpeg",
    desc: "\n Hot Dog ————————————  $4.59" +
    "\n Chili Cheese Dog —————————————  $5.79" +
    "\n Bacon Dog ————————————  $5.79"
  },
  {
    id: 14,
    title: "South of the Border",
    category: "lunch",
    img: "./images/item-9.jpeg",
    desc:  "\n Carne Asada Burrito ———————————————— $9.39" +
    "\n Chicken or Fish Burrito ————————————————  $8.69" +
    "\n California Burrito (Bean, Fries, Avocado) ————————————  $10.29" +
    "\n Bean & Cheese Burrito ——————————  $5.79" +
    "\n BRC Burrito —————————————  $5.79" +
    "\n Carne Asada Taco ————————————  $3.49" +
    "\n Chicken or Fish Taco ————————————  $3.19" +
    "\n Taquitos (3) ————————————  $3.69" +
    "\n Cheese Quesadilla —————————————  $5.89" +
    "\n Asada Quesadilla ————————————  $9.99" +
    "\n Chicken Quesadilla —————————  $9.29" +
    "\n Nacho Cheese French Fries (Small) ——————————  $4.49" +
    "\n Nacho Cheese French Fries (Large) —————————————  $6.49" +
    "\n Asada Super Nachos ————————————  $12.49" +
    "\n Chicken Super Nachos ————————————  $11.79" +
    "\n Asada Torta ————————————  $11.49" +
    "\n Chicken Torta ————————————  $10.79" +
    "\n Grilled Chicken Wrap —————————————  $9.69"
  },
  {
    id: 15,
    title: "Taco Combo Special (2 Tacos, Rice, Beans & Drink)",
    category: "lunch",
    img: "./images/item-9.jpeg",
    desc:  "\n Carne Asada ————————————  $11.49" +
    "\n Chicken or Fish —————————————  $10.79"
  },
  {
    id: 16,
    title:
      "Teriyaki with Steamed White Rice & Cabbage. Comes with a choice of salad or fries",
    category: "lunch",
    img: "./images/item-9.jpeg",
    desc:  "\n Chicken ————————————  $10.49" +
    "\n Beef —————————————  $11.79" +
    "\n Chicken & Beef ————————————  $11.79" +
    "\n Bulgogi —————————————  $12.69" +
    "\n Vegetarian —————————————  $9.99"
  },
  {
    id: 17,
    title: "Breakfast Side Orders",
    category: "Sides",
    img: "./images/item-9.jpeg",
    desc: "\n Hashbrown ————————————  $3.29" +
    "\n Toast (2) —————————————  $1.79" +
    "\n Egg (1) ————————————  $1.39" +
    "\n Bacon (2) or Sausage (2)—————————————  $2.19" +
    "\n Ham —————————————  $2.39"
  },
  {
  id: 18,
  title: "Lunch Side Orders",
  category: "Sides",
  img: "./images/item-9.jpeg",
  desc: "\n French Fries ————————————  $3.29" +
  "\n Large French Fries —————————————  $5.29" +
  "\n Chili Cheese Fries (Small) ————————————  $4.59" +
  "\n Chili Cheese Fries (Large) —————————————  $6.99" +
  "\n Bowl of Chili —————————————  $4.79" +
  "\n Mushrooms or Bell Peppers ————————————  $1.10" +
  "\n Rice —————————————  $1.90" +
  "\n Pinto Beans ————————————  $1.90" +
  "\n Chicken Strips (3) —————————————  $5.69" +
  "\n Mozzarella Cheese Sticks (6) —————————————  $4.39" +
  "\n Ranch, Italian or 1000 Island Dressing (2 oz) —————————————  $0.40" +
  "\n American or Swiss Cheese ————————————  $0.80" +
  "\n Guacamole —————————————  $0.70" +
  "\n Sour Cream —————————————  $0.70" +
  "\n Avocado —————————————  $1.70"
},
  {
    id: 19,
    title: "Drinks",
    category: "drinks",
    img: "./images/item-9.jpeg",
    desc: "\n Large Fountain Drink ————————————  $2.49" +
    "\n X-Large Fountain Drink —————————————  $3.39" +
    "\n Coffee (Small) ————————————  $1.65" +
    "\n Coffee (Large) —————————————  $1.99" +
    "\n Water (Bottle) —————————————  $1.50" +
    "\n Green Tea (Hot) ————————————  $1.75" +
    "\n Milk —————————————  $2.49" +
    "\n Orange Juice ————————————  $2.49" +
    "\n Canned Soda —————————————  $1.69" +
    "\n Monster Energy Drink —————————————  $3.50" +
    "\n Gatorade —————————————  $2.49" +
    "\n Arizona Tea ————————————  $2.49"
  },
];
  export default menu;