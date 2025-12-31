
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "My Account",
  description: "Manage your account settings and view your order history.",
};

export default function AccountPage() {
  // In a real application, you would fetch user data and order history.
  // For this example, we'll use placeholder data.
  const user = {
    name: "Eleanor Vance",
    email: "eleanor@example.com",
  };

  const orders = [
    {
      id: "AETHER10521",
      date: "June 15, 2024",
      status: "Delivered",
      total: "$750.00",
    },
    {
      id: "AETHER10389",
      date: "April 22, 2024",
      status: "Delivered",
      total: "$320.00",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-headline">My Account</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back, {user.name.split(" ")[0]}.
        </p>
      </header>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>
                View the status and details of your past orders.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="text-right">
                       <p className="font-medium">{order.total}</p>
                       <p className={`text-sm font-semibold ${order.status === 'Delivered' ? 'text-green-600' : 'text-amber-600'}`}>{order.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label>Name</Label>
                <p className="text-muted-foreground">{user.name}</p>
              </div>
              <div className="space-y-1">
                <Label>Email</Label>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
              <Separator />
               <div className="space-y-1">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" defaultValue="••••••••" />
              </div>
               <div className="space-y-1">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <Button>Update Password</Button>
              <Button variant="link" className="p-0 text-muted-foreground">Log Out</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
