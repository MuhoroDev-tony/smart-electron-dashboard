
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  CalendarDays, 
  CreditCard, 
  DollarSign, 
  Download, 
  Filter, 
  MoreHorizontal, 
  Package, 
  PackageCheck, 
  PackageX, 
  Printer, 
  Search, 
  ShoppingBag, 
  TrendingDown, 
  TrendingUp, 
  Truck, 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const orders = [
  {
    id: "ORD-1234",
    customer: "John Doe",
    email: "john@example.com",
    date: "Apr 23, 2024",
    status: "delivered",
    items: 3,
    total: 245.99,
    paymentMethod: "Credit Card",
    shippingMethod: "Express",
    products: [
      { name: "iPhone Case", price: 29.99, quantity: 1 },
      { name: "AirPods Pro", price: 199.00, quantity: 1 },
      { name: "USB-C Cable", price: 17.00, quantity: 1 },
    ],
    shippingAddress: "123 Main St, New York, NY 10001, USA",
    trackingNumber: "TRK987654321",
    customerNote: "Please leave package at the door"
  },
  {
    id: "ORD-1235",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "Apr 22, 2024",
    status: "processing",
    items: 2,
    total: 1299.98,
    paymentMethod: "PayPal",
    shippingMethod: "Standard",
    products: [
      { name: "MacBook Pro", price: 1299.00, quantity: 1 },
      { name: "Magic Mouse", price: 99.00, quantity: 1 },
    ],
    shippingAddress: "456 Oak St, Los Angeles, CA 90001, USA",
    trackingNumber: "",
    customerNote: ""
  },
  {
    id: "ORD-1236",
    customer: "Bob Johnson",
    email: "bob@example.com",
    date: "Apr 21, 2024",
    status: "shipped",
    items: 1,
    total: 399.00,
    paymentMethod: "Credit Card",
    shippingMethod: "Standard",
    products: [
      { name: "Sony Headphones", price: 399.00, quantity: 1 },
    ],
    shippingAddress: "789 Pine St, Chicago, IL 60007, USA",
    trackingNumber: "TRK123456789",
    customerNote: ""
  },
  {
    id: "ORD-1237",
    customer: "Alice Brown",
    email: "alice@example.com",
    date: "Apr 20, 2024",
    status: "cancelled",
    items: 4,
    total: 187.96,
    paymentMethod: "Credit Card",
    shippingMethod: "Express",
    products: [
      { name: "Phone Charger", price: 24.99, quantity: 2 },
      { name: "Screen Protector", price: 19.99, quantity: 1 },
      { name: "Phone Stand", price: 15.99, quantity: 1 },
    ],
    shippingAddress: "101 Maple Ave, Seattle, WA 98101, USA",
    trackingNumber: "",
    customerNote: "Cancelled due to item out of stock"
  },
  {
    id: "ORD-1238",
    customer: "David Wilson",
    email: "david@example.com",
    date: "Apr 19, 2024",
    status: "delivered",
    items: 2,
    total: 2499.99,
    paymentMethod: "Credit Card",
    shippingMethod: "Express",
    products: [
      { name: "4K OLED TV", price: 2299.00, quantity: 1 },
      { name: "HDMI Cable", price: 19.99, quantity: 2 },
    ],
    shippingAddress: "222 Cedar Blvd, Miami, FL 33101, USA",
    trackingNumber: "TRK567891234",
    customerNote: "Please call before delivery"
  },
];

const revenueData = [
  { date: "Apr 15", revenue: 850 },
  { date: "Apr 16", revenue: 740 },
  { date: "Apr 17", revenue: 900 },
  { date: "Apr 18", revenue: 1200 },
  { date: "Apr 19", revenue: 2500 },
  { date: "Apr 20", revenue: 190 },
  { date: "Apr 21", revenue: 400 },
  { date: "Apr 22", revenue: 1300 },
  { date: "Apr 23", revenue: 250 },
];

const orderStatusData = [
  { name: "Delivered", value: 165 },
  { name: "Shipped", value: 45 },
  { name: "Processing", value: 85 },
  { name: "Cancelled", value: 12 },
];

