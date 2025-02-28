
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { 
  Filter, 
  Mail, 
  Phone, 
  Search, 
  User, 
  UserPlus, 
  MoreHorizontal, 
  UserCog, 
  UserX, 
  Clock, 
  ShoppingBag, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download,
  Users as UsersIcon,
  UserCheck,
  Calendar,
  MapPin
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    role: "Customer",
    status: "Active",
    lastActive: "2 hours ago",
    joinDate: "Jan 15, 2024",
    ordersCount: 12,
    totalSpent: 1250,
    location: "New York, USA",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=random",
    verified: true,
    notes: "Frequent buyer, prefers express shipping",
    tags: ["loyal", "premium"]
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 234 567 891",
    role: "Admin",
    status: "Active",
    lastActive: "5 mins ago",
    joinDate: "Dec 10, 2023",
    ordersCount: 8,
    totalSpent: 890,
    location: "Los Angeles, USA",
    avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=random",
    verified: true,
    notes: "Team lead for web development",
    tags: ["staff", "management"]
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "+1 234 567 892",
    role: "Customer",
    status: "Inactive",
    lastActive: "2 days ago",
    joinDate: "Feb 1, 2024",
    ordersCount: 3,
    totalSpent: 350,
    location: "Chicago, USA",
    avatar: "https://ui-avatars.com/api/?name=Bob+Johnson&background=random",
    verified: false,
    notes: "Had issues with last order #1242",
    tags: ["returns", "support"]
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    phone: "+1 234 567 893",
    role: "Staff",
    status: "Active",
    lastActive: "1 hour ago",
    joinDate: "Nov 5, 2023",
    ordersCount: 0,
    totalSpent: 0,
    location: "Seattle, USA",
    avatar: "https://ui-avatars.com/api/?name=Alice+Brown&background=random",
    verified: true,
    notes: "Customer support representative",
    tags: ["staff", "support"]
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    phone: "+1 234 567 894",
    role: "Customer",
    status: "Active",
    lastActive: "4 hours ago",
    joinDate: "Mar 10, 2024",
    ordersCount: 5,
    totalSpent: 780,
    location: "Miami, USA",
    avatar: "https://ui-avatars.com/api/?name=David+Wilson&background=random",
    verified: true,
    notes: "Interested in electronics and gadgets",
    tags: ["new", "tech-savvy"]
  },
];

const usersByRole = [
  { name: "Customers", value: 2543 },
  { name: "Admins", value: 12 },
  { name: "Staff", value: 45 },
];

const userSignupData = [
  { month: 'Jan', signups: 120 },
  { month: 'Feb', signups: 145 },
  { month: 'Mar', signups: 178 },
  { month: 'Apr', signups: 210 },
  { month: 'May', signups: 190 },
  { month: 'Jun', signups: 220 },
];

const userActivityData = [
  { day: 'Mon', active: 1542 },
  { day: 'Tue', active: 1458 },
  { day: 'Wed', active: 1698 },
  { day: 'Thu', active: 1725 },
  { day: 'Fri', active: 1820 },
  { day: 'Sat', active: 1880 },
  { day: 'Sun', active: 1795 },
];

const userLocationData = [
  { country: 'USA', users: 1250 },
  { country: 'UK', users: 580 },
  { country: 'Canada', users: 350 },
  { country: 'Australia', users: 280 },
  { country: 'Germany', users: 240 },
  { country: 'Others', users: 450 },
];

