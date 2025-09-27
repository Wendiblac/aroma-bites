import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Star } from "lucide-react";
import { MenuItem } from "@/components/CartContext";

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuCard = ({ item, onAddToCart }: MenuCardProps) => {
  return (
    <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 text-golden fill-current" />
          <span className="text-xs font-medium">4.8</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="text-2xl font-bold text-primary">${item.price}</span>
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {item.description}
        </p>
        
        <Button 
          onClick={() => onAddToCart(item)}
          className="w-full group"
          variant="hero"
        >
          <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuCard;