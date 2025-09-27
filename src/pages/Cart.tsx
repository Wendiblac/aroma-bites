import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, CreditCard, ShoppingBag, ArrowLeft, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const tax = getTotalPrice() * 0.08;
  const delivery = getTotalPrice() > 50 ? 0 : 5.99;
  const total = getTotalPrice() + tax + delivery;

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      setOrderPlaced(true);
      toast({
        title: "Order Confirmed!",
        description: `Your order #${Math.random().toString(36).substr(2, 9).toUpperCase()} has been placed successfully.`,
      });
      
      setTimeout(() => {
        clearCart();
        navigate('/profile');
      }, 2000);
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center animate-bounce-in">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your order. We're preparing your delicious meal right now!
            </p>
            <Badge variant="secondary" className="text-sm">
              Estimated delivery: 25-35 minutes
            </Badge>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/menu">
              <Button variant="outline" size="icon" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Your Cart</h1>
          </div>
          <p className="text-white/90">
            {getTotalItems() > 0 ? `${getTotalItems()} items in your cart` : 'Your cart is empty'}
          </p>
        </div>
      </section>

      {items.length === 0 ? (
        <div className="container mx-auto px-4 py-20 text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Add some delicious items from our menu!</p>
          <Link to="/menu">
            <Button variant="hero">Browse Menu</Button>
          </Link>
        </div>
      ) : (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Order Items ({getTotalItems()})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {items.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex items-center space-x-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg shadow-soft"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{item.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                            <p className="text-lg font-bold text-primary">${item.price}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-foreground font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        {index < items.length - 1 && <Separator className="mt-6" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Order Notes */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Special Instructions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="Any special requests or dietary restrictions?"
                      className="min-h-20"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Checkout Form */}
              <div className="space-y-6">
                <Card className="shadow-warm sticky top-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${getTotalPrice().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Delivery</span>
                        <span>{delivery === 0 ? 'Free' : `$${delivery.toFixed(2)}`}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span className="text-primary">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <form onSubmit={handleCheckout} className="space-y-4 mt-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" required />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Payment Method</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="card">Credit/Debit Card</SelectItem>
                              <SelectItem value="paypal">PayPal</SelectItem>
                              <SelectItem value="cash">Cash on Delivery</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        variant="hero" 
                        className="w-full"
                        disabled={isCheckingOut}
                      >
                        {isCheckingOut ? (
                          <>Processing...</>
                        ) : (
                          <>Place Order • ${total.toFixed(2)}</>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;