const COLORS = ["#10b981", "#3b82f6", "#f97316", "#f43f5e"];

const shippingMethodData = [
  { name: "Standard", value: 65 },
  { name: "Express", value: 25 },
  { name: "Next Day", value: 10 },
];

const categoryRevenueData = [
  { category: "Phones", revenue: 28500 },
  { category: "Laptops", revenue: 42000 },
  { category: "Headphones", revenue: 15800 },
  { category: "Accessories", revenue: 9500 },
  { category: "TVs", revenue: 31200 },
];

const STATUS_BADGES = {
  processing: { variant: "outline", icon: Package },
  shipped: { variant: "secondary", icon: Truck },
  delivered: { variant: "default", icon: PackageCheck },
  cancelled: { variant: "destructive", icon: PackageX },
  refunded: { variant: "destructive", icon: CreditCard },
};

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleOrderSelection = (orderId: string) => {
    if (selectedOrders.includes(orderId)) {
      setSelectedOrders(selectedOrders.filter(id => id !== orderId));
    } else {
      setSelectedOrders([...selectedOrders, orderId]);
    }
  };

  const selectAllOrders = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map(order => order.id));
    }
  };

  const openOrderDetails = (order: typeof orders[0]) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    
    // Simple date filter for demo purposes
    const matchesDate = dateFilter === "all" || true; // In a real app, implement proper date filtering
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        <p className="text-muted-foreground">Manage and process customer orders</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="fulfillment">Fulfillment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">307</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">+15% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$14,325.19</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">+8% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$46.66</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                  <span className="text-red-500">-2% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">+0.5% from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Daily Revenue</CardTitle>
                <CardDescription>Revenue for the past 9 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`$${value}`, 'Revenue']}
                        labelFormatter={(label) => `Date: ${label}`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Status Distribution</CardTitle>
                <CardDescription>Breakdown of current order statuses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={orderStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {orderStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} orders`, 'Count']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest orders from your customers</CardDescription>
            </CardHeader>
            <CardContent className="overflow-hidden p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.slice(0, 5).map((order) => {
                    const StatusIcon = (STATUS_BADGES as any)[order.status]?.icon || Package;
                    return (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <Badge variant={(STATUS_BADGES as any)[order.status]?.variant || "default"}>
                            <StatusIcon className="h-3 w-3 mr-1" />{" "}
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" onClick={() => openOrderDetails(order)}>
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="border-t px-6 py-3">
              <Button variant="outline" size="sm" className="ml-auto">
                View All Orders
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Category</CardTitle>
                <CardDescription>Sales distribution across product categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryRevenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                      <Bar dataKey="revenue" fill="#8884d8" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shipping Methods</CardTitle>
                <CardDescription>Distribution of shipping methods chosen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={shippingMethodData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#10b981"
                        dataKey="value"
                      >
                        {shippingMethodData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Orders Performance Analysis</CardTitle>
              <CardDescription>Key metrics and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Cart Abandonment",
                    value: "24%",
                    change: "-3%",
                    trend: "down",
                  },
                  {
                    title: "Repeat Purchases",
                    value: "38%",
                    change: "+5%",
                    trend: "up",
                  },
                  {
                    title: "Return Rate",
                    value: "4.2%",
                    change: "-0.8%",
                    trend: "down",
                  },
                  {
                    title: "Processing Time",
                    value: "1.8 days",
                    change: "-0.2 days",
                    trend: "down",
                  },
                ].map((metric, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">{metric.title}</div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="flex items-center text-xs">
                      {metric.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-green-500 mr-1" />
                      )}
                      <span className={metric.trend === "down" && metric.title !== "Return Rate" && metric.title !== "Cart Abandonment" ? "text-red-500" : "text-green-500"}>
                        {metric.change} from last month
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sales Channel Performance</CardTitle>
              <CardDescription>Revenue generated across different sales channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { channel: "Website", value: 68, revenue: 42500 },
                  { channel: "Mobile App", value: 24, revenue: 15000 },
                  { channel: "Marketplace", value: 8, revenue: 5000 },
                ].map((channel, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{channel.channel}</div>
                      <div className="font-medium text-muted-foreground">${channel.revenue.toLocaleString()}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {channel.value}% of total revenue
                    </div>
                    <Progress value={channel.value} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fulfillment" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Orders to Fulfill</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {orders.filter(o => o.status === "processing").length}
                </div>
                <p className="text-xs text-muted-foreground">Processing orders</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">In Transit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {orders.filter(o => o.status === "shipped").length}
                </div>
                <p className="text-xs text-muted-foreground">Shipped orders</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Delivered Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Completed deliveries</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Cancelled Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {orders.filter(o => o.status === "cancelled").length}
                </div>
                <p className="text-xs text-muted-foreground">Require attention</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Orders Requiring Action</CardTitle>
              <CardDescription>Orders that need immediate attention</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action Required</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.filter(o => o.status === "processing").map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          <Package className="h-3 w-3 mr-1" /> Processing
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Ready to Ship</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          <Truck className="h-3 w-3 mr-1" /> Ship Order
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {orders.filter(o => o.status === "cancelled").map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Badge variant="destructive">
                          <PackageX className="h-3 w-3 mr-1" /> Cancelled
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive">Process Refund</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          <CreditCard className="h-3 w-3 mr-1" /> Issue Refund
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Statistics</CardTitle>
              <CardDescription>Delivery performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { 
                    title: "Average Delivery Time",
                    value: "2.4 days",
                    change: "-0.3 days",
                    trend: "down",
                    target: "2 days",
                    progress: 83,
                  },
                  { 
                    title: "On-Time Delivery Rate",
                    value: "94%",
                    change: "+2%",
                    trend: "up",
                    target: "98%",
                    progress: 94,
                  },
                  { 
                    title: "Order Accuracy",
                    value: "99.2%",
                    change: "+0.4%",
                    trend: "up",
                    target: "99.5%",
                    progress: 99,
                  },
                ].map((metric, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{metric.title}</div>
                      <div className="text-sm text-muted-foreground">Target: {metric.target}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold">{metric.value}</div>
                      <div className="flex items-center text-xs">
                        {metric.trend === "up" ? (
                          <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 text-green-500 mr-1" />
                        )}
                        <span className="text-green-500">{metric.change}</span>
                      </div>
                    </div>
                    <Progress value={metric.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search orders..." 
                className="pl-8"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-full sm:w-44">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="last7days">Last 7 Days</SelectItem>
                <SelectItem value="last30days">Last 30 Days</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex flex-wrap w-full sm:w-auto gap-2 sm:gap-4 justify-between sm:justify-end">
            {selectedOrders.length > 0 && (
              <Button variant="outline" className="gap-1">
                <Download className="h-4 w-4" /> Export ({selectedOrders.length})
              </Button>
            )}
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" /> Print Orders
            </Button>
            <Button>
              <Filter className="mr-2 h-4 w-4" /> Advanced Filter
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox 
                    checked={selectedOrders.length === orders.length && orders.length > 0}
                    onCheckedChange={selectAllOrders}
                    aria-label="Select all orders"
                  />
                </TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-24 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Package className="h-8 w-8 text-muted-foreground/60" />
                      <div className="font-medium">No orders found</div>
                      <div className="text-sm text-muted-foreground">
                        Try adjusting your search or filters
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredOrders.map((order) => {
                  const StatusIcon = (STATUS_BADGES as any)[order.status]?.icon || Package;
                  return (
                    <TableRow key={order.id}>
                      <TableCell>
                        <Checkbox 
                          checked={selectedOrders.includes(order.id)}
                          onCheckedChange={() => toggleOrderSelection(order.id)}
                          aria-label={`Select order ${order.id}`}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          {order.customer}
                          <div className="text-xs text-muted-foreground">{order.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Badge variant={(STATUS_BADGES as any)[order.status]?.variant || "default"}>
                          <StatusIcon className="h-3 w-3 mr-1" />{" "}
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => openOrderDetails(order)}>
                              <Package className="h-4 w-4 mr-2" /> View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Printer className="h-4 w-4 mr-2" /> Print Invoice
                            </DropdownMenuItem>
                            {order.status === "processing" && (
                              <DropdownMenuItem>
                                <Truck className="h-4 w-4 mr-2" /> Mark as Shipped
                              </DropdownMenuItem>
                            )}
                            {order.status === "shipped" && (
                              <DropdownMenuItem>
                                <PackageCheck className="h-4 w-4 mr-2" /> Mark as Delivered
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <PackageX className="h-4 w-4 mr-2" /> Cancel Order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Order Details Dialog */}
      <Dialog open={showOrderDetails} onOpenChange={setShowOrderDetails}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              Order {selectedOrder?.id}
              <Badge variant={(STATUS_BADGES as any)[selectedOrder?.status || "processing"]?.variant || "default"}>
                {selectedOrder?.status.charAt(0).toUpperCase()}{selectedOrder?.status.slice(1)}
              </Badge>
            </DialogTitle>
            <DialogDescription>
              Placed on {selectedOrder?.date}
            </DialogDescription>
          </DialogHeader>
          
          {selectedOrder && (
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">Customer</div>
                  <div className="font-medium">{selectedOrder.customer}</div>
                  <div className="text-sm">{selectedOrder.email}</div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">Order Details</div>
                  <div className="text-sm">Payment Method: {selectedOrder.paymentMethod}</div>
                  <div className="text-sm">Shipping Method: {selectedOrder.shippingMethod}</div>
                  {selectedOrder.trackingNumber && (
                    <div className="text-sm">Tracking: {selectedOrder.trackingNumber}</div>
                  )}
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="font-medium">Items</div>
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">Quantity</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedOrder.products.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell>{product.name}</TableCell>
                          <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                          <TableCell className="text-right">{product.quantity}</TableCell>
                          <TableCell className="text-right">${(product.price * product.quantity).toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell colSpan={3} className="text-right font-medium">Subtotal</TableCell>
                        <TableCell className="text-right font-medium">
                          ${selectedOrder.products.reduce((sum, p) => sum + (p.price * p.quantity), 0).toFixed(2)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={3} className="text-right font-medium">Shipping</TableCell>
                        <TableCell className="text-right font-medium">
                          ${(selectedOrder.total - selectedOrder.products.reduce((sum, p) => sum + (p.price * p.quantity), 0)).toFixed(2)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={3} className="text-right font-medium">Total</TableCell>
                        <TableCell className="text-right font-bold">${selectedOrder.total.toFixed(2)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-medium">Shipping Address</div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    {selectedOrder.shippingAddress}
                  </div>
                </div>
                
                {selectedOrder.customerNote && (
                  <div className="space-y-2">
                    <div className="font-medium">Customer Note</div>
                    <div className="bg-muted p-3 rounded-md text-sm">
                      {selectedOrder.customerNote}
                    </div>
                  </div>
                )}
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="font-medium">Timeline</div>
                <div className="space-y-3">
                  {[
                    { status: "Order placed", date: selectedOrder.date, time: "10:24 AM" },
                    ...(selectedOrder.status !== "cancelled" ? [
                      { status: "Payment confirmed", date: selectedOrder.date, time: "10:30 AM" },
                      ...(["shipped", "delivered"].includes(selectedOrder.status) ? [
                        { status: "Order shipped", date: "Apr 24, 2024", time: "2:15 PM" }
                      ] : []),
                      ...(selectedOrder.status === "delivered" ? [
                        { status: "Order delivered", date: "Apr 26, 2024", time: "11:42 AM" }
                      ] : [])
                    ] : [
                      { status: "Order cancelled", date: selectedOrder.date, time: "2:30 PM" }
                    ])
                  ].map((event, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        {index < 3 && <div className="w-0.5 h-full bg-border"></div>}
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium">{event.status}</div>
                        <div className="text-xs text-muted-foreground">
                          {event.date} at {event.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setShowOrderDetails(false)}>
              Close
            </Button>
            <div className="flex gap-2">
              <Button variant="outline">
                <Printer className="h-4 w-4 mr-2" /> Print
              </Button>
              {selectedOrder?.status === "processing" && (
                <Button>
                  <Truck className="h-4 w-4 mr-2" /> Mark as Shipped
                </Button>
              )}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
