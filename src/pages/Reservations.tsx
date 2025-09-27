import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock, Users, MapPin, Check } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Reservations = () => {
  const [date, setDate] = useState<Date>();
  const [isBooked, setIsBooked] = useState(false);

  const timeSlots = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ];

  const partySize = [
    "1 Guest",
    "2 Guests",
    "3 Guests",
    "4 Guests",
    "5 Guests",
    "6+ Guests",
  ];

  const handleReservation = () => {
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Reserve Your Table
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Book your perfect dining experience with us. Choose your preferred
            date, time, and party size.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Reservation Form */}
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Make a Reservation
                  </CardTitle>
                  <CardDescription>
                    Fill out the details below to secure your table
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Date Picker */}
                  <div className="space-y-2">
                    <Label htmlFor="date">Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Selection */}
                  <div className="space-y-2">
                    <Label>Select Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Party Size */}
                  <div className="space-y-2">
                    <Label>Party Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {partySize.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                    />
                  </div>

                  <Button
                    onClick={handleReservation}
                    variant="hero"
                    className="w-full"
                    disabled={isBooked}
                  >
                    {isBooked ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Reservation Confirmed!
                      </>
                    ) : (
                      "Reserve Table"
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Restaurant Info */}
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-primary" />
                      Location & Hours
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        123 Gourmet Street
                        <br />
                        Downtown District, City 12345
                      </p>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Open Daily: 11:00 AM - 11:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      Reservation Policy
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>
                        • Reservations can be made up to 30 days in advance
                      </li>
                      <li>
                        • Please arrive within 15 minutes of your reservation
                        time
                      </li>
                      <li>• Large parties (6+) may require a deposit</li>
                      <li>• Cancellations must be made 24 hours in advance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-warm shadow-warm">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Need Special Accommodations?
                    </h3>
                    <p className="text-white/90 mb-4 text-sm">
                      Call or Email us directly for dietary restrictions,
                      special occasions, or group reservations.
                    </p>
                    <Button
                      variant="outline"
                      className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-warm-brown"
                    >
                      Call + (233) 599 588 284
                    </Button> <br /> <br />

                    <Button
                      variant="outline"
                      className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-warm-brown"
                    >
                      Email info@wendiblac.com
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
