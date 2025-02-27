
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
  Plus, 
  Filter, 
  Search, 
  ArrowUpDown, 
  MoreHorizontal,
  Edit,
  Copy,
  Archive,
  Trash2,
  Download,
  Import,
  Tag,
  RefreshCw,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Legend 
} from 'recharts';
import { ProductForm } from "../components/ProductForm";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    stock: 50,
    category: "Phones",
    brand: "Apple",
    status: "In Stock",
    rating: 4.8,
    reviews: 245,
    sales: 189,
    featured: true,
    lastUpdated: "2 days ago",
    image: "https://placehold.co/100x100"
  },
  {
    id: 2,
    name: "MacBook Pro 16",
    price: 2499,
    stock: 25,
    category: "Laptops",
    brand: "Apple",
    status: "Low Stock",
    rating: 4.9,
    reviews: 189,
    sales: 145,
    featured: true,
    lastUpdated: "1 week ago",
    image: "https://placehold.co/100x100"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 399,
    stock: 100,
    category: "Headphones",
    brand: "Sony",
    status: "In Stock",
    rating: 4.7,
    reviews: 312,
    sales: 210,
    featured: false,
    lastUpdated: "3 days ago",
    image: "https://placehold.co/100x100"
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    price: 899,
    stock: 75,
    category: "Phones",
    brand: "Samsung",
    status: "In Stock",
    rating: 4.6,
    reviews: 178,
    sales: 132,
    featured: false,
    lastUpdated: "1 day ago",
    image: "https://placehold.co/100x100"
  },
  {
    id: 5,
    name: "LG OLED TV 65\"",
    price: 2199,
    stock: 15,
    category: "TVs",
    brand: "LG",
    status: "Low Stock",
    rating: 4.8,
    reviews: 95,
    sales: 42,
    featured: true,
    lastUpdated: "5 days ago",
    image: "https://placehold.co/100x100"
  },
];

const stockData = [
  { category: 'Phones', stock: 150 },
  { category: 'Laptops', stock: 80 },
  { category: 'TVs', stock: 60 },
  { category: 'Headphones', stock: 200 },
];

const salesTrendData = [
  { month: 'Jan', phones: 40, laptops: 24, headphones: 28, tvs: 18 },
  { month: 'Feb', phones: 30, laptops: 28, headphones: 25, tvs: 15 },
  { month: 'Mar', phones: 45, laptops: 30, headphones: 32, tvs: 22 },
  { month: 'Apr', phones: 50, laptops: 35, headphones: 30, tvs: 25 },
  { month: 'May', phones: 38, laptops: 32, headphones: 28, tvs: 20 },
  { month: 'Jun', phones: 42, laptops: 36, headphones: 35, tvs: 22 },
];

