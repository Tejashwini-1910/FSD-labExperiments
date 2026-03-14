const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Sample data (mock database)
const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    menu: [
      { id: 101, name: "Margherita Pizza", price: 10 },
      { id: 102, name: "Pepperoni Pizza", price: 12 }
    ]
  },
  {
    id: 2,
    name: "Burger Hub",
    menu: [
      { id: 201, name: "Cheese Burger", price: 8 },
      { id: 202, name: "Veg Burger", price: 7 }
    ]
  }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Food Delivery API");
});

// Get all restaurants
app.get("/restaurants", (req, res) => {
  res.status(200).json(restaurants);
});

//  Get menu of a particular restaurant
app.get("/restaurants/:id/menu", (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const restaurant = restaurants.find(r => r.id === restaurantId);

  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant not found" });
  }

  res.status(200).json(restaurant.menu);
});

//  Place an order
app.post("/order", (req, res) => {
  const { restaurantId, items } = req.body;

  const restaurant = restaurants.find(r => r.id === restaurantId);

  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant not found" });
  }

  let totalPrice = 0;

  items.forEach(itemId => {
    const menuItem = restaurant.menu.find(m => m.id === itemId);
    if (menuItem) {
      totalPrice += menuItem.price;
    }
  });

  res.status(201).json({
    message: "Order placed successfully ",
    restaurant: restaurant.name,
    totalAmount: totalPrice
  });
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});