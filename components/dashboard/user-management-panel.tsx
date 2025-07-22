"use client";

import { useState } from "react";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface User {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  role: "admin" | "editor" | "viewer";
  lastLogin: string;
}

const dummyUsers: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "active",
    role: "admin",
    lastLogin: "2024-07-20",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    status: "active",
    role: "editor",
    lastLogin: "2024-07-19",
  },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    status: "inactive",
    role: "viewer",
    lastLogin: "2024-06-15",
  },
  {
    id: "4",
    name: "Diana Prince",
    email: "diana@example.com",
    status: "active",
    role: "viewer",
    lastLogin: "2024-07-21",
  },
  {
    id: "5",
    name: "Eve Adams",
    email: "eve@example.com",
    status: "active",
    role: "admin",
    lastLogin: "2024-07-22",
  },
  {
    id: "6",
    name: "Frank White",
    email: "frank@example.com",
    status: "inactive",
    role: "editor",
    lastLogin: "2024-05-01",
  },
];

export function UserManagementPanel() {
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = dummyUsers.filter((user) => {
    const matchesFilter = filter === "all" || user.status === filter;
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className='flex-1 flex flex-col p-6 overflow-auto'>
      <Card className='bg-gray-950 border border-gray-800 text-white flex-1 flex flex-col'>
        <CardHeader className='border-b border-gray-800 pb-4'>
          <CardTitle className='text-terminal-green text-2xl'>
            User List
          </CardTitle>
          <div className='flex items-center gap-4 mt-4'>
            <div className='relative flex-1'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              <input
                type='text'
                placeholder='Search users...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none transition-colors'
              />
            </div>
            <div className='flex gap-2'>
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size='sm'
                onClick={() => setFilter("all")}
                className={
                  filter === "all"
                    ? "bg-terminal-green text-black hover:bg-terminal-green/80"
                    : "border-gray-700 text-gray-400 hover:bg-gray-900"
                }
              >
                All
              </Button>
              <Button
                variant={filter === "active" ? "default" : "outline"}
                size='sm'
                onClick={() => setFilter("active")}
                className={
                  filter === "active"
                    ? "bg-terminal-green text-black hover:bg-terminal-green/80"
                    : "border-gray-700 text-gray-400 hover:bg-gray-900"
                }
              >
                Active
              </Button>
              <Button
                variant={filter === "inactive" ? "default" : "outline"}
                size='sm'
                onClick={() => setFilter("inactive")}
                className={
                  filter === "inactive"
                    ? "bg-terminal-green text-black hover:bg-terminal-green/80"
                    : "border-gray-700 text-gray-400 hover:bg-gray-900"
                }
              >
                Inactive
              </Button>
            </div>
            <Button className='bg-magenta text-white hover:bg-magenta/80'>
              <Plus className='w-4 h-4 mr-2' /> Add New User
            </Button>
          </div>
        </CardHeader>
        <CardContent className='p-0 flex-1 overflow-auto'>
          <div className='grid grid-cols-[1fr_1.5fr_0.8fr_0.8fr_0.8fr_0.5fr] gap-4 p-4 border-b border-gray-800 text-gray-400 font-semibold text-sm sticky top-0 bg-gray-950 z-10'>
            <span>Name</span>
            <span>Email</span>
            <span>Status</span>
            <span>Role</span>
            <span>Last Login</span>
            <span>Actions</span>
          </div>
          <div className='divide-y divide-gray-900'>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className='grid grid-cols-[1fr_1.5fr_0.8fr_0.8fr_0.8fr_0.5fr] gap-4 p-4 hover:bg-gray-900 transition-colors'
                >
                  <span className='font-medium text-white'>{user.name}</span>
                  <span className='text-gray-300 truncate'>{user.email}</span>
                  <span
                    className={`font-semibold ${
                      user.status === "active"
                        ? "text-terminal-green"
                        : "text-yellow-500"
                    }`}
                  >
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                  <span className='text-gray-300'>
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </span>
                  <span className='text-gray-300'>{user.lastLogin}</span>
                  <div className='flex gap-2'>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='text-gray-400 hover:text-terminal-green'
                    >
                      <Edit className='w-4 h-4' />
                      <span className='sr-only'>Edit</span>
                    </Button>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='text-gray-400 hover:text-red-500'
                    >
                      <Trash2 className='w-4 h-4' />
                      <span className='sr-only'>Delete</span>
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className='p-4 text-center text-gray-400'>
                No users found matching your criteria.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
