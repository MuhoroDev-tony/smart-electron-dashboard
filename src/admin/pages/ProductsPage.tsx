
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
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ProductForm } from "../components/ProductForm";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

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
  },
];

const stockData = [
  { category: 'Phones', stock: 150 },
  { category: 'Laptops', stock: 80 },
  { category: 'TVs', stock: 60 },
  { category: 'Headphones', stock: 200 },
];

export default function ProductsPage() {
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">Manage your product inventory</p>
        </div>
        <Button onClick={() => setShowAddProduct(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Stock Levels by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="stock" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Reviews</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.rating}/5</TableCell>
                <TableCell>{product.reviews}</TableCell>
                <TableCell>{product.status}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={showAddProduct} onOpenChange={setShowAddProduct}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <ProductForm onClose={() => setShowAddProduct(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
