"use client";

import type React from "react";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Package2, Bell, User, Search, ArrowUp, ArrowDown, Users, DollarSign, ShoppingCart, Activity } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", category: "", message: "" });
  };

  // Sample data for pie charts
  const data1 = [
    { name: "Category A", value: 40 },
    { name: "Category B", value: 30 },
    { name: "Category C", value: 30 },
  ];

  const data2 = [
    { name: "Group 1", value: 25 },
    { name: "Group 2", value: 45 },
    { name: "Group 3", value: 30 },
  ];

  const data3 = [
    { name: "Type X", value: 35 },
    { name: "Type Y", value: 40 },
    { name: "Type Z", value: 25 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Dashboard</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Section 1: Landing/Welcome */}
        <section id="welcome" className="bg-gradient-to-b from-muted/50 to-background py-12 md:py-16 lg:py-20">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to Your Dashboard</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Monitor your key metrics, analyze data with interactive charts, and manage your information all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Stats */}
        <section id="stats" className="py-12 md:py-16">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Key Statistics</h2>
            <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2,350</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                    +18.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                    +12.2% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                    -2.5% from last hour
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Three Pie Charts */}
        <section id="charts" className="py-12 md:py-16 bg-muted/30">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Data Visualization</h2>
            <div className="grid w-full gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Sources</CardTitle>
                  <CardDescription>Distribution by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ChartContainer
                      config={{
                        categoryA: {
                          label: "Category A",
                          color: COLORS[0],
                        },
                        categoryB: {
                          label: "Category B",
                          color: COLORS[1],
                        },
                        categoryC: {
                          label: "Category C",
                          color: COLORS[2],
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Pie
                            data={data1}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {data1.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Demographics</CardTitle>
                  <CardDescription>Distribution by group</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ChartContainer
                      config={{
                        group1: {
                          label: "Group 1",
                          color: COLORS[0],
                        },
                        group2: {
                          label: "Group 2",
                          color: COLORS[1],
                        },
                        group3: {
                          label: "Group 3",
                          color: COLORS[2],
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Pie
                            data={data2}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {data2.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product Distribution</CardTitle>
                  <CardDescription>Distribution by type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ChartContainer
                      config={{
                        typeX: {
                          label: "Type X",
                          color: COLORS[0],
                        },
                        typeY: {
                          label: "Type Y",
                          color: COLORS[1],
                        },
                        typeZ: {
                          label: "Type Z",
                          color: COLORS[2],
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Pie
                            data={data3}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {data3.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4: Form */}
        <section id="form" className="py-12 md:py-16">
          <div className="w-full px-4 md:px-6">
            <div className="w-full mx-auto max-w-md">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
                <p className="text-muted-foreground mt-2">
                  Have questions or feedback? Fill out the form below and we'll get back to you.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid w-full gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="grid w-full gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="grid w-full gap-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid w-full gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
