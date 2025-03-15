
import { useState } from "react";
import { 
  CheckCircle2, 
  X, 
  Shield, 
  Clock, 
  Mail, 
  UserCog,
  Store,
  CreditCard,
  Archive,
  Building,
  Smartphone
} from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const SettingsPage = () => {
  const { theme } = useTheme();
  
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    browser: false,
    weekly: true,
    promotional: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Settings saved successfully");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex sm:grid-cols-none">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="store">Store</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure your account preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="admin@example.com" />
                <p className="text-sm text-muted-foreground">
                  This email will be used for notifications and account recovery
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Admin User" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (123) 456-7890" />
              </div>

              <Separator />
              
              <div>
                <h3 className="mb-4 text-lg font-medium">Appearance</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="light-mode">Light Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Use light theme for the dashboard
                    </p>
                  </div>
                  <Switch 
                    id="light-mode" 
                    checked={theme === "light"}
                    disabled
                  />
                </div>
              </div>

              <Separator />
              
              <div>
                <h3 className="mb-4 text-lg font-medium">Security</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch id="two-factor" defaultChecked={false} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="sessions">Active Sessions</Label>
                      <p className="text-sm text-muted-foreground">
                        Manage your active sessions
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Shield className="h-4 w-4 mr-2" />
                      Manage
                    </Button>
                  </div>
                
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <p className="text-sm text-muted-foreground">
                        Change your password
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <UserCog className="h-4 w-4 mr-2" />
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" className="mr-2">Cancel</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="store" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Store Information</CardTitle>
              <CardDescription>
                Configure your store details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="store-name">Store Name</Label>
                <Input id="store-name" defaultValue="ShopCart" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="store-url">Store URL</Label>
                <Input id="store-url" defaultValue="https://shopcart.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="store-description">Store Description</Label>
                <Input id="store-description" defaultValue="Modern E-commerce Platform" />
              </div>

              <Separator />
              
              <div>
                <h3 className="mb-4 text-lg font-medium">Business Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="business-email">Business Email</Label>
                    <Input id="business-email" defaultValue="contact@shopcart.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-address">Business Address</Label>
                    <Input id="business-address" defaultValue="123 Commerce St, Business City, 12345" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-phone">Business Phone</Label>
                    <Input id="business-phone" defaultValue="+1 (987) 654-3210" />
                  </div>
                </div>
              </div>

              <Separator />
              
              <div>
                <h3 className="mb-4 text-lg font-medium">Payment Settings</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="payment-provider">Payment Provider</Label>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="mr-2">Stripe</Badge>
                        <Badge variant="outline">PayPal</Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="tax-settings">Tax Settings</Label>
                      <p className="text-sm text-muted-foreground">
                        Configure tax rates and regions
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Building className="h-4 w-4 mr-2" />
                      Manage
                    </Button>
                  </div>
                
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="shipping">Shipping Options</Label>
                      <p className="text-sm text-muted-foreground">
                        Configure shipping methods and rates
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Store className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" className="mr-2">Cancel</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how you want to receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium">Notification Channels</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch 
                      id="email-notifications" 
                      checked={notificationSettings.email}
                      onCheckedChange={(checked) => 
                        setNotificationSettings(prev => ({ ...prev, email: checked }))
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="browser-notifications">Browser Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications in your browser
                      </p>
                    </div>
                    <Switch 
                      id="browser-notifications" 
                      checked={notificationSettings.browser}
                      onCheckedChange={(checked) => 
                        setNotificationSettings(prev => ({ ...prev, browser: checked }))
                      }
                    />
                  </div>
                </div>
              </div>

              <Separator />
              
              <div>
                <h3 className="mb-4 text-lg font-medium">Notification Types</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="order-notifications">Order Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications about orders and shipments
                      </p>
                    </div>
                    <Switch id="order-notifications" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="product-notifications">Product Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications about product changes
                      </p>
                    </div>
                    <Switch id="product-notifications" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="inventory-notifications">Inventory Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications about low stock items
                      </p>
                    </div>
                    <Switch id="inventory-notifications" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="weekly-digest">Weekly Digest</Label>
                      <p className="text-sm text-muted-foreground">
                        Weekly summary of store performance
                      </p>
                    </div>
                    <Switch 
                      id="weekly-digest" 
                      checked={notificationSettings.weekly}
                      onCheckedChange={(checked) => 
                        setNotificationSettings(prev => ({ ...prev, weekly: checked }))
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="promotional">Promotional Emails</Label>
                      <p className="text-sm text-muted-foreground">
                        Emails about marketing and promotions
                      </p>
                    </div>
                    <Switch 
                      id="promotional" 
                      checked={notificationSettings.promotional}
                      onCheckedChange={(checked) => 
                        setNotificationSettings(prev => ({ ...prev, promotional: checked }))
                      }
                    />
                  </div>
                </div>
              </div>

              <Separator />
              
              <div>
                <h3 className="mb-4 text-lg font-medium">Mobile Notifications</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="mobile-app">Mobile App Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Configure notifications for the mobile app
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" className="mr-2">
                <X className="h-4 w-4 mr-2" />
                Reset to Default
              </Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
