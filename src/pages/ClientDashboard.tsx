
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ClientDashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <Badge variant="outline">Welcome</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Electronics Store</h1>
        <p className="text-muted-foreground">
          Discover the latest in technology and electronics
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {["Phones", "Laptops", "Headphones", "TVs"].map((category) => (
          <Card key={category} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{category}</CardTitle>
              <CardDescription>Browse our selection</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">View Products</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClientDashboard;