const priceRangeData = [
  { name: '< $250', value: 35 },
  { name: '$250-$500', value: 25 },
  { name: '$500-$1000', value: 20 },
  { name: '$1000+', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ProductsPage() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const toggleProductSelection = (productId: number) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };
  
  const selectAllProducts = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map(product => product.id));
    }
  };
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">Manage your product inventory</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="gap-1">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button variant="outline" className="gap-1">
            <Import className="h-4 w-4" /> Import
          </Button>
          <Button onClick={() => setShowAddProduct(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{products.length}</div>
                <p className="text-xs text-muted-foreground">+3 added this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {products.filter(p => p.status === "Low Stock").length}
                </div>
                <p className="text-xs text-muted-foreground">Needs attention</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Featured Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {products.filter(p => p.featured).length}
                </div>
                <p className="text-xs text-muted-foreground">Showing on homepage</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Top Rated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {products.filter(p => p.rating >= 4.8).length}
                </div>
                <p className="text-xs text-muted-foreground">Products with 4.8+ rating</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Stock Levels by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={stockData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value} units`, "Stock"]} />
                      <Bar dataKey="stock" fill="#8884d8" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Price Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={priceRangeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {priceRangeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Sales Trends</CardTitle>
              <CardDescription>Monthly sales by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="phones" stroke="#8884d8" name="Phones" strokeWidth={2} />
                    <Line type="monotone" dataKey="laptops" stroke="#82ca9d" name="Laptops" strokeWidth={2} />
                    <Line type="monotone" dataKey="headphones" stroke="#ffc658" name="Headphones" strokeWidth={2} />
                    <Line type="monotone" dataKey="tvs" stroke="#ff8042" name="TVs" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
                <CardDescription>Products with the highest sales volume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[...products].sort((a, b) => b.sales - a.sales).slice(0, 5).map((product, index) => (
                    <div key={product.id} className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center font-bold text-lg rounded-full bg-primary/10 text-primary">
                        {index + 1}
                      </div>
                      <div className="flex-grow space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold">{product.name}</div>
                          <div className="font-bold">{product.sales} sold</div>
                        </div>
                        <Progress value={(product.sales / 210) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Metrics</CardTitle>
                <CardDescription>Product view to purchase conversion rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {products.slice(0, 5).map((product) => {
                    const conversionRate = Math.floor(Math.random() * 25) + 5; // Random number between 5-30
                    return (
                      <div key={product.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{product.name}</div>
                          <div className="font-semibold">{conversionRate}%</div>
                        </div>
                        <Progress value={conversionRate} className="h-2" />
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div>Views: {product.reviews * 10}</div>
                          <div>Purchases: {product.sales}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Health</CardTitle>
              <CardDescription>Status of your current inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 border rounded-lg space-y-2 text-center">
                  <div className="text-3xl font-bold text-green-500">
                    {products.filter(p => p.status === "In Stock").length}
                  </div>
                  <div className="text-sm font-medium">In Stock</div>
                </div>
                <div className="p-4 border rounded-lg space-y-2 text-center">
                  <div className="text-3xl font-bold text-amber-500">
                    {products.filter(p => p.status === "Low Stock").length}
                  </div>
                  <div className="text-sm font-medium">Low Stock</div>
                </div>
                <div className="p-4 border rounded-lg space-y-2 text-center">
                  <div className="text-3xl font-bold text-red-500">0</div>
                  <div className="text-sm font-medium">Out of Stock</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center gap-2 sm:justify-between">
              <div>
                <CardTitle>Stock Replenishment</CardTitle>
                <CardDescription>Products that need to be restocked</CardDescription>
              </div>
              <Button size="sm">Order Inventory</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.filter(p => p.status === "Low Stock").map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {product.category} • SKU: {product.id.toString().padStart(6, '0')}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                        {product.stock} left
                      </Badge>
                      <Button size="sm" variant="outline">Restock</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search products..." 
                className="pl-8" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-between md:justify-end">
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="phones">Phones</SelectItem>
                <SelectItem value="laptops">Laptops</SelectItem>
                <SelectItem value="headphones">Headphones</SelectItem>
                <SelectItem value="tvs">TVs</SelectItem>
              </SelectContent>
            </Select>
            
            {selectedProducts.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Bulk Actions ({selectedProducts.length})
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Archive className="mr-2 h-4 w-4" /> Archive Selected
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Tag className="mr-2 h-4 w-4" /> Change Category
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" /> Delete Selected
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox 
                    checked={selectedProducts.length === products.length && products.length > 0}
                    onCheckedChange={selectAllProducts}
                    aria-label="Select all products"
                  />
                </TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Price 
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Stock 
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={10} className="text-center py-10">
                    <div className="flex flex-col items-center gap-2">
                      <Search className="h-10 w-10 text-muted-foreground opacity-50" />
                      <div className="font-medium">No products found</div>
                      <div className="text-sm text-muted-foreground">
                        Try adjusting your search or filter to find what you're looking for.
                      </div>
                      <Button variant="outline" onClick={() => setSearchTerm("")} className="mt-2">
                        <RefreshCw className="mr-2 h-4 w-4" /> Reset filters
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Checkbox 
                        checked={selectedProducts.includes(product.id)}
                        onCheckedChange={() => toggleProductSelection(product.id)}
                        aria-label={`Select ${product.name}`}
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-10 h-10 rounded-md object-cover"
                        />
                        <div>
                          {product.name}
                          <div className="text-xs text-muted-foreground">
                            Updated {product.lastUpdated}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{product.brand}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge variant={product.status === "In Stock" ? "default" : "secondary"}>
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {product.featured ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-muted-foreground/30" />
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" /> Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Tag className="mr-2 h-4 w-4" /> Change Category
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
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

      <Dialog open={showAddProduct} onOpenChange={setShowAddProduct}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <ProductForm onClose={() => setShowAddProduct(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
