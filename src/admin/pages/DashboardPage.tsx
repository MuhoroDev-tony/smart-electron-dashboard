
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  CreditCard,
  DollarSign,
  Package,
  Users,
  ShoppingBag,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Target,
  Calendar,
  Filter,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    icon: DollarSign,
    description: "+20.1% from last month",
    trend: "up",
  },
  {
    title: "Orders",
    value: "356",
    icon: Package,
    description: "+8% from last month",
    trend: "up",
  },
  {
    title: "Sales",
    value: "$12,234",
    icon: CreditCard,
    description: "+19% from last month",
    trend: "up",
  },
  {
    title: "Active Users",
    value: "2,234",
    icon: Users,
    description: "+201 since last hour",
    trend: "up",
  },
];

const revenueData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
  { name: "Aug", value: 4000 },
  { name: "Sep", value: 4500 },
  { name: "Oct", value: 5100 },
  { name: "Nov", value: 4800 },
  { name: "Dec", value: 6000 },
];

const salesData = [
  { name: "Phones", value: 400, color: "#0088FE" },
  { name: "Laptops", value: 300, color: "#00C49F" },
  { name: "TVs", value: 300, color: "#FFBB28" },
  { name: "Headphones", value: 200, color: "#FF8042" },
];

const weeklyOrders = [
  { name: "Mon", orders: 12 },
  { name: "Tue", orders: 18 },
  { name: "Wed", orders: 15 },
  { name: "Thu", orders: 25 },
  { name: "Fri", orders: 30 },
  { name: "Sat", orders: 22 },
  { name: "Sun", orders: 14 },
];

const customerTierData = [
  { name: "Premium", value: 45 },
  { name: "Standard", value: 120 },
  { name: "Basic", value: 230 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const CUSTOMER_COLORS = ["#8884d8", "#83a6ed", "#8dd1e1"];

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    product: "iPhone 15 Pro",
    amount: "$999",
    status: "delivered",
    date: "2 hours ago",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    product: "MacBook Pro",
    amount: "$2,499",
    status: "processing",
    date: "5 hours ago",
  },
  {
    id: "ORD-003",
    customer: "Bob Johnson",
    product: "Sony Headphones",
    amount: "$349",
    status: "shipping",
    date: "1 day ago",
  },
  {
    id: "ORD-004",
    customer: "Alice Brown",
    product: "Samsung TV",
    amount: "$1,299",
    status: "delivered",
    date: "2 days ago",
  },
];

