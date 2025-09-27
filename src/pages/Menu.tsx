import { useState } from "react";
import Navigation from "@/components/Navigation";
import MenuCard from "@/components/MenuCard";
import { Button } from "@/components/ui/button";
import { MenuItem, useCart } from "@/components/CartContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import pastaImage from "@/assets/pasta-dish.jpg";
import salmonImage from "@/assets/salmon-dish.jpg";
import dessertImage from "@/assets/chocolate-dessert.jpg";

const Menu = () => {
  const { addToCart, getTotalItems, getTotalPrice } = useCart();

  const menuItems: MenuItem[] = [
    {
      id: "1",
      name: "Truffle Pasta",
      description: "Fresh handmade pasta with wild mushrooms, truffle oil, and aged parmesan",
      price: 28,
      image: pastaImage,
      category: "main"
    },
    {
      id: "2",
      name: "Grilled Salmon",
      description: "Atlantic salmon with roasted vegetables and lemon herb butter",
      price: 32,
      image: salmonImage,
      category: "main"
    },
    {
      id: "3",
      name: "Chocolate Temptation",
      description: "Rich dark chocolate mousse with fresh berries and gold leaf",
      price: 14,
      image: dessertImage,
      category: "dessert"
    },
    // Add more items for demo
    {
      id: "4",
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with house-made dressing and croutons",
      price: 16,
      image: pastaImage, // Placeholder
      category: "appetizer"
    },
    {
      id: "5",
      name: "Ribeye Steak", 
      description: "Premium 12oz ribeye with garlic mashed potatoes",
      price: 48,
      image: salmonImage, // Placeholder
      category: "main"
    },
    {
      id: "6",
      name: "Tiramisu",
      description: "Classic Italian dessert with espresso and mascarpone",
      price: 12,
      image: dessertImage, // Placeholder
      category: "dessert"
    }
  ];

  const categories = [
    { id: "all", name: "All Items", count: menuItems.length },
    { id: "appetizer", name: "Appetizers", count: menuItems.filter(item => item.category === "appetizer").length },
    { id: "main", name: "Main Courses", count: menuItems.filter(item => item.category === "main").length },
    { id: "dessert", name: "Desserts", count: menuItems.filter(item => item.category === "dessert").length },
  ];

  const filteredItems = (category: string) => 
    category === "all" ? menuItems : menuItems.filter(item => item.category === category);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-warm py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, 
            each prepared with passion and the finest ingredients.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            {/* Category Tabs */}
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-4 h-12">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-sm font-medium"
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Menu Items */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems(category.id).map((item) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      onAddToCart={addToCart}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Floating Cart Button */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link to="/cart">
            <Button variant="hero" size="lg" className="rounded-full shadow-warm animate-bounce-in">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({getTotalItems()}) • ${getTotalPrice().toFixed(2)}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;