"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Users, Upload, Search, Home } from "lucide-react";

export default function SmartDMS() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">SmartDMS</h1>
        </div>
        <nav className="mt-4">
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("dashboard")}
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "students" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("students")}
          >
            <Users className="mr-2 h-4 w-4" />
            Students
          </Button>
          <Button
            variant={activeTab === "upload" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("upload")}
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
          <Button
            variant={activeTab === "search" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("search")}
          >
            <Search className="mr-2 h-4 w-4" />
            Search Documents
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Tabs value={activeTab} className="w-full">
          <TabsContent value="dashboard">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,234</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Documents Processed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5,678</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Uploads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">42</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students">
            <h2 className="text-2xl font-bold mb-4">Student Management</h2>
            <Card>
              <CardContent className="p-4">
                <Input placeholder="Search students..." className="mb-4" />
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">ID</th>
                      <th className="text-left">Name</th>
                      <th className="text-left">Enrollment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>John Doe</td>
                      <td>Enrolled</td>
                    </tr>
                    <tr>
                      <td>002</td>
                      <td>Jane Smith</td>
                      <td>Graduated</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload">
            <h2 className="text-2xl font-bold mb-4">Upload Document</h2>
            <Card>
              <CardContent className="p-4">
                <Input type="file" className="mb-4" />
                <Button>Upload and Process</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search">
            <h2 className="text-2xl font-bold mb-4">Search Documents</h2>
            <Card>
              <CardContent className="p-4">
                <Input
                  placeholder="Search by Student ID or Document Category"
                  className="mb-4"
                />
                <Button>Search</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