const goalData = [
  { name: "Sales", current: 78, target: 100 },
  { name: "Revenue", current: 65, target: 100 },
  { name: "Customers", current: 92, target: 100 },
];

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("month");
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your store
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Last 24 hours</SelectItem>
              <SelectItem value="week">Last 7 days</SelectItem>
              <SelectItem value="month">Last 30 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground pt-1">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                  {stat.description}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-2 md:col-span-1">
              <CardHeader>
                <CardTitle>Revenue Over Time</CardTitle>
                <CardDescription>Revenue for the last 12 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>Distribution of sales across product categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={salesData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {salesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} units`, "Sales"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2 md:col-span-1">
              <CardHeader>
                <CardTitle>Customer Tiers</CardTitle>
                <CardDescription>Distribution of customer membership tiers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={customerTierData}
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {customerTierData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={CUSTOMER_COLORS[index % CUSTOMER_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Weekly Orders</CardTitle>
                <CardDescription>Number of orders received each day this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyOrders}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value} orders`, "Count"]} />
                      <Bar dataKey="orders" fill="#8884d8" radius={[4, 4, 0, 0]} />
                    </BarChart>
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
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{order.product}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.customer} • {order.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-bold">{order.amount}</p>
                      <Badge variant={
                        order.status === "delivered" ? "default" :
                        order.status === "processing" ? "outline" : "secondary"
                      }>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
              <CardDescription>Detailed revenue analysis over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      name="Revenue"
                      stroke="#8884d8"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { source: "Direct", percentage: 45 },
                  { source: "Search", percentage: 30 },
                  { source: "Social", percentage: 15 },
                  { source: "Referral", percentage: 10 },
                ].map((source) => (
                  <div key={source.source} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{source.source}</span>
                      <span className="text-muted-foreground">{source.percentage}%</span>
                    </div>
                    <Progress value={source.percentage} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Acquisition</CardTitle>
              <CardDescription>New users over the last month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { date: "Week 1", users: 120 },
                    { date: "Week 2", users: 150 },
                    { date: "Week 3", users: 180 },
                    { date: "Week 4", users: 220 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} users`, "New Users"]} />
                    <Bar dataKey="users" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { 
                title: "Sales Report", 
                description: "Complete sales analysis", 
                icon: DollarSign,
                date: "Last generated: Yesterday"
              },
              { 
                title: "Inventory Report", 
                description: "Stock levels and projections", 
                icon: Package,
                date: "Last generated: 3 days ago"
              },
              { 
                title: "Customer Report", 
                description: "Customer behavior analysis", 
                icon: Users,
                date: "Last generated: Last week"
              },
            ].map((report, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{report.title}</CardTitle>
                    <report.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground mb-4">{report.date}</div>
                  <div className="flex gap-2">
                    <Button size="sm">Download PDF</Button>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Reports scheduled to be generated automatically</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Weekly Sales Report", frequency: "Every Monday", recipients: "Admin Team", status: "active" },
                  { name: "Monthly Financial Summary", frequency: "1st of each month", recipients: "Finance Department", status: "active" },
                  { name: "Quarterly Performance Review", frequency: "End of quarter", recipients: "Executive Team", status: "paused" },
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {report.frequency} • {report.recipients}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={report.status === "active" ? "default" : "secondary"}>
                        {report.status}
                      </Badge>
                      <Button size="sm" variant="ghost">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="goals" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Targets</CardTitle>
                <CardDescription>Progress towards this month's goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {goalData.map((goal) => (
                  <div key={goal.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="font-medium">{goal.name}</span>
                        <div className="text-sm text-muted-foreground">
                          {goal.current} / {goal.target}
                        </div>
                      </div>
                      <span className="text-sm font-medium">
                        {Math.round((goal.current / goal.target) * 100)}%
                      </span>
                    </div>
                    <Progress value={(goal.current / goal.target) * 100} />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Performance Indicators</CardTitle>
                <CardDescription>Key metrics compared to targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { name: "Conversion Rate", value: "3.6%", target: "3.0%", status: "above" },
                    { name: "Average Order Value", value: "$86", target: "$75", status: "above" },
                    { name: "Customer Retention", value: "68%", target: "70%", status: "below" },
                    { name: "Cart Abandonment", value: "24%", target: "20%", status: "below" },
                  ].map((kpi) => (
                    <div key={kpi.name} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{kpi.name}</div>
                        <div className="text-sm text-muted-foreground">Target: {kpi.target}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{kpi.value}</div>
                        <div className={`text-xs ${kpi.status === "above" ? "text-green-500" : "text-red-500"}`}>
                          {kpi.status === "above" ? (
                            <span className="flex items-center gap-1">
                              <ArrowUpRight className="h-3 w-3" /> Above Target
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <ArrowDownRight className="h-3 w-3" /> Below Target
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Objectives</CardTitle>
              <CardDescription>Business objectives for current quarter</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Launch new product line", deadline: "End of Q3", status: "In Progress", progress: 65 },
                  { name: "Implement customer loyalty program", deadline: "Mid Q3", status: "In Progress", progress: 40 },
                  { name: "Reduce shipping costs by 10%", deadline: "End of Q3", status: "Not Started", progress: 0 },
                  { name: "Expand to international markets", deadline: "Q4", status: "Planning", progress: 15 },
                ].map((objective, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{objective.name}</h4>
                        <p className="text-sm text-muted-foreground">Due: {objective.deadline}</p>
                      </div>
                      <Badge variant={
                        objective.status === "Completed" ? "default" :
                        objective.status === "In Progress" ? "secondary" : "outline"
                      }>
                        {objective.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{objective.progress}%</span>
                      </div>
                      <Progress value={objective.progress} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
