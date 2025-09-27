import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  ShoppingBag, 
  Calendar, 
  Settings, 
  Clock, 
  MapPin, 
  Star,
  Edit3,
  Phone,
  Mail,
  Users,
  CheckCircle,
  Package
} from "lucide-react";
import pastaImage from "@/assets/pasta-dish.jpg";
import salmonImage from "@/assets/salmon-dish.jpg";
import dessertImage from "@/assets/chocolate-dessert.jpg";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const userData = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    memberSince: "January 2024",
    totalOrders: 12,
    totalSpent: 384.50
  };

  // Mock order history
  const orderHistory = [
    {
      id: "ORD001",
      date: "2024-01-15",
      status: "delivered",
      total: 42.50,
      items: [
        { name: "Truffle Pasta", quantity: 1, price: 28, image: pastaImage },
        { name: "Chocolate Temptation", quantity: 1, price: 14, image: dessertImage }
      ]
    },
    {
      id: "ORD002", 
      date: "2024-01-10",
      status: "delivered",
      total: 56.00,
      items: [
        { name: "Grilled Salmon", quantity: 1, price: 32, image: salmonImage },
        { name: "Truffle Pasta", quantity: 1, price: 28, image: pastaImage }
      ]
    }
  ];

  // Mock reservation history
  const reservationHistory = [
    {
      id: "RES001",
      date: "2024-01-20",
      time: "7:30 PM",
      guests: 4,
      status: "confirmed",
      notes: "Anniversary dinner"
    },
    {
      id: "RES002",
      date: "2024-01-05", 
      time: "6:00 PM",
      guests: 2,
      status: "completed",
      notes: "Business dinner"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      delivered: "bg-green-100 text-green-800",
      confirmed: "bg-blue-100 text-blue-800", 
      completed: "bg-gray-100 text-gray-800",
      cancelled: "bg-red-100 text-red-800"
    };
    return variants[status as keyof typeof variants] || variants.completed;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-warm py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-6">
            <Avatar className="h-20 w-20 border-4 border-white shadow-soft">
              <AvatarImage src="/api/placeholder/80/80" alt={userData.name} />
              <AvatarFallback className="text-2xl font-bold bg-white text-primary">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{userData.name}</h1>
              <p className="text-white/90">Member since {userData.memberSince}</p>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {userData.totalOrders} Orders
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  ${userData.totalSpent} Spent
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="profile" className="w-full">
            
            {/* Tab Navigation */}
            <TabsList className="grid w-full max-w-md grid-cols-4 mb-8">
              <TabsTrigger value="profile" className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center">
                <ShoppingBag className="h-4 w-4 mr-1" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="reservations" className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Bookings
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center">
                <Settings className="h-4 w-4 mr-1" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Manage your account details and preferences</CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center"
                  >
                    <Edit3 className="h-4 w-4 mr-2" />
                    {isEditing ? 'Cancel' : 'Edit'}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue={userData.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={userData.email} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue={userData.phone} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue={userData.address} />
                      </div>
                      <div className="md:col-span-2 flex space-x-4">
                        <Button variant="hero" onClick={() => setIsEditing(false)}>
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">{userData.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium">{userData.phone}</p>
                        </div>
                      </div>
                      <div className="md:col-span-2 flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Address</p>
                          <p className="font-medium">{userData.address}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View your past orders and reorder your favorites</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {orderHistory.map((order, index) => (
                    <div key={order.id}>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-foreground">Order #{order.id}</h3>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge className={`${getStatusBadge(order.status)} mb-2`}>
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                          <p className="text-lg font-bold text-primary">${order.total.toFixed(2)}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {order.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-medium">${item.price}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3 mt-4">
                        <Button variant="outline" size="sm">
                          <Package className="h-3 w-3 mr-2" />
                          Reorder
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Star className="h-3 w-3 mr-2" />
                          Leave Review
                        </Button>
                      </div>
                      
                      {index < orderHistory.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reservations Tab */}
            <TabsContent value="reservations">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Reservation History</CardTitle>
                  <CardDescription>Manage your table bookings and dining history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {reservationHistory.map((reservation, index) => (
                    <div key={reservation.id}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-muted rounded-lg">
                            <Calendar className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">
                              Reservation #{reservation.id}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{new Date(reservation.date).toLocaleDateString()}</span>
                              <span>{reservation.time}</span>
                              <span className="flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                {reservation.guests} guests
                              </span>
                            </div>
                            {reservation.notes && (
                              <p className="text-sm text-muted-foreground mt-1">
                                Note: {reservation.notes}
                              </p>
                            )}
                          </div>
                        </div>
                        <Badge className={getStatusBadge(reservation.status)}>
                          {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                        </Badge>
                      </div>
                      
                      {reservation.status === 'confirmed' && (
                        <div className="flex space-x-3 mt-4">
                          <Button variant="outline" size="sm">Modify</Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            Cancel
                          </Button>
                        </div>
                      )}
                      
                      {index < reservationHistory.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences and security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Notifications
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      SMS Notifications
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Change Password
                    </Button>
                    <Separator />
                    <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Profile;