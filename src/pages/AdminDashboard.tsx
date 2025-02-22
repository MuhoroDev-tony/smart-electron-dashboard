
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Users, DollarSign, ShoppingCart } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Products",
      value: "2,345",
      icon: Package,
      description: "Products in inventory",
    },
    {
      title: "Active Users",
      value: "1,234",
      icon: Users,
      description: "Registered customers",
    },
    {
      title: "Revenue",
      value: "$12,345",
      icon: DollarSign,
      description: "Last 30 days",
    },
    {
      title: "Orders",
      value: "345",
      icon: ShoppingCart,
      description: "Pending orders",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <Badge variant="outline">Dashboard</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
        <p className="text-muted-foreground">
          Manage your store and monitor performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