const COLORS = ['#3b82f6', '#06b6d4', '#4f46e5', '#8b5cf6', '#d946ef'];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleUserSelection = (userId: number) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const selectAllUsers = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(user => user.id));
    }
  };

  const openUserDetails = (user: typeof users[0]) => {
    setSelectedUser(user);
    setShowUserDetails(true);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || user.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesRole = roleFilter === 'all' || user.role.toLowerCase() === roleFilter.toLowerCase();
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
        <p className="text-muted-foreground">Manage user accounts and permissions</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,600</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">+180 from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,892</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <span>73% of total users</span>
                  <Progress value={73} className="h-1 w-16 inline-block" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>New Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">+28% this month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">432</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <span>16% of total users</span>
                  <Progress value={16} className="h-1 w-16 inline-block" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Users by Role</CardTitle>
                <CardDescription>Distribution of users by role type</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="w-full max-w-xs h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={usersByRole}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {usersByRole.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>New User Signups</CardTitle>
                <CardDescription>Monthly user registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={userSignupData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value} users`, 'New signups']} />
                      <Bar dataKey="signups" fill="#8884d8" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Daily Active Users</CardTitle>
                <CardDescription>Number of active users per day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={userActivityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value} users`, 'Active']} />
                      <Line 
                        type="monotone" 
                        dataKey="active" 
                        stroke="#8884d8" 
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
                <CardTitle>User Geography</CardTitle>
                <CardDescription>Geographic distribution of users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={userLocationData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" />
                      <YAxis dataKey="country" type="category" width={80} />
                      <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                      <Bar dataKey="users" fill="#8884d8" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>User Engagement Metrics</CardTitle>
              <CardDescription>Key performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Average Session",
                    value: "8m 42s",
                    change: "+12%",
                    trend: "up",
                  },
                  {
                    title: "Bounce Rate",
                    value: "24.8%",
                    change: "-3%",
                    trend: "down",
                  },
                  {
                    title: "Conversion Rate",
                    value: "3.2%",
                    change: "+0.6%",
                    trend: "up",
                  },
                  {
                    title: "Return Rate",
                    value: "42%",
                    change: "+5%",
                    trend: "up",
                  },
                ].map((metric, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">{metric.title}</div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="flex items-center text-xs">
                      {metric.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                      )}
                      <span className={metric.trend === "up" ? "text-green-500" : "text-red-500"}>
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
              <CardTitle>User Retention</CardTitle>
              <CardDescription>Cohort analysis of user retention over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { month: "Jan 2024", initial: 100, retained: 78 },
                  { month: "Feb 2024", initial: 120, retained: 88 },
                  { month: "Mar 2024", initial: 145, retained: 95 },
                ].map((cohort, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{cohort.month} Cohort</div>
                      <div className="font-medium">
                        {Math.round((cohort.retained / cohort.initial) * 100)}%
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {cohort.retained} of {cohort.initial} users retained
                    </div>
                    <Progress value={(cohort.retained / cohort.initial) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="management" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Growth Targets</CardTitle>
              <CardDescription>Progress towards user acquisition goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { name: "Total Users", current: 2600, target: 3000 },
                  { name: "Active Users", current: 1892, target: 2200 },
                  { name: "Premium Conversions", current: 432, target: 600 },
                ].map((goal, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{goal.name}</div>
                      <div className="text-sm">
                        {goal.current} / {goal.target}
                        <span className="text-xs text-muted-foreground ml-2">
                          ({Math.round((goal.current / goal.target) * 100)}%)
                        </span>
                      </div>
                    </div>
                    <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent User Activity</CardTitle>
              <CardDescription>Latest actions from users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    user: "John Doe", 
                    action: "Placed an order", 
                    time: "25 minutes ago",
                    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=random",
                  },
                  { 
                    user: "Jane Smith", 
                    action: "Updated profile information", 
                    time: "2 hours ago",
                    avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=random",
                  },
                  { 
                    user: "Bob Johnson", 
                    action: "Left a product review", 
                    time: "3 hours ago",
                    avatar: "https://ui-avatars.com/api/?name=Bob+Johnson&background=random",
                  },
                  { 
                    user: "Alice Brown", 
                    action: "Logged in", 
                    time: "5 hours ago",
                    avatar: "https://ui-avatars.com/api/?name=Alice+Brown&background=random",
                  },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg border">
                    <img 
                      src={activity.avatar} 
                      alt={activity.user} 
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-grow">
                      <div className="font-medium">{activity.user}</div>
                      <div className="text-sm text-muted-foreground">{activity.action}</div>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.time}
                    </div>
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
                placeholder="Search users..." 
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="customer">Customer</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex flex-wrap w-full sm:w-auto gap-2 sm:gap-4 justify-between sm:justify-end">
            {selectedUsers.length > 0 && (
              <Button variant="outline" className="gap-1">
                <Download className="h-4 w-4" /> Export ({selectedUsers.length})
              </Button>
            )}
            <Button onClick={() => setShowAddUser(true)}>
              <UserPlus className="mr-2 h-4 w-4" /> Add User
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox 
                    checked={selectedUsers.length === users.length && users.length > 0}
                    onCheckedChange={selectAllUsers}
                    aria-label="Select all users"
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="h-24 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <UsersIcon className="h-8 w-8 text-muted-foreground/60" />
                      <div className="font-medium">No users found</div>
                      <div className="text-sm text-muted-foreground">
                        Try adjusting your search or filters
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Checkbox 
                        checked={selectedUsers.includes(user.id)}
                        onCheckedChange={() => toggleUserSelection(user.id)}
                        aria-label={`Select ${user.name}`}
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="w-8 h-8 rounded-full" 
                        />
                        <div>
                          {user.name}
                          {user.verified && (
                            <span className="ml-1 text-blue-500 text-xs">✓</span>
                          )}
                          <div className="text-sm text-muted-foreground">
                            Last active: {user.lastActive}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3" />
                          {user.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        user.role === "Admin" ? "default" : 
                        user.role === "Staff" ? "secondary" : "outline"
                      }>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell>{user.ordersCount}</TableCell>
                    <TableCell>${user.totalSpent}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => openUserDetails(user)}>
                            <User className="h-4 w-4 mr-2" /> View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserCog className="h-4 w-4 mr-2" /> Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ShoppingBag className="h-4 w-4 mr-2" /> View Orders
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <UserX className="h-4 w-4 mr-2" /> Deactivate
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Add User Dialog */}
      <Dialog open={showAddUser} onOpenChange={setShowAddUser}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Create a new user account in the system.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" placeholder="Full name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" placeholder="Email address" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input id="phone" placeholder="Phone number" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer">Customer</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddUser(false)}>
              Cancel
            </Button>
            <Button>Add User</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* User Details Dialog */}
      <Dialog open={showUserDetails} onOpenChange={setShowUserDetails}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>User Profile</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="grid gap-6 py-4">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col items-center gap-3">
                  <img 
                    src={selectedUser.avatar} 
                    alt={selectedUser.name} 
                    className="w-24 h-24 rounded-full"
                  />
                  <Badge variant={selectedUser.status === "Active" ? "default" : "secondary"}>
                    {selectedUser.status}
                  </Badge>
                </div>
                
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-1">
                      {selectedUser.name}
                      {selectedUser.verified && (
                        <UserCheck className="h-4 w-4 text-blue-500" />
                      )}
                    </h3>
                    <div className="text-muted-foreground">{selectedUser.role}</div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedUser.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedUser.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedUser.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Joined {selectedUser.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{selectedUser.ordersCount}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Total Spent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${selectedUser.totalSpent}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Last Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-md font-medium">{selectedUser.lastActive}</div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-2">
                <div className="font-medium">Notes</div>
                <div className="bg-muted p-3 rounded-md text-sm">
                  {selectedUser.notes || "No notes available"}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="font-medium">Tags</div>
                <div className="flex flex-wrap gap-2">
                  {selectedUser.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
          <DialogFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setShowUserDetails(false)}>
              Close
            </Button>
            <Button>Edit Profile</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const Label = ({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className={`text-sm font-medium leading-none ${className || ''}`} {...props}>
      {children}
    </label>
  );
};